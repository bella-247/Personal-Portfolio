"use client";
import { Suspense, useState } from "react"
import Link from "next/link"
import { fetchGitHubPinnedRepos, fetchGitHubRepos, separateRepos } from "@/lib/github/github-api"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitHubRepoCard } from "../../components/github/github-repo-card"
import { ProjectCard } from "@/app/projects/components/project-card"
import { Search } from "lucide-react"
import { GitHubRepoSection } from "./components/github-repo-section";


// Get all unique tags for filtering
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)))

function GitHubReposLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(4)].map((_, i) => (
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




export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesTag = selectedTag === "all" || project.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects I've built using various technologies. Each project represents a learning journey
            and a step forward in my development skills.
          </p>
        </div>

        {/* GitHub Repos Section */}
        <Suspense fallback={<GitHubReposLoading />}>
          <GitHubRepoSection />
        </Suspense>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={search} name="search" placeholder="Search projects..." className="pl-10" onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTag == "all" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedTag("all")}
            >
              All
            </Badge>
            {allTags.map((tag, index) => (
              <Badge
                key={index}
                variant={selectedTag == tag ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          )}
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Project Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{allTags.length}</div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{projects.filter((p) => p.live).length}</div>
              <div className="text-muted-foreground">Live Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
