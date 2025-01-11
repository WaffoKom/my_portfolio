import React from "react";
import "./CareerCard.css";
import { Experience } from "../../types/Experiences";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useAppSelector } from "../../hooks";
import "react-vertical-timeline-component/style.min.css";
export const CareerCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  const { theme } = useAppSelector((state) => state.theme);

  const light = {
    background: "#f7f7f7",
    border: "2px solid #ffffff",
    color: "#211e35",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const dark = {
    background: "#1d1836",
    color: "#fff",
    boxShadow: "none",
    borderBottom: "3px solid #915EFF",
  };
  return (
    <VerticalTimelineElement
      className="verticalTimeElement"
      contentStyle={theme === "light" ? light : dark}
      contentArrowStyle={{
        borderRight:
          theme === "light" ? "7px solid  #ffffff" : "7px solid  #232631",
      }}
      date={experience.date}
      iconStyle={
        theme === "dark"
          ? {
              background: experience.iconBg,
              border: "2px solid #915EFF80",
              boxShadow: "none",
            }
          : { background: experience.iconBg }
      }
      icon={
        <a
          target="_blank"
          rel="noreferrer"
          href={experience.link}
          className="image-link-timeline"
        >
          <img
            loading="lazy"
            src={experience.icon}
            alt={experience.company_name}
            className="image-timeline"
          />
        </a>
      }
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          fontFamily: "inherit",
        }}
        className="timeline-container-experience"
      >
        <h3>{experience.title}</h3>
        <a
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          className="link-timeline-description"
        >
          {experience.company_name}
        </a>
      </div>
      <ul
        className="list-realization"
        style={{
          marginTop: "1.25rem",
          marginLeft: "1.25rem",
        }}
      >
        {experience.points.map((point, index) => (
          <li key={`experience-points-${index}`}>{point}</li>
        ))}
        {experience.point_skills.map((point_skill, index) => (
          <li key={`experience-points-${index}`}>{point_skill}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default CareerCard;
