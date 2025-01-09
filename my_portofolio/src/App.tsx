import "./App.css";
import React, { useEffect } from "react";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projets/Projects.tsx";
import Career from "./components/career/Career.tsx";
import Header from "./components/Header/Header.tsx";
import Services from "./components/Services/Services.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 350,
      offset: 200,
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Services />
      <Career />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
