import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../actions/themeActions";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Button } from "flowbite-react";

const Header: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <div>
      <Button
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
      </Button>
    </div>
  );
};

export default Header;
