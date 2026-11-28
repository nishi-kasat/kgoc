import React from 'react';
import kasatMark from '../assets/kasat-mark-rotated.png';

/**
 * Tiles the Kasat logo mark (pre-rotated into the image itself, see
 * scripts that generated kasat-mark-rotated.png) as a subtle decorative
 * texture behind every section.
 *
 * Deliberately uses `background-attachment: fixed` with NO css transform
 * on this element: a transform on the same element (or an ancestor)
 * forces browsers to treat `fixed` as `scroll` instead, which is exactly
 * what we need to avoid here. Keeping it transform-free means the tile
 * grid is anchored to the viewport rather than to each section's own
 * box, so adjacent sections read as one continuous sheet of pattern
 * instead of each section showing its own independently-phased (and
 * visibly seamed) copy of the tile.
 *
 * `light` brightens the mark for use on dark/mesh backgrounds, since the
 * mark itself is a fixed-color magenta circle rather than an
 * adjustable-color text outline.
 */
export const WatermarkField = ({
  className = '',
  light = false,
  size = 150,
  opacityClass = 'opacity-10',
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${opacityClass} ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url(${kasatMark})`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${size}px ${size}px`,
        backgroundAttachment: 'fixed',
        backgroundPosition: '0 0',
        filter: light ? 'brightness(1.7) contrast(0.8)' : 'none',
      }}
    />
  );
};
