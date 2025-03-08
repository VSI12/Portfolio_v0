'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import styles from './navbar.module.css'

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Contact', href: '/contact' },
  ]

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible'
  }, [isMenuOpen])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarHeader}>
          <Link href="/" className={styles.logoText}>
            <Image src="/logo.svg" alt="logo" width={65} height={65} />
          </Link>

          <div className={styles.navbarLinks}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.navbarActions}>
            <button onClick={toggleDarkMode} className={styles.darkModeToggle} aria-label="Toggle dark mode">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.menuToggle} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileMenuWrapper} ${isMenuOpen ? styles.show : ''}`}>
        <div className={styles.mobileMenuBackdrop} onClick={() => setIsMenuOpen(false)} />
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
