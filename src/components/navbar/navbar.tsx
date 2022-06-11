import { VStack, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack bg={"_.purple"} h="100vh" justify="center">
      <h1>Navbar</h1>
    </VStack>
  );
};

export { Navbar };
