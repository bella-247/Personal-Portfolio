import type { Metadata } from "next"
import { awards } from "@/data/awards"
import AwardsClient from "./components/awards-client"

export const metadata: Metadata = {
    title: "Awards & Recognition | Abel Mekonen",
    description:
        "Professional awards, academic honors, and personal achievements recognizing excellence in technology, leadership, and innovation.",
}

export default function AwardsPage() {
    return (
        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Awards & Recognition</h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                    Celebrating achievements and milestones across professional, academic, and personal endeavors.
                </p>
            </div>

            {/* Awards Display */}
            <AwardsClient awards={awards} />
        </main>
    )
}
