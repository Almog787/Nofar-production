import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowDown, ChevronLeft, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { IMAGES } from '../data/eventData';
import { Particles } from './react-bits/Particles';
import { ShinyText } from './react-bits/ShinyText';
import { CountUp } from './react-bits/CountUp';
import { StarBorder } from './react-bits/StarBorder';

interface HeroProps {
  onOpenContact: (customSubject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
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
          end: '+=110%',
          pin: true,
          scrub: 0.8,
        },
      });

      heroTL
        // 1. Expand the portal card to fill the screen
        .to(portalRef.current, {
          scale: 1,
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          ease: 'power2.inOut',
        })
        // 2. Fade & lift the intro headline
        .to(
          introTextRef.current,
          {
            y: -60,
            opacity: 0,
            ease: 'power1.out',
          },
          0
        )
        // 3. Reveal the cinematic journey invitation
        .fromTo(
          curtainTextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: 'power2.out' },
          0.35
        );
    }, heroWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroWrapperRef}
      className="relative w-full h-screen overflow-hidden bg-[#0c0b0a] flex items-center justify-center"
    >
      {/* React Bits Floating Gold Dust */}
      <Particles
        particleCount={35}
        particleColors={['#e5c158', '#d4af37', '#fdfbf7', '#c5a059']}
        speed={0.25}
      />

      {/* Decorative Subtle Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d4af370e_1px,transparent_1px),linear-gradient(to_bottom,#d4af370e_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* THE EXPANDING PORTAL (Pinned & Scrubbed by GSAP) */}
      <div
        ref={portalRef}
        className="absolute z-0 w-[88vw] max-w-5xl h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/35 origin-center scale-90 transition-shadow"
      >
        <img
          src={IMAGES.hero}
          alt="אירוע יוקרה חם ומרגש"
          className="w-full h-full object-cover object-center contrast-105 brightness-85"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a]/75 via-transparent to-[#0c0b0a]/75" />
      </div>

      {/* STAGE 1: INTRO TEXT (Fades as you scroll) */}
      <div
        ref={introTextRef}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto"
      >
        {/* Warm Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1917]/95 border border-[#d4af37]/35 backdrop-blur-md mb-5 shadow-xl">
          <ShieldCheck className="w-3.5 h-3.5 text-[#e5c158]" />
          <ShinyText
            text="דיוק מופתי · יחס אישי · שקט נפשי מלא"
            className="text-xs font-semibold tracking-wider font-sans"
            speed={4}
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fdfbf7] max-w-3xl leading-[1.12] mb-4 text-balance">
          הופכים כל חזון לאירוע <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdfbf7] via-[#e5c158] to-[#c5a059]">
            יוצא דופן ומרגש
          </span>
        </h1>

        {/* Elevated Subtitle */}
        <p className="text-sm sm:text-base text-[#d8cfc4] max-w-xl font-light leading-relaxed mb-6 text-balance">
          תכנון, עיצוב והפקה של חתונות ואירועי יוקרה. אסתטיקה מאופקת, חום אנושי וליווי צמוד לכל אורך הדרך.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-8">
          <a href="#calculator" className="w-full sm:w-auto">
            <StarBorder speed="5s" color="#e5c158" className="w-full sm:w-auto">
              <span>תכנון קונספט אישי</span>
              <ChevronLeft className="w-4 h-4" />
            </StarBorder>
          </a>

          <button
            onClick={() => onOpenContact('תיאום שיחת היכרות ראשונית')}
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wider text-[#f3eee6] hover:text-white bg-[#1c1917]/90 hover:bg-[#2a2521] border border-[#d4af37]/35 hover:border-[#d4af37]/65 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#e5c158]" />
            <span>תיאום פגישה אישית</span>
          </button>
        </div>

        {/* Boutique Scarcity Standards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-4 border-t border-[#d4af37]/25 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <CountUp to={1} duration={1.2} />
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">אירוע יחיד ביום</span>
            <span className="text-[10px] text-[#d8cfc4]">100% פוקוס עליכם</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <span className="text-sm font-sans font-normal ml-1">עד</span>
              <CountUp to={2} duration={1.5} />
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">אירועים בחודש</span>
            <span className="text-[10px] text-[#d8cfc4]">בוטיק ללא פס ייצור</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <CountUp to={100} duration={2} />
              <span>%</span>
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">נוכחות אישית</span>
            <span className="text-[10px] text-[#d8cfc4]">של נופר לאורך כל היום</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <span>0</span>
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">הפתעות בתקציב</span>
            <span className="text-[10px] text-[#d8cfc4]">שקיפות מלאה מול ספקים</span>
          </div>
        </div>

        {/* Scroll Journey Prompt Indicator */}
        <div className="mt-6 flex flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-[#e5c158]/80 animate-pulse">
          <span>גללו מטה לתחילת המסע</span>
          <ChevronDown className="w-4 h-4 text-[#e5c158]" />
        </div>
      </div>

      {/* STAGE 2: REVEALED JOURNEY THRESHOLD (Appears as portal fills the screen) */}
      <div
        ref={curtainTextRef}
        className="absolute z-10 bottom-14 left-0 right-0 text-center max-w-xl mx-auto px-4 opacity-0 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110]/90 border border-[#d4af37]/40 text-xs text-[#e5c158] backdrop-blur-md mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>שער הכניסה למסע</span>
        </div>
        <p className="text-xl sm:text-3xl font-serif font-bold text-[#fdfbf7] tracking-tight">
          כל אירוע נולד מתוך הקשבה עמוקה <br />
          <span className="text-[#e5c158]">ודיוק של מילימטר.</span>
        </p>
      </div>

    </div>
  );
};
