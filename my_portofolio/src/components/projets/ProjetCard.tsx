import "./ProjectCard.css";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import ProjetCardProps from "../../types/ProjetCard.ts";
import { Link } from "react-router-dom";

const ProjetCard: React.FC<typeof ProjetCardProps> = ({
  name,
  description,
  tags,
  image,
  thumbnail,
  demo,
  sourcecode,
}) => {
  const mobileDevice = window.matchMedia("(max-width: 640px)").matches;

  return (
    <div className="project-card">
      <div className="project-card-img">
        <img
          loading="lazy"
          width={mobileDevice ? 307 : 640}
          height={mobileDevice ? 720 : 1024}
          src={mobileDevice ? thumbnail : image}
          alt={name}
          data-aos="fade-up"
          id="project-img"
        />
      </div>
      <div className="project-card-description">
        <h2 id="site-name">{name}</h2>
        <p id="site-description">{description}</p>
        <div className="tags">
          {tags?.map((tag, index) => (
            <span
              key={index}
              style={{
                color: tag.color,
              }}
              id="tags-unique"
            >
              # {tag.name}
            </span>
          ))}
        </div>
        <div className="externals-site-links">
          <Link
            to={demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link google"
          >
            <span>Demo</span>{" "}
            <AiOutlineGoogle className="site-blank google-blank" />
          </Link>
          <Link
            to={sourcecode || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="site-link github"
          >
            <span>Code</span>{" "}
            <AiOutlineGithub className="site-blank github-blank" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;
