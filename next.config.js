module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    // The language is chosen by the URL you share (/ or /es), not the visitor's browser
    localeDetection: false
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ];
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
