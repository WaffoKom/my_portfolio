import { SET_THEME } from "../constants/actionTypes.ts";

export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: "light" | "dark";
}

export type ThemeActionTypes = SetThemeAction;

// Action creator for change theme
export const setTheme = (theme: "light" | "dark"): ThemeActionTypes => {
  localStorage.setItem("theme", theme);
  return {
    type: SET_THEME,
    payload: theme,
  };
};
