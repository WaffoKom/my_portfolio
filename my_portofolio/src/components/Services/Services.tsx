import "./Services.css";
import React from "react";
import mobile from "../../assets/services/mobile-developer.png";
import web from "../../assets/services/web-developer.png";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation("services");
  return (
    <section className="services-container">
      <h1>{t("services.contact")}</h1>
      <div className="services-types">
        <span className="services-types-description">
          {t("services.devmobile")}
        </span>
        <img
          src={mobile}
          alt="for a mobile project"
          className="services-types-mobile"
        />
      </div>
      <div className="services-types">
        <span className="services-types-description">
          {t("services.devweb")}
        </span>
        <img src={web} alt="for a web" className="services-types-web" />
      </div>
    </section>
  );
};

export default Services;
