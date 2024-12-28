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
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index} className={tag.color}>
            {tag.name}
          </span>
        ))}
      </div>
      <img
        loading="lazy"
        width={mobileDevice ? 768 : 1366}
        height={mobileDevice ? 307 : 636}
        src={mobileDevice ? thumbnail : image}
        alt={name}
        data-aos="fade-up"
      />
      <Link to={demo || "#"} target="_blank" rel="noopener noreferrer">
        Demo <AiOutlineGoogle className="" />
      </Link>
      <Link to={sourcecode || "#"} target="_blank" rel="noopener noreferrer">
        Code <AiOutlineGithub className="" />
      </Link>
    </div>
  );
};

export default ProjetCard;
