import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import testimonial1 from "../../assets/testimonials/testimonial-1.png";
import testimonial2 from "../../assets/testimonials/testimonial-2.png";
import testimonial3 from "../../assets/testimonials/testimonial-3.png";
import testimonial4 from "../../assets/testimonials/testimonial-4.png";
import testimonail5 from "../../assets/testimonials/testimonial-5.png";
import { cn } from "../../lib/utils";

const Testimonials: React.FC = () => {
  const { t } = useTranslation("testimonials");

  const testimonials = [
    {
      id: 0,
      author: "Loic Durand",
      post: t("testimo.student"),
      content: t("testimo.loicMsg"),
      image: testimonial1,
    },
    {
      id: 1,
      author: "Melissa",
      post: "Entrepreneur",
      content: t("testimo.merlineMsg"),
      image: testimonial2,
    },
    {
      id: 2,
      author: "Cyrill",
      post: t("testimo.student"),
      content: t("testimo.cyrilMsg"),
      image: testimonial4,
    },
    {
      id: 3,
      author: "Mamadou Diallo",
      post: t("testimo.manager"),
      content: t("testimo.akaMsg"),
      image: testimonial3,
    },
    {
      id: 4,
      author: "Dimitri Mabom",
      post: t("testimo.devFront"),
      content: t("testimo.dimiMsg"),
      image: testimonail5,
    },
  ];

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t("people.talk")}</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                "bg-white dark:bg-dark-card",
                "border border-light-border dark:border-dark-border",
                "shadow-lg hover:shadow-2xl",
                "transition-all duration-300",
                "p-6 flex flex-col items-center text-center"
              )}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300" />

              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 mb-6"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500/20 shadow-xl">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  {testimonial.author}
                </h3>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {testimonial.post}
                </p>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-6xl text-primary-500/10">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
