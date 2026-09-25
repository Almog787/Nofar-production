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
      // Pinned GSAP scrub timeline with GPU acceleration and anticipatePin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          anticipatePin: 1,
          scrub: 1,
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

      // Pan the panoramic image smoothly with force3D
      tl.to(panImgRef.current, {
        xPercent: 20,
        ease: 'none',
        force3D: true,
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden theme-bg-page border-t border-theme-gold transition-colors duration-300"
    >
      {/* Panning Panoramic Image (Scrubbed with GSAP) */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <img
          ref={panImgRef}
          src={IMAGES.wedding}
          alt="ארכיטקטורת חלל האירוע"
          className="min-w-[150vw] sm:min-w-[140vw] h-full object-cover object-center contrast-105 brightness-90 scale-110 -translate-x-[12%]"
          referrerPolicy="no-referrer"
        />
        {/* Solid luminous veil to eliminate any text clash in light and dark mode */}
        <div className="absolute inset-0 bg-[var(--bg-page)]/85 dark:bg-black/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
      </div>

      {/* Floating Storyline Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-12 sm:py-16">
        
        {/* Top Header - Protected inside an elegant card */}
        <div className="text-right p-5 sm:p-7 rounded-3xl theme-bg-card backdrop-blur-xl border border-theme-gold shadow-xl max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full theme-bg-card-subtle border border-theme-gold text-xs font-bold text-[#9e751d] dark:text-[#e5c158]">
            <Compass className="w-4 h-4" />
            <span>מסע בחלל האירוע // ארכיטקטורה וזרימה</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            זרימה מושלמת בין רגעי השיא
          </h2>
          <p className="text-sm sm:text-base theme-text-body font-normal leading-relaxed">
            תכנון מדויק של שלושת המתחמים מבטיח חוויית אורחים רציפה, אינטימית ומלאת התרגשות.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET VIEW: DEDICATED CLEAN INTERACTIVE CARD   */}
        {/* ======================================================== */}
        <div className="lg:hidden w-full mt-4 sm:mt-6 space-y-3 pointer-events-auto">
          
          {/* Segmented Pill Selector (Touch Friendly min 44px) */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl theme-bg-card border border-theme-gold backdrop-blur-xl shadow-lg overflow-x-auto no-scrollbar">
            {SPACES_DATA.map((space, idx) => (
              <button
                key={space.id}
                onClick={() => setActiveMobileSpace(idx)}
                className={`flex-1 min-h-[44px] px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeMobileSpace === idx
                    ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md'
                    : 'theme-text-muted hover:theme-text-head hover:bg-theme-card-subtle'
                }`}
              >
                <span className="font-mono text-xs opacity-90">{`0${idx + 1}`}</span>
                <span>{space.title.split(' ')[0]} {space.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Mobile Space Card */}
          <div className="p-5 sm:p-6 rounded-3xl theme-bg-card border border-theme-gold shadow-2xl backdrop-blur-2xl text-right space-y-4 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header row: Number + Timing */}
            <div className="flex items-center justify-between border-b border-theme-gold pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158]">
                  <currentSpace.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#9e751d] dark:text-[#e5c158] block">
                    {currentSpace.number}
                  </span>
                  <h3 className="text-lg font-serif font-bold theme-text-head leading-tight">
                    {currentSpace.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs theme-text-muted font-mono theme-bg-card-subtle px-2.5 py-1 rounded-lg border border-theme-gold">
                <Clock className="w-3.5 h-3.5 text-[#9e751d] dark:text-[#e5c158]" />
                <span className="truncate max-w-[130px] font-semibold">{currentSpace.timing.split('//')[0]}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm theme-text-body font-normal leading-relaxed">
              {currentSpace.description}
            </p>

            {/* Specs Grid */}
            <div className="space-y-2 pt-1">
              {currentSpace.specs.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-start gap-2.5 text-right"
                >
                  <spec.icon className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <span className="font-bold theme-text-head ml-1">{spec.label}:</span>
                    <span className="theme-text-muted font-medium">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Highlight Pill */}
            <div className="pt-3 border-t border-theme-gold flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 text-[#9e751d] dark:text-[#e5c158] font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="truncate">{currentSpace.highlight}</span>
              </div>

              {/* Prev / Next Chevrons for Mobile */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() =>
                    setActiveMobileSpace((prev) => (prev === 0 ? SPACES_DATA.length - 1 : prev - 1))
                  }
                  className="p-1.5 rounded-lg theme-bg-card-subtle hover:opacity-80 theme-text-body border border-theme-gold cursor-pointer"
                  aria-label="המתחם הקודם"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActiveMobileSpace((prev) => (prev === SPACES_DATA.length - 1 ? 0 : prev + 1))
                  }
                  className="p-1.5 rounded-lg theme-bg-card-subtle hover:opacity-80 theme-text-body border border-theme-gold cursor-pointer"
                  aria-label="המתחם הבא"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: RICH 3-COLUMN ARCHITECTURAL BREAKDOWN      */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-8 pointer-events-auto">
          {SPACES_DATA.map((space, idx) => {
            const IconComp = space.icon;
            return (
              <div
                key={space.id}
                className={`space-card-desktop-${idx} p-6 rounded-3xl theme-bg-card border border-theme-gold theme-shadow-warm backdrop-blur-2xl text-right flex flex-col justify-between space-y-4 hover:border-theme-gold-strong transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between border-b border-theme-gold pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#9e751d] dark:text-[#e5c158] block">
                          {space.number}
                        </span>
                        <h3 className="text-xl font-serif font-bold theme-text-head">
                          {space.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#9e751d] dark:text-[#e5c158] font-mono theme-bg-card-subtle px-3 py-1 rounded-lg border border-theme-gold font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#9e751d] dark:text-[#e5c158]" />
                    <span>{space.timing}</span>
                  </div>

                  <p className="text-sm theme-text-body font-normal leading-relaxed">
                    {space.description}
                  </p>

                  {/* Atmospheric Specs */}
                  <div className="space-y-2 pt-1">
                    {space.specs.map((spec, sIdx) => {
                      const SpecIcon = spec.icon;
                      return (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-start gap-2.5 text-right"
                        >
                          <SpecIcon className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158] shrink-0 mt-0.5" />
                          <div className="text-xs sm:text-sm leading-relaxed">
                            <span className="font-bold theme-text-head ml-1">{spec.label}:</span>
                            <span className="theme-text-muted font-medium">{spec.value}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Highlight Guarantee */}
                <div className="pt-3.5 border-t border-theme-gold flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9e751d] dark:text-[#e5c158]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
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
