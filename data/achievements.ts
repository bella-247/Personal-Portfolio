import { FieldTag } from "./fields";

// Achievements data for Abel Mekonen's portfolio
export interface Achievement {
    year: string;
    text: string;
    category?: "Education" | "Professional" | "Personal" | "Technical";
    fieldTags?: FieldTag[];
}
export const achievements: Achievement[] = [
    // Web Development
    {
        year: "2023",
        text: "Joined AASTU Software Engineering Department",
        category: "Education",
        fieldTags: ["web"],
    },
    {
        year: "2024",
        text: "Solved 190+ problems on LeetCode",
        category: "Technical",
        fieldTags: ["web"],
    },
    {
        year: "2024",
        text: "Completed Advanced React and Next.js certification",
        category: "Professional",
        fieldTags: ["web"],
    },
    {
        year: "2024",
        text: "Built and deployed 5+ full-stack applications",
        category: "Technical",
        fieldTags: ["web"],
    },
    {
        year: "2025",
        text: "Building fullstack projects with React + Django",
        category: "Technical",
        fieldTags: ["web"],
    },

    // AI/ML
    {
        year: "2024",
        text: "Started exploring AI/ML with OpenAI and LangChain",
        category: "Technical",
        fieldTags: ["ai"],
    },
    {
        year: "2024",
        text: "Completed Machine Learning Specialization on Coursera",
        category: "Education",
        fieldTags: ["ai"],
    },
    {
        year: "2024",
        text: "Built sentiment analysis model with 92% accuracy",
        category: "Technical",
        fieldTags: ["ai"],
    },
    {
        year: "2025",
        text: "Developed AI-powered content generation tools",
        category: "Technical",
        fieldTags: ["ai"],
    },

    // Graphics Design
    {
        year: "2023",
        text: "Started learning UI/UX design with Figma",
        category: "Education",
        fieldTags: ["graphics"],
    },
    {
        year: "2024",
        text: "Designed brand identity for 3 local startups",
        category: "Professional",
        fieldTags: ["graphics"],
    },
    {
        year: "2024",
        text: "Created comprehensive design system for university project",
        category: "Technical",
        fieldTags: ["graphics"],
    },
    {
        year: "2025",
        text: "Completed Adobe Creative Suite certification",
        category: "Professional",
        fieldTags: ["graphics"],
    },

    // Video Editing
    {
        year: "2023",
        text: "Started video editing with Adobe Premiere Pro",
        category: "Education",
        fieldTags: ["video"],
    },
    {
        year: "2024",
        text: "Edited promotional videos for university events",
        category: "Professional",
        fieldTags: ["video"],
    },
    {
        year: "2024",
        text: "Created tech tutorial series with 10K+ views",
        category: "Technical",
        fieldTags: ["video"],
    },
    {
        year: "2025",
        text: "Mastered color grading and motion graphics",
        category: "Technical",
        fieldTags: ["video"],
    },

    // 3D Modeling
    {
        year: "2023",
        text: "Learned SolidWorks for mechanical design",
        category: "Education",
        fieldTags: ["3d"],
    },
    {
        year: "2024",
        text: "Designed and 3D printed 15+ functional prototypes",
        category: "Technical",
        fieldTags: ["3d"],
    },
    {
        year: "2024",
        text: "Completed CAD certification program",
        category: "Professional",
        fieldTags: ["3d"],
    },
    {
        year: "2025",
        text: "Created mechanical part library for engineering projects",
        category: "Technical",
        fieldTags: ["3d"],
    },

    // GitHub/Open Source
    {
        year: "2025",
        text: "Contributing to open-source projects",
        category: "Professional",
        fieldTags: ["github"],
    },
    {
        year: "2024",
        text: "Maintained 100+ day GitHub contribution streak",
        category: "Personal",
        fieldTags: ["github"],
    },
    {
        year: "2025",
        text: "Published 3 open-source libraries on npm",
        category: "Technical",
        fieldTags: ["github"],
    },
];

export function getAchievementsByField(fieldTag: FieldTag): Achievement[] {
    return achievements.filter((achievement) =>
        achievement.fieldTags?.includes(fieldTag)
    );
}
