import React from 'react';
import { User, Award, Quote, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import founderPhoto from '../assets/Nandkishor Kasat.jpg';
import { StripeAccents } from './DecorativeLines';

export const Leadership = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 bg-brand-soft/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
            Group Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-brand-text-primary tracking-tight max-w-3xl leading-tight">
            Leadership & Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary max-w-2xl">
            Under the visionary guidance of Er. Nandkishor Kasat, Kasat Group of Companies bridges academic goals with credible pathways.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Leadership Profile Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-border/80 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Founder Image with Elegant Framing */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-xs">
                
                {/* Decorative border frame with gradient */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-light transform rotate-2 scale-[1.03] opacity-75"
                  aria-hidden="true" 
                />

                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-light shadow-md border-2 border-white">
                  <img
                    src={founderPhoto}
                    alt="Er. Nandkishor Kasat - Founder, Kasat Group of Companies"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  
                  {/* Subtle lower gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-brand-deep shadow-2xs">
                      Founder & Leader
                    </span>
                  </div>
                </div>

              </div>

              {/* Founder Title Below Photo for Mobile */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-extrabold text-brand-text-primary">
                  Er. Nandkishor Kasat
                </h3>
                <p className="text-xs font-semibold text-brand-primary mt-0.5">
                  Founder — Kasat Group of Companies
                </p>
              </div>
            </div>

            {/* Founder Message & Corporate Philosophy */}
            <div className="md:col-span-7 flex flex-col justify-center text-left">
              
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-deep uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                Founder's Perspective
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mb-1">
                Er. Nandkishor Kasat
              </h3>
              
              <p className="text-sm font-semibold text-brand-primary mb-6">
                Founder — Kasat Group of Companies
              </p>

              {/* Quote block */}
              <div className="relative mb-6 pl-5 border-l-3 border-brand-primary">
                <Quote className="w-8 h-8 text-brand-light/80 absolute -top-4 -left-3 -z-10 rotate-180" />
                <p className="text-brand-text-primary font-medium italic text-base leading-relaxed">
                  "Education is the cornerstone of societal progress and personal transformation. At Kasat Group of Companies, we strive to build platforms where students receive transparent counsel, genuine opportunities, and flexible pathways that align with modern global demands."
                </p>
              </div>

              <div className="space-y-4 text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                <p>
                  As the driving force behind KGoC, Er. Nandkishor Kasat has guided the organization to focus on expanding access to higher learning across Maharashtra, India, and internationally.
                </p>
                <p>
                  By fostering both consultancy through Emerge India & Overseas and flexible online education through Kasat Virtual College of Education, the group serves a broad spectrum of ambitious students and professionals.
                </p>
              </div>

              {/* Core Leadership Principles */}
              <div className="mt-6 pt-6 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-brand-text-primary font-medium">
                  <ShieldCheck className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Ethical Educational Advisory</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Student-Centric Vision</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
