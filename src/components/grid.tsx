import { Box, Image } from "@chakra-ui/react";

interface GridProps {
  children: JSX.Element | JSX.Element[];
}

function Grid({ children }: GridProps) {
  return (
    <Box
      padding={4}
      w="100%"
      maxW="900px"
      mx="auto"
      bg="gray.800"
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
    >
      {children}
    </Box>
  );
}

interface GridImageProps {
  url: string;
}

function GridImage({ url }: GridImageProps) {
  return (
    <Image
      key="src"
      w="100%"
      borderRadius="xl"
      mb={2}
      d="inline-block"
      src={url}
      alt="Alt"
    />
  );
}

export { Grid, GridImage };
