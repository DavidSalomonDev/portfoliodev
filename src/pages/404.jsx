import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from "@chakra-ui/react";
import Seo from "components/Seo";
import { useT } from "libs/i18n";

const NotFound = () => {
  const t = useT().notFound;
  return (
    <Container>
      <Seo title={t.title} description={t.body} noindex />
      <Heading as="h1">{t.title}</Heading>
      <Text>{t.body}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button as="a" colorScheme="teal">
            {t.back}
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
};
export default NotFound;
