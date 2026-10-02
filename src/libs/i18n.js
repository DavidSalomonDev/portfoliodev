import { SITE_URL } from "data/site";
import en from "locales/en";
import es from "locales/es";
import { useRouter } from "next/router";

const dictionaries = { en, es };

export const LOCALES = ["en", "es"];
export const DEFAULT_LOCALE = "en";

export const useLocale = () => {
  const { locale } = useRouter();
  return dictionaries[locale] ? locale : DEFAULT_LOCALE;
};

export const useT = () => dictionaries[useLocale()];

// Absolute URL of a path in a locale: ("/projects", "es") -> ".../es/projects"
export const localizedUrl = (path, locale) => {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  if (path === "/") return `${SITE_URL}${prefix || "/"}`;
  return `${SITE_URL}${prefix}${path}`;
};

// "2026-06" -> "Jun 2026" in the given locale
export const formatMonth = (yyyyMm, locale) => {
  const [year, month] = yyyyMm.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, 1)));
};
