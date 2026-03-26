'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowLeft, Clock, Calendar } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote';
import NavigationOverlay from '@/components/Landing/NavigationOverlay';
import styles from '../blog.module.css';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
];

export default function PostPage({ post, mdxSource }) {
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

      <article className={styles.postPage}>
        <header className={styles.postHeader}>
          <Link href="/blog" className={styles.breadcrumb}>
            <ArrowLeft size={12} />
            Writing
          </Link>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postMeta}>
            <Calendar size={12} />
            <span>{post.date}</span>
            <span className={styles.postMetaDivider} />
            <Clock size={12} />
            <span>{post.readingTime}</span>
            {post.tags?.length > 0 && (
              <>
                <span className={styles.postMetaDivider} />
                <div className={styles.postTags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div className={styles.prose}>
          <MDXRemote {...mdxSource} />
        </div>

        <footer className={styles.postFooter}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={12} />
            Back to writing
          </Link>
        </footer>
      </article>
    </div>
  );
}
