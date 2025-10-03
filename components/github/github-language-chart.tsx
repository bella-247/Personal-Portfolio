"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Language {
    name: string
    count: number
    percentage: number
}

interface GitHubLanguageChartProps {
    languages: Language[]
}

// Language colors (GitHub-style)
const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00ADD8",
    Rust: "#dea584",
    Ruby: "#701516",
    PHP: "#4F5D95",
    C: "#555555",
    "C++": "#f34b7d",
    "C#": "#178600",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    Shell: "#89e051",
    Vue: "#41b883",
    React: "#61dafb",
}

export function GitHubLanguageChart({ languages }: GitHubLanguageChartProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Language Distribution</CardTitle>
                <CardDescription>Most used programming languages across all repositories</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {languages.slice(0, 8).map((language) => (
                        <div key={language.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor: languageColors[language.name] || "#8b949e",
                                        }}
                                    ></div>
                                    <span className="font-medium">{language.name}</span>
                                </div>
                                <span className="text-muted-foreground">{language.percentage.toFixed(1)}%</span>
                            </div>
                            <Progress value={language.percentage} className="h-2" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
