import React from 'react';
import { PROCESS_STEPS } from '../data/eventData';
import { Sparkles, CalendarCheck } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenContact: (customSubject?: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>תהליך הפקת האירוע</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            ארבעה צעדים לאירוע מושלם
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light mt-4">
            שיטת עבודה מובנית ומוכחת שמבטיחה שקט נפשי מלא ותוצאה שמרגשת כל אורח.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between space-y-6 relative group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-zinc-500 group-hover:text-white transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-xl font-serif font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/50 text-[11px] font-mono uppercase text-zinc-500">
                שלב {step.number} מתוך 04
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner below timeline */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl glass-panel border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right space-y-1">
            <h3 className="text-2xl font-serif font-bold text-white">
              מוכנים להתחיל לתכנן את האירוע שלכם?
            </h3>
            <p className="text-sm text-zinc-400 font-light">
              פגישת אפיון ראשונית ללא עליות וכל התחייבות, אצלנו במשרד או בזום.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('תיאום פגישת אפיון')}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-100 rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-2 shadow-lg"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>קבע פגישת אפיון עכשיו</span>
          </button>
        </div>

      </div>
    </section>
  );
};
