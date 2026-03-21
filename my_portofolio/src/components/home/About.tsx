import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const backLine = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const socialLinks = [
    {
      icon: faWhatsapp,
      url: "https://wa.me/+237656294240",
      label: "WhatsApp",
      color: "hover:bg-green-500",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: faGithub,
      url: "https://github.com/WaffoKom/",
      label: "GitHub",
      color: "hover:bg-gray-800 dark:hover:bg-gray-600",
    },
    {
      icon: faEnvelope,
      url: "mailto:kwdparabic@gmail.com",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">{t("perso.title")}</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
                {t("perso.name")}
              </h2>
              <h3 className="text-xl sm:text-2xl font-medium text-primary-600 dark:text-primary-400">
                {t("perso.role")}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            >
              <p>{backLine(t("perso.presentation"))}</p>
              <p>{backLine(t("perso.presentation_next"))}</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {t("perso.rendezvous")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <NavLink to={`/${currentLang}/contact`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-8 py-4 rounded-xl font-semibold text-lg",
                    "bg-gradient-to-r from-primary-500 to-purple-600",
                    "text-white shadow-lg shadow-primary-500/50",
                    "hover:shadow-xl hover:shadow-primary-500/60",
                    "transition-all duration-300"
                  )}
                >
                  {t("perso.letGetStarted")}
                </motion.button>
              </NavLink>
            </motion.div>
          </motion.div>

          {/* Right - Image & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src="/author/danilo_img.jpg"
                  alt="Danilo Waffis"
                  className={cn(
                    "w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover",
                    "shadow-2xl shadow-primary-500/20",
                    "border-4 border-white dark:border-dark-card"
                  )}
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 justify-center mt-8"
              >
                {socialLinks.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -5 }}>
                    <NavLink
                      to={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                          "p-4 rounded-xl",
                          "bg-white dark:bg-dark-card",
                          "border border-light-border dark:border-dark-border",
                          "shadow-md hover:shadow-lg",
                          "transition-all duration-300",
                          social.color,
                          "hover:text-white group"
                        )}
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"
                        />
                      </motion.div>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
