"use client"

import { useState } from "react"
import AwardCard from "./award-card"
import { Button } from "@/components/ui/button"
import type { Award } from "@/data/awards"

interface AwardsClientProps {
    awards: Award[]
}

export default function AwardsClient({ awards }: AwardsClientProps) {
    const [showAll, setShowAll] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>("all")

    // Sort awards by year (most recent first)
    const sortedAwards = [...awards].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))

    // Filter by category
    const filteredAwards =
        selectedCategory === "all" ? sortedAwards : sortedAwards.filter((award) => award.category === selectedCategory)

    // Show only first 3 awards initially
    const displayedAwards = showAll ? filteredAwards : filteredAwards.slice(0, 3)

    const categories = [
        { value: "all", label: "All Awards" },
        { value: "professional", label: "Professional" },
        { value: "academic", label: "Academic" },
        { value: "personal", label: "Personal" },
    ]

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <Button
                        key={category.value}
                        variant={selectedCategory === category.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                            setSelectedCategory(category.value)
                            setShowAll(false)
                        }}
                        className="transition-all"
                    >
                        {category.label}
                    </Button>
                ))}
            </div>

            {/* Awards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedAwards.map((award) => (
                    <AwardCard key={award.id} award={award} />
                ))}
            </div>

            {/* Show More Button */}
            {filteredAwards.length > 3 && !showAll && (
                <div className="flex justify-center pt-4">
                    <Button variant="outline" size="lg" onClick={() => setShowAll(true)} className="min-w-[200px]">
                        Explore More Awards ({filteredAwards.length - 3} more)
                    </Button>
                </div>
            )}

            {/* Show Less Button */}
            {showAll && filteredAwards.length > 3 && (
                <div className="flex justify-center pt-4">
                    <Button variant="outline" size="lg" onClick={() => setShowAll(false)} className="min-w-[200px]">
                        Show Less
                    </Button>
                </div>
            )}
        </div>
    )
}
