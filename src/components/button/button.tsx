import { useStyleConfig, chakra, ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  const styles = useStyleConfig("ButtonStyle", { variant: props.variant });

  return <chakra.button __css={styles} {...props} />;
};

export { Button };
