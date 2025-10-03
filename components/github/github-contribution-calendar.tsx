"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ContributionCalendar } from "@/lib/github/github-types"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

interface GitHubContributionCalendarProps {
    calendar: ContributionCalendar
}

export function GitHubContributionCalendar({ calendar }: GitHubContributionCalendarProps) {
    // Get contribution level color
    const getContributionColor = (count: number): string => {
        if (count === 0) return "bg-muted"
        if (count < 3) return "bg-green-200 dark:bg-green-900"
        if (count < 6) return "bg-green-300 dark:bg-green-700"
        if (count < 9) return "bg-green-400 dark:bg-green-600"
        return "bg-green-500 dark:bg-green-500"
    }

    // Get month labels for the calendar
    const getMonthLabels = () => {
        const months: { month: string; weekIndex: number }[] = []
        let currentMonth = ""

        calendar.weeks.forEach((week, index) => {
            const firstDay = week.contributionDays[0]
            if (firstDay) {
                const month = format(new Date(firstDay.date), "MMM")
                if (month !== currentMonth) {
                    currentMonth = month
                    months.push({ month, weekIndex: index })
                }
            }
        })

        return months
    }

    const monthLabels = getMonthLabels()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Contribution Activity</CardTitle>
                <CardDescription><span className="text-lg">{calendar.totalContributions}</span> contributions in the last year</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full">
                        {/* Month labels */}
                        <div className="flex justify-between gap-[3px] mb-2 ml-8">
                            {monthLabels.map(({ month, weekIndex }) => (
                                <div
                                    key={`${month}-${weekIndex}`}
                                    className="text-xs text-muted-foreground"
                                >
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="flex gap-[3px]">
                            {/* Day labels */}
                            <div className="flex flex-col gap-[3px] text-xs text-muted-foreground pr-2">
                                <div className="h-3">Mon</div>
                                <div className="h-3"></div>
                                <div className="h-3">Wed</div>
                                <div className="h-3"></div>
                                <div className="h-3">Fri</div>
                                <div className="h-3"></div>
                                <div className="h-3">Sun</div>
                            </div>

                            {/* Contribution squares */}
                            <TooltipProvider>
                                <div className="flex gap-[3px]">
                                    {calendar.weeks.map((week, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-[3px]">
                                            {week.contributionDays.map((day) => (
                                                <Tooltip key={day.date}>
                                                    <TooltipTrigger asChild>
                                                        <div
                                                            className={cn(`w-3 h-3 rounded-[3px] ${getContributionColor(day.contributionCount)} hover:ring-2 hover:ring-primary cursor-pointer transition-all`)}
                                                        />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="font-semibold">{day.contributionCount} contributions</p>
                                                        <p className="text-xs text-muted-foreground">{format(new Date(day.date), "MMM d, yyyy")}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </TooltipProvider>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                            <span>Less</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-sm bg-muted"></div>
                                <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900"></div>
                                <div className="w-3 h-3 rounded-sm bg-green-300 dark:bg-green-700"></div>
                                <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-600"></div>
                                <div className="w-3 h-3 rounded-sm bg-green-500 dark:bg-green-500"></div>
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
