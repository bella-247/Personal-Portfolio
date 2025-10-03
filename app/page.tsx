import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Linkedin, Code, ArrowRight, Mail, Briefcase } from "lucide-react"
import { getFeaturedProjects } from "@/data/projects"
import { fields } from "@/data/fields"
import { ProjectCard } from "@/app/projects/components/project-card"
import { FieldCard } from "@/app/work/[field]/components/field-card"
import { StructuredData } from "@/components/Structure-Data"
import { myInfo } from "./me/constants/myInfo"
import { contactInfos } from "./contact/constants/contactInfos"

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()
  const activeFields = fields.filter((field) => !field.comingSoon)

  return (
    <>
      <StructuredData />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/me.jpg"
                    alt={myInfo.role}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
                  <span className="text-primary">I am {myInfo.name}</span>,
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {myInfo.role}
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl">
                  Building impactful solutions across Web Development, AI/ML, Graphics Design, Video Editing, and 3D
                  Modeling. Passionate about creating innovative work that solves real-world problems.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button asChild size="lg" className="group">
                    <Link href="/work">
                      Explore My Work
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">
                      Contact Me
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Social Links */}
                <TooltipProvider>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                          <a href={contactInfos.github.url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Profile</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                          <a href={contactInfos.linkedin.url} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn Profile</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
                          <a href={contactInfos.leetcode.url} target="_blank" rel="noopener noreferrer">
                            <Code className="h-5 w-5" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LeetCode Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </section>

        {/* Fields Overview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">What I Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I work across multiple creative and technical disciplines, bringing diverse skills to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {activeFields.slice(0, 3).map((field) => (
                <FieldCard key={field.id} field={field} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/work">
                  View All Fields
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-3xl mx-auto">
              I'm a passionate creator currently studying Software Engineering at AASTU. With expertise spanning web
              development, AI/ML, and creative fields, I love building solutions that make a difference. I've solved
              190+ problems on LeetCode and am constantly learning new technologies to stay at the forefront of
              innovation.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/me">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Highlights from my portfolio showcasing work across different fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/work" className="group">
                <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Work & Fields</h3>
                  <p className="text-sm text-muted-foreground">Explore my work across multiple disciplines</p>
                </div>
              </Link>

              <Link href="/achievements" className="group">
                <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Achievements</h3>
                  <p className="text-sm text-muted-foreground">View my milestones and accomplishments</p>
                </div>
              </Link>

              <Link href="/projects" className="group">
                <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Projects</h3>
                  <p className="text-sm text-muted-foreground">Browse my complete project portfolio</p>
                </div>
              </Link>

              <Link href="/contact" className="group">
                <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-sm text-muted-foreground">Get in touch for collaborations</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
