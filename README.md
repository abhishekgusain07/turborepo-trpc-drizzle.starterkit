# 🚀 Modern Turborepo Template

A production-ready, full-stack turborepo template with modern tools and best practices. Built with Next.js 15, TypeScript, tRPC, Drizzle ORM, Better Auth, and a complete UI component library.

## ✨ Features

### 🏗️ **Architecture**

- **Turborepo** - High-performance monorepo build system
- **Yarn Workspaces** - Efficient dependency management
- **TypeScript** - End-to-end type safety
- **ESLint & Prettier** - Code quality and consistency

### 🎨 **Frontend**

- **Next.js 15.3.1** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible components
- **Framer Motion** - Smooth animations
- **Next Themes** - Dark/light mode support

### 🔒 **Authentication**

- **Better Auth 1.2.8** - Modern authentication library
- **Google OAuth** - Social authentication
- **Session management** - Secure session handling
- **User profiles** - Complete user management

### 🗄️ **Database**

- **Drizzle ORM 0.43.1** - Type-safe database toolkit
- **PostgreSQL** - Robust relational database
- **Neon Database** - Serverless PostgreSQL (recommended)
- **Migrations** - Schema version control

### 🌐 **API**

- **tRPC 11.1.2** - End-to-end type-safe APIs
- **TanStack Query 5.76.1** - Powerful data fetching
- **Zod 3.25.7** - Schema validation
- **Superjson** - JSON serialization with type safety

### 📦 **State Management**

- **Jotai 2.12.3** - Atomic state management
- **React Query** - Server state management
- **Context API** - Global state patterns

### 🧪 **Testing** (Ready to configure)

- **Jest** - Unit testing framework
- **Playwright** - End-to-end testing
- **React Testing Library** - Component testing

### 📊 **Analytics** (Optional)

- **PostHog** - Product analytics
- **OpenPanel** - Privacy-focused analytics

### ☁️ **File Storage** (Optional)

- **Cloudflare R2** - S3-compatible object storage

## 📁 Project Structure

```
turborepo-template/
├── apps/
│   ├── web/                    # Next.js web application
│   │   ├── src/
│   │   │   ├── app/           # App Router pages
│   │   │   ├── components/    # Reusable UI components
│   │   │   ├── constants/     # Application constants
│   │   │   ├── hooks/         # Custom React hooks
│   │   │   ├── lib/          # Utility libraries
│   │   │   ├── providers/    # Context providers
│   │   │   ├── trpc/         # tRPC configuration
│   │   │   ├── types/        # TypeScript type definitions
│   │   │   └── zod-schemas/  # Zod validation schemas
│   │   ├── public/           # Static assets
│   │   └── package.json      # App dependencies
│   │
│   └── docs/                  # Documentation site (optional)
│
├── packages/
│   ├── db/                   # Database package
│   │   ├── src/
│   │   │   ├── schema/      # Drizzle database schemas
│   │   │   └── index.ts     # Database exports
│   │   └── migrations/      # Database migration files
│   │
│   ├── utilities/           # Shared utilities
│   │   └── src/
│   │       └── env/        # Environment configuration
│   │
│   ├── eslint-config/      # Shared ESLint configuration
│   └── typescript-config/  # Shared TypeScript configuration
│
├── env-links.sh            # Environment symlink script
├── turbo.json             # Turbo configuration
├── package.json           # Root package configuration
└── yarn.lock             # Dependency lock file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 20+** - [Download](https://nodejs.org/)
- **Yarn** - Install with `npm install -g yarn`
- **PostgreSQL Database** - Local or hosted (Neon recommended)

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd turborepo-template
yarn install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/your_db"

# Authentication
BETTER_AUTH_SECRET="your-secret-key-32-chars-min"
BETTER_AUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Public URLs
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_TRPC_BASE_URL="http://localhost:3000/api/trpc"

# Optional: Cloudflare R2 Storage
# CF_R2_ENDPOINT="your-r2-endpoint"
# CF_R2_ACCESS_KEY_ID="your-access-key"
# CF_R2_SECRET_ACCESS_KEY="your-secret-key"
# CF_R2_BUCKET_NAME="your-bucket-name"
# CF_R2_PUBLIC_DOMAIN="your-public-domain"

# Optional: Analytics
# NEXT_PUBLIC_POSTHOG_HOST="your-posthog-host"
# NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
# NEXT_PUBLIC_OPENPANEL_CLIENT_ID="your-openpanel-client-id"
```

### 3. Database Setup

```bash
# Create environment symlinks
yarn sys-link

# Generate database schema
yarn db:generate

# Push schema to database
yarn db:push

# Optional: Open Drizzle Studio
yarn db:studio
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### 5. Start Development

```bash
# Start all apps in development mode
yarn dev

# Or start individual apps
yarn dev --filter=web
```

Visit [http://localhost:3000](http://localhost:3000) to see your application!

## 📜 Available Scripts

### Root Level Scripts

```bash
yarn dev              # Start development servers for all apps
yarn build            # Build all apps for production
yarn start            # Start production servers
yarn lint             # Lint all packages
yarn lint:fix         # Fix linting issues
yarn format           # Format code with Prettier
yarn check-types      # Type check all packages

# Database Operations
yarn db:generate      # Generate database schema
yarn db:migrate       # Run database migrations
yarn db:push          # Push schema changes to database
yarn db:studio        # Open Drizzle Studio

# Testing
yarn test             # Run unit tests
yarn test:e2e         # Run E2E tests

# Utility Scripts
yarn sys-link         # Create environment symlinks
yarn reset-repo       # Clean all build artifacts
```

### App-Specific Scripts (apps/web)

```bash
yarn dev              # Start Next.js development server
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Lint the web app
yarn test             # Run unit tests
yarn test:e2e         # Run E2E tests
```

## 🎯 Naming Conventions

### Files and Directories

- **Directories**: Use lowercase with dashes (e.g., `components/auth-wizard`)
- **Components**: Use PascalCase for component files (e.g., `UserProfile.tsx`)
- **Client Components**: Add `.client.tsx` suffix for components using "use client"
- **Utilities**: Use camelCase for utility files (e.g., `formatCurrency.ts`)

### Variables and Functions

- **Variables**: Use camelCase (e.g., `userName`, `isLoading`, `hasError`)
- **Constants**: Use SCREAMING_SNAKE_CASE (e.g., `API_BASE_URL`, `TOAST_OPTIONS`)
- **Functions**: Use camelCase with descriptive verbs (e.g., `createUser`, `validateEmail`)
- **Booleans**: Prefix with auxiliary verbs (e.g., `isLoading`, `hasPermission`, `canEdit`)

### TypeScript Types

- **Interfaces**: Use PascalCase (e.g., `UserProfile`, `ApiResponse`)
- **Zod Schemas**: Prefix with "Zod" (e.g., `ZodUserSchema`, `ZodAuthSchema`)
- **Type Exports**: Use named exports, avoid default exports

## 🎨 Code Style

- Use the `function` keyword for pure functions
- Prefer named exports over default exports
- Use functional and declarative programming patterns
- Structure files: exported component, subcomponents, helpers, static content, types

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker

```bash
# Build the application
yarn build

# Create Docker image (you'll need to create a Dockerfile)
docker build -t turborepo-template .

# Run container
docker run -p 3000:3000 turborepo-template
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with inspiration from [Invoicely](https://github.com/legions-developer/invoicely)
- Thanks to the open-source community for amazing tools and libraries
- Special thanks to contributors and maintainers

---

**Happy coding!** 🎉

For questions or support, please open an issue or reach out to the maintainers.
