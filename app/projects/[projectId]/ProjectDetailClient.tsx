"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/types";
import { projectImageMap } from "@/lib/data";

interface Props {
  project: Project;
}

const ProjectDetailClient = ({ project }: Props) => {
  const projectImage = projectImageMap[project.id] ?? project.imageUrl;

  return (
    <div className="surface-page min-h-screen relative overflow-hidden">
      <div className="blob blob-cyan w-[420px] h-[420px] -top-10 -right-20 opacity-15" />
      <div className="blob blob-amber w-[360px] h-[360px] top-1/2 -left-20 opacity-15" style={{ animationDelay: "5s" }} />

      <Header />
      <main className="container mx-auto px-5 pt-12 lg:px-20 mb-16 relative">
        <section className="mb-16 mt-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h6 className="eyebrow">{project.id}</h6>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                <span className="text-gradient">{project.title}</span>
              </h1>
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-3 text-2xl font-bold leading-snug md:text-3xl">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-glow-soft group glass p-2">
            <Image
              src={projectImage}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl bg-brand-navy-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Link
                href={project.link}
                className="bg-gradient-brand text-white px-6 py-3 rounded-full font-bold shadow-glow-cyan hover:shadow-glow-amber transition-shadow"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl pt-8">
          <h2 className="text-3xl font-bold mb-6">
            {project.title} <span className="text-gradient">Details</span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-brand-cyan-500/10 text-brand-cyan-700 dark:text-brand-cyan-300 border border-brand-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4">
            <Link
              href={project.link}
              className="inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-lg shadow-glow-cyan hover:shadow-glow-amber transition-shadow"
            >
              <FaExternalLinkAlt />
              Visit Live Site
            </Link>
            {project.github && (
              <Link
                href={project.github}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:border-brand-cyan-400/50 hover:shadow-glow-cyan transition-all"
              >
                <FaGithub />
                View on GitHub
              </Link>
            )}
          </div>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProjectDetailClient;
