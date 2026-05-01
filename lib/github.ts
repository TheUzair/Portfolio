/**
 * GitHub repository fetching for the public projects page.
 *
 * Auth: optional. Set GITHUB_TOKEN in .env.local to raise the rate limit
 * from 60/hr (anon) to 5000/hr. The token only needs the `public_repo`
 * read scope.
 */

const GITHUB_USER = "TheUzair";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const FEATURED_NAMES = new Set([
  "golfdraw",
  "hcpulse-ai",
  "rag-chatbot",
  "flexora",
  "edutrack360",
  "get-me-a-chai",
]);

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // Revalidate once per day. ISR keeps the page fast.
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      console.error(`GitHub API ${res.status}: ${res.statusText}`);
      return [];
    }

    const repos = (await res.json()) as GitHubRepo[];

    return repos
      .filter(
        (r) =>
          !r.fork &&
          !r.archived &&
          r.description &&
          !FEATURED_NAMES.has(r.name.toLowerCase())
      )
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 18);
  } catch (err) {
    console.error("Failed to fetch GitHub repos:", err);
    return [];
  }
}

export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USER}`;
