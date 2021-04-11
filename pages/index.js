import { Button } from "@chakra-ui/button";
import { Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto website</title>
      </Head>
      <header className={styles.header}>
        <NavBar />
      </header>

      <main className={styles.main}>
        <Text color="teal.400" fontSize="5xl">
          Hello
        </Text>
        <Text color="pink.600" fontSize="5xl">
          Hello
        </Text>
        <Button size="lg" bg="pink.600" margin="1.5">
          hello
        </Button>
        <Spacer />

        <Button size="lg" bg="teal.400">
          hello
        </Button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
