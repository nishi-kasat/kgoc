import React from 'react';

export const StripeAccents = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`} aria-hidden="true">
      <div className="h-[3px] w-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
      <div className="h-[3px] w-10 bg-gradient-to-r from-brand-primary/80 to-brand-secondary/60 rounded-full" />
      <div className="h-[3px] w-6 bg-gradient-to-r from-brand-primary/60 to-brand-secondary/40 rounded-full" />
    </div>
  );
};

export const CurvedWaveAccent = ({ className = "" }) => {
  return (
    <svg 
      className={`pointer-events-none select-none ${className}`} 
      viewBox="0 0 1200 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M0 60 C 300 0, 600 120, 900 60 C 1050 30, 1150 45, 1200 60" 
        stroke="url(#stripeGrad1)" 
        strokeWidth="3" 
        strokeDasharray="8 6" 
        opacity="0.35"
      />
      <path 
        d="M0 75 C 300 15, 600 135, 900 75 C 1050 45, 1150 60, 1200 75" 
        stroke="url(#stripeGrad2)" 
        strokeWidth="2" 
        opacity="0.25"
      />
      <defs>
        <linearGradient id="stripeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A50062" />
          <stop offset="50%" stopColor="#D52A91" />
          <stop offset="100%" stopColor="#FBEAF4" />
        </linearGradient>
        <linearGradient id="stripeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#80004F" />
          <stop offset="100%" stopColor="#D52A91" />
        </linearGradient>
      </defs>
    </svg>
  );
};
