import "./Footer.css";

import React from "react";

import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <a
          href="https://wa.me/+237656294240"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-kom-b4a861314/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon-link" />
        </a>
        <a
          href="https://github.com/WaffoKom/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-link" />
        </a>
        <a
          href="mailTo:kwdparabic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon-link" />
        </a>
      </div>
      <div className="footer-copyright">
        © 2025 Copyright :
        <a
          target="_blank"
          rel="noreferrer noopener"
          id="footer-link-copyright"
          href="/about"
        >
          <strong>DaniloWaffis - WaffoKom</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
