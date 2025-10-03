import { fields } from "@/data/fields"
import { FieldCard } from "@/app/work/[field]/components/field-card"
import { Briefcase, Sparkles } from "lucide-react"

export const metadata = {
    title: "Work & Fields - Abel Mekonen",
    description:
        "Explore my work across multiple disciplines including Web Development, AI/ML, Graphics Design, Video Editing, and 3D Modeling.",
}

export default function WorkPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                        <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
                        My Work &{" "}
                        <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                        I work across multiple disciplines, combining technical expertise with creative skills. Explore my projects
                        and contributions in each field below.
                    </p>
                </div>

                {/* Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {fields.map((field) => (
                        <FieldCard key={field.id} field={field} />
                    ))}
                </div>

                {/* Coming Soon Notice */}
                <div className="bg-muted/50 rounded-lg p-8 text-center border border-border">
                    <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
                        <Sparkles className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">More Fields Coming Soon</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm constantly expanding my skillset and exploring new creative and technical fields. Check back regularly
                        to see new additions to my portfolio.
                    </p>
                </div>
            </div>
        </div>
    )
}
