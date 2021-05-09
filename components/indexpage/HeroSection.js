import { Text, Flex, Box, Heading, Badge } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import styles from "./herosection.module.scss";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <Flex
      id="heroSection"
      direction={{ base: "column", lg: "row" }}
      overflow="hidden"
      color="white"
      w="100%"
      minH="80vh"
      paddingY="2rem"
    >
      <Box className={styles.imgcont} minW={{ lg: "40%" }}>
        <Image
          src="/images/tech-1.png"
          alt=""
          opacity="0.6"
          position="relative"
          w="100%"
          h="100%"
          borderRadius="10px"
        />
        <Image
          className={styles.coverImag}
          src="/images/croped.png"
          position="absolute"
          width="400px"
        />
      </Box>

      <Flex direction="column">
        <Heading
          paddingX="1rem"
          fontSize={{ base: "1.25rem", md: "2.25rem" }}
          letterSpacing="wide"
        >
          Guaranteed
          <Badge bg="none" fontSize="inherit" marginX="1" color="teal.300">
            <Typewriter
              options={{
                strings: ["Protection", "Security", "Satisfaction", "Interest"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </Badge>{" "}
        </Heading>

        <Text fontWeight="normal" paddingX="4" pt="6" color="whiteAlpha.700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          error molestias voluptate iste excepturi aut consectetur ab fugiat
          suscipit qui labore voluptates vel enim odio, atque maxime animi
          voluptatem eos!
        </Text>
        <Button
          bg="teal.400"
          size="lg"
          _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
          _focus={{ outline: "transparent" }}
          width="170px"
          paddingY="2rem"
          letterSpacing="wider"
          mt={{ sm: "8", lg: "40px" }}
          m="4"
        >
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
}
