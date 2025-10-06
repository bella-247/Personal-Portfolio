import { achievements } from "@/data/achievements"
import { AchievementFilter } from "@/app/achievements/components/achievement-filter"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Code, GraduationCap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "View Abel Mekonen's key milestones and accomplishments as a fullstack developer, including 200+ LeetCode problems solved and multiple successful projects.",
}

export default function AchievementsPage() {
  // Group achievements by year
  const achievementsByYear = achievements.reduce(
    (acc, achievement) => {
      if (!acc[achievement.year]) {
        acc[achievement.year] = []
      }
      acc[achievement.year].push(achievement)
      return acc
    },
    {} as Record<string, typeof achievements>,
  )

  const milestones = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Started Software Engineering journey at AASTU",
      year: "2023",
    },
    {
      icon: Code,
      title: "Problem Solving",
      description: "Solved 200+ problems on LeetCode",
      year: "2024",
    },
    {
      icon: Target,
      title: "Fullstack Development",
      description: "Built multiple fullstack applications",
      year: "2024-2025",
    },
    {
      icon: Trophy,
      title: "Continuous Growth",
      description: "Always learning and improving",
      year: "Ongoing",
    },
  ]

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Achievements</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A timeline of my key milestones, accomplishments, and growth as a developer. Each achievement represents a
            step forward in my journey.
          </p>
        </div>

        {/* Key Milestones */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{milestone.title}</h3>
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Timeline with Filters */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">Achievement Timeline</h2>
          <AchievementFilter achievements={achievements} />
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{achievements.length}</div>
              <div className="text-muted-foreground">Total Achievements</div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">LeetCode Problems</div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Learning</div>
            </CardContent>
          </Card>
        </div>

        {/* Future Goals */}
        <Card className="hover-lift">
          <CardContent className="p-8 text-center">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              These achievements are just the beginning. I'm constantly setting new goals, learning emerging
              technologies, and working on projects that challenge me to grow. The journey of learning and achieving
              never stops!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
