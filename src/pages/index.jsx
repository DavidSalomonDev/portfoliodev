import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
import { BioSection, BioYear } from "components/Bio";
import { GridItem } from "components/Grid-Item";
import Layout from "components/layouts/Article";
import Paragraph from "components/Paragraph";
import Section from "components/Section";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import thumbBuho from "../../public/images/buho-logo.png";
import thumbBlog from "../../public/images/blog.png";
import thumbBuhoDark from "../../public/images/buho-logo-dark.png";
import thumbBlogDark from "../../public/images/blog-dark.png";

const Index = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        mt={4}
        mb={8}
        p={3}
        align="center"
      >
        Hi, I&apos;m a Cloud Engineer and Software Developer based in El
        Salvador!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            David Salomón Martínez Valladares
          </Heading>
          <p>Cloud Engineer / Data Engineer / Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/david.png"
            alt="David Salomon Profile Pic"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Who am I?
        </Heading>
        <Paragraph>
          I am a Cloud Engineer at GBM with extensive experience optimizing and
          securing cloud environments across major providers like Azure, Google
          Cloud, Oracle Cloud, AWS, and IBM Cloud. With a strong background in
          software development and data engineering, I leverage AI and
          automation to resolve complex challenges and streamline operations. I
          hold a Master of Project Management and am completing my final year of
          a Software Development Engineering degree at UES. Having evolved from
          my early days as a developer, I now focus on building scalable
          systems, driving cloud migrations, and architecting robust cloud
          infrastructure.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref>
            <Button as="a" rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in San Salvador, El Salvador on Sept 7th.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bachelor of Business Administration in ESI School of
          Management
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Frontend Web Development bootcamp in Acamica
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Finished Master of Project Management
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Cloud Engineer at GBM, deploying and supporting cloud resources mostly
          in Azure, Google Cloud, Oracle Cloud, AWS, and IBM Cloud.
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          In final year of Software Development Engineer degree at UES.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I love
        </Heading>
        <Paragraph>
          Music,{" "}
          <Link href="https://buho.academy" target="_blank">
            Teaching others
          </Link>
          , Cooking, Organizing things (OCD),{" "}
          <Link href="https://www.reverbnation.com/salo777" target="_blank">
            Playing piano
          </Link>
          , Travel.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List mb={5}>
          <ListItem>
            <Link href="https://github.com/davidsalomondev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @davidsalomondev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/davidsalomondev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @davidsalomondev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/davidsalomondev/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @davidsalomondev
              </Button>
            </Link>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://buho.academy"
            title="Buho Academy"
            thumbnail={useColorModeValue(thumbBuho, thumbBuhoDark)}
          >
            Buho Academy: My online courses platform in Spanish
          </GridItem>
          <GridItem
            href="https://blog.davidsalomon.dev"
            title="My Blog"
            thumbnail={useColorModeValue(thumbBlog, thumbBlogDark)}
          >
            I&apos;m learning web development and I&apos;m tracking all my
            achievements (and failures) in my learning journey.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Index;
