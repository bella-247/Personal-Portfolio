import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/common/NavBar"
import Footer from "@/components/common/Footer";
import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./globals.css"

export const metadata: Metadata = {
    title: {
        default: "Abel Mekonen - Fullstack Developer",
        template: "%s | Abel Mekonen",
    },
    description:
        "Enthusiastic Fullstack Developer building impactful solutions through Web, AI, and beyond. Specializing in React, Next.js, Django, and modern web technologies.",
    generator: "Next.js",
    applicationName: "Abel Mekonen Portfolio",
    keywords: [
        "Abel Mekonen",
        "Fullstack Developer",
        "React",
        "Next.js",
        "Django",
        "Web Development",
        "AI",
        "Software Engineer",
        "AASTU",
        "Ethiopia",
        "Portfolio",
    ],
    authors: [{ name: "Abel Mekonen", url: "https://abel-mekonen.vercel.app" }],
    creator: "Abel Mekonen",
    publisher: "Abel Mekonen",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://abel-mekonen.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abel-mekonen.vercel.app",
        title: "Abel Mekonen - Fullstack Developer",
        description: "Enthusiastic Fullstack Developer building impactful solutions through Web, AI, and beyond.",
        siteName: "Abel Mekonen Portfolio",
        images: [
            {
                url: "/me.jpg",
                width: 1200,
                height: 630,
                alt: "Abel Mekonen - Fullstack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abel Mekonen - Fullstack Developer",
        description: "Enthusiastic Fullstack Developer building impactful solutions through Web, AI, and beyond.",
        images: ["/me.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
}


// const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Suspense fallback={null}>
                        {/* <QueryClientProvider client={queryClient}> */}
                            <div className="min-h-screen flex flex-col">
                                <Navbar />
                                <main className="flex-1">{children}</main>
                                <Footer />
                            </div>
                        {/* </QueryClientProvider> */}
                    </Suspense>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
