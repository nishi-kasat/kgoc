import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Businesses } from './components/Businesses';
import { VisionMissionValues } from './components/VisionMissionValues';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-text-primary selection:bg-brand-light selection:text-brand-deep">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About KGoC */}
        <About />

        {/* 3. Our Businesses */}
        <Businesses />

        {/* 4. Vision, Mission & Values */}
        <VisionMissionValues />

        {/* 5. Leadership */}
        <Leadership />

        {/* 6. Contact Us */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
