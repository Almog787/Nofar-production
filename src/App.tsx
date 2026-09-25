import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpaceWalkthrough } from './components/SpaceWalkthrough';
import { TrustGuarantees } from './components/TrustGuarantees';
import { EventTypes } from './components/EventTypes';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { SensoryReveal } from './components/SensoryReveal';
import { Gallery } from './components/Gallery';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const CHAPTERS = [
  { id: 'hero', name: 'שער הפתיחה', short: '00' },
  { id: 'about', name: 'החזון והסטנדרט', short: '01' },
  { id: 'space-walkthrough', name: 'ארכיטקטורת החלל', short: '02' },
  { id: 'trust', name: 'שקט נפשי מלא', short: '03' },
  { id: 'event-types', name: 'סוגי אירועים', short: '04' },
  { id: 'calculator', name: 'מתכנן קונספט', short: '05' },
  { id: 'sensory', name: 'קולינריה וחושים', short: '06' },
  { id: 'gallery', name: 'גלריה נבחרת', short: '07' },
  { id: 'process', name: 'מתודולוגיית הפקה', short: '08' },
  { id: 'testimonials', name: 'רגעים ועדויות', short: '09' },
  { id: 'faq', name: 'שאלות נפוצות', short: '10' },
  { id: 'contact', name: 'יצירת קשר אישית', short: '11' },
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
      // 1. Global Scroll Progress Bar (Top)
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

      // 3. Staggered gentle editorial reveal of sections
      const animatedSections = [
        '#about',
        '#trust',
        '#event-types',
        '#calculator',
        '#gallery',
        '#process',
        '#testimonials',
        '#faq',
        '#contact',
      ];
      
      animatedSections.forEach((secId) => {
        gsap.fromTo(
          `${secId} h2, ${secId} p`,
          { opacity: 0.25, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.12,
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
              <span className="font-sans text-[11px] pr-1 hidden lg:inline truncate max-w-[130px]">
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

      {/* The Unified Cinematic Journey Flow */}
      <main className="flex-grow">
        {/* Act 00: Pinned Expanding Hero Portal */}
        <div id="hero">
          <Hero onOpenContact={handleOpenContact} />
        </div>

        {/* Act 01: The Vision & Core Standard */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Act 02: Pinned Horizontal Space & Architecture Walkthrough */}
        <div id="space-walkthrough">
          <SpaceWalkthrough />
        </div>

        {/* Act 03: Peace of Mind & Guarantees */}
        <div id="trust">
          <TrustGuarantees onOpenContact={handleOpenContact} />
        </div>

        {/* Act 04: Event Specializations */}
        <div id="event-types">
          <EventTypes onOpenContact={handleOpenContact} />
        </div>

        {/* Act 05: Interactive Concept & Specification Planner */}
        <div id="calculator">
          <InteractiveCalculator onOpenContact={handleOpenContact} />
        </div>

        {/* Act 06: Sensory Curtain Wipe & Culinary Mastery */}
        <div id="sensory">
          <SensoryReveal />
        </div>

        {/* Act 07: Visual Gallery */}
        <div id="gallery">
          <Gallery />
        </div>

        {/* Act 08: Production Methodology & Steps */}
        <div id="process">
          <ProcessTimeline onOpenContact={handleOpenContact} />
        </div>

        {/* Act 09: Client Stories & Moments */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Act 10: Frequently Asked Questions */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Act 11: Personal Connection & Consultation */}
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
