"use client";

import { authClient } from "@/lib/client-auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <authClient.SessionProvider>
      {children}
    </authClient.SessionProvider>
  );
}