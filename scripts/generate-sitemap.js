// Writes public/sitemap.xml with every page in every locale and its
// hreflang alternates. Runs automatically before `npm run build`.
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://www.davidsalomon.dev";
const LOCALES = ["en", "es"];
const DEFAULT_LOCALE = "en";

const root = path.join(__dirname, "..");
const projectsSource = fs.readFileSync(
  path.join(root, "src/data/projects.js"),
  "utf8"
);
const slugs = [...projectsSource.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const pages = [
  "/",
  "/projects",
  "/posts",
  ...slugs.map((s) => `/projects/${s}`)
];

const url = (page, locale) => {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (page === "/") return `${SITE_URL}${prefix || "/"}`;
  return `${SITE_URL}${prefix}${page}`;
};

const lastmod = new Date().toISOString().slice(0, 10);

const entries = pages.flatMap((page) =>
  LOCALES.map((locale) => {
    const alternates = [...LOCALES, "x-default"]
      .map((alt) => {
        const href = url(page, alt === "x-default" ? DEFAULT_LOCALE : alt);
        return `    <xhtml:link rel="alternate" hreflang="${alt}" href="${href}"/>`;
      })
      .join("\n");
    return `  <url>\n    <loc>${url(
      page,
      locale
    )}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
  })
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${entries.length} URLs`);
