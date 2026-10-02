import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Container,
  Heading,
  Link,
  List,
  ListItem
} from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import Paragraph from "components/Paragraph";
import { Meta, ProjectImage, Title } from "components/Work";
import projects, { getProject } from "data/projects";
import { useT } from "libs/i18n";

const ExternalLink = ({ href }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {href} <ExternalLinkIcon mx="2px" />
  </Link>
);

const CaseSection = ({ title, children }) => (
  <>
    <Heading as="h4" fontSize={16} mt={6} mb={2}>
      {title}
    </Heading>
    <Paragraph>{children}</Paragraph>
  </>
);

const Project = ({ slug }) => {
  const t = useT();
  const project = getProject(slug);
  const text = t.projects.items[slug];

  return (
    <Layout title={text.title}>
      <Container>
        <Title>
          {text.title} <Badge>{project.year}</Badge>
        </Title>

        {text.problem ? (
          <>
            <Paragraph>{text.summary}</Paragraph>
            <CaseSection title={t.projects.problem}>{text.problem}</CaseSection>
            <CaseSection title={t.projects.solution}>
              {text.solution}
            </CaseSection>
            <CaseSection title={t.projects.outcome}>{text.outcome}</CaseSection>
          </>
        ) : (
          <Paragraph>{text.description}</Paragraph>
        )}

        <List ml={4} my={6}>
          <ListItem>
            <Meta>{t.projects.website}</Meta>
            <ExternalLink href={project.website} />
          </ListItem>
          <ListItem>
            <Meta>{t.projects.stack}</Meta>
            <span>{project.stack}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.projects.repo}</Meta>
            <ExternalLink href={project.repo} />
          </ListItem>
        </List>

        {project.images.map((src) => (
          <ProjectImage key={src} src={src} alt={text.title} />
        ))}
      </Container>
    </Layout>
  );
};

export const getStaticPaths = () => ({
  paths: projects.map(({ slug }) => ({ params: { slug } })),
  fallback: false
});

export const getStaticProps = ({ params }) => ({
  props: { slug: params.slug }
});

export default Project;
