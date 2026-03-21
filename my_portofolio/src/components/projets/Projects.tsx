import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import thumbAltplus from "../../assets/work/thumb_altplus.png";
import thumbSkypey from "../../assets/work/thumb_skypey.png";
import thumbWeather from "../../assets/work/thumb_weather-app.png";
import thumbIsis from "../../assets/work/Isis-blog.png";

import altplus from "../../assets/work/altplus.png";
import skypey from "../../assets/work/skypey.png";
import isis from "../../assets/work/Isis-blog.png";
import weather from "../../assets/work/weather-app.png";
import we_travel from "../../assets/work/we_travel.png";
import ProjetCard from "./ProjetCard";

const Projects: React.FC = () => {
  const { t } = useTranslation("project");

  const projectsList = [
    {
      name: "Alt+",
      description: t("work.project_description.altplus"),
      tags: [
        { name: "javascript", color: "#f4a874" },
        { name: "bootstrap", color: "#7b4fd8" },
        { name: "css", color: "#a33686" },
      ],
      image: altplus,
      thumbnail: thumbAltplus,
      demo: "https://www.altplus.dev/",
      sourcecode: "https://github.com/artsiders",
    },
    {
      name: "mern blog",
      description: t("work.project_description.mern-blog"),
      tags: [
        { name: "reactjs", color: "#087ea4" },
        { name: "redux", color: "#764abc" },
        { name: "expressjs", color: "#ff6c37" },
      ],
      image: isis,
      thumbnail: thumbIsis,
      demo: "https://mern-blog-nu-fawn.vercel.app",
      sourcecode: "https://github.com/WaffoKom/mern-blog",
    },
    {
      name: "we_travel app",
      description: t("work.project_description.we_travel"),
      tags: [
        { name: "Next.js", color: "#087ea4" },
        { name: "Tailwind", color: "#a33686" },
        { name: "FastAPI", color: "#f4a874" },
      ],
      image: we_travel,
      thumbnail: thumbWeather,
      demo: "https://we-travel-zeta.vercel.app/",
      sourcecode: "https://github.com/WaffoKom?tab=repositories",
    },
    {
      name: "weather app",
      description: t("work.project_description.weather-app"),
      tags: [
        { name: "reactjs", color: "#087ea4" },
        { name: "css", color: "#a33686" },
        { name: "javascript", color: "#f4a874" },
      ],
      image: weather,
      thumbnail: thumbWeather,
      demo: "https://weather-react-app-ten-bice.vercel.app/",
      sourcecode: "https://github.com/WaffoKom/weather-react-app",
    },
    {
      name: "SKYPEY",
      description: t("work.project_description.skypey"),
      tags: [
        { name: "reactjs", color: "#087ea4" },
        { name: "css", color: "#a33686" },
        { name: "redux", color: "#764abc" },
      ],
      image: skypey,
      thumbnail: thumbSkypey,
      demo: "https://skypey-kom.vercel.app/",
      sourcecode: "https://github.com/WaffoKom/SKYPEY",
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{t("work.project.title")}</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-2 text-gray-600 dark:text-gray-300">
            <p>{t("work.project.phr_0")}</p>
            <p>{t("work.project.phr_1")}</p>
            <p>{t("work.project.phr_2")}</p>
            <p>{t("work.project.phr_3")}</p>
          </div>
        </motion.div>

        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="!pb-16"
          >
            {projectsList.map((project, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjetCard {...project} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev !text-primary-500 dark:!text-primary-400 after:!text-3xl !w-12 !h-12 !bg-white dark:!bg-dark-card !rounded-full !shadow-lg hover:!scale-110 !transition-all"></div>
          <div className="swiper-button-next !text-primary-500 dark:!text-primary-400 after:!text-3xl !w-12 !h-12 !bg-white dark:!bg-dark-card !rounded-full !shadow-lg hover:!scale-110 !transition-all"></div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #a855f7 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        .dark .swiper-button-prev,
        .dark .swiper-button-next {
          color: #c084fc !important;
        }
      `}</style>
    </section>
  );
};

export default Projects;
