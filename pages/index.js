import Head from "next/head";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ChooseUsSection from "../components/indexpage/ChooseUsSection";
import HeroSection from "../components/indexpage/HeroSection";
import OfferSection from "../components/indexpage/OfferSection";
import TrustedSection from "../components/indexpage/TrustedSection";
import WelcomeSection from "../components/indexpage/WelcomeSection";
import NavBar from "../components/NavBar";
import { useCountUp } from "react-countup";
import { Badge, Box, Flex, Text, VStack } from "@chakra-ui/layout";
import {
  AiOutlineUsergroupAdd,
  AiOutlineEyeInvisible,
  AiOutlineGlobal,
  AiOutlineHdd,
} from "react-icons/ai";
import OurServicesSection from "../components/indexpage/OurServicesSection";
import TrialOfferSection from "../components/indexpage/TrialOfferSection";
import OurNewsSection from "../components/indexpage/OurNewsSection";
import SubscribeSection from "../components/indexpage/SubscribeSection";
import FooterSection from "../components/indexpage/FooterSection";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const [Counter1, setCounter1] = useState(0);
  const [Counter2, setCounter2] = useState(0);
  const [Counter3, setCounter3] = useState(0);
  const [Counter4, setCounter4] = useState(0);

  const mainRef = useRef(null);

  const { countUp: counter1, start: start1 } = useCountUp({
    duration: 5,
    end: 270,
    startOnMount: false,
  });
  const { countUp: counter2, start: start2 } = useCountUp({
    duration: 5,
    end: 100,
    startOnMount: false,
  });
  const { countUp: counter3, start: start3 } = useCountUp({
    duration: 5,
    end: 130,
    startOnMount: false,
  });
  const { countUp: counter4, start: start4 } = useCountUp({
    duration: 5,
    end: 85,
    startOnMount: false,
  });

  function startCounter() {
    setCounter1(start1);
    setCounter2(start2);
    setCounter3(start3);
    setCounter4(start4);
  }

  useEffect(() => {
    const animationRef = mainRef.current;
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.querySelector("#welcomeSection"),
        start: "top bottom",
        end: "+=100",
      },
    });

    gsap.from(animationRef.querySelector("#offerSection"), {
      opacity: 0,
      y: 70,
      duration: 3,
      scrollTrigger: {
        trigger: animationRef.querySelector("#offerSection"),
        scrub: true,
        start: "-10px 90%",
        end: "bottom bottom",
      },
    });
    gsap.from(animationRef.querySelector("#trustedSection"), {
      scale: 0,
      duration: 3,
      scrollTrigger: {
        trigger: animationRef.querySelector("#offerSection"),
        scrub: true,
        start: "top top",
      },
    });
    tl1.from(animationRef.querySelector(".anim_welcomeS_1"), {
      x: -300,
      opacity: 0,
      duration: 1,
    });
    tl1.from(animationRef.querySelector(".anim_welcomeS_2"), {
      y: 50,
      opacity: 0,
      duration: 1,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: animationRef.querySelector("#chooseUsSection"),
        start: "top bottom",
        end: "+=100",
      },
    });
    tl2.from(animationRef.querySelector(".anim_chooseUsS_1"), {
      x: 300,
      opacity: 0,
      duration: 1,
    });
    tl2.from(animationRef.querySelector(".anim_chooseUsS_2"), {
      y: 50,
      opacity: 0,
      duration: 1,
    });

    gsap.from(animationRef.querySelector("#countUpSection"), {
      onStart: startCounter,
      scrollTrigger: {
        trigger: animationRef.querySelector("#countUpSection"),
      },
    });
    gsap.from(animationRef.querySelector("#ourServiceSection"), {
      y: 60,
      duration: 2,
      scrollTrigger: {
        trigger: animationRef.querySelector("#ourServiceSection"),
        scrub: true,
        start: "-10px 70%",
        end: "center center",
      },
    });
  }, []);

  return (
    <div ref={mainRef}>
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
        <ChooseUsSection />
        <Box
          id="countUpSection"
          textAlign="center"
          minH="200px"
          paddingY="5rem"
          className="bg_global"
          px="1rem"
          width="100%"
        >
          <Flex
            borderRadius="5px"
            bg="#001A38"
            width="100%"
            flexWrap="wrap"
            minH="40vh"
            pt="3rem"
          >
            <Box width={{ base: "50%", md: "25%" }}>
              <VStack>
                <AiOutlineUsergroupAdd fontSize="3rem" color="teal" />
                <Text fontSize="2rem">
                  {counter1}
                  <Badge bg="none" fontSize="1rem" as="sup" color="teal.300">
                    +
                  </Badge>
                </Text>
              </VStack>
              <Text pb="8" color="whiteAlpha.700" fontWeight="light">
                Certified Team
              </Text>
            </Box>
            <Box width={{ base: "50%", md: "25%" }}>
              <VStack>
                <AiOutlineEyeInvisible fontSize="3rem" color="teal" />
                <Text fontSize="2rem">
                  {counter2}
                  <Badge bg="none" fontSize="1rem" as="sup" color="teal.300">
                    %
                  </Badge>
                </Text>
              </VStack>
              <Text pb="8" color="whiteAlpha.700" fontWeight="light">
                Assured Privacy
              </Text>
            </Box>
            <Box width={{ base: "50%", md: "25%" }}>
              <VStack>
                <AiOutlineGlobal fontSize="3rem" color="teal" />
                <Text fontSize="2rem">
                  {counter3}
                  <Badge bg="none" fontSize="1rem" as="sup" color="teal.300">
                    +
                  </Badge>
                </Text>
              </VStack>
              <Text pb="8" color="whiteAlpha.700" fontWeight="light">
                Global Stations
              </Text>
            </Box>
            <Box width={{ base: "50%", md: "25%" }}>
              <VStack>
                <AiOutlineHdd fontSize="3rem" color="teal" />
                <Text fontSize="2rem">
                  {counter4}
                  <Badge bg="none" fontSize="1rem" as="sup" color="teal.300">
                    +
                  </Badge>
                </Text>
              </VStack>
              <Text pb="8" color="whiteAlpha.700" fontWeight="light">
                Mega Servers
              </Text>
            </Box>
          </Flex>
        </Box>
        <OurServicesSection />
        <TrialOfferSection />
        <OurNewsSection />
        <SubscribeSection />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
