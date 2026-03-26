'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ArrowLeft } from 'lucide-react'
import NavigationOverlay from '@/components/Landing/NavigationOverlay'
import styles from './ec2.module.css'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
]

const TECH = ['AWS', 'Terraform', 'Ansible', 'Bash', 'Python', 'Flask']

export default function EC2() {
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
          <h1 className={styles.articleTitle}>EC2 Instance Configuration with Terraform and Ansible</h1>
          <div className={styles.techStack}>
            {TECH.map((t) => (
              <span key={t} className={styles.techBadge}>{t}</span>
            ))}
          </div>
        </header>

        <div className={styles.archImage}>
          <Image
            src="/ec2.png"
            alt="EC2 Architecture Diagram"
            width={1000}
            height={667}
            style={{ width: '100%', height: 'auto' }}
          />
          <span className={styles.imageCaption}>Project Architecture Diagram</span>
        </div>

        <div className={styles.prose}>

          <h2>Project Overview</h2>
          <p>
            This project uses Terraform to provision an EC2 instance on AWS and Ansible to configure
            it with a Flask application, enabling a seamless Infrastructure-as-Code workflow.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Infrastructure as Code (IaC):</strong> Automates the provisioning of an AWS EC2 instance using Terraform.</li>
            <li><strong>Configuration Management:</strong> Installs and configures a Python Flask application using Ansible.</li>
            <li><strong>Automation:</strong> Uses Bash scripting to streamline the entire process from provisioning to deployment.</li>
            <li><strong>Modular Structure:</strong> Clean separation of concerns with dedicated folders for Terraform, Ansible, and scripts.</li>
            <li><strong>Repeatable Workflow:</strong> Easily reproducible setup for consistent and reliable infrastructure and application deployment.</li>
          </ul>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Terraform</strong> provisions an EC2 instance on AWS and outputs its public IP.</li>
            <li>A <strong>Bash script</strong> captures the public IP and dynamically updates the Ansible inventory file.</li>
            <li><strong>Ansible</strong> connects to the instance via SSH and:
              <ul>
                <li>Installs required packages (Python3, pip, Flask)</li>
                <li>Clones or sets up the Flask app</li>
                <li>Runs the Flask application</li>
              </ul>
            </li>
            <li>The Flask app becomes accessible via the EC2 public IP.</li>
          </ol>

          <h2>Links</h2>
          <ul>
            <li><a href="https://github.com/VSI12/EC2-Configuration-with-Terraform-and-Ansible" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://victoriliya.hashnode.dev/" target="_blank" rel="noopener noreferrer">Hashnode Blog Post</a></li>
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
