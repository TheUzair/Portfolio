import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Mohd Uzair",
  description: "Explore full-stack projects by Mohd Uzair — Next.js, React, Node.js, PostgreSQL, and more.",
  openGraph: {
    title: "Projects | Mohd Uzair",
    description: "Explore full-stack projects by Mohd Uzair.",
    url: "https://mohd-uzair.vercel.app/projects",
    siteName: "Mohd Uzair's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohd Uzair",
    description: "Full-stack projects by Mohd Uzair.",
    creator: "@TheUzair4",
  },
  alternates: { canonical: "https://mohd-uzair.vercel.app/projects" },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}