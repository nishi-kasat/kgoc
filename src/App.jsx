import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Businesses } from './components/Businesses';
import { VisionMissionValues } from './components/VisionMissionValues';
import { StatsBanner } from './components/StatsBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#202033] selection:bg-[#FBEAF4] selection:text-[#880650]">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Founder Spotlight — About KGoC + founder's perspective, merged into one strong section */}
        <About />

        {/* 3. Our Businesses Section */}
        <Businesses />

        {/* 4. Deep Magenta Stats Band */}
        <StatsBanner />

        {/* 5. Vision, Mission & Values */}
        <VisionMissionValues />

        {/* 6. Contact Us with Phone, WhatsApp & Clickable QR Code */}
        <Contact />
      </main>

      {/* 7. Dark Footer with pre-footer CTA */}
      <Footer />
    </div>
  );
}

export default App;
