import { Suspense } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Code, Brain, Palette, Video, Box, Github, ExternalLink, Star, GitFork, Users, Sparkles } from "lucide-react"
import { fields, getFieldById } from "@/data/fields"
import type { FieldTag } from "@/data/fields"
import { getProjectsByField } from "@/data/projects"
import { getAchievementsByField } from "@/data/achievements"
import { ProjectCard } from "@/app/projects/components/project-card";
import { fetchGitHubStats } from "@/lib/github/github-api"
import { GitHubStatsCard } from "@/components/github/github-stats-card"
import { GitHubLanguageChart } from "@/components/github/github-language-chart"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { contactInfos } from "@/app/contact/constants/contactInfos"

const iconMap = {
  Code,
  Brain,
  Palette,
  Video,
  Box,
  Github,
}

export function generateStaticParams() {
  return fields.map((field) => ({
    field: field.id,
  }))
}

export function generateMetadata({ params }: { params: { field: string } }) {
  const field = getFieldById(params.field as FieldTag)

  if (!field) {
    return {
      title: "Field Not Found",
    }
  }

  return {
    title: `${field.name} - Abel Mekonen`,
    description: field.description,
  }
}



function GitHubStatsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="h-32 animate-pulse">
          <CardContent className="p-6">
            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-muted rounded w-1/2"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

async function GitHubStatsSection() {
  const stats = await fetchGitHubStats()

  if (!stats) {
    return null
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Github className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">GitHub Statistics</h2>
          </div>
          <p className="text-muted-foreground">My coding activity and contributions on GitHub</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/github">View GitHub Profile</Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GitHubStatsCard icon={Code} label="Public Repositories" value={stats.totalRepos} />
        <GitHubStatsCard icon={Star} label="Total Stars" value={stats.totalStars} />
        <GitHubStatsCard icon={GitFork} label="Total Forks" value={stats.totalForks} />
        <GitHubStatsCard icon={Users} label="Followers" value={stats.followers} />
      </div>

      {/* Language Chart */}
      {stats.languages.length > 0 && (
        <div className="max-w-2xl mx-auto">
          <GitHubLanguageChart languages={stats.languages} />
        </div>
      )}
    </section>
  )
}



export default function FieldPage({ params }: { params: { field: string } }) {
  const field = getFieldById(params.field as FieldTag)

  if (!field) {
    notFound()
  }

  const Icon = iconMap[field.icon as keyof typeof iconMap] || Code
  const projects = getProjectsByField(field.id)
  const achievements = getAchievementsByField(field.id)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Fields
          </Link>
        </Button>

        {/* Field Header */}
        <div className="mb-12">
          <div
            className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${field.color} text-white mb-6`}
          >
            <Icon className="h-10 w-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{field.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl">{field.description}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {field.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* GitHub Stats Section (only for GitHub field) */}
        {field.id === "github" && (
          <Suspense fallback={<GitHubStatsLoading />}>
            <GitHubStatsSection />
          </Suspense>
        )}

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">No projects yet in this field.</p>
                <p className="text-sm text-muted-foreground">Check back soon for updates!</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{achievement.text}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{achievement.year}</p>
                      </div>
                      {achievement.category && <Badge variant="outline">{achievement.category}</Badge>}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Link for GitHub field */}
        {field.id === "github" && (
          <Card className="bg-muted/50">
            <CardContent className="py-8 text-center">
              <h3 className="text-xl font-bold mb-3">View My GitHub Profile</h3>
              <p className="text-muted-foreground mb-6">
                Explore my repositories, contributions, and open source work on GitHub.
              </p>
              <Button asChild size="lg">
                <a href={contactInfos.github.url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
