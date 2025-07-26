"use client"
import Link from "next/link";
import ProblemSection from "./problem";
import SolutionSection from "./solution";
import Footer from "./footer";
import TechnologyUsed from "./techused";
import { features } from "../../constants"
import { NavbarDemo } from "components/ui/navbar";
import { useFeedbackModal } from "hooks/useFeedbackModal";
import { useUser } from "hooks/use-user";
import { HoverEffect } from "components/effect/card-hover-effect";
import PricingTable from "../pricing/_component/pricing-table";
import { SubscriptionDetailsResult } from "lib/actions/subscription";

interface HomeContentProps {
  subscriptionDetails: SubscriptionDetailsResult;
}

export default function HomeContent({ subscriptionDetails }: HomeContentProps) {
  const { user } = useUser();
  const { FeedbackModalComponent } = useFeedbackModal(user?.id);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo>
        {/* Hero Section */}
        <section className="pt-8 pb-8 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
          <div className="mb-4 px-4 py-2 bg-secondary/80 rounded-full text-sm font-medium text-secondary-foreground">
            🚀 Production-Ready Turborepo Template
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 leading-tight">
            Build Scalable Apps <br />
            <span className="inline-block mt-1 mb-2">With Modern Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Complete Turborepo monorepo with Next.js 15, tRPC, Drizzle ORM, Better Auth, 
            and everything you need to ship production-ready applications fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="border border-border hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md font-medium text-lg transition-all"
            >
              Explore Features
            </Link>
          </div>
        </section>

        <TechnologyUsed />
        {/* Features Section */}
        <section
          id="features"
          className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Build at Scale
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive monorepo template with modern tools, best practices, 
                and production-ready configurations to accelerate your development workflow.
              </p>
            </div>
            <HoverEffect items={features} />
          </div>
        </section>

        <ProblemSection />

        <SolutionSection />
        {/* Pricing Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <PricingTable subscriptionDetails={subscriptionDetails}/>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Building Your Next Project Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Clone this Turborepo template and get a head start with modern architecture, 
              best practices, and production-ready configurations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Try Live Demo
              </Link>
              <Link
                href="https://github.com/yourusername/turborepo-template"
                className="border border-border hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-md font-medium text-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </NavbarDemo>

      {/* Render the feedback modal */}
      <FeedbackModalComponent />
    </div>
  );
}