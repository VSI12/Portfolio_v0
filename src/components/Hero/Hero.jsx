'use client';

import React from 'react'
import styles from './hero.module.css'
import Data from './Data'
import { ChevronDown } from 'lucide-react';


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
      <div className={styles.arrow} onClick={scrollToFeatures}>
        <ChevronDown size={128} strokeWidth={1} />
      </div>
    </div>
    <div className={styles.hero__footer}>
      Victor.
  </div>
  </section>
  )
}

export default Hero