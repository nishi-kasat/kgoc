import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { StripeAccents } from './DecorativeLines';
import { Reveal } from './Reveal';
import { WatermarkField } from './WatermarkField';
import { AdmissionEnquiryForm } from './AdmissionEnquiryForm';

export const Contact = () => {
  const phoneNumber = "+91 91687 18833";
  const phoneTel = "tel:+919168718833";

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Kept clear of the top edge — flush placement hard-clips the blurred
          glow into a visible seam at the section boundary. */}
      <div className="brand-blob absolute top-14 right-0 w-80 h-80 rounded-full pointer-events-none" aria-hidden="true" />
      <WatermarkField size={150} opacityClass="opacity-[0.08]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEAF4] text-xs sm:text-sm font-bold text-[#880650] uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#202033] tracking-tight max-w-3xl leading-[1.08]">
            Connect with <span className="italic text-[#880650]">Kasat Group</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#4A4A5A] max-w-2xl leading-relaxed">
            Have questions about Kasat Group of Companies or our educational verticals? Connect directly with our team.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </Reveal>

        {/* Admission Enquiry Form — the one way to reach out via WhatsApp.
            Answers get assembled into a message and handed off to WhatsApp,
            so counsellors get structured info instead of a cold "hi", and
            every enquiry lands in the team's sheet whether or not the
            visitor actually sends the WhatsApp message afterwards. */}
        <Reveal delay={100} className="max-w-3xl mx-auto bg-gradient-to-br from-[#FFF9FC] via-white to-[#FFF9FC]/40 rounded-[2rem] p-6 sm:p-10 md:p-14 shadow-elevated">
          <div className="bg-white rounded-2xl border border-[#F1D3E5] p-6 sm:p-8 shadow-2xs">
            <AdmissionEnquiryForm />
          </div>

          {/* Call helpline — a separate channel (a live call), not a way to
              skip the enquiry form for WhatsApp. */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBEAF4] flex items-center justify-center text-[#880650] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#880650]">
                  Prefer to talk it through?
                </p>
                <a
                  href={phoneTel}
                  className="text-lg font-extrabold text-[#202033] hover:text-[#880650] transition-colors"
                  aria-label={`Call ${phoneNumber}`}
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#626273] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#880650] flex-shrink-0" />
              <span>Direct official connection with the Kasat Group of Companies team.</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
