import { Button } from "@chakra-ui/button";
import { MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { HStack } from "@chakra-ui/layout";
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
      <div class="dropdown">
        <div className="navbutton">
          <button class="dropbtn">{title}</button>
          <FiChevronDown />
        </div>

        <div class="dropdown-content">
          {subTitle.map((item) => (
            <Link href="/">
              <a>{item}</a>
            </Link>
          ))}
        </div>
      </div>
    );
  });
}
