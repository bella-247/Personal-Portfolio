import { StaticImageData } from "next/image";

export interface Project {
    title: string;
    description: string;
    image?: StaticImageData;
    github?: string;
    live?: string;
    tags? : [string];
}
