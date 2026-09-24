import React from 'react';
import { TRUST_GUARANTEES } from '../data/eventData';
import { ShieldCheck, Lock, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './react-bits/SpotlightCard';

interface TrustGuaranteesProps {
  onOpenContact: (customSubject?: string) => void;
}

export const TrustGuarantees: React.FC<TrustGuaranteesProps> = ({ onOpenContact }) => {
  const icons = [Lock, Users, HeartHandshake, ShieldCheck];

  return (
    <section id="trust" className="py-20 bg-[#171513] relative border-t border-[#d4af37]/20">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>הביטחון והשקט הנפשי שלכם</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            האירוע שלכם בידיים הטובות ביותר
          </h2>
          <p className="text-base sm:text-lg text-[#d8cfc4] font-light mt-4">
            אנחנו מבינים שאירוע הוא רגע חד-פעמי בחיים. הנה האחריות, השקיפות והביטחון שאנו מעניקים לכל לקוח.
          </p>
        </div>

        {/* Guarantees Grid with React Bits SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_GUARANTEES.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(229, 193, 88, 0.18)"
                className="flex flex-col justify-between space-y-6 shadow-xl group border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#fdfbf7] pt-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#d8cfc4] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/15 flex items-center gap-2 text-xs font-medium text-[#e5c158]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>אחריות מלאה מנופר</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Confidence Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#2a2521]/60 border border-[#d4af37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right space-y-1">
            <span className="text-base font-bold text-[#fdfbf7]">רוצים להרגיש בטוחים ורגועים לקראת האירוע?</span>
            <p className="text-xs text-[#d8cfc4]">נשמח להציג לכם המלצות חמות מדוקמנטטיביות, דוגמאות למפרטי אירוע מפורטים ותוכניות לדוגמה.</p>
          </div>
          <button
            onClick={() => onOpenContact('שיחת היכרות ובדיקת זמינות אישית')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-xl hover:brightness-110 transition-all cursor-pointer shrink-0 shadow-lg"
          >
            שיחת ייעוץ אישית וחינמית
          </button>
        </div>

      </div>
    </section>
  );
};
