import { HStack } from "@chakra-ui/react";
import { Page, NavBar } from "@components";

const Layout = ({ children }: any) => {
  return (
    <HStack maxW="100vw" overflow="hidden">
      <NavBar />
      <Page>{children}</Page>
    </HStack>
  );
};

export { Layout };
