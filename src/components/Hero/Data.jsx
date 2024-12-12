import React from 'react'
import ViewCounter from './Counter'
import Styles from './hero.module.css'


const Data = () => {
  return (
    <div className={Styles.home__data}>
        <h1 className={Styles.home__title}>
          I,m Victor Iliya
        </h1>
        <p className={Styles.home__description}>
        DevOps engineer, AWS cloud architect, and automation specialist. I spend my days (and often nights) designing efficient pipelines, managing resilient infrastructure, and ensuring deployments run like clockwork. Turning scripts and cloud services into scalable systems that keep the digital world running smoothly.
        </p>
        <p className={Styles.home__description}>
        Efficiency and simplicity are at the heart of my work — reducing the unnecessary to highlight what truly matters. When I’m not working with cloud technologies or optimizing workflows, you’ll find me on the tennis court( on the moon on Tuesdays) or immersed in the beats of EDM and the melodies of classical piano pieces.
        </p>
        <p className={Styles.home__counter}><ViewCounter /></p>
    </div>
  )
}

export default Data