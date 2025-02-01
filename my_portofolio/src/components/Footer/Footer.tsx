import "./Footer.css";

import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="https://wa.me/+237656294240"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon-link" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/daniel-kom-b4a861314/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon-link" />
        </NavLink>
        <NavLink
          to="https://github.com/WaffoKom/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-link" />
        </NavLink>
        <NavLink
          to="mailTo:kwdparabic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icons"
        >
          <FontAwesomeIcon icon={faEnvelope} className="icon-link" />
        </NavLink>
      </div>
      <div className="footer-copyright">
        © 2025 Copyright :
        <NavLink
          target="_blank"
          rel="noreferrer noopener"
          id="footer-link-copyright"
          to="/#about"
        >
          <strong>DaniloWaffis - WaffoKom</strong>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
