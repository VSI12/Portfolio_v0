import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'
import { SquareArrowOutUpRight } from 'lucide-react'


export const metadata = {
  title: "About | Victor Iliya",
  description: "Learn more about Victor Iliya, a passionate DevOps engineer with expertise in AWS, cloud infrastructure, and automation.",
};
const About = () => {
  return (
      <section className={styles.section} id="about">
        <h2 className={styles.section__title}>About</h2>
        <span className={styles.section__subtitle}>My Introduction</span>

        <div className={`${styles.about__container} ${styles.container} ${styles.grid}`}>
          <div className={styles.about__data}>
            <h1 className={styles.about__title}>
              Victor Iliya
            </h1>
            <h1 className={styles.about__subtitle}>
              DevOps Engineer
            </h1>
            <p className={styles.about__description}>
            I specializing in building cloud-based solutions that drive scalable, reliable, and efficient systems.
            My passion for scalable, resilient infrastructures was ignited when I earned my first AWS certification, 
            and I’ve been exploring the limitless possibilities of cloud technologies ever since.
            Currently, I focus on DevOps, integrating automation, creating CI/CD pipelines, and infrastructure as code
            to build agile, reliable, highly available and resilient systems. My toolkit includes technologies like AWS,
            Terraform, Docker, Jenkins, and Python, which I leverage to drive impactful solutions.
            </p>
          </div>

          <div className={styles.group1}>
            <div className={styles.group2}>
              <div className={styles.about__data}>
                <h2 className={styles.about__h2}>
                  What I’m Working On
                </h2>
                <p className={styles.about__description}>
                Currently, I’m:
                <br />
                  <ul>
                    <li>Expanding automation capabilities for CI/CD pipelines in personal and collaborative projects.</li>
                    <li>Exploring advanced container orchestration techniques using Kubernetes.</li>
                    <li>Contributing to open-source projects focused on cloud automation and tooling.</li>
                  </ul>
                </p>
              </div>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className={styles.resume}>
                  <h3 className={styles.about__h3}>
                    View my <br />
                    <span className={styles.about__span}>
                      Resume
                    </span>
                  </h3>
                  <SquareArrowOutUpRight size={48}/>
                </div>
              </a>
            </div>
            <div className={styles.about__data}>
                <h2 className={styles.about__h2}>
                Tools & Technologies
                </h2>
                <p className={styles.about__description}>
                  Technologies
                  <ul>
                    <li>Terraform, CloudFormation: Infrastructure as Code (IaC) </li>
                    <li>AWS Services: EC2, S3, Lambda, VPC</li>
                    <li>Docker: Containerization</li>
                    <li>Python: Automation and scripting</li>
                    <li>Jenkins: CI/CD pipelines</li>
                    <li>Ansible: Configuration management</li>
                  </ul>
                  Tools
                  <ul>
                    <li>VS Code: Text editor of choice</li>
                    <li>GitHub & GitLab: Version control platforms</li>
                    <li>LucidCharts: Creating Architecture diagrams and visualizing workflows</li>
                    <li>Notion: Task management and organization</li>
                  </ul>
                </p>
            </div>
          </div>
          <div className={styles.about__data}>
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
          </div>
          <div className={styles.about__data}>
            <h2 className={styles.about__h2}>
            Soft Skills
            </h2>
            <p className={styles.about__description}>
              <ul>
                <li>Attention to Detail: Ensuring every component in a system works cohesively for seamless performance.</li>
                <li>Problem-Solving: Tackling challenges methodically and developing effective solutions.</li>
                <li>Self-Motivation: Managing projects independently while meeting deadlines and maintaining quality.</li>
                <li>Collaboration: Thriving in team environments, fostering learning, and sharing knowledge.</li>
                <li>Adaptability: Quickly adjusting to new tools, environments, and challenges.</li>
                <li>Effective Communication: Clearly articulating technical concepts to both technical and non-technical stakeholders.</li>
              </ul>
            </p>
          </div>
          <div className={styles.about__data}>
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
          </div>
            
        </div>
        
        <div className={styles.about__footer}>
          About Me.
        </div>
      </section>
  )
}

export default About