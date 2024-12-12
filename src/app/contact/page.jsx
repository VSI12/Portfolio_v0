import React from 'react'
import styles from './contact.module.css'
import Socials from '@/components/Socials/Socials'

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
          <Socials />
        </div>
        <div className={styles.contact__footer}>
          Contact Me.
        </div>
        <div className={styles.footer__container}>
          <span className={styles.footer}>Designed and built by Victor Iliya</span>   
          <span className={styles.footer__copy}>&#169; Victor Iliya. All right reserved. 2024</span>
        </div>
      </section>
  )
}

export default Contact