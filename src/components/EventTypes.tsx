import React, { useState } from 'react';
import { EVENT_TYPES, EventType } from '../data/eventData';
import { Users, CheckCircle2, ArrowLeft, Sparkles, Shield } from 'lucide-react';

interface EventTypesProps {
  onOpenContact: (customSubject?: string) => void;
}

export const EventTypes: React.FC<EventTypesProps> = ({ onOpenContact }) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvents = selectedType === 'all' 
    ? EVENT_TYPES 
    : EVENT_TYPES.filter(e => e.id === selectedType);

  return (
    <section id="event-types" className="py-24 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>סוגי האירועים שלנו</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            הפקת אירועים בסטנדרט של שלמות וחמימות
          </h2>
          <p className="text-base sm:text-lg text-[#d8cfc4] font-light mt-4">
            כל אירוע מתוכנן מתוך אפיון מעמיק, קונספט ייחודי וליווי אישי מקצה לקצה.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              selectedType === 'all'
                ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-lg font-bold'
                : 'bg-[#1c1917] text-[#d8cfc4] hover:text-white border border-[#d4af37]/20'
            }`}
          >
            כל האירועים
          </button>
          {EVENT_TYPES.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedType(event.id)}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                selectedType === event.id
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-lg font-bold'
                  : 'bg-[#1c1917] text-[#d8cfc4] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              {event.title}
            </button>
          ))}
        </div>

        {/* Grid of Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event: EventType) => (
            <div
              key={event.id}
              className="group bg-[#1c1917]/80 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Header with Warm Scrim */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#121110]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/40 to-transparent" />
                  
                  {/* Guest Count Badge */}
                  <div className="absolute top-4 right-4 bg-[#121110]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-full text-xs text-[#f3eee6] flex items-center gap-1.5 shadow-lg">
                    <Users className="w-3.5 h-3.5 text-[#e5c158]" />
                    <span>{event.guestRange}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 right-6 left-6">
                    <span className="text-xs uppercase font-mono tracking-wider text-[#e5c158]">
                      {event.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fdfbf7] mt-1">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-sm text-[#d8cfc4] leading-relaxed font-light">
                    {event.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#f3eee6]">
                        <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-[#e5c158] bg-[#121110] border border-[#d4af37]/20 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#d4af37]/15 mt-4 flex items-center justify-between">
                <span className="text-xs text-[#d8cfc4]">תפירה אישית לפי תקציב</span>
                <button
                  onClick={() => onOpenContact(`התעניינות ב${event.title}`)}
                  className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] hover:brightness-110 rounded-lg transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>תיאום אירוע כזה</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
