import React from 'react'
import styles from './hero.module.css'
import Data from './Data'

const Hero = () => {
  return (
    <section className={`${styles.home} ${styles.section}`} id="hero">
    <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
      <div className={`${styles.home__content} ${styles.grid}`}>
        <Data />
      </div>
    </div>
    <div className={styles.hero__footer}>
      Victor.
  </div>
  </section>
  )
}

export default Hero