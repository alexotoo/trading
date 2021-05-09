import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading, Text } from "@chakra-ui/layout";

export default function TrialOfferSection() {
  return (
    <Container id="trail-section" maxW="container.lg" py="8">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        pt="3rem"
      >
        <Heading as="h2" size="xl" letterSpacing="wide">
          Still Thinking About Our Services? Get One Month Trial
        </Heading>
        <Text py="10" paddingX="10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minus
          perferendis sapiente, veritatis consequatur nulla voluptates velit!
          Commodi architecto voluptatum voluptate consectetur officiis quibusdam
          provident voluptates, quae nobis esse veniam.
        </Text>

        <Button
          bg="teal.400"
          size="lg"
          _hover={{ bg: "teal.500", transform: "translateY(-2px)" }}
          _focus={{ outline: "transparent" }}
          width="170px"
          paddingY="2rem"
          letterSpacing="wider"
          my={{ sm: "4" }}
        >
          Get Trial
        </Button>
      </Flex>
    </Container>
  );
}
