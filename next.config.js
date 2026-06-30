module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/certificaciones",
        destination: "https://certifications-alpha.vercel.app/",
        permanent: true
      }
    ];
  }
};
