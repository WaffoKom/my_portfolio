import "./Career.css";
import React from "react";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import altplus from "../../assets/company/altplus.png";
import free from "../../assets/company/free.png";
import scs from "../../assets/company/scs.jpg";
import { Link } from "react-router-dom";

const Career: React.FC = () => {
  const { t } = useTranslation("experience");

  const experiences = [
    {
      title: "2021 - 2021",
      cardTitle: t("work.positions.position_0"),
      cardSubtitle: [
        t("work.positions.point_0.description"),
        t("work.positions.point_1.description"),
      ],
      cardDetailedText: [
        t("work.positions.point_0.skills"),
        t("work.positions.point_1.skills"),
      ],
    },
    {
      title: "2022-2023",
      cardTitle: t("work.positions.position_1"),
      cardSubtitle: [
        t("work.positions.point_2.description"),
        t("work.positions.point_3.description"),
        t("work.positions.point_4.description"),
      ],
      cardDetailedText: [
        t("work.positions.point_2.skills"),
        t("work.positions.point_3.skills"),
        t("work.positions.point_4.skills"),
      ],
    },
    {
      title: "2023-2024",
      cardTitle: t("work.positions.position_2"),
      cardSubtitle: [
        t("work.positions.point_5.description"),
        t("work.positions.point_6.description"),
      ],
      cardDetailedText: [
        t("work.positions.point_5.skills"),
        t("work.positions.point_6.skills"),
      ],
    },
  ];

  return (
    <section className="career" id="career">
      <Chrono items={experiences} mode="VERTICAL_ALTERNATING">
        <div className="chrono-icons">
          <img src={altplus} alt="altplus" className="icon-timeline" />
          <img src={free} alt="free" className="icon-timeline" />
          <img src={scs} alt="scs" className="icon-timeline" />
        </div>
      </Chrono>

      <Link
        to="./document/CV-Daniel_Prince_KOM_WAFFO.pdf"
        className="download-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("myResume.youCan")}
        <CgSoftwareDownload id="icon-resume-download" />
      </Link>
    </section>
  );
};
export default Career;
