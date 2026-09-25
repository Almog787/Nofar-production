import React from 'react';
import { PROCESS_STEPS } from '../data/eventData';
import { Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ProcessTimelineProps {
  onOpenContact?: (customSubject?: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = () => {
  return (
    <section id="process" className="py-24 theme-bg-page relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>מתודולוגיית עבודה</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            ארבעה שלבים לשלמות
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
            תהליך מובנה ומדויק המבטיח שקט נפשי מלא ותוצאה בלתי נשכחת.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-3xl theme-bg-card border border-theme-gold hover:border-theme-gold-strong transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl group theme-shadow-warm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-serif font-bold text-[#9e751d]/70 dark:text-[#e5c158]/70 group-hover:text-[#9e751d] dark:group-hover:text-[#e5c158] transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#9e751d]/40 dark:bg-[#e5c158]/40 group-hover:bg-[#9e751d] dark:group-hover:bg-[#e5c158] transition-colors" />
                </div>

                <h3 className="text-xl font-serif font-bold theme-text-head">
                  {step.title}
                </h3>

                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-theme-gold text-xs font-mono uppercase font-bold text-[#9e751d] dark:text-[#e5c158]">
                שלב {step.number} // 04
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl theme-bg-card border border-theme-gold text-center flex flex-col sm:flex-row items-center justify-between gap-5 theme-shadow-warm">
          <div className="text-right space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold theme-text-head">
              מתחילים לתכנן יחד
            </h3>
            <p className="text-sm sm:text-base theme-text-body font-normal">
              פגישת אפיון ממוקדת לבחינת החזון וההתאמה ההדדית.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('תיאום פגישת אפיון ראשונית')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-2 shadow-md hover:brightness-105"
          >
            <MessageSquare className="w-4 h-4 fill-[#121110]" />
            <span>תיאום פגישת אפיון ב-WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
