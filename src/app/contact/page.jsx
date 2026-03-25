'use client'
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import styles from './contact.module.css'
import Socials from '@/components/Socials/Socials'
import NavigationOverlay from '@/components/Landing/NavigationOverlay'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
]

const Contact = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <Link href="/" className={styles.topLogo}>
          <Image src="/logo.svg" alt="Victor Iliya" width={44} height={44} priority />
        </Link>
        <nav className={styles.topNav}>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.topNavLink} ${item.href === '/contact' ? styles.topNavActive : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button className={styles.menuBtn} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>
      <NavigationOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
      <section className={styles.section} id="contact">
        <h2 className={styles.sectionLabel}>Contact Me</h2>
        <span className={styles.sectionSubtitle}>Let&#39;s Get In Touch</span>
        <div className={styles.contactContent}>
          I&#39;m always open to new challenges and interesting
          projects. If you have an opportunity, a question, or
          just want to say hello, feel free to drop me a message.
          I&#39;ll do my best to respond quickly!
        </div>
        <div className={styles.socials}>
          <Socials />
        </div>
        <div className={styles.footerContainer}>
          <span className={styles.footer}>Designed and built by Victor Iliya</span>
          <span className={styles.footerCopy}>&#169; Victor Iliya. All right reserved. 2025</span>
        </div>
      </section>
    </div>
  )
}

export default Contact
