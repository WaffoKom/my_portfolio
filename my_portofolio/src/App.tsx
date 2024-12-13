import "./App.css";
import React from "react";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projets from "./components/projets/Projets.tsx";
import Career from "./components/career/Career.tsx";
import Header from "./components/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
