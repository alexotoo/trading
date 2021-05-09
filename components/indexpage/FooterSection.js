import { Container, Flex, HStack, Link, Text } from "@chakra-ui/layout";
import { GiCrestedHelmet } from "react-icons/gi";
import {
  AiFillSlackCircle,
  AiFillTwitterCircle,
  AiFillRedditCircle,
  AiFillGithub,
} from "react-icons/ai";

export default function FooterSection() {
  let today = new Date();
  return (
    <Container
      maxW="container.lg"
      textAlign="center"
      minH="50vh"
      bg=" #00152e"
      color="white"
    >
      <Flex justifyContent="space-between" py="2rem">
        <HStack>
          <GiCrestedHelmet fontSize="3.5rem" color="teal" />
          <Text fontSize="2.5rem">Cryptotoo</Text>
        </HStack>
        <HStack>
          <Link
            px="10px"
            _hover={{ color: "teal.400", textDecoration: "none !important" }}
          >
            Home
          </Link>
          <Link
            px="10px"
            _hover={{ color: "teal.400", textDecoration: "none !important" }}
          >
            About Us
          </Link>
          <Link
            px="10px"
            _hover={{ color: "teal.400", textDecoration: "none !important" }}
          >
            Blog
          </Link>
          <Link
            px="10px"
            _hover={{ color: "teal.400", textDecoration: "none !important" }}
          >
            {" "}
            contact Us
          </Link>
        </HStack>
        <HStack>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "teal.400", transform: "scale(1.25)" }}
          >
            <AiFillSlackCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "teal.400", transform: "scale(1.25)" }}
          >
            <AiFillTwitterCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "teal.400", transform: "scale(1.25)" }}
          >
            <AiFillRedditCircle fontSize="2rem" />
          </Link>
          <Link
            transition="ease 0.3s"
            _hover={{ color: "teal.400", transform: "scale(1.25)" }}
          >
            <AiFillGithub fontSize="2rem" />
          </Link>
        </HStack>
      </Flex>

      <Flex
        justifyContent="space-between"
        borderTop="1px"
        borderColor="whiteAlpha.400"
        py="3rem"
        color="whiteAlpha.600"
      >
        <HStack>
          <Text>Privacy & Policy</Text>
          <Text>Our terms and Conditions </Text>
        </HStack>
        <HStack>
          <Text>Developed by AlexOoo</Text>
          <Text> right reserved {today.getFullYear()}</Text>
        </HStack>
      </Flex>
    </Container>
  );
}
