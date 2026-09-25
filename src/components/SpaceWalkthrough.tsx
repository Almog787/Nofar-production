import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/eventData';
import {
  Compass,
  Sparkles,
  MapPin,
  Clock,
  Sun,
  Volume2,
  Utensils,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ShieldCheck,
  Music,
} from 'lucide-react';

interface SpaceDetail {
  id: string;
  number: string;
  title: string;
  timing: string;
  vibe: string;
  icon: React.ElementType;
  specs: {
    label: string;
    icon: React.ElementType;
    value: string;
  }[];
  highlight: string;
  description: string;
}

const SPACES_DATA: SpaceDetail[] = [
  {
    id: 'space-1',
    number: 'מתחם 01',
    title: 'קבלת פנים ומפגש ראשוני',
    timing: '19:00 - 20:15 // מעבר שקיעה טבעי',
    vibe: 'אינטימי, עוטף ומסביר פנים',
    icon: MapPin,
    specs: [
      {
        label: 'תאורה',
        icon: Sun,
        value: 'גווני אמבר חמים (2700K), נורות אדיסון תלויות ונרות עששית',
      },
      {
        label: 'סאונד',
        icon: Volume2,
        value: 'אקוסטיקה מבוקרת (עד 68dB) לשיחה אישית זורמת ללא צעקות',
      },
      {
        label: 'קולינריה',
        icon: Utensils,
        value: 'קוקטייל פתיחה אישי, עמדות שף חיות ופינגר-פוד בביס מושלם',
      },
    ],
    highlight: 'אפס תורים בעמדות · זרימה פתוחה · פינות ישיבה אלטרנטיביות',
    description:
      'הרושם הראשוני של האורחים. מרגע הכניסה החלל מעוצב לרוגע, חיבוקים ושיחות נעימות עם מוזיקת רקע אקוסטית.',
  },
  {
    id: 'space-2',
    number: 'מתחם 02',
    title: 'טקס החופה ומוקד המעמד',
    timing: '20:30 - 21:00 // שיא הרגש',
    vibe: 'מרגש, מקודש ומדויק',
    icon: Sparkles,
    specs: [
      {
        label: 'תאורה',
        icon: Sun,
        value: 'אלומות רכות ומחמיאות לצילום וידאו וסטילס ללא צללים חדים',
      },
      {
        label: 'סאונד',
        icon: Volume2,
        value: 'מערך הגברה היקפי צלול – כל מילה וברכה נשמעות בצלילות',
      },
      {
        label: 'נגישות',
        icon: ShieldCheck,
        value: 'שביל כניסה רחב ומרווח, קווי מבט פתוחים ונגישות מלאה',
      },
    ],
    highlight: 'מיקוד קהל מלא · סדר מופתי בכניסת המשפחה · אפס הסחות דעת',
    description:
      'מרכז הכובד הרגשי. ארכיטקטורת הישיבה מכוונת את כל המבטים והלב אל מרכז הבמה והמעמד הגדול שלכם.',
  },
  {
    id: 'space-3',
    number: 'מתחם 03',
    title: 'סעודת אבירים ורחבת ריקודים',
    timing: '21:00 ועד אחרון האורחים',
    vibe: 'יוקרתי, מחשמל וסוחף',
    icon: Music,
    specs: [
      {
        label: 'תאורה',
        icon: Sun,
        value: 'מעבר הדרגתי מתאורת שולחנות רומנטית לאלומות במה ומסיבה נעות',
      },
      {
        label: 'סאונד',
        icon: Volume2,
        value: 'הפרדה אקוסטית: סאונד עוצמתי ברחבה לצד שולחנות שקטים לשיחה',
      },
      {
        label: 'קולינריה',
        icon: Utensils,
        value: 'מנות שף מתוזמנות, בר אלכוהול פרימיום ונשנושי לילה מפתיעים',
      },
    ],
    highlight: 'זרימה חלקה בין הישיבה לרחבה · ללא הגבלת שעה · אנרגיה שיא',
    description:
      'החגיגה נפתחת. שולחנות אבירים מרווחים מאפשרים סעודה מפנקת, לצד רחבת ריקודים מחשמלת שמשאירה את כולם עד הסוף.',
  },
];

export const SpaceWalkthrough: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panImgRef = useRef<HTMLImageElement>(null);
  const [activeMobileSpace, setActiveMobileSpace] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Pinned GSAP scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            // Automatically sync active tab based on scroll progress
            const progress = self.progress;
            if (progress < 0.35) {
              setActiveMobileSpace(0);
            } else if (progress < 0.7) {
              setActiveMobileSpace(1);
            } else {
              setActiveMobileSpace(2);
            }
          },
        },
      });

      // Pan the panoramic image smoothly
      tl.to(panImgRef.current, {
        xPercent: 22,
        ease: 'none',
      });

      // Stagger animate cards on desktop
      tl.fromTo(
        '.space-card-desktop-0',
        { opacity: 0.3, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, ease: 'power2.out' },
        0.05
      )
        .fromTo(
          '.space-card-desktop-1',
          { opacity: 0.3, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, ease: 'power2.out' },
          0.35
        )
        .fromTo(
          '.space-card-desktop-2',
          { opacity: 0.3, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, ease: 'power2.out' },
          0.65
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentSpace = SPACES_DATA[activeMobileSpace];

  return (
    <section
      id="space-walkthrough"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0b0a] border-t border-[#d4af37]/20"
    >
      {/* Panning Panoramic Image (Scrubbed with GSAP) */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <img
          ref={panImgRef}
          src={IMAGES.wedding}
          alt="ארכיטקטורת חלל האירוע"
          className="min-w-[150vw] sm:min-w-[140vw] h-full object-cover object-center contrast-105 brightness-[0.72] scale-110 -translate-x-[12%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/50 to-[#0c0b0a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b0a]/85 via-transparent to-[#0c0b0a]/85" />
      </div>

      {/* Floating Storyline Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-14 sm:py-16">
        
        {/* Top Header - Compact and accessible */}
        <div className="text-right space-y-1 sm:space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171513]/90 border border-[#d4af37]/35 text-xs text-[#e5c158] backdrop-blur-md shadow-lg">
            <Compass className="w-3.5 h-3.5" />
            <span>מסע בחלל האירוע // ארכיטקטורה וזרימה</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            זרימה מושלמת בין רגעי השיא
          </h2>
          <p className="text-xs sm:text-sm text-[#d8cfc4] font-light leading-relaxed">
            תכנון מדויק של שלושת המתחמים מבטיח חוויית אורחים רציפה, אינטימית ומלאת התרגשות.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW: DEDICATED CLEAN INTERACTIVE CARD   */}
        {/* ======================================================== */}
        <div className="lg:hidden w-full mt-4 sm:mt-6 space-y-3 pointer-events-auto">
          
          {/* Segmented Pill Selector (Touch Friendly min 44px) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171513]/95 border border-[#d4af37]/35 backdrop-blur-xl shadow-xl overflow-x-auto no-scrollbar">
            {SPACES_DATA.map((space, idx) => (
              <button
                key={space.id}
                onClick={() => setActiveMobileSpace(idx)}
                className={`flex-1 min-h-[42px] px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeMobileSpace === idx
                    ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] font-bold shadow-md'
                    : 'text-[#d8cfc4] hover:text-[#fdfbf7] hover:bg-[#24201c]'
                }`}
              >
                <span className="font-mono text-[10px] opacity-80">{`0${idx + 1}`}</span>
                <span className="truncate">{space.title.split(' ')[0]} {space.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Mobile Space Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#171513]/95 border border-[#d4af37]/40 shadow-2xl backdrop-blur-2xl text-right space-y-3 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header row: Number + Timing */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <currentSpace.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#e5c158] block">
                    {currentSpace.number}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#fdfbf7] leading-tight">
                    {currentSpace.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-[#d8cfc4] font-mono bg-[#121110] px-2 py-1 rounded-md border border-[#d4af37]/20">
                <Clock className="w-3 h-3 text-[#e5c158]" />
                <span className="truncate max-w-[120px]">{currentSpace.timing.split('//')[0]}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-[#d8cfc4] font-light leading-relaxed">
              {currentSpace.description}
            </p>

            {/* Specs Grid (Compact 3 rows) */}
            <div className="space-y-1.5 pt-1">
              {currentSpace.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2 rounded-lg bg-[#121110]/80 border border-[#d4af37]/15 flex items-start gap-2 text-right"
                >
                  <spec.icon className="w-3.5 h-3.5 text-[#e5c158] shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-tight">
                    <span className="font-semibold text-[#fdfbf7] ml-1">{spec.label}:</span>
                    <span className="text-[#d8cfc4] font-light">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlight Pill */}
            <div className="pt-2 border-t border-[#d4af37]/15 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-[#e5c158]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="font-medium truncate">{currentSpace.highlight}</span>
              </div>

              {/* Prev / Next Chevrons for Mobile */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() =>
                    setActiveMobileSpace((prev) => (prev === 0 ? SPACES_DATA.length - 1 : prev - 1))
                  }
                  className="p-1 rounded bg-[#24201c] hover:bg-[#2e2924] text-[#d8cfc4] border border-[#d4af37]/20 cursor-pointer"
                  aria-label="המתחם הקודם"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() =>
                    setActiveMobileSpace((prev) => (prev === SPACES_DATA.length - 1 ? 0 : prev + 1))
                  }
                  className="p-1 rounded bg-[#24201c] hover:bg-[#2e2924] text-[#d8cfc4] border border-[#d4af37]/20 cursor-pointer"
                  aria-label="המתחם הבא"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: RICH 3-COLUMN ARCHITECTURAL BREAKDOWN      */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mt-6 pointer-events-auto">
          {SPACES_DATA.map((space, idx) => {
            const IconComp = space.icon;
            return (
              <div
                key={space.id}
                className={`space-card-desktop-${idx} p-5 rounded-2xl bg-[#171513]/95 border border-[#d4af37]/35 shadow-2xl backdrop-blur-xl text-right flex flex-col justify-between space-y-4 hover:border-[#e5c158] hover:shadow-[#e5c158]/10 transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#d4af37]/15 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#e5c158] block">
                          {space.number}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-[#fdfbf7]">
                          {space.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] text-[#e5c158] font-mono bg-[#121110] px-2.5 py-1 rounded-lg border border-[#d4af37]/20">
                    <Clock className="w-3 h-3 text-[#e5c158]" />
                    <span>{space.timing}</span>
                  </div>

                  <p className="text-xs text-[#d8cfc4] font-light leading-relaxed">
                    {space.description}
                  </p>

                  {/* Atmospheric Specs */}
                  <div className="space-y-2 pt-1">
                    {space.specs.map((spec, sIdx) => {
                      const SpecIcon = spec.icon;
                      return (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl bg-[#121110]/85 border border-[#d4af37]/15 flex items-start gap-2.5 text-right"
                        >
                          <SpecIcon className="w-3.5 h-3.5 text-[#e5c158] shrink-0 mt-0.5" />
                          <div className="text-xs leading-relaxed">
                            <span className="font-semibold text-[#fdfbf7] ml-1">{spec.label}:</span>
                            <span className="text-[#d8cfc4] font-light">{spec.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Highlight Guarantee */}
                <div className="pt-3 border-t border-[#d4af37]/15 flex items-center gap-2 text-xs font-medium text-[#e5c158]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="leading-tight">{space.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
