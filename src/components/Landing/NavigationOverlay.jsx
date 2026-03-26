'use client';

import Link from 'next/link';
import styles from './landing.module.css';

const NAV_ITEMS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

export default function NavigationOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`${styles.navOverlay} ${isOpen ? styles.navOverlayActive : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.navContent}>
        {NAV_ITEMS.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navItem}
              onClick={onClose}
            >
              {item.label}
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={styles.navItem} onClick={onClose}>
              {item.label}
            </Link>
          ),
        )}
        <button type="button" className={styles.navItemButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
