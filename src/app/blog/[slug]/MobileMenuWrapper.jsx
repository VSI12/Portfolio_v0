'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationOverlay from '@/components/Landing/NavigationOverlay';
import styles from '../blog.module.css';

export default function MobileMenuWrapper() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <>
      <button className={styles.menuBtn} onClick={() => setIsOverlayOpen(true)} aria-label="Open menu">
        <Menu size={20} />
      </button>
      <NavigationOverlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)} />
    </>
  );
}
