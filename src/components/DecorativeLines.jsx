import React from 'react';

// Stripe accents used across headers and sections
export const StripeAccents = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`} aria-hidden="true">
      <div className="h-[2.5px] w-12 bg-gradient-to-r from-[#880650] to-[#D52A91] rounded-full" />
      <div className="h-[2.5px] w-7 bg-gradient-to-r from-[#880650]/80 to-[#D52A91]/60 rounded-full" />
    </div>
  );
};

// Curved 4-stripe corner accent for business cards as seen in the mockup
export const CardCornerStripes = ({ className = "" }) => {
  return (
    <div className={`absolute bottom-0 right-0 pointer-events-none overflow-hidden w-28 h-20 ${className}`}>
      <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
        {/* Layered curved stripes in bottom right corner */}
        <path d="M 40 90 C 70 70, 90 40, 120 15" stroke="#F1D3E5" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
        <path d="M 60 90 C 85 75, 100 50, 120 35" stroke="#D52A91" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        <path d="M 80 90 C 95 80, 108 65, 120 55" stroke="#A50062" strokeWidth="3" strokeLinecap="round" />
        <path d="M 98 90 C 105 85, 112 78, 120 72" stroke="#880650" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Bottom sweeping wave stripes as seen at the bottom of the mockup
export const BottomWaveStripes = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
      <svg 
        viewBox="0 0 1440 85" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path 
          d="M0,45 C320,10 680,85 1050,40 C1220,18 1350,30 1440,35 L1440,85 L0,85 Z" 
          fill="rgba(136, 6, 80, 0.08)" 
        />
        <path 
          d="M0,55 C320,20 680,95 1050,50 C1220,28 1350,40 1440,45 L1440,85 L0,85 Z" 
          fill="#880650" 
        />
        {/* Striped highlights */}
        <path 
          d="M0,52 C320,17 680,92 1050,47 C1220,25 1350,37 1440,42" 
          stroke="#D52A91" 
          strokeWidth="2.5" 
        />
        <path 
          d="M0,47 C320,12 680,87 1050,42 C1220,20 1350,32 1440,37" 
          stroke="#F1D3E5" 
          strokeWidth="1.5" 
          strokeDasharray="8 6" 
        />
      </svg>
    </div>
  );
};

// Striped circular background pattern for founder photo in mockup
export const StripedCircleBackground = ({ className = "" }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-[#880650] ${className}`}>
      {/* Repeating horizontal white stripes */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #FFFFFF, #FFFFFF 3px, transparent 3px, transparent 10px)'
        }}
      />
    </div>
  );
};
