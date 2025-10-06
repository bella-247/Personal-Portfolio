export interface Award {
    id: string;
    name: string;
    year: string;
    category: "academic" | "professional" | "personal";
    description: string;
    image?: string;
    badge?: string;
    organization?: string;
}

export const awards: Award[] = [
    {
        id: "1",
        name: "Best Innovation Award",
        year: "2024",
        category: "professional",
        description:
            "Recognized for developing an innovative AI-powered solution that improved team productivity by 40%",
        image: "/awards/innovation-award.jpg",
        badge: "trophy",
        organization: "Tech Innovation Summit",
    },
    {
        id: "2",
        name: "Dean's List Excellence",
        year: "2023",
        category: "academic",
        description:
            "Achieved Dean's List honors for maintaining a 3.9 GPA while leading multiple student projects",
        image: "/awards/deans-list.jpg",
        badge: "medal",
        organization: "University",
    },
    {
        id: "3",
        name: "Hackathon Grand Prize",
        year: "2023",
        category: "professional",
        description:
            "Won first place at the National Hackathon for building a real-time collaboration platform in 48 hours",
        image: "/awards/hackathon-winner.jpg",
        badge: "trophy",
        organization: "National Hackathon 2023",
    },
    {
        id: "4",
        name: "Community Leadership Award",
        year: "2022",
        category: "personal",
        description:
            "Honored for mentoring 50+ aspiring developers and organizing community coding workshops",
        image: "/awards/community-leader.jpg",
        badge: "star",
        organization: "Local Tech Community",
    },
    {
        id: "5",
        name: "Outstanding Research Paper",
        year: "2022",
        category: "academic",
        description:
            "Published research on machine learning optimization techniques in a peer-reviewed journal",
        image: "/awards/research-paper.jpg",
        badge: "medal",
        organization: "Academic Conference",
    },
    {
        id: "6",
        name: "Employee of the Year",
        year: "2021",
        category: "professional",
        description:
            "Selected as Employee of the Year for exceptional contributions to product development and team growth",
        image: "/awards/employee-year.jpg",
        badge: "trophy",
        organization: "Previous Company",
    },
];
