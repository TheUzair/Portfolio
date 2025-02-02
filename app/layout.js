import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL('https://mohd-uzair.vercel.app'),
  title: "NextMode | Full-Stack Development",
  description: "Explore Mohd Uzair's portfolio as a full-stack developer crafting efficient web applications.",
  keywords: "full-stack developer, web development, portfolio, user experience, web applications, NextJS, React, Tailwind CSS",
  authors: [{ name: "Mohd Uzair", url: "https://mohd-uzair.vercel.app" }],
  creator: "Mohd Uzair",
  publisher: "Mohd Uzair",
  charset: "UTF-8",
  openGraph: {
    title: "NextMode | Full-Stack Development",
    description: "Discover the work of Mohd Uzair, a passionate full-stack developer focused on creating beautiful web applications.",
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
    title: "NextMode | Full-Stack Development",
    description: "Explore the portfolio of Mohd Uzair, a dedicated full-stack developer.",
    image: "https://mohd-uzair.vercel.app/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'no',
  },
  alternates: {
    canonical: "https://mohd-uzair.vercel.app/",
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
     <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
  );
}
