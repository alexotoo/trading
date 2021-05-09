import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { Box, Flex, Text, Link } from "@chakra-ui/layout";
import {
  AiOutlineGlobal,
  AiOutlineFund,
  AiOutlineArrowRight,
} from "react-icons/ai";

export default function WelcomeSection() {
  return (
    <Flex
      id="welcomeSection"
      minH="70vh"
      direction={{ base: "column", md: "row" }}
      overflow="hidden"
      pb="2rem"
    >
      <Box position="relative" h={{ md: "120vh" }}>
        <Image
          src="../images/work1.jpg"
          opacity=".6"
          borderRightRadius="15"
          w={{ base: "100%" }}
          h={{ md: "100%" }}
          className="anim_welcomeS_1"
        />
        <Box
          position="absolute"
          visibility={{ base: "hidden", md: "inherit" }}
          bottom="0"
          fontWeight="normal"
          px="1rem"
          bg="#00152e"
          maxW="250px"
          maxH="400px"
          borderRightRadius="2xl"
        >
          <Text fontWeight="bold" fontSize="2xl" pt="6">
            We Are Here For Your Success
          </Text>
          <Text py="4" color="whiteAlpha.700">
            Lorem dolore. Odit, harum neque? Earum autem assumenda neque
            sapiente cumque ratione, eligendi ducimus quisquam!
          </Text>
          <Link pb="6" display="inline-block" color="teal.300">
            <Flex
              alignItems="center"
              fontWeight="bold"
              _hover={{ transform: "translateY(-2px)" }}
              transition="transform 200ms"
            >
              <Text pr="2">View Products</Text>
              <AiOutlineArrowRight />
            </Flex>
          </Link>
        </Box>
      </Box>

      <Flex
        direction="column"
        fontWeight="normal"
        px="1rem"
        width={{ md: "90%" }}
        paddingLeft={{ md: "2rem" }}
      >
        <Box>
          <Text
            py="4"
            color="teal.300"
            fontWeight="bold"
            className="anim_welcomeS_2"
          >
            Welcome To Cryptotoo
          </Text>
          <Text pb="4" fontWeight="bold" fontSize="2xl">
            Your Perfect Place For All Crypto Security Questions{" "}
          </Text>
          <Text pb="8" color="whiteAlpha.700" fontWeight="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            laudantium inventore dolore voluptatem error totam quasi temporibus
            vel perferendis repudiandae harum, voluptate
          </Text>
        </Box>
        <Flex direction={{ base: "column", md: "row" }} textAlign="left">
          <Box mb={{ base: 4 }}>
            <Flex pb="1rem" direction="column">
              <AiOutlineFund fontSize="3rem" color="teal" />
              <Text fontSize="1.4rem" fontWeight="bold">
                Premium Analytics
              </Text>
            </Flex>
            <Text fontWeight="light" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae{" "}
            </Text>
          </Box>

          <Box pl={{ md: 4 }}>
            <Flex pb="1rem" direction="column">
              <AiOutlineGlobal fill="teal" fontSize="3rem" />
              <Text fontSize="1.4rem" fontWeight="bold">
                Global Coverage
              </Text>
            </Flex>
            <Text fontWeight="light" color="whiteAlpha.700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aut quibusdam beatae{" "}
            </Text>
          </Box>
        </Flex>

        <Button
          bg="teal.400"
          size="lg"
          _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
          _focus={{ outline: "transparent" }}
          width="170px"
          paddingY="2rem"
          letterSpacing="wider"
          mt={{ sm: "8" }}
          mb="12"
        >
          Try For Free
        </Button>
      </Flex>
    </Flex>
  );
}
