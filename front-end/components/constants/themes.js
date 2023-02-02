import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    primary: {
      main: "#1B196F",
    },
  },
  fonts: {
    heading: "Inter,sans-serif",
    body: "Inter,sans-serif",
  },
  breakpoints,
});

export { theme };
