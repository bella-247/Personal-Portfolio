import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Achievement } from "@/data/achievements"

interface AchievementCardProps {
    achievement: Achievement
    className?: string
}

const categoryColors = {
    Education: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    Professional: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    Personal: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    Technical: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
}

export function AchievementCard({ achievement, className }: AchievementCardProps) {
    return (
        <Card className={`group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${className}`}>
            <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                        <Badge variant="outline" className="font-mono text-sm">
                            {achievement.year}
                        </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                        <p className="text-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {achievement.text}
                        </p>
                        {achievement.category && (
                            <Badge variant="secondary" className={`text-xs ${categoryColors[achievement.category]}`}>
                                {achievement.category}
                            </Badge>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
