import React from 'react';
import { TESTIMONIALS } from '../data/eventData';
import { Star, Sparkles, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 theme-bg-section relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>עדויות לקוחות</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            רגעים שדיברו בעד עצמם
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
            מילים חמות מזוגות וממנהלי שיווק שחגגו איתנו בלב שקט.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-7 rounded-3xl theme-bg-card border border-theme-gold hover:border-theme-gold-strong transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative theme-shadow-warm"
            >
              <Quote className="w-8 h-8 text-[#9e751d]/15 dark:text-[#e5c158]/20 absolute top-6 left-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e5c158] text-[#e5c158]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base theme-text-body font-normal leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="pt-5 border-t border-theme-gold flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif font-bold theme-text-head">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm theme-text-muted font-medium">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-xs text-[#9e751d] dark:text-[#e5c158] font-mono font-bold">
                  {testimonial.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
