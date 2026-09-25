import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ShieldCheck, Sparkles, ChevronDown, MessageSquare } from 'lucide-react';
import { IMAGES } from '../data/eventData';
import { Particles } from './react-bits/Particles';
import { CountUp } from './react-bits/CountUp';
import { StarBorder } from './react-bits/StarBorder';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenContact?: (customSubject?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const curtainTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          anticipatePin: 1,
          scrub: 1,
        },
      });

      heroTL
        // 1. Expand the portal card smoothly using pure GPU scale & transform
        .to(portalRef.current, {
          scale: 1.16,
          borderRadius: '0px',
          ease: 'power1.inOut',
          force3D: true,
        })
        // 2. Fade & lift the intro headline without layout reflow
        .to(
          introTextRef.current,
          {
            y: -50,
            opacity: 0,
            ease: 'power1.out',
            force3D: true,
          },
          0
        )
        // 3. Reveal the cinematic journey invitation
        .fromTo(
          curtainTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: 'power2.out', force3D: true },
          0.35
        );
    }, heroWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroWrapperRef}
      className="relative w-full h-screen overflow-hidden theme-bg-page flex items-center justify-center will-change-transform transition-colors duration-300"
    >
      {/* React Bits Floating Gold Dust */}
      <Particles
        particleCount={25}
        particleColors={['#e5c158', '#d4af37', '#9e751d', '#c5a059']}
        speed={0.18}
      />

      {/* Decorative Subtle Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d4af3718_1px,transparent_1px),linear-gradient(to_bottom,#d4af3718_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      {/* THE EXPANDING PORTAL (Pinned & Scrubbed smoothly by GSAP with GPU compositing) */}
      <div
        ref={portalRef}
        className="absolute z-0 w-[92vw] max-w-5xl h-[75vh] rounded-3xl overflow-hidden shadow-2xl border border-theme-gold origin-center will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <img
          src={IMAGES.hero}
          alt="אירוע יוקרה חם ומרגש"
          className="w-full h-full object-cover object-center contrast-105 will-change-transform"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />

        {/* 
          Master Editorial Lighting Scrim:
          Blends the photograph seamlessly with the ambient theme (light champagne or rich dark)
          allowing typography to breathe and stand out with impeccable contrast without heavy boxes.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/55 to-[var(--bg-page)]/65 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.72)_0%,rgba(250,248,245,0.45)_55%,rgba(250,248,245,0.92)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(20,18,16,0.65)_0%,rgba(20,18,16,0.85)_100%)] pointer-events-none" />
      </div>

      {/* STAGE 1: INTRO TEXT - Pure Luxury Editorial Float (No rigid bulky boxes) */}
      <div
        ref={introTextRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto will-change-transform space-y-5"
      >
        {/* Warm Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-stone-900/80 border border-theme-gold backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158]" />
          <span className="text-xs sm:text-sm font-bold tracking-wide theme-text-head font-sans">
            דיוק מופתי · יחס אישי · שקט נפשי מלא
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight theme-text-head leading-[1.12] text-balance drop-shadow-xs">
          הופכים כל חזון לאירוע <br className="hidden sm:inline" />
          <span className="text-[#9e751d] dark:text-[#e5c158]">
            יוצא דופן ומרגש
          </span>
        </h1>

        {/* Elevated Subtitle */}
        <p className="text-base sm:text-lg theme-text-body font-normal leading-relaxed max-w-2xl mx-auto text-balance">
          תכנון, עיצוב והפקה של חתונות ואירועי יוקרה. אסתטיקה מאופקת, חום אנושי וליווי צמוד לכל אורך הדרך.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1 w-full sm:w-auto">
          <a href="#calculator" className="w-full sm:w-auto">
            <StarBorder speed="5s" color="#9e751d" className="w-full sm:w-auto">
              <span className="text-sm font-bold">תכנון קונספט אישי</span>
              <ChevronLeft className="w-4 h-4" />
            </StarBorder>
          </a>

          <a
            href={getWhatsAppUrl('תיאום שיחת היכרות ראשונית')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 border border-theme-gold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-[#121110]" />
            <span>תיאום שיחה ב-WhatsApp</span>
          </a>
        </div>

        {/* Boutique Scarcity Standards - Sleek Glass Ribbon */}
        <div className="w-full max-w-3xl pt-5 mt-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-4 px-5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-theme-gold backdrop-blur-md shadow-md">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#9e751d] dark:text-[#e5c158] tabular-nums">
                <CountUp to={1} duration={1.2} />
              </div>
              <span className="text-sm theme-text-head font-bold mt-0.5">אירוע יחיד ביום</span>
              <span className="text-xs theme-text-muted font-medium">100% פוקוס עליכם</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#9e751d] dark:text-[#e5c158] tabular-nums">
                <CountUp to={100} duration={1.8} />
                <span>%</span>
              </div>
              <span className="text-sm theme-text-head font-bold mt-0.5">ליווי אישי של נופר</span>
              <span className="text-xs theme-text-muted font-medium">ללא מפיקי משנה</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#9e751d] dark:text-[#e5c158] tabular-nums">
                <CountUp to={1} duration={1.2} />
              </div>
              <span className="text-sm theme-text-head font-bold mt-0.5">כתובת לכל הספקים</span>
              <span className="text-xs theme-text-muted font-medium">סנכרון וניהול מושלם</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#9e751d] dark:text-[#e5c158] tabular-nums">
                <span>0</span>
              </div>
              <span className="text-sm theme-text-head font-bold mt-0.5">הפתעות בתקציב</span>
              <span className="text-xs theme-text-muted font-medium">שקיפות מלאה מראש</span>
            </div>
          </div>
        </div>

        {/* Scroll Journey Prompt Indicator */}
        <div className="pt-2 flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] font-bold animate-pulse">
          <span>גללו מטה לתחילת המסע</span>
          <ChevronDown className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158]" />
        </div>
      </div>

      {/* STAGE 2: REVEALED JOURNEY THRESHOLD */}
      <div
        ref={curtainTextRef}
        className="absolute z-10 bottom-12 left-0 right-0 text-center max-w-xl mx-auto px-4 opacity-0 pointer-events-none will-change-transform"
      >
        <div className="p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-stone-900/85 backdrop-blur-xl border border-theme-gold shadow-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-stone-800/60 border border-theme-gold text-xs font-bold text-[#9e751d] dark:text-[#e5c158]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>שער הכניסה למסע</span>
          </div>
          <p className="text-xl sm:text-3xl font-serif font-bold theme-text-head tracking-tight leading-snug">
            כל אירוע נולד מתוך הקשבה עמוקה <br />
            <span className="text-[#9e751d] dark:text-[#e5c158]">ודיוק של מילימטר.</span>
          </p>
        </div>
      </div>

    </div>
  );
};
