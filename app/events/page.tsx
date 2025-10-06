import type { Metadata } from "next"
import { events } from "@/data/events"
import EventsClient from "./components/events-client"

export const metadata: Metadata = {
    title: "Events & Participation | Abel Mekonen",
    description:
        "Hackathons, conferences, workshops, and tech events where I've participated, spoken, mentored, and contributed to the developer community.",
}

export default function EventsPage() {
    return (
        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Events & Participation</h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                    A journey through hackathons, conferences, workshops, and community events that have shaped my growth as a
                    developer and leader.
                </p>
            </div>

            {/* Events Display */}
            <EventsClient events={events} />
        </main>
    )
}
