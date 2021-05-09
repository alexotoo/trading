import {
  Flex,
  Box,
  HStack,
  Text,
  VStack,
  Link,
  Container,
  Heading,
  Image,
} from "@chakra-ui/react";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function OurNewsSection() {
  return (
    <Container
      id="ourServiceSection"
      maxW="container.lg"
      paddingY="4rem"
      minH="100vh"
    >
      <Text
        fontWeight="normal"
        color="teal.300"
        fontSize="1.2rem"
        textAlign="center"
      >
        Our News
      </Text>
      <Heading as="h2" size="xl" letterSpacing="wide" textAlign="center">
        Latest News
      </Heading>

      <Flex
        id="offerSection"
        pt="16"
        justifyContent="space-between"
        color="whiteAlpha.700"
        flexWrap="wrap"
        mb="8rem"
      >
        <Box width={{ base: "100%", md: "32%" }} height="350px">
          <Image src="../images/safty-1.jpeg" width="100%" borderRadius="2xl" />

          <Text color="whiteAlpha.500" pt="4">
            Cloud Security
          </Text>
          <Text color="white" fontSize="1.4rem" pb="4">
            More companies are now investing in cloud snycs
          </Text>

          <Text fontWeight="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
            quibusdam beatae i magni{" "}
          </Text>
          <Link
            pb="6"
            display="inline-block"
            color="teal.300"
            textDecoration="none !important"
          >
            <Flex
              alignItems="center"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)" }}
              transition="transform 200ms"
              pt="4"
            >
              <Text pr="2">Read More</Text>
              <AiOutlineArrowRight />
            </Flex>
          </Link>
        </Box>
        <Box width={{ base: "100%", md: "32%" }} mb="8" height="350px">
          <Image src="../images/safty-3.jpeg" width="100%" borderRadius="2xl" />

          <Text color="whiteAlpha.500" pt="4">
            Professional services
          </Text>
          <Text color="white" fontSize="1.4rem" pb="4">
            {" "}
            How to provide secured crypo services in 2021
          </Text>

          <Text fontWeight="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
            quibusdam beatae i magni{" "}
          </Text>
          <Link
            pb="6"
            display="inline-block"
            color="teal.300"
            textDecoration="none !important"
          >
            <Flex
              alignItems="center"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)" }}
              transition="transform 200ms"
              pt="4"
            >
              <Text pr="2">Read More</Text>
              <AiOutlineArrowRight />
            </Flex>
          </Link>
        </Box>
        <Box width={{ base: "100%", md: "32%" }} mb="8" height="350px">
          <Image src="../images/trial-2.jpg" width="100%" borderRadius="2xl" />

          <Text color="whiteAlpha.500" pt="4">
            Tech Jobs
          </Text>
          <Text color="white" fontSize="1.4rem" pb="4">
            Finding your dream tech job post covid
          </Text>

          <Text fontWeight="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
            quibusdam beatae i magni{" "}
          </Text>
          <Link
            pb="6"
            display="inline-block"
            color="teal.300"
            textDecoration="none !important"
          >
            <Flex
              alignItems="center"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)" }}
              transition="transform 200ms"
              pt="4"
            >
              <Text pr="2">Read More</Text>
              <AiOutlineArrowRight />
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
}
