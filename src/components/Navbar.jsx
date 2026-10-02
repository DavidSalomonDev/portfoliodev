import Logo from "./Logo";
import NextLink from "next/link";

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import LanguageToggle from "components/LanguageToggle";
import ThemeToggleButton from "components/theme-toggle-button";
import { useT } from "libs/i18n";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const t = useT();

  return (
    <Box
      position="fixed"
      as="nav"
      aria-label={t.nav.label}
      w="100%"
      bg={useColorModeValue("#FFFFFF40", "#20202380")}
      style={{ backdropFilter: "blur(10px)", zIndex: 1 }}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="div" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            {t.nav.projects}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t.nav.posts}
          </LinkItem>
          <LinkItem href="/#contact" path={path}>
            {t.nav.contact}
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <LanguageToggle />
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label={t.nav.menu}
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>{t.nav.about}</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>{t.nav.projects}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>{t.nav.posts}</MenuItem>
                </NextLink>
                <NextLink href="/#contact" passHref>
                  <MenuItem as={Link}>{t.nav.contact}</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
