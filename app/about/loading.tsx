import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <Skeleton className="h-12 w-64 mx-auto mb-4" />
                    <Skeleton className="h-6 w-96 mx-auto" />
                </div>

                <Skeleton className="h-12 w-full mb-12" />

                <div className="space-y-8">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-32 w-full" />
                    ))}
                </div>
            </div>
        </main>
    )
}
