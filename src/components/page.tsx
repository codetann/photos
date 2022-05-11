import { Stack, VStack } from "@chakra-ui/react";

function Navigation() {
  return (
    <Stack direction={["row", "column"]}>
      <p>Navigation</p>
    </Stack>
  );
}

interface AppShellProps {
  children: JSX.Element | JSX.Element[];
}

function AppShell({ children }: AppShellProps) {
  return <VStack>{children}</VStack>;
}

interface PageProps {
  children: JSX.Element | JSX.Element[];
}

function Page({ children }: PageProps) {
  return (
    <Stack direction={["column", "row"]}>
      <Navigation />
      <AppShell>{children}</AppShell>
    </Stack>
  );
}

export { Page };
