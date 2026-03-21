import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import altplus from "../../assets/company/altplus.png";
import free from "../../assets/company/free.png";
import scs from "../../assets/company/scs.jpg";
import { cn } from "../../lib/utils";

const Career: React.FC = () => {
  const { t } = useTranslation("experience");

  const experiences = [
    {
      title: t("work.positions.position_0"),
      company_name: "SCS",
      icon: scs,
      iconBg: "#EEE",
      date: t("dateWork.date-0"),
      link: "https://staroilscs.com",
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
      date: t("dateWork.date-1"),
      link: "#",
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
      date: t("dateWork.date-2"),
      link: "https://altplus.dev",
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
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t("work.experience")}</span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Icon */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white dark:bg-dark-card border-4 border-primary-500 shadow-lg overflow-hidden">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "group rounded-2xl p-6",
                    "bg-white dark:bg-dark-card",
                    "border border-light-border dark:border-dark-border",
                    "shadow-lg hover:shadow-2xl",
                    "transition-all duration-300"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {experience.title}
                      </h3>
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                      >
                        {experience.company_name}
                      </a>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      {experience.date}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {experience.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="font-semibold">• {point}</span>
                        <br />
                        <span className="text-sm text-primary-600 dark:text-primary-400 ml-4">
                          {experience.point_skills[idx]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <a
            href="./document/kom-waffo-daniel-prince.pdf"
            download="kom-waffo-daniel-prince.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-xl",
                "bg-gradient-to-r from-primary-500 to-purple-600",
                "text-white font-semibold text-lg",
                "shadow-lg hover:shadow-xl",
                "transition-all duration-300"
              )}
            >
              <span>{t("myResume.youCan")}</span>
              <CgSoftwareDownload size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
