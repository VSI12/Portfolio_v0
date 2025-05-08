'use client'
import React, { useState } from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
    {
      title: 'Intrusion Detection System',
      description: 'Flask web app with Docker for analyzing NSL-KDD format network data.',
      image: '/IDS-Architecture.png',
      categories: ['AWS', 'Terraform', 'Docker'],
      link: '/projects/intrusion-detection-system',
      tech: ['aws', 'terraform', 'docker']
    },
    {
      title: 'CI/CD Monitoring Dashboard',
      description: 'Monitoring pipelines with Prometheus, Grafana, and GitHub Actions.',
      image: '/cicd-monitoring.png',
      category: ['AWS', 'Terraform', 'Docker'],
      link: '/projects/ci-cd-monitoring-dashboard',
      tech: ['github', 'grafana', 'prometheus']
    }
  ]
  
const categories = ['All', 'AWS', 'CI/CD', 'Monitoring', 'Terraform', 'Data Engineering', 'Linux']
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.categories?.includes(selectedCategory))


    return (
      <section className={styles.section} id="projects">
        <h2 className={styles.section__title}>Projects</h2>
        <span className={styles.section__subtitle}>Featured builds</span>
        <div className={styles.projects_description}>
          I've worked on a range of projects focused on cloud infrastructure,
           automation, and CI/CD pipelines. These projects reflect my continuous 
           learning and growth in these areas. Below are some of the key projects I’ve developed and deployed.
        </div>
        <div className={styles.category__bar}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.category__item} ${selectedCategory === category ? styles.active : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
  
        <div className={`${styles.projects__container} ${styles.grid}`}>
          <div className={styles.projects}>
            {filteredProjects.map(project => (
              <div key={project.title} className={styles.features__cards}>
                <div className={styles.features__image}>
                  <Image src={project.image} alt={project.title} width={350} height={200} />
                </div>
                <Link href={project.link}>
                  <div className={styles.features__content}>
                    <h2 className={styles.features__title}>{project.title}</h2>
                    <p className={styles.features__des}>{project.description}</p>
                    <div className={styles.features__techstack}>
        
                      {project.tech.map(tech => (
                        <span key={tech} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
  
        <div className={styles.experiences__footer}>
          Projects.
        </div>
      </section>
    )
  }

export default Projects