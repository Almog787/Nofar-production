import React from 'react';
import { TESTIMONIALS } from '../data/eventData';
import { Star, Sparkles, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>המלצות וחוויות</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light mt-4">
            מאות אירועים נוצצים ועשרות מכתבי תודה שמתמצתים את הלב שאנחנו מכניסים בכל פרויקט.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-zinc-700/60 absolute top-6 left-6" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {testimonial.role} · {testimonial.eventType}
                  </p>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
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
