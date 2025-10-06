"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Event } from "@/data/events"

interface EventCardProps {
    event: Event
    index: number
}

const roleColors = {
    speaker: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    winner: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    mentor: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    organizer: "bg-green-500/10 text-green-700 dark:text-green-400",
    participant: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
}

const typeColors = {
    hackathon: "bg-red-500/10 text-red-700 dark:text-red-400",
    workshop: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    conference: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    meetup: "bg-green-500/10 text-green-700 dark:text-green-400",
    competition: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
}

export default function EventCard({ event, index }: EventCardProps) {
    const [imageError, setImageError] = useState(false)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
    }

    return (
        <Card
            className="group transition-all duration-300 hover:shadow-lg"
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                {/* Event Image */}
                <div className="relative aspect-video md:aspect-square overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-muted">
                    <Image
                        src={event.image || "/placeholder.svg?height=200&width=200&query=event+photo"}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                </div>

                {/* Event Details */}
                <div className="flex flex-col p-6">
                    <CardHeader className="p-0 pb-4">
                        <div className="mb-3 flex flex-wrap gap-2">
                            <Badge variant="secondary" className={roleColors[event.role]}>
                                {event.role.charAt(0).toUpperCase() + event.role.slice(1)}
                            </Badge>
                            <Badge variant="secondary" className={typeColors[event.type]}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                        </div>
                        <CardTitle className="text-2xl">{event.name}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-4 pt-2">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(event.date)}
                            </span>
                            {event.location && (
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {event.location}
                                </span>
                            )}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4 p-0">
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                        {/* Learnings */}
                        {event.learnings && (
                            <div className="flex gap-2 rounded-lg bg-muted/50 p-3">
                                <Lightbulb className="h-5 w-5 flex-shrink-0 text-primary" />
                                <div>
                                    <p className="text-sm font-medium">Key Takeaways</p>
                                    <p className="text-sm text-muted-foreground">{event.learnings}</p>
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                            {event.image && (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            View Photos
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-3xl">
                                        <DialogHeader>
                                            <DialogTitle>{event.name}</DialogTitle>
                                        </DialogHeader>
                                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
                                            <Image src={event.image || "/placeholder.svg"} alt={event.name} fill className="object-contain" />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            )}
                            {event.link && (
                                <Button variant="default" size="sm" asChild>
                                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Event Link
                                    </a>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </div>
            </div>
        </Card>
    )
}
