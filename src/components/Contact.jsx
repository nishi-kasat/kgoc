import React from 'react';
import { Phone, MessageCircle, QrCode, ArrowUpRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import whatsappQr from '../assets/whatsapp qr.png';
import { StripeAccents } from './DecorativeLines';

export const Contact = () => {
  const whatsappUrl = "https://wa.me/919168718833";
  const phoneNumber = "+91 91687 18833";
  const phoneTel = "tel:+919168718833";

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-brand-text-primary tracking-tight max-w-3xl leading-tight">
            Connect with Kasat Group
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary max-w-2xl">
            Have questions about Kasat Group of Companies or our educational verticals? Connect directly with our team.
          </p>
          <div className="mt-4">
            <StripeAccents className="items-center" />
          </div>
        </div>

        {/* Two-Column Contact Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-soft via-white to-brand-soft/30 rounded-3xl p-6 sm:p-10 md:p-12 border border-brand-border/80 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Direct Phone & WhatsApp Access */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  Direct Enquiry Desk
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mb-4">
                  We're Here to Guide You
                </h3>

                <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed mb-8">
                  Whether you are seeking admission counseling for India or abroad via Emerge India & Overseas, or exploring flexible university degree programs through Kasat Virtual College of Education, our helpline is ready to assist you.
                </p>

                {/* Direct Phone Number Card */}
                <div className="mb-6 p-5 rounded-2xl bg-white border border-brand-border/80 shadow-2xs hover:border-brand-primary/40 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">
                        Call Helpline
                      </p>
                      <a 
                        href={phoneTel} 
                        className="text-xl sm:text-2xl font-extrabold text-brand-text-primary hover:text-brand-primary transition-colors block"
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-primary hover:bg-brand-deep active:scale-[0.98] transition-all shadow-card hover:shadow-card-hover group"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Chat with Us on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <p className="text-xs text-brand-text-secondary flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span>Direct official connection with the Kasat Group of Companies team.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: WhatsApp QR Code */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-border/80 shadow-card text-center flex flex-col items-center relative overflow-hidden group">
                
                {/* Decorative stripe in QR card */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light text-xs font-bold text-brand-primary mb-4">
                  <QrCode className="w-3.5 h-3.5" />
                  Instant WhatsApp Connect
                </div>

                {/* Clickable QR Code */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-3 bg-white rounded-2xl border border-brand-border shadow-inner hover:scale-[1.02] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  title="Click to open WhatsApp chat directly"
                >
                  <img
                    src={whatsappQr}
                    alt="WhatsApp QR Code - Scan to connect with Kasat Group of Companies"
                    className="w-52 h-52 sm:w-56 sm:h-56 object-contain rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-deep/0 group-hover:bg-brand-deep/5 transition-colors rounded-2xl" />
                </a>

                {/* QR Instructions */}
                <div className="mt-5">
                  <h4 className="text-base font-bold text-brand-text-primary">
                    Scan to connect with us on WhatsApp
                  </h4>
                  <p className="text-xs text-brand-text-secondary mt-1 max-w-xs">
                    Point your smartphone camera or WhatsApp scanner at the QR code to start a direct chat.
                  </p>
                  
                  {/* Click to open backup link */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary hover:text-brand-deep mt-3 underline underline-offset-4"
                  >
                    <span>Or click here to open chat</span>
                    <ArrowUpRight className="w-3 h-3" />
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
