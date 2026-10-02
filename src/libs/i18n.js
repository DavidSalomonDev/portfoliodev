import { useRouter } from "next/router";
import en from "locales/en";

const dictionaries = { en };

export const useLocale = () => {
  const { locale } = useRouter();
  return dictionaries[locale] ? locale : "en";
};

export const useT = () => dictionaries[useLocale()];

// "2026-06" -> "Jun 2026" in the given locale
export const formatMonth = (yyyyMm, locale) => {
  const [year, month] = yyyyMm.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, 1)));
};
