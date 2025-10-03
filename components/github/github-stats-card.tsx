import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface GitHubStatsCardProps {
    icon: LucideIcon
    label: string
    value: number | string
    description?: string
}

export function GitHubStatsCard({ icon: Icon, label, value, description }: GitHubStatsCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{label}</div>
                        <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
                        {description && <div className="text-xs text-muted-foreground">{description}</div>}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
