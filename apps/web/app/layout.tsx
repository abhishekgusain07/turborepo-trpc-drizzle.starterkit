import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import { Toaster } from "sonner";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Instrument_Serif,
  Instrument_Sans,
  Urbanist,
  Bricolage_Grotesque,
} from "next/font/google";

import "./globals.css";
import { TRPCProvider } from "trpc/client";
import { ThemeProvider } from "providers/theme-provider";
import { TanstackProvider } from "providers/tanstack-provider";
import { META_DATA } from "../constants";
import { cn } from "lib/utils";


// Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JetBrains Mono
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Instrument Serif
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

// Instrument Sans
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Urbanist
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

// Bricolage Grotesque
const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={cn(
          geistSans.variable,
          geistMono.variable,
          jetBrainsMono.variable,
          instrumentSerif.variable,
          instrumentSans.variable,
          urbanist.variable,
          bricolageGrotesque.variable,
          "antialiased",
        )}
      >
          <TanstackProvider>
              <TRPCProvider>
              <ThemeProvider
                defaultTheme="light"
                attribute="class"
                enableSystem
                disableTransitionOnChange={false}
                scriptProps={{
                  "data-cfasync": "false",
                }}
                >
                {children}
                <Toaster position="top-right" richColors />
                </ThemeProvider>
              </TRPCProvider>
          </TanstackProvider>
      </body>
    </html>
  );
}