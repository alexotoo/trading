import { Button } from "@chakra-ui/button";
import { Container, Heading, Text } from "@chakra-ui/layout";

export default function TrialOfferSection() {
  return (
    <Container
      id="trail-section"
      maxW="container.lg"
      textAlign="center"
      minH="70vh"
    >
      <Heading as="h2" size="xl" letterSpacing="wide">
        Still Thinking About Our Services? Get One Month Trial
      </Heading>

      <Container maxW="container.md">
        <Text py="8">
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
      </Container>
    </Container>
  );
}
