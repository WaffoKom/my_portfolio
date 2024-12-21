import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../actions/themeActions";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setLanguage } from "../../actions/languageAction";
import fr from "../../assets/lang-img/fr.png";
import en from "../../assets/lang-img/en.png";

const Header: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { currentLanguage } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  const handleChangeLanguage = (newLanguage: string) => {
    newLanguage = currentLanguage == "en" ? "fr" : "en";
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div className="header">
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

      {currentLanguage !== "en" && (
        <button
          className="language-button"
          onClick={() => {
            handleChangeLanguage("en");
          }}
        >
          <img src={en} alt="English version" />
        </button>
      )}
      {currentLanguage !== "fr" && (
        <button
          onClick={() => {
            handleChangeLanguage("fr");
          }}
        >
          <img src={fr} alt="French Version" />
        </button>
      )}
    </div>
  );
};

export default Header;
