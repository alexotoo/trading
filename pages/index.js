import { Button } from "@chakra-ui/button";
import { Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import HeroSection from "../components/indexpage/HeroSection";
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
        <HeroSection />
      </header>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
