import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks.ts";
import { RootState } from "../../store/store.ts";
import { loadTheme } from "../../utils/themeLoader.ts";
import "../../styles/darkTheme.css";
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  useEffect(() => {
    loadTheme(theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div className=""> {children}</div>
    </div>
  );
};

export default ThemeProvider;
