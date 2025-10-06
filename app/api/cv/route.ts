import { type NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { myInfo } from "@/app/me/constants/myInfo";
import { projects } from "@/data/projects";
import { contactInfos } from "@/app/contact/constants/contactInfos";
import type { ContactInfos } from "@/app/contact/constants/contactInfos";
import type { MyInfo } from "@/app/me/constants/myInfo";

type contactInfos = ContactInfos;
type myInfo = MyInfo;

export async function GET(request: NextRequest) {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();

        // Get featured projects
        const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

        // Create HTML content for CV
        const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${myInfo.name} - CV</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
          }
          
          .container {
            max-width: 210mm;
            margin: 0 auto;
            background: white;
          }
          
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
          }
          
          .header h1 {
            font-size: 36px;
            margin-bottom: 8px;
            font-weight: 700;
          }
          
          .header .title {
            font-size: 18px;
            opacity: 0.95;
            margin-bottom: 20px;
          }
          
          .header .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 14px;
          }
          
          .header .contact-info a {
            color: white;
            text-decoration: none;
          }
          
          .content {
            padding: 40px;
          }
          
          .section {
            margin-bottom: 32px;
          }
          
          .section-title {
            font-size: 24px;
            color: #667eea;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #667eea;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .about-text {
            font-size: 14px;
            line-height: 1.8;
            color: #555;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 12px;
          }
          
          .skill-item {
            background: #f7fafc;
            padding: 10px 16px;
            border-radius: 6px;
            font-size: 13px;
            text-align: center;
            border: 1px solid #e2e8f0;
          }
          
          .projects-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .project-item {
            background: #f7fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
          }
          
          .project-item h3 {
            font-size: 18px;
            color: #2d3748;
            margin-bottom: 8px;
          }
          
          .project-item p {
            font-size: 13px;
            color: #555;
            margin-bottom: 12px;
            line-height: 1.6;
          }
          
          .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .project-tag {
            background: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 11px;
            color: #667eea;
            border: 1px solid #667eea;
          }
          
          .experience-badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 8px;
          }
          
          .footer {
            text-align: center;
            padding: 20px;
            background: #f7fafc;
            font-size: 12px;
            color: #718096;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${myInfo.name}</h1>
            <div class="title">${myInfo.role}</div>
            <div class="contact-info">
              <span>📧 ${contactInfos.email}</span>
              <span>📱 ${contactInfos.phone}</span>
              <span>📍 ${contactInfos.location}</span>
              ${
                  contactInfos.github.url
                      ? `<a href="${contactInfos.github.url}">🔗 GitHub</a>`
                      : ""
              }
              ${
                  contactInfos.linkedin.url
                      ? `<a href="${contactInfos.linkedin.url}">🔗 LinkedIn</a>`
                      : ""
              }
            </div>
          </div>
          
          <div class="content">
            <div class="section">
              <h2 class="section-title">👤 About Me</h2>
              <p class="about-text">${
                  myInfo.bio ||
                  "Passionate developer with expertise in modern web technologies."
              }</p>
              <div class="experience-badge">
                ${myInfo.experience || "5+"} Years of Experience
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">💼 Skills</h2>
              <div class="skills-grid">
                ${
                    myInfo.knowledge
                        ?.map(
                            (skill: string) =>
                                `<div class="skill-item">${skill}</div>`
                        )
                        .join("") ||
                    '<div class="skill-item">JavaScript</div><div class="skill-item">React</div><div class="skill-item">Node.js</div>'
                }
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">🚀 Featured Projects</h2>
              <div class="projects-list">
                ${featuredProjects
                    .map(
                        (project) => `
                  <div class="project-item">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                      ${
                          project.tags
                              ?.map(
                                  (tag: string) =>
                                      `<span class="project-tag">${tag}</span>`
                              )
                              .join("") || ""
                      }
                    </div>
                  </div>
                `
                    )
                    .join("")}
              </div>
            </div>
          </div>
          
          <div class="footer">
            Generated on ${new Date().toLocaleDateString()} | ${
            myInfo.name
        } - Professional CV
          </div>
        </div>
      </body>
      </html>
    `;

        await page.setContent(htmlContent, { waitUntil: "networkidle0" });

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
            },
        });

        await browser.close();

        return new NextResponse(pdfBuffer as any, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${myInfo.name.replace(
                    /\s+/g,
                    "_"
                )}_CV.pdf"`,
                "Content-Length": pdfBuffer.length.toString(),
                "Cache-Control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                Expires: "0",
            },
        });
    } catch (error) {
        console.error("Error generating CV:", error);
        return NextResponse.json(
            { error: "Failed to generate CV" },
            { status: 500 }
        );
    }
}
