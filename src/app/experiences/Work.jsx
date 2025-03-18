import Image from "next/image";
import styles from "./experiences.module.css";

const experiences = [
  {
    id: 1,
    company: "Current Link Hospitality Systems",
    position: "Cloud Support Engineer",
    duration: "March 2025 - Present",
    description: [
      "Configured hotel management systems using Opera, setting up rooms for seamless operations.",
    ],
    logo: "/clhs.svg",
  },
  
  {
    id: 3,
    company: "Transcorp Hilton, Abuja",
    position: "Network Systems Intern",
    duration: "May 2023 - September 2023",
    description: [
      "U Facilitated the configurations of upgraded routers and access points, ensuring seamless integration into the existing network.",
      "Provided tech support, troubleshooting network issues, guest connectivity, and IT infrastructure",
      "Conducted server updates to maintain and ensure system stability and security",
    ],
    logo: "/hilton.svg",
  },
  {
    id: 2,
    company: "HNG Tech",
    position: "DevOps Engineer",
    duration: "Jan 2025 - March 2025",
    description: [
      "Built a Kubernetes-based deployment system enabling dynamic code execution, testing, and deployment with namespaces, an API gateway, and CI/CD.",
      "Developed a public Number Classification API with CORS handling, mathematical classification, and external API integration.",
      "Deployed a self-hosted GitLab server with FastAPI-driven orchestration and database-backed state management.",
      
    ],
    logo: "/hng.svg",
  },
  {
    id: 4,
    company: "Institute of Human Virology, Nigeria",
    position: "IT Intern",
    duration: "June 2022 - September 2022",
    description: [
      "Handled general tech support, assisting with hardware, software, and network troubleshooting",
    ],
    logo: "/ihvn.svg",
  },
];
const Work = () => {
  const leftExperiences = experiences.filter((_, index) => index % 2 === 0);
  const rightExperiences = experiences.filter((_, index) => index % 2 === 1);

  return (
    <section className={styles.workExperience}>
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
