import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
    project: Project
    className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
            <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground group-hover:text-foreground transition-colors">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>View on GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        {project.live && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>View Live Demo</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                </div>
                <CardDescription className="text-muted-foreground group-hover:text-foreground leading-relaxed">{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
