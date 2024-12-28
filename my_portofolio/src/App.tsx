import "./App.css";
import React, { useEffect } from "react";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projets/Projects.tsx";
import Career from "./components/career/Career.tsx";
import Header from "./components/Header/Header.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Services from "./components/Services/Services.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Pages />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;

const Pages: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggleNavBar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header />
      <NavBar toggle={toggle} handleToggleNavBar={handleToggleNavBar} />
      <About />
      <Services />
      <Career />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/career" element={<Career />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};
