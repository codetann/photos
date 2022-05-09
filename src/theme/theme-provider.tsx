import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "./theme";

function ThemeProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export { ThemeProvider };
