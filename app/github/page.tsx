import { Suspense } from "react"
import { fetchGitHubRepos, fetchGitHubContributions, separateRepos } from "@/lib/github/github-api"
import { GitHubRepoCard } from "@/components/github/github-repo-card"
import { GitHubContributionCalendar } from "@/components/github/github-contribution-calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import { contactInfos } from "../contact/constants/contactInfos"

export const metadata: Metadata = {
    title: "GitHub",
    description: "Explore my GitHub repositories, contributions, and open source work.",
}

// Loading component for suspense
function LoadingState() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-64 animate-pulse">
                    <CardContent className="p-6">
                        <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                        <div className="h-3 bg-muted rounded w-full mb-2"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

// Error component
function ErrorState({ message }: { message: string }) {
    return (
        <Card className="border-destructive">
            <CardContent className="p-8 text-center">
                <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Unable to Load GitHub Data</h3>
                <p className="text-muted-foreground mb-4">{message}</p>
                <Button asChild variant="outline">
                    <a href={contactInfos.github.url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}

// Main content component
async function GitHubContent() {
    const [repos, contributions] = await Promise.all([fetchGitHubRepos(), fetchGitHubContributions()])

    if (!repos || repos.length === 0) {
        return <ErrorState message="Could not fetch repositories. Please try again later." />
    }

    const { original, forked } = separateRepos(repos)

    return (
        <>
            {/* Original Repositories Section */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Original Repositories</h2>
                        <p className="text-muted-foreground">Projects I've built from scratch</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                        {original.length} repos
                    </Badge>
                </div>

                {original.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {original.map((repo) => (
                            <GitHubRepoCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="p-8 text-center text-muted-foreground">No original repositories found.</CardContent>
                    </Card>
                )}
            </section>

            {/* Forked Repositories Section */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Forked Repositories</h2>
                        <p className="text-muted-foreground">Open source projects I've contributed to or explored</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                        {forked.length} forks
                    </Badge>
                </div>

                {forked.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {forked.map((repo) => (
                            <GitHubRepoCard key={repo.id} repo={repo} />
                        ))}
                    </div>
                ) : (
                    <Card>
                        <CardContent className="p-8 text-center text-muted-foreground">No forked repositories found.</CardContent>
                    </Card>
                )}
            </section>

            {/* Contribution Calendar Section */}
            {contributions?.user?.contributionsCollection?.contributionCalendar && (
                <section className="mb-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">Contribution Activity</h2>
                        <p className="text-muted-foreground">My GitHub contribution history over the past year</p>
                    </div>
                    <GitHubContributionCalendar calendar={contributions.user.contributionsCollection.contributionCalendar} />
                </section>
            )}

            {!contributions && (
                <Card className="border-muted">
                    <CardContent className="p-8 text-center">
                        <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                            Contribution calendar requires GitHub authentication. Add a GITHUB_TOKEN to your environment variables to
                            view contribution data.
                        </p>
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default function GitHubPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Github className="h-10 w-10 text-primary" />
                        <h1 className="text-4xl font-bold">GitHub Portfolio</h1>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-6">
                        Explore my open source contributions, personal projects, and coding activity on GitHub.
                    </p>
                    <Button asChild size="lg">
                        <a href={contactInfos.github.url} target="_blank" rel="noopener noreferrer">
                            Visit My GitHub Profile
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>

                {/* Content with Suspense */}
                <Suspense fallback={<LoadingState />}>
                    <GitHubContent />
                </Suspense>
            </div>
        </div>
    )
}
