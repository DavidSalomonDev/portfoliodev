import { Container, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { ProjectGridItem } from "components/Grid-Item";
import Layout from "components/layouts/Article";
import Section from "components/Section";
import { archivedProjects, featuredProjects } from "data/projects";
import { useT } from "libs/i18n";
import NextLink from "next/link";

const ProjectGrid = ({ projects, items, delay = 0 }) => (
  <SimpleGrid columns={[1, 1, 2]} gap={6}>
    {projects.map((project, i) => (
      <Section key={project.slug} delay={delay + i * 0.1}>
        <ProjectGridItem
          id={project.slug}
          title={items[project.slug].title}
          thumbnail={project.thumbnail}
        >
          {items[project.slug].summary}
        </ProjectGridItem>
      </Section>
    ))}
  </SimpleGrid>
);

const Projects = () => {
  const t = useT();
  const p = t.projects;

  return (
    <Layout title={p.title} description={p.description}>
      <Container>
        <Heading as="h1" fontSize={24} mt={4} mb={6}>
          {p.title}
        </Heading>
        <Heading as="h2" fontSize={20} mb={4}>
          {p.featuredTitle}
        </Heading>
        <ProjectGrid projects={featuredProjects} items={p.items} delay={0.1} />
        <Text fontSize={14} mb={8}>
          {p.privateNote}{" "}
          <NextLink href="/" passHref>
            <Link>{p.privateLink}</Link>
          </NextLink>
          .
        </Text>

        <Heading as="h2" fontSize={20} mb={4}>
          {p.archiveTitle}
        </Heading>
        <ProjectGrid projects={archivedProjects} items={p.items} delay={0.3} />
      </Container>
    </Layout>
  );
};

export default Projects;
