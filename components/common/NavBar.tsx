"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/Theme-Toggle"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Me", href: "/me" },
    { name: "Work", href: "/work" },
]

const showcaseLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Achievements", href: "/achievements" },
    { name: "Certifications", href: "/certifications" },
    { name: "Awards", href: "/awards" },
    { name: "Events", href: "/events" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav
            role="banner"
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo/Brand */}
                    <Link href="/" className="text-xl font-bold text-foreground hover:text-muted-foreground transition-colors">
                        Abel Mekonen
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-2" role="navigation" aria-label="Main navigation">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                    pathname === item.href ? "text-foreground" : "text-muted-foreground",
                                )}
                                aria-current={pathname === item.href ? "page" : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "px-3 py-2 text-sm font-medium transition-colors hover:text-foreground gap-1",
                                        showcaseLinks.some((link) => pathname === link.href) ? "text-foreground" : "text-muted-foreground",
                                    )}
                                >
                                    Showcase
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                {showcaseLinks.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "w-full cursor-pointer",
                                                pathname === item.href && "bg-accent text-accent-foreground",
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href="/contact"
                            className={cn(
                                "block px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                                pathname === "/contact" ? "text-foreground" : "text-muted-foreground",
                            )}
                            aria-current={pathname === "/contact" ? "page" : undefined}
                        >
                            Contact
                        </Link>
                        <ThemeToggle />
                    </div>



                    {/* Mobile menu button */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="h-9 w-9"
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden" role="navigation" aria-label="Mobile navigation">
                        <div className="space-y-1 pb-3 pt-2">
                            {navigation.map((item) => (
                                <NavItem key={item.name} href={item.href} name={item.name} pathname={pathname} onClick={() => setIsOpen(false)} />
                            ))}

                            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Showcase
                            </div>

                            {showcaseLinks.map((item) => (
                                <NavItem key={item.name} href={item.href} mobile={true} name={item.name} pathname={pathname} onClick={() => setIsOpen(false)} />
                            ))}

                            <NavItem href="/contact" name="Contact" pathname={pathname} onClick={() => setIsOpen(false)} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}


function NavItem({ href, name, pathname, onClick, mobile = false }: any) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "block px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === href ? "text-foreground" : "text-muted-foreground",
                mobile && "pl-8 pr-6"
            )}
            aria-current={pathname === href ? "page" : undefined}
        >
            {name}
        </Link>
    )
}
