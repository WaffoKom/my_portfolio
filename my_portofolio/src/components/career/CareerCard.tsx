import "./CareerCard.css";
import React from "react";
import { Experience } from "../../types/Experiences";

const CareerCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="career-card">
      <div className="career-card-header">
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="career-card-logo"
        />
        <div>
          <h3 className="career-card-position">{experience.position}</h3>
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="career-card-company"
          >
            {experience.company}
          </a>
          <p className="career-card-date">{experience.date}</p>
        </div>
      </div>
      <div className="career-card-body">
        <h4>Description</h4>
        <ul>
          {experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <h4>Skills</h4>
        <ul>
          {experience.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
