import React from 'react';
import { ExternalLink, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import emergeLogo from '../assets/emerge logo.jpg';
import kvceLogo from '../assets/kvce logo.jpg';
import { StripeAccents } from './DecorativeLines';

export const Businesses = () => {
  const businesses = [
    {
      id: 'emerge',
      name: 'Emerge India & Overseas',
      tagline: 'Education Consultancy & Global Admissions',
      logo: emergeLogo,
      logoAlt: 'Emerge India & Overseas Official Logo',
      description:
        'Emerge India & Overseas provides education consultancy and admission guidance for students exploring academic opportunities in India and abroad.',
      highlights: [
        'Career counseling & course selection',
        'India & international university guidance',
        'End-to-end admissions support & documentation'
      ],
      websiteUrl: 'https://emergeio.vercel.app/',
      ctaText: 'Visit Emerge India & Overseas',
      domainBadge: 'emergeio.vercel.app',
      cardTypeBadge: 'Global Consultancy Vertical',
    },
    {
      id: 'kvce',
      name: 'Kasat Virtual College of Education',
      tagline: 'Online Degrees & Flexible Learning',
      logo: kvceLogo,
      logoAlt: 'Kasat Virtual College of Education (KVCE) Official Logo',
      description:
        'Kasat Virtual College of Education provides online education opportunities, academic programmes and flexible learning pathways for students.',
      highlights: [
        'Recognized virtual university programs',
        'Flexible learning for working professionals & students',
        'Diverse undergraduate & postgraduate academic options'
      ],
      websiteUrl: 'https://kvce.vercel.app/',
      ctaText: 'Visit Kasat Virtual College of Education',
      domainBadge: 'kvce.vercel.app',
      cardTypeBadge: 'Distance & Online Vertical',
    },
  ];

  return (
    <section id="businesses" className="py-20 md:py-28 bg-brand-soft/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
            Group Subsidiaries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-brand-text-primary tracking-tight max-w-3xl leading-tight">
            Our Businesses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary max-w-2xl">
            Kasat Group of Companies operates two specialized educational ventures dedicated to student advancement and accessible learning.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Two-Column Business Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {businesses.map((biz) => (
            <div
              key={biz.id}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-border/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top decorative accent bar on hover */}
              <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Badge & Domain */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-light/80 text-brand-deep">
                    <Sparkles className="w-3 h-3 text-brand-primary" />
                    {biz.cardTypeBadge}
                  </span>
                  <span className="text-xs font-mono text-brand-text-secondary/80 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    {biz.domainBadge}
                  </span>
                </div>

                {/* Actual Logo Container - White card, object-fit contain, strictly preserving logo colors & proportions */}
                <div className="w-full h-32 sm:h-36 rounded-2xl bg-white border border-brand-border/60 p-4 sm:p-6 flex items-center justify-center mb-6 shadow-2xs group-hover:border-brand-primary/40 transition-colors">
                  <img
                    src={biz.logo}
                    alt={biz.logoAlt}
                    className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Business Title & Tagline */}
                <h3 className="text-2xl font-bold text-brand-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  {biz.name}
                </h3>
                <p className="text-xs uppercase font-semibold tracking-wider text-brand-primary mb-4">
                  {biz.tagline}
                </p>

                {/* Official Description */}
                <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  {biz.description}
                </p>

                {/* Key Focus Points */}
                <div className="pt-4 border-t border-brand-border/50 mb-8 space-y-2.5">
                  <p className="text-xs font-bold text-brand-deep uppercase tracking-wider">
                    Core Capabilities:
                  </p>
                  {biz.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text-secondary">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Opens independent website in new tab */}
              <div className="pt-2">
                <a
                  href={biz.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-brand-primary hover:bg-brand-deep active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                  aria-label={`${biz.ctaText} (opens in a new tab)`}
                >
                  <span>{biz.ctaText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="text-center text-[11px] text-brand-text-secondary mt-2.5 flex items-center justify-center gap-1">
                  <span>Independent subsidiary website</span>
                  <span className="text-slate-400">•</span>
                  <span>Opens in new tab</span>
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Assurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-brand-text-secondary max-w-2xl mx-auto bg-white/80 py-3 px-6 rounded-full border border-brand-border/60 shadow-2xs">
            <span className="font-semibold text-brand-deep">Parent Note:</span> Both Emerge India & Overseas and Kasat Virtual College of Education operate with independent academic curriculums and distinct institutional portals.
          </p>
        </div>

      </div>
    </section>
  );
};
