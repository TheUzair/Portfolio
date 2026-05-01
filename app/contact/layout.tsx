import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reserve a Spot | Mohd Uzair",
  description: "Get in touch with Mohd Uzair for full-stack development projects, freelance work, or consultations.",
  openGraph: {
    title: "Reserve a Spot | Mohd Uzair",
    description: "Book a consultation or project slot with Mohd Uzair, full-stack developer.",
    url: "https://mohd-uzair.vercel.app/contact",
    siteName: "Mohd Uzair's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve a Spot | Mohd Uzair",
    description: "Book a project slot with Mohd Uzair.",
    creator: "@TheUzair4",
  },
  alternates: { canonical: "https://mohd-uzair.vercel.app/contact" },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}