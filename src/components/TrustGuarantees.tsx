import React from 'react';
import { TRUST_GUARANTEES } from '../data/eventData';
import { ShieldCheck, Lock, Users, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';
import { SpotlightCard } from './react-bits/SpotlightCard';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface TrustGuaranteesProps {
  onOpenContact: (customSubject?: string) => void;
}

export const TrustGuarantees: React.FC<TrustGuaranteesProps> = ({
  onOpenContact,
}) => {
  const icons = [Lock, Users, HeartHandshake, ShieldCheck];

  return (
    <section id="trust" className="py-24 bg-[#171513] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>שקט נפשי מלא</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            האירוע שלכם בידיים הטובות ביותר
          </h2>
          <p className="text-sm sm:text-base text-[#d8cfc4] font-light mt-3">
            שילוב נדיר בין הקפדה יתרה על הפרטים, יחס חם ושליטה מלאה בכל שלב.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_GUARANTEES.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(229, 193, 88, 0.16)"
                className="flex flex-col justify-between space-y-6 shadow-xl border-[#d4af37]/20 hover:border-[#d4af37]/45 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#fdfbf7] pt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#d8cfc4] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/15 flex items-center gap-2 text-xs font-medium text-[#e5c158]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>דיוק מופתי ומסירות אישית</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Confidence Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#2a2521]/60 border border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right space-y-0.5">
            <span className="text-sm sm:text-base font-serif font-bold text-[#fdfbf7]">מעוניינים בשיחה אישית עם נופר?</span>
            <p className="text-xs text-[#d8cfc4]">נשמח להקשיב לחלום שלכם ולגבש מתווה הפקה מדויק.</p>
          </div>
          <a
            href={getWhatsAppUrl('שיחת היכרות אישית עם נופר')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-xl hover:brightness-110 transition-all cursor-pointer shrink-0 shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
            <span>שיחה ב-WhatsApp עם נופר</span>
          </a>
        </div>

      </div>
    </section>
  );
};
