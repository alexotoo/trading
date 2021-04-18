import Link from "next/link";

import { Flex, Center, Text, Circle, HStack, Spacer } from "@chakra-ui/layout";
import { FiChevronDown } from "react-icons/fi";
import { GiCrestedHelmet } from "react-icons/gi";
import { Button } from "@chakra-ui/button";
import NavDrawer from "./NavDrawer";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import NavMenuItems from "./NavMenuItems";

export default function NavBar() {
  return (
    <Flex
      bgGradient="linear(to-r, rgb(0, 21, 46), pink.600)"
      color="white"
      w="100%"
      h="15vh"
      px="1rem"
    >
      <HStack>
        <Center color="teal.400">
          <GiCrestedHelmet fontSize="3.5rem" />
        </Center>
        <Center color="gray.400" ml="10px" _hover={{ color: "gray.500" }}>
          <Text color="white" fontSize="2.5rem">
            Cryptotoo
          </Text>
        </Center>
      </HStack>
      <Spacer />
      <HStack
        color="white"
        fontWeight="normal"
        display={{ base: "none", lg: "inherit" }}
      >
        <Center _hover={{ color: "teal.400" }} transition="ease 0.3s">
          <Link href="/">
            <a className="logo" _hover={{ textDecoration: "none" }}>
              Home
            </a>
          </Link>
        </Center>
        <Spacer />
        <Center _hover={{ color: "teal.400" }} transition="ease 0.3s">
          <Link href="/">
            <a className="logo" _hover={{ textDecoration: "none" }}>
              About Us
            </a>
          </Link>
        </Center>
        <Spacer />
        <NavMenuItems />
        <Center _hover={{ color: "teal.400" }} transition="ease 0.3s">
          <Link href="/">
            <a className="logo" _hover={{ textDecoration: "none" }}>
              Blog
            </a>
          </Link>
        </Center>
      </HStack>

      <Center ml="3rem">
        <Button
          bg="teal.400"
          size="lg"
          _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
          display={{ base: "none", lg: "inherit" }}
          _focus={{ outline: "transparent" }}
        >
          Contact Us
        </Button>
        <Center display={{ lg: "none", xl: "none" }}>
          <NavDrawer />
        </Center>
      </Center>
    </Flex>
  );
}
