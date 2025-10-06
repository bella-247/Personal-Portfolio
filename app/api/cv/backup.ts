import puppeteer from "puppeteer";
import { myInfo } from "../../me/constants/myInfo";
import { contactInfos } from "../../contact/constants/contactInfos";
import { getFeaturedProjects } from "../../../data/projects";

// Default data
const defaultInfo = {
    name: myInfo.name || "Bella Mekonnen",
    role: myInfo.role || "Full-Stack Developer & AI Enthusiast",
    email: contactInfos.email || "abelmekonen247@gmail.com",
    phone: contactInfos.phone || "+251-912-345-678",
    location: contactInfos.location || "Addis Ababa, Ethiopia",
    website: contactInfos.website || "https://bella.dev",
    github: contactInfos.github || "https://github.com/bella-247",
    linkedin: contactInfos.linkedin.url || "https://linkedin.com/in/bella",
    photo: myInfo.fullPhotoPath || "https://via.placeholder.com/120", // replace with your image URL
    education:
        myInfo.education ||
        "Bachelor in Software Engineering at AASTU. Focus on Web Development, AI, and backend technologies.",
    experience: myInfo.experience || "2+",
    bio:
        myInfo.bio ||
        "Passionate Full-Stack Developer and AI enthusiast. Building scalable web apps and integrating AI features to solve real-world problems.",
    skills: Array.isArray(myInfo.knowledge)
        ? myInfo.knowledge
        : [
              "React",
              "Next.js",
              "Django",
              "Node.js",
              "AI API Integration",
              "PostgreSQL",
              "TailwindCSS",
          ],
    featured: getFeaturedProjects() || [
        {
            title: "Social Web Platform",
            description:
                "A platform for students to share posts, images, and videos, similar to a social network, using React, Django, and PostgreSQL.",
        },
        {
            title: "Task Manager SaaS",
            description:
                "Full-stack task management tool with AI task suggestions and prioritization using GPT API.",
        },
        {
            title: "AI Resume Generator",
            description:
                "Generates PDF resumes dynamically with personalized AI-powered suggestions and formatting.",
        },
    ],
};

// Generate HTML
function generateHtml(): string {
    const skillsHtml = defaultInfo.skills
        .map((skill) => `<span class="skill-tag">${skill}</span>`)
        .join("");

    const projectsHtml = defaultInfo.featured
        .map(
            (p) => `
      <div class="project-item">
        <div class="project-title">${p.title}</div>
        <p class="project-description">${p.description}</p>
      </div>`
        )
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${defaultInfo.name} - CV</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    color: #1f2937;
    background-color: #f9fafb;
    line-height: 1.5;
  }

  .container {
    display: grid;
    grid-template-columns: 30% 70%;
    min-height: 100vh;
    background-color: white;
  }

  /* Sidebar */
  .sidebar {
    background-color: #1e3a8a; /* deep blue */
    color: white;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    margin-bottom: 20px;
    background-image: url('${defaultInfo.photo}');
    background-size: cover;
    background-position: center;
  }
  .name {
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
  }
  .role {
    font-size: 0.95em;
    font-weight: 400;
    opacity: 0.9;
    text-align: center;
    margin-bottom: 20px;
  }

  .contact-info {
    font-size: 0.85em;
    margin-top: 15px;
    width: 100%;
  }
  .contact-info p, .contact-info a {
    color: white;
    text-decoration: none;
    margin: 5px 0;
    display: block;
    word-break: break-word;
  }

  .skills-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .skill-tag {
    background-color: #dbeafe;
    color: #1e3a8a;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.75em;
    font-weight: 500;
    margin: 4px;
  }

  /* Main Content */
  .main-content {
    padding: 30px 40px;
  }
  .section {
    margin-bottom: 25px;
    page-break-inside: avoid;
  }
  .section-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #1e3a8a;
    margin-bottom: 10px;
    border-bottom: 2px solid #dbeafe;
    padding-bottom: 5px;
  }

  .project-item {
    margin-top: 10px;
  }
  .project-title {
    font-weight: 600;
    color: #1e3a8a;
  }
  .project-description {
    font-size: 0.9em;
    color: #4b5563;
    margin-left: 10px;
  }

  /* Responsive print-friendly */
  @media print {
    body {
      background: white;
    }
    .container {
      grid-template-columns: 30% 70%;
    }
    .sidebar {
      -webkit-print-color-adjust: exact;
    }
    .skill-tag {
      -webkit-print-color-adjust: exact;
    }
  }
</style>
</head>
<body>
<div class="container">
  <!-- Sidebar -->
  <div class="sidebar">
    <div class="photo"></div>
    <div class="name">${defaultInfo.name}</div>
    <div class="role">${defaultInfo.role}</div>
    <div class="contact-info">
      <p><a href="mailto:${defaultInfo.email}">${defaultInfo.email}</a></p>
      <p>${defaultInfo.phone}</p>
      <p>${defaultInfo.location}</p>
      <p><a href="${defaultInfo.website}">${defaultInfo.website}</a></p>
      <p><a href="${defaultInfo.github}">GitHub</a> | <a href="${defaultInfo.linkedin}">LinkedIn</a></p>
    </div>
    <div class="skills-list">${skillsHtml}</div>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <div class="section">
      <div class="section-title">Profile</div>
      <p>${defaultInfo.bio}</p>
    </div>

    <div class="section">
      <div class="section-title">Experience</div>
      <p>${defaultInfo.experience}+ years of experience building web apps using React, Next.js, Django, and Node. Experience integrating AI APIs and developing full-stack SaaS solutions.</p>
    </div>

    <div class="section">
      <div class="section-title">Education</div>
      <p>${defaultInfo.education}</p>
    </div>

    <div class="section">
      <div class="section-title">Featured Projects</div>
      ${projectsHtml}
    </div>
  </div>
</div>
</body>
</html>
`;
}

// Puppeteer handler
export async function GET() {
    let browser;
    try {
        const htmlContent = generateHtml();
        browser = await puppeteer.launch({
            headless: "shell",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: "networkidle0" });

        const pdfBytes = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
                top: "10mm",
                right: "10mm",
                bottom: "10mm",
                left: "10mm",
            },
            preferCSSPageSize: true,
        });

        await browser.close();

        return new Response(pdfBytes as any, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${defaultInfo.name.replace(
                    /\s+/g,
                    "_"
                )}_CV.pdf"`,
            },
        });
    } catch (error) {
        console.error("PDF Generation Error:", error);
        if (browser) await browser.close();
        return new Response(
            `Failed to generate PDF: ${
                error instanceof Error ? error.message : "Unknown error"
            }`,
            {
                status: 500,
            }
        );
    }
}





// import puppeteer from "puppeteer";
// import { myInfo } from "../../me/constants/myInfo";
// import { contactInfos } from "../../contact/constants/contactInfos";
// import { getFeaturedProjects } from "../../../data/projects";

// // --- Configuration & Data Retrieval ---
// const PRIMARY_COLOR = "#1e3a8a"; // Tailwind 'blue-900' for dark blue accents
// const ACCENT_COLOR = "#dbeafe"; // Tailwind 'blue-100' for light background
// const TEXT_COLOR = "#1f2937"; // Tailwind 'gray-900'

// // Get default data if constants are empty (from your original code)
// const defaultInfo = {
//     name: myInfo.name || "Bella Mekonnen",
//     role: myInfo.role || "Full-Stack Developer & AI Enthusiast",
//     email: contactInfos.email || "bella@example.com",
//     phone: contactInfos.phone || "+251-912-345-678",
//     location: contactInfos.location || "Addis Ababa, Ethiopia",
//     website: contactInfos.website || "https://bella.dev",
//     education:
//         myInfo.education ||
//         "Bachelor in Software Engineering at AASTU. Focus on Web Development, AI, and backend technologies.",
//     experience: myInfo.experience || "2+",
//     bio:
//         myInfo.bio ||
//         "I am a passionate Full-Stack Developer and AI enthusiast. I focus on building scalable web apps, integrating AI features to solve real-world problems.",
//     skills: Array.isArray(myInfo.knowledge)
//         ? myInfo.knowledge
//         : [
//               "React",
//               "Next.js",
//               "Django",
//               "Node.js",
//               "AI API Integration",
//               "PostgreSQL",
//               "TailwindCSS",
//           ],
//     featured: getFeaturedProjects() || [
//         {
//             title: "Social Web Platform",
//             description:
//                 "A platform for students to share posts, images, and videos, similar to a social network, using React, Django, and PostgreSQL.",
//         },
//         {
//             title: "Task Manager SaaS",
//             description:
//                 "Full-stack task management tool with AI task suggestions and prioritization using GPT API.",
//         },
//         {
//             title: "AI Resume Generator",
//             description:
//                 "Generates PDF resumes dynamically with personalized AI-powered suggestions and formatting.",
//         },
//     ],
// };

// // ----------------------------------------------------
// // PART 1: HTML GENERATION
// // ----------------------------------------------------

// function generateHtml(): string {
//     const skillsHtml = defaultInfo.skills
//         .map((skill) => `<span class="skill-tag">${skill}</span>`)
//         .join("");

//     const projectsHtml = defaultInfo.featured
//         .map(
//             (p) => `
//         <div class="project-item">
//             <div class="project-title">${p.title}</div>
//             <p class="project-description">${p.description}</p>
//         </div>
//     `
//         )
//         .join("");

//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>${defaultInfo.name} - Portfolio</title>
//     <style>
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        
//         body {
//             font-family: 'Roboto', sans-serif;
//             color: ${TEXT_COLOR};
//             margin: 0;
//             padding: 0;
//             line-height: 1.6;
//         }

//         /* --- Print Specific CSS for Page Breaks --- */
//         .section {
//             padding-bottom: 10px;
//             margin-bottom: 15px;
//         }

//         .section:not(:last-child) {
//             border-bottom: 1px solid #eee;
//             /* Ensures a clean break after a section if it hits a page boundary */
//             page-break-after: avoid; 
//         }

//         /* --- Header Styles --- */
//         .header {
//             background-color: ${PRIMARY_COLOR};
//             color: white;
//             padding: 30px 50px;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//         }
//         .header h1 {
//             font-size: 2.2em;
//             font-weight: 700;
//             margin: 0;
//         }
//         .header h2 {
//             font-size: 1.1em;
//             font-weight: 300;
//             margin: 0;
//             opacity: 0.8;
//         }
//         .contact-info {
//             font-size: 0.9em;
//             text-align: right;
//             line-height: 1.4;
//         }
//         .contact-info a {
//             color: white;
//             text-decoration: none;
//         }

//         /* --- Main Content Styles --- */
//         .content {
//             padding: 20px 50px;
//         }
//         .section-title {
//             font-size: 1.3em;
//             font-weight: 700;
//             color: ${PRIMARY_COLOR};
//             margin-bottom: 5px;
//             border-bottom: 3px solid ${ACCENT_COLOR};
//             padding-bottom: 3px;
//             margin-top: 15px;
//         }
        
//         /* --- Skills Styling --- */
//         .skills-list {
//             margin-top: 10px;
//         }
//         .skill-tag {
//             display: inline-block;
//             background-color: ${ACCENT_COLOR};
//             color: ${PRIMARY_COLOR};
//             padding: 4px 8px;
//             border-radius: 4px;
//             font-size: 0.85em;
//             margin-right: 8px;
//             margin-bottom: 8px;
//             font-weight: 500;
//         }

//         /* --- Projects Styling --- */
//         .project-item {
//             margin-top: 10px;
//             margin-bottom: 15px;
//             page-break-inside: avoid; /* Keeps project together on one page if possible */
//         }
//         .project-title {
//             font-weight: 700;
//             color: ${PRIMARY_COLOR};
//             font-size: 1.05em;
//         }
//         .project-description {
//             margin-top: 5px;
//             margin-left: 10px;
//             font-size: 0.9em;
//             color: #4b5563;
//         }
//     </style>
// </head>
// <body>

//     <div class="header">
//         <div>
//             <h1>${defaultInfo.name}</h1>
//             <h2>${defaultInfo.role}</h2>
//         </div>
//         <div class="contact-info">
//             <p><a href="mailto:${defaultInfo.email}">${defaultInfo.email}</a></p>
//             <p>${defaultInfo.phone}</p>
//             <p><a href="${defaultInfo.website}">${defaultInfo.website}</a> | ${defaultInfo.location}</p>
//         </div>
//     </div>

//     <div class="content">
        
//         <div class="section">
//             <div class="section-title">About Me</div>
//             <p>${defaultInfo.bio}</p>
//         </div>

//         <div class="section">
//             <div class="section-title">Skills & Knowledge</div>
//             <div class="skills-list">${skillsHtml}</div>
//         </div>

//         <div class="section">
//             <div class="section-title">Experience & Education</div>
            
//             <h3>Experience</h3>
//             <p>${defaultInfo.experience}+ years of experience building web apps using React, Next.js, Django, and Node. Experience integrating AI APIs and developing full-stack SaaS solutions.</p>

//             <h3>Education</h3>
//             <p>${defaultInfo.education}</p>
//         </div>

//         <div class="section">
//             <div class="section-title">Featured Projects</div>
//             ${projectsHtml}
//         </div>

//     </div>

// </body>
// </html>
//     `;
// }

// // ----------------------------------------------------
// // PART 2: PUPPETEER API HANDLER (Replaces your original GET)
// // ----------------------------------------------------

// export async function GET() {
//     let browser;
//     try {
//         // 1. Generate the HTML content
//         const htmlContent = generateHtml();

//         // 2. Launch Puppeteer (Chromium browser)
//         // Use headless: 'new' for modern, stable performance
//         // You might need to add { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
//         // if running in a restricted container environment like Docker.
//         browser = await puppeteer.launch({ headless: "new" });
//         const page = await browser.newPage();

//         // 3. Set the HTML content
//         await page.setContent(htmlContent, {
//             // Wait until there are no more than 0 network connections for at least 500ms
//             waitUntil: "networkidle0",
//         });

//         // 4. Generate the PDF
//         const pdfBytes = await page.pdf({
//             format: "A4",
//             printBackground: true, // IMPORTANT: Allows background colors and images to be included
//             margin: {
//                 top: "0", // Margins are handled by the CSS padding (50px)
//                 right: "0",
//                 bottom: "0",
//                 left: "0",
//             },
//             // Optional: You can add page numbers/headers/footers here instead of in CSS
//             // displayHeaderFooter: true,
//             // footerTemplate: '<div style="font-size: 9px; margin: 0 50px; text-align: right; width: 100%;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
//         });

//         // 5. Close the browser
//         await browser.close();

//         // 6. Return the PDF as a response
//         return new Response(pdfBytes as any, {
//             status: 200,
//             headers: {
//                 "Content-Type": "application/pdf",
//                 "Content-Disposition": `attachment; filename="${(
//                     `${defaultInfo.name}'s CV` || "cv"
//                 ).replace(/\s+/g, "_")}.pdf"`,
//             },
//         });
//     } catch (error) {
//         console.error("PDF Generation Error:", error);
//         if (browser) await browser.close();
//         return new Response(
//             `Failed to generate PDF: ${
//                 error instanceof Error ? error.message : "Unknown error"
//             }`,
//             { status: 500 }
//         );
//     }
// }