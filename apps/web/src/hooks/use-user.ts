"use client";

import { useSession } from "@/lib/client-auth";

export function useUser() {
  const { data: session, isPending } = useSession();
  
  return {
    user: session?.user ?? null,
    isLoading: isPending,
    isAuthenticated: !!session?.user,
  };
}