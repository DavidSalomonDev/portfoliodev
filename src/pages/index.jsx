import { ChevronRightIcon, DownloadIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useColorModeValue
} from "@chakra-ui/react";
import { BioSection, BioYear } from "components/Bio";
import { GridItem, ProjectGridItem } from "components/Grid-Item";
import Layout from "components/layouts/Article";
import Paragraph from "components/Paragraph";
import Section from "components/Section";
import certifications from "data/certifications";
import { featuredProjects } from "data/projects";
import { CV_URL, EMAIL, SOCIALS } from "data/site";
import { formatMonth, useLocale, useT } from "libs/i18n";
import NextLink from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import thumbBuho from "../../public/images/buho-logo.png";
import thumbBlog from "../../public/images/blog.png";
import thumbBuhoDark from "../../public/images/buho-logo-dark.png";
import thumbBlogDark from "../../public/images/blog-dark.png";

const Card = ({ title, children }) => (
  <Box
    p={4}
    borderRadius="lg"
    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
  >
    <Heading as="h4" fontSize={16} mb={2}>
      {title}
    </Heading>
    <Text fontSize={15}>{children}</Text>
  </Box>
);

const Index = () => {
  const t = useT();
  const locale = useLocale();
  const h = t.home;

  return (
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
          {h.greeting}
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {h.name}
            </Heading>
            <Text fontSize={18} fontWeight="semibold" mt={1}>
              {h.role}
            </Text>
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
              alt={h.photoAlt}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {h.aboutTitle}
          </Heading>
          {h.about.map((text) => (
            <Box key={text} mb={3}>
              <Paragraph>{text}</Paragraph>
            </Box>
          ))}
        </Section>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {h.skillsTitle}
          </Heading>
          <SimpleGrid columns={[1, 2]} gap={6}>
            {h.skills.map((group) => (
              <Box key={group.title}>
                <Heading as="h4" fontSize={16} mb={2}>
                  {group.title}
                </Heading>
                <Wrap>
                  {group.items.map((item) => (
                    <WrapItem key={item}>
                      <Tag colorScheme="teal">{item}</Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {h.workTitle}
          </Heading>
          <Text mb={4}>{h.workIntro}</Text>
          <SimpleGrid columns={1} gap={4}>
            {h.work.map((item) => (
              <Card key={item.title} title={item.title}>
                {item.body}
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {h.approachTitle}
          </Heading>
          <SimpleGrid columns={[1, 2]} gap={4}>
            {h.approach.map((item) => (
              <Card key={item.title} title={item.title}>
                {item.body}
              </Card>
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {h.featuredTitle}
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {featuredProjects.map((project) => (
              <ProjectGridItem
                key={project.slug}
                id={project.slug}
                title={t.projects.items[project.slug].title}
                thumbnail={project.thumbnail}
              >
                {t.projects.items[project.slug].summary}
              </ProjectGridItem>
            ))}
          </SimpleGrid>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref>
              <Button
                as="a"
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                {h.allProjects}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {h.certificationsTitle}
          </Heading>
          {certifications.map((cert) => (
            <Box key={cert.url} mb={3}>
              <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.name}
              </Link>
              <Text fontSize={14}>
                {cert.issuer} · {h.issued} {formatMonth(cert.issued, locale)} ·{" "}
                {h.expires} {formatMonth(cert.expires, locale)}
              </Text>
            </Box>
          ))}
          <Text fontSize={14} mt={2}>
            {h.practiceApp}:{" "}
            <NextLink href="/projects/certifications" passHref>
              <Link>{t.projects.items.certifications.title}</Link>
            </NextLink>
          </Text>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {h.experienceTitle}
          </Heading>
          {h.experience.map((item) => (
            <BioSection key={item.text}>
              <BioYear>{item.year}</BioYear>
              {item.text}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.3}>
          <Box id="contact" scrollMarginTop="80px">
            <Heading as="h3" variant="section-title">
              {h.contactTitle}
            </Heading>
            <Text mb={4}>{h.contactBody}</Text>
            <Wrap spacing={3}>
              <WrapItem>
                <Button
                  as="a"
                  href={`mailto:${EMAIL}`}
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  {h.emailMe}
                </Button>
              </WrapItem>
              {CV_URL && (
                <WrapItem>
                  <Button
                    as="a"
                    href={CV_URL}
                    download
                    colorScheme="teal"
                    variant="outline"
                    leftIcon={<DownloadIcon />}
                  >
                    {h.downloadCv}
                  </Button>
                </WrapItem>
              )}
              <WrapItem>
                <Button
                  as="a"
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </WrapItem>
              <WrapItem>
                <Button
                  as="a"
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  GitHub
                </Button>
              </WrapItem>
            </Wrap>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {h.webTitle}
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://david-salomon.com"
              title="David Salomon"
              thumbnail={useColorModeValue(thumbBuho, thumbBuhoDark)}
            >
              {h.personalSite}
            </GridItem>
            <GridItem
              href="https://blog.davidsalomon.dev"
              title={h.blogTitle}
              thumbnail={useColorModeValue(thumbBlog, thumbBlogDark)}
            >
              {h.blog}
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {h.beyondTitle}
          </Heading>
          <Paragraph>
            {h.beyond.music} (
            <Link
              href="https://www.reverbnation.com/salo777"
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.beyond.piano}
            </Link>
            ),{" "}
            <Link
              href="https://david-salomon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {h.beyond.teaching}
            </Link>
            , {h.beyond.rest}
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  );
};

export default Index;
