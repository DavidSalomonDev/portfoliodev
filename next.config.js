module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    // The language is chosen by the URL you share (/ or /es), not the visitor's browser
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: "/certificaciones",
        destination: "https://certifications-alpha.vercel.app/",
        permanent: true
      },
      {
        source: "/azurecommands",
        destination: "https://azure-commands.vercel.app/",
        permanent: true
      }
    ];
  }
};
