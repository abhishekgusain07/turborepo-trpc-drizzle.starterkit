"use client";

import { useUser } from "hooks/use-user";
import { Button } from "components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card";
import { signIn, signOut } from "lib/client-auth";
import { LINKS } from "../constants";
import Link from "next/link";

export default function HomePage() {
  const { user, isLoading, isAuthenticated } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Modern Turborepo Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A production-ready starter template with Next.js 15, TypeScript, tRPC, 
              Drizzle ORM, Better Auth, and modern UI components.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>🚀 Modern Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with Next.js 15, React 19, TypeScript, and the latest tools
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>🔒 Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Better Auth with Google OAuth, session management, and security
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>🎨 Beautiful UI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Shadcn/ui components with Tailwind CSS and dark mode support
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Auth Section */}
          <div className="mt-12">
            {isAuthenticated ? (
              <div className="space-y-4">
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>Welcome back, {user?.name}!</CardTitle>
                    <CardDescription>{user?.email}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button asChild className="w-full">
                      <Link href={LINKS.DASHBOARD}>Go to Dashboard</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => signOut()}
                      className="w-full"
                    >
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-4">
                <Card className="max-w-md mx-auto">
                  <CardHeader>
                    <CardTitle>Get Started</CardTitle>
                    <CardDescription>
                      Sign in to explore the dashboard and features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      onClick={() => signIn.social({ provider: "google" })}
                      className="w-full"
                    >
                      Continue with Google
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={LINKS.AUTH.SIGNIN}>Sign In with Email</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold mb-4">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Next.js 15</span>
              <span>•</span>
              <span>React 19</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>tRPC</span>
              <span>•</span>
              <span>Drizzle ORM</span>
              <span>•</span>
              <span>Better Auth</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Radix UI</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}