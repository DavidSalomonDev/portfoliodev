import { DEFAULT_LOCALE, LOCALES, localizedUrl, useT } from "libs/i18n";
import Head from "next/head";
import { useRouter } from "next/router";

// Page-level SEO tags. Main layout renders the site defaults; a page renders
// <Seo title description /> to override them (tags share `key`s, last wins).
const Seo = ({ title, description, noindex = false }) => {
  const t = useT();
  const { asPath, locale } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = localizedUrl(path, locale);
  const fullTitle = title ? `${title} - David Salomón` : t.meta.title;
  const desc = description || t.meta.description;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta key="description" name="description" content={desc} />
      {noindex && <meta key="robots" name="robots" content="noindex" />}
      <link key="canonical" rel="canonical" href={url} />
      {LOCALES.map((l) => (
        <link
          key={`alternate-${l}`}
          rel="alternate"
          hrefLang={l}
          href={localizedUrl(path, l)}
        />
      ))}
      <link
        key="alternate-x-default"
        rel="alternate"
        hrefLang="x-default"
        href={localizedUrl(path, DEFAULT_LOCALE)}
      />

      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={desc} />
      <meta
        key="og:image:alt"
        property="og:image:alt"
        content={t.meta.ogImageAlt}
      />
      <meta key="og:locale" property="og:locale" content={t.meta.ogLocale} />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={desc}
      />
    </Head>
  );
};

export default Seo;
