import "./App.css";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projets from "./components/projets/Projets.tsx";
import Career from "./components/career/Career.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks.ts";
import { setTheme } from "./actions/themeActions.ts";

export default function App() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
