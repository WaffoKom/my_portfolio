import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../lib/utils";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: faWhatsapp,
      url: "https://wa.me/+237656294240",
      label: "WhatsApp",
      gradient: "from-green-400 to-green-600",
      hoverColor: "hover:shadow-green-500/50",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/waffokom-daniel-kom-24151a354/",
      label: "LinkedIn",
      gradient: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      icon: faGithub,
      url: "https://github.com/WaffoKom/",
      label: "GitHub",
      gradient: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-700/50",
    },
    {
      icon: faEnvelope,
      url: "mailto:kwdparabic@gmail.com",
      label: "Email",
      gradient: "from-red-500 to-pink-600",
      hoverColor: "hover:shadow-red-500/50",
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="group"
              >
                <Link
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative p-5 rounded-2xl overflow-hidden",
                      "bg-gradient-to-br",
                      social.gradient,
                      "shadow-xl",
                      social.hoverColor,
                      "transition-all duration-500"
                    )}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="relative z-10 text-2xl text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Label tooltip */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-bottom-10">
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-dark-card px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                        {social.label}
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 dark:text-gray-400"
          >
            <p className="text-sm">
              © {new Date().getFullYear()} Copyright :{" "}
              <Link
                to="/#about"
                className="font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                DaniloWaffis - WaffoKom
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500" />
    </footer>
  );
};

export default Footer;
