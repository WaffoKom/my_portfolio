import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks.ts";
import { RootState } from "../../store/store.ts";
import { loadTheme } from "../../utils/themeLoader.ts";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  useEffect(() => {
    loadTheme(theme);
  }, [theme]);

  return (
    <div className={theme}>
      <div
        style={{
          backgroundColor: `var(--background-color)`,
          color: `var(--text-color,)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
