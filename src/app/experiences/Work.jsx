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
    isCurrent: true, // Add this flag for current job
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
    id: 3,
    company: "Transcorp Hilton, Abuja",
    position: "Network Systems Intern",
    duration: "May 2023 - September 2023",
    description: [
      "Facilitated the configurations of upgraded routers and access points, ensuring seamless integration into the existing network.",
      "Provided tech support, troubleshooting network issues, guest connectivity, and IT infrastructure",
      "Conducted server updates to maintain and ensure system stability and security",
    ],
    logo: "/hilton.svg",
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
  return (
    <section className={styles.workExperience}>
      <div className={styles.workContainer}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.workCard}>
      {experience.isCurrent && (
        <div className={styles.currentTag}>
          <span className={styles.currentTagText}>Current</span>
        </div>
      )}
      <div className={styles.workCardHeader}>
        <div className={styles.workLogo}>
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={`${experience.company} logo`}
            width={50}
            height={50}
            className={styles.workLogoImage}
          />
        </div>
        <div className={styles.workCardInfo}>
          <h3 className={styles.workCompany}>{experience.company}</h3>
          <h4 className={styles.workPosition}>{experience.position}</h4>
          <p className={styles.workDuration}>{experience.duration}</p>
        </div>
      </div>
      <ul className={styles.workDescription}>
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
