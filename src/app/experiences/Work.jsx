'use client'
import { useState } from "react";
import React from 'react'

import styles from './experiences.module.css'

const Work = () => {
  const [toggleState, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div className={styles.work__container}>
        <div className={styles.work__tabs}>
          <div className={ toggleState === 1 ?
           `${styles.work__button} ${styles.work__active}`
            : styles.work__button
            } onClick={() => toggleTab(1)}>
                <div className={styles.work__data_tab}>
                    <div className={styles.work__tab_rounder}>
                      <span className={toggleState === 1 ? `${styles.work__rounder} ${styles.activeRounder}` : styles.work__rounder}></span>
                      <span className={styles.work__line}></span>
                    </div>
                    <div className={styles.work__tab_text}>
                      Transcorp Hilton, Abuja
                    </div>
                </div>
          </div>

          <div className={ toggleState === 2 ? 
          `${styles.work__button} ${styles.work__active}`
          : styles.work__button
            } onClick={() => toggleTab(2)}>
                <div className={styles.work__data_tab}>
                    <div className={styles.work__tab_rounder}>
                      <span className={toggleState === 2 ? `${styles.work__rounder} ${styles.activeRounder}` : styles.work__rounder}></span>
                      {/* <span className={styles.work__line}></span> */}
                    </div>
                    <div className={styles.work__tab_text}>
                      IHVN
                    </div>
                </div>
          </div>
        </div>

        <div className={styles.work__sections}>
          {/* Transcorp Hilton*/}
          <div className={ toggleState === 1
                ? `${styles.work__content} ${styles.work__content_active}`
                : styles.work__content
            }>
            <div className={styles.work__data}>
              <div>
                <h3 className={styles.work__title}>Information Systems intern 
                  <a href="https://www.hilton.com/en/hotels/abuhitw-transcorp-hilton-abuja/" target="_blank" rel="noopener noreferrer">
                  <span className={styles.highlights}> @Transcorp Hilton, Abuja</span></a>
                </h3>
                <span className={styles.work__subtitle}>May 2023 - September 2023</span>
                <ul className={styles.work__list}>
                  <li>
                    Collaborated with team members to upgrade Wi-Fi access points from Wi-Fi 4 to Wi-Fi 6 giving a 60% increase in 
                    internet speeds 
                  </li>
                  <li>Facilitated the configurations of upgraded routers and access points, ensuring seamless integration into the existing 
                  network.</li>
                  <li>Conducted server updates to maintain and ensure system stability and security.</li>
                </ul>    
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={ toggleState === 2
                ? `${styles.work__content} ${styles.work__content_active}`
                : styles.work__content
            }>
            <div className={styles.work__data}>
              <div>
              <h3 className={styles.work__title}>Intern 
                  <a href="https://ihvnigeria.org/" target="_blank" rel="noopener noreferrer">
                  <span className={styles.highlights}> @Institute of Human Virology, Nigeria</span></a>
                </h3>
                <span className={styles.work__subtitle}>June 2022 - September 2022</span>
                <ul className={styles.work__list}>
                  <li>Provided comprehensive technical support, troubleshooting hardware, software, and network issues to ensure minimal downtime and optimal performance. </li>
                  <li>Assisted with system upgrades and configurations to improve performance and user experience.</li>
                  <li>Performed system updates to maintain stability and security.</li>
                  <li>Worked with teams to solve complex IT issues and integrate new technologies.</li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work