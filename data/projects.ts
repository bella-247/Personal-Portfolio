import { FieldTag } from "./fields";

export interface Project {
    title: string;
    description: string;
    github: string;
    live?: string;
    tags: string[];
    fieldTags: FieldTag[];
    featured?: boolean;
}
export const projects: Project[] = [
    // Web Development Projects
    {
        title: "Task Management App",
        description:
            "Manage tasks, deadlines, and progress with authentication.",
        github: "https://github.com/bella-247/task-manager",
        live: "https://task-manager.vercel.app",
        tags: ["React", "Django", "PostgreSQL"],
        fieldTags: ["web"],
        featured: true,
    },
    {
        title: "AASTU Social Website",
        description:
            "A platform for students to share posts, photos, and ideas.",
        github: "https://github.com/bella-247/social-site",
        tags: ["React", "Django REST", "JWT"],
        fieldTags: ["web"],
        featured: true,
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration.",
        github: "https://github.com/bella-247/ecommerce-platform",
        live: "https://ecommerce-demo.vercel.app",
        tags: ["Next.js", "Stripe", "MongoDB"],
        fieldTags: ["web"],
        featured: true,
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application with AI-powered responses.",
        github: "https://github.com/bella-247/ai-chat",
        tags: ["React", "OpenAI", "Socket.io"],
        fieldTags: ["web", "ai"],
        featured: false,
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio showcasing multi-disciplinary work and projects.",
        github: "https://github.com/bella-247/portfolio",
        live: "https://abelmekonen.vercel.app",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        fieldTags: ["web"],
        featured: false,
    },

    // AI/ML Projects
    {
        title: "Sentiment Analysis Tool",
        description:
            "Analyze text sentiment using machine learning models and natural language processing.",
        github: "https://github.com/bella-247/sentiment-analyzer",
        live: "https://sentiment-analyzer-demo.vercel.app",
        tags: ["Python", "TensorFlow", "NLP", "Flask"],
        fieldTags: ["ai"],
        featured: true,
    },
    {
        title: "Image Classification Model",
        description:
            "Deep learning model for classifying images into multiple categories with high accuracy.",
        github: "https://github.com/bella-247/image-classifier",
        tags: ["Python", "TensorFlow", "CNN", "Keras"],
        fieldTags: ["ai"],
        featured: false,
    },
    {
        title: "AI Content Generator",
        description:
            "Generate creative content using OpenAI GPT models with custom prompts and templates.",
        github: "https://github.com/bella-247/ai-content-gen",
        live: "https://ai-content-gen.vercel.app",
        tags: ["Next.js", "OpenAI API", "LangChain"],
        fieldTags: ["ai", "web"],
        featured: true,
    },

    // Graphics Design Projects
    {
        title: "Brand Identity Package",
        description:
            "Complete brand identity design including logo, color palette, and style guide for a tech startup.",
        github: "https://github.com/bella-247/brand-identity",
        tags: ["Figma", "Illustrator", "Branding"],
        fieldTags: ["graphics"],
        featured: true,
    },
    {
        title: "UI/UX Design System",
        description:
            "Comprehensive design system with reusable components, patterns, and guidelines.",
        github: "https://github.com/bella-247/design-system",
        tags: ["Figma", "UI/UX", "Design Tokens"],
        fieldTags: ["graphics"],
        featured: true,
    },
    {
        title: "Social Media Graphics",
        description:
            "Collection of engaging social media graphics and templates for various platforms.",
        github: "https://github.com/bella-247/social-graphics",
        tags: ["Photoshop", "Illustrator", "Social Media"],
        fieldTags: ["graphics"],
        featured: false,
    },
    {
        title: "Event Poster Series",
        description:
            "Eye-catching poster designs for university events and tech conferences.",
        github: "https://github.com/bella-247/event-posters",
        tags: ["Photoshop", "Typography", "Print Design"],
        fieldTags: ["graphics"],
        featured: false,
    },

    // Video Editing Projects
    {
        title: "Tech Tutorial Series",
        description:
            "Educational video series covering web development concepts with motion graphics and animations.",
        github: "https://github.com/bella-247/tech-tutorials",
        tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
        fieldTags: ["video"],
        featured: true,
    },
    {
        title: "Product Demo Videos",
        description:
            "Professional product demonstration videos with smooth transitions and engaging visuals.",
        github: "https://github.com/bella-247/product-demos",
        tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading"],
        fieldTags: ["video"],
        featured: true,
    },
    {
        title: "Event Highlight Reel",
        description:
            "Dynamic highlight reels from university events and tech meetups with cinematic editing.",
        github: "https://github.com/bella-247/event-highlights",
        tags: ["Premiere Pro", "After Effects", "Sound Design"],
        fieldTags: ["video"],
        featured: false,
    },

    // 3D Modeling Projects
    {
        title: "Mechanical Part Library",
        description:
            "Collection of precision-engineered mechanical parts and assemblies designed in SolidWorks.",
        github: "https://github.com/bella-247/mechanical-parts",
        tags: ["SolidWorks", "CAD", "Engineering"],
        fieldTags: ["3d"],
        featured: true,
    },
    {
        title: "3D Printed Prototypes",
        description:
            "Functional prototypes designed for 3D printing with optimized geometry and material usage.",
        github: "https://github.com/bella-247/3d-prototypes",
        tags: ["SolidWorks", "3D Printing", "Prototyping"],
        fieldTags: ["3d"],
        featured: true,
    },
    {
        title: "Product Design Models",
        description:
            "Consumer product designs with detailed assemblies, renderings, and technical drawings.",
        github: "https://github.com/bella-247/product-designs",
        tags: ["SolidWorks", "AutoCAD", "Product Design"],
        fieldTags: ["3d"],
        featured: false,
    },
];

export function getProjectsByField(fieldTag: FieldTag): Project[] {
    return projects.filter((project) => project.fieldTags.includes(fieldTag));
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((project) => project.featured);
}

export function getProjectsByTags(tags: string[]): Project[] {
    return projects.filter((project) =>
        project.tags.some((tag) => tags.includes(tag))
    );
}

export function getAllProjectTags(): string[] {
    const tagSet = new Set<string>();
    projects.forEach((project) => {
        project.tags.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
}