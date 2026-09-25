import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

const CHAPTERS = [
  { id: 'hero', name: 'פתיחה קולנועית', short: '00' },
  { id: 'about', name: 'החזון והסטנדרט', short: '01' },
  { id: 'trust', name: 'שקט נפשי מלא', short: '02' },
  { id: 'event-types', name: 'סוגי אירועים', short: '03' },
  { id: 'calculator', name: 'מתכנן קונספט', short: '04' },
  { id: 'gallery', name: 'גלריה נבחרת', short: '05' },
  { id: 'process', name: 'מתודולוגיית הפקה', short: '06' },
  { id: 'testimonials', name: 'רגעים ועדויות', short: '07' },
  { id: 'faq', name: 'שאלות נפוצות', short: '08' },
  { id: 'contact', name: 'יצירת קשר אישית', short: '09' },
];

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Global Scroll Progress Bar
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.15,
        },
      });

      // 2. Track Active Chapter dynamically based on scroll position
      CHAPTERS.forEach((ch, idx) => {
        ScrollTrigger.create({
          trigger: `#${ch.id}`,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActiveChapterIndex(idx),
          onEnterBack: () => setActiveChapterIndex(idx),
        });
      });

      // 3. Staggered reveal of sections
      const sections = ['#about', '#trust', '#event-types', '#calculator', '#gallery', '#process', '#testimonials', '#faq', '#contact'];
      sections.forEach((secId) => {
        gsap.fromTo(
          `${secId} h2, ${secId} p`,
          { opacity: 0.2, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: secId,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpenContact = (customSubject?: string) => {
    setModalSubject(customSubject);
    setModalOpen(true);
  };

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(chapterId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#121110] text-[#f3eee6] flex flex-col font-sans selection:bg-[#e5c158] selection:text-[#121110] relative overflow-x-hidden"
    >
      {/* GSAP Scroll Progress Bar (Top) */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5a059] via-[#e5c158] to-[#f5d77f] z-[60] origin-right scale-x-0"
      />

      {/* Floating Storyline HUD Chapter Navigator (Bottom Corner) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#171513]/90 backdrop-blur-xl border border-[#d4af37]/35 shadow-2xl">
        {CHAPTERS.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => scrollToChapter(ch.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeChapterIndex === idx
                ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] font-bold shadow-md scale-105'
                : 'text-[#d8cfc4] hover:text-white hover:bg-[#2a2521]'
            }`}
            title={ch.name}
          >
            <span>{ch.short}</span>
            {activeChapterIndex === idx && (
              <span className="font-sans text-[11px] pr-1 hidden lg:inline truncate max-w-[120px]">
                {ch.name}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Fixed Luxury Header */}
      <Header
        onOpenContact={handleOpenContact}
        activeChapterName={CHAPTERS[activeChapterIndex]?.name}
      />

      {/* Main Content Sections: The Cohesive Scroll Journey */}
      <main className="flex-grow">
        {/* Act 00: Opening & Cinematic Entry */}
        <div id="hero">
          <Hero onOpenContact={handleOpenContact} />
        </div>

        {/* Act 01: The Vision & Core Standard */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Act 02: Peace of Mind & Guarantees */}
        <div id="trust">
          <TrustGuarantees onOpenContact={handleOpenContact} />
        </div>

        {/* Act 03: Event Specializations */}
        <div id="event-types">
          <EventTypes onOpenContact={handleOpenContact} />
        </div>

        {/* Act 04: Interactive Concept & Specification Planner */}
        <div id="calculator">
          <InteractiveCalculator onOpenContact={handleOpenContact} />
        </div>

        {/* Act 05: Visual Gallery */}
        <div id="gallery">
          <Gallery />
        </div>

        {/* Act 06: Production Methodology & Steps */}
        <div id="process">
          <ProcessTimeline onOpenContact={handleOpenContact} />
        </div>

        {/* Act 07: Client Stories & Moments */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Act 08: Frequently Asked Questions */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Act 09: Personal Connection & Consultation */}
        <div id="contact">
          <ContactSection initialSubject={modalSubject} />
        </div>
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
