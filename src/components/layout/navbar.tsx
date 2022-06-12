import { HomeIcon, PhotoIcon, SearchIcon } from "@icons";
import { HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  icon: typeof HomeIcon;
  title: string;
  isActive?: boolean;
  showTitle?: boolean;
}

const NavItem = ({ icon: Icon, title, isActive, showTitle }: NavItemProps) => (
  <HStack
    bg={isActive ? "alt.600" : "none"}
    h="3rem"
    w="100%"
    rounded="xl"
    justify="left"
    align="center"
    overflow="hidden"
    spacing=".5rem"
    transition={"all .2s"}
    cursor="pointer"
    _hover={{
      opacity: 0.5,
    }}
  >
    <Icon h="1.3rem" w="3rem" fill="none" stroke="alt.200" />

    <motion.div
      animate={{
        width: "100%",
        opacity: showTitle ? 1 : 0,
        transition: { duration: 0.3, delay: 0.1 },
        display: showTitle ? "flex" : "none",
      }}
    >
      {showTitle && (
        <Text fontSize="md" color="alt.200" fontWeight="400">
          {title}
        </Text>
      )}
    </motion.div>
  </HStack>
);

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{
        width: isOpen ? "17rem" : "5rem",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
      }}
      style={{ position: "fixed" }}
    >
      <VStack
        h="100vh"
        bg="alt.800"
        w="100%"
        borderRadius=" 0 20px 20px 0"
        p="1rem"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        transform={isOpen ? "translateX(1)" : "none"}
      >
        <HStack>Logo</HStack>
        <VStack spacing={5} align="start" w="100%">
          <NavItem icon={SearchIcon} title="" />
          <NavItem icon={HomeIcon} title={"Home"} showTitle={isOpen} isActive />
          <NavItem icon={PhotoIcon} title={"Photos"} showTitle={isOpen} />
        </VStack>
      </VStack>
    </motion.div>
  );
};

export { NavBar };
