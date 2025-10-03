import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitFork, Star, ExternalLink, Calendar } from "lucide-react"
import type { GitHubRepo } from "@/lib/github/github-types"
import { format } from "date-fns"
import { languageColors } from "../../app/github/constants/languageColors"

interface GitHubRepoCardProps {
    repo: GitHubRepo
}

export function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
    if (!repo) {
        return null;
    }
    return (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-1">{repo.name}</CardTitle>
                    {repo.fork && (
                        <Badge variant="secondary" className="flex-shrink-0">
                            Fork
                        </Badge>
                    )}
                </div>
                <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                    {repo.description || "No description available"}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-3">
                    {/* Language */}
                    {repo.language && (
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary" style={{ backgroundColor: languageColors[repo.language] }}></div>
                            <span className="text-sm text-muted-foreground">{repo.language}</span>
                        </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            <span>{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{format(new Date(repo.updated_at), "MMM yyyy")}</span>
                        </div>
                    </div>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic) => (
                                <Badge key={topic} variant="outline" className="text-xs">
                                    {topic}
                                </Badge>
                            ))}
                            {repo.topics.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{repo.topics.length - 3}
                                </Badge>
                            )}
                        </div>
                    )}
                </div>

                {/* Link */}
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                        <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
