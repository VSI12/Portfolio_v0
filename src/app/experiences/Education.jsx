import React from "react";
import styles from "./experiences.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; 

// Qualification Data
const qualifications = [
  {
    institution: "Afe Babalola University, Ado-Ekiti",
    degree: "B.Eng. Computer Engineering",
    honors: "First Class Honours",
    years: "2019 - 2024",
    logo: "/afe.svg",
  },
  {
    institution: "Premiere Academy, Lugbe, Abuja",
    degree: "Senior School Certificate",
    years: "2013 - 2019",
    logo: "/premiere.svg",
  },
];

// Reusable Qualification Card Component
const QualificationCard = ({ qualification, isLast }) => (
  <div className={styles.qualification__data}>
    {/* Left Content */}
    <div>
      <h3 className={styles.qualification__title}>{qualification.institution}</h3>
      <span className={styles.qualification__subtitle}>{qualification.degree}</span>
      {qualification.honors && <span className={styles.qualification__subtitle__honour}>({qualification.honors})</span>}
      <div className={styles.qualification__calendar}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.qualification__calendar__icon} />
        {qualification.years}
      </div>
    </div>

    {/* Timeline Column (Logo & Line) */}
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <Image
          src={qualification.logo}
          alt={`${qualification.institution} logo`}
          width={60}
          height={60}
          className={styles.logoImage}
        />
      </div>
      {!isLast && <div className={styles.connectingLine}></div>}
    </div>
  </div>
);

// Main Component
const Qualifications = () => (
  <div>
    {qualifications.map((qualification, index) => (
      <QualificationCard key={index} qualification={qualification} isLast={index === qualifications.length - 1} />
    ))}
  </div>
);

export default Qualifications;
