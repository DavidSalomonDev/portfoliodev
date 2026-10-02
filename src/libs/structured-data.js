import certifications from "data/certifications";
import { EMAIL, SITE_URL, SOCIALS } from "data/site";
import { localizedUrl } from "libs/i18n";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = (t) => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: "David Salomón Martínez Valladares",
  alternateName: "David Salomón",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/david.jpg`,
  email: `mailto:${EMAIL}`,
  jobTitle: "Cloud Engineer",
  description: t.meta.description,
  worksFor: { "@type": "Organization", name: "GBM" },
  address: { "@type": "PostalAddress", addressCountry: "SV" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de El Salvador" },
    { "@type": "EducationalOrganization", name: "ESI School of Management" }
  ],
  knowsAbout: t.home.skills.flatMap((group) => group.items),
  hasCredential: certifications.map((cert) => ({
    "@type": "EducationalOccupationalCredential",
    name: cert.name,
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: cert.issuer },
    dateCreated: cert.issued,
    expires: cert.expires,
    url: cert.url
  })),
  sameAs: [
    SOCIALS.linkedin,
    SOCIALS.github,
    "https://david-salomon.com",
    "https://blog.davidsalomon.dev"
  ]
});

const website = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: "David Salomón",
  inLanguage: ["en", "es"],
  publisher: { "@id": PERSON_ID }
});

export const homeSchema = (t, locale) => {
  const url = localizedUrl("/", locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        name: t.meta.title,
        inLanguage: locale,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID }
      },
      person(t),
      website()
    ]
  };
};

export const projectSchema = (project, text, locale) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: text.title,
  description: text.summary,
  url: localizedUrl(`/projects/${project.slug}`, locale),
  codeRepository: project.repo,
  sameAs: project.website,
  keywords: project.stack,
  dateCreated: String(project.year),
  inLanguage: locale,
  author: {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "David Salomón Martínez Valladares"
  }
});
