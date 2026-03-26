"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Briefcase, Award, GraduationCap } from "lucide-react";
import styles from "./experiences.module.css";
import Certifications from "./Certifications";
import Work from "./Work";
import Education from "./Education";
import AsciiCanvas from "@/components/Landing/AsciiCanvas";
import NavigationOverlay from "@/components/Landing/NavigationOverlay";

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

const TABS = [
  { key: 'work', label: 'Work', icon: Briefcase },
  { key: 'certifications', label: 'Certifications', icon: Award },
  { key: 'education', label: 'Education', icon: GraduationCap },
];

export default function Experiences() {
  const [activeTab, setActiveTab] = useState('work');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const renderRef = useRef(null);
  const mouseXRef = useRef(null);
  const mouseYRef = useRef(null);

  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <Link href="/" className={styles.topLogo}>
          <Image src="/logo.svg" alt="Victor Iliya" width={44} height={44} priority />
        </Link>
        <nav className={styles.topNav}>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.topNavLink} ${item.href === '/experiences' ? styles.topNavActive : ''}`}
            >
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
        {/* Left — description + ASCII canvas */}
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftInner}>
            <p className={styles.pageLabel}>Experiences</p>
            <p className={styles.pageDesc}>
              My journey in tech has been shaped by education, hands-on work,
              and professional certifications. Each experience has strengthened
              my understanding of cloud technologies and DevOps practices.
            </p>
          </div>
          <div className={styles.canvasWrap}>
            <AsciiCanvas
              mouseRef={mouseRef}
              renderRef={renderRef}
              mouseXRef={mouseXRef}
              mouseYRef={mouseYRef}
            />
          </div>
        </div>

        {/* Right — tabs + content */}
        <div className={styles.heroRight}>
          <div className={styles.tabs}>
            {TABS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                className={`${styles.tab} ${activeTab === key ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
          <div className={styles.tabContent}>
            {activeTab === 'work' && <Work />}
            {activeTab === 'certifications' && <Certifications />}
            {activeTab === 'education' && <Education />}
          </div>
        </div>
      </div>
    </div>
  );
}
