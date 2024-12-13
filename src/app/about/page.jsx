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
              cloud technologies ever since. <br /><br />
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
            constantly strive to evolve, improve, and adapt to new challenges. <br /><br />

            For me, projects are the ultimate learning tool. Each project offers a unique opportunity 
            to apply knowledge, solve real-world problems, and improve processes. 
            By tackling diverse challenges, I deepen my expertise and stay on the cutting edge
            of DevOps practices.
            I also enjoy writing about my experiences and sharing knowledge with the DevOps community 
            through blog posts and tutorials.
            </p>

            <h2 className={styles.about__h2}>
            Tools & Technologies
            </h2>
            <p className={styles.about__description}>
            Technologies
              Terraform: Infrastructure as Code (IaC)
              AWS Services: EC2, S3, Lambda, VPC, CloudFormation
              Docker: Containerization
              Python: Automation and scripting
              Jenkins: CI/CD pipelines
              Ansible: Configuration management
            Tools
              VS Code: Text editor of choice
              GitHub & GitLab: Version control platforms
              Figma: Visual brainstorming and workflows
              Notion: Task management and organization
            </p>

            <h2 className={styles.about__h2}>
            Soft Skills
            </h2>
            <p className={styles.about__description}>
            Attention to Detail: Ensuring every component in a system works cohesively for seamless performance.
            Problem-Solving: Tackling challenges methodically and developing effective solutions.
            Self-Motivation: Managing projects independently while meeting deadlines and maintaining quality.
            Collaboration: Thriving in team environments, fostering learning, and sharing knowledge.
            Adaptability: Quickly adjusting to new tools, environments, and challenges.
            Effective Communication: Clearly articulating technical concepts to both technical and non-technical stakeholders.
            </p>

            <h2 className={styles.about__h2}>
            Beyond the Terminal

            </h2>
            <p className={styles.about__description}>
            When I’m not architecting cloud infrastructures, you’ll find me indulging in my other passions:
            Playing tennis to keep my mind sharp and focused.
            Enjoying the melodies of EDM and piano to relax and find inspiration.
            Exploring new ideas in technology and automation.
            I also enjoy writing about my experiences and sharing knowledge with the DevOps community through blog posts and tutorials.
            </p>
            
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