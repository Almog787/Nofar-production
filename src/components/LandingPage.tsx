import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  MessageSquare,
  ArrowLeft,
  ChevronDown,
  Star,
  Maximize2,
  X,
  Compass,
  ArrowUpRight,
  Clock,
  Award,
  Utensils,
  Music,
  MapPin,
  Lock,
  ArrowDown,
  Check,
  Sliders,
  Phone,
} from 'lucide-react';
import { IMAGES, EVENT_TYPES, TESTIMONIALS } from '../data/eventData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface LandingPageProps {
  onSwitchToFullSite: () => void;
}

const SLIDES = [
  { id: 'slide-1', num: '01', title: 'שער החזון' },
  { id: 'slide-2', num: '02', title: 'אפיון ומתחמים' },
  { id: 'slide-3', num: '03', title: 'ביטחון והגשמה' },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onSwitchToFullSite }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Quick Lead Form State
  const [leadData, setLeadData] = useState({
    fullName: '',
    eventType: 'חתונה',
    guests: '200-350',
    eventDate: '',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Concept Selector state in Slide 2
  const [selectedType, setSelectedType] = useState<'wedding' | 'corporate' | 'boutique'>('wedding');
  const [selectedGuests, setSelectedGuests] = useState(250);
  const [selectedStyle, setSelectedStyle] = useState('זהב ושמפניה חמה');
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    catering: true,
    design: true,
    soundLight: true,
    dayOfManagement: true,
  });

  // Lightbox modal state for gallery in Slide 3
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
    const msg = `היי נופר, הגעתי מדף הנחיתה. שמי ${leadData.fullName}. אשמח לבדוק זמינות עבור ${leadData.eventType} (${leadData.guests} מוזמנים${leadData.eventDate ? `, תאריך משוער: ${leadData.eventDate}` : ''}). ${leadData.notes ? `פרטים נוספים: ${leadData.notes}` : ''}`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleAddon = (key: string) => {
    setSelectedAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConceptSubmit = () => {
    const typeLabel =
      selectedType === 'wedding'
        ? 'חתונה'
        : selectedType === 'corporate'
        ? 'אירוע חברה'
        : 'מסיבת VIP';
    const activeCount = Object.values(selectedAddons).filter(Boolean).length;
    const msg = `היי נופר, בניתי מפרט בדף הנחיתה עבור ${typeLabel} ל-${selectedGuests} מוזמנים בסגנון ${selectedStyle} (${activeCount} מרכיבי הפקה). אשמח לתאם שיחת היכרות ולבדוק תאריכים פנויים.`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen theme-bg-page theme-text-body font-sans relative selection:bg-[#e5c158] selection:text-[#121110]">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER: WITH LOGO LINKED TO MAIN SITE & SLIDE NAVIGATION      */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-theme-gold py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo - Linked directly to the Main Home Page */}
          <button
            onClick={onSwitchToFullSite}
            className="flex items-center gap-3 group text-right cursor-pointer bg-transparent border-0 p-0 text-inherit focus:outline-none"
            title="חזרה לדף הבית הראשי של נופר הפקות אירועים"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#e5c158] to-[#f7f4ed] text-[#121110] flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider font-bold theme-text-head uppercase leading-none group-hover:text-[#9e751d] transition-colors">
                נופר <span className="font-light text-[#9e751d]">| הפקות אירועים</span>
              </span>
              <span className="text-[11px] font-semibold text-[#9e751d] uppercase font-mono hidden sm:block mt-1">
                חזרה לדף הבית הראשי ↰
              </span>
            </div>
          </button>

          {/* 3-Slide Quick Navigator (Center) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full theme-bg-card border border-theme-gold shadow-xs text-xs font-bold">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(slide.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
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

          {/* Actions: Full Site Button & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onSwitchToFullSite}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl border border-theme-gold theme-bg-card theme-text-head text-xs sm:text-sm font-bold hover:border-theme-gold-strong transition-all cursor-pointer shadow-xs"
              title="מעבר לסיור המלא והמעמיק באתר"
            >
              <Compass className="w-4 h-4 text-[#9e751d]" />
              <span className="hidden sm:inline">לאתר המלא</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9e751d]" />
            </button>

            <a
              href={getWhatsAppUrl('פנייה מהירה מדף הנחיתה')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#121110]" />
              <span className="hidden sm:inline">שיחה ב-WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING 3-SLIDE DOT INDICATOR                                */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full theme-bg-card border border-theme-gold shadow-xl">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
              currentSlideIndex === idx
                ? 'bg-[#9e751d] scale-125 ring-2 ring-[#e5c158]'
                : 'bg-neutral-300 hover:bg-[#9e751d]/60'
            }`}
            title={`מעבר ל-${slide.title}`}
          />
        ))}
      </div>

      {/* ============================================================= */}
      {/* SLIDE 01: שער החזון ובדיקת זמינות מיידית                      */}
      {/* ============================================================= */}
      <section
        id="slide-1"
        className="relative min-h-[92vh] flex items-center justify-center py-16 lg:py-20 border-b border-theme-gold overflow-hidden"
      >
        {/* Background Image with Luminous Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="אירוע יוקרה חם ומרגש"
            className="w-full h-full object-cover object-center contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
          {/* Luminous Warm Scrim Layer */}
          <div className="absolute inset-0 bg-[var(--bg-page)]/88 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Right Column: Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-bg-card border border-theme-gold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#9e751d] animate-ping" />
                <span className="text-xs sm:text-sm font-bold theme-text-head font-sans">
                  שקופית 01 // שער הפתיחה · שריון מוקדם לעונת 2026-2027
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight theme-text-head leading-[1.12]">
                הופכים כל חזון לאירוע <br />
                <span className="text-[#9e751d]">
                  יוצא דופן ומרגש.
                </span>
              </h1>

              <p className="text-base sm:text-xl theme-text-body font-normal leading-relaxed max-w-2xl">
                תכנון, עיצוב והפקה אישית של חתונות ואירועי יוקרה. אסתטיקה מאופקת, חום אנושי וליווי צמוד של נופר משלב הרעיון ועד אחרון האורחים.
              </p>

              {/* Scarcity Standards Bullet Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">1</div>
                  <div className="text-sm font-bold theme-text-head mt-1">אירוע יחיד ביום</div>
                  <div className="text-xs theme-text-muted">100% פוקוס עליכם</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">100%</div>
                  <div className="text-sm font-bold theme-text-head mt-1">ליווי אישי של נופר</div>
                  <div className="text-xs theme-text-muted">ללא מפיקי משנה</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">1</div>
                  <div className="text-sm font-bold theme-text-head mt-1">כתובת לכל הספקים</div>
                  <div className="text-xs theme-text-muted">סנכרון וניהול מושלם</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">0</div>
                  <div className="text-sm font-bold theme-text-head mt-1">הפתעות בתקציב</div>
                  <div className="text-xs theme-text-muted">שקיפות מוחלטת</div>
                </div>
              </div>

              {/* Slide 2 Scroll Prompt */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => scrollToSlide('slide-2')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#9e751d] hover:opacity-80 transition-opacity cursor-pointer theme-bg-card px-4 py-2 rounded-xl border border-theme-gold shadow-xs"
                >
                  <span>המשך לאפיון הקונספט וזרימת החלל</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>

            </div>

            {/* Left Column: Direct Consultation Box */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-9 rounded-3xl theme-bg-card border-2 border-[#9e751d] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-3 shadow-xl font-bold">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold theme-text-head">
                      הפרטים מוכנים ב-WhatsApp!
                    </h3>
                    <p className="text-sm theme-text-body leading-relaxed">
                      ההודעה נפתחה ישירות מול נופר ב-WhatsApp בערוץ מאובטח.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-bold bg-[#e5c158] text-[#121110] rounded-xl shadow-md mt-2 cursor-pointer"
                    >
                      שליחת פרטים נוספים
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4 text-right">
                    
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9e751d]">
                          בדיקת זמינות ופגישת אפיון
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#e5c158]/30 text-[#785611] text-xs font-bold">
                          ללא התחייבות
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold theme-text-head mt-1">
                        בדיקת תאריך פנוי ושיחה עם נופר
                      </h3>
                      <p className="text-xs sm:text-sm theme-text-muted mt-1 font-normal">
                        מלאו פרטים קצרים ושיחת הוואטסאפ תיפתח מיד.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs sm:text-sm font-bold theme-text-head">שם מלא *</label>
                      <input
                        type="text"
                        required
                        placeholder="שם פרטי ומשפחה"
                        value={leadData.fullName}
                        onChange={(e) => setLeadData({ ...leadData, fullName: e.target.value })}
                        className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs sm:text-sm font-bold theme-text-head">סוג אירוע</label>
                        <select
                          value={leadData.eventType}
                          onChange={(e) => setLeadData({ ...leadData, eventType: e.target.value })}
                          className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3.5 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                        >
                          <option value="חתונה">חתונה</option>
                          <option value="אירוע חברה">אירוע חברה / כנס</option>
                          <option value="בר/בת מצווה">בר / בת מצווה</option>
                          <option value="מסיבת VIP">מסיבת VIP פרטית</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs sm:text-sm font-bold theme-text-head">כמות מוזמנים</label>
                        <select
                          value={leadData.guests}
                          onChange={(e) => setLeadData({ ...leadData, guests: e.target.value })}
                          className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-3.5 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                        >
                          <option value="עד 150">עד 150 אורחים</option>
                          <option value="150-300">150-300 אורחים</option>
                          <option value="300-500">300-500 אורחים</option>
                          <option value="500+">500+ אורחים</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs sm:text-sm font-bold theme-text-head">תאריך משוער (אופציונלי)</label>
                      <input
                        type="text"
                        placeholder="עונה / חודש מבוקש"
                        value={leadData.eventDate}
                        onChange={(e) => setLeadData({ ...leadData, eventDate: e.target.value })}
                        className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 text-sm sm:text-base font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                    >
                      <MessageSquare className="w-5 h-5 fill-[#121110]" />
                      <span>בדיקת תאריך ומעבר ל-WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-[#785611] font-semibold pt-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>מענה ישיר מנופר · דיסקרטיות מלאה וללא ספאם</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SLIDE 02: אפיון הקונספט וארכיטקטורת המתחמים                    */}
      {/* ============================================================= */}
      <section
        id="slide-2"
        className="relative min-h-[92vh] flex items-center justify-center py-16 lg:py-20 border-b border-theme-gold overflow-hidden"
      >
        {/* Background Image with Luminous Scrim */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.wedding}
            alt="ארכיטקטורת חלל האירוע"
            className="w-full h-full object-cover object-center contrast-105 brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[var(--bg-page)]/90 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-[var(--bg-page)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-2 shadow-xs">
              <Sliders className="w-4 h-4" />
              <span>שקופית 02 // מתכנן המפרט האישי & זרימת החלל</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              אפיון מדויק וזרימה הרמונית
            </h2>
            <p className="text-base theme-text-body mt-2 font-normal">
              הגדירו את מאפייני האירוע שלכם וצפו בתכנון שלושת מתחמי השיא.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Interactive Concept Planner Box (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl theme-bg-card border border-theme-gold shadow-xl space-y-6">
              
              {/* Step 1: Event Type */}
              <div className="space-y-2.5">
                <label className="block text-sm font-bold theme-text-head uppercase tracking-wider text-right">
                  1. סוג האירוע המבוקש
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'wedding', label: 'חתונת יוקרה' },
                    { id: 'corporate', label: 'אירוע חברה / כנס' },
                    { id: 'boutique', label: 'מסיבת VIP פרטית' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedType(item.id as any)}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        selectedType === item.id
                          ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#9e751d] shadow-sm'
                          : 'theme-bg-card-subtle theme-text-head border-theme-gold hover:border-theme-gold-strong'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Guest Slider */}
              <div className="space-y-2.5 text-right">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold theme-text-head uppercase tracking-wider">
                    2. מספר מוזמנים
                  </span>
                  <span className="text-sm font-serif font-bold text-[#9e751d] theme-bg-card-subtle px-3.5 py-1 rounded-xl border border-theme-gold">
                    {selectedGuests} מוזמנים
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="800"
                  step="25"
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-300 rounded-lg appearance-none cursor-pointer accent-[#9e751d]"
                />
              </div>

              {/* Step 3: Aesthetic Vibe */}
              <div className="space-y-2.5 text-right">
                <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                  3. שפה עיצובית ואווירה
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { label: 'זהב ושמפניה חמה', desc: 'תאורת אמבר רומנטית ונרות' },
                    { label: 'טבע כפרי יוקרתי', desc: 'מרחב פתוח ופרחים אורגניים' },
                    { label: 'אורבני מודרני', desc: 'במה דיגיטלית וקוקטיילים' },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setSelectedStyle(s.label)}
                      className={`p-3 rounded-xl text-right border transition-all cursor-pointer ${
                        selectedStyle === s.label
                          ? 'border-[#9e751d] bg-[#e5c158]/25 shadow-xs'
                          : 'theme-bg-card-subtle border-theme-gold hover:border-theme-gold-strong'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm theme-text-head">{s.label}</div>
                      <div className="text-[11px] theme-text-muted mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Addons Checklist */}
              <div className="space-y-2.5 text-right">
                <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                  4. מרכיבי הפקה מבוקשים
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'catering', label: 'קייטרינג שף ובר' },
                    { id: 'design', label: 'עיצוב חלל ופרחים' },
                    { id: 'soundLight', label: 'הגברה ותאורה' },
                    { id: 'dayOfManagement', label: 'ניהול בשטח' },
                  ].map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className="p-2.5 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-between transition-all cursor-pointer text-right"
                    >
                      <span className="text-xs theme-text-head font-medium">{addon.label}</span>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        selectedAddons[addon.id] ? 'bg-[#9e751d] text-white border-transparent' : 'border-neutral-400'
                      }`}>
                        {selectedAddons[addon.id] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 border-t border-theme-gold flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs theme-text-muted text-right">
                  בלחיצה אחת נשלח את המפרט ישירות ל-WhatsApp של נופר.
                </span>

                <button
                  onClick={handleConceptSubmit}
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-[#121110]" />
                  <span>שליחת המפרט ל-WhatsApp</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Spatial Flow 3-Moments Breakdown (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Space 1 */}
              <div className="p-4 sm:p-5 rounded-2xl theme-bg-card border border-theme-gold shadow-md text-right space-y-2">
                <div className="flex items-center justify-between border-b border-theme-gold pb-2">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#9e751d]" />
                    <span className="font-serif font-bold text-base theme-text-head">01. קבלת פנים ומפגש ראשוני</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9e751d] font-bold">19:00</span>
                </div>
                <p className="text-xs sm:text-sm theme-text-body leading-relaxed font-normal">
                  גווני אמבר חמים (2700K), עמדות שף חיות ללא שום תורים, ואקוסטיקה מבוקרת (עד 68dB) לשיחה נינוחה.
                </p>
              </div>

              {/* Space 2 */}
              <div className="p-4 sm:p-5 rounded-2xl theme-bg-card border-2 border-[#9e751d] shadow-lg text-right space-y-2 bg-[#e5c158]/10">
                <div className="flex items-center justify-between border-b border-theme-gold pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9e751d]" />
                    <span className="font-serif font-bold text-base theme-text-head">02. טקס החופה ומוקד המעמד</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9e751d] font-bold">20:30</span>
                </div>
                <p className="text-xs sm:text-sm theme-text-body leading-relaxed font-normal">
                  שיא הרגש. אלומות תאורה רכות ומחמיאות לצילום, ומערך הגברה צלול שבו כל ברכה ומילה נשמעות בבהירות.
                </p>
              </div>

              {/* Space 3 */}
              <div className="p-4 sm:p-5 rounded-2xl theme-bg-card border border-theme-gold shadow-md text-right space-y-2">
                <div className="flex items-center justify-between border-b border-theme-gold pb-2">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4 text-[#9e751d]" />
                    <span className="font-serif font-bold text-base theme-text-head">03. סעודת אבירים ורחבת ריקודים</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9e751d] font-bold">21:00+</span>
                </div>
                <p className="text-xs sm:text-sm theme-text-body leading-relaxed font-normal">
                  הפרדה אקוסטית חכמה: מוזיקת מועדון עוצמתית ברחבה לצד שולחנות שקטים לשיחה, ללא שום הגבלת שעה.
                </p>
              </div>

              {/* Slide 3 Scroll Prompt */}
              <button
                onClick={() => scrollToSlide('slide-3')}
                className="w-full py-3 px-4 rounded-xl border border-theme-gold theme-bg-card theme-text-head text-xs font-bold hover:border-theme-gold-strong transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>המשך לעוגני השקט הנפשי והתיאום האישי</span>
                <ArrowDown className="w-4 h-4 text-[#9e751d]" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================= */}
      {/* SLIDE 03: עוגני השקט הנפשי, רגעים והגשמה                     */}
      {/* ============================================================= */}
      <section
        id="slide-3"
        className="relative min-h-[92vh] flex items-center justify-center py-16 lg:py-20 overflow-hidden"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] shadow-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>שקופית 03 // עוגני הביטחון, הרגעים והתיאום האישי</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              שקט נפשי מלא והגשמת החלום
            </h2>
            <p className="text-base theme-text-body font-normal">
              ארבעת עוגני הביטחון של נופר המבטיחים שתגיעו רגועים ומאושרים באמת.
            </p>
          </div>

          {/* 4 Trust Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'אירוע יחיד ביום',
                badge: '100% פוקוס',
                desc: 'איננו מקבלים יותר מאירוע אחד ביום. כל האנרגיה מוקדשת אך ורק לכם.',
              },
              {
                title: 'נוכחות אישית בשטח',
                badge: 'ליווי צמוד',
                desc: 'נופר נוכחת באופן אישי משעות הבוקר המוקדמות ועד סיום אחרון השירים.',
              },
              {
                title: 'שקיפות תקציבית מלאה',
                badge: 'אפס הפתעות',
                desc: 'בקרת תקציב מדויקת, חוזים ישירים מול הספקים ללא שום עלויות נסתרות.',
              },
              {
                title: 'נבחרת יוצרים מובילה',
                badge: 'השורה הראשונה',
                desc: 'עבודה בלעדית מול מעצבים, שפים, סאונדמנים וצלמים שנבחרו בקפידה.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl theme-bg-card border border-theme-gold shadow-md flex flex-col justify-between space-y-3 text-right"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] px-2.5 py-0.5 rounded-lg uppercase tracking-wider inline-block">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-serif font-bold theme-text-head">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm theme-text-body leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-theme-gold flex items-center gap-1.5 text-xs font-bold text-[#9e751d]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>התחייבות אישית בחוזה</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Quote Banner */}
          <div className="p-6 rounded-2xl theme-bg-card border border-theme-gold shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e5c158] text-[#e5c158]" />
                ))}
                <span className="text-xs font-bold font-mono text-[#9e751d] mr-2">דירוג 5.0 כוכבים</span>
              </div>
              <p className="text-sm sm:text-base theme-text-body italic font-normal">
                &quot;הבחירה בנופר הייתה ההחלטה הכי טובה שלקחנו. השקט הנפשי, הדיוק בכל פרט והחום האנושי הפכו את היום שלנו למושלם.&quot;
              </p>
              <span className="text-xs theme-text-muted font-bold block">שירה ויונתן // חתונת יוקרה בקיסריה</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() =>
                  setActiveGalleryImg({
                    src: IMAGES.wedding,
                    title: 'חתונת יוקרה חמה ורומנטית',
                    location: 'קיסריה',
                  })
                }
                className="px-4 py-2 rounded-xl theme-bg-card-subtle border border-theme-gold text-xs font-bold theme-text-head flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#9e751d]" />
                <span>צפייה בגלריה</span>
              </button>
            </div>
          </div>

          {/* Final Call to Action Centerpiece */}
          <div className="p-8 rounded-3xl theme-bg-card border-2 border-[#9e751d] shadow-2xl text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto shadow-md font-serif font-bold text-xl">
              N
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-4xl font-serif font-bold theme-text-head">
                מוכנים להפוך את החלום למציאות מרגשת?
              </h3>
              <p className="text-sm sm:text-base theme-text-body font-normal max-w-xl mx-auto">
                בואו נשב לקפה נינוח, נקשיב לציפיות שלכם ונגבש מתווה הפקה מדויק ללא שום התחייבות.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
              <a
                href={getWhatsAppUrl('תיאום שיחת היכרות אישית עם נופר')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-xl flex items-center justify-center gap-2.5 cursor-pointer transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-[#121110]" />
                <span>תיאום שיחה אישית ב-WhatsApp עם נופר</span>
              </a>

              {/* Link to Full Main Site */}
              <button
                onClick={onSwitchToFullSite}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-theme-gold theme-bg-card-subtle theme-text-head text-xs sm:text-sm font-bold hover:border-theme-gold-strong transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#9e751d]" />
                <span>מעבר לאתר הראשי המלא</span>
              </button>
            </div>

            <div className="pt-4 border-t border-theme-gold flex flex-wrap items-center justify-center gap-5 text-xs theme-text-body font-medium">
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
          <div className="text-xs font-bold theme-text-head">נופר הפקות אירועים</div>
          <div className="text-[10px] text-[#9e751d] font-semibold">לאתר הראשי ↰</div>
        </button>

        <a
          href={getWhatsAppUrl('פנייה מהירה מדף הנחיתה')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 fill-[#121110]" />
          <span>שיחה ב-WhatsApp</span>
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
      {/* FOOTER                                                        */}
      {/* ------------------------------------------------------------- */}
      <footer className="bg-[#141210] text-[#ded5cb] border-t border-theme-gold py-10 pb-20 sm:pb-10 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={onSwitchToFullSite}
              className="font-serif font-bold text-white text-base hover:text-[#e5c158] transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              נופר הפקות אירועי יוקרה
            </button>
            <span>·</span>
            <span>מגדלי עזריאלי, תל אביב</span>
            <span>·</span>
            <span>office@nofar-events.co.il</span>
          </div>
          <div className="text-stone-400">
            © 2026 כל הזכויות שמורות. בוטיק הפקות אירועי יוקרה בהתאמה אישית.
          </div>
        </div>
      </footer>

    </div>
  );
};
