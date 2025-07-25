# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
```bash
# Development
pnpm dev                # Start all apps in development mode
pnpm dev --filter=web   # Start only the web app

# Building & Production  
pnpm build              # Build all apps for production
pnpm start              # Start production servers
pnpm production         # Build and start production servers

# Code Quality
pnpm lint               # Lint all packages with Turbo
pnpm lint:fix           # Fix ESLint issues across all packages
pnpm format             # Format code with Prettier
pnpm check-types        # Type check all packages

# Database Operations
pnpm db:generate        # Generate Drizzle schema from database
pnpm db:migrate         # Run database migrations
pnpm db:push            # Push schema changes to database (dev only)
pnpm db:studio          # Open Drizzle Studio for database management

# Testing
pnpm test               # Run unit tests across all packages
pnpm test:e2e           # Run end-to-end tests

# Utilities
pnpm sys-link           # Create environment variable symlinks
pnpm reset-repo         # Clean all build artifacts and node_modules
```

### Package-Specific Commands
```bash
# Web app (apps/web)
cd apps/web
pnpm dev                # Next.js development server with Turbopack
pnpm build              # Build Next.js app
pnpm start              # Start production Next.js server
pnpm check-types        # TypeScript type checking
pnpm test               # Jest unit tests
pnpm test:e2e           # Playwright E2E tests

# Database package (packages/db)
cd packages/db
pnpm db:generate        # Generate Drizzle migrations
pnpm db:push            # Push schema to database
pnpm db:studio          # Open Drizzle Studio
```

## Architecture Overview

This is a **Turborepo monorepo** using **pnpm workspaces** with the following structure:

### Core Stack
- **Frontend**: Next.js 15 with App Router, React 19, Tailwind CSS 4
- **Backend**: tRPC 11 for type-safe APIs
- **Database**: Drizzle ORM with PostgreSQL
- **Authentication**: Better Auth 1.2.8 with Google OAuth
- **State Management**: TanStack Query + Jotai
- **UI Components**: Radix UI + Shadcn/ui components

### Package Architecture

#### `apps/web` - Next.js Application
- **App Router structure** in `app/` directory
- **Authentication pages**: `/auth/signin`, `/auth/signup`, `/auth/forgot-password`
- **Dashboard**: Protected routes under `/dashboard`
- **API routes**: 
  - `/api/auth/[...all]` - Better Auth endpoints
  - `/api/trpc/[trpc]` - tRPC API endpoints

#### `packages/db` - Database Package
- **Drizzle ORM** schemas in `src/schema/`
- **Database connection** and exports in `src/index.ts`
- **Migrations** managed by Drizzle Kit in `migrations/`
- **User schema** with Better Auth integration

#### `packages/ui` - Shared UI Components
- **Reusable components** built on Radix UI
- **TypeScript definitions** for all components
- **Tailwind CSS** styling

#### `packages/utilities` - Shared Utilities
- **Environment configuration** using `@t3-oss/env-nextjs`
- **Type-safe environment variables** validation

### Authentication Flow
- Uses **Better Auth** with Drizzle adapter
- **Google OAuth** configured for social login
- **Session management** with database persistence
- **Custom user fields** like `allowedSavingData`

### tRPC Setup
- **App router** in `apps/web/trpc/routers/_app.ts`
- **Client configuration** in `apps/web/trpc/client.tsx`
- **Server setup** in `apps/web/trpc/server.tsx`
- **Type-safe queries** with TanStack Query integration

### Environment Variables
All environment variables are defined in `turbo.json` globalEnv and managed through:
- **Database**: `DATABASE_URL`
- **Auth**: `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, Google OAuth credentials
- **Optional services**: Cloudflare R2, PostHog, OpenPanel analytics

### Development Workflow
1. **Environment setup**: Create `.env` file and run `pnpm sys-link`
2. **Database setup**: Run `pnpm db:generate` and `pnpm db:push`
3. **Development**: Use `pnpm dev` to start all services
4. **Code quality**: Always run `pnpm lint` and `pnpm check-types` before commits

### Key Conventions
- **Components**: PascalCase files, prefer named exports
- **Utilities**: camelCase with descriptive function names  
- **Database**: Snake_case for database fields, camelCase for TypeScript
- **File structure**: Components, hooks, utilities, types organized by feature
- **Authentication**: Use `serverAuth` for server-side, client auth hooks for frontend