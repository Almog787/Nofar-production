import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  MessageSquare,
  ArrowLeft,
  Star,
  Maximize2,
  X,
  Compass,
  ArrowUpRight,
  MapPin,
  Lock,
  ArrowDown,
  Sliders,
  Phone,
  HeartHandshake,
} from 'lucide-react';
import { IMAGES, TESTIMONIALS } from '../data/eventData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface LandingPageProps {
  onSwitchToFullSite: () => void;
}

const SLIDES = [
  { id: 'slide-1', num: '01', title: 'שער הפתיחה' },
  { id: 'slide-2', num: '02', title: 'גלריה ואפיון' },
  { id: 'slide-3', num: '03', title: 'המלצות ותיאום' },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onSwitchToFullSite }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Quick Lead Form State (Social Traffic Optimized)
  const [leadData, setLeadData] = useState({
    fullName: '',
    eventType: 'חתונה',
    guests: '200-350',
    eventDate: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Rapid 3-Click Concept Selector
  const [selectedType, setSelectedType] = useState('חתונת יוקרה');
  const [selectedStyle, setSelectedStyle] = useState('זהב ושמפניה חמה');
  const [selectedGuests, setSelectedGuests] = useState('200-350 אורחים');

  // Lightbox modal state for gallery
  const [activeGalleryImg, setActiveGalleryImg] = useState<{
    src: string;
    title: string;
    location: string;
  } | null>(null);

  // Track active slide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      SLIDES.forEach((slide, idx) => {
        const el = document.getElementById(slide.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setCurrentSlideIndex(idx);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `היי נופר, ראיתי את הפרסום שלך ברשת החברתית. שמי ${leadData.fullName}. אשמח לבדוק זמינות עבור ${leadData.eventType} (${leadData.guests} מוזמנים${leadData.eventDate ? `, תאריך משוער: ${leadData.eventDate}` : ''}).`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleConceptSubmit = () => {
    const msg = `היי נופר, הגעתי מהרשתות ובניתי מפרט מהיר עבור ${selectedType} (${selectedGuests}) בסגנון ${selectedStyle}. אשמח לבדוק תאריכים פנויים ולקבל פרטים.`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen theme-bg-page theme-text-body font-sans relative selection:bg-[#e5c158] selection:text-[#121110]">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER: LOGO TO HOME + QUICK ACTIONS                          */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-theme-gold py-2.5 sm:py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - Direct Link to Home */}
          <button
            onClick={onSwitchToFullSite}
            className="flex items-center gap-2.5 sm:gap-3 group text-right cursor-pointer bg-transparent border-0 p-0 text-inherit focus:outline-none"
            title="חזרה לדף הבית הראשי"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#e5c158] to-[#f7f4ed] text-[#121110] flex items-center justify-center font-serif font-bold text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-serif font-bold theme-text-head uppercase leading-none group-hover:text-[#9e751d] transition-colors">
                נופר <span className="font-light text-[#9e751d]">| הפקות אירועים</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#9e751d] font-mono hidden sm:block mt-0.5">
                חזרה לדף הבית הראשי ↰
              </span>
            </div>
          </button>

          {/* 3-Slide Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full theme-bg-card border border-theme-gold shadow-xs text-xs font-bold">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(slide.id)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  currentSlideIndex === idx
                    ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] font-bold shadow-xs scale-105'
                    : 'theme-text-muted hover:theme-text-head hover:bg-theme-card-subtle'
                }`}
              >
                <span className="font-mono text-[10px]">{slide.num}</span>
                <span>{slide.title}</span>
              </button>
            ))}
          </nav>

          {/* Direct CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={onSwitchToFullSite}
              className="flex items-center gap-1 px-3 py-2 rounded-xl border border-theme-gold theme-bg-card theme-text-head text-xs font-bold hover:border-theme-gold-strong transition-all cursor-pointer shadow-xs"
              title="מעבר לאתר המלא"
            >
              <Compass className="w-3.5 h-3.5 text-[#9e751d]" />
              <span className="hidden sm:inline">לאתר המלא</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9e751d]" />
            </button>

            <a
              href={getWhatsAppUrl('פנייה מהירה מדף הנחיתה')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
              <span>שיחה ב-WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* ============================================================= */}
      {/* SLIDE 01: THE HOOK & INSTANT WHATSAPP (מותאם לרשתות חברתיות)   */}
      {/* ============================================================= */}
      <section
        id="slide-1"
        className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center py-12 lg:py-16 border-b border-theme-gold overflow-hidden"
      >
        {/* Background Image with Luminous Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="אירוע יוקרה חם ומרגש"
            className="w-full h-full object-cover object-center contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/88 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Right Column: Punchy Marketing Copy */}
            <div className="lg:col-span-7 space-y-5 text-right">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold shadow-xs">
                <Sparkles className="w-4 h-4 text-[#9e751d]" />
                <span className="text-xs sm:text-sm font-bold theme-text-head">
                  הפקה אישית בסטנדרט בלעדי · שריון תאריכים 2026-2027
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight theme-text-head leading-[1.15]">
                האירוע שכולם יזכרו. <br />
                <span className="text-[#9e751d]">
                  בלי לחץ, בלי פשרות ובלי הפתעות.
                </span>
              </h1>

              <p className="text-base sm:text-lg theme-text-body font-normal leading-relaxed max-w-xl">
                תכנון, עיצוב והפקה אישית של חתונות ואירועי יוקרה. 100% ליווי אישי של נופר מהרעיון הראשון ועד אחרון האורחים ברחבה.
              </p>

              {/* 4 Micro-Proof Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-2xl font-serif font-bold text-[#9e751d]">1</div>
                  <div className="text-xs font-bold theme-text-head mt-0.5">אירוע יחיד ביום</div>
                  <div className="text-[10px] theme-text-muted">100% פוקוס עליכם</div>
                </div>

                <div className="p-3 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-2xl font-serif font-bold text-[#9e751d]">100%</div>
                  <div className="text-xs font-bold theme-text-head mt-0.5">ליווי של נופר</div>
                  <div className="text-[10px] theme-text-muted">ללא מפיקי משנה</div>
                </div>

                <div className="p-3 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-2xl font-serif font-bold text-[#9e751d]">1</div>
                  <div className="text-xs font-bold theme-text-head mt-0.5">כתובת לספקים</div>
                  <div className="text-[10px] theme-text-muted">סנכרון וניהול מושלם</div>
                </div>

                <div className="p-3 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-2xl font-serif font-bold text-[#9e751d]">0</div>
                  <div className="text-xs font-bold theme-text-head mt-0.5">הפתעות בתקציב</div>
                  <div className="text-[10px] theme-text-muted">שקיפות מוחלטת</div>
                </div>
              </div>

              {/* Scroll Trigger */}
              <div className="pt-1">
                <button
                  onClick={() => scrollToSlide('slide-2')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#9e751d] hover:opacity-80 transition-opacity cursor-pointer theme-bg-card px-3.5 py-1.5 rounded-xl border border-theme-gold shadow-xs"
                >
                  <span>צפו בגלריה ובנו מפרט מהיר ב-3 קליקים</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </button>
              </div>

            </div>

            {/* Left Column: Direct WhatsApp Lead Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl theme-bg-card border-2 border-[#9e751d] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

                {formSubmitted ? (
                  <div className="text-center py-8 space-y-3 animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-2 shadow-lg font-bold">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold theme-text-head">
                      הפרטים מוכנים ב-WhatsApp!
                    </h3>
                    <p className="text-xs sm:text-sm theme-text-body">
                      ההודעה נפתחה ישירות מול נופר בערוץ מאובטח.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 text-xs font-bold bg-[#e5c158] text-[#121110] rounded-xl shadow-md cursor-pointer"
                    >
                      שליחת פרטים נוספים
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3.5 text-right">
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9e751d]">
                          בדיקת זמינות מיידית
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#e5c158]/30 text-[#785611] text-[11px] font-bold">
                          מענה ישיר מנופר
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold theme-text-head mt-1">
                        בדיקת תאריך ושיחה עם נופר
                      </h3>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold theme-text-head">שם מלא *</label>
                      <input
                        type="text"
                        required
                        placeholder="שם פרטי ומשפחה"
                        value={leadData.fullName}
                        onChange={(e) => setLeadData({ ...leadData, fullName: e.target.value })}
                        className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3.5 py-2.5 text-sm theme-text-head focus:outline-none shadow-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold theme-text-head">סוג אירוע</label>
                        <select
                          value={leadData.eventType}
                          onChange={(e) => setLeadData({ ...leadData, eventType: e.target.value })}
                          className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3 py-2.5 text-xs sm:text-sm theme-text-head focus:outline-none shadow-xs"
                        >
                          <option value="חתונה">חתונה</option>
                          <option value="אירוע חברה">אירוע חברה / כנס</option>
                          <option value="בר/בת מצווה">בר / בת מצווה</option>
                          <option value="מסיבת VIP">מסיבת VIP פרטית</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold theme-text-head">כמות מוזמנים</label>
                        <select
                          value={leadData.guests}
                          onChange={(e) => setLeadData({ ...leadData, guests: e.target.value })}
                          className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3 py-2.5 text-xs sm:text-sm theme-text-head focus:outline-none shadow-xs"
                        >
                          <option value="עד 150">עד 150 אורחים</option>
                          <option value="150-300">150-300 אורחים</option>
                          <option value="300-500">300-500 אורחים</option>
                          <option value="500+">500+ אורחים</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold theme-text-head">תאריך משוער (אופציונלי)</label>
                      <input
                        type="text"
                        placeholder="עונה או חודש מבוקש"
                        value={leadData.eventDate}
                        onChange={(e) => setLeadData({ ...leadData, eventDate: e.target.value })}
                        className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3.5 py-2.5 text-sm theme-text-head focus:outline-none shadow-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      <MessageSquare className="w-4 h-4 fill-[#121110]" />
                      <span>בדיקת תאריך ב-WhatsApp 💬</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#785611] font-semibold pt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>ללא שום התחייבות · דיסקרטיות מלאה</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SLIDE 02: VISUAL PROOF & 3-CLICK CONCEPT SPEC BUILDER         */}
      {/* ============================================================= */}
      <section
        id="slide-2"
        className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center py-12 lg:py-16 border-b border-theme-gold overflow-hidden"
      >
        {/* Background Image with Luminous Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.wedding}
            alt="אירוע יוקרה חם ומרגש"
            className="w-full h-full object-cover object-center contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-1.5 shadow-xs">
              <Sliders className="w-3.5 h-3.5" />
              <span>שקופית 02 // הגלריה והמתכנן המהיר</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold theme-text-head">
              הסגנון שלכם, הדיוק של נופר
            </h2>
            <p className="text-xs sm:text-sm theme-text-body mt-1">
              בחרו את אופי האירוע שלכם וקבלו התאמה מיידית ל-WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Photo Cards (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { src: IMAGES.wedding, title: 'חתונת יוקרה', loc: 'קיסריה' },
                { src: IMAGES.corporate, title: 'ערב גאלה', loc: 'תל אביב' },
                { src: IMAGES.boutique, title: 'וילה פרטית VIP', loc: 'סביון' },
                { src: IMAGES.hero, title: 'קבלת פנים בשקיעה', loc: 'חוות רונית' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGalleryImg({ src: item.src, title: item.title, location: item.loc })}
                  className="group relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-theme-gold shadow-md cursor-pointer bg-neutral-900"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 right-3 left-3 text-right">
                    <span className="text-[10px] font-mono text-[#f5d77f] block font-bold">{item.loc}</span>
                    <span className="text-xs font-serif font-bold text-white leading-tight block">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3-Click Spec Box (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl theme-bg-card border border-theme-gold shadow-xl space-y-5">
              
              <div className="text-right border-b border-theme-gold pb-3">
                <span className="text-xs font-mono font-bold text-[#9e751d] uppercase">מתכנן קונספט ב-3 צעדים</span>
                <h3 className="text-lg sm:text-xl font-serif font-bold theme-text-head mt-0.5">
                  הגדירו את המפרט שלכם
                </h3>
              </div>

              {/* Step 1: Type */}
              <div className="space-y-2 text-right">
                <label className="text-xs font-bold theme-text-head uppercase">1. סוג האירוע</label>
                <div className="grid grid-cols-3 gap-2">
                  {['חתונת יוקרה', 'אירוע חברה / כנס', 'מסיבת VIP'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedType === t
                          ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#9e751d] shadow-sm'
                          : 'theme-bg-card-subtle theme-text-head border-theme-gold'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Vibe */}
              <div className="space-y-2 text-right">
                <label className="text-xs font-bold theme-text-head uppercase">2. שפה עיצובית</label>
                <div className="grid grid-cols-3 gap-2">
                  {['זהב ושמפניה חמה', 'טבע כפרי יוקרתי', 'אורבני מודרני'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedStyle(s)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedStyle === s
                          ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#9e751d] shadow-sm'
                          : 'theme-bg-card-subtle theme-text-head border-theme-gold'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Size */}
              <div className="space-y-2 text-right">
                <label className="text-xs font-bold theme-text-head uppercase">3. כמות מוזמנים</label>
                <div className="grid grid-cols-3 gap-2">
                  {['עד 150 אורחים', '200-350 אורחים', '400+ אורחים'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setSelectedGuests(g)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedGuests === g
                          ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#9e751d] shadow-sm'
                          : 'theme-bg-card-subtle theme-text-head border-theme-gold'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleConceptSubmit}
                  className="w-full py-3.5 px-5 text-xs sm:text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-[#121110]" />
                  <span>שליחת המפרט לבדיקת זמינות ב-WhatsApp</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================= */}
      {/* SLIDE 03: SOCIAL PROOF, PEACE OF MIND & CLOSING               */}
      {/* ============================================================= */}
      <section
        id="slide-3"
        className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center py-12 lg:py-16 overflow-hidden"
      >
        {/* Background Image with Luminous Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.corporate}
            alt="אירוע יוקרה חם ומרגש"
            className="w-full h-full object-cover object-center contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-7">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#e5c158]" />
              <span>שקופית 03 // ביטחון מלא ושיחת היכרות</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold theme-text-head">
              שקט נפשי מלא מהרגע הראשון
            </h2>
          </div>

          {/* Real Couple Testimonials (2 Compact Quotes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl theme-bg-card border border-theme-gold shadow-md text-right space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e5c158] text-[#e5c158]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#9e751d] font-bold">דירוג 5.0 ★</span>
              </div>
              <p className="text-xs sm:text-sm theme-text-body italic font-normal">
                &quot;הבחירה בנופר הייתה ההחלטה הכי טובה שלקחנו. השקט הנפשי, הדיוק בכל פרט והחום האנושי הפכו את היום שלנו למושלם.&quot;
              </p>
              <span className="text-xs theme-text-head font-bold block">שירה ויונתן // חתונת יוקרה בקיסריה</span>
            </div>

            <div className="p-5 rounded-2xl theme-bg-card border border-theme-gold shadow-md text-right space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e5c158] text-[#e5c158]" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#9e751d] font-bold">דירוג 5.0 ★</span>
              </div>
              <p className="text-xs sm:text-sm theme-text-body italic font-normal">
                &quot;הפקת גאלה ל-600 איש שזרמה ללא דופי. מקצועיות בלתי מתפשרת, אסתטיקה עילאית ושליטה מוחלטת בכל רגע.&quot;
              </p>
              <span className="text-xs theme-text-head font-bold block">דניאל אהרוני // סמנכ״ל שיווק</span>
            </div>
          </div>

          {/* Conversion Centerpiece */}
          <div className="p-7 sm:p-9 rounded-3xl theme-bg-card border-2 border-[#9e751d] shadow-2xl text-center space-y-5">
            <div className="w-11 h-11 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto shadow-md font-serif font-bold text-lg">
              N
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold theme-text-head">
                בואו נבדוק אם התאריך שלכם פנוי
              </h3>
              <p className="text-xs sm:text-sm theme-text-body max-w-md mx-auto">
                שיחת היכרות קצרה ונעימה ב-WhatsApp או פגישה על כוס קפה בסטודיו בעזריאלי.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href={getWhatsAppUrl('תיאום שיחת היכרות אישית עם נופר')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-[#121110]" />
                <span>שיחה אישית ב-WhatsApp עם נופר 💬</span>
              </a>

              <button
                onClick={onSwitchToFullSite}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-theme-gold theme-bg-card-subtle theme-text-head text-xs sm:text-sm font-bold hover:border-theme-gold-strong transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#9e751d]" />
                <span>מעבר לסיור המלא באתר</span>
              </button>
            </div>

            <div className="pt-3 border-t border-theme-gold flex flex-wrap items-center justify-center gap-5 text-xs theme-text-body font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9e751d]" />
                <span>סטודיו: מגדלי עזריאלי, תל אביב</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#9e751d]" />
                <span>ערוץ ישיר ומאובטח · ללא ספאם</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STICKY MOBILE CONVERSION BAR                                  */}
      {/* ------------------------------------------------------------- */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-card)] border-t border-theme-gold p-3 shadow-2xl flex items-center justify-between gap-2.5 backdrop-blur-lg">
        <button
          onClick={onSwitchToFullSite}
          className="text-right bg-transparent border-0 p-0 text-inherit cursor-pointer"
        >
          <div className="text-xs font-bold theme-text-head">נופר הפקות</div>
          <div className="text-[10px] text-[#9e751d] font-semibold">לאתר המלא ↰</div>
        </button>

        <a
          href={getWhatsAppUrl('פנייה מהירה מדף הנחיתה')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 fill-[#121110]" />
          <span>בדיקת תאריך ב-WhatsApp</span>
        </a>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* LIGHTBOX MODAL PREVIEW                                        */}
      {/* ------------------------------------------------------------- */}
      {activeGalleryImg && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveGalleryImg(null)}
            className="absolute top-6 left-6 text-white hover:text-[#e5c158] p-2.5 rounded-full bg-white/10 border border-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-3xl w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#c5a059]">
            <img
              src={activeGalleryImg.src}
              alt={activeGalleryImg.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-stone-900 text-right flex items-center justify-between text-white">
              <span className="font-serif font-bold text-lg">{activeGalleryImg.title}</span>
              <span className="text-xs font-mono text-[#e5c158]">{activeGalleryImg.location}</span>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* COMPACT FOOTER                                                */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#141210] text-[#ded5cb] border-t border-theme-gold py-8 pb-20 sm:pb-8 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={onSwitchToFullSite}
              className="font-serif font-bold text-white text-sm hover:text-[#e5c158] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              נופר הפקות אירועי יוקרה
            </button>
            <span>·</span>
            <span>מגדלי עזריאלי, תל אביב</span>
            <span>·</span>
            <span>office@nofar-events.co.il</span>
          </div>
          <div className="text-stone-400 text-[11px]">
            © 2026 כל הזכויות שמורות. בוטיק הפקות אירועי יוקרה בהתאמה אישית.
          </div>
        </div>
      </footer>

    </div>
  );
};
