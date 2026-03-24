'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AsciiCanvas from './AsciiCanvas';
import CustomCursor from './CustomCursor';
import NavigationOverlay from './NavigationOverlay';
import ScrambleText from './ScrambleText';
import styles from './landing.module.css';

const CORNERS = ['V', 'I', '0', '1'];

const EXTERNAL_LINKS = [
  { label: 'Email', href: 'mailto:victoriliya15@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/VSI12' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-iliya/' },
  { label: 'Hashnode', href: 'https://victoriliya.hashnode.dev/' },
];

export default function LandingPage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOverlayOpen]);

  return (
    <main className={styles.page}>
      <CustomCursor mouseRef={mouseRef} />

      {CORNERS.map((label, index) => (
        <button
          key={label}
          type="button"
          className={`${styles.cornerIndex} ${styles[`corner${index}`]}`}
          onClick={() => setIsOverlayOpen(true)}
          aria-label="Open navigation"
        >
          {label}
        </button>
      ))}

      <NavigationOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />

      <section className={styles.canvasZone}>
        <AsciiCanvas
          mouseRef={mouseRef}
          renderRef={renderRef}
          mouseXRef={mouseXRef}
          mouseYRef={mouseYRef}
        />
        <div className={styles.heroText}>
          <ScrambleText as="h1" className={styles.heroHeadline}>
            Cloud Architecture &{'\n'}Operational Clarity
          </ScrambleText>
          <p className={styles.heroSubline}>
            Building resilient delivery systems across signal, scale, and uptime.
          </p>
        </div>
      </section>

      <section className={styles.panelZone}>
        <div className={styles.panelColumn}>
          <div>
            <div className={styles.metaLine}>
              <span>Victor Iliya</span>
              <span>Abuja, NG</span>
              <span ref={timestampRef}>00:00:00</span>
            </div>
            <p className={`${styles.bioText} ${styles.scrambleBody}`}>
              AWS Cloud and DevOps engineer focused on scalable infrastructure, automation,
              and dependable release systems for modern products.
            </p>
          </div>
          <p className={styles.currentlyBuilding}>
            Currently building CI/CD pipelines, AWS infrastructure, and operational tooling.
          </p>
        </div>

        <div className={styles.panelColumn}>
          <ul className={styles.linkList}>
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.colophon}>
            Built with Next.js, React, and custom canvas interactions.
            <br />
            Typeface: Inter & JetBrains Mono.
          </p>
          <div className={styles.internalLinks}>
            <Link href="/projects">Featured projects</Link>
            <Link href="/about">More about me</Link>
          </div>
        </div>

        <div className={`${styles.panelColumn} ${styles.panelColumnRight}`}>
          <div className={styles.copyright}>Copyright 2026</div>
          <div className={styles.telemetry}>
            <span>
              RENDER: <span ref={renderRef}>0.0</span>ms
            </span>
            <br />
            <span>
              X: <span ref={mouseXRef}>0</span> Y: <span ref={mouseYRef}>0</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
