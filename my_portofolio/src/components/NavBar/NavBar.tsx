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
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{
        y: toggle ? 0 : 20,
        opacity: toggle ? 1 : 0,
        scale: toggle ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "fixed left-0 right-0 mx-auto bottom-6 z-40 w-max",
        "flex flex-row items-center gap-2 p-2 rounded-full",
        "bg-[#eef2f7]/90 dark:bg-[#1a1f2b]/85 backdrop-blur-xl",
        "border border-white/70 dark:border-white/10",
        "shadow-[8px_8px_20px_rgba(148,163,184,0.28),-8px_-8px_20px_rgba(255,255,255,0.85),inset_1px_1px_0_rgba(255,255,255,0.7),inset_-1px_-1px_0_rgba(148,163,184,0.2)]",
        "dark:shadow-[8px_8px_20px_rgba(0,0,0,0.35),-6px_-6px_14px_rgba(255,255,255,0.03),inset_1px_1px_0_rgba(255,255,255,0.06)]",
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
            "p-3 rounded-full cursor-pointer transition-all duration-300",
            "bg-[#f7f9fc] dark:bg-dark-bg/90",
            "border border-slate-200/80 dark:border-slate-700/60",
            "shadow-[inset_1px_1px_0_rgba(255,255,255,0.95),inset_-1px_-1px_0_rgba(148,163,184,0.15)]",
            "hover:bg-primary-500 hover:text-white hover:border-primary-400",
            "hover:shadow-lg hover:shadow-primary-500/30",
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
              "absolute left-1/2 -translate-x-1/2 bottom-full mb-3",
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
