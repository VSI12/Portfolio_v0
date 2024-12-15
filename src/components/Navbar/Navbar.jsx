'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X,file, File } from 'lucide-react'
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
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarHeader}>
          {/* Logo */}
          <div className={styles.navbarLogo}>
            <Link href="/" className={styles.logoText}>
             <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.navbarLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className={styles.navbarActions}>
            {/* <button
              onClick={toggleDarkMode}
              className={styles.darkModeToggle}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button> */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className={styles.darkModeToggle}>  
              <File size={24} />
              </button>
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={styles.menuToggle}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenuWrapper} ${isMenuOpen ? styles.show : ''}`}>
          <div className={styles.mobileMenuBackdrop} onClick={() => setIsMenuOpen(false)} />
          <div className={styles.mobileMenu}>
            <div className={styles.mobileLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

