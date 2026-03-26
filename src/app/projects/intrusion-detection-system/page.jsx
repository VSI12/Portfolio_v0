'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ArrowLeft } from 'lucide-react'
import NavigationOverlay from '@/components/Landing/NavigationOverlay'
import styles from './ids.module.css'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
]

const TECH = ['AWS', 'Docker', 'Terraform', 'Flask', 'GitHub Actions', 'scikit-learn']

export default function IDS() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <Link href="/" className={styles.topLogo}>
          <Image src="/logo.svg" alt="Victor Iliya" width={44} height={44} priority />
        </Link>
        <nav className={styles.topNav}>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.topNavLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>
      <NavigationOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <Link href="/projects" className={styles.breadcrumb}>
            <ArrowLeft size={12} />
            Projects
          </Link>
          <h1 className={styles.articleTitle}>Intrusion Detection System</h1>
          <div className={styles.techStack}>
            {TECH.map((t) => (
              <span key={t} className={styles.techBadge}>{t}</span>
            ))}
          </div>
        </header>

        <div className={styles.archImage}>
          <Image
            src="/IDS-Architecture.png"
            alt="IDS Architecture Diagram"
            width={1000}
            height={667}
            style={{ width: '100%', height: 'auto' }}
          />
          <span className={styles.imageCaption}>Project Architecture Diagram</span>
        </div>

        <div className={styles.prose}>

          <h2>Project Overview</h2>
          <p>
            This system classifies network traffic as &ldquo;normal&rdquo; or &ldquo;malicious&rdquo; using a
            machine learning model trained on the NSL-KDD dataset. The application, built
            with Flask, allows users to upload data and visualize results.
          </p>
          <p>
            Terraform is used to provision AWS resources, including ECS Fargate for containerized deployment.
            The CI/CD pipeline, implemented with GitHub Actions, automates testing, image scanning,
            and deployment across Dev, Staging, and Production environments.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>User Authentication:</strong> Secure login and personalized storage of classification results.</li>
            <li><strong>Data Classification:</strong> Process and classify NSL-KDD formatted network traffic data with a machine learning model.</li>
            <li><strong>Visualization:</strong> Dynamic charts displaying insights like malicious traffic percentages.</li>
            <li><strong>Scalability &amp; Security:</strong> Deployed on AWS, leveraging Docker, Terraform, and AWS ECS Fargate for a fault-tolerant and secure architecture.</li>
          </ul>

          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> Next.js with Tailwind CSS.</li>
            <li><strong>Backend:</strong> Flask with JWT-based authentication.</li>
            <li><strong>Machine Learning:</strong> scikit-learn with joblib for model deployment.</li>
            <li><strong>Infrastructure:</strong> Docker, Terraform, AWS (CodePipeline, ECS, ECR).</li>
          </ul>

          <h2>How It Works</h2>
          <ol>
            <li>Users upload network data in NSL-KDD format.</li>
            <li>Data is validated, preprocessed, and analyzed by a trained machine learning model.</li>
            <li>Results are visualized as interactive charts and displayed in the app.</li>
          </ol>

          <h2>Links</h2>
          <ul>
            <li><a href="https://github.com/VSI12/Intrusion-Detection-System" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://victoriliya.hashnode.dev/intrusion-detection-system" target="_blank" rel="noopener noreferrer">Hashnode Blog Post</a></li>
          </ul>

        </div>

        <footer className={styles.articleFooter}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={12} />
            Back to projects
          </Link>
        </footer>
      </article>
    </div>
  )
}
