import React, { useState, useMemo } from 'react';
import { Users, Check, ArrowLeft, Sliders, ShieldCheck, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface InteractiveCalculatorProps {
  onOpenContact?: (customSubject?: string) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onOpenContact }) => {
  const [eventType, setEventType] = useState<'wedding' | 'corporate' | 'barmitzvah' | 'boutique'>('wedding');
  const [guests, setGuests] = useState<number>(250);
  const [style, setStyle] = useState<'monochrome' | 'classic' | 'nature' | 'urban'>('monochrome');
  
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    catering: true,
    design: true,
    soundLight: true,
    djArtist: true,
    photography: true,
    dayOfManagement: true,
  });

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const conceptSummary = useMemo(() => {
    const activeCount = Object.values(addons).filter(Boolean).length;
    let atmosphereTier = 'אירוע בוטיק מוקפד';
    if (activeCount >= 5) atmosphereTier = 'הפקה מלכותית מלאה (Haute Couture)';
    else if (activeCount >= 3) atmosphereTier = 'אירוע יוקרה מותאם אישית';

    return {
      activeAddonsCount: activeCount,
      atmosphereTier,
    };
  }, [addons]);

  return (
    <section id="calculator" className="py-24 theme-bg-section-alt relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sliders className="w-4 h-4" />
            <span>מתכנן קונספט אישי</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            הגדרת מפרט האירוע
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
            בחרו את המאפיינים העיקריים לבניית קונספט מדויק לאירוע שלכם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options */}
          <div className="lg:col-span-7 space-y-7 theme-bg-card p-6 sm:p-8 rounded-3xl border border-theme-gold theme-shadow-warm">
            
            {/* Step 1: Event Type */}
            <div className="space-y-3">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                1. סוג האירוע
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'wedding', label: 'חתונה' },
                  { id: 'corporate', label: 'אירוע חברה' },
                  { id: 'barmitzvah', label: 'בר/בת מצווה' },
                  { id: 'boutique', label: 'מסיבת VIP' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setEventType(type.id as any)}
                    className={`p-3 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                      eventType === type.id
                        ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#c5a059] shadow-md'
                        : 'theme-bg-card-subtle theme-text-head border-theme-gold hover:border-theme-gold-strong'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold theme-text-head uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158]" />
                  <span>2. מספר אורחים</span>
                </label>
                <span className="text-base font-serif font-bold text-[#9e751d] dark:text-[#e5c158] theme-bg-card-subtle px-3.5 py-1 rounded-xl border border-theme-gold tabular-nums shadow-xs">
                  {guests} אורחים
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="25"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-300 dark:bg-[#2a2521] rounded-lg appearance-none cursor-pointer accent-[#9e751d] dark:accent-[#e5c158]"
              />
              <div className="flex justify-between text-xs theme-text-body font-mono font-semibold">
                <span>50</span>
                <span>250</span>
                <span>500</span>
                <span>800+</span>
              </div>
            </div>

            {/* Step 3: Aesthetic Style */}
            <div className="space-y-3">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                3. שפה עיצובית
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'monochrome', label: 'יוקרה חמה וזהובה', desc: 'גווני שמפניה, אמבר ותאורה אינטימית' },
                  { id: 'classic', label: 'קלאסיקה מאופקת', desc: 'קווים נקיים, אלגנטיות נצחית' },
                  { id: 'urban', label: 'אורבני עכשווי', desc: 'שילוב חומרים גולמיים ומודרניים' },
                  { id: 'nature', label: 'טבע כפרי וחמים', desc: 'אלמנטים אורגניים ומרחב פתוח' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStyle(s.id as any)}
                    className={`p-3.5 text-right rounded-2xl border transition-all cursor-pointer ${
                      style === s.id
                        ? 'border-[#9e751d] dark:border-[#e5c158] bg-[#e5c158]/20 shadow-sm'
                        : 'theme-bg-card-subtle border-theme-gold hover:border-theme-gold-strong'
                    }`}
                  >
                    <span className="block text-sm font-bold theme-text-head">{s.label}</span>
                    <span className="text-xs theme-text-body font-normal block mt-1">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Addons Checklist */}
            <div className="space-y-3">
              <label className="block text-sm font-bold theme-text-head uppercase tracking-wider">
                4. מרכיבי ההפקה המבוקשים
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'catering', label: 'קייטרינג שף ובר פרימיום' },
                  { id: 'design', label: 'עיצוב חלל, סידורי פרחים וטקסטיל' },
                  { id: 'soundLight', label: 'הגברה חכמה ותאורת אווירה ממוחשבת' },
                  { id: 'djArtist', label: 'ניהול מוזיקלי, הרכבים חיים ו-DJ' },
                  { id: 'photography', label: 'צוות צילום סטילס ווידאו קולנועי' },
                  { id: 'dayOfManagement', label: 'ניהול אירוע מלא בשטח מבוקר עד ליל' },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className="p-3 rounded-xl theme-bg-card-subtle border border-theme-gold hover:border-theme-gold-strong flex items-center justify-between transition-all cursor-pointer text-right"
                  >
                    <span className="text-sm theme-text-head font-medium">{addon.label}</span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      addons[addon.id] ? 'bg-[#9e751d] dark:bg-[#e5c158] text-white dark:text-[#121110] border-transparent shadow-xs' : 'border-neutral-400 dark:border-[#d4af37]/40'
                    }`}>
                      {addons[addon.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 rounded-3xl theme-bg-card border border-theme-gold theme-shadow-warm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

              <div className="flex items-center justify-between border-b border-theme-gold pb-3.5">
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#9e751d] dark:text-[#e5c158]">
                  סיכום מפרט
                </span>
                <span className="text-xs text-[#9e751d] dark:text-[#e5c158] theme-bg-card-subtle px-3 py-1 rounded-lg border border-theme-gold font-bold">
                  התאמה אישית
                </span>
              </div>

              {/* Concept Summary */}
              <div className="space-y-2 py-1 text-center">
                <div className="text-xs sm:text-sm theme-text-muted font-medium">אווירת האירוע המתוכננת:</div>
                <div className="text-xl sm:text-2xl font-serif font-bold theme-text-head">
                  {conceptSummary.atmosphereTier}
                </div>
                <div className="text-xs sm:text-sm text-[#9e751d] dark:text-[#e5c158] theme-bg-card-subtle p-3 rounded-xl border border-theme-gold mt-2 font-bold">
                  נבחרו {conceptSummary.activeAddonsCount} מרכיבי הפקה
                </div>
              </div>

              {/* Summary lines */}
              <div className="space-y-2.5 pt-3 border-t border-theme-gold text-sm theme-text-body">
                <div className="flex justify-between">
                  <span className="text-theme-muted">סוג אירוע:</span>
                  <span className="font-bold theme-text-head">
                    {eventType === 'wedding' && 'חתונה'}
                    {eventType === 'corporate' && 'אירוע חברה'}
                    {eventType === 'barmitzvah' && 'בר/בת מצווה'}
                    {eventType === 'boutique' && 'מסיבת VIP'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-theme-muted">אורחים:</span>
                  <span className="font-bold theme-text-head">{guests}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-theme-muted">סגנון:</span>
                  <span className="font-bold theme-text-head">
                    {style === 'monochrome' && 'יוקרה חמה וזהובה'}
                    {style === 'classic' && 'קלאסיקה מאופקת'}
                    {style === 'urban' && 'אורבני עדכני'}
                    {style === 'nature' && 'טבע כפרי'}
                  </span>
                </div>
              </div>

              {/* Submit Action */}
              <a
                href={getWhatsAppUrl(
                  `אפיון מתכנן עבור ${
                    eventType === 'wedding'
                      ? 'חתונה'
                      : eventType === 'corporate'
                      ? 'אירוע חברה'
                      : eventType === 'barmitzvah'
                      ? 'בר/בת מצווה'
                      : 'מסיבת VIP'
                  } ל-${guests} אורחים בסגנון ${
                    style === 'monochrome'
                      ? 'יוקרה חמה וזהובה'
                      : style === 'classic'
                      ? 'קלאסיקה מאופקת'
                      : style === 'urban'
                      ? 'אורבני עדכני'
                      : 'טבע כפרי'
                  } (${conceptSummary.activeAddonsCount} מרכיבים)`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <MessageSquare className="w-4 h-4 fill-[#121110]" />
                <span>שליחת המפרט ותיאום ב-WhatsApp</span>
                <ArrowLeft className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#9e751d] dark:text-[#e5c158] pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>פגישת אפיון ללא שום התחייבות</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
