import "./Skills.css";
import React from "react";
import { useTranslation } from "react-i18next";
import git from "../../assets/tech/git.png";
import mongodb from "../../assets/tech/mongodb.png";
import mysql from "../../assets/tech/mysql.png";
import nodejs from "../../assets/tech/nodejs.png";
import postgresql from "../../assets/tech/postgresql.png";
import tailwindcss from "../../assets/tech/tailwindcss.png";
import typescript from "../../assets/tech/typescript.png";
import flutter from "../../assets/tech/flutter.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Skills: React.FC = () => {
  const icons = [
    {
      name: "git",
      icon: git,
    },
    { name: "MongoDB", icon: mongodb },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "nodejs",
      icon: nodejs,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "tailwincss",
      icon: tailwindcss,
    },
    { name: "typescript", icon: typescript },
    {
      name: "flutter",
      icon: flutter,
    },
  ];

  const { t } = useTranslation("skills");
  return (
    <section className="icon-grid-container">
      <h1 className="skills-presentation">{t("technologies")}</h1>
      <div className="skills-presentations">
        {icons.map((item, index) => (
          <div className="icon-grid" key={index}>
            <img src={item.icon} alt="Tech icons" className="icon-tech" />
            <p className="icon-skills-names">{item.name}</p>
          </div>
        ))}
      </div>

      <Link
        to="https://github.com/WaffoKom/"
        className="external-link-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span id="link-github-description">See More</span>
        <FontAwesomeIcon icon={faGithub} id="link-github" />
      </Link>
    </section>
  );
};

export default Skills;
