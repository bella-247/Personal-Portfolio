import { Link } from "lucide-react";
import { GitHubRepoCard } from "@/components/github/github-repo-card";
import { fetchGitHubRepos, separateRepos } from "@/lib/github/github-api";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function GitHubRepoSection() {
    const repos = await fetchGitHubRepos();
    const { original } = separateRepos(repos);

    const featuredRepos = original.slice(0, 6); // Display only the first 6 repos

    if (featuredRepos.length === 0) {
        return null;
    }

    return null;
    //  (
    //     <section className="mb-16">
    //         <div className="flex items-center justify-between mb-8">
    //             <div>
    //                 <div className="flex items-center gap-3 mb-2">
    //                     <Github className="h-6 w-6 text-primary" />
    //                     <h2 className="text-3xl font-bold">GitHub Projects</h2>
    //                 </div>
    //                 <p className="text-muted-foreground">Recent projects from my GitHub profile</p>
    //             </div>
    //             <Button asChild variant="outline">
    //                 <Link href="/github">View All on GitHub</Link>
    //             </Button>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {featuredRepos.map((repo) => (
    //                 <GitHubRepoCard key={repo.id} repo={repo} />
    //             ))}
    //         </div>
    //     </section>
    // )
}