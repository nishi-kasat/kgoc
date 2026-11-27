import React from 'react';
import kasatMark from '../assets/kasat-mark-circle.png';

/**
 * Tiles the Kasat logo mark across a section's background as a subtle,
 * slanted decorative texture — a true CSS background-repeat tile, so it
 * fills the backdrop edge-to-edge no matter how wide the viewport is
 * (a fixed-count row of <img> tiles would run out on very wide screens).
 *
 * `light` brightens the mark for use on dark/mesh backgrounds, since the
 * mark itself is a fixed-color magenta circle rather than an
 * adjustable-color text outline.
 *
 * Deliberately avoids mix-blend-mode: Chrome has a long-standing bug where
 * a blended layer incorrectly knocks out the soft box-shadow cast by
 * nearby cards (e.g. the founder photo in About), punching a visible
 * blank hole through the pattern. Plain opacity (+ a brightness filter
 * for the dark-background variant) sidesteps that entirely.
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
          filter: light ? 'brightness(1.7) contrast(0.8)' : 'none',
        }}
      />
    </div>
  );
};
