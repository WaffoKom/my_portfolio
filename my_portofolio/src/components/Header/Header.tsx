import "./Header.css";
import React, { useState } from "react";
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
  const [navVisible, setNavVisible] = useState(false);
  const handleChangeLanguage = (newLanguage: string) => {
    newLanguage = currentLanguage == "en" ? "fr" : "en";
    dispatch(setLanguage(newLanguage));
    setMenuVisible(false);
  };

  const toggleNavBar = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="header">
      <div className="left">
        <button className="nav-toggle-button" onClick={toggleNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="right">
        <button
          className="theme-toggle-button"
          onClick={handleToggleTheme}
          style={{
            backgroundColor: `var(--buton-background)`,
            color: `var(--button-text-color)`,
          }}
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
        <button
          className="language-button"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          {currentLanguage === "en" ? "English" : "Francais"}
          <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "8px" }} />
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
                <img src={en} alt="English version" />
                English
              </button>
            )}
            {currentLanguage !== "fr" && (
              <button
                className="language-option"
                onClick={() => {
                  handleChangeLanguage("fr");
                }}
              >
                <img src={fr} alt="French Version" />
                Francais
              </button>
            )}
          </div>
        )}
      </div>

      {navVisible && <NavBar />}
    </div>
  );
};

export default Header;
