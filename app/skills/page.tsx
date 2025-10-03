import { skills } from "@/data/skills"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Group skills by category
const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  },
  {} as Record<string, typeof skills>,
)

// Skill level to percentage mapping
const levelToPercentage = {
  Beginner: 25,
  Intermediate: 60,
  Advanced: 85,
  Expert: 95,
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and expertise across different areas of software
            development.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 mb-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  {category === "Language" && "💻"}
                  {category === "Framework" && "⚛️"}
                  {category === "Backend" && "🔧"}
                  {category === "Database" && "🗄️"}
                  {category === "Tool" && "🛠️"}
                  {category === "Cloud" && "☁️"}
                </span>
                {category}s
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <Badge
                          variant={
                            skill.level === "Expert"
                              ? "default"
                              : skill.level === "Advanced"
                                ? "secondary"
                                : skill.level === "Intermediate"
                                  ? "outline"
                                  : "outline"
                          }
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      <Progress
                        value={levelToPercentage[skill.level as keyof typeof levelToPercentage]}
                        className="h-2"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Total Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{skills.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{Object.keys(skillsByCategory).length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Advanced+</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {skills.filter((s) => s.level === "Advanced" || s.level === "Expert").length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {skills.filter((s) => s.level === "Beginner" || s.level === "Intermediate").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">My Learning Philosophy</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
              I believe in continuous learning and staying updated with the latest technologies. Each skill represents
              hours of practice, real-world application, and ongoing refinement. I'm always eager to learn new
              technologies and deepen my understanding of existing ones.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
