import type { Metadata } from "next"
import { certifications } from "@/data/certifications"
import CertificationCard from "./components/certification-card"

export const metadata: Metadata = {
    title: "Certifications | Abel Mekonen",
    description:
        "Professional certifications and credentials showcasing expertise in cloud computing, web development, and modern technologies.",
}

export default function CertificationsPage() {
    return (
        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Certifications</h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                    Professional certifications and credentials that validate my expertise across various technologies and
                    platforms.
                </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert) => (
                    <CertificationCard key={cert.id} certification={cert} />
                ))}
            </div>
        </main>
    )
}
