import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

// Kept apart from Pc.jsx so the placeholder renders without loading three.js
export const PcSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

// Decorative 3D scene: hidden from assistive technology
export const PcContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="pc"
    aria-hidden="true"
    m="auto"
    mt={["-70px", "-180px", "-300px"]}
    mb={["-40px", "-140px", "-200px"]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));
PcContainer.displayName = "PcContainer";

const Loader = () => (
  <PcContainer>
    <PcSpinner />
  </PcContainer>
);

export default Loader;
