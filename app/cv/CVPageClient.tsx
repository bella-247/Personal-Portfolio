"use client"
import { contactInfos, type ContactInfos } from "../contact/constants/contactInfos"
import type { MyInfo } from "@/app/me/constants/myInfo"

import { myInfo } from "@/app/me/constants/myInfo"
import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Award } from "lucide-react"

type myInfo = MyInfo;
type contactInfos = ContactInfos;


export default function CVPageClient() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 4)
    const topSkills = skills.slice(0, 12)

    return (
        <div className="min-h-screen bg-white">
            {/* Print styles */}
            <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-after: always;
          }
          @page {
            margin: 0.5in;
            size: letter;
          }
        }
      `}</style>

            {/* Print button - hidden when printing */}
            <div className="no-print fixed top-4 right-4 z-50">
                <button
                    onClick={() => window.print()}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-colors font-medium"
                >
                    Print / Save as PDF
                </button>
            </div>

            {/* CV Content */}
            <div className="max-w-[8.5in] mx-auto bg-white p-8">
                {/* Header with gradient */}
                <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-6">
                    <h1 className="text-4xl font-bold mb-2">{myInfo.name}</h1>
                    <p className="text-xl mb-4 opacity-90">{myInfo.role}</p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${contactInfos.email}`} className="hover:underline">
                                {contactInfos.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{contactInfos.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{contactInfos.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm">
                        <a
                            href={contactInfos.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href={contactInfos.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={contactInfos.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <Globe className="h-4 w-4" />
                            <span>Portfolio</span>
                        </a>
                    </div>
                </header>

                {/* About */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-purple-600">
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{myInfo.bio}</p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-purple-600">Technical Skills</h2>
                    <div className="grid grid-cols-3 gap-3">
                        {topSkills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                                <span className="text-gray-700 font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-purple-600">Featured Projects</h2>
                    <div className="space-y-4">
                        {featuredProjects.map((project) => (
                            <div key={project.title} className="border-l-4 border-purple-600 pl-4">
                                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 5).map((tag) => (
                                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Badge */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 pb-2 border-b-2 border-purple-600">Experience</h2>
                    <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                        <Award className="h-8 w-8 text-purple-600" />
                        <div>
                            <p className="font-bold text-gray-900">5+ Years of Experience</p>
                            <p className="text-sm text-gray-600">Full Stack Development & Software Engineering</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
                    <p>Generated from {contactInfos.website}</p>
                </footer>
            </div>
        </div>
    )
}
