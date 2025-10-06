import { contactInfos } from "@/app/contact/constants/contactInfos";
import type {
    GitHubRepo,
    GitHubUser,
    GitHubLanguages,
    GitHubContributions,
    GitHubStats,
} from "./github-types";

const GITHUB_USERNAME = contactInfos.github.username;
const GITHUB_API_BASE = "https://api.github.com";
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// GitHub Personal Access Token (optional, but recommended to avoid rate limits)
// Add this to your environment variables: GITHUB_TOKEN
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    ...(GITHUB_TOKEN && { Authorization: `Bearer ${GITHUB_TOKEN}` }),
};

/**
 * Fetch all repositories for the user
 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            {
                headers,
                next: { revalidate: 7200 }, // Cache for 2 hours
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

/**
 * Fetch user profile information
 */
export async function fetchGitHubUser(): Promise<GitHubUser | null> {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`,
            {
                headers,
                next: { revalidate: 7200 }, // Cache for 2 hours
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        return null;
    }
}

/**
 * Fetch languages for a specific repository
 */
export async function fetchRepoLanguages(
    repoName: string
): Promise<GitHubLanguages> {
    try {
        const response = await fetch(
            `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`,
            {
                headers,
                next: { revalidate: 7200 },
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching languages for ${repoName}:`, error);
        return {};
    }
}

/**
 * Fetch GitHub contributions using GraphQL API
 */
export async function fetchGitHubContributions(): Promise<GitHubContributions | null> {
    if (!GITHUB_TOKEN) {
        console.warn(
            "GitHub token not found. Contributions data requires authentication."
        );
        return null;
    }

    const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

    try {
        const response = await fetch(GITHUB_GRAPHQL_API, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`GitHub GraphQL API error: ${response.status}`);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        return null;
    }
}

/**
 * Calculate comprehensive GitHub statistics
 */
export async function fetchGitHubStats(): Promise<GitHubStats | null> {
    try {
        const [repos, user] = await Promise.all([
            fetchGitHubRepos(),
            fetchGitHubUser(),
        ]);

        if (!user) {
            return null;
        }

        // Calculate total stars and forks
        const totalStars = repos.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );
        const totalForks = repos.reduce(
            (sum, repo) => sum + repo.forks_count,
            0
        );

        const topRepos = repos.slice(0, 20);
        const languagePromises = topRepos.map((repo) =>
            fetchRepoLanguages(repo.name)
        );
        const repoLanguages = await Promise.all(languagePromises);

        // Aggregate language statistics
        const languageMap = new Map<string, number>();
        repoLanguages.forEach((languages) => {
            Object.entries(languages).forEach(([lang, bytes]) => {
                languageMap.set(lang, (languageMap.get(lang) || 0) + bytes);
            });
        });

        // Calculate total bytes and percentages
        const totalBytes = Array.from(languageMap.values()).reduce(
            (sum, bytes) => sum + bytes,
            0
        );
        const languages = Array.from(languageMap.entries())
            .map(([name, count]) => ({
                name,
                count,
                percentage: (count / totalBytes) * 100,
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10); // Top 10 languages

        return {
            totalRepos: user.public_repos,
            totalStars,
            totalForks,
            followers: user.followers,
            following: user.following,
            languages,
        };
    } catch (error) {
        console.error("Error calculating GitHub stats:", error);
        return null;
    }
}

/**
 * Separate repos into original and forked
 */
export function separateRepos(repos: GitHubRepo[]): {
    original: GitHubRepo[];
    forked: GitHubRepo[];
} {
    const original = repos.filter((repo) => !repo.fork);
    const forked = repos.filter((repo) => repo.fork);

    return { original, forked };
}

/**
 * Fetch pinned repositories using GitHub GraphQL API
 * Note: GitHub REST API does not provide pinned repos, so we use GraphQL
 *
 */

export async function fetchGitHubPinnedRepos(): Promise<GitHubRepo[]> {
    const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              fullName: nameWithOwner
              description
              url
              isFork
              createdAt
              updatedAt
              pushedAt
              stargazerCount
              watchers {
                totalCount
              }
              forkCount
              issues(states: OPEN) {
                totalCount
              }
              primaryLanguage {
                name
              }
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              visibility
              defaultBranchRef {
                name
              }
            }
          }
        }
      }
    }
  `;

    const response = await fetch(GITHUB_GRAPHQL_API, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 7200 }, // cache for 2h
    });

    if (!response.ok) {
        throw new Error(`GitHub GraphQL error: ${response.status}`);
    }

    const { data } = await response.json();

    return data.user.pinnedItems.nodes.map((repo: any) => ({
        id: repo.id || Date.now(),
        name: repo.name,
        full_name: repo.fullName,
        description: repo.description,
        html_url: repo.url,
        fork: repo.isFork,
        created_at: repo.createdAt,
        updated_at: repo.updatedAt,
        pushed_at: repo.pushedAt,
        stargazers_count: repo.stargazerCount,
        watchers_count: repo.watchers.totalCount,
        forks_count: repo.forkCount,
        open_issues_count: repo.issues.totalCount,
        language: repo.primaryLanguage?.name || null,
        topics: repo.repositoryTopics.nodes.map((t: any) => t.topic.name),
        visibility: repo.visibility,
        default_branch: repo.defaultBranchRef?.name || "main",
    })) as GitHubRepo[];
}
