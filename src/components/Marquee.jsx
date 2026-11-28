import React from 'react';

/**
 * Infinite horizontal ticker. Renders `items` twice back-to-back and
 * animates a translateX(-50%) loop so it reads as seamless.
 */
export const Marquee = ({ items, className = '', separator = '✦' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`} aria-hidden="true">
      <div className="inline-flex marquee-track">
        {[0, 1].map((rep) => (
          <div key={rep} className="inline-flex items-center">
            {items.map((item, i) => (
              <span key={`${rep}-${i}`} className="inline-flex items-center">
                <span className="mx-4 sm:mx-6">{item}</span>
                <span className="opacity-50">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
