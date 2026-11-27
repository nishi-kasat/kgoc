import React from 'react';
import { GraduationCap, Landmark, Globe, Users, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export const StatsBanner = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: '1500+',
      label: 'Courses',
    },
    {
      icon: Landmark,
      value: '3500+',
      label: 'Universities',
    },
    {
      icon: Globe,
      value: '7',
      label: 'Continents',
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Students Guided',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Trusted Support',
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Magenta Ribbon Banner matching mockup */}
        <Reveal className="relative bg-[#880650] rounded-2xl sm:rounded-3xl shadow-md py-5 sm:py-6 px-4 sm:px-8 text-white overflow-hidden">
          {/* Subtle stripe texture echoing the brand mark */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(135deg, #FFFFFF, #FFFFFF 2px, transparent 2px, transparent 14px)' }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-2 items-center">
            {stats.map((item, idx) => {
              const IconComp = item.icon;
              const isLast = idx === stats.length - 1;

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-center gap-3 sm:gap-3.5 py-1 px-2 transition-transform duration-200 hover:scale-[1.04] ${
                    !isLast ? 'md:border-r md:border-white/20' : ''
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg sm:text-xl font-extrabold tracking-tight leading-none text-white">
                      {item.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-white/80 font-medium mt-1 leading-tight">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

