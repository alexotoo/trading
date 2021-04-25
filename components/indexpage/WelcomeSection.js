import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

export default function WelcomeSection() {
  return (
    <Flex minH="70vh">
      <Image />
      <Box>box</Box>
      <Flex>
        <Box>
          <Text>Welcome To Cryptotoo</Text>
        </Box>
        <Box>2</Box>
        <Box>3</Box>
        <Button>TRY FOR FREE</Button>
      </Flex>
    </Flex>
  );
}
