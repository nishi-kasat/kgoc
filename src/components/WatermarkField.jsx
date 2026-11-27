import React from 'react';
import kasatMark from '../assets/kasat-mark-circle.png';

/**
 * Tiles the repeated, slanted Kasat logo mark across a section's background
 * as a subtle decorative texture — "fills" the backdrop without competing
 * with foreground content (place it before the content wrapper in markup so
 * normal DOM paint order keeps it behind).
 *
 * `light` lifts opacity/brightness slightly for use on dark/mesh backgrounds,
 * since the mark itself is a fixed-color magenta circle rather than an
 * adjustable-color text outline.
 */
export const WatermarkField = ({
  className = '',
  light = false,
  rows = 5,
  repeat = 6,
  rotate = -10,
  size = 96,
  opacityClass = 'opacity-10',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${opacityClass} ${className}`} aria-hidden="true">
      <div
        className="absolute inset-[-20%] flex flex-col justify-center gap-6 sm:gap-10"
        style={{ transform: `rotate(${rotate}deg)`, transformOrigin: 'center center' }}
      >
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex whitespace-nowrap items-center" style={{ gap: `${size * 0.6}px` }}>
            {Array.from({ length: repeat }).map((_, i) => (
              <img
                key={i}
                src={kasatMark}
                alt=""
                width={size}
                height={size}
                style={{
                  width: size,
                  height: size,
                  flexShrink: 0,
                  mixBlendMode: light ? 'screen' : 'multiply',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
