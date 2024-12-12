import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
      <section className={`${styles.contact} ${styles.section}`} id="contact">
        <h2 className={styles.section__title}>Contact Me</h2>
        <span className={styles.section__subtitle}>Let&#39;s Get In Touch</span>
        <div className={styles.contact__container}>
          <div className={styles.contact__content}>
            I&#39;m always open to new challenges and interesting <br />
            projects. If you have an opportunity, a question, or <br />
            just want to say hello, feel free to drop me a message. <br />
             I&#39;ll do my best to respond quickly!
          </div>
          <div className={styles.button__container}>
              <a href="mailto:victoriliya15@gmail.com" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.type_C}`}>
                <div className={styles.button__line}></div>
                <div className={styles.button__line}></div>
                <span className={styles.button__text}>Say Hello</span>
                <div className={styles.button__drow1}></div>
                <div className={styles.button__drow2}></div>
              </a> 
          </div>
        </div>
        <div className={styles.contact__footer}>
          Contact Me.
        </div>
      </section>
  )
}

export default Contact