import Image from "next/image";
import styles from "./experiences.module.css";

const qualifications = [
  {
    institution: "Afe Babalola University, Ado-Ekiti",
    degree: "B.Eng. Computer Engineering",
    honors: "First Class Honours",
    years: "2019 – 2024",
    logo: "/afe.svg",
  },
  {
    institution: "Premiere Academy, Lugbe, Abuja",
    degree: "Senior School Certificate",
    years: "2013 – 2019",
    logo: "/premiere.svg",
  },
];

const Education = () => (
  <div className={styles.educationList}>
    {qualifications.map((q, i) => (
      <div key={i} className={styles.eduCard}>
        <div className={styles.eduCardHeader}>
          <div className={styles.workLogo}>
            <Image
              src={q.logo}
              alt={q.institution}
              width={44}
              height={44}
              className={styles.workLogoImage}
            />
          </div>
          <div className={styles.workCardInfo}>
            <h3 className={styles.workCompany}>{q.institution}</h3>
            <p className={styles.workPosition}>{q.degree}</p>
            {q.honors && <p className={styles.eduHonors}>{q.honors}</p>}
            <p className={styles.workDuration}>{q.years}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
