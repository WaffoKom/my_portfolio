import "./About.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const About: React.FC = () => {
  const { t } = useTranslation("about");

  const backLine = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="about">
      <section className="about-container">
        <div className="about-left">
          <div className="about-text-presentation">
            <h1>{t("perso.title")}</h1>
            <h2>{t("perso.name")}</h2>
            <h3>{t("perso.role")}</h3>
            <p>{backLine(t("perso.presentation"))}</p>
            <p>{backLine(t("perso.presentation_next"))}</p>
            <p>{t("perso.rendezvous")}</p>{" "}
          </div>
          <Link to="services" id="start">
            {t("perso.letGetStarted")}
          </Link>
        </div>
        <div className="about-right">
          <img
            src="/author/danilo_img.jpg"
            alt="image-description"
            className="about-image"
          />
          <div className="external-links">
            <NavLink
              to="https://wa.me/+237656294240"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="link-icon" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
            </NavLink>
            <NavLink
              to="https://github.com/WaffoKom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="link-icon" />
            </NavLink>
            <NavLink
              to="mailTo:kwdparabic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
