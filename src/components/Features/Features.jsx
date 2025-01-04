import React from 'react'
import styles from './features.module.css'

const Features = () => {
  return (
    <section className={`${styles.features} ${styles.section}`} id="features">
        <h2 className={styles.section__title}>Featured Projects</h2>
        <div className={styles.features__container}>
        <div className={styles.features__description}>
            A selection of my most impactful projects, showcasing expertise in AWS, automation, and 
            DevOps practices. These highlights demonstrate scalable solutions, efficient CI/CD 
            pipelines, and innovative cloud architectures. Explore the details or dive into the 
            source code!
        </div>
        </div>
        
    </section>
  )
}

export default Features