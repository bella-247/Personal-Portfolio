export interface Event {
    id: string;
    name: string;
    date: string;
    role: "participant" | "speaker" | "organizer" | "winner" | "mentor";
    type: "hackathon" | "workshop" | "conference" | "meetup" | "competition";
    description: string;
    learnings?: string;
    image?: string;
    link?: string;
    location?: string;
}

export const events: Event[] = [
    {
        id: "1",
        name: "Global Tech Summit 2024",
        date: "2024-03",
        role: "speaker",
        type: "conference",
        description:
            "Delivered a keynote presentation on 'The Future of AI in Web Development' to 500+ attendees",
        learnings:
            "Gained insights into emerging AI trends and connected with industry leaders",
        image: "/events/tech-summit-2024.jpg",
        link: "https://techsummit.example.com",
        location: "San Francisco, CA",
    },
    {
        id: "2",
        name: "React Advanced Hackathon",
        date: "2024-01",
        role: "winner",
        type: "hackathon",
        description:
            "Built a real-time collaborative coding platform and won first place among 100+ teams",
        learnings:
            "Mastered WebSocket implementation and learned advanced state management patterns",
        image: "/events/react-hackathon.jpg",
        location: "Virtual",
    },
    {
        id: "3",
        name: "Cloud Native Workshop Series",
        date: "2023-11",
        role: "mentor",
        type: "workshop",
        description:
            "Mentored 30+ developers in Kubernetes and microservices architecture over a 3-day intensive workshop",
        learnings:
            "Improved teaching skills and deepened understanding of cloud-native patterns",
        image: "/events/cloud-workshop.jpg",
        location: "Seattle, WA",
    },
    {
        id: "4",
        name: "DevFest 2023",
        date: "2023-09",
        role: "participant",
        type: "conference",
        description:
            "Attended sessions on modern web frameworks, AI/ML integration, and developer productivity tools",
        learnings:
            "Discovered new tools and best practices for building scalable applications",
        image: "/events/devfest-2023.jpg",
        link: "https://devfest.example.com",
        location: "Austin, TX",
    },
    {
        id: "5",
        name: "Local Tech Meetup",
        date: "2023-08",
        role: "organizer",
        type: "meetup",
        description:
            "Organized monthly meetup bringing together 50+ local developers to share knowledge and network",
        learnings:
            "Built strong community connections and improved event planning skills",
        image: "/events/tech-meetup.jpg",
        location: "Local Community Center",
    },
    {
        id: "6",
        name: "AI Innovation Challenge",
        date: "2023-06",
        role: "participant",
        type: "competition",
        description:
            "Competed in a 48-hour AI challenge to build innovative solutions using machine learning",
        learnings:
            "Explored cutting-edge AI models and rapid prototyping techniques",
        image: "/events/ai-challenge.jpg",
        location: "Boston, MA",
    },
];
