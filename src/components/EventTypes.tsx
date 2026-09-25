import React, { useState } from 'react';
import { EVENT_TYPES, EventType } from '../data/eventData';
import { Users, CheckCircle2, ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface EventTypesProps {
  onOpenContact?: (customSubject?: string) => void;
}

export const EventTypes: React.FC<EventTypesProps> = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvents = selectedType === 'all' 
    ? EVENT_TYPES 
    : EVENT_TYPES.filter(e => e.id === selectedType);

  return (
    <section id="event-types" className="py-24 theme-bg-section relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>התמחויות ההפקה</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            אירועים בתפירה אישית
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
            קונספט ייחודי, הפקה מבוקרת וליווי אישי מקצה לקצה.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              selectedType === 'all'
                ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md'
                : 'theme-bg-card theme-text-head border border-theme-gold hover:border-theme-gold-strong shadow-xs'
            }`}
          >
            כל האירועים
          </button>
          {EVENT_TYPES.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedType(event.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                selectedType === event.id
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md'
                  : 'theme-bg-card theme-text-head border border-theme-gold hover:border-theme-gold-strong shadow-xs'
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
              className="group theme-bg-card rounded-3xl border border-theme-gold hover:border-theme-gold-strong transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Header with Warm Scrim */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* High contrast gradient so title on image is always 100% readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Guest Count Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#d4af37]/50 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 shadow-lg">
                    <Users className="w-3.5 h-3.5 text-[#e5c158]" />
                    <span>{event.guestRange}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-5 right-6 left-6 space-y-1">
                    <span className="text-xs sm:text-sm uppercase font-mono font-bold tracking-wider text-[#f5d77f]">
                      {event.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm sm:text-base theme-text-body leading-relaxed font-normal">
                    {event.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    {event.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm font-medium theme-text-head">
                        <CheckCircle2 className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-[#9e751d] dark:text-[#e5c158] theme-bg-card-subtle border border-theme-gold px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-theme-gold mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold theme-text-muted">התאמה מלאה</span>
                <a
                  href={getWhatsAppUrl(`בירור והתאמת קונספט עבור ${event.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] hover:brightness-105 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-[#121110]" />
                  <span>תיאום ב-WhatsApp</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
