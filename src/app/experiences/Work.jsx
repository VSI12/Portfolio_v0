import Image from "next/image";
import styles from "./experiences.module.css";

const experiences = [
  {
    id: 1,
    company: "Company One",
    position: "Senior Developer",
    duration: "Jan 2022 - Present",
    description: [
      "Led development of key features resulting in 30% user growth",
      "Managed a team of 5 developers across multiple projects",
      "Implemented CI/CD pipeline reducing deployment time by 40%",
    ],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    company: "Company Two",
    position: "Full Stack Developer",
    duration: "Mar 2020 - Dec 2021",
    description: [
      "Developed responsive web applications using React and Node.js",
      "Optimized database queries improving performance by 25%",
      "Collaborated with design team to implement UI/UX improvements",
    ],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    company: "Company Three",
    position: "Frontend Developer",
    duration: "Jun 2018 - Feb 2020",
    description: [
      "Built interactive user interfaces with React and Redux",
      "Implemented responsive designs for mobile and desktop",
      "Reduced bundle size by 35% through code optimization",
    ],
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    company: "Company Four",
    position: "Junior Developer",
    duration: "Jan 2017 - May 2018",
    description: [
      "Developed and maintained company website using JavaScript and CSS",
      "Assisted in migrating legacy codebase to modern frameworks",
      "Participated in code reviews and team knowledge sharing sessions",
    ],
    logo: "/placeholder.svg?height=80&width=80",
  },
];
const Work = () => {
  const leftExperiences = experiences.filter((_, index) => index % 2 === 0);
  const rightExperiences = experiences.filter((_, index) => index % 2 === 1);

  return (
    <section className={styles.workExperience}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.experienceContainer}>
        <div className={styles.column}>
          {leftExperiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} isLast={index === leftExperiences.length - 1} />
          ))}
        </div>
        <div className={styles.column}>
          {rightExperiences.map((experience, index) => (
            <ExperienceItem key={experience.id} experience={experience} isLast={index === rightExperiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ experience, isLast }) => {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={`${experience.company} logo`}
            width={60}
            height={60}
            className={styles.logoImage}
          />
        </div>
        {!isLast && <div className={styles.connectingLine}></div>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.company}>{experience.company}</h3>
        <h4 className={styles.position}>{experience.position}</h4>
        <p className={styles.duration}>{experience.duration}</p>
        <ul className={styles.description}>
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
