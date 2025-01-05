import React from 'react'

const IDS = () => {
  return (
    <section className={styles.section} id="ids">
        <span className={styles.section__navback}>Back to Projects</span>
        <h2 className={styles.section__title}>Intrusion Detection System</h2>

        <Image src="/IDS-Architecture.png" alt="IDS Architecture Diagram" width={400} height={234} />
        <span className={styles.architecture__title}>Project Architecture Diagram</span>

        <div className={styles.tec_stack}>

        </div>

        <div className={styles.projects__overview}>
        
        </div>
    </section>     
  )
}

export default IDS