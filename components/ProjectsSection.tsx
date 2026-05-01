"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

interface BentoProject {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github?: string;
  tags: string[];
  /** Tailwind grid span classes for desktop. */
  span: string;
  /** Highlight the hero card. */
  featured?: boolean;
}

const bentoProjects: BentoProject[] = [
  {
    title: "GolfDraw",
    description:
      "Subscription golf platform where players track Stableford scores, enter monthly prize draws, and support charities via Stripe.",
    imageUrl: "/golfdraw-ss.jpg",
    link: "https://golf-platform-delta-three.vercel.app",
    github: "https://github.com/TheUzair/GolfDraw",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL", "next-intl"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "HCPulse AI",
    description:
      "AI-powered CRM for pharmaceutical reps — log HCP interactions in plain English via a LangGraph agent with Groq LLMs.",
    imageUrl: "/hcpulse-ai-ss.jpg",
    link: "https://hc-pulse-ai.vercel.app/",
    github: "https://github.com/TheUzair/HCPulse-AI",
    tags: ["Next.js", "FastAPI", "LangGraph", "Groq", "PostgreSQL"],
    span: "md:col-span-2",
  },
  {
    title: "RAG AI",
    description: "Chat with any website using Groq LLaMA and Weaviate vector search.",
    imageUrl: "/rag-chatbot-ss.jpg",
    link: "https://rag-chatbot-eta.vercel.app/",
    github: "https://github.com/TheUzair/RAG-Chatbot",
    tags: ["Next.js", "Groq", "Weaviate"],
    span: "md:col-span-1",
  },
  {
    title: "Flexora",
    description: "Shopify-inspired athleisure storefront with cart, checkout, and discount codes.",
    imageUrl: "/flexora-ss.jpg",
    link: "https://flexora-two.vercel.app/",
    github: "https://github.com/TheUzair/Flexora",
    tags: ["Next.js", "Zustand", "TypeScript"],
    span: "md:col-span-1",
  },
  {
    title: "EduTrack360",
    description:
      "Full-stack school management system for tracking student activities, awards, and behavioral records.",
    imageUrl: "/edutrack360-ss.jpg",
    link: "https://edutrack360.onrender.com",
    github: "https://github.com/TheUzair/EduTrack360",
    tags: ["React", "Node.js", "MongoDB", "Shadcn UI"],
    span: "md:col-span-2",
  },
  {
    title: "Get Me A Chai",
    description:
      "Crowdfunding platform for creators with Razorpay payments and real-time fan support.",
    imageUrl: "/get-me-a-chai-ss.jpg",
    link: "https://get-me-a-chai-pi.vercel.app/",
    github: "https://github.com/TheUzair/Get-Me-A-Chai",
    tags: ["Next.js", "Razorpay", "MongoDB"],
    span: "md:col-span-2",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden"
    >
      <div className="blob blob-cyan w-[420px] h-[420px] -top-20 -left-10 opacity-15" />
      <div
        className="blob blob-amber w-[380px] h-[380px] bottom-0 -right-10 opacity-15"
        style={{ animationDelay: "5s" }}
      />

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Selected Work</span>
            <h2 className="mt-3 max-w-2xl text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Building Beyond <span className="text-gradient">Boundaries</span>
            </h2>
          </motion.div>

          <Link href="/projects" className="hidden md:inline-block">
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass border-brand-cyan-500/30 hover:border-brand-cyan-400/60 hover:shadow-glow-cyan transition-all font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              View all projects
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[220px] gap-4 md:gap-5">
          {bentoProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`${project.span} group relative overflow-hidden rounded-2xl glass hover:border-brand-cyan-400/50 hover:shadow-glow-cyan transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20"
                aria-label={`Visit ${project.title}`}
              />

              {/* Background image */}
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JZQCdAEO/gHOAAD++P/YAAAA"
              />

              {/* Gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/55 to-brand-navy-950/15 group-hover:from-brand-navy-950/90 transition-colors" />

              {/* Featured badge */}
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-brand text-white text-xs font-semibold shadow-glow-cyan">
                  <Sparkles className="h-3 w-3" />
                  Featured
                </span>
              )}

              {/* External link icon */}
              <span className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white opacity-0 group-hover:opacity-100 group-hover:bg-brand-cyan-500 transition-all">
                <ArrowUpRight className="h-4 w-4" />
              </span>

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 md:p-6 text-white">
                <h3
                  className={`font-bold leading-tight ${project.featured ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                    }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mt-2 text-white/80 leading-snug ${project.featured ? "text-base max-w-md" : "text-sm line-clamp-2"
                    }`}
                >
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {project.tags.slice(0, project.featured ? 4 : 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="relative z-30 ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Link href="/projects" className="mt-10 mx-auto md:hidden flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass border-brand-cyan-500/30 hover:border-brand-cyan-400/60 hover:shadow-glow-cyan transition-all font-medium">
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
