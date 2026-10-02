import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../libs/theme";

const SITE_URL = "https://www.davidsalomon.dev/";
const TITLE = "David Salomón - Cloud, Data & AI Engineer";
const DESCRIPTION =
  "Cloud, Data & AI Engineer. Multi-cloud infrastructure on Azure, Google Cloud, AWS, Oracle Cloud and IBM Cloud, data analysis and quality with SQL and Python, and AI-powered automation. Available for remote freelance work.";
const OG_IMAGE = `${SITE_URL}og-image.png`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/buho-favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Primary Meta Tags */}
          <meta name="description" content={DESCRIPTION} />
          <meta name="author" content="David Salomón Martínez Valladares" />

          {/* Open Graph / Facebook / LinkedIn */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="David Salomón" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="David Salomón - Cloud, Data & AI Engineer"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={OG_IMAGE} />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
