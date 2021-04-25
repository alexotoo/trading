import { Image } from "@chakra-ui/image";
import { Box, Center, Grid, HStack, Spacer, Text } from "@chakra-ui/layout";
import styles from "./trustedsection.module.scss";
export default function TrustedSection() {
  return (
    <Box
      padding="1rem"
      mt={{ base: "2rem", md: "4rem" }}
      minH="60vh"
      paddingBottom="4rem"
    >
      <Text align="center" fontSize="4xl">
        Trusted by Over{" "}
        <Text d="inline" color="teal.500">
          120+{" "}
        </Text>
        Companies Worldwide
      </Text>

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap="6"
        mt="12"
      >
        <Box>
          <Center>
            <Image
              src="../images/logo1.png"
              width="100px"
              className={styles.imageItem}
            />
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="../images/logo2.png"
              width="100px"
              className={styles.imageItem}
            />
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="../images/logo3.png"
              width="100px"
              className={styles.imageItem}
            />
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="../images/logo4.png"
              width="100px"
              className={styles.imageItem}
            />
          </Center>
        </Box>
      </Grid>
    </Box>
  );
}
