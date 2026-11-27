import React from 'react';
import kasatMark from '../assets/kasat-mark-circle.png';

/**
 * Tiles the Kasat logo mark across a section's background as a subtle,
 * slanted decorative texture — a true CSS background-repeat tile, so it
 * fills the backdrop edge-to-edge no matter how wide the viewport is
 * (a fixed-count row of <img> tiles would run out on very wide screens).
 *
 * `light` raises opacity slightly and swaps the blend mode for use on
 * dark/mesh backgrounds, since the mark itself is a fixed-color magenta
 * circle rather than an adjustable-color text outline.
 */
export const WatermarkField = ({
  className = '',
  light = false,
  rotate = -10,
  size = 96,
  gap = 40,
  opacityClass = 'opacity-10',
}) => {
  const tile = size + gap;
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${opacityClass} ${className}`} aria-hidden="true">
      <div
        className="absolute inset-[-40%]"
        style={{
          transform: `rotate(${rotate}deg)`,
          transformOrigin: 'center center',
          backgroundImage: `url(${kasatMark})`,
          backgroundRepeat: 'repeat',
          backgroundSize: `${tile}px ${tile}px`,
          backgroundPosition: 'center',
          mixBlendMode: light ? 'screen' : 'multiply',
        }}
      />
    </div>
  );
};
