import React from "react";

import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import ProjetCardProps from "../../types/ProjetCard.ts";

const ProjetCard: React.FC<typeof ProjetCardProps> = ({
  name,
  description,
  tags,
  image,
  thumbnail,
  demo,
  sourcecode,
}) => {
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
      <img src={image} alt={name} />
      <img src={thumbnail} alt={`${name} thumbnail`} />
      <a href={demo} target="_blank" rel="noopener noreferrer">
        Demo <AiOutlineGoogle className="" />
      </a>
      <a href={sourcecode} target="_blank" rel="noopener noreferrer">
        Code <AiOutlineGithub className="" />
      </a>
    </div>
  );
};

export default ProjetCard;
