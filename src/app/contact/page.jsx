'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Send } from 'lucide-react'
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
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
        <p className={styles.contactContent}>
          I&#39;m always open to new challenges and interesting projects. If you have an opportunity,
          a question, or just want to say hello, feel free to drop me a message.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className={styles.submitBtn} type="submit" disabled={status === 'sending'}>
            <Send size={14} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className={styles.successMsg}>Message sent. I&#39;ll get back to you soon!</p>}
          {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Please try again.</p>}
        </form>

        <div className={styles.socials}>
          <Socials />
        </div>
      </section>

      <footer className={styles.footerContainer}>
        <span className={styles.footer}>Designed and built by Victor Iliya</span>
        <span className={styles.footerCopy}>&#169; Victor Iliya. All right reserved. 2025</span>
      </footer>
    </div>
  )
}

export default Contact
