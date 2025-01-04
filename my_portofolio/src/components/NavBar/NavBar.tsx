import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { MdPermContactCalendar } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "../../types/NavItem.ts";
import { Link } from "react-router-dom";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import React, { createElement } from "react";

const NavBar: React.FC<{ toggle: boolean; handleToggleNavBar: () => void }> = ({
  handleToggleNavBar,
  toggle,
}) => {
  // const [active, setActive] = useState(0);
  const nav: NavItem[] = [
    {
      link: "",
      icon: () => <FontAwesomeIcon icon={faHome} />,
      className: "nav-item-home",
    },
    {
      link: "/services",
      icon: BiUser,
      className: "nav-item-services",
    },
    {
      link: "/career",
      icon: RiServiceLine,
      className: "nav-item-career",
    },
    {
      link: "/skills",
      icon: () => <FontAwesomeIcon icon={faBrain} />,
      className: "nav-item-skills",
    },
    {
      link: "./projects",
      icon: () => <FontAwesomeIcon icon={faCode} />,
      className: "nav-item-projects",
    },
    {
      link: "/contact",
      icon: MdPermContactCalendar,
      className: "nav-item-contacts",
    },
  ];
  return (
    <nav className="nav-bar" onClick={handleToggleNavBar}>
      {toggle && (
        <>
          {nav.map((item, index) => (
            <Link to={item.link} key={index} className={item.className}>
              {createElement(item.icon)}
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};

export default NavBar;
