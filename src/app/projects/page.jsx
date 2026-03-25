"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import NavigationOverlay from "@/components/Landing/NavigationOverlay"
import styles from "./projects.module.css"

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
]

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
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const matchCategory = selectedCategory === "All" || project.categories?.includes(selectedCategory)
    const matchSubcategory = !selectedSubcategory || project.subcategories?.includes(selectedSubcategory)
    return matchCategory && matchSubcategory
  })

  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <Link href="/" className={styles.topLogo}>
          <Image src="/logo.svg" alt="Victor Iliya" width={44} height={44} priority />
        </Link>
        <nav className={styles.topNav}>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.topNavLink} ${item.href === '/projects' ? styles.topNavActive : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>
      <NavigationOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
      <section className={styles.section} id="projects">
        <p className={styles.sectionLabel}>Projects</p>
        <p className={styles.sectionDesc}>
          I&apos;ve worked on a range of projects focused on cloud infrastructure, automation, and CI/CD pipelines. These
          projects reflect my continuous learning and growth in these areas.
        </p>

        <div className={styles.categoryBar}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setSelectedSubcategory(null)
              }}
              className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.contentWrapper}>
          {selectedCategory !== "All" && subcategoryMap[selectedCategory] && (
            <ul className={styles.subcategorySidebar}>
              <li
                onClick={() => setSelectedSubcategory(null)}
                className={`${styles.subcategoryItem} ${selectedSubcategory === null ? styles.active : ""}`}
              >
                All
              </li>
              {subcategoryMap[selectedCategory].map((sub) => (
                <li
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`${styles.subcategoryItem} ${selectedSubcategory === sub ? styles.active : ""}`}
                >
                  {sub}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.projects}>
            {filteredProjects.map((project) => (
              <Link key={project.title} href={project.link} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image src={project.image} alt={project.title} width={300} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.tech.map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
