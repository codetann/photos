import { Theme, StyleObjectOrFn } from "@chakra-ui/react";
import { StyleConfig, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { colors } from "../colors";

const buttonColors = {
  dark: {
    color: colors.primary.dark,
    bg: colors.primary.darkmode,
    hover: {
      width: "100vw",
    },
  },

  light: {
    color: colors.grayscale["off-white"],
    bg: colors.primary.dark,
    hover: {
      width: "100vw",
    },
  },
};

const components: Record<string, StyleConfig> = {
  ButtonStyle: {
    baseStyle: ({ colorMode: mode }) => ({}),
    variants: {
      primary: ({ colorMode: mode }) => ({
        color: buttonColors[mode].color,
        bg: buttonColors[mode].bg,
        _hover: {
          width: buttonColors[mode].hover.width,
        },
      }),
    },
    sizes: {},
    defaultProps: {},
  },
};

export { components };
