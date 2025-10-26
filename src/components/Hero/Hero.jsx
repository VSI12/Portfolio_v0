'use client';

import React from 'react'
import styles from './hero.module.css'
import Data from './Data'

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className={styles.section} id="hero">
      <div className={`${styles.home__container} ${styles.container} ${styles.grid}`}>
        <div className={styles.home__content}>
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