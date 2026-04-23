import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Articles | NextMode — Mohd Uzair",
  description: "Upcoming articles on Next.js, React, TypeScript, and full-stack web development by Mohd Uzair.",
  openGraph: {
    title: "Articles | NextMode — Mohd Uzair",
    description: "Upcoming articles on Next.js, React, TypeScript, and full-stack web development.",
    url: "https://mohd-uzair.vercel.app/articles",
    siteName: "Mohd Uzair's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | NextMode — Mohd Uzair",
    description: "Upcoming web development articles by Mohd Uzair.",
    creator: "@TheUzair4",
  },
  alternates: { canonical: "https://mohd-uzair.vercel.app/articles" },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}