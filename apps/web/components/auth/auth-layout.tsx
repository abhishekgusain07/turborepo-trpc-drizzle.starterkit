"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  leftContent: {
    title: string;
    description: string;
    footer: string;
  };
}

export function AuthLayout({
  children,
  title,
  subtitle,
  leftContent,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Marble Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(64, 224, 208, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        {/* Marble texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Side - Adventure Content */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 lg:p-12 flex flex-col justify-between text-white hidden lg:flex">
              <div className="absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 30% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(64, 224, 208, 0.4) 0%, transparent 50%)
                    `,
                  }}
                />
              </div>

              <div className="relative z-10">
                <Link href="/" className="inline-block mb-8">
                  <div className="text-2xl font-bold">LOGO</div>
                </Link>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                  {leftContent.title}
                </h1>
                <p className="text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
                  {leftContent.description}
                </p>
                <p className="text-gray-400">{leftContent.footer}</p>
              </div>

              {/* Decorative bird silhouette */}
              <div className="absolute bottom-8 right-8 opacity-30 hidden xl:block">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
                  <path
                    d="M20 40C25 35 35 30 50 35C60 38 70 42 75 45C70 48 60 50 50 48C40 46 30 44 25 42C22 41 20 40 20 40Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 35C20 30 30 25 40 28C35 32 25 35 15 35Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-full max-w-md mx-auto">
                {/* Mobile logo */}
                <div className="lg:hidden mb-8 text-center">
                  <Link href="/" className="inline-block">
                    <div className="text-2xl font-bold text-slate-900">
                      LOGO
                    </div>
                  </Link>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {subtitle}
                  </p>
                </div>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
