import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Users,
  MessageSquare,
  ArrowLeft,
  ChevronDown,
  Star,
  Quote,
  Maximize2,
  X,
  Compass,
  ArrowUpRight,
  Clock,
  Award,
  Sun,
  Volume2,
  Utensils,
  Music,
  MapPin,
  Lock,
  ArrowDown,
  Check,
} from 'lucide-react';
import { IMAGES, EVENT_TYPES, TESTIMONIALS, FAQ_ITEMS } from '../data/eventData';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface LandingPageProps {
  onSwitchToFullSite: () => void;
}

const JOURNEY_STATIONS = [
  { id: 'station-0', num: '00', label: 'שער הפתיחה' },
  { id: 'station-1', num: '01', label: 'זרימת החלל' },
  { id: 'station-2', num: '02', label: 'מתכנן מפרט' },
  { id: 'station-3', num: '03', label: 'רגעים ועדויות' },
  { id: 'station-4', num: '04', label: 'עוגני השקט' },
  { id: 'station-5', num: '05', label: 'תיאום אישי' },
];

export const LandingPage: React.FC<LandingPageProps> = ({ onSwitchToFullSite }) => {
  // Active Station Tracking
  const [activeStation, setActiveStation] = useState('station-0');

  // Quick Lead Form State
  const [leadData, setLeadData] = useState({
    fullName: '',
    eventType: 'חתונה',
    guests: '200-350',
    eventDate: '',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Concept Selector state in landing page
  const [selectedType, setSelectedType] = useState('wedding');
  const [selectedGuests, setSelectedGuests] = useState(250);
  const [selectedStyle, setSelectedStyle] = useState('זהב ושמפניה חמה');
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: boolean }>({
    catering: true,
    design: true,
    soundLight: true,
    dayOfManagement: true,
  });

  // Lightbox modal state
  const [activeGalleryImg, setActiveGalleryImg] = useState<{
    src: string;
    title: string;
    location: string;
  } | null>(null);

  // FAQ open index
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(0);

  // Track active station on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      JOURNEY_STATIONS.forEach((st) => {
        const el = document.getElementById(st.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveStation(st.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStation = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `היי נופר, הגעתי מדף המסע הקצר. שמי ${leadData.fullName}. אשמח לבדוק זמינות עבור ${leadData.eventType} (${leadData.guests} מוזמנים${leadData.eventDate ? `, תאריך משוער: ${leadData.eventDate}` : ''}). ${leadData.notes ? `פרטים נוספים: ${leadData.notes}` : ''}`;
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
    const activeAddonsList = Object.keys(selectedAddons).filter((k) => selectedAddons[k]);
    const msg = `היי נופר, בניתי מפרט במסע הקצר עבור ${typeLabel} ל-${selectedGuests} מוזמנים בסגנון ${selectedStyle} (${activeAddonsList.length} מרכיבים). אשמח לתאם שיחת היכרות ולבדוק תאריכים פנויים.`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen theme-bg-page theme-text-body font-sans relative selection:bg-[#e5c158] selection:text-[#121110]">
      
      {/* ------------------------------------------------------------- */}
      {/* HEADER & TOP CONTROLS                                         */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-theme-gold py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#e5c158] text-[#121110] flex items-center justify-center font-serif font-bold text-xl shadow-md">
              N
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold theme-text-head uppercase tracking-wider block leading-none">
                נופר <span className="font-light text-[#9e751d]">| הפקות אירועים</span>
              </span>
              <span className="text-[11px] font-semibold text-[#9e751d] uppercase font-mono hidden sm:block mt-1">
                מסע קצר לאירוע מושלם
              </span>
            </div>
          </div>

          {/* Station Quick Tracker in Header (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full theme-bg-card border border-theme-gold shadow-xs text-xs font-bold">
            {JOURNEY_STATIONS.map((st) => (
              <button
                key={st.id}
                onClick={() => scrollToStation(st.id)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeStation === st.id
                    ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] font-bold shadow-xs'
                    : 'theme-text-muted hover:theme-text-head hover:bg-theme-card-subtle'
                }`}
              >
                <span className="font-mono text-[10px]">{st.num}</span>
                <span>{st.label}</span>
              </button>
            ))}
          </nav>

          {/* Actions: Switch to Full Site & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onSwitchToFullSite}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl border border-theme-gold theme-bg-card theme-text-head text-xs sm:text-sm font-bold hover:border-theme-gold-strong transition-all cursor-pointer shadow-xs"
              title="מעבר לסיור המלא באתר"
            >
              <Compass className="w-4 h-4 text-[#9e751d]" />
              <span className="hidden md:inline">האתר המלא</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9e751d]" />
            </button>

            <a
              href={getWhatsAppUrl('פנייה מהירה ממסע דף הנחיתה')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#121110]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* FLOATING JOURNEY PROGRESS RIBBON (STICKY ON DESKTOP/TABLET)   */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-40 items-center gap-2 p-2 rounded-full theme-bg-card backdrop-blur-xl border-2 border-theme-gold shadow-2xl">
        <span className="text-xs font-mono font-bold text-[#9e751d] px-2.5">
          מסע קצר //
        </span>
        {JOURNEY_STATIONS.map((st) => (
          <button
            key={st.id}
            onClick={() => scrollToStation(st.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeStation === st.id
                ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md scale-105'
                : 'theme-text-muted hover:theme-text-head hover:bg-theme-card-subtle'
            }`}
          >
            <span className="font-mono text-[10px]">{st.num}</span>
            <span>{st.label}</span>
          </button>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* STATION 00: שער הפתיחה והחזון                                 */}
      {/* ------------------------------------------------------------- */}
      <section id="station-0" className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-theme-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Right Column: Hero Proposition */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-bg-card border border-theme-gold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#9e751d] animate-ping" />
                <span className="text-xs sm:text-sm font-bold theme-text-head">
                  תחנה 00 // שער הפתיחה · שריון תאריכים ל-2026-2027
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight theme-text-head leading-[1.14]">
                אירוע של פעם בחיים. <br />
                <span className="text-[#9e751d]">
                  דיוק מופתי, חום אנושי ושקט נפשי מלא.
                </span>
              </h1>

              <p className="text-base sm:text-xl theme-text-body font-normal leading-relaxed max-w-2xl">
                תכנון, עיצוב והפקה אישית של חתונות ואירועי יוקרה. אנו מזמינים אתכם למסע קצר וממוקד בן 5 תחנות להגדרת החזון המושלם שלכם.
              </p>

              {/* Scarcity Standards Bullet Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">1</div>
                  <div className="text-sm font-bold theme-text-head mt-1">אירוע יחיד ביום</div>
                  <div className="text-xs theme-text-muted">100% פוקוס עליכם</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">עד 2</div>
                  <div className="text-sm font-bold theme-text-head mt-1">אירועים בחודש</div>
                  <div className="text-xs theme-text-muted">בוטיק ללא פס ייצור</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">100%</div>
                  <div className="text-sm font-bold theme-text-head mt-1">נוכחות אישית</div>
                  <div className="text-xs theme-text-muted">של נופר בשטח</div>
                </div>

                <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold shadow-xs text-center">
                  <div className="text-3xl font-serif font-bold text-[#9e751d]">0</div>
                  <div className="text-sm font-bold theme-text-head mt-1">הפתעות בתקציב</div>
                  <div className="text-xs theme-text-muted">שקיפות מוחלטת</div>
                </div>
              </div>

              {/* Jump to Journey CTA */}
              <div className="pt-2">
                <button
                  onClick={() => scrollToStation('station-1')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#9e751d] hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <span>התחילו את המסע הקצר</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>

            </div>

            {/* Left Column: Direct Fast Availability Lead Card */}
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
                        <span className="px-2 py-0.5 rounded-full bg-[#e5c158]/30 text-[#785611] text-xs font-bold">
                          ללא התחייבות
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold theme-text-head mt-1">
                        בדיקת תאריך פנוי ושיחה עם נופר
                      </h3>
                      <p className="text-xs sm:text-sm theme-text-muted mt-1">
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

      {/* ------------------------------------------------------------- */}
      {/* STATION 01: זרימת החלל והאווירה (מסע החלל המקוצר)              */}
      {/* ------------------------------------------------------------- */}
      <section id="station-1" className="py-20 theme-bg-section border-b border-theme-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-3">
              <Compass className="w-4 h-4" />
              <span>תחנה 01 // ארכיטקטורה, תאורה וסאונד</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              זרימה מושלמת בין רגעי השיא
            </h2>
            <p className="text-base theme-text-body mt-3">
              אירוע יוקרה נמדד במעברים הרמוניים, תאורת אווירה מבוקרת ואקוסטיקה שמאפשרת שיחה אינטימית לצד מסיבה עוצמתית.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step A: Reception */}
            <div className="p-7 rounded-3xl theme-bg-card border border-theme-gold shadow-xl flex flex-col justify-between space-y-5 text-right relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-theme-gold pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl theme-bg-card-subtle flex items-center justify-center text-[#9e751d] font-bold">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#9e751d]">מתחם 01</span>
                      <h3 className="text-lg font-serif font-bold theme-text-head">קבלת פנים ומפגש ראשוני</h3>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-[#9e751d] font-mono theme-bg-card-subtle px-3 py-1 rounded-lg border border-theme-gold font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>19:00 - 20:15 // מעבר שקיעה</span>
                </div>

                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  הרושם הראשוני. גווני אמבר חמים (2700K), עמדות שף חיות ללא שום תורים, סאונד מבוקר (עד 68dB) וקוקטייל פתיחה אישי.
                </p>
              </div>

              <div className="pt-3 border-t border-theme-gold text-xs font-bold text-[#9e751d] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>זרימה פתוחה ואווירה עוטפת</span>
              </div>
            </div>

            {/* Step B: The Ceremony / Chuppah */}
            <div className="p-7 rounded-3xl theme-bg-card border-2 border-[#9e751d] shadow-2xl flex flex-col justify-between space-y-5 text-right relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-theme-gold pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#e5c158] flex items-center justify-center text-[#121110] font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#9e751d]">מתחם 02</span>
                      <h3 className="text-lg font-serif font-bold theme-text-head">טקס החופה ומוקד המעמד</h3>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-[#9e751d] font-mono theme-bg-card-subtle px-3 py-1 rounded-lg border border-theme-gold font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>20:30 - 21:00 // שיא הרגש</span>
                </div>

                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  מרכז הכובד הרגשי. אלומות אור רכות ומחמיאות לצילום ללא צללים חדים, מערך הגברה צלול שבו כל מילה נשמעת בבהירות.
                </p>
              </div>

              <div className="pt-3 border-t border-theme-gold text-xs font-bold text-[#9e751d] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>סדר מופתי בכניסה ואפס הסחות דעת</span>
              </div>
            </div>

            {/* Step C: Dinner & Party */}
            <div className="p-7 rounded-3xl theme-bg-card border border-theme-gold shadow-xl flex flex-col justify-between space-y-5 text-right relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-theme-gold pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl theme-bg-card-subtle flex items-center justify-center text-[#9e751d] font-bold">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#9e751d]">מתחם 03</span>
                      <h3 className="text-lg font-serif font-bold theme-text-head">סעודת שף ורחבת ריקודים</h3>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-[#9e751d] font-mono theme-bg-card-subtle px-3 py-1 rounded-lg border border-theme-gold font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>21:00 ועד אחרון האורחים</span>
                </div>

                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  החגיגה בשיאה. הפרדה אקוסטית חכמה המאפשרת שיחה נינוחה בשולחנות לצד סאונד מועדוני מחשמל ברחבה ללא הגבלת שעה.
                </p>
              </div>

              <div className="pt-3 border-t border-theme-gold text-xs font-bold text-[#9e751d] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>זרימה מושלמת וללא לחץ זמן</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATION 02: מתכנן המפרט האישי (INTERACTIVE GENERATOR)         */}
      {/* ------------------------------------------------------------- */}
      <section id="station-2" className="py-20 theme-bg-page border-b border-theme-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>תחנה 02 // אפיון המפרט שלכם ב-3 צעדים</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              התאמת שפת האירוע
            </h2>
            <p className="text-base theme-text-body mt-3">
              הגדירו את המאפיינים העיקריים שלכם וקבלו מתווה ראשוני מיידית.
            </p>
          </div>

          <div className="max-w-4xl mx-auto p-6 sm:p-9 rounded-3xl theme-bg-card border border-theme-gold shadow-2xl space-y-8">
            
            {/* Step 1: Type */}
            <div className="space-y-3">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider text-right">
                1. סוג האירוע המבוקש
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'wedding', label: 'חתונת יוקרה' },
                  { id: 'corporate', label: 'אירוע חברה / כנס' },
                  { id: 'boutique', label: 'מסיבת VIP פרטית' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedType(item.id)}
                    className={`p-3.5 rounded-2xl text-sm font-bold border transition-all cursor-pointer ${
                      selectedType === item.id
                        ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#9e751d] shadow-md'
                        : 'theme-bg-card-subtle theme-text-head border-theme-gold hover:border-theme-gold-strong'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guests Slider */}
            <div className="space-y-3 text-right">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold theme-text-head uppercase tracking-wider">
                  2. מספר מוזמנים משוער
                </span>
                <span className="text-base font-serif font-bold text-[#9e751d] theme-bg-card-subtle px-4 py-1 rounded-xl border border-theme-gold">
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

            {/* Step 3: Style */}
            <div className="space-y-3 text-right">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                3. שפה עיצובית ואווירה
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'זהב ושמפניה חמה', desc: 'תאורת אמבר רומנטית, נרות ונקיון אסתטי' },
                  { label: 'טבע כפרי יוקרתי', desc: 'מרחב פתוח, פרחים אורגניים וריהוט עץ עשיר' },
                  { label: 'אורבני מודרני מחשמל', desc: 'במה דיגיטלית, תאורת מסיבה וקוקטיילים' },
                ].map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedStyle(s.label)}
                    className={`p-4 rounded-2xl text-right border transition-all cursor-pointer ${
                      selectedStyle === s.label
                        ? 'border-[#9e751d] bg-[#e5c158]/25 shadow-sm'
                        : 'theme-bg-card-subtle border-theme-gold hover:border-theme-gold-strong'
                    }`}
                  >
                    <div className="font-bold text-sm theme-text-head">{s.label}</div>
                    <div className="text-xs theme-text-muted mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Addons Checklist */}
            <div className="space-y-3 text-right">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                4. מרכיבי הפקה מבוקשים
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'catering', label: 'קייטרינג שף ובר' },
                  { id: 'design', label: 'עיצוב חלל ופרחים' },
                  { id: 'soundLight', label: 'הגברה ותאורה' },
                  { id: 'dayOfManagement', label: 'ניהול אירוע בשטח' },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className="p-3 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-between transition-all cursor-pointer text-right"
                  >
                    <span className="text-xs sm:text-sm theme-text-head font-medium">{addon.label}</span>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      selectedAddons[addon.id] ? 'bg-[#9e751d] text-white border-transparent' : 'border-neutral-400'
                    }`}>
                      {selectedAddons[addon.id] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Output Box */}
            <div className="pt-4 border-t border-theme-gold flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-right space-y-0.5">
                <span className="text-sm font-bold theme-text-head block">
                  המפרט מוכן להעברה ישירה
                </span>
                <span className="text-xs theme-text-muted">
                  בלחיצה אחת נשלח את המפרט ישירות ל-WhatsApp של נופר.
                </span>
              </div>

              <button
                onClick={handleConceptSubmit}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-[#121110]" />
                <span>שליחת המפרט ל-WhatsApp</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATION 03: חתימת ההפקות והרגעים (GALLERY & TESTIMONIALS)      */}
      {/* ------------------------------------------------------------- */}
      <section id="station-3" className="py-20 theme-bg-section border-b border-theme-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-3">
              <Star className="w-4 h-4" />
              <span>תחנה 03 // רגעים שהפכו למציאות</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              הצצה להפקות ולחוויות
            </h2>
            <p className="text-base theme-text-body mt-3">
              שילוב של עיצוב מופתי, חום אנושי ותשבוחות מכל אורח ואורחת.
            </p>
          </div>

          {/* Gallery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
            {[
              {
                src: IMAGES.wedding,
                title: 'חתונת יוקרה חמה ורומנטית',
                location: 'אריאה, קיסריה',
              },
              {
                src: IMAGES.corporate,
                title: 'ערב גאלה והשקה יוקרתית',
                location: 'האנגר 11, תל אביב',
              },
              {
                src: IMAGES.boutique,
                title: 'מסיבת קוקטייל VIP בוילה פרטית',
                location: 'סביון',
              },
              {
                src: IMAGES.hero,
                title: 'קבלת פנים חמה תחת כיפת השמיים',
                location: 'חוות רונית',
              },
            ].map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveGalleryImg(img)}
                className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-theme-gold shadow-xl cursor-pointer bg-neutral-900"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                
                <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
                  <div className="text-right space-y-1">
                    <span className="text-xs font-mono font-bold text-[#f5d77f] block">
                      {img.location}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {img.title}
                    </h3>
                  </div>

                  <div className="w-11 h-11 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors shadow-lg shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quotes from couples and clients */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-3xl theme-bg-card border border-theme-gold shadow-xl flex flex-col justify-between space-y-5 text-right relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#e5c158] text-[#e5c158]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base theme-text-body italic leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-gold flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold theme-text-head">{t.name}</h4>
                    <span className="text-xs theme-text-muted">{t.role}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#9e751d]">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATION 04: עוגני השקט הנפשי (4 GUARANTEES & METHODOLOGY)      */}
      {/* ------------------------------------------------------------- */}
      <section id="station-4" className="py-20 theme-bg-page border-b border-theme-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card border border-theme-gold text-xs font-bold text-[#9e751d] mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>תחנה 04 // שקט נפשי מלא</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head">
              ארבעת עוגני הביטחון שלכם
            </h2>
            <p className="text-base theme-text-body mt-3">
              המחויבות האישית של נופר מבטיחה שתוכלו להגיע ביום האירוע רגועים ומאושרים באמת.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'אירוע יחיד ביום',
                badge: '100% פוקוס',
                desc: 'איננו מקבלים יותר מאירוע אחד ביום. כל תשומת הלב והאנרגיה מוקדשות אך ורק לכם.',
              },
              {
                title: 'נוכחות אישית בשטח',
                badge: 'ליווי צמוד',
                desc: 'נופר נוכחת באופן אישי משעות הבוקר המוקדמות ועד סיום אחרון השירים בלילה.',
              },
              {
                title: 'שקיפות תקציבית מלאה',
                badge: 'אפס הפתעות',
                desc: 'בקרת תקציב מדויקת, חוזים ישירים מול הספקים ללא שום עלויות נסתרות או הפתעות.',
              },
              {
                title: 'נבחרת ספקים מובילה',
                badge: 'השורה הראשונה',
                desc: 'עבודה בלעדית מול מעצבים, שפים, אנשי סאונד וצלמים שנבחרו בקפידה ללא פשרות.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl theme-bg-card border border-theme-gold shadow-xl flex flex-col justify-between space-y-4 text-right"
              >
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] px-3 py-1 rounded-lg uppercase tracking-wider inline-block">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-serif font-bold theme-text-head">
                    {item.title}
                  </h3>
                  <p className="text-sm theme-text-body leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-theme-gold flex items-center gap-2 text-xs font-bold text-[#9e751d]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>התחייבות אישית בחוזה</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STATION 05: שער ההגשמה והתיאום האישי                           */}
      {/* ------------------------------------------------------------- */}
      <section id="station-5" className="py-24 theme-bg-section relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-bg-card border border-theme-gold shadow-xs">
            <Sparkles className="w-4 h-4 text-[#9e751d]" />
            <span className="text-xs sm:text-sm font-bold theme-text-head">
              תחנה 05 // שער ההגשמה · פגישת אפיון ראשונית
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head leading-tight">
              מוכנים להתחיל את המסע יחד?
            </h2>
            <p className="text-base sm:text-xl theme-text-body max-w-xl mx-auto font-normal">
              בואו נשב לקפה נינוח, נקשיב לחלום שלכם ונגבש מתווה הפקה מדויק.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות אישית עם נופר')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 text-base font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-xl flex items-center justify-center gap-2.5 cursor-pointer transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-[#121110]" />
              <span>תיאום שיחה ב-WhatsApp עכשיו</span>
            </a>

            <button
              onClick={onSwitchToFullSite}
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-theme-gold theme-bg-card theme-text-head text-sm font-bold hover:border-theme-gold-strong transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <Compass className="w-4 h-4 text-[#9e751d]" />
              <span>מעבר לסיור המלא באתר</span>
            </button>
          </div>

          {/* Direct Studio Details Pill */}
          <div className="pt-6 border-t border-theme-gold flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm theme-text-body font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9e751d]" />
              <span>סטודיו: מגדלי עזריאלי, תל אביב</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#9e751d]" />
              <span>ערוץ ישיר ומאובטח · ללא ספאם</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* STICKY MOBILE CONVERSION BAR                                  */}
      {/* ------------------------------------------------------------- */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-card)] border-t border-theme-gold p-3 shadow-2xl flex items-center justify-between gap-2.5 backdrop-blur-lg">
        <div className="text-right">
          <div className="text-xs font-bold theme-text-head">נופר הפקות אירועים</div>
          <div className="text-[10px] text-[#9e751d] font-semibold">מסע קצר · מענה ישיר</div>
        </div>

        <a
          href={getWhatsAppUrl('פנייה מהירה ממסע המובייל')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4 fill-[#121110]" />
          <span>שיחה ב-WhatsApp עכשיו</span>
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
          <div className="flex items-center justify-center gap-2">
            <span className="font-serif font-bold text-white text-base">נופר הפקות אירועי יוקרה</span>
            <span>·</span>
            <span>מגדלי עזריאלי, תל אביב</span>
            <span>·</span>
            <span>office@nofar-events.co.il</span>
          </div>
          <div className="text-stone-400">
            © 2026 כל הזכויות שמורות. בוטיק אירועים אקסקלוסיבי.
          </div>
        </div>
      </footer>

    </div>
  );
};
