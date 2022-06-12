import { extendTheme } from "@chakra-ui/react";
import { colors } from "./styles/colors";
import { components } from "./components";

const theme = extendTheme({
  colors,
  components,
  styles: {
    global: {
      body: {
        _dark: {
          bg: "alt.900",
        },
      },
    },
  },
});

export { theme };
