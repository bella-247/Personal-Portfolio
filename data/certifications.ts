export interface Certification {
    id: string;
    title: string;
    organization: string;
    issueDate: string;
    logo?: string;
    image?: string;
    link?: string;
    description?: string;
}

export const certifications: Certification[] = [
    {
        id: "1",
        title: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        issueDate: "2024-01",
        logo: "/aws-logo.png",
        image: "/aws-certificate.jpg",
        link: "https://aws.amazon.com/certification/",
        description:
            "Professional-level certification for designing distributed systems on AWS",
    },
    {
        id: "2",
        title: "Google Cloud Professional Developer",
        organization: "Google Cloud",
        issueDate: "2023-11",
        logo: "/images/partners/google-cloud-logo.png",
        image: "/google-cloud-certificate.jpg",
        link: "https://cloud.google.com/certification",
        description:
            "Expertise in building scalable applications on Google Cloud Platform",
    },
    {
        id: "3",
        title: "Certified Kubernetes Administrator",
        organization: "Cloud Native Computing Foundation",
        issueDate: "2023-08",
        logo: "/kubernetes-logo.png",
        image: "/kubernetes-certificate.jpg",
        link: "https://www.cncf.io/certification/cka/",
        description: "Demonstrated skills in Kubernetes cluster administration",
    },
    {
        id: "4",
        title: "Meta Front-End Developer",
        organization: "Meta",
        issueDate: "2023-05",
        logo: "/meta-logo-abstract.png",
        image: "/meta-certificate.jpg",
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        description: "Professional certificate in modern front-end development",
    },
];
