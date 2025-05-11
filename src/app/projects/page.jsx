"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./projects.module.css"

const projects = [
  {
    title: "Intrusion Detection System",
    description: "Flask web app with Docker for analyzing NSL-KDD format network data.",
    image: "/IDS-Architecture.png",
    categories: ["AWS"],
    subcategories: ["ECS"],
    link: "/projects/intrusion-detection-system",
    tech: ["AWS", "Docker", "Terraform"],
    tech_icons: ["/icons/AWS.svg", "/icons/Docker.svg", "/icons/terraform.svg"]

  },
  {
    title: "EC2 Instance configuration with Terraform and Ansible",
    description: "Provisioning EC2 instances with Terraform and configuring them with Ansible.",
    image: "/ec2.png",
    categories: ["AWS", "Terraform", "Aut"],
    subcategories: ["EC2"],
    link: "/projects/ec2-instance-configuration-with-terraform-and-ansible",
    tech: ["AWS", "Ansible", "Terraform", "Bash"],
    tech_icons: ["/icons/AWS.svg", "/icons/Ansible.svg", "/icons/terraform.svg", "/icons/Bash.svg"]

  }

]

// const categories = ["All", "AWS", "CI/CD", "Monitoring", "Terraform", "Data Engineering", "Linux"]
const categories = ["All", "AWS", "Terraform"]

const subcategoryMap = {
  AWS: ["ECS","EC2"],
  "CI/CD": ["GitHub Actions", "CodePipeline", "Jenkins"],
  Terraform: ["EC2"],
  "Data Engineering": ["ETL", "Airflow", "Glue"],
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  const filteredProjects = projects.filter((project) => {
    const matchCategory = selectedCategory === "All" || project.categories?.includes(selectedCategory)
    const matchSubcategory = !selectedSubcategory || project.subcategories?.includes(selectedSubcategory)
    return matchCategory && matchSubcategory
  })

  return (
    <section className={styles.section} id="projects">
      <h2 className={styles.section__title}>Projects</h2>
      <span className={styles.section__subtitle}>Featured builds</span>
      <div className={styles.projects_description}>
        I've worked on a range of projects focused on cloud infrastructure, automation, and CI/CD pipelines. These
        projects reflect my continuous learning and growth in these areas.
      </div>

      <div className={styles.category__bar}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setSelectedSubcategory(null)
            }}
            className={`${styles.category__item} ${selectedCategory === category ? styles.active : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projects__container}>
        <div className={styles.content__wrapper}>
          {selectedCategory !== "All" && subcategoryMap[selectedCategory] && (
            <div className={styles.subcategory__sidebar}>
              <ul className={styles.subcategory__list}>
                <li
                  onClick={() => setSelectedSubcategory(null)}
                  className={`${styles.subcategory__item} ${selectedSubcategory === null ? styles.active : ""}`}
                >
                  All
                </li>
                {subcategoryMap[selectedCategory].map((sub) => (
                  <li
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`${styles.subcategory__item} ${selectedSubcategory === sub ? styles.active : ""}`}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.projects}>
            {filteredProjects.map((project) => (
              <div key={project.title} className={styles.features__cards}>
                <Link href={project.link}>
                  <div className={styles.features__image}>
                    <Image src={project.image} alt={project.title} width={300} height={200} />
                  </div>
                
                  <div className={styles.features__content}>
                    <h2 className={styles.features__title}>{project.title}</h2>
                    <p className={styles.features__des}>{project.description}</p>
                    <div className={styles.features__techstack}>
                    {project.tech.map((tech, index) => (
                      <div key={tech} className={styles.tech}>
                        <div className={styles.tech__icon}>
                          <img
                            src={project.tech_icons?.[index] }
                            alt={tech}
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className={styles.tech__line}></div>
                        <h3 className={styles.tech__title}>{tech}</h3>
                      </div>
                    ))}
                    </div>
                  </div>
                  </Link>
                </div>
              
            ))}
          </div>
        </div>
      </div>

      <div className={styles.experiences__footer}>Projects.</div>
    </section>
  )
}

export default Projects