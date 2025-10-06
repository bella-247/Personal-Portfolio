"use client"

import { useState } from "react"
import EventCard from "./event-card"
import { Button } from "@/components/ui/button"
import type { Event } from "@/data/events"

interface EventsClientProps {
    events: Event[]
}

export default function EventsClient({ events }: EventsClientProps) {
    const [selectedType, setSelectedType] = useState<string>("all")
    const [selectedRole, setSelectedRole] = useState<string>("all")

    // Sort events by date (most recent first)
    const sortedEvents = [...events].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
    })

    // Filter by type and role
    let filteredEvents = sortedEvents
    if (selectedType !== "all") {
        filteredEvents = filteredEvents.filter((event) => event.type === selectedType)
    }
    if (selectedRole !== "all") {
        filteredEvents = filteredEvents.filter((event) => event.role === selectedRole)
    }

    const types = [
        { value: "all", label: "All Types" },
        { value: "hackathon", label: "Hackathons" },
        { value: "conference", label: "Conferences" },
        { value: "workshop", label: "Workshops" },
        { value: "meetup", label: "Meetups" },
        { value: "competition", label: "Competitions" },
    ]

    const roles = [
        { value: "all", label: "All Roles" },
        { value: "speaker", label: "Speaker" },
        { value: "winner", label: "Winner" },
        { value: "mentor", label: "Mentor" },
        { value: "organizer", label: "Organizer" },
        { value: "participant", label: "Participant" },
    ]

    return (
        <div className="space-y-8">
            {/* Filters */}
            <div className="space-y-4">
                {/* Type Filter */}
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Filter by Type</h3>
                    <div className="flex flex-wrap gap-2">
                        {types.map((type) => (
                            <Button
                                key={type.value}
                                variant={selectedType === type.value ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedType(type.value)}
                                className="transition-all"
                            >
                                {type.label}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Role Filter */}
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Filter by Role</h3>
                    <div className="flex flex-wrap gap-2">
                        {roles.map((role) => (
                            <Button
                                key={role.value}
                                variant={selectedRole === role.value ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedRole(role.value)}
                                className="transition-all"
                            >
                                {role.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Events Timeline */}
            <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => <EventCard key={event.id} event={event} index={index} />)
                ) : (
                    <div className="py-12 text-center text-muted-foreground">
                        No events found matching your filters. Try adjusting your selection.
                    </div>
                )}
            </div>
        </div>
    )
}
