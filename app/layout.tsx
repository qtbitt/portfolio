import "./globals.css";

import AOSInit from "./components/ui/aos-init";
import { identity } from "./lib/content";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://timothys.dev";
const siteTitle = `${identity.fullName} | ${identity.role}`;
const siteDescription =
  "Portfolio of Timothy Shevchenko, a full-stack developer building polished web experiences with React, Next.js, TypeScript, and modern frontend tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${identity.fullName}`,
  },
  description: siteDescription,
  applicationName: identity.fullName,
  referrer: "origin-when-cross-origin",
  authors: [{ name: identity.fullName, url: siteUrl }],
  creator: identity.fullName,
  publisher: identity.fullName,
  keywords: [
    "Timothy Shevchenko",
    "Timothy portfolio",
    "full-stack developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer Poland",
    "Gdansk developer",
    "developer portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: identity.fullName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    creator: "@qtbit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <div className="mx-auto min-h-screen w-full max-w-5xl mt-5 md:mt-5">
          <AOSInit />
          {children}
        </div>
      </body>
    </html>
  );
}
