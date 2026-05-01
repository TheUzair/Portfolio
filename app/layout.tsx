import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import NavigationWrapper from "@/components/NavigationWrapper";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://mohd-uzair.vercel.app"),
  title: "Mohd Uzair — Full-Stack Engineer",
  description:
    "Portfolio of Mohd Uzair, a full-stack engineer crafting efficient, performant web applications with Next.js, React, Node.js & cloud platforms.",
  keywords:
    "full-stack developer, web development, portfolio, user experience, web applications, NextJS, React, Tailwind CSS",
  authors: [{ name: "Mohd Uzair", url: "https://mohd-uzair.vercel.app" }],
  creator: "Mohd Uzair",
  publisher: "Mohd Uzair",
  charset: "UTF-8",
  openGraph: {
    title: "Mohd Uzair — Full-Stack Engineer",
    description:
      "Discover the work of Mohd Uzair, a passionate full-stack developer focused on creating beautiful web applications.",
    type: "website",
    url: "https://mohd-uzair.vercel.app/",
    image: "https://mohd-uzair.vercel.app/og-image.jpg",
    siteName: "Mohd Uzair's Portfolio",
    locale: "en-US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheUzair4",
    creator: "@TheUzair4",
    title: "Mohd Uzair — Full-Stack Engineer",
    description:
      "Explore the portfolio of Mohd Uzair, a dedicated full-stack developer.",
    image: "https://mohd-uzair.vercel.app/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mohd-uzair.vercel.app/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body className="antialiased overflow-x-hidden scrollbar-thin">
        <JsonLd />
        <ThemeProvider>
          <NavigationWrapper>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none"
            >
              Skip to main content
            </a>
            {children}
            <Toaster />
          </NavigationWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
