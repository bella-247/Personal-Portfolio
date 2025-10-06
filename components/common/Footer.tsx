import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { contactInfos } from "@/app/contact/constants/contactInfos"
import { myInfo } from "@/app/me/constants/myInfo"

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Certifications", href: "/certifications" },
    { name: "Awards", href: "/awards" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
]

const socialLinks = [
    {
        name: "GitHub",
        href: contactInfos.github.url,
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: contactInfos.linkedin.url,
        icon: Linkedin,
    },
    {
        name: "Email",
        href: `mailto:${contactInfos.email}`,
        icon: Mail,
    },
]

export default function Footer() {
    return (
        <footer role="contentinfo" className="border-t border-border/40 bg-background">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Abel Mekonen</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">{myInfo.bio}</p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2" role="navigation" aria-label="Footer navigation">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-foreground">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${social.name} profile`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-8">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Abel Mekonen. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
