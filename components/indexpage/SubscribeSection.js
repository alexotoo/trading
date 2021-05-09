import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Center, Container, Heading, Text } from "@chakra-ui/layout";

export default function SubscribeSection() {
  return (
    <Container maxW="container.xl" bg="#001A38" py="4rem">
      <Container
        borderRadius="2xl"
        maxW="container.md"
        textAlign="center"
        bgGradient="linear(to-b,#001A38, #00152e, #001A38)"
      >
        <Heading as="h2" size="xl" letterSpacing="wide">
          Subscribe Our Newsletter
        </Heading>
        <Text color="whiteAlpha.500" py="8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo unde
          saepe. Omnis perferendis sequi sapiente temporibus id nostrum
          accusantium cum, quo quis aperiam iusto eveniet dolore eligendi
          laboriosam consequatur.
        </Text>
        <Center>
          <InputGroup>
            <Input
              placeholder="Your email address"
              size="lg"
              padding="2rem"
              bg="white"
              color="blackAlpha.700"
            />
            <InputRightElement height="100%" width="10rem">
              <Button bg="teal.400" padding="1.5rem">
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Center>
      </Container>
    </Container>
  );
}
