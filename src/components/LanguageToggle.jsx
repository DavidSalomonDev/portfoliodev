import { Button } from "@chakra-ui/react";
import { useLocale, useT } from "libs/i18n";
import NextLink from "next/link";
import { useRouter } from "next/router";

const LanguageToggle = () => {
  const { asPath } = useRouter();
  const target = useLocale() === "es" ? "en" : "es";

  return (
    <NextLink href={asPath} locale={target} passHref>
      <Button
        as="a"
        variant="outline"
        mr={2}
        hrefLang={target}
        aria-label={useT().nav.switchLanguage}
        title={useT().nav.switchLanguage}
      >
        {target.toUpperCase()}
      </Button>
    </NextLink>
  );
};

export default LanguageToggle;
