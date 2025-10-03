import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Abel Mekonen - Fullstack Developer Portfolio",
        short_name: "Abel Mekonen",
        description:
            "Enthusiastic Fullstack Developer building impactful solutions through Web, AI, and beyond.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#3b82f6",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
