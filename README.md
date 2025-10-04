# Abel Mekonen — Personal Portfolio

Hi — I'm Abel Mekonen, a multidisciplinary developer building web and AI-driven products with a focus on clean code, practical solutions, and continuous learning.

This repository is my personal portfolio website built with Next.js, Tailwind CSS and a small collection of components and utilities to showcase projects, skills, and contact information.

## About Me

-   Name: Abel Mekonen
-   Role: Multi Disciplinary Enthusiast / Fullstack Developer
-   Education: BSc. Software Engineering, Addis Ababa Science and Technology University (AASTU)
-   Experience: 2022 — present (experience shown dynamically on the site)

Short bio: Enthusiastic Fullstack Developer, building impactful solutions through Web, AI, and beyond. I enjoy solving problems, learning new technologies, and shipping polished user experiences.

## Skills & Interests

-   React, Next.js, TypeScript, JavaScript (ES6+)
-   Python, Django, Django REST Framework
-   API design, PostgreSQL, database management
-   Tailwind CSS, HTML5, CSS3, UI/UX design
-   AI & Machine Learning fundamentals
-   Problem solving (algorithms & data structures)
-   Other: Git/GitHub

## Highlights

-   Built multiple fullstack projects (see `/projects` route)
-   Solved 200+ problems on LeetCode to sharpen algorithmic skills
-   Active interest in combining AI with web applications

## What you'll find in this repo

-   `app/` — Next.js App Router pages (About, Projects, Skills, Work, Contact, etc.)
-   `components/` and `app/*/components` — Reusable UI components and sections
-   `data/` — Project, skill, and achievement metadata used by the site
-   `public/` — Static assets (profile photo and other images)
-   `lib/` — Utilities and API helpers (including GitHub API helpers)

## Run locally

Make sure Node.js (v16+ recommended) is installed. From the project root:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The `app/` directory contains the pages; `app/me/page.tsx` shows the About page content.

## Edit your content

Personal details are centralized in `app/me/constants/myInfo.ts`. Skills and longer descriptions are also available in `about-me.md` and the About page at `app/me/page.tsx`.

## Contact

Visit the Contact page (`/contact`) to see contact channels. The site uses `app/contact/constants/contactInfos.ts` to store contact info.

## License

This portfolio is published under the project license (see `LICENSE`).

---

If you'd like, I can further polish this README (add badges, screenshots, deployment instructions, or CI configuration). Let me know what you'd like to include.
