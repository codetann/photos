import { colors } from "../../styles";

const styles = {
  defaultDark: {
    bg: colors.primary.darkmode,
    color: colors.primary.dark,
  },
  defaultLight: {
    bg: colors.primary.default,
    color: colors.grayscale["off-white"],
  },
  hover: {
    dark: {
      bg: colors.primary.light,
    },
    light: {
      bg: colors.primary.dark,
    },
  },
};

export { styles };
