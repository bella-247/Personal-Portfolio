import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, MapPin, GraduationCap, Code, Heart } from "lucide-react"
import { contactInfos } from "../contact/constants/contactInfos"
import { myInfo } from "./constants/myInfo"
import { DownloadCVButton } from "./components/download-cv-button"

export default function AboutPage() {
  const timeline = [
    {
      year: "2023",
      title: "Started Software Engineering at AASTU",
      description:
        "Began my journey in Software Engineering at Addis Ababa Science and Technology University, diving deep into computer science fundamentals and programming.",
    },
    {
      year: "2024",
      title: "Fullstack Development Focus",
      description:
        "Specialized in fullstack development with React, Next.js, and Django, building multiple real-world projects and gaining practical experience.",
    },
    {
      year: "2024",
      title: "Mastered Problem Solving",
      description:
        "Solved 190+ problems on LeetCode, strengthening my algorithmic thinking and data structure knowledge while preparing for technical interviews.",
    },

    {
      year: "2025",
      title: "AI & Advanced Technologies",
      description:
        "Expanding into AI development and advanced web technologies, working on innovative projects that combine traditional web development with cutting-edge AI.",
    },
  ]

  const interests = [
    "Web Development",
    "Artificial Intelligence",
    "Problem Solving",
    "Open Source",
    "Mobile Development",
    "Cloud Computing",
    "Machine Learning",
    "UI/UX Design",
    "DevOps",
    "Blockchain",
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image src={myInfo.photo} alt="Abel Mekonen" fill className="object-cover rounded-full shadow-xl" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About Abel Mekonen</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A passionate fullstack developer with a love for creating innovative solutions and solving complex problems
            through code.
          </p>
        </div>

        {/* Personal Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">{contactInfos.location}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">{myInfo.education}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">{myInfo.experience}+ Years Coding</p>
            </CardContent>
          </Card>
        </div>

        {/* About Story */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Hi! I'm Abel Mekonen, a passionate fullstack developer currently pursuing Software Engineering at Addis
                Ababa Science and Technology University. My journey into programming began with curiosity about how
                websites and applications work, and it quickly evolved into a deep passion for creating digital
                solutions that make a real impact.
              </p>
              <p className="mb-4">
                I specialize in modern web technologies including React, Next.js, and Django, allowing me to build
                comprehensive applications from frontend to backend. My experience spans from creating responsive user
                interfaces to designing robust server architectures and database systems.
              </p>
              <p className="mb-4">
                Problem-solving is at the core of what I do. I've solved over 190 problems on LeetCode, which has
                sharpened my algorithmic thinking and helped me approach complex challenges with structured solutions.
                This analytical mindset translates directly into my development work, where I focus on writing clean,
                efficient, and maintainable code.
              </p>
              <p>
                When I'm not coding, I'm usually learning about new technologies, contributing to open source projects,
                or exploring the intersection of AI and web development. I believe in continuous learning and staying at
                the forefront of technological advancement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12">My Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-16 bg-border mt-4"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Interests & Passions</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-16">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">My Learning Philosophy</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
              I believe in continuous learning and staying updated with the latest technologies. Each skill represents
              hours of practice, real-world application, and ongoing refinement. I'm always eager to learn new
              technologies and deepen my understanding of existing ones.
            </p>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects and connect with fellow developers. Feel free to
            reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Projects</Link>
            </Button>
            <div className="flex items-center">
              <DownloadCVButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
