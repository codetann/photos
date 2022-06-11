import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { components } from "./components/button";

const theme = extendTheme(
  {
    colors,
    styles: {
      global: (props: any) => ({
        body: {
          background: mode(
            colors.grayscale.bg,
            colors.grayscale["off-black"]
          )(props),
        },
      }),
    },
    components,
  },

  withDefaultColorScheme({ colorScheme: "cyan" })
);

export { theme };
