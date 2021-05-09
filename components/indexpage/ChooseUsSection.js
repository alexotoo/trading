import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { AiOutlineCheck } from "react-icons/ai";

export default function ChooseUsSection() {
  const content = [
    "Content Delivery Network",
    "Advance Security Diagnosis",
    "24/7 Techinical Support",
    "Remote Monitoring",
  ];
  return (
    <Flex
      id="chooseUsSection"
      py="6"
      direction={{ base: "column", lg: "row" }}
      minH="50vh"
    >
      <Image
        src="../images/work.jpg"
        width={{ base: "100%", lg: "50%" }}
        opacity=".6"
        borderLeftRadius="15"
        mt={{ lg: "-3rem" }}
        className="anim_chooseUsS_1"
      />
      <Box px="1rem" order={{ lg: "-1" }}>
        <Text
          py="4"
          color="teal.300"
          fontWeight="bold"
          className="anim_chooseUsS_2"
        >
          Why Choose Us
        </Text>
        <Text fontSize="1.4rem" fontWeight="bold" pb="4">
          Better Advanced Security Threat Detection{" "}
        </Text>
        <Text color="whiteAlpha.700" fontWeight="light" pb="4">
          Lorem dolore. Odit, harum neque? Earum autem assumenda neque sapiente
          cumque ratione, eligendi ducimus quisquam!
        </Text>
        {content.map((item, index) => {
          return (
            <Flex
              key={index}
              color="whiteAlpha.700"
              fontWeight="light"
              p="1"
              alignItems="baseline"
            >
              <AiOutlineCheck color="teal" /> <Text pl="4">{item}</Text>
            </Flex>
          );
        })}
        <Button
          bg="teal.400"
          size="lg"
          _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
          _focus={{ outline: "transparent" }}
          width="170px"
          paddingY="2rem"
          letterSpacing="wider"
          mt={{ sm: "8" }}
        >
          Read More
        </Button>
      </Box>
    </Flex>
  );
}
