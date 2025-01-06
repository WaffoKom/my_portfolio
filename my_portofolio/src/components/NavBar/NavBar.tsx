import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faContactBook,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { NavItem } from "../../types/NavItem.ts";
import { Link } from "react-router-dom";
import React, { createElement } from "react";
const NavBar: React.FC<{ toggle: boolean }> = ({ toggle }) => {
  const nav: NavItem[] = [
    {
      link: "",
      icon: () => <FontAwesomeIcon icon={faHome} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "/services",
      icon: () => <FontAwesomeIcon icon={faUser} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "/career",
      icon: () => <FontAwesomeIcon icon={faServicestack} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "/skills",
      icon: () => <FontAwesomeIcon icon={faBrain} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "./projects",
      icon: () => <FontAwesomeIcon icon={faCode} />,
      iconClassName: "custom-icon-class",
    },
    {
      link: "/contact",
      icon: () => <FontAwesomeIcon icon={faContactBook} />,
      iconClassName: "custom-icon-class",
    },
  ];
  return (
    <nav className={`nav-bar ${toggle ? "visible" : "hidden"}`}>
      {nav.map((item, index) => (
        <Link to={item.link} key={index} className="nav-item-link">
          {createElement(item.icon, { className: nav[0].iconClassName })}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
