// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

import React from "react";
import { useTranslation } from "react-i18next";
import thumbAltplus from "../../assets/work/thumb_altplus.png";
import altplus from "../../assets/work/altplus.png";

import ProjetCard from "./ProjetCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

const Projets: React.FC = () => {
  const { t } = useTranslation("projet");

  const projects = [
    {
      work: [
        {
          phr_0: t("work.project.phr_0"),
          phr_1: t("work.project.phr_1"),
          phr_2: t("work.project.phr_2"),
          phr_3: t("work.project.phr_3"),
        },
      ],
    },
    {
      name: "Alt+",
      description: t("work.project_description.altplus"),
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: altplus,
      thumbnail: thumbAltplus,
      demo: "",
      sourcecode: "",
    },
    {
      name: "docblog",
      description: t("work.project_description.docblog"),
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      thumbnail: "",
      demo: "",
      sourcecode: "",
    },
    {
      name: "mern blog",
      description: t("work.project_description.mern-blog"),
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      thumbnail: "",
      demo: "",
      sourcecode: "",
    },
    {
      name: "weather app",
      description: t("work.project_description.weather-app"),
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      thumbnail: "",
      demo: "",
      sourcecode: "",
    },
    {
      name: "login app",
      description: t("work.project_description.login-app"),
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      thumbnail: "",
      demo: "",
      sourcecode: "",
    },
    {
      name: "SKYPEY",
      description: t("work.project_description.skypey"),
      tags: [
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
        {
          name: "",
          color: "",
        },
      ],
      image: "",
      thumbnail: "",
      demo: "",
      sourcecode: "",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="project-presentation">
        <h1 className="project-header">{t("work.project.title")}</h1>
        {projects[0].work?.map((phrase, index) => (
          <div key={index} className="project-phrases">
            <p>{phrase.phr_0}</p>
            <p>{phrase.phr_1}</p>
            <p>{phrase.phr_2}</p>
            <p>{phrase.phr_3}</p>
          </div>
        ))}
      </div>

      <div className="project-content">
        <Swiper
          style={
            {
              // "--swiper-navigation-color": "#fff",
              // "--swiper-pagination-color": "#fff",
            }
          }
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className=""
        >
          {projects.slice(1).map((project, index) => (
            <SwiperSlide key={index}>
              <ProjetCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projets;
