import React from 'react';
import { Phone, MessageCircle, QrCode, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import whatsappQr from '../assets/whatsapp qr.png';
import { StripeAccents } from './DecorativeLines';

export const Contact = () => {
  const whatsappUrl = "https://wa.me/919168718833";
  const phoneNumber = "+91 91687 18833";
  const phoneTel = "tel:+919168718833";

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBEAF4] text-xs sm:text-sm font-bold text-[#880650] uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-[#202033] tracking-tight max-w-3xl leading-tight">
            Connect with Kasat Group
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#4A4A5A] max-w-2xl leading-relaxed">
            Have questions about Kasat Group of Companies or our educational verticals? Connect directly with our team.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Two-Column Contact Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFF9FC] via-white to-[#FFF9FC]/40 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#F1D3E5] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Direct Phone & WhatsApp Access */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#880650] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  Direct Enquiry Desk
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#202033] mb-4">
                  We're Here to Guide You
                </h3>

                <p className="text-base sm:text-lg text-[#3E3E4E] leading-relaxed mb-8">
                  Whether you are seeking admission counseling for India or abroad via Emerge India & Overseas, or exploring flexible university degree programs through Kasat Virtual College of Education, our helpline is ready to assist you.
                </p>

                {/* Direct Phone Number Card */}
                <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-white border border-[#F1D3E5] shadow-2xs hover:border-[#880650]/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FBEAF4] flex items-center justify-center text-[#880650] flex-shrink-0">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#880650]">
                        Call Helpline
                      </p>
                      <a 
                        href={phoneTel} 
                        className="text-2xl sm:text-3xl font-extrabold text-[#202033] hover:text-[#880650] transition-colors block mt-0.5"
                        aria-label={`Call ${phoneNumber}`}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-[#880650] hover:bg-[#68003C] active:scale-[0.98] transition-all shadow-card hover:shadow-card-hover group"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Chat with Us on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-xs sm:text-sm text-[#626273] flex items-center gap-1.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#880650] flex-shrink-0" />
                    <span>Direct official connection with the Kasat Group of Companies team.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: WhatsApp QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F1D3E5] shadow-card text-center flex flex-col items-center relative overflow-hidden group">
                
                {/* Decorative stripe in QR card */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#880650] to-[#D52A91]" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBEAF4] text-xs sm:text-sm font-bold text-[#880650] mb-4">
                  <QrCode className="w-4 h-4" />
                  Instant WhatsApp Connect
                </div>

                {/* Clickable QR Code */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-3 bg-white rounded-2xl border border-slate-200 shadow-inner hover:scale-[1.02] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#880650]/50"
                  title="Click to open WhatsApp chat directly"
                >
                  <img
                    src={whatsappQr}
                    alt="WhatsApp QR Code - Scan to connect with Kasat Group of Companies"
                    className="w-52 h-52 sm:w-56 sm:h-56 object-contain rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#880650]/0 group-hover:bg-[#880650]/5 transition-colors rounded-2xl" />
                </a>

                {/* QR Instructions */}
                <div className="mt-5">
                  <h4 className="text-base sm:text-lg font-bold text-[#202033]">
                    Scan to connect with us on WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A4A5A] mt-1.5 max-w-xs leading-relaxed">
                    Point your smartphone camera or WhatsApp scanner at the QR code to start a direct chat.
                  </p>
                  
                  {/* Click to open backup link */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#880650] hover:text-[#68003C] mt-3 underline underline-offset-4"
                  >
                    <span>Or click here to open chat</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
