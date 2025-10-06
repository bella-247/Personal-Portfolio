import path from "path";
const experience = new Date().getFullYear() - 2022;
const imagePath = path.resolve(__dirname, "../public/me.jpg");
const imageUrl = `file://${imagePath}`;


export const myInfo = {
    name: "Abel Mekonen",
    role: "Multi Disciplinary Enthusiast",
    bio: "Enthusiastic Fullstack Developer, building impactful solutions through Web, AI, and beyond.",
    education:
        "BSc. Software Engineering, at AASTU",
    experience : experience,
    knowledge: [
        "Web Development",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Python",
        "Django",
        "Node.js",
        "API Design",
        "Database Management",
        "Git & GitHub",
        "Artificial Intelligence",
        "Machine Learning",
        "Graphics Design",
        "UI/UX Design",
        "Problem Solving",
        "Team Collaboration",
        "3D Modeling",
        "Video Editing",
    ],
    photo : "/me.jpg",
    fullPhotoPath : imageUrl
};

export type MyInfo = typeof myInfo;