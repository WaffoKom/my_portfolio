import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link
          to="https://wa.me/+237656294240"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon-link" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon-link" />
        </Link>
        <Link
          to="https://github.com/WaffoKom/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-link" />
        </Link>
        <Link
          to="mailto:kwdparabic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon-link" />
        </Link>
      </div>
      <div className="footer-copyright">
        © 2025 Copyright :
        <Link
          target="_blank"
          rel="noreferrer noopener"
          id="footer-link-copyright"
          to="/#about"
        >
          <strong>DaniloWaffis - WaffoKom</strong>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
