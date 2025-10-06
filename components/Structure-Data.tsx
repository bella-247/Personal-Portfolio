import { contactInfos } from "@/app/contact/constants/contactInfos"
import { myInfo } from "@/app/me/constants/myInfo"

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abel Mekonen",
        jobTitle: "Fullstack Developer and Multi Disciplinary Enthusiast",
        description: myInfo.bio,
        url: contactInfos.website,
        image: `${contactInfos.website}/${myInfo.photo}`,
        sameAs: [contactInfos.github.url, contactInfos.linkedin.url, contactInfos.leetcode.url],
        knowsAbout: myInfo.knowledge,
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Addis Ababa Science and Technology University",
            department: "Software Engineering",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "Ethiopia",
        },
    }

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
