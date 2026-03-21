import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks";
import { setLanguage } from "../../actions/languageAction";
import { useTheme } from "../../contexts/ThemeContext";
import fr from "../../assets/lang-img/fr.png";
import en from "../../assets/lang-img/en.png";
import NavBar from "../NavBar/NavBar.tsx";
import { cn } from "../../lib/utils";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const [menuVisible, setMenuVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentLanguage = lang || i18n.language || "en";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeLanguage = (newLanguage: string) => {
    const currentPath = window.location.pathname;
    const section = currentPath.split('/').pop();
    const validSections = ['about', 'services', 'career', 'skills', 'projects', 'testimonials', 'contact'];

    dispatch(setLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage);

    if (section && validSections.includes(section)) {
      navigate(`/${newLanguage}/${section}`);
    } else {
      navigate(`/${newLanguage}`);
    }
    setMenuVisible(false);
  };

  const toggleNavBar = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "px-4 sm:px-6 lg:px-8 py-4",
        isScrolled
          ? "backdrop-blur-lg bg-white/80 dark:bg-dark-bg/80 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Menu Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleNavBar}
          className={cn(
            "p-3 rounded-xl transition-all duration-300",
            "bg-white dark:bg-dark-card",
            "border border-light-border dark:border-dark-border",
            "hover:bg-primary-50 dark:hover:bg-primary-900/20",
            "shadow-sm hover:shadow-md"
          )}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-gray-700 dark:text-gray-200 text-xl"
          />
        </motion.button>

        {/* Right - Theme & Language Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
              "p-3 rounded-xl transition-all duration-300",
              "bg-white dark:bg-dark-card",
              "border border-light-border dark:border-dark-border",
              "hover:bg-primary-50 dark:hover:bg-primary-900/20",
              "shadow-sm hover:shadow-md"
            )}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className={cn(
                "text-xl transition-colors duration-300",
                theme === "dark"
                  ? "text-yellow-400"
                  : "text-indigo-600"
              )}
            />
          </motion.button>

          {/* Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMenuVisible(!menuVisible)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-xl",
                "bg-white dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "hover:bg-primary-50 dark:hover:bg-primary-900/20",
                "transition-all duration-300 shadow-sm hover:shadow-md",
                "text-sm font-medium text-gray-700 dark:text-gray-200"
              )}
            >
              <span className="hidden sm:inline">
                {currentLanguage === "en" ? "English" : "Français"}
              </span>
              <span className="sm:hidden">
                {currentLanguage === "en" ? "EN" : "FR"}
              </span>
              <motion.div
                animate={{ rotate: menuVisible ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {menuVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "absolute right-0 mt-2 min-w-[140px] rounded-xl overflow-hidden",
                    "bg-white dark:bg-dark-card",
                    "border border-light-border dark:border-dark-border",
                    "shadow-xl"
                  )}
                >
                  <button
                    onClick={() => handleChangeLanguage("fr")}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3",
                      "hover:bg-primary-50 dark:hover:bg-primary-900/20",
                      "transition-colors duration-200",
                      "text-gray-700 dark:text-gray-200",
                      currentLanguage === "fr" && "bg-primary-50 dark:bg-primary-900/20"
                    )}
                  >
                    <img
                      src={fr}
                      alt="Français"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">Français</span>
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("en")}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3",
                      "hover:bg-primary-50 dark:hover:bg-primary-900/20",
                      "transition-colors duration-200",
                      "text-gray-700 dark:text-gray-200",
                      currentLanguage === "en" && "bg-primary-50 dark:bg-primary-900/20"
                    )}
                  >
                    <img
                      src={en}
                      alt="English"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">English</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <NavBar toggle={navVisible} />
    </motion.header>
  );
};

export default Header;
