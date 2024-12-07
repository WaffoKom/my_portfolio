import "./About.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  return (
    <section className="about-container">
      <div className="about-letft">
        <h1>{t("title")}</h1>
        <h2>{t("content")}</h2>
        <p>{t("role")}</p>
        <p>{t("presentation")}</p>
        <p>{t("experience")}</p>
        <p>{t("presentation_next")}</p>
        <Button>{t("letGetStarted")}</Button>
        <Button>{t("downlaodResume")}</Button>
      </div>
      <div className="about-right">
        <img
          src="./src/assets/images/danilo_img.jpg"
          alt="image-description"
          className="about-image"
        />
        <div className="external-links">
          <a
            href="https://wa.me/+237656294240"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="link-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-kom-b4a861314/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="link-icon" />
          </a>
          <a
            href="https://github.com/WaffoKom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="link-icon" />
          </a>
          <a
            href="mailTo:kwdparabic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
