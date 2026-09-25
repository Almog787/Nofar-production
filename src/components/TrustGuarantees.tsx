import React from 'react';
import { TRUST_GUARANTEES } from '../data/eventData';
import { ShieldCheck, Lock, Users, HeartHandshake, CheckCircle2, MessageSquare } from 'lucide-react';
import { SpotlightCard } from './react-bits/SpotlightCard';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface TrustGuaranteesProps {
  onOpenContact?: (customSubject?: string) => void;
}

export const TrustGuarantees: React.FC<TrustGuaranteesProps> = () => {
  const icons = [Lock, Users, HeartHandshake, ShieldCheck];

  return (
    <section id="trust" className="py-24 theme-bg-section-alt relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>שקט נפשי מלא</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            האירוע שלכם בידיים הטובות ביותר
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
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
                className="flex flex-col justify-between space-y-6 shadow-xl theme-bg-card border-theme-gold hover:border-theme-gold-strong transition-all duration-300 p-6 sm:p-7 rounded-3xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] px-3 py-1 rounded-lg uppercase tracking-wider shadow-xs">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold theme-text-head pt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm theme-text-body font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-gold flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9e751d] dark:text-[#e5c158]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>דיוק מופתי ומסירות אישית</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Confidence Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl theme-bg-card border border-theme-gold flex flex-col sm:flex-row items-center justify-between gap-5 theme-shadow-warm">
          <div className="text-right space-y-1">
            <span className="text-lg sm:text-xl font-serif font-bold theme-text-head block">
              מעוניינים בשיחה אישית עם נופר?
            </span>
            <p className="text-sm theme-text-body font-normal">
              נשמח להקשיב לחלום שלכם ולגבש מתווה הפקה מדויק.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('שיחת היכרות אישית עם נופר')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-[#121110]" />
            <span>שיחה ב-WhatsApp עם נופר</span>
          </a>
        </div>

      </div>
    </section>
  );
};
