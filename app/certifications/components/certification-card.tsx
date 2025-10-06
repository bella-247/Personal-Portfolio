"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Calendar, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Certification } from "@/data/certifications"

interface CertificationCardProps {
    certification: Certification
}

export default function CertificationCard({ certification }: CertificationCardProps) {
    const [imageError, setImageError] = useState(false)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { year: "numeric", month: "long" })
    }

    return (
        <Card className="group flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="space-y-4">
                {/* Organization Logo */}
                <div className="flex items-center justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-muted">
                        <Image
                            src={certification.logo || "/placeholder.svg?height=60&width=60&query=certificate+logo"}
                            alt={`${certification.organization} logo`}
                            fill
                            className="object-contain p-2"
                            onError={() => setImageError(true)}
                        />
                    </div>
                </div>

                {/* Title and Organization */}
                <div className="space-y-2 text-center">
                    <CardTitle className="text-xl leading-tight">{certification.title}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-1 text-sm">
                        <Award className="h-4 w-4" />
                        {certification.organization}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-3">
                {/* Issue Date */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued {formatDate(certification.issueDate)}</span>
                </div>

                {/* Description */}
                {certification.description && (
                    <p className="text-center text-sm text-muted-foreground leading-relaxed">{certification.description}</p>
                )}
            </CardContent>

            <CardFooter className="flex gap-2">
                {/* View Certificate Dialog */}
                {certification.image && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="flex-1 bg-transparent" size="sm">
                                View Certificate
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>{certification.title}</DialogTitle>
                            </DialogHeader>
                            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-muted">
                                <Image
                                    src={certification.image || "/placeholder.svg"}
                                    alt={`${certification.title} certificate`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                )}

                {/* External Link */}
                {certification.link && (
                    <Button variant="default" size="sm" className="flex-1" asChild>
                        <a href={certification.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Verify
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
