import React from "react";
import styles from "./socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin, faDiscord, faEnvelope } from "@fortawesome/free-brands-svg-icons";


const Socials = () => {
  return (
    <div className={styles.floatingWidget}>
      <div className={styles.social}>
      <a href="https://github.com/VSI12" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="https://dev.to/non-existent" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDev} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDiscord}  className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
      </div>
    </div>
  )
}

export default Socials