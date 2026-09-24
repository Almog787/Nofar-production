import React from 'react';
import { PROCESS_STEPS } from '../data/eventData';
import { Sparkles, CalendarCheck } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenContact: (customSubject?: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-20 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>מתודולוגיית עבודה</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            ארבעה שלבים לשלמות
          </h2>
          <p className="text-sm sm:text-base text-[#d8cfc4] font-light mt-3">
            תהליך מובנה ומדויק המבטיח שקט נפשי מלא ותוצאה בלתי נשכחת.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/45 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#e5c158]/60 group-hover:text-[#e5c158] transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#e5c158]/40 group-hover:bg-[#e5c158] transition-colors" />
                </div>

                <h3 className="text-lg font-serif font-bold text-[#fdfbf7]">
                  {step.title}
                </h3>

                <p className="text-xs text-[#d8cfc4] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/15 text-[10px] font-mono uppercase text-[#e5c158]/70">
                שלב {step.number} // 04
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-[#d4af37]/25 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right space-y-0.5">
            <h3 className="text-xl font-serif font-bold text-[#fdfbf7]">
              מתחילים לתכנן יחד
            </h3>
            <p className="text-xs text-[#d8cfc4] font-light">
              פגישת אפיון ממוקדת לבחינת החזון וההתאמה ההדדית.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('תיאום פגישת אפיון')}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>תיאום פגישת אפיון</span>
          </button>
        </div>

      </div>
    </section>
  );
};
