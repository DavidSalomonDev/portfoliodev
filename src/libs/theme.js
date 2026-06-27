import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#F0E7DB", "#202023")(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: mode("#525252", "#88CCCA")(props),
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      })
    }
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3D7AED", "#FF63C3")(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  glassTeal: "#88CCCA"
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
