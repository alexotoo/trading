import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Center,
  Grid,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import styles from "./trustedsection.module.scss";
export default function TrustedSection() {
  return (
    <Box
      id="trustedSection"
      padding="1rem"
      mt={{ base: "2rem", md: "4rem" }}
      minH="60vh"
      paddingBottom="4rem"
    >
      <Heading as="h2" size="xl" letterSpacing="wide" align="center">
        Trusted by Over{" "}
        <Badge
          bg="none"
          fontSize="inherit"
          marginX="1"
          as="sup"
          color="teal.300"
        >
          120+
        </Badge>{" "}
        Companies Worldwide
      </Heading>

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
