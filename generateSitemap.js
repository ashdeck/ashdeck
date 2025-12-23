import { writeFile } from "fs/promises";

const baseUrl = "https://ashdeck.com"; // Change to your domain
const routes = [
  "", // homepage
  "task-manager",
  "about",
  "website-blocker",
  "pomodoro-timer",
  "pricing"
]; // Add all your app routes

const generateSitemap = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `
    <url>
        <loc>${baseUrl}/${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
  })
  .join("")}
</urlset>`;

  try {
    await writeFile("./public/sitemap.xml", sitemap);
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("❌ Error writing sitemap file:", error);
  }
};

generateSitemap();
