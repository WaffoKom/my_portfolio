import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home.tsx";
import Skills from "./Pages/skills/Skills.tsx";
import Projets from "./Pages/projets/Projets.tsx";
import Career from "./Pages/career/Career.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}
