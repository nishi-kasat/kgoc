import React from 'react';

/**
 * Tiles a repeated, slanted brand word across a section's background as a
 * subtle decorative texture — "fills" the backdrop without competing with
 * foreground content (place it before the content wrapper in markup so
 * normal DOM paint order keeps it behind).
 *
 * `light` switches the outline color for use on dark/mesh backgrounds.
 */
export const WatermarkField = ({
  text = 'KASAT',
  className = '',
  light = false,
  rows = 6,
  repeat = 5,
  rotate = -10,
  opacityClass = 'opacity-100',
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${opacityClass} ${className}`} aria-hidden="true">
      <div
        className="absolute inset-[-20%] flex flex-col justify-center gap-6 sm:gap-10"
        style={{ transform: `rotate(${rotate}deg)`, transformOrigin: 'center center' }}
      >
        {Array.from({ length: rows }).map((_, r) => (
          <div key={r} className="flex whitespace-nowrap">
            {Array.from({ length: repeat }).map((_, i) => (
              <span
                key={i}
                className={`font-serif font-black text-4xl sm:text-6xl md:text-7xl mx-5 sm:mx-8 ${
                  light ? 'watermark-text-light' : 'watermark-text'
                }`}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
