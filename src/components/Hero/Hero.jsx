import React from 'react'
import styles from './hero.module.css'
import Data from './Data'
import { ChevronDown } from 'lucide-react';


const Hero = () => {
  return (
    <section className={`${styles.home} ${styles.section}`} id="hero">
    <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
      <div className={`${styles.home__content} ${styles.grid}`}>
        <Data />
      </div>
      <div className={styles.arrow}>
        <ChevronDown size={128} />
      </div>
    </div>
    <div className={styles.hero__footer}>
      Victor.
  </div>
  </section>
  )
}

export default Hero