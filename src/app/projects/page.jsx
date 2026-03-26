"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import NavigationOverlay from "@/components/Landing/NavigationOverlay"
import AsciiCanvas from "@/components/Landing/AsciiCanvas"
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
  },
  {
    title: "EC2 Instance configuration with Terraform and Ansible",
    description: "Provisioning EC2 instances with Terraform and configuring them with Ansible.",
    image: "/ec2.png",
    categories: ["AWS", "Terraform"],
    subcategories: ["EC2"],
    link: "/projects/ec2-instance-configuration-with-terraform-and-ansible",
    tech: ["AWS", "Ansible", "Terraform", "Bash"],
  },
]

const categories = ["All", "AWS", "Terraform"]

const subcategoryMap = {
  AWS: ["ECS", "EC2"],
  "CI/CD": ["GitHub Actions", "CodePipeline", "Jenkins"],
  Terraform: ["EC2"],
  "Data Engineering": ["ETL", "Airflow", "Glue"],
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const renderRef = useRef(null)
  const mouseXRef = useRef(null)
  const mouseYRef = useRef(null)

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

      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftInner}>
            <p className={styles.pageLabel}>Projects</p>
            <p className={styles.pageDesc}>
              A range of projects focused on cloud infrastructure, automation, and CI/CD pipelines,
              reflecting my continuous learning in these areas.
            </p>
          </div>
          <div className={styles.canvasWrap}>
            <AsciiCanvas mouseRef={mouseRef} renderRef={renderRef} mouseXRef={mouseXRef} mouseYRef={mouseYRef} />
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.tabs}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => { setSelectedCategory(category); setSelectedSubcategory(null) }}
                className={`${styles.tab} ${selectedCategory === category ? styles.tabActive : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.contentArea}>
            {selectedCategory !== "All" && subcategoryMap[selectedCategory] && (
              <div className={styles.subtabs}>
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className={`${styles.subtab} ${selectedSubcategory === null ? styles.subtabActive : ""}`}
                >
                  All
                </button>
                {subcategoryMap[selectedCategory].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`${styles.subtab} ${selectedSubcategory === sub ? styles.subtabActive : ""}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            <div className={styles.projectsScroll}>
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
          </div>
        </div>
      </div>
    </div>
  )
}
