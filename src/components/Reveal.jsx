import React, { useEffect, useRef, useState } from 'react';

/**
 * Lightweight scroll-reveal wrapper. Fades + slides content up the first
 * time it enters the viewport. No external deps — a single IntersectionObserver.
 *
 * Usage: <Reveal><div>...</div></Reveal>
 * Props:
 *  - delay: ms stagger (optional)
 *  - as: element tag to render (default 'div')
 *  - y: px to travel (default 20)
 */
export const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', y = 20 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion preference: show immediately, no animation.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Once revealed, drop the inline `transform` entirely (rather than setting it
  // to translateY(0)) so any hover/active transform utility classes on this same
  // element — e.g. hover:-translate-y-1 on a card — aren't fought by a lingering
  // inline style, which always wins specificity over class-based transforms.
  const style = visible
    ? { opacity: 1, transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }
    : {
        opacity: 0,
        transform: `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
};
