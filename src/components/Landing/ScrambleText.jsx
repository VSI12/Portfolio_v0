'use client';

import { useEffect, useRef } from 'react';
import styles from './landing.module.css';

const CHARS = '!<>-_\\/[]{}=+*^?#________';

export default function ScrambleText({ as: Component = 'div', className = '', children }) {
  const elementRef = useRef(null);
  const frameRef = useRef(0);
  const requestRef = useRef(0);
  const queueRef = useRef([]);
  const leaveTimeoutRef = useRef(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const originalText = element.innerText;

    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const update = () => {
      let output = '';
      let complete = 0;

      for (let index = 0; index < queueRef.current.length; index += 1) {
        const item = queueRef.current[index];

        if (frameRef.current >= item.end) {
          complete += 1;
          output += item.to;
        } else if (frameRef.current >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = randomChar();
          }

          output += `<span class="${styles.scrambleChar}">${item.char}</span>`;
        } else {
          output += item.from;
        }
      }

      element.innerHTML = output;

      if (complete !== queueRef.current.length) {
        frameRef.current += 1;
        requestRef.current = requestAnimationFrame(update);
      }
    };

    const setText = (nextText) => {
      const oldText = element.innerText;
      const length = Math.max(oldText.length, nextText.length);
      queueRef.current = [];

      for (let index = 0; index < length; index += 1) {
        const start = Math.floor(Math.random() * 40);
        queueRef.current.push({
          from: oldText[index] || '',
          to: nextText[index] || '',
          start,
          end: start + Math.floor(Math.random() * 40),
          char: '',
        });
      }

      cancelAnimationFrame(requestRef.current);
      frameRef.current = 0;
      update();
    };

    const onEnter = () => {
      window.clearTimeout(leaveTimeoutRef.current);
      setText(originalText);
    };

    const onLeave = () => {
      leaveTimeoutRef.current = window.setTimeout(() => setText(originalText), 200);
    };

    element.addEventListener('mouseenter', onEnter);
    element.addEventListener('mouseleave', onLeave);

    return () => {
      window.clearTimeout(leaveTimeoutRef.current);
      cancelAnimationFrame(requestRef.current);
      element.removeEventListener('mouseenter', onEnter);
      element.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}
