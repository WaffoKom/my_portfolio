import "./App.css";
import React from "react";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projets/Projects.tsx";
import Career from "./components/career/Career.tsx";
import Header from "./components/Header/Header.tsx";
import Services from "./components/Services/Services.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="career">
          <Career />
        </section>
        <section id="skills">
          <Skills />
          <Projects />
        </section>
        <section id="contact">
          <Testimonials />
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
export default App;
