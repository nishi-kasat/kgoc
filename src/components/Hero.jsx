import React from 'react';
import { 
  GraduationCap, 
  Globe2, 
  BookOpenCheck, 
  ArrowRight, 
  MessageCircle,
  Building2,
  Sparkles
} from 'lucide-react';
import { StripeAccents } from './DecorativeLines';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-soft via-white to-white"
    >
      {/* Subtle background decorative shapes inspired by KGoC logo stripes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/40 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-light/30 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/2" />
      
      {/* Decorative striped curved ribbon in background */}
      <div className="absolute top-20 right-10 opacity-15 pointer-events-none hidden lg:block" aria-hidden="true">
        <svg width="420" height="320" viewBox="0 0 420 320" fill="none">
          <path d="M 20 60 C 140 10, 260 120, 380 70" stroke="#A50062" strokeWidth="4" strokeDasharray="12 8" />
          <path d="M 40 85 C 160 35, 280 145, 400 95" stroke="#D52A91" strokeWidth="3" />
          <path d="M 60 110 C 180 60, 300 170, 420 120" stroke="#A50062" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/80 border border-brand-border/60 text-xs font-semibold text-brand-deep mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span>Kasat Group of Companies (KGoC)</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-brand-text-primary leading-[1.15] mb-6">
              A Diversified Education Group for{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-deep">
                India & Global Opportunities
              </span>
            </h1>

            {/* Logo-inspired decorative stripe indicator */}
            <div className="mb-6">
              <StripeAccents />
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-brand-text-secondary font-normal leading-relaxed mb-8 max-w-2xl">
              Empowering students through quality guidance, admissions and future-ready education solutions in India and abroad.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#businesses"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-brand-primary hover:bg-brand-deep active:scale-[0.98] transition-all duration-200 shadow-card hover:shadow-card-hover group"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/919168718833"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-brand-primary bg-white hover:bg-brand-light/50 border border-brand-border/80 active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-brand-primary" />
                <span>Enquire Now</span>
              </a>
            </div>

            {/* Group Key Pillars - 100% factual & accurate */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text-primary">Parent Group</h4>
                  <p className="text-xs text-brand-text-secondary">2 Specialized Verticals</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary flex-shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text-primary">Global Guidance</h4>
                  <p className="text-xs text-brand-text-secondary">India & Overseas Study</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary flex-shrink-0">
                  <BookOpenCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text-primary">Virtual College</h4>
                  <p className="text-xs text-brand-text-secondary">Flexible Degree Pathways</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Global Opportunities Visual */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-brand-border/80 overflow-hidden">
                
                {/* Horizontal decorative striped bars in corner */}
                <div className="absolute top-0 right-0 w-32 h-16 pointer-events-none opacity-20">
                  <div className="h-2 w-full bg-brand-primary mb-1.5" />
                  <div className="h-1.5 w-3/4 ml-auto bg-brand-secondary mb-1.5" />
                  <div className="h-1 w-1/2 ml-auto bg-brand-primary" />
                </div>

                {/* Hero Illustration / Graphic Element */}
                <div className="relative mb-6 rounded-2xl bg-gradient-to-br from-brand-soft to-brand-light/70 p-6 sm:p-8 border border-brand-border/40 text-center">
                  
                  {/* Graduation & Globe Visual Composition */}
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-card flex items-center justify-center mb-4 border-2 border-brand-light">
                    <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 text-brand-primary" />
                    <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-md">
                      <Globe2 className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-text-primary mb-1">
                    Future-Ready Education
                  </h3>
                  <p className="text-xs text-brand-text-secondary max-w-xs mx-auto">
                    Nurturing student ambitions with dedicated advisory and university admissions pathways.
                  </p>
                </div>

                {/* Vertical Highlights linking to the two companies */}
                <div className="space-y-3">
                  {/* Entity 1 */}
                  <a 
                    href="#businesses"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-brand-soft/70 hover:bg-brand-light/60 border border-brand-border/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-primary font-bold text-xs shadow-2xs">
                        EO
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-brand-text-primary group-hover:text-brand-primary transition-colors">
                          Emerge India & Overseas
                        </h4>
                        <p className="text-[11px] text-brand-text-secondary">
                          Admissions & Career Consultancy
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* Entity 2 */}
                  <a 
                    href="#businesses"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-brand-soft/70 hover:bg-brand-light/60 border border-brand-border/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-primary font-bold text-xs shadow-2xs">
                        KV
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-brand-text-primary group-hover:text-brand-primary transition-colors">
                          Kasat Virtual College of Education
                        </h4>
                        <p className="text-[11px] text-brand-text-secondary">
                          Online Degrees & Flexible Pathways
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Parent Group Badge */}
                <div className="mt-5 pt-4 border-t border-brand-border/50 flex items-center justify-between text-xs">
                  <span className="text-brand-text-secondary font-medium">Corporate Headquarters</span>
                  <span className="font-semibold text-brand-deep flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> Maharashtra, India
                  </span>
                </div>

              </div>

              {/* Decorative side accent tag */}
              <div className="absolute -bottom-4 -left-4 bg-brand-deep text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md hidden sm:flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-secondary animate-ping" />
                <span>Dedicated Corporate Parent</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
