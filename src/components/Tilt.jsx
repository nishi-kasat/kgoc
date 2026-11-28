import React, { useRef } from 'react';

/**
 * Subtle 3D tilt-on-hover for images/cards — rotates toward the cursor and
 * resets smoothly on leave. Disabled for touch devices and reduced-motion.
 */
export const Tilt = ({ children, className = '', max = 7, scale = 1.015 }) => {
  const ref = useRef(null);
  const frame = useRef(null);

  const enabled = () =>
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = (e) => {
    if (!enabled()) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * max * 2;
    const rotateX = (0.5 - py) * max * 2;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    });
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};
