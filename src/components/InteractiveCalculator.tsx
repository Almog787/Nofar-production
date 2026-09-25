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
    const activeAddonsCount = Object.values(addons).filter(Boolean).length;
    let atmosphereTier = 'יוקרה חמה ועוטפת';
    if (guests > 400) atmosphereTier = 'אירוע ענק ומרשים';
    if (guests < 150) atmosphereTier = 'אינטימיות יוקרתית';

    return {
      activeAddonsCount,
      atmosphereTier,
    };
  }, [guests, addons]);

  const handleSendConfig = () => {
    const eventNameMap = {
      wedding: 'חתונה',
      corporate: 'אירוע חברה',
      barmitzvah: 'בר/בת מצווה',
      boutique: 'מסיבת VIP'
    };
    const styleNameMap = {
      monochrome: 'זהב חם ויוקרה',
      classic: 'קלאסיקה מאופקת',
      nature: 'טבע כפרי וחמים',
      urban: 'אורבני עדכני'
    };

    const configSummary = `אפיון מתכנן עבור ${eventNameMap[eventType]} ל-${guests} אורחים בסגנון ${styleNameMap[style]} (${conceptSummary.activeAddonsCount} מרכיבים).`;
    onOpenContact?.(configSummary);
  };

  return (
    <section id="calculator" className="py-20 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-2.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>מתכנן קונספט אישי</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            הגדרת מפרט האירוע
          </h2>
          <p className="text-sm sm:text-base text-[#d8cfc4] font-light mt-3">
            בחרו את המאפיינים העיקריים לבניית קונספט מדויק לאירוע שלכם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options */}
          <div className="lg:col-span-7 space-y-6 bg-[#1c1917]/80 p-6 rounded-2xl border border-[#d4af37]/20 shadow-xl">
            
            {/* Step 1: Event Type */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-[#fdfbf7] uppercase tracking-wider">
                1. סוג האירוע
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                    className={`p-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      eventType === type.id
                        ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] border-[#e5c158] shadow-md font-bold'
                        : 'bg-[#121110] text-[#d8cfc4] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-[#fdfbf7] uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#e5c158]" />
                  <span>2. מספר אורחים</span>
                </label>
                <span className="text-base font-serif font-bold text-[#e5c158] bg-[#2a2521] px-3 py-0.5 rounded-lg border border-[#d4af37]/30 tabular-nums">
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
                className="w-full h-2 bg-[#2a2521] rounded-lg appearance-none cursor-pointer accent-[#e5c158]"
              />
              <div className="flex justify-between text-[10px] text-[#d8cfc4] font-mono">
                <span>50</span>
                <span>250</span>
                <span>500</span>
                <span>800+</span>
              </div>
            </div>

            {/* Step 3: Event Style */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-[#fdfbf7] uppercase tracking-wider">
                3. שפה עיצובית
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'monochrome', label: 'יוקרה חמה וזהובה', desc: 'תאורה רומנטית וטקסטורות עשירות' },
                  { id: 'classic', label: 'קלאסיקה מאופקת', desc: 'קווים נקיים ואלגנטיות נצחית' },
                  { id: 'urban', label: 'אורבני עדכני', desc: 'אווירה תל-אביבית מודרנית' },
                  { id: 'nature', label: 'טבע כפרי', desc: 'חיבור פתוח ועץ טבעי' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStyle(s.id as any)}
                    className={`p-3 text-right rounded-xl border transition-all cursor-pointer ${
                      style === s.id
                        ? 'bg-[#2a2521] text-[#fdfbf7] border-[#e5c158] shadow-md'
                        : 'bg-[#121110] text-[#d8cfc4] border-[#d4af37]/20 hover:border-[#d4af37]/40'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#fdfbf7]">{s.label}</div>
                    <div className="text-[10px] text-[#d8cfc4] mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Included Services */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-[#fdfbf7] uppercase tracking-wider">
                4. מרכיבי הפקה
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'catering', label: 'קולינריה עילית ובר' },
                  { id: 'design', label: 'עיצוב קונספט ופרחים' },
                  { id: 'soundLight', label: 'הגברה ותאורת אווירה' },
                  { id: 'djArtist', label: 'מוזיקה ואמנים' },
                  { id: 'photography', label: 'צילום ותיעוד' },
                  { id: 'dayOfManagement', label: 'ניהול האירוע בשטח' },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      addons[addon.id]
                        ? 'bg-[#2a2521] text-[#fdfbf7] border-[#e5c158]'
                        : 'bg-[#121110] text-[#d8cfc4] border-[#d4af37]/20 opacity-60'
                    }`}
                  >
                    <span>{addon.label}</span>
                    <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                      addons[addon.id] ? 'bg-[#e5c158] text-[#121110] border-[#e5c158]' : 'border-[#d4af37]/30'
                    }`}>
                      {addons[addon.id] && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-2xl glass-panel border border-[#d4af37]/30 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
                <span className="text-[11px] uppercase font-mono tracking-wider text-[#e5c158]">
                  סיכום מפרט
                </span>
                <span className="text-[11px] text-[#e5c158] bg-[#2a2521] px-2.5 py-0.5 rounded border border-[#d4af37]/30">
                  התאמה אישית
                </span>
              </div>

              {/* Concept Summary */}
              <div className="space-y-1.5 py-1 text-center">
                <div className="text-xs text-[#d8cfc4]">אווירת האירוע המתוכננת:</div>
                <div className="text-xl font-serif font-bold text-[#fdfbf7]">
                  {conceptSummary.atmosphereTier}
                </div>
                <div className="text-xs text-[#e5c158] bg-[#121110] p-2.5 rounded-lg border border-[#d4af37]/20 mt-2">
                  נבחרו {conceptSummary.activeAddonsCount} מרכיבי הפקה
                </div>
              </div>

              {/* Summary lines */}
              <div className="space-y-2 pt-3 border-t border-[#d4af37]/20 text-xs text-[#d8cfc4]">
                <div className="flex justify-between">
                  <span>סוג אירוע:</span>
                  <span className="font-semibold text-[#fdfbf7]">
                    {eventType === 'wedding' && 'חתונה'}
                    {eventType === 'corporate' && 'אירוע חברה'}
                    {eventType === 'barmitzvah' && 'בר/בת מצווה'}
                    {eventType === 'boutique' && 'מסיבת VIP'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>אורחים:</span>
                  <span className="font-semibold text-[#fdfbf7]">{guests}</span>
                </div>

                <div className="flex justify-between">
                  <span>סגנון:</span>
                  <span className="font-semibold text-[#fdfbf7]">
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
                className="w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <MessageSquare className="w-4 h-4 fill-[#121110]" />
                <span>שליחת המפרט ותיאום ב-WhatsApp</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#e5c158] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>פגישת אפיון ללא שום התחייבות</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
