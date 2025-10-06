import type { Metadata } from "next"
import { AboutClient } from "./components/about-client"

export const metadata: Metadata = {
    title: "About Me | Personal Journey & Values",
    description: "Learn more about my journey, core values, and what drives me as a developer and creator.",
}

export default function AboutPage() {
    return <AboutClient />
}
