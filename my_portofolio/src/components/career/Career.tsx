import "./Career.css";
import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import altplus from "../../assets/company/altplus.png";
import free from "../../assets/company/free.png";
import scs from "../../assets/company/scs.jpg";
import { Link } from "react-router-dom";

const Career: React.FC = () => {
  const { t, i18n } = useTranslation("experience");
  const [key, setKey] = useState(0);

  // Écoute les changements de langue et force la mise à jour de la clé
  useEffect(() => {
    const handleLanguageChange = () => setKey((prevKey) => prevKey + 1);
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

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
      title: "2021-2023",
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
      title: "2021-2024",
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
      <h2 className="experience-title">{t("work.experience")} </h2>
      <Chrono
        key={key} // Force le re-rendu lorsque la clé change
        items={experiences}
        mode="VERTICAL_ALTERNATING"
        enableOutline
        timelinePointDimension={45}
        fontSizes={{
          cardSubtitle: "1.02rem",
          cardText: "0.9rem",
          cardTitle: "1.4rem",
          title: "1.2rem",
        }}
        theme={{
          cardBgColor: "whitesmoke",
          titleColor: "#24292e",
          cardTitleColor: "#24292e",
          toolbarTextColor: "#24292e",
        }}
      >
        <div className="chrono-icons">
          <a href="">
            <img src={scs} alt="scs" className="icon-timeline" />
          </a>
          <a href="">
            <img src={free} alt="free" className="icon-timeline" />
          </a>
          <a href="">
            <img src={altplus} alt="altplus" className="icon-timeline" />
          </a>
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
