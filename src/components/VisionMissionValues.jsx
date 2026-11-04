import React from 'react';
import { Eye, Target, HeartHandshake, CheckCircle2, Globe, Shield, UserCheck, Flame } from 'lucide-react';
import { StripeAccents } from './DecorativeLines';

export const VisionMissionValues = () => {
  const values = [
    { title: 'Student Success', desc: 'Putting student goals and academic achievements at the center of every decision.', icon: UserCheck },
    { title: 'Honest Guidance', desc: 'Providing clear, genuine and truthful career advisory without misleading promises.', icon: Shield },
    { title: 'Transparency', desc: 'Maintaining open communications, ethical admission processes and clear fee structures.', icon: Eye },
    { title: 'Commitment', desc: 'Standing by students from their initial enquiry through course completion.', icon: Flame },
    { title: 'Global Opportunities', desc: 'Opening doors to accredited academic institutions in India and across the world.', icon: Globe },
  ];

  return (
    <section id="vision-mission" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
            Guiding Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-brand-text-primary tracking-tight max-w-3xl leading-tight">
            Vision, Mission & Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary max-w-2xl">
            The core tenets that direct the initiatives, leadership, and student-focused services of Kasat Group of Companies.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Vision & Mission: 2 Column Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision Card */}
          <div className="relative bg-gradient-to-br from-brand-soft to-white rounded-3xl p-8 sm:p-10 border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-primary mb-6 shadow-2xs">
              <Eye className="w-7 h-7" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-brand-light/70 text-xs font-bold text-brand-deep uppercase tracking-wider mb-3">
              Long-term Aspiration
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mb-4">
              Our Vision
            </h3>

            <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              "To make quality education and career opportunities accessible to students and help them build successful futures."
            </p>

            {/* Logo Stripe Accent */}
            <div className="mt-6 pt-6 border-t border-brand-border/60 flex items-center gap-2">
              <div className="h-1.5 w-8 bg-brand-primary rounded-full" />
              <div className="h-1.5 w-4 bg-brand-secondary rounded-full" />
              <span className="text-xs font-medium text-brand-text-secondary ml-2">Kasat Group Aspiration</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative bg-gradient-to-br from-brand-soft to-white rounded-3xl p-8 sm:p-10 border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center text-brand-primary mb-6 shadow-2xs">
              <Target className="w-7 h-7" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-brand-light/70 text-xs font-bold text-brand-deep uppercase tracking-wider mb-3">
              Action & Purpose
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mb-4">
              Our Mission
            </h3>

            <p className="text-brand-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              "To provide students with the right guidance, educational opportunities and continuous support throughout their academic journey."
            </p>

            {/* Logo Stripe Accent */}
            <div className="mt-6 pt-6 border-t border-brand-border/60 flex items-center gap-2">
              <div className="h-1.5 w-8 bg-brand-primary rounded-full" />
              <div className="h-1.5 w-4 bg-brand-secondary rounded-full" />
              <span className="text-xs font-medium text-brand-text-secondary ml-2">Kasat Group Commitment</span>
            </div>
          </div>

        </div>

        {/* Our Values: Distinct 5-Card Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border/80 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border/60">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">
                <HeartHandshake className="w-4 h-4" />
                Foundational Pillars
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary">
                Our Values
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-text-secondary max-w-md">
              Five non-negotiable principles that shape the student experience across all KGoC verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-soft/60 hover:bg-brand-light/50 border border-brand-border/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-border/70 flex items-center justify-center text-brand-primary mb-4 shadow-2xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-brand-text-primary mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-brand-text-secondary leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center gap-1.5 text-[11px] font-semibold text-brand-deep">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Core Principle</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
