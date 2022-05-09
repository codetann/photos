import { extendTheme, type ThemeTypings } from "@chakra-ui/react";

interface Color {
  [key: string]: {
    [key: string | number]: ThemeTypings["colors"];
  };
}

const colors: Color = {
  primary: {
    50: "blackAlpha.50",
    100: "blackAlpha.900",
  },
};

const theme = extendTheme({
  colors,
});

export { theme };
