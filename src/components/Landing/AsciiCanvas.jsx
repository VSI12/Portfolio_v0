'use client';

import { useEffect, useRef } from 'react';
import styles from './landing.module.css';

const CHAR_SIZE = 12;
const DENSITY_CHARS = " .'`^,:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

function simpleNoise(x, y, t) {
  return (
    Math.sin(x * 0.05 + t) * Math.cos(y * 0.05 + t) +
    Math.sin(x * 0.01 - t) * Math.cos(y * 0.12) * 0.5
  );
}

export default function AsciiCanvas({ mouseRef, renderRef, mouseXRef, mouseYRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const render = () => {
      const start = performance.now();
      const rect = canvas.getBoundingClientRect();
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const cols = Math.ceil(width / CHAR_SIZE);
      const rows = Math.ceil(height / CHAR_SIZE);

      context.clearRect(0, 0, width, height);
      context.font = `${CHAR_SIZE}px var(--landing-font-mono)`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      for (let y = 0; y < rows; y += 1) {
        if (y < rows * 0.4) {
          continue;
        }

        for (let x = 0; x < cols; x += 1) {
          const posX = x * CHAR_SIZE;
          const posY = y * CHAR_SIZE;
          const dx = posX - mouseX;
          const dy = posY - (mouseY - rect.top);
          const dist = Math.hypot(dx, dy);
          const normalizedY = (rows - y) / rows;
          const noiseValue = simpleNoise(x, y, time * 0.5);
          const mountainHeight =
            0.3 +
            Math.sin(x * 0.05 + time * 0.1) * 0.1 +
            Math.cos(x * 0.2) * 0.05;

          let char = '';
          let alpha = 0;

          if (normalizedY < mountainHeight + noiseValue * 0.1) {
            const index = Math.floor(Math.abs(noiseValue) * DENSITY_CHARS.length);
            char = DENSITY_CHARS[index % DENSITY_CHARS.length];
            alpha = 1 - normalizedY * 2;
          }

          if (dist < 150) {
            const lensStrength = 1 - dist / 150;

            if (Math.random() > 0.5) {
              char = Math.random() > 0.5 ? '0' : '1';
              context.fillStyle = `rgba(0, 0, 0, ${lensStrength})`;
            } else {
              context.fillStyle = `rgba(100, 100, 100, ${alpha})`;
            }

            const safeDistance = dist || 1;
            const shiftX = (dx / safeDistance) * 10 * lensStrength;
            const shiftY = (dy / safeDistance) * 10 * lensStrength;

            context.fillText(
              char,
              posX + CHAR_SIZE / 2 - shiftX,
              posY + CHAR_SIZE / 2 - shiftY,
            );
          } else if (char) {
            context.fillStyle = `rgba(100, 100, 100, ${alpha})`;
            context.fillText(char, posX + CHAR_SIZE / 2, posY + CHAR_SIZE / 2);
          }
        }
      }

      time += 0.01;

      const renderMs = performance.now() - start;
      if (mouseXRef.current) mouseXRef.current.textContent = `${Math.round(mouseX)}`;
      if (mouseYRef.current) mouseYRef.current.textContent = `${Math.round(mouseY)}`;
      if (renderRef.current) renderRef.current.textContent = renderMs.toFixed(1);

      animationFrame = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [mouseRef, mouseXRef, mouseYRef, renderRef]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
