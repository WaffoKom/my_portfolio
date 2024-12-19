import "./Skills.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation("skills");
  return (
    <section>
      <div>
        <h2>A propos de moi.</h2>
        <p>
          ---Développeur Full Stack Web & Mobile créatif 🚀** Passionné par
          l'innovation et l'amélioration des interfaces utilisateurs, je conçois
          des solutions web et mobiles intuitives et esthétiques. Que ce soit
          sur un écran de smartphone ou de bureau, je m'assure que chaque
          interaction soit fluide et agréable. 📱💻 Ouvert aux consultations et
          collaborations pour des projets dynamiques et ambitieux. --- Dis-moi
          si cela te convient ou si tu as d'autres préférences ! 😊
        </p>
      </div>
    </section>
  );
};

export default Skills;
