'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import NavigationOverlay from '@/components/Landing/NavigationOverlay';
import styles from './blog.module.css';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

export default function BlogIndex({ posts }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

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

      <div className={styles.index}>
        <p className={styles.pageLabel}>Writing</p>
        <p className={styles.pageDesc}>
          Thoughts on cloud infrastructure, DevOps practices, and the occasional deep-dive
          into tools and systems I find interesting.
        </p>

        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet — check back soon.</p>
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span className={styles.cardDot} />
                  <span>{post.readingTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                {post.excerpt && <p className={styles.cardExcerpt}>{post.excerpt}</p>}
                {post.tags?.length > 0 && (
                  <div className={styles.cardTags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
