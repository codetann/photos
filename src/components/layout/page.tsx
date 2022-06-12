import { motion } from "framer-motion";
import { VStack } from "@chakra-ui/react";

interface PageProps {
  children: JSX.Element | JSX.Element[];
}

const variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

const Page = ({ children }: PageProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <VStack w="100%" minH="100vh" justify="start" align="center" spacing={8}>
        {children}
      </VStack>
    </motion.div>
  );
};

export { Page };
