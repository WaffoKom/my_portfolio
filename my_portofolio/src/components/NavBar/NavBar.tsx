import "./NavBar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faContactBook,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { NavItem } from "../../types/NavItem.ts";
import { Link } from "react-scroll";

const NavBar: React.FC<{ toggle: boolean }> = ({ toggle }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const nav: NavItem[] = [
    {
      link: "about",
      icon: () => <FontAwesomeIcon icon={faHome} />,

      iconClassName: "custom-icon-class",
    },
    {
      link: "services",
      icon: () => <FontAwesomeIcon icon={faUser} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "career",
      icon: () => <FontAwesomeIcon icon={faServicestack} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "skills",
      icon: () => <FontAwesomeIcon icon={faBrain} />,
      iconClassName: "custom-icon-class",
    },
    // {
    //   link: "projects",
    //   icon: () => <FontAwesomeIcon icon={faCode} />,
    //   iconClassName: "custom-icon-class",
    // },
    {
      link: "testimonials",
      icon: () => <FontAwesomeIcon icon={faContactBook} />,
      iconClassName: "custom-icon-class",
    },
  ];
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <nav className={`nav-bar ${toggle ? "visible" : "hidden"}`}>
      {nav.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className={`nav-item-link ${activeIndex === index ? "active" : ""} `}
          spy={true}
          offset={-80}
          smooth={true}
          duration={400}
          activeClass="active"
          role="navigation"
          aria-label="Main navigation"
          onSetActive={() =>
            window.history.replaceState(null, "", `/#${item.link}`)
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {React.createElement(item.icon, { className: item.iconClassName })}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
