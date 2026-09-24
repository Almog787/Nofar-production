import React from 'react';
import { TESTIMONIALS } from '../data/eventData';
import { Star, Sparkles, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>עדויות לקוחות</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            רגעים שדיברו בעד עצמם
          </h2>
          <p className="text-sm sm:text-base text-[#d8cfc4] font-light mt-3">
            מילים חמות מזוגות וממנהלי שיווק שחגגו איתנו בלב שקט.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/45 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative"
            >
              <Quote className="w-7 h-7 text-[#e5c158]/20 absolute top-5 left-5" />

              <div className="space-y-3 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e5c158] text-[#e5c158]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#f3eee6] font-light leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/15 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-serif font-bold text-[#fdfbf7]">
                    {testimonial.name}
                  </h3>
                  <p className="text-[11px] text-[#d8cfc4]">
                    {testimonial.role}
                  </p>
                </div>
                <span className="text-[10px] text-[#e5c158] font-mono">
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
