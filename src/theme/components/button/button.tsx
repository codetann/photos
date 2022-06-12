import { type StyleConfig } from "@chakra-ui/theme-tools";
import { colors } from "src/theme/styles";
import { styles } from "./style";

const Button: StyleConfig = {
  baseStyle: {
    padding: "0.5rem 1rem",
    fontWeight: 600,
    transition: "all 0.2s ease-in-out",

    /* base color mode styles */
    _light: styles.defaultLight,
    _dark: styles.defaultDark,

    /* button state styles */
    _hover: {
      transform: "translateY(-0.1rem)",
      _dark: styles.hover.dark,
      _light: styles.hover.light,
    },

    _active: {
      transform: "scale(0.98)",
      opacity: 0.8,
    },

    _focus: {
      outline: "none",
      boxShadow: `0 0 0 2px ${colors.grayscale.body}, 0 0 0 4px ${colors.grayscale.body}`,
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export { Button };
