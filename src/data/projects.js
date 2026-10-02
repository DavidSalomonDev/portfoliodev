// Non-translatable project data. Titles and descriptions live in
// src/locales/<locale>.js under projects.items[slug].
import imgN50projects1 from "../../public/images/projects/50projects-1.webp";
import imgN50projects2 from "../../public/images/projects/50projects-2.webp";
import imgN50projects3 from "../../public/images/projects/50projects-3.webp";
import imgN50projects from "../../public/images/projects/50projects.webp";
import imgAzureCommands from "../../public/images/projects/azure-commands.webp";
import imgCertifications from "../../public/images/projects/certifications.webp";
import imgDevsunited1 from "../../public/images/projects/devsunited-1.webp";
import imgDevsunited2 from "../../public/images/projects/devsunited-2.webp";
import imgDevsunited from "../../public/images/projects/devsunited.webp";
import imgGifos1 from "../../public/images/projects/gifos-1.webp";
import imgGifos2 from "../../public/images/projects/gifos-2.webp";
import imgGifos3 from "../../public/images/projects/gifos-3.webp";
import imgGifos from "../../public/images/projects/gifos.webp";
import imgHotels1 from "../../public/images/projects/hotels-1.webp";
import imgHotels2 from "../../public/images/projects/hotels-2.webp";
import imgHotels3 from "../../public/images/projects/hotels-3.webp";
import imgHotels from "../../public/images/projects/hotels.webp";
import imgWeather from "../../public/images/projects/weather.webp";

const projects = [
  {
    slug: "azure-commands",
    featured: true,
    year: 2026,
    stack:
      "Next.js, TypeScript, Tailwind CSS, shadcn/ui, MDX, Azure CLI, PowerShell",
    website: "https://azure-commands.vercel.app",
    repo: "https://github.com/DavidSalomonDev/AzureCommands",
    thumbnail: imgAzureCommands,
    images: [imgAzureCommands]
  },
  {
    slug: "certifications",
    featured: true,
    year: 2026,
    stack:
      "Next.js (App Router), TypeScript, Tailwind CSS, Python (PyMuPDF), Node.js",
    website: "https://certifications-alpha.vercel.app",
    repo: "https://github.com/DavidSalomonDev/certifications",
    thumbnail: imgCertifications,
    images: [imgCertifications]
  },
  {
    slug: "devsunited",
    featured: false,
    year: 2021,
    stack: "ReactJS, Sass, Firebase",
    website: "https://devs-united.vercel.app",
    repo: "https://github.com/DavidSalomonDev/sprint-4_acamica",
    thumbnail: imgDevsunited,
    images: [imgDevsunited, imgDevsunited1, imgDevsunited2]
  },
  {
    slug: "hotels",
    featured: false,
    year: 2021,
    stack: "ReactJS, CSS Modules",
    website: "https://sprint-2-acamica.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/sprint-2_acamica",
    thumbnail: imgHotels,
    images: [imgHotels, imgHotels1, imgHotels2, imgHotels3]
  },
  {
    slug: "JSprojects",
    featured: false,
    year: 2020,
    stack: "HTML, CSS, JavaScript",
    website: "https://50daysproject.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/50daysproject",
    thumbnail: imgN50projects,
    images: [imgN50projects, imgN50projects1, imgN50projects2, imgN50projects3]
  },
  {
    slug: "gifos",
    featured: false,
    year: 2021,
    stack: "ReactJS, Pure CSS",
    website: "https://sprint-3-acamica.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/sprint-3",
    thumbnail: imgGifos,
    images: [imgGifos, imgGifos1, imgGifos2, imgGifos3]
  },
  {
    slug: "weather",
    featured: false,
    year: 2020,
    stack: "HTML, CSS, JavaScript",
    website: "https://weather-davidsalomondev.vercel.app/",
    repo: "https://github.com/DavidSalomonDev/weather",
    thumbnail: imgWeather,
    images: [imgWeather]
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archivedProjects = projects.filter((p) => !p.featured);
export const getProject = (slug) => projects.find((p) => p.slug === slug);

export default projects;
