import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { projects } from "@/lib/data";
import { fetchGitHubRepos, GITHUB_PROFILE_URL } from "@/lib/github";
import ProjectsClient from "./ProjectsClient";

// ISR: regenerate the page once per day so the GitHub repo list stays fresh
// without re-fetching on every request.
export const revalidate = 86400;

const ProjectsPage = async () => {
  const repos = await fetchGitHubRepos();

  return (
    <div className="surface-page relative overflow-hidden min-h-screen">
      <div className="blob blob-cyan w-[480px] h-[480px] -top-20 -left-20 opacity-15" />
      <div
        className="blob blob-amber w-[400px] h-[400px] bottom-1/4 -right-20 opacity-15"
        style={{ animationDelay: "4s" }}
      />

      <Header />

      <div className="container mx-auto px-4 py-16 relative">
        <ProjectsClient
          projects={projects}
          repos={repos}
          githubProfileUrl={GITHUB_PROFILE_URL}
        />
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
