import "./Header.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../actions/themeActions";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setLanguage } from "../../actions/languageAction";
import fr from "../../assets/lang-img/fr.png";
import en from "../../assets/lang-img/en.png";
import NavBar from "../NavBar/NavBar.tsx";

const Header: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { currentLanguage } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Change 100 to adjust scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeLanguage = (newLanguage: string) => {
    newLanguage = currentLanguage == "en" ? "fr" : "en";
    dispatch(setLanguage(newLanguage));
    setMenuVisible(false);
  };

  const toggleNavBar = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <div className={`header ${isScrolled ? "blur" : "header"}`}>
      <div className="left">
        <button className="nav-toggle-button" onClick={toggleNavBar}>
          <FontAwesomeIcon
            icon={faBars}
            id="fabars"
            style={{ backgroundColor: "transparent" }}
          />
        </button>
      </div>
      <div className="right">
        <button className="theme-toggle-button" onClick={handleToggleTheme}>
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} id="faState" />
          ) : (
            <FontAwesomeIcon icon={faMoon} id="faState" />
          )}
        </button>
        <div className="language-icons">
          <button
            className="language-button-choice"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {currentLanguage === "en" ? "English" : "Francais"}

            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "10px", backgroundColor: "transparent" }}
            />
          </button>
          {menuVisible && (
            <div className="language-menu">
              {currentLanguage !== "en" && (
                <button
                  className="language-button"
                  onClick={() => {
                    handleChangeLanguage("en");
                  }}
                >
                  <img
                    src={en}
                    alt="English version"
                    className="language-button-image"
                  />
                  <span className="language-button-image-d">English</span>
                </button>
              )}
              {currentLanguage !== "fr" && (
                <button
                  className="language-button"
                  onClick={() => {
                    handleChangeLanguage("fr");
                  }}
                >
                  <img
                    src={fr}
                    alt="French Version"
                    className="language-button-image"
                  />
                  <span className="language-button-image-d">Francais</span>
                </button>
              )}
            </div>
          )}
        </div>
        {<NavBar toggle={navVisible} />}
      </div>
    </div>
  );
};

export default Header;
