"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthForm } from "@/components/auth/auth-form";
import { signUp } from "@/lib/client-auth";
import { LINKS } from "@/constants";
import type { SignUpInput } from "@/zod-schemas/auth";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (data: SignUpInput) => {
    setIsLoading(true);
    try {
      const result = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        toast.error(result.error.message || "Sign up failed");
        return;
      }

      toast.success("Account created successfully! Welcome aboard!");
      router.push(LINKS.DASHBOARD);
    } catch (error) {
      console.error("Sign-up error:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="CREATE ACCOUNT"
      subtitle="Start your adventure today! Please enter your details."
      leftContent={{
        title: "BEGIN YOUR JOURNEY!",
        description: "Join thousands of adventurers who trust us with their dream destinations. Create your account to unlock exclusive deals, personalized recommendations, and unforgettable experiences.",
        footer: "Adventure is calling your name."
      }}
    >
      <AuthForm 
        type="signup" 
        onSubmit={handleSignUp}
        isLoading={isLoading}
      />
    </AuthLayout>
  );
}