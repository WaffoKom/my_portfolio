import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faContactBook,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { NavItem } from "../../types/NavItem.ts";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const NavBar: React.FC<{ toggle: boolean }> = ({ toggle }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

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

  const handleNavClick = (section: string) => {
    navigate(`/${currentLang}/${section}`);
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: toggle ? 0 : -100,
        opacity: toggle ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-40",
        "flex flex-col gap-3 p-3 rounded-2xl",
        "bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg",
        "border border-light-border dark:border-dark-border",
        "shadow-xl",
        !toggle && "pointer-events-none"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      {nav.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick(item.link)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "p-4 rounded-xl cursor-pointer transition-all duration-300",
            "bg-gray-100 dark:bg-dark-bg",
            "border border-transparent",
            "hover:bg-primary-500 hover:text-white",
            "hover:shadow-lg hover:shadow-primary-500/50",
            "group relative"
          )}
        >
          {React.createElement(item.icon, {
            className: cn(
              "text-lg transition-colors duration-300",
              "text-gray-700 dark:text-gray-300",
              "group-hover:text-white"
            ),
          })}

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0,
              x: activeIndex === index ? 0 : -10,
            }}
            className={cn(
              "absolute left-full ml-3 top-1/2 -translate-y-1/2",
              "px-3 py-2 rounded-lg whitespace-nowrap",
              "bg-gray-900 dark:bg-gray-100",
              "text-white dark:text-gray-900",
              "text-sm font-medium",
              "pointer-events-none"
            )}
          >
            {item.link.charAt(0).toUpperCase() + item.link.slice(1)}
          </motion.div>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default NavBar;
