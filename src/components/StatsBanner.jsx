import React from 'react';
import { GraduationCap, Landmark, Globe, Users, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';
import { Counter } from './Counter';
import { Parallax } from './Parallax';
import { WatermarkField } from './WatermarkField';

export const StatsBanner = () => {
  const stats = [
    { icon: GraduationCap, value: '1,500+', label: 'Courses' },
    { icon: Landmark, value: '3,500+', label: 'Universities' },
    { icon: Globe, value: '7', label: 'Continents' },
    { icon: Users, value: '10,000+', label: 'Students Guided' },
    { icon: ShieldCheck, value: '100%', label: 'Trusted Support' },
  ];

  return (
    <section className="relative mesh-dark py-16 sm:py-20 overflow-hidden">
      <div className="grain-overlay" />

      {/* Tiled, slanted "KASAT" watermark, drifting slowly as the page scrolls */}
      <Parallax speed={-0.08} className="absolute inset-0 pointer-events-none">
        <WatermarkField light rotate={8} rows={6} repeat={5} size={84} opacityClass="opacity-[0.18]" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal className="text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#F6A6CE] uppercase">
            By the Numbers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-3 tracking-tight">
            A scale that speaks for itself
          </h2>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-3 py-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-none text-white tabular-nums">
                  <Counter value={item.value} />
                </p>
                <p className="text-[11px] sm:text-xs text-white/60 font-semibold uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
