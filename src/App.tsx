import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustGuarantees } from './components/TrustGuarantees';
import { AboutSection } from './components/AboutSection';
import { EventTypes } from './components/EventTypes';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { Gallery } from './components/Gallery';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);

  const handleOpenContact = (customSubject?: string) => {
    setModalSubject(customSubject);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#f3eee6] flex flex-col font-sans selection:bg-[#e5c158] selection:text-[#121110]">
      
      {/* Fixed Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        <TrustGuarantees onOpenContact={handleOpenContact} />
        <AboutSection />
        <EventTypes onOpenContact={handleOpenContact} />
        <InteractiveCalculator onOpenContact={handleOpenContact} />
        <Gallery />
        <ProcessTimeline onOpenContact={handleOpenContact} />
        <Testimonials />
        <FAQSection />
        <ContactSection initialSubject={modalSubject} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popup Contact Dialog */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        customSubject={modalSubject}
      />

    </div>
  );
}

export default App;
