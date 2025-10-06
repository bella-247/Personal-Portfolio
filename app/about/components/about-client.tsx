"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { personalJourney, coreValues, gallery, funFacts } from "@/data/about"
import Image from "next/image"
import { Calendar, Heart, ImageIcon, Sparkles } from "lucide-react"

export function AboutClient() {
    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Get to know me better - my journey, values, and what makes me tick
                    </p>
                </div>

                {/* Tabs Navigation */}
                <Tabs defaultValue="journey" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                        <TabsTrigger value="journey" className="gap-2">
                            <Calendar className="h-4 w-4" />
                            Journey
                        </TabsTrigger>
                        <TabsTrigger value="values" className="gap-2">
                            <Heart className="h-4 w-4" />
                            Values
                        </TabsTrigger>
                        <TabsTrigger value="gallery" className="gap-2">
                            <ImageIcon className="h-4 w-4" />
                            Gallery
                        </TabsTrigger>
                        <TabsTrigger value="fun" className="gap-2">
                            <Sparkles className="h-4 w-4" />
                            Fun Facts
                        </TabsTrigger>
                    </TabsList>

                    {/* Journey Tab */}
                    <TabsContent value="journey" className="space-y-8">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                            <div className="space-y-8">
                                {personalJourney.map((item, index) => (
                                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 relative md:ml-20">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-12 top-8 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                                            {index + 1}
                                        </div>

                                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                                            <Badge variant="secondary" className="w-fit">
                                                {item.year}
                                            </Badge>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground mb-3">{item.description}</p>
                                                <Badge variant="outline" className="gap-1">
                                                    <Sparkles className="h-3 w-3" />
                                                    {item.milestone}
                                                </Badge>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    {/* Values Tab */}
                    <TabsContent value="values">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreValues.map((value, index) => (
                                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Gallery Tab */}
                    <TabsContent value="gallery">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {gallery.map((item) => (
                                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={"/assets/placeholder.png"}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Fun Facts Tab */}
                    <TabsContent value="fun">
                        <div className="max-w-3xl mx-auto">
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-center">Fun Facts About Me</h2>
                                <div className="space-y-4">
                                    {funFacts.map((fact, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                                {index + 1}
                                            </div>
                                            <p className="text-muted-foreground pt-1">{fact}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
