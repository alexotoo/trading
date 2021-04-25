import { Button } from "@chakra-ui/button";
import { Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import HeroSection from "../components/indexpage/HeroSection";
import OfferSection from "../components/indexpage/OfferSection";
import TrustedSection from "../components/indexpage/TrustedSection";
import WelcomeSection from "../components/indexpage/WelcomeSection";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto website</title>
      </Head>
      <header>
        <NavBar />
        <HeroSection />
      </header>

      <main>
        <OfferSection />
        <TrustedSection />
        <WelcomeSection />
      </main>

      <footer> footer here</footer>
    </div>
  );
}
