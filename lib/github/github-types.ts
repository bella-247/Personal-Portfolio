// GitHub API Response Types
export interface GitHubOrg {
    login: string;
    description: string;
    url: string;
    avatar_url: string;
}

export interface GitHubRepo {
    id: number | string;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    fork: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    open_issues_count: number;
    language: string | null;
    topics: string[];
    visibility: string;
    default_branch: string;
}

export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string | null;
    blog: string;
    location: string;
    email: string | null;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface GitHubLanguages {
    [language: string]: number;
}

export interface ContributionDay {
    date: string;
    contributionCount: number;
    color: string;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export interface GitHubContributions {
    user: {
        contributionsCollection: {
            contributionCalendar: ContributionCalendar;
        };
    };
}

export interface GitHubStats {
    totalRepos: number;
    totalStars: number;
    totalForks: number;
    followers: number;
    following: number;
    languages: { name: string; count: number; percentage: number }[];
}
