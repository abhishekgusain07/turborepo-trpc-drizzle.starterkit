import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { env } from "@template/utilities";
import { betterAuth } from "better-auth";
import { db } from "@template/db";

export const serverAuth: any = betterAuth({
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
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
});
