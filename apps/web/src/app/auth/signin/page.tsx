"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthForm } from "@/components/auth/auth-form";
import { signIn } from "@/lib/client-auth";
import { LINKS } from "@/constants";
import type { SignInInput } from "@/zod-schemas/auth";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (data: SignInInput) => {
    setIsLoading(true);
    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        toast.error(result.error.message || "Sign in failed");
        return;
      }

      toast.success("Welcome back!");
      router.push(LINKS.DASHBOARD);
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="WELCOME BACK !"
      subtitle="Welcome back! Please enter your details."
      leftContent={{
        title: "YOUR NEXT ADVENTURE AWAITS!",
        description: "Log in to unlock exclusive deals, plan your dream escapes, and pick up where you left off. Whether it's mountains, beaches, or city lights",
        footer: "Your journey starts here."
      }}
    >
      <AuthForm 
        type="signin" 
        onSubmit={handleSignIn}
        isLoading={isLoading}
      />
    </AuthLayout>
  );
}