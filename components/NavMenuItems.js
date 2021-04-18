import { Button } from "@chakra-ui/button";
import { MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
export default function NavMenuItems({ items, icon }) {
  const menuObject = [
    {
      title: "Services",
      subTitle: ["Services", "Services Details"],
      isIcon: true,
    },
    {
      title: "Pages",
      subTitle: ["Our Team", "Pricing", "FAQ"],
      isIcon: true,
    },
  ];

  const [menuItems] = useState(menuObject);

  console.log(items, menuItems, menuObject);
  return menuItems.map((menu, index) => {
    const { title, subTitle, isIcon } = menu;
    console.log(title, subTitle, isIcon);
    return (
      <Menu key={index}>
        <MenuButton
          as={Button}
          rightIcon={isIcon && <FiChevronDown />}
          background="transparent"
          _focus={{ outline: "transparent" }}
          _active={{ background: "none" }}
          _hover={{ background: "none", color: "teal.400" }}
          fontWeight="normal"
          className="navItemBox"
          paddingX="2"
        >
          <Link href="/">{title}</Link>
        </MenuButton>
        {
          <MenuList>
            {subTitle.map((item, index) => (
              <MenuItem
                key={index}
                _hover={{ color: "teal.400" }}
                transition="ease 0.3s"
                color="black"
              >
                {<Link href={`/${item}`}>{item}</Link>}
              </MenuItem>
            ))}
          </MenuList>
        }
      </Menu>
    );
  });
}
