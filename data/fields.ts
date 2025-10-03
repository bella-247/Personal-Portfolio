export type FieldTag = "web" | "ai" | "graphics" | "video" | "3d" | "github";

export interface Field {
    id: FieldTag;
    name: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    gradient: string;
    skills: string[];
    comingSoon?: boolean;
}

export const fields: Field[] = [
    {
        id: "web",
        name: "Web Development",
        title: "Full-Stack Web Development",
        description:
            "Building modern, responsive web applications with cutting-edge technologies and best practices.",
        icon: "Code",
        color: "from-blue-500 to-cyan-500",
        gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Django",
            "PostgreSQL",
            "Tailwind CSS",
        ],
    },
    {
        id: "ai",
        name: "AI & Machine Learning",
        title: "Artificial Intelligence & ML",
        description:
            "Exploring AI/ML technologies, building intelligent systems, and integrating AI into applications.",
        icon: "Brain",
        color: "from-purple-500 to-pink-500",
        gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
        skills: [
            "Python",
            "TensorFlow",
            "OpenAI API",
            "LangChain",
            "Data Analysis",
        ],
    },
    {
        id: "graphics",
        name: "Graphics Design",
        title: "Graphics & Visual Design",
        description:
            "Creating stunning visual designs, branding materials, and user interfaces.",
        icon: "Palette",
        color: "from-orange-500 to-red-500",
        gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
        skills: ["Adobe Photoshop", "Figma", "Illustrator", "UI/UX Design"],
    },
    {
        id: "video",
        name: "Video Editing",
        title: "Video Production & Editing",
        description:
            "Producing and editing professional videos, motion graphics, and multimedia content.",
        icon: "Video",
        color: "from-green-500 to-emerald-500",
        gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
        skills: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    },
    {
        id: "3d",
        name: "3D Modeling",
        title: "3D Modeling & CAD",
        description:
            "Designing and modeling 3D objects, mechanical parts, and engineering solutions with SolidWorks.",
        icon: "Box",
        color: "from-indigo-500 to-blue-500",
        gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
        skills: ["SolidWorks", "AutoCAD", "3D Printing", "CAD Design"],
    },
    {
        id: "github",
        name: "GitHub",
        title: "Open Source & GitHub",
        description:
            "Contributing to open source, sharing code, and collaborating with the developer community.",
        icon: "Github",
        color: "from-gray-700 to-gray-900",
        gradient: "bg-gradient-to-br from-gray-700/10 to-gray-900/10",
        skills: ["Git", "GitHub Actions", "Open Source", "Code Review"],
    },
];

export function getFieldById(id: FieldTag): Field | undefined {
    return fields.find((field) => field.id === id);
}

export function getFieldsByTag(tags: FieldTag[]): Field[] {
    return fields.filter((field) => tags.includes(field.id));
}
