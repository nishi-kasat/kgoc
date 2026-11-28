import React, { useEffect, useRef, useState } from 'react';

/**
 * Animates a number counting up from 0 the first time it scrolls into view.
 * Accepts the display string as-is (e.g. "10,000+", "100%", "7") and parses
 * out the leading numeric part + any trailing suffix, so markup stays
 * exactly as authored elsewhere.
 */
export const Counter = ({ value, duration = 1400, className = '' }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const match = String(value).match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2] || '';

    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(1, elapsed / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * eased);
              setDisplay(`${current.toLocaleString('en-US')}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
