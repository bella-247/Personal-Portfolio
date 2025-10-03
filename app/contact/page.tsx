import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Mail, Github, Linkedin, Code, MapPin, Phone, Send } from "lucide-react"
import { contactInfos } from "./constants/contactInfos"

export default function ContactPage() {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: contactInfos.email,
            href: `mailto:${contactInfos.email}`,
        },
        {
            icon: Phone,
            label: "Phone",
            value: contactInfos.phone,
            href: `tel:${contactInfos.phone}`,
        },
        {
            icon: MapPin,
            label: "Location",
            value: contactInfos.location,
            href: "#",
        },
    ]

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: contactInfos.github.url,
            username: `${contactInfos.github.username}`,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: contactInfos.linkedin.url,
            username: `${contactInfos.linkedin.username}`,
        },
        {
            icon: Code,
            label: "LeetCode",
            href: contactInfos.leetcode.url,
            username: `${contactInfos.leetcode.username}`,
        },
    ]

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        I'm always excited to connect with fellow developers, discuss new opportunities, or collaborate on
                        interesting projects. Let's build something amazing together!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Send className="h-5 w-5" />
                                Send Me a Message
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Project Collaboration" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project or how we can work together..."
                                    rows={6}
                                />
                            </div>

                            <Button className="w-full" size="lg">
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">I'll get back to you within 24 hours!</p>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        {/* Contact Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-medium">{info.label}</div>
                                                <div className="text-muted-foreground">{info.value}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Connect With Me</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <TooltipProvider>
                                    <div className="space-y-4">
                                        {socialLinks.map((social, index) => {
                                            const Icon = social.icon
                                            return (
                                                <Tooltip key={index}>
                                                    <TooltipTrigger asChild>
                                                        <a
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                                                        >
                                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                                <Icon className="h-5 w-5 text-primary" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium">{social.label}</div>
                                                                <div className="text-sm text-muted-foreground">{social.username}</div>
                                                            </div>
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Visit my {social.label} profile</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            )
                                        })}
                                    </div>
                                </TooltipProvider>
                            </CardContent>
                        </Card>

                        {/* Availability */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Availability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span>Freelance Projects</span>
                                        <span className="text-green-600 font-medium">Available</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Full-time Opportunities</span>
                                        <span className="text-blue-600 font-medium">Open to Discuss</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Collaborations</span>
                                        <span className="text-green-600 font-medium">Always Interested</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <Card>
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Let's Build Something Great Together</h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                                from you. Let's turn your ideas into reality!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <a href="mailto:abel.mekonen@example.com">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email Me Directly
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <a href="https://linkedin.com/in/abel-mekonen" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-4 w-4 mr-2" />
                                        Connect on LinkedIn
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
