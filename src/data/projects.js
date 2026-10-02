// Non-translatable project data. Titles and descriptions live in
// src/locales/<locale>.js under projects.items[slug].
import thumbAzureCommands from "../../public/images/projects/azure-commands.webp";
import thumbCertifications from "../../public/images/projects/certifications.webp";
import thumbDevsUnited from "../../public/images/projects/devsunited.png";
import thumbHotels from "../../public/images/projects/hotels.png";
import thumbJSprojects from "../../public/images/projects/50projects.png";
import thumbGifos from "../../public/images/projects/gifos.png";
import thumbWeather from "../../public/images/projects/weather.png";

const projects = [
  {
    slug: "azure-commands",
    featured: true,
    year: 2026,
    stack:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, MDX, Azure CLI, PowerShell",
    website: "https://azure-commands.vercel.app",
    repo: "https://github.com/DavidSalomonDev/AzureCommands",
    thumbnail: thumbAzureCommands,
    images: ["/images/projects/azure-commands.webp"]
  },
  {
    slug: "certifications",
    featured: true,
    year: 2026,
    stack:
      "Next.js (App Router), TypeScript, Tailwind CSS, Python (PyMuPDF), Node.js",
    website: "https://certifications-alpha.vercel.app",
    repo: "https://github.com/DavidSalomonDev/certifications",
    thumbnail: thumbCertifications,
    images: ["/images/projects/certifications.webp"]
  },
  {
    slug: "devsunited",
    featured: false,
    year: 2021,
    stack: "ReactJS, Sass, Firebase",
    website: "https://devs-united.vercel.app",
    repo: "https://github.com/DavidSalomonDev/sprint-4_acamica",
    thumbnail: thumbDevsUnited,
    images: [
      "/images/projects/devsunited.png",
      "/images/projects/devsunited -1.png",
      "/images/projects/devsunited -2.png"
    ]
  },
  {
    slug: "hotels",
    featured: false,
    year: 2021,
    stack: "ReactJS, CSS Modules",
    website: "https://sprint-2-acamica.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/sprint-2_acamica",
    thumbnail: thumbHotels,
    images: [
      "/images/projects/hotels.png",
      "/images/projects/hotels -1.png",
      "/images/projects/hotels -2.png",
      "/images/projects/hotels -3.png"
    ]
  },
  {
    slug: "JSprojects",
    featured: false,
    year: 2020,
    stack: "HTML, CSS, JavaScript",
    website: "https://50daysproject.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/50daysproject",
    thumbnail: thumbJSprojects,
    images: [
      "/images/projects/50projects.png",
      "/images/projects/50projects -1.png",
      "/images/projects/50projects -2.png",
      "/images/projects/50projects -3.png"
    ]
  },
  {
    slug: "gifos",
    featured: false,
    year: 2021,
    stack: "ReactJS, Pure CSS",
    website: "https://sprint-3-acamica.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/sprint-3",
    thumbnail: thumbGifos,
    images: [
      "/images/projects/gifos.png",
      "/images/projects/gifos -1.png",
      "/images/projects/gifos -2.png",
      "/images/projects/gifos -3.png"
    ]
  },
  {
    slug: "weather",
    featured: false,
    year: 2020,
    stack: "HTML, CSS, JavaScript",
    website: "https://weather-davidsalomondev.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/weather",
    thumbnail: thumbWeather,
    images: ["/images/projects/weather.png"]
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archivedProjects = projects.filter((p) => !p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);

export default projects;
