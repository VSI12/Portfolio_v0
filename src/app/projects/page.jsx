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
    tech: ["AWS", "Terraform", "Docker"],
    tech_icons: ["/icons/AWS.svg", "/icons/terraform.svg", "/icons/Docker.svg"]

  },
  {
    title: "GitHub Actions CI/CD Pipeline to ECR",
    description: "CI/CD pipeline using GitHub Actions to push Docker images to Amazon ECR.",
    image: "/IDS-Architecture.png",
    categories: ["AWS"],
    subcategories: ["ECR"],
    link: "/projects/github-actions-ecr-pipeline",
    tech: ["GitHub Actions", "Docker", "ECR"],
  },
  {
    title: "GitHub Actions CI/CD Pipeline to ECR",
    description: "CI/CD pipeline using GitHub Actions to push Docker images to Amazon ECR.",
    image: "/IDS-Architecture.png",
    categories: ["AWS"],
    subcategories: ["S3"],
    link: "/projects/github-actions-ecr-pipeline",
    tech: ["GitHub Actions", "Docker", "ECR"],
  },
  {
    title: "GitHub Actions CI/CD Pipeline to ECR",
    description: "CI/CD pipeline using GitHub Actions to push Docker images to Amazon ECR.",
    image: "/IDS-Architecture.png",
    categories: ["AWS"],
    subcategories: ["lambda"],
    link: "/projects/github-actions-ecr-pipeline",
    tech: ["GitHub Actions", "Docker", "ECR"],
  },
]

const categories = ["All", "AWS", "CI/CD", "Monitoring", "Terraform", "Data Engineering", "Linux"]

const subcategoryMap = {
  AWS: ["ECS", "S3", "Lambda"],
  "CI/CD": ["GitHub Actions", "CodePipeline", "Jenkins"],
  Terraform: ["Modules", "Remote State"],
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
                <div className={styles.features__image}>
                  <Image src={project.image} alt={project.title} width={300} height={200} />
                </div>
                <Link href={project.link}>
                  <div className={styles.features__content}>
                    <h2 className={styles.features__title}>{project.title}</h2>
                    <p className={styles.features__des}>{project.description}</p>
                    <div className={styles.features__techstack}>
                      {project.tech.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
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