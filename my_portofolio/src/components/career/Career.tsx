import "./Career.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import altplus from "../../assets/company/altplus.png";
import free from "../../assets/company/free.png";
import scs from "../../assets/company/scs.jpg";
import { Link } from "react-router-dom";
import { VerticalTimeline } from "react-vertical-timeline-component";
import CareerCard from "./CareerCard";
import { useAppSelector } from "../../hooks";
import "react-vertical-timeline-component/style.min.css";

const Career: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { t } = useTranslation("experience");

  const experiences = [
    {
      title: t("work.positions.position_0"),
      company_name: "SCS",
      icon: scs,
      iconBg: "#EEE",
      date: "oct 2021",
      link: "",
      points: [
        t("work.positions.point_0.description"),
        t("work.positions.point_1.description"),
      ],
      point_skills: [
        t("work.positions.point_0.skills"),
        t("work.positions.point_1.skills"),
      ],
    },
    {
      title: t("work.positions.position_1"),
      company_name: "INDEPENDENT",
      icon: free,
      iconBg: "#EEE",
      date: "",
      link: "",
      points: [
        t("work.positions.point_2.description"),
        t("work.positions.point_3.description"),
        t("work.positions.point_4.description"),
      ],
      point_skills: [
        t("work.positions.point_2.skills"),
        t("work.positions.point_3.skills"),
        t("work.positions.point_4.skills"),
      ],
    },
    {
      title: t("work.positions.position_2"),
      company_name: "Alt+",
      icon: altplus,
      iconBg: "#EEEEEE",
      date: "",
      link: "",
      points: [
        t("work.positions.point_5.description"),
        t("work.positions.point_6.description"),
      ],
      point_skills: [
        t("work.positions.point_5.skills"),
        t("work.positions.point_6.skills"),
      ],
    },
  ];

  return (
    <section className="career" id="career">
      <h1 className="experience-title">{t("work.experience")} </h1>
      <div className="vertical-timeline-container">
        <VerticalTimeline
          lineColor={theme === "dark" ? "#915EFF50" : "#FFFFFF"}
        >
          {experiences.map((experience, index) => (
            <CareerCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <Link
        to="./document/CV-Daniel_Prince_KOM_WAFFO.pdf"
        className="download-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("myResume.youCan")}
        <CgSoftwareDownload id="icon-resume-download" size={20} />
      </Link>
    </section>
  );
};

export default Career;
