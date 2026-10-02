import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";
import PcLoader from "components/Pc-Loader";
import Seo from "components/Seo";
import SkipLink from "components/Skip-Link";

// three.js is loaded in its own chunk, only on the home page
const Pc = dynamic(() => import("components/Pc"), {
  ssr: false,
  loading: () => <PcLoader />
});

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Seo />
      <SkipLink />
      <Navbar path={router.asPath} />
      <Container
        as="main"
        id="content"
        tabIndex={-1}
        maxW="container.md"
        pt={14}
        _focus={{ outline: "none" }}
      >
        {router.pathname === "/" && <Pc />}
        {children}
      </Container>
    </Box>
  );
};

export default Main;
