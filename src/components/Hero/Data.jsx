import React from 'react'
import ViewCounter from './Counter'
import Styles from './hero.module.css'


const Data = () => {
  return (
    <div className={Styles.home__data}>
        <h3 className={Styles.home__subtitle}>
          Hello, I'm
        </h3>
        <h1 className={Styles.home__title}>
          Victor Iliya
        </h1>
        <h1 className={Styles.home__subdes}>
          DevOps Engineer
        </h1>
        <p className={Styles.home__description}>
          I spend my days (and often nights) creating efficient
          CI/CD pipelines, designing and managing resilient
          infrastructure, and ensuring deployments run like 
          clockwork. Leveraging AWS cloud services,I turn scripts 
          and cloud technologies into scalable and highly available 
          systems that runs smoothly.
        </p>
        <p className={Styles.home__counter}>
          <ViewCounter />
        </p>
    </div>
  )
}

export default Data