import React, { useState, useEffect } from "react";
import { AnimatePresence, Div, Span, Header as MotionHeader } from "../ui/motion";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslations } from "../../i18n/useTranslation";
import { useAppDispatch } from "../../hooks";
import { setLanguage } from "../../actions/languageAction";
import { useTheme } from "../../contexts/ThemeContext";
import fr from "../../assets/lang-img/fr.png";
import en from "../../assets/lang-img/en.png";
import NavBar from "../NavBar/NavBar.tsx";
import { cn } from "../../lib/utils";
import { validSectionSet } from "../../i18n/sections";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon/icon";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslations();
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
    const section = currentPath.split("/").pop();

    dispatch(setLanguage(newLanguage));
    localStorage.setItem("language", newLanguage);
    i18n.changeLanguage(newLanguage);

    if (section !== undefined && validSectionSet.has(section)) {
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
    <>
      <MotionHeader
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
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleNavBar}
          variant="soft"
          tone="neutral"
          size="icon"
          radius="xl"
          className={cn(
            "shadow-sm hover:shadow-md"
          )}
          aria-label="Toggle navigation"
        >
          <Icon name="Fa6Bars" className="text-gray-700 dark:text-gray-200 text-xl" />
        </Button>

        {/* Right - Theme & Language Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Theme Toggle */}
          <Button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={toggleTheme}
            variant="solid"
            tone="neutral"
            size="md"
            radius="full"
            className={cn(
              "relative h-12 w-24  transition-all duration-300",
              "p-0",
              "shadow-sm hover:shadow-md",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              "dark:focus:ring-offset-dark-bg"
            )}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span
              className={cn(
                "absolute inset-1 rounded-full transition-colors duration-300",
                theme === "dark"
                  ? "bg-slate-800"
                  : "bg-slate-200"
              )}
            />

            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon
                name="Fa6Sun"
                className={cn(
                  "text-sm transition-colors duration-300",
                  theme === "dark" ? "text-slate-500" : "text-amber-500"
                )}
              />
            </span>

            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon
                name="Fa6Moon"
                className={cn(
                  "text-sm transition-colors duration-300",
                  theme === "dark" ? "text-indigo-300" : "text-slate-500"
                )}
              />
            </span>

            <Span
              className={cn(
                "absolute top-1 left-1 z-10 h-10 w-10 rounded-full",
                "flex items-center justify-center",
                "shadow-md border border-light-border dark:border-dark-border",
                "bg-white dark:bg-slate-900"
              )}
              animate={{ x: theme === "dark" ? 44 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
            >
              <Icon
                name={theme === "dark" ? "Fa6Moon" : "Fa6Sun"}
                className={cn(
                  "text-sm",
                  theme === "dark" ? "text-indigo-300" : "text-amber-500"
                )}
              />
            </Span>
          </Button>

          {/* Language Selector */}
          <div className="relative">
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMenuVisible(!menuVisible)}
              variant="soft"
              tone="neutral"
              size="md"
              radius="xl"
              className={cn(
                "shadow-sm hover:shadow-md",
                "text-sm font-medium text-gray-700 dark:text-gray-200"
              )}
            >
              <span className="hidden sm:inline">
                {currentLanguage === "en" ? "English" : "Français"}
              </span>
              <span className="sm:hidden">
                {currentLanguage === "en" ? "EN" : "FR"}
              </span>
              <Div
                animate={{ rotate: menuVisible ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon name="Fa6ChevronDown" className="text-xs" />
              </Div>
            </Button>

            <AnimatePresence>
              {menuVisible && (
                <Div
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
                  <Button
                    onClick={() => handleChangeLanguage("fr")}
                    variant="soft"
                    tone="neutral"
                    size="md"
                    radius="md"
                    fullWidth
                    className={cn(
                      "justify-start gap-3",
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
                  </Button>
                  <Button
                    onClick={() => handleChangeLanguage("en")}
                    variant="soft"
                    tone="neutral"
                    size="md"
                    radius="md"
                    fullWidth
                    className={cn(
                      "justify-start gap-3",
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
                  </Button>
                </Div>
              )}
            </AnimatePresence>
          </div>
        </div>
        </div>
      </MotionHeader>

      {/* Navigation Bar */}
      <NavBar toggle={navVisible} />
    </>
  );
};

export default Header;
