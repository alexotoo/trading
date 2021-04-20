import { Text, Flex, Container } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import styles from "./herosection.module.scss";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      overflow="hidden"
      color="white"
      w="100%"
      minH="80vh"
    >
      <Image
        src="/images/tech-1.png"
        alt=""
        width={{ lg: "50%" }}
        opacity="0.6"
      />
      <Flex direction="column">
        <Flex fontSize="4xl" paddingX="4">
          <Text>Guaranteed</Text>
          <Text color="teal.300" paddingX="3">
            <Typewriter
              options={{
                strings: ["Protection", "Security", "Satisfaction", "Interest"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </Text>
        </Flex>
        <Text fontWeight="normal" paddingX="4" pt="4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          error molestias voluptate iste excepturi aut consectetur ab fugiat
          suscipit qui labore voluptates vel enim odio, atque maxime animi
          voluptatem eos!
        </Text>
      </Flex>
    </Flex>
  );
}
