import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@template/utilities";
import { betterAuth } from "better-auth";
import { db, subscription } from "@template/db";
import {
  checkout,
  polar,
  portal,
  usage,
  webhooks,
} from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { nextCookies } from "better-auth/next-js";

// Utility function to safely parse dates
function safeParseDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  return new Date(value);
}


const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});


export const serverAuth: any = betterAuth({
  trustedOrigins: [`${process.env.NEXT_PUBLIC_APP_URL}`],
  allowedDevOrigins: [`${process.env.NEXT_PUBLIC_APP_URL}`],
  cookieCache: {
    enabled: true,
    maxAge: 5 * 60, // Cache duration in seconds
  },
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  // socialProviders: {
  //   google: {
  //     clientId: env.GOOGLE_CLIENT_ID,
  //     clientSecret: env.GOOGLE_CLIENT_SECRET,
  //   },
  // },
  user: {
    modelName: "users",
    additionalFields: {
      allowedSavingData: {
        type: "boolean",
        required: false,
        defaultValue: false,
        fieldName: "allowedSavingData",
        returned: true,
      },
    },
  },
  account: {
    modelName: "accounts",
  },
  session: {
    modelName: "sessions",
  },
  verification: {
    modelName: "verifications",
  },
  advanced: {
    database: {
      generateId: false,
    },
    ipAddress: {
      ipAddressHeaders: ["cf-connecting-ip"],
    },
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId:
                process.env.NEXT_PUBLIC_STARTER_TIER ||
                (() => {
                  throw new Error(
                    "NEXT_PUBLIC_STARTER_TIER environment variable is required",
                  );
                })(),
              slug:
                process.env.NEXT_PUBLIC_STARTER_SLUG ||
                (() => {
                  throw new Error(
                    "NEXT_PUBLIC_STARTER_SLUG environment variable is required",
                  );
                })(),
            },
          ],
          successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/${process.env.POLAR_SUCCESS_URL}`,
          authenticatedUsersOnly: true,
        }),
        portal(),
        usage(),
        webhooks({
          secret:
            process.env.POLAR_WEBHOOK_SECRET ||
            (() => {
              throw new Error(
                "POLAR_WEBHOOK_SECRET environment variable is required",
              );
            })(),
          onPayload: async ({ data, type }) => {
            console.log("🔔 Webhook received:", type);
            console.log("📋 Full payload structure:", JSON.stringify(data, null, 2));
            
            if (
              type === "subscription.created" ||
              type === "subscription.active" ||
              type === "subscription.canceled" ||
              type === "subscription.revoked" ||
              type === "subscription.uncanceled" ||
              type === "subscription.updated"
            ) {
              console.log("🎯 Processing subscription webhook:", type);

              try {
                // STEP 1: Extract user ID from customer data with better validation
                console.log("👤 Customer data:", JSON.stringify(data.customer, null, 2));
                const userId = data.customer?.externalId || data.customer?.externalId;
                if (!userId) {
                  console.error("❌ No user ID found in customer data");
                  return;
                }
                console.log("✅ Found user ID:", userId);
                // STEP 2: Build subscription data
                const subscriptionData = {
                  id: data.id,
                  createdAt: new Date(data.createdAt),
                  modifiedAt: safeParseDate(data.modifiedAt),
                  amount: data.amount,
                  currency: data.currency,
                  recurringInterval: data.recurringInterval,
                  status: data.status,
                  currentPeriodStart:
                    safeParseDate(data.currentPeriodStart) || new Date(),
                  currentPeriodEnd:
                    safeParseDate(data.currentPeriodEnd) || new Date(),
                  cancelAtPeriodEnd: data.cancelAtPeriodEnd || false,
                  canceledAt: safeParseDate(data.canceledAt),
                  startedAt: safeParseDate(data.startedAt) || new Date(),
                  endsAt: safeParseDate(data.endsAt),
                  endedAt: safeParseDate(data.endedAt),
                  customerId: data.customerId,
                  productId: data.productId,
                  discountId: data.discountId || null,
                  checkoutId: data.checkoutId || "",
                  customerCancellationReason:
                    data.customerCancellationReason || null,
                  customerCancellationComment:
                    data.customerCancellationComment || null,
                  metadata: data.metadata
                    ? JSON.stringify(data.metadata)
                    : null,
                  customFieldData: data.customFieldData
                    ? JSON.stringify(data.customFieldData)
                    : null,
                  userId: userId,
                };

                console.log("💾 Final subscription data:", {
                  id: subscriptionData.id,
                  status: subscriptionData.status,
                  userId: subscriptionData.userId,
                  amount: subscriptionData.amount,
                });

                // STEP 3: Use Drizzle's onConflictDoUpdate for proper upsert
                await db
                  .insert(subscription)
                  .values(subscriptionData)
                  .onConflictDoUpdate({
                    target: subscription.id,
                    set: {
                      modifiedAt: subscriptionData.modifiedAt || new Date(),
                      amount: subscriptionData.amount,
                      currency: subscriptionData.currency,
                      recurringInterval: subscriptionData.recurringInterval,
                      status: subscriptionData.status,
                      currentPeriodStart: subscriptionData.currentPeriodStart,
                      currentPeriodEnd: subscriptionData.currentPeriodEnd,
                      cancelAtPeriodEnd: subscriptionData.cancelAtPeriodEnd,
                      canceledAt: subscriptionData.canceledAt,
                      startedAt: subscriptionData.startedAt,
                      endsAt: subscriptionData.endsAt,
                      endedAt: subscriptionData.endedAt,
                      customerId: subscriptionData.customerId,
                      productId: subscriptionData.productId,
                      discountId: subscriptionData.discountId,
                      checkoutId: subscriptionData.checkoutId,
                      customerCancellationReason:
                        subscriptionData.customerCancellationReason,
                      customerCancellationComment:
                        subscriptionData.customerCancellationComment,
                      metadata: subscriptionData.metadata,
                      customFieldData: subscriptionData.customFieldData,
                      userId: subscriptionData.userId!,
                    },
                  });

                console.log("✅ Upserted subscription:", data.id);
              } catch (error) {
                console.error(
                  "💥 Error processing subscription webhook:",
                  error,
                );
                // Don't throw - let webhook succeed to avoid retries
              }
            }
          },
        }),
      ],
    }),
    nextCookies(),
  ],
});
