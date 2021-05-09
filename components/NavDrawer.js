import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { GiCrestedHelmet } from "react-icons/gi";
import { useRef } from "react";

export default function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        _focus={{ outline: "transparent" }}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent
            bgGradient="linear(to-t, rgb(0, 21, 46), pink.600)"
            color="white"
          >
            <DrawerHeader color="teal.400">
              <HStack>
                <GiCrestedHelmet fontSize="3.5rem" />
                <Text ml="2" color="white" fontSize="2rem">
                  {" "}
                  Cryptotoo
                </Text>
                <DrawerCloseButton
                  top="2rem"
                  background="white"
                  _focus={{ outline: "transparent" }}
                />
              </HStack>
            </DrawerHeader>

            <DrawerBody></DrawerBody>

            <DrawerFooter>social media icons here</DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
