"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LINKS } from "@/constants";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            This feature is coming soon. For now, please contact support.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link href={LINKS.AUTH.SIGNIN}>Back to Sign In</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href={LINKS.HOME}>Go Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}