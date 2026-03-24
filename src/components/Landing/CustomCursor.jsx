'use client';

import { useEffect, useRef } from 'react';
import styles from './landing.module.css';

export default function CustomCursor({ mouseRef }) {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const outlinePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame = 0;

    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }
    };

    const animate = () => {
      const outlinePosition = outlinePositionRef.current;
      const deltaX = mouseRef.current.x - outlinePosition.x;
      const deltaY = mouseRef.current.y - outlinePosition.y;

      outlinePosition.x += deltaX * 0.15;
      outlinePosition.y += deltaY * 0.15;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlinePosition.x}px`;
        outlineRef.current.style.top = `${outlinePosition.y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseRef]);

  return (
    <>
      <div ref={dotRef} className={styles.cursorDot} />
      <div ref={outlineRef} className={styles.cursorOutline} />
    </>
  );
}
