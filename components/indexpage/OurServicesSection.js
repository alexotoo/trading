import {
  Flex,
  Box,
  Text,
  VStack,
  Link,
  Container,
  Heading,
} from "@chakra-ui/react";
import styles from "./offersection.module.scss";
import {
  AiFillLock,
  AiOutlineArrowRight,
  AiOutlinePoundCircle,
  AiOutlineKey,
  AiOutlineDeploymentUnit,
  AiOutlineCloudSync,
  AiOutlineAim,
} from "react-icons/ai";

export default function OurServicesSection() {
  return (
    <Container
      id="ourServiceSection"
      maxW="container.xl"
      paddingY="6rem"
      textAlign="center"
    >
      <Text fontWeight="normal" color="teal.300" fontSize="1.2rem">
        Our Services
      </Text>
      <Heading as="h2" size="xl" letterSpacing="wide">
        {" "}
        What We Offer
      </Heading>
      <Flex
        id="offerSection"
        pt={8}
        justifyContent="space-between"
        minH="70vh"
        color="whiteAlpha.700"
        flexWrap="wrap"
      >
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiFillLock fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Security Services{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiOutlinePoundCircle fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Value for Money{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiOutlineKey fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Secured Key{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiOutlineDeploymentUnit fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Intergrated Security{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiOutlineCloudSync fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Secured Cloud Sync{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
        <Box
          className={styles.offerBox}
          width={{ base: "100%", md: "32%" }}
          mb="8"
          padding="8"
          height="350px"
          textAlign="center"
        >
          <VStack>
            <Box
              _hover={{ transform: "translateY(-4px)" }}
              transition="transform 200ms"
              color="teal"
            >
              <AiOutlineAim fontSize="3rem" />
            </Box>
            <Text color="white" fontSize="1.4rem">
              Precision Analytics{" "}
            </Text>

            <Text fontWeight="light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae i magni{" "}
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
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}
