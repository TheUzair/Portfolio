"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Star, GitFork, Search, Filter } from "lucide-react";
import type { Project } from "@/lib/types";
import type { GitHubRepo } from "@/lib/github";
import Loading from "@/components/Loading";

interface Props {
  projects: Project[];
  repos: GitHubRepo[];
  githubProfileUrl: string;
}

/** Map GitHub language names to a brand-friendly accent. */
const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
};

const FILTERS = ["All", "Web", "Full-Stack", "Tools", "Open Source"] as const;
type Filter = (typeof FILTERS)[number];

function matchFilter(project: Project, filter: Filter): boolean {
  if (filter === "All") return true;
  const tech = (project.technologies ?? []).join(" ").toLowerCase();
  const desc = `${project.title} ${project.description}`.toLowerCase();
  switch (filter) {
    case "Web":
      return /next|react|vite|tailwind/.test(tech);
    case "Full-Stack":
      return /node|express|mongodb|postgres|mysql|prisma/.test(tech);
    case "Tools":
      return /password|builder|shorten|tracker/.test(desc);
    case "Open Source":
      return true; // all my projects are OSS
  }
}

const ProjectsClient = ({ projects, repos, githubProfileUrl }: Props) => {
  const [loadingProject, setLoadingProject] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const passesFilter = matchFilter(p, filter);
      const q = search.trim().toLowerCase();
      const passesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.technologies ?? []).some((t) => t.toLowerCase().includes(q));
      return passesFilter && passesSearch;
    });
  }, [projects, filter, search]);

  return (
    <>
      {loadingProject && <Loading />}

      {/* Featured projects header */}
      <div className="text-center mb-10">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Case Studies
        </motion.span>
        <motion.h1
          className="text-4xl lg:text-6xl font-bold mt-3 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          All <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A curated set of full-stack work — plus {repos.length}+ open-source
          repositories straight from GitHub.
        </motion.p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${filter === f
                  ? "bg-gradient-brand text-white shadow-glow-cyan"
                  : "glass hover:border-brand-cyan-400/50 hover:text-brand-cyan-500"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="relative md:w-64">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search by name or tech…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-background/60 border border-border/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/40 focus:border-brand-cyan-500 transition-colors"
            aria-label="Search projects"
          />
        </div>
      </div>

      {/* Featured grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/projects/${project.id}`}
                onClick={() => setLoadingProject(project.id)}
                className="group block glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow-cyan hover:border-brand-cyan-400/50 h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                    placeholder="blur"
                    blurDataURL="data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAUAAkA4JZQCdAEO/gHOAAD++P/YAAAA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/85 via-brand-navy-950/20 to-transparent" />
                  <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white opacity-0 group-hover:opacity-100 group-hover:bg-brand-cyan-500 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold group-hover:text-gradient transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.overview}
                  </p>
                  {project.technologies && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-brand-cyan-500/10 text-brand-cyan-700 dark:text-brand-cyan-300 border border-brand-cyan-500/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          No projects match your filters. Try clearing them.
        </p>
      )}

      {/* GitHub repo section */}
      {repos.length > 0 && (
        <section className="mt-24 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="eyebrow">Open Source</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight">
              More on <span className="text-gradient">GitHub</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Live from the GitHub API — refreshed daily. Side projects,
              experiments, and contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl p-5 hover:border-brand-cyan-400/50 hover:shadow-glow-cyan transition-all flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github className="h-4 w-4 text-brand-cyan-500 flex-shrink-0" />
                    <h3 className="font-semibold truncate group-hover:text-gradient transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-cyan-500 flex-shrink-0 transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {repo.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: LANG_COLORS[repo.language] ?? "#06b6d4",
                        }}
                        aria-hidden="true"
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow-cyan hover:shadow-glow-amber transition-shadow"
            >
              <Github className="h-4 w-4" />
              See all repositories on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectsClient;
