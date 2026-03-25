import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "./components/home/About.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projets/Projects.tsx";
import Career from "./components/career/Career.tsx";
import Header from "./components/Header/Header.tsx";
import Services from "./components/Services/Services.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import SEOMetadata from "./components/SEO/SEOMetadata.tsx";

const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const sectionMatch = path.match(/\/(about|services|career|skills|projects|testimonials|contact)$/);

    if (sectionMatch) {
      const sectionId = sectionMatch[1];
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else if (path.endsWith('/en') || path.endsWith('/fr')) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const MainLayout: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && (lang === "en" || lang === "fr")) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      const defaultLang = "en";
      navigate(`/${defaultLang}`, { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <>
      <SEOMetadata />
      <ScrollToSection />
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
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
};

const App: React.FC = () => {
  const defaultLang = "en";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<MainLayout />} />
        <Route path="/:lang/about" element={<MainLayout />} />
        <Route path="/:lang/services" element={<MainLayout />} />
        <Route path="/:lang/career" element={<MainLayout />} />
        <Route path="/:lang/skills" element={<MainLayout />} />
        <Route path="/:lang/projects" element={<MainLayout />} />
        <Route path="/:lang/testimonials" element={<MainLayout />} />
        <Route path="/:lang/contact" element={<MainLayout />} />
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
