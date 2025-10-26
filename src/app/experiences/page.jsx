"use client";
import { useState } from "react";
import styles from "./experiences.module.css";
import Certifications from "./Certifications";
import Work from "./Work";
import Education from "./Education";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const experiences = {
  work: <Work />,
  certifications: <Certifications />,
  education: <Education />
};

const categories = ["Work", "Certifications", "Education"];

const categoryIcons = {
  Work: faBriefcase,
  Certifications: faCertificate,
  Education: faGraduationCap
};

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState("Work");

  return (
    <section className={`${styles.qualification} ${styles.section}`} id="experiences">
      <h2 className={styles.section__title}>Experiences</h2>
      <span className={styles.section__subtitle}>My Personal Journey</span>
      
      <div className={styles.experiences_description}>
        My journey in tech has been shaped by a combination of education, hands-on work,
        and professional certifications. Each experience has strengthened my skills and 
        deepened my understanding of cloud technologies and DevOps practices.
      </div>

      <div className={styles.category__bar}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${styles.category__item} ${selectedCategory === category ? styles.active : ""}`}
          >
            <FontAwesomeIcon 
              icon={categoryIcons[category]} 
              className={styles.category__icon} 
            />
            {category}
          </button>
        ))}
      </div>

      <div className={`${styles.qualification__container} ${styles.container}`}>
        <div className={styles.content__wrapper}>
          <div className={styles.selected__content}>
            {experiences[selectedCategory.toLowerCase()]}
          </div>
        </div>
      </div>

      <div className={styles.experiences__footer}>
        Experiences.
      </div>
    </section>
  );
};

export default Experiences;
