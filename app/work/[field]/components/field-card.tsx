import Link from "next/link"
import { ArrowRight, Code, Brain, Palette, Video, Box, Github, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Field } from "@/data/fields"

const iconMap = {
    Code,
    Brain,
    Palette,
    Video,
    Box,
    Github,
}

interface FieldCardProps {
    field: Field
}

export function FieldCard({ field }: FieldCardProps) {
    const Icon = iconMap[field.icon as keyof typeof iconMap] || Code

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
            {/* Gradient background */}
            <div className={`absolute inset-0 ${field.gradient} opacity-40 group-hover:opacity-70 transition-opacity`} />

            <CardHeader className="relative">
                <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${field.color} text-white`}>
                        <Icon className="h-6 w-6" />
                    </div>
                    {field.comingSoon && (
                        <Badge variant="secondary" className="gap-1">
                            <Sparkles className="h-3 w-3" />
                            Coming Soon
                        </Badge>
                    )}
                </div>
                <CardTitle className="text-xl mt-4">{field.name}</CardTitle>
                <CardDescription className="text-pretty">{field.description}</CardDescription>
            </CardHeader>

            <CardContent className="relative">
                <div className="flex flex-wrap gap-2 mb-4">
                    {field.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                        </Badge>
                    ))}
                    {field.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{field.skills.length - 3} more
                        </Badge>
                    )}
                </div>

                <Button asChild variant={field.comingSoon ? "outline" : "default"} className="w-full group/btn">
                    <Link href={field.comingSoon ? "#" : `/work/${field.id}`}>
                        {field.comingSoon ? "Coming Soon" : "Explore Projects"}
                        {!field.comingSoon && (
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        )}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
