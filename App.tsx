import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Empathy from './components/Empathy.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Services from './components/Services.tsx';
import Authority from './components/Authority.tsx';
import About from './components/About.tsx';
import FAQ from './components/FAQ.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Empathy />
        <Services />
        <HowItWorks />
        <Authority />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;