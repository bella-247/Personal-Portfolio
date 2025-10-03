export interface Skill {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    category:
        | "Language"
        | "Framework"
        | "Backend"
        | "Database"
        | "Tool"
        | "Cloud";
}

export const skills: Skill[] = [
    // Languages
    { name: "JavaScript", level: "Advanced", category: "Language" },
    { name: "TypeScript", level: "Advanced", category: "Language" },
    { name: "Python", level: "Intermediate", category: "Language" },
    { name: "Java", level: "Intermediate", category: "Language" },
    { name: "HTML/CSS", level: "Advanced", category: "Language" },

    // Frontend Frameworks
    { name: "React", level: "Advanced", category: "Framework" },
    { name: "Next.js", level: "Intermediate", category: "Framework" },
    { name: "Vue.js", level: "Intermediate", category: "Framework" },
    { name: "Tailwind CSS", level: "Advanced", category: "Framework" },

    // Backend
    { name: "Django", level: "Intermediate", category: "Backend" },
    { name: "Node.js", level: "Intermediate", category: "Backend" },
    { name: "Express.js", level: "Intermediate", category: "Backend" },
    { name: "FastAPI", level: "Beginner", category: "Backend" },

    // Databases
    { name: "PostgreSQL", level: "Intermediate", category: "Database" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "Redis", level: "Beginner", category: "Database" },

    // Tools & Cloud
    { name: "Git/GitHub", level: "Advanced", category: "Tool" },
    { name: "Docker", level: "Intermediate", category: "Tool" },
    { name: "AWS", level: "Beginner", category: "Cloud" },
    { name: "Vercel", level: "Intermediate", category: "Cloud" },
];

// Group skills by category for display
export const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {} as Record<string, Skill[]>);
