import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineTool,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import { FaBrain } from "react-icons/fa";

import React, { createElement, useState } from "react";

const NavBar: React.FC = () => {
  const [active, setActive] = useState(0);
  const nav = [
    {
      link: "/",
      icon: AiOutlineHome,
    },
    {
      link: "/services",
      icon: AiOutlineBarChart,
    },
    {
      link: "/career",
      icon: AiOutlineTool,
    },
    {
      link: "/skills",
      icon: FaBrain,
    },
    {
      link: "/projets",
      icon: AiOutlineFolderOpen,
    },
    {
      link: "/testimonials",
      icon: AiOutlineTool,
    },
    {
      link: "/footer",
      icon: AiOutlineTool,
    },
  ];
  return (
    <nav className="nav-bar">
      {nav.map((item, index) => (
        <a
          href={item.link}
          key={index}
          onClick={() => setActive(index)}
          className={`nav-bar-minimalist ${index === active && ``}`}
        >
          {createElement(item.icon)}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
