import { LucideIcon } from "lucide-react";

export const LINKS = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  AUTH: {
    SIGNIN: "/auth/signin",
    SIGNUP: "/auth/signup",
  },
  SOCIALS: {
    GITHUB: "https://github.com",
    TWITTER: "https://twitter.com",
  },
};

export const TOAST_OPTIONS = {
  duration: 3000,
  position: "top-right" as const,
};

export const META_DATA = {
  title: "Turborepo Template",
  description:
    "A modern full-stack turborepo template with Next.js, TypeScript, tRPC, and more.",
  url: "https://your-domain.com",
  image: "/og-image.png",
};


export const features: Array<{
  title: string;
  description: string;
  link: string;
  icon?: LucideIcon;
}> = [
  {
    title: "Turborepo Monorepo",
    description:
      "Scalable monorepo architecture with pnpm workspaces, shared packages, and optimized build caching for enterprise-grade development.",
    link: "#monorepo",
  },
  {
    title: "Next.js 15 + React 19",
    description:
      "Latest Next.js with App Router, React Server Components, and Turbopack for blazing-fast development and production builds.",
    link: "#nextjs",
  },
  {
    title: "Type-Safe APIs",
    description:
      "End-to-end type safety with tRPC 11, TanStack Query integration, and automatic API documentation generation.",
    link: "#trpc",
  },
  {
    title: "Database & ORM",
    description:
      "Drizzle ORM with PostgreSQL, type-safe migrations, database studio, and serverless-ready connection pooling.",
    link: "#database",
  },
  {
    title: "Modern Authentication",
    description:
      "Better Auth with Google OAuth, session management, user permissions, and security best practices built-in.",
    link: "#auth",
  },
  {
    title: "UI & Design System",
    description:
      "Radix UI components, Tailwind CSS 4, dark mode support, and a complete design system for consistent UX.",
    link: "#ui",
  },
];