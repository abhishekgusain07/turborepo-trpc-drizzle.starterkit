import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { Toaster } from "sonner";

import "./globals.css";
import { TRPCProvider } from "trpc/client";
import { ThemeProvider } from "providers/theme-provider";
import { TanstackProvider } from "providers/tanstack-provider";
import { META_DATA } from "../constants";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    url: META_DATA.url,
    siteName: META_DATA.title,
    images: [
      {
        url: META_DATA.image,
        width: 1200,
        height: 630,
        alt: META_DATA.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_DATA.title,
    description: META_DATA.description,
    images: [META_DATA.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackProvider>
              <TRPCProvider>
                {children}
                <Toaster position="top-right" richColors />
              </TRPCProvider>
          </TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}