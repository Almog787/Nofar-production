import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/eventData';
import { Utensils, CheckCircle2, Wine, Flame } from 'lucide-react';

export const SensoryReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wipeMaskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Curtain wipe clip-path scrub
      gsap.fromTo(
        wipeMaskRef.current,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'center 40%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sensory"
      ref={containerRef}
      className="py-24 bg-[#0c0b0a] relative border-t border-[#d4af37]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual: Masked Curtain Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#d4af37]/35 shadow-2xl h-[420px] bg-[#121110]">
            <img
              src={IMAGES.corporate}
              alt="קולינריה עילית ואירוח"
              className="w-full h-full object-cover object-center contrast-105"
              referrerPolicy="no-referrer"
            />
            
            {/* The GSAP Wipe Mask that peels back as you scroll */}
            <div
              ref={wipeMaskRef}
              className="absolute inset-0 bg-gradient-to-l from-[#e5c158]/35 via-transparent to-transparent pointer-events-none"
            />

            <div className="absolute bottom-4 right-4 bg-[#121110]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#d4af37]/35 text-xs font-mono text-[#e5c158] shadow-lg">
              // חוויה קולינרית בתפירה אישית
            </div>
          </div>

          {/* Right Text: Sensory Editorial */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158]">
              <Utensils className="w-3.5 h-3.5" />
              <span>מסע החושים // קולינריה ואווירה</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
              אירוח שלא שוכחים: <br />
              <span className="text-[#e5c158]">טעם, ניחוח ונגיעה.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#d8cfc4] font-light leading-relaxed">
              האירוח באירוע של נופר מתוכנן כחוויה קולינרית רב-חושית. תפריט שף מדויק שנבנה לפי האופי הייחודי שלכם, מוגש בתזמון מושלם כדי לרומם את האווירה לאורך כל הערב.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#171513]/90 border border-[#d4af37]/20 flex items-start gap-3">
                <Wine className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-serif font-bold text-[#fdfbf7]">מיקסולוגיה ויין</h3>
                  <p className="text-xs text-[#d8cfc4] mt-0.5 font-light">קוקטיילים מותאמים אישית ליינות בוטיק ישראליים.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171513]/90 border border-[#d4af37]/20 flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-serif font-bold text-[#fdfbf7]">חומרי גלם עילית</h3>
                  <p className="text-xs text-[#d8cfc4] mt-0.5 font-light">עבודה בלעדית עם שפים ומגדלים מהשורה הראשונה.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#e5c158]">
              <CheckCircle2 className="w-4 h-4" />
              <span>שירות אישי, קשוב ומסביר פנים לכל אורח</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
