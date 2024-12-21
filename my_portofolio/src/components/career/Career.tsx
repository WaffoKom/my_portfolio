import React from "react";
import CareerCard from "./CareerCard";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import { Chrono } from "react-chrono";
import altplus from "../../assets/company/altplus.png";
import free from "../../assets/company/free.png";
import scs from "../../assets/company/scs.jpg";

const Career: React.FC = () => {
  const { t } = useTranslation("experience");

  const experiences = [
    {
      position: t("work.positions.position_0"),
      company: "SCS",
      logo: scs,
      link: "https://staroilscs.com/",
      date: "2021 - 2021",
      description: [
        t("work.positions.point_0.description"),
        t("work.positions.point_1.description"),
      ],
      skills: [
        t("work.positions.point_0.skills"),
        t("work.positions.point_1.skills"),
      ],
    },
    {
      position: t("work.positions.position_1"),
      company: "Self-Employed",
      logo: free,
      link: "https://example.com/",
      date: "2022 - 2023",
      description: [
        t("work.positions.point_2.description"),
        t("work.positions.point_3.description"),
        t("work.positions.point_4.description"),
      ],
      skills: [
        t("work.positions.point_2.skills"),
        t("work.positions.point_3.skills"),
        t("work.positions.point_4.skills"),
      ],
    },
    {
      position: t("work.positions.position_2"),
      company: "Alt+",
      logo: altplus,
      link: "https://altplus.com/",
      date: "2023 - Present",
      description: [
        t("work.positions.point_5.description"),
        t("work.positions.point_6.description"),
      ],
      skills: [
        t("work.positions.point_5.skills"),
        t("work.positions.point_6.skills"),
      ],
    },
  ];

  return (
    <section className="career" id="career">
      <Chrono mode="VERTICAL" theme={{ primary: "#4B5563" }}>
        {experiences.map((experience, index) => (
          <CareerCard experience={experience} key={index} />
        ))}
      </Chrono>
      <div className="download-resume">
        <a
          href="./document/CV-Daniel_Prince_KOM_WAFFO.pdf"
          target="_blank"
          rel="noreferrer"
          className="download-button"
        >
          <CgSoftwareDownload />
          {t("work.download")}
        </a>
      </div>
    </section>
  );
};

export default Career;
