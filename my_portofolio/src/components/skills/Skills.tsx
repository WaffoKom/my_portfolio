import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import git from "../../assets/tech/git.png";
import mongodb from "../../assets/tech/mongodb.png";
import mysql from "../../assets/tech/mysql.png";
import nodejs from "../../assets/tech/nodejs.png";
import postgresql from "../../assets/tech/postgresql.png";
import tailwindcss from "../../assets/tech/tailwindcss.png";
import typescript from "../../assets/tech/typescript.png";
import flutter from "../../assets/tech/flutter.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

const Skills: React.FC = () => {
  const { t } = useTranslation("skills");

  const icons = [
    { name: "Git", icon: git },
    { name: "MongoDB", icon: mongodb },
    { name: "MySQL", icon: mysql },
    { name: "Node.js", icon: nodejs },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "TypeScript", icon: typescript },
    { name: "Flutter", icon: flutter },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t("technologies")}</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                "bg-white dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "shadow-md hover:shadow-xl",
                "transition-all duration-300",
                "p-6 flex flex-col items-center justify-center gap-4"
              )}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </motion.div>

              <p className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <NavLink
            to="https://github.com/WaffoKom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-3 px-8 py-4 rounded-xl",
                "bg-gradient-to-r from-gray-800 to-gray-900",
                "dark:from-gray-700 dark:to-gray-800",
                "text-white font-semibold",
                "shadow-lg hover:shadow-xl",
                "transition-all duration-300"
              )}
            >
              <span>{t("seeMore")}</span>
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </motion.div>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
