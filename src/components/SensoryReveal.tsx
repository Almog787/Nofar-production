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
      className="py-24 theme-bg-page relative border-t border-theme-gold overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual: Masked Curtain Image */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-theme-gold shadow-2xl h-[440px] bg-neutral-900">
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

            <div className="absolute bottom-5 right-5 bg-black/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d4af37]/50 text-xs sm:text-sm font-mono font-bold text-[#f5d77f] shadow-lg">
              // חוויה קולינרית בתפירה אישית
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158]">
                <Utensils className="w-4 h-4" />
                <span>קולינריה, טעם וחושים</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
                טוטאל דיזיין קולינרי שמחבר בין כל החושים
              </h2>
            </div>

            <p className="text-base sm:text-lg theme-text-body font-normal leading-relaxed">
              התפריט והמשקאות אינם רק אוכל ושתייה – הם חלק בלתי נפרד מסיפור האירוע. אנחנו מתאימים את סגנון ההגשה, עיצוב השולחן וקצב המנות כך שיתכתבו במדויק עם שעת השקיעה והאווירה המבוקשת.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl theme-bg-card border border-theme-gold flex items-center gap-4 theme-shadow-warm">
                <Wine className="w-6 h-6 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold theme-text-head">תפריט משקאות מותאם</h4>
                  <p className="text-xs sm:text-sm theme-text-body font-normal mt-0.5">קוקטיילים בעיצוב אישי ויינות נבחרים המותאמים למנות.</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl theme-bg-card border border-theme-gold flex items-center gap-4 theme-shadow-warm">
                <Flame className="w-6 h-6 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold theme-text-head">עמדות שף חיות ופרשיות</h4>
                  <p className="text-xs sm:text-sm theme-text-body font-normal mt-0.5">אינטראקציה קולינרית מול האורחים, ללא תורים ובעידון מקסימלי.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#9e751d] dark:text-[#e5c158] pt-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>התאמה מלאה לרגישויות, צמחונות, טבעונות וכשרות</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
