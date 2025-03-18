"use client"; // Add this if using Next.js 13+ with App Router
import styles from "./experiences.module.css";
import Certifications from "./Certifications";

import Work from "./Work";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,faGraduationCap, faBriefcase, faCertificate} from '@fortawesome/free-solid-svg-icons'
import Education from "./Education";

const Experiences = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={`${styles.qualification} ${styles.section}`} id="experiences">
      <h2 className={styles.section__title}>Experiences</h2>
      <span className={styles.section__subtitle}>My Personal Journey</span>

      <div className={`${styles.qualification__container} ${styles.container}`} >
        <div className={styles.experiences}>
        My journey in tech has been shaped by a combination of education, hands-on work,
        and professional certifications. Each experience has strengthened my skills and 
        deepened my understanding of cloud technologies and DevOps practices.
        </div>
        
        
        <div className={styles.qualification__sections}>
          {/* Education Section */}
          <div className={  styles.qualification__content}>
            <div className={styles.content__title}>
              <FontAwesomeIcon icon={faGraduationCap} className={styles.qualification__icon} />
                Education
              </div>
            <Education/>
          </div>

          {/* Experience Section */}
          <div className={styles.qualification__content}>
            <div className={styles.qualification}>
              <div className={styles.content__title}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.qualification__icon} />
                Work Experiences
              </div>
              <Work/>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={styles.qualification__content}>
            <div className={styles.certifications__container}>
              <div className={styles.content__title}>
              <FontAwesomeIcon icon={faCertificate} className={styles.qualification__icon} />
                Certifications
              </div>
              <Certifications/>
            </div>
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
