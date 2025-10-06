// Github Org Card
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { GitHubOrg } from "../../lib/github/github-types"

interface GitHubOrgCardProps {
    org: GitHubOrg
}

export function GitHubOrgCard({ org }: GitHubOrgCardProps) {
    if (!org) {
        return null;
    }
    return (
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                    <Github className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">GitHub Organizations</CardTitle>
                </div>
                <CardDescription>Organizations I'm affiliated with on GitHub</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <img src={org.avatar_url} alt={`${org.login} avatar`} className="w-16 h-16 rounded-full" />
                    <div>
                        <h3 className="text-lg font-semibold">{org.login}</h3>
                        <p className="text-sm text-muted-foreground">{org.description || "No description available"}</p>
                    </div>
                </div>
                <Button asChild variant="outline" className="mt-4">
                    <Link href={org.url} target="_blank" rel="noopener noreferrer">
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
