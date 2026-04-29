"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Loading from "@/components/Loading";

const Projects = () => {
  const [loadingProject, setLoadingProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setLoadingProject(projectId);
  };

  return (
    <div className="surface-page relative overflow-hidden min-h-screen">
      <div className="blob blob-cyan w-[480px] h-[480px] -top-20 -left-20 opacity-15" />
      <div className="blob blob-amber w-[400px] h-[400px] bottom-1/4 -right-20 opacity-15" style={{ animationDelay: "4s" }} />

      <Header />

      <div className="container mx-auto px-4 py-16 relative">
        {loadingProject && <Loading />}

        <div className="text-center mb-16">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Selected Work
          </motion.span>
          <motion.h1
            className="text-4xl lg:text-6xl font-bold mt-3 tracking-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            All <span className="text-gradient">Projects</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/projects/${project.id}`}
                onClick={() => handleProjectClick(project.id)}
                className="group block glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow-cyan hover:border-brand-cyan-400/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    alt={`${project.title} interface screenshot`}
                    width={600}
                    height={400}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JZQCdAEO/gHOAAD++P/YAAAA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <span className="eyebrow text-xs">Project · {String(index + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 text-2xl font-bold group-hover:text-gradient transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan-600 dark:text-brand-cyan-300">
                    View Project
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Projects;
