import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
      <section className={styles.section} id="about">
        <h2 className={styles.section__title}>About</h2>
        <span className={styles.section__subtitle}>My Introduction</span>

        <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
          <div className={styles.about__data}>
            <h1 className={styles.about__title}>
              I am Victor Iliya, and I specialize in crafting cloud-based solutions that power modern digital experiences.
            </h1>
            <p className={styles.about__description}>
              My passion for scalable, resilient infrastructures was ignited when I earned my 
              first AWS certification, and I’ve been exploring the limitless possibilities of 
              cloud technologies ever since. <br />
              Currently, I focus on DevOps, integrating automation, creating CI/CD pipelines,
              and infrastructure as code to build agile, reliable, highly available and
              resilient systems. My toolkit includes technologies like AWS, Terraform, Docker,
              Jenkins, and Python, which I leverage to drive impactful solutions.
            </p>
            <br />

            <h2 className={styles.about__h2}>
              What I’m Working On
            </h2>
            <p className={styles.about__description}>
            Currently, I’m:
              Expanding automation capabilities for CI/CD pipelines in personal and collaborative projects.
              Exploring advanced container orchestration techniques using Kubernetes.
              Contributing to open-source projects focused on cloud automation and tooling.
            </p>

            <h2 className={styles.about__h2}>
              My Philosophy
            </h2>
            <p className={styles.about__description}>
            I believe in the beauty of simplicity and order — reducing complexity to deliver
            elegant solutions that perform at scale. Continuous learning is my mantra, and I 
            constantly strive to evolve, improve, and adapt to new challenges. <br />

            For me, projects are the ultimate learning tool. Each project offers a unique opportunity 
            to apply knowledge, solve real-world problems, and improve processes. 
            By tackling diverse challenges, I deepen my expertise and stay on the cutting edge
            of DevOps practices.
            I also enjoy writing about my experiences and sharing knowledge with the DevOps community 
            through blog posts and tutorials.
            </p>

            
            My main focus now is expanding my expertise into
             DevOps, integrating automation and CI/CD pipelines
            to support agile, reliable software delivery.
            <br /><br />
            Here are a few technologies I’ve been working with recently:
            
            <ul className={styles.work__list}>
              <li>AWS</li>
              <li>Docker</li>
              <li>Python</li>
              <li>Terraform</li>
              <li>Jenkins</li>
              <li>Ansible</li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default About