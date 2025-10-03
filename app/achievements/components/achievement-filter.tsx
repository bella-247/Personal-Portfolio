"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { fields, type FieldTag } from "@/data/fields"
import type { Achievement } from "@/data/achievements"
import { AchievementCard } from "@/app/achievements/components/achievement-card"
import { FilterIcon } from "lucide-react"

interface AchievementFilterProps {
    achievements: Achievement[]
}

export function AchievementFilter({ achievements }: AchievementFilterProps) {
    const [selectedField, setSelectedField] = useState<FieldTag | "all">("all")
    const [selectedCategory, setSelectedCategory] = useState<string | "all">("all")

    // Get unique categories
    const categories = Array.from(new Set(achievements.map((a) => a.category).filter(Boolean))) as string[]

    // Filter achievements
    const filteredAchievements = achievements.filter((achievement) => {
        const matchesField =
            selectedField === "all" || achievement.fieldTags?.includes(selectedField) || !achievement.fieldTags

        const matchesCategory = selectedCategory === "all" || achievement.category === selectedCategory

        return matchesField && matchesCategory
    })

    // Group by year
    const achievementsByYear = filteredAchievements.reduce(
        (acc, achievement) => {
            if (!acc[achievement.year]) {
                acc[achievement.year] = []
            }
            acc[achievement.year].push(achievement)
            return acc
        },
        {} as Record<string, Achievement[]>,
    )

    return (
        <div>
            {/* Field Filter */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <FilterIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Filter by Field:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant={selectedField === "all" ? "default" : "outline"}
                        className="cursor-pointer transition-colors"
                        onClick={() => setSelectedField("all")}
                    >
                        All Fields
                    </Badge>
                    {fields
                        .filter((field) => !field.comingSoon)
                        .map((field) => (
                            <Badge
                                key={field.id}
                                variant={selectedField === field.id ? "default" : "outline"}
                                className="cursor-pointer transition-colors"
                                onClick={() => setSelectedField(field.id)}
                            >
                                {field.name}
                            </Badge>
                        ))}
                </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <FilterIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Filter by Category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant={selectedCategory === "all" ? "default" : "outline"}
                        className="cursor-pointer transition-colors"
                        onClick={() => setSelectedCategory("all")}
                    >
                        All Categories
                    </Badge>
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className="cursor-pointer transition-colors"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Results */}
            <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                    Showing {filteredAchievements.length} of {achievements.length} achievements
                </p>
            </div>

            {/* Timeline */}
            {Object.keys(achievementsByYear).length > 0 ? (
                <div className="space-y-8">
                    {Object.entries(achievementsByYear)
                        .sort(([a], [b]) => Number.parseInt(b) - Number.parseInt(a))
                        .map(([year, yearAchievements]) => (
                            <div key={year}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        {year}
                                    </div>
                                    <div className="flex-1 h-0.5 bg-border"></div>
                                </div>
                                <div className="ml-20 space-y-4">
                                    {yearAchievements.map((achievement, index) => (
                                        <AchievementCard key={index} achievement={achievement} />
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                    <p className="text-muted-foreground">No achievements found matching your filters.</p>
                </div>
            )}
        </div>
    )
}
