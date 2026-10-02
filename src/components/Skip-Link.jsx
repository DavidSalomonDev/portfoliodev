import { Link, useColorModeValue } from "@chakra-ui/react";
import { useT } from "libs/i18n";

// Hidden until focused with the keyboard; jumps past the navbar
const SkipLink = () => (
  <Link
    href="#content"
    position="absolute"
    left="-9999px"
    top={2}
    zIndex={2}
    px={4}
    py={2}
    borderRadius="md"
    bg={useColorModeValue("white", "gray.800")}
    _focus={{ left: 2, boxShadow: "outline" }}
  >
    {useT().nav.skip}
  </Link>
);

export default SkipLink;
