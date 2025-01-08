import "./Testimonials.css";

import React from "react";
import { useTranslation } from "react-i18next";
import testimonial1 from "../../assets/testimonials/testimonial-1.png";
import testimonial2 from "../../assets/testimonials/testimonial-2.png";
import testimonial3 from "../../assets/testimonials/testimonial-3.png";
import testimonial4 from "../../assets/testimonials/testimonial-4.png";
import testimonail5 from "../../assets/testimonials/testimonial-5.png";

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
    <section className="testimonials-secgment">
      <h2 className="people-talk">{t("people.talk")}</h2>
      <div className="testimonials-section">
        {testimonials.map((testimonial, index) => (
          <div className="testimonials-content" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="testimonial-image"
            />
            <div className="testimonial-text-content">
              <span className="testimonial-author">{testimonial.author}</span>
              <p className="testimonial-post">{testimonial.post}</p>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
