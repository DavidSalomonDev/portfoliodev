import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import Pc from "components/Pc";
import NoSsr from "components/No-ssr";
import { LOCALES, DEFAULT_LOCALE, localizedUrl, useT } from "libs/i18n";

const Main = ({ children, router }) => {
  const t = useT();
  const path = router.asPath.split(/[?#]/)[0];
  const url = localizedUrl(path, router.locale);

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={url} />
        {LOCALES.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={localizedUrl(path, locale)}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={localizedUrl(path, DEFAULT_LOCALE)}
        />

        <meta property="og:url" content={url} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:image:alt" content={t.meta.ogImageAlt} />
        <meta property="og:locale" content={t.meta.ogLocale} />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Pc />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
