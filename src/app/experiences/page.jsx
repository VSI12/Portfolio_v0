"use client"; // Add this if using Next.js 13+ with App Router
import styles from "./experiences.module.css";
import Certifications from "./Certifications";
import Work from "./Work";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,faGraduationCap, faBriefcase, faCertificate} from '@fortawesome/free-solid-svg-icons'

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
        
        <div className={styles.qualification__tabs}>
          <div className={ toggleState === 1 ?
           `${styles.qualification__button} ${styles.qualification__active}`
            : styles.qualification__button
            } onClick={() => toggleTab(1)}>

            Education

          </div>

          <div className={ toggleState === 2 ? 
          `${styles.qualification__button} ${styles.qualification__active}`
          : styles.qualification__button
            } onClick={() => toggleTab(2)}>

            Experiences

          </div>

          <div className={ toggleState === 3 ? 
          `${styles.qualification__button} ${styles.qualification__active}`
          : styles.qualification__button
            } onClick={() => toggleTab(3)}>

            Certifications

          </div>

        </div>

        <div className={styles.qualification__sections}>
          {/* Education Section */}
          <div className={ toggleState === 1
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>

            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Afe Babalola University, Ado-Ekiti</h3>
                <span className={styles.qualification__subtitle}>B.Eng. Computer Engineering</span>
                <div className={styles.qualification__calendar}>
                <FontAwesomeIcon icon={faCalendarDays} className={styles.qualification__calendar__icon}/>
                  2019 - 2024
                </div>
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles. qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>Premiere Academy, Lugbe, Abuja</h3>
                <span className={styles.qualification__subtitle}>Senior School Certificate</span>
                <div className={styles.qualification__calendar}>
                <FontAwesomeIcon icon={faCalendarDays} className={styles.qualification__calendar__icon}/>
                  2013 - 2019
                </div>
              </div>
              <div>
              <span className={styles.qualification__rounder}></span>
              <span className={styles. qualification__line}></span>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={ toggleState === 2
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Experience Entries */}
            <div className={styles.qualification__data}>
              <Work/>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={ toggleState === 3
                ? `${styles.qualification__content} ${styles.qualification__content_active}`
                : styles.qualification__content
            }>
            {/* Repeat Experience Entries */}
            <div className={styles.certifications__container}>
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
