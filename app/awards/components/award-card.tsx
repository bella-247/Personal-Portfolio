"use client"

import { useState } from "react"
import Image from "next/image"
import { Trophy, Medal, Star, Calendar, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Award } from "@/data/awards"

interface AwardCardProps {
    award: Award
}

const badgeIcons = {
    trophy: Trophy,
    medal: Medal,
    star: Star,
}

const categoryColors = {
    professional: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    academic: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    personal: "bg-green-500/10 text-green-700 dark:text-green-400",
}

export default function AwardCard({ award }: AwardCardProps) {
    const [imageError, setImageError] = useState(false)
    const BadgeIcon = award.badge ? badgeIcons[award.badge as keyof typeof badgeIcons] : Trophy

    return (
        <Card className="group flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="space-y-4">
                {/* Badge Icon */}
                <div className="flex items-center justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                        <BadgeIcon className="h-8 w-8 text-primary" />
                    </div>
                </div>

                {/* Title and Year */}
                <div className="space-y-2 text-center">
                    <CardTitle className="text-xl leading-tight">{award.name}</CardTitle>
                    <div className="flex items-center justify-center gap-2">
                        <Badge variant="secondary" className={categoryColors[award.category]}>
                            {award.category.charAt(0).toUpperCase() + award.category.slice(1)}
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-4">
                {/* Year and Organization */}
                <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{award.year}</span>
                    </div>
                    {award.organization && (
                        <div className="flex items-center justify-center gap-2">
                            <Building2 className="h-4 w-4" />
                            <span>{award.organization}</span>
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-center text-sm text-muted-foreground leading-relaxed">{award.description}</p>

                {/* View Image */}
                {award.image && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="w-full text-sm text-primary hover:underline">View Award Image</button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>{award.name}</DialogTitle>
                            </DialogHeader>
                            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-muted">
                                <Image
                                    src={award.image || "/placeholder.svg"}
                                    alt={`${award.name} award`}
                                    fill
                                    className="object-contain"
                                    onError={() => setImageError(true)}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </CardContent>
        </Card>
    )
}
