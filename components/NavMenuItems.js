import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function NavMenuItems({ items }) {
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

  return menuItems.map((menu, index) => {
    const { title, subTitle, isIcon } = menu;

    return (
      <div className="dropdown" key={index}>
        <div className="navbutton">
          <button className="dropbtn">{title}</button>
          <FiChevronDown />
        </div>

        <div className="dropdown-content">
          {subTitle.map((item, index) => (
            <Link href="/" key={index}>
              <a>{item}</a>
            </Link>
          ))}
        </div>
      </div>
    );
  });
}
