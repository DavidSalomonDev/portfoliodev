import Head from "next/head";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import Pc from "components/Pc";
import NoSsr from "components/No-ssr";
import Seo from "components/Seo";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Seo />
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
