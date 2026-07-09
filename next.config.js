module.exports = {
  reactStrictMode: true,
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
