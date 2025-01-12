import React from "react";
import styles from "./socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev, faGithub, faLinkedin, faDiscord, faEnvelope} from "@fortawesome/free-brands-svg-icons";


const Socials = () => {
  return (
    <div className={styles.floatingWidget}>
      <div className={styles.social}>
      <a href="https://dev.to/non-existent" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDev} className={styles.icon} />
      </a>
      <a href="https://github.com/VSI12" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a href="mailto:victoriliya15@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
          width="24px" fill="#525252" className={styles.icon}><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
      </a>
      <a href="https://www.discordapp.com/users/1147212408490836028/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDiscord}  className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/victor-iliya/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      </div>
    </div>
  )
}

export default Socials
