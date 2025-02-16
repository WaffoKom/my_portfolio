import "./Project.css";
import React from "react";
import { useTranslation } from "react-i18next";
import thumbAltplus from "../../assets/work/thumb_altplus.png";
import thumbSkypey from "../../assets/work/thumb_skypey.png";
import thumbWeather from "../../assets/work/thumb_weather-app.png";
import thumbIsis from "../../assets/work/Isis-blog.png";

import altplus from "../../assets/work/altplus.png";
import skypey from "../../assets/work/skypey.png";
import isis from "../../assets/work/Isis-blog.png";
import weather from "../../assets/work/weather-app.png";
import ProjetCard from "./ProjetCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Parallax } from "swiper/modules";

const Projects: React.FC = () => {
  const { t } = useTranslation("project");

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
          color: "#f4a874",
        },
        {
          name: "bootstrap",
          color: "#7b4fd8",
        },
        {
          name: "css",
          color: "#a33686",
        },
      ],
      image: altplus,
      thumbnail: thumbAltplus,
      demo: "https://www.altplus.dev/",
      sourcecode: "https://github.com/artsiders",
    },
    {
      name: "docblog",
      description: t("work.project_description.docblog"),
      tags: [
        {
          name: "javascript",
          color: "#f4a874",
        },
        {
          name: "python",
          color: "#0288d1",
        },
        {
          name: "css",
          color: "#a33686",
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
          name: "reactjs",
          color: "#087ea4",
        },
        {
          name: "redux",
          color: "#764abc",
        },
        {
          name: "expressjs",
          color: "#ff6c37",
        },
      ],
      image: isis,
      thumbnail: thumbIsis,
      demo: "",
      sourcecode: "",
    },
    {
      name: "weather app",
      description: t("work.project_description.weather-app"),
      tags: [
        {
          name: "reactjs",
          color: "#087ea4",
        },
        {
          name: "css",
          color: "#a33686",
        },
        {
          name: "javascript",
          color: "#f4a874",
        },
      ],
      image: weather,
      thumbnail: thumbWeather,
      demo: "https://weather-react-app-ten-bice.vercel.app/",
      sourcecode: "https://github.com/WaffoKom/weather-react-app",
    },
    {
      name: "login app",
      description: t("work.project_description.login-app"),
      tags: [
        {
          name: "reactjs",
          color: "#087ea4",
        },
        {
          name: "css",
          color: "#a33686",
        },
        {
          name: "javascript",
          color: "#f4a874",
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
          name: "reactjs",
          color: "#087ea4",
        },
        {
          name: "css",
          color: "#a33686",
        },
        {
          name: "redux",
          color: "#764abc",
        },
      ],
      image: skypey,
      thumbnail: thumbSkypey,
      demo: "https://skypey-kom.vercel.app/",
      sourcecode: "https://github.com/WaffoKom/SKYPEY",
    },
  ];

  return (
    <section className="projects">
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
      <div className="swiper-container">
        <Swiper
          direction="horizontal"
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          cssMode={true}
          mousewheel={true}
          preventInteractionOnTransition={true}
          modules={[Parallax, Pagination, Navigation]}
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

export default Projects;
