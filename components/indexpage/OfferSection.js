import { Flex, Box, HStack, Text } from "@chakra-ui/react";
import styles from "./offersection.module.scss";
import {
  AiFillLock,
  AiFillSafetyCertificate,
  AiOutlineCloudServer,
} from "react-icons/ai";

export default function OfferSection() {
  return (
    <Flex
      id="offerSection"
      padding="1rem"
      pt={8}
      justifyContent="space-between"
      minH="30vh"
      color="whiteAlpha.700"
      flexWrap="wrap"
    >
      <Box className={styles.offerBox} width={{ base: "100%", md: "32%" }}>
        <HStack pb="1rem">
          <AiFillLock color="teal" fontSize="3rem" />
          <Text color="white" fontSize="1.4rem">
            Security Services{" "}
          </Text>
        </HStack>
        <Text fontWeight="light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
          quibusdam beatae minus ex est, excepturi vero sit eligendi magni{" "}
        </Text>
      </Box>
      <Box className={styles.offerBox} width={{ base: "100%", md: "32%" }}>
        <HStack pb="1rem">
          <AiFillSafetyCertificate color="teal" fontSize="3rem" />
          <Text color="white" fontSize="1.4rem">
            Industry Certified{" "}
          </Text>
        </HStack>
        <Text fontWeight="light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
          quibusdam beatae minus ex est, excepturi vero sit eligendi magni{" "}
        </Text>
      </Box>
      <Box className={styles.offerBox} width={{ base: "100%", md: "32%" }}>
        <HStack pb="1rem">
          <AiOutlineCloudServer color="teal" fontSize="3rem" />
          <Text color="white" fontSize="1.4rem">
            Cloud Powered{" "}
          </Text>
        </HStack>
        <Text fontWeight="light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
          quibusdam beatae minus ex est, excepturi vero sit eligendi magni{" "}
        </Text>
      </Box>
    </Flex>
  );
}
