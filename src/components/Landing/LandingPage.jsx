'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AsciiCanvas from './AsciiCanvas';
import CustomCursor from './CustomCursor';
import ScrambleText from './ScrambleText';
import ViewCounter from '@/components/Hero/Counter';
import styles from './landing.module.css';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Email',
    href: 'mailto:victoriliya15@gmail.com',
    color: '#EA4335',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/VSI12',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/victor-iliya/',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Hashnode',
    href: 'https://blog.victoriliya.com',
    color: '#2962FF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
      </svg>
    ),
  },
];

export default function LandingPage() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const timestampRef = useRef(null);
  const renderRef = useRef(null);
  const mouseXRef = useRef(null);
  const mouseYRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      if (timestampRef.current) {
        timestampRef.current.textContent = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Africa/Lagos',
        }).format(new Date());
      }
    };
    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className={styles.page}>
      <CustomCursor mouseRef={mouseRef} />

      {/* Top bar — logo left, nav right */}
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
      </header>

      {/* Canvas zone — ASCII lives on the right half */}
      <section className={styles.canvasZone}>
        <AsciiCanvas
          mouseRef={mouseRef}
          renderRef={renderRef}
          mouseXRef={mouseXRef}
          mouseYRef={mouseYRef}
        />

        {/* Hero text — bottom left, clear of the canvas */}
        <div className={styles.heroText}>
          <ScrambleText as="h1" className={styles.heroHeadline}>
            Cloud Architecture &{'\n'}Operational Clarity
          </ScrambleText>
          <p className={styles.heroName}>Victor Iliya</p>
        </div>
      </section>

      {/* Bottom bar */}
      <footer className={styles.footer}>
        {/* Left — subline + telemetry */}
        <div className={styles.footerLeft}>
          <p className={styles.heroSubline}>
            Building resilient delivery systems across signal, scale, and uptime.
          </p>
          <div className={styles.viewCounter}>
            <ViewCounter />
          </div>
          <div className={styles.metaRender}>
            <div className={styles.telemetry}>
              <span>RENDER: <span ref={renderRef}>0.0</span>ms</span>
              <span>X: <span ref={mouseXRef}>0</span> Y: <span ref={mouseYRef}>0</span></span>
            </div>
            <div className={styles.metaLine}>
              <span>Abuja, NG</span>
              <span ref={timestampRef}>00:00:00</span>
            </div>
          </div>
        </div>

        {/* Center — copyright */}
        <div className={styles.footerCenter}>
          <span className={styles.copyright}>© Victor Iliya 2026</span>
        </div>

        {/* Right — social icons */}
        <div className={styles.footerRight}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.socialBtn}
              style={{ '--social-color': s.color }}
              aria-label={s.label}
            >
              <span className={styles.socialIcon}>{s.icon}</span>
              <span className={styles.socialLabel}>{s.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
