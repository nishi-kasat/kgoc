import React, { useEffect, useRef } from 'react';

/**
 * Wraps children in a layer that drifts vertically at a fraction of scroll
 * speed, for a simple depth/parallax effect. `speed` < 1 drifts slower than
 * the page (good for distant backgrounds); negative values drift upward.
 * No-op under prefers-reduced-motion.
 */
export const Parallax = ({ children, speed = 0.25, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;
    const update = () => {
      frame = null;
      if (ref.current) {
        const y = window.scrollY * speed;
        ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};
