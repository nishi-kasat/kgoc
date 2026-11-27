import React, { useRef } from 'react';

/**
 * Wraps a button/link so it gently follows the cursor within its hover
 * area ("magnetic" button effect), springing back on leave. Disabled for
 * touch devices and reduced-motion.
 */
export const Magnetic = ({ children, strength = 14, className = '' }) => {
  const ref = useRef(null);

  const enabled = () =>
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = (e) => {
    if (!enabled()) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
      style={{ transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}
    >
      {children}
    </span>
  );
};
