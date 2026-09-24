import React, { useState, useMemo } from 'react';
import { Sparkles, Users, Check, ArrowLeft, Sliders, ShieldCheck, HeartHandshake } from 'lucide-react';

interface InteractiveCalculatorProps {
  onOpenContact: (customSubject?: string) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onOpenContact }) => {
  const [eventType, setEventType] = useState<'wedding' | 'corporate' | 'barmitzvah' | 'boutique'>('wedding');
  const [guests, setGuests] = useState<number>(250);
  const [style, setStyle] = useState<'monochrome' | 'classic' | 'nature' | 'urban'>('monochrome');
  
  // Selected add-ons
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
    let atmosphereTier = 'יוקרתית, חמה ועוטפת';
    if (guests > 400) atmosphereTier = 'אירוע ענק, מרשים ועוצמתי';
    if (guests < 150) atmosphereTier = 'אירוע בוטיק אינטימי ומרגש';

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
      boutique: 'מסיבת VIP פרטית'
    };
    const styleNameMap = {
      monochrome: 'יוקרה חמה וזהובה',
      classic: 'קלאסיקה אלגנטית',
      nature: 'טבע כפרי וחמים',
      urban: 'אורבני מודרני'
    };

    const configSummary = `בדיקת מפרט במתכנן האירוע עבור ${eventNameMap[eventType]} ל-${guests} אורחים בסגנון ${styleNameMap[style]}. אריזת שירותים: ${conceptSummary.activeAddonsCount} מרכיבים נבחרים.`;
    onOpenContact(configSummary);
  };

  return (
    <section id="calculator" className="py-24 bg-[#121110] relative border-t border-[#d4af37]/20">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>מתכנן הקונספט והחוויה</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            תכנון מפרט האירוע האישי שלכם
          </h2>
          <p className="text-base sm:text-lg text-[#d8cfc4] font-light mt-4">
            בחרו את המרכיבים והסגנון המועדף עליכם לבניית קונספט אירוע מושלם ומותאם אישית.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Options (8 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#1c1917]/80 p-6 sm:p-8 rounded-2xl border border-[#d4af37]/20 shadow-xl">
            
            {/* Step 1: Event Type */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#fdfbf7]">
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
                    className={`p-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
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
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#fdfbf7] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#e5c158]" />
                  <span>2. מספר אורחים מוערך</span>
                </label>
                <span className="text-lg font-serif font-bold text-[#e5c158] bg-[#2a2521] px-3.5 py-1 rounded-lg border border-[#d4af37]/30 tabular-nums">
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
              <div className="flex justify-between text-[11px] text-[#d8cfc4] font-mono">
                <span>50</span>
                <span>250</span>
                <span>500</span>
                <span>800+</span>
              </div>
            </div>

            {/* Step 3: Event Style */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#fdfbf7]">
                3. קונספט ועיצוב מועדף
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'monochrome', label: 'יוקרה חמה וזהובה', desc: 'תאורה זהובה, אסתטיקה עוטפת ודרמטית' },
                  { id: 'classic', label: 'קלאסיקה אלגנטית', desc: 'גוונים נקיים, קריסטל ואינטימיות' },
                  { id: 'urban', label: 'אורבני מודרני', desc: 'בטון חשוף, ניאון ואווירה תל אביבית' },
                  { id: 'nature', label: 'טבע כפרי וחמים', desc: 'צמחיה עשירה, עץ מלא ותאורה רכה' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStyle(s.id as any)}
                    className={`p-3.5 text-right rounded-xl border transition-all cursor-pointer ${
                      style === s.id
                        ? 'bg-[#2a2521] text-[#fdfbf7] border-[#e5c158] shadow-lg'
                        : 'bg-[#121110] text-[#d8cfc4] border-[#d4af37]/20 hover:border-[#d4af37]/40'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#fdfbf7] mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-[#d8cfc4]">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Included Services Addons */}
            <div className="space-y-3 pt-2">
              <label className="block text-sm font-bold text-[#fdfbf7]">
                4. שירותים ומרכיבים מבוקשים
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'catering', label: 'קייטרינג שף & בר קוקטיילים' },
                  { id: 'design', label: 'עיצוב קונספט מלא & פרחים' },
                  { id: 'soundLight', label: 'מערכות הגברה ותאורת אווירה חמה' },
                  { id: 'djArtist', label: 'דיג\'יי מוביל & אמנים אורחים' },
                  { id: 'photography', label: 'צוות צילום סטילס & וידאו 4K' },
                  { id: 'dayOfManagement', label: 'ניהול וצוות מפיקים ביום האירוע' },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                      addons[addon.id]
                        ? 'bg-[#2a2521] text-[#fdfbf7] border-[#e5c158]'
                        : 'bg-[#121110] text-[#d8cfc4] border-[#d4af37]/20 opacity-60'
                    }`}
                  >
                    <span>{addon.label}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                      addons[addon.id] ? 'bg-[#e5c158] text-[#121110] border-[#e5c158]' : 'border-[#d4af37]/30'
                    }`}>
                      {addons[addon.id] && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Box (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-8 rounded-2xl glass-panel border border-[#d4af37]/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-[#e5c158]">
                  סיכום מפרט הקונספט
                </span>
                <span className="text-xs text-[#e5c158] bg-[#2a2521] px-2.5 py-1 rounded border border-[#d4af37]/30">
                  התאמה אישית מלאה
                </span>
              </div>

              {/* Display Concept Summary */}
              <div className="space-y-3 py-2 text-center">
                <div className="text-xs text-[#d8cfc4]">אווירת האירוע המתוכננת:</div>
                <div className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  {conceptSummary.atmosphereTier}
                </div>
                <div className="text-xs text-[#e5c158] bg-[#121110] p-3 rounded-lg border border-[#d4af37]/20 mt-2">
                  מעטפת הפקה מלאה הכוללת {conceptSummary.activeAddonsCount} מרכיבי פרימיום
                </div>
              </div>

              {/* Breakdown Summary */}
              <div className="space-y-3 pt-4 border-t border-[#d4af37]/20 text-xs text-[#d8cfc4]">
                <div className="flex justify-between">
                  <span className="text-[#d8cfc4]">סוג אירוע:</span>
                  <span className="font-semibold text-[#fdfbf7]">
                    {eventType === 'wedding' && 'חתונה'}
                    {eventType === 'corporate' && 'אירוע חברה'}
                    {eventType === 'barmitzvah' && 'בר/בת מצווה'}
                    {eventType === 'boutique' && 'מסיבת VIP'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#d8cfc4]">כמות מוזמנים:</span>
                  <span className="font-semibold text-[#fdfbf7]">{guests} אורחים</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#d8cfc4]">סגנון עיצוב:</span>
                  <span className="font-semibold text-[#fdfbf7]">
                    {style === 'monochrome' && 'יוקרה חמה וזהובה'}
                    {style === 'classic' && 'קלאסי אלגנטי'}
                    {style === 'urban' && 'אורבני מודרני'}
                    {style === 'nature' && 'טבע כפרי וחמים'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#d8cfc4]">שירותים נבחרים:</span>
                  <span className="font-semibold text-[#fdfbf7]">
                    {conceptSummary.activeAddonsCount} מתוך 6
                  </span>
                </div>
              </div>

              {/* Submit Action */}
              <button
                onClick={handleSendConfig}
                className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
              >
                <span>קבלת תוכנית מפורטת ושיחת ייעוץ</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#e5c158] mt-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>פגישת היכרות ואפיון ללא שום התחייבות</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
