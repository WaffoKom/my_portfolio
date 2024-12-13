export const loadTheme = (theme: "light" | "dark") => {
  const rootElement = document.documentElement;

  if (theme === "dark") {
    rootElement.classList.add("dark-theme");
  } else {
    rootElement.classList.remove("dark-theme");
  }
};
