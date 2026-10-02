import NextLink from "next/link";
import { Heading, Box, Link, Badge } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useT } from "libs/i18n";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>{useT().nav.projects}</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h1" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

// src is a static image import, so next/image knows its size and serves
// resized WebP/AVIF. Small screenshots are never stretched past their width.
export const ProjectImage = ({ src, alt }) => (
  <Box
    maxW={`${src.width}px`}
    mx="auto"
    mb={4}
    borderRadius="lg"
    overflow="hidden"
    lineHeight={0}
  >
    <Image
      src={src}
      alt={alt}
      layout="responsive"
      sizes="(max-width: 768px) 100vw, 720px"
      placeholder="blur"
    />
  </Box>
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
