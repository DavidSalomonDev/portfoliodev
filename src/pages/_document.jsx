import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { SITE_URL } from "../data/site";
import theme from "../libs/theme";

// Language-dependent tags (title, description, canonical, hreflang, og:url...)
// are rendered per page in components/layouts/Main.jsx.
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export default class Document extends NextDocument {
  render() {
    return (
      // lang is set by Next.js from the active locale
      <Html>
        <Head>
          <link rel="icon" href="/images/buho-favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="author" content="David Salomón Martínez Valladares" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="David Salomón" />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
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
