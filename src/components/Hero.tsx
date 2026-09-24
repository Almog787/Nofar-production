import React from 'react';
import { Sparkles, Calendar, ArrowDown, ChevronLeft, ShieldCheck, HeartHandshake } from 'lucide-react';
import { IMAGES } from '../data/eventData';

interface HeroProps {
  onOpenContact: (customSubject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#121110]">
      {/* Background Image with Warm Amber Scrim Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="אירוע יוקרה חם ומרגש"
          className="w-full h-full object-cover object-center contrast-105 opacity-40 scale-105 transition-transform duration-10000 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Dark Warm Vignette & Gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/70 to-[#121110]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-transparent to-[#121110]/90" />
        <div className="absolute inset-0 gradient-overlay-radial pointer-events-none" />
      </div>

      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d4af3710_1px,transparent_1px),linear-gradient(to_bottom,#d4af3710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Warm Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1917]/90 border border-[#d4af37]/30 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700 shadow-xl">
          <ShieldCheck className="w-4 h-4 text-[#e5c158]" />
          <span className="text-xs font-semibold tracking-wider text-[#f3eee6]">
            האירוע שלכם בידיים בטוחות, מנוסות ואוהבות
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fdfbf7] max-w-4xl leading-[1.15] mb-6 text-balance">
          הופכים כל חלום לאירוע <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdfbf7] via-[#e5c158] to-[#c5a059] underline decoration-[#d4af37]/40 decoration-1 underline-offset-8">
            חם, מרגש ומושלם
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#d8cfc4] max-w-2xl font-light leading-relaxed mb-10 text-balance">
          נופר הפקות אירועים מעניקה לכם שקט נפשי מוחלט, יחס אישי חם וליווי צמוד מכל הלב. תכנון ועיצוב חתונות, אירועים עסקיים ומסיבות בוטיק עם הקפדה יתרה על התקציב וכל הפרטים הקטנים.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#calculator"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-2xl shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#121110]" />
            <span>תכנון אירוע במחשבון החכם</span>
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => onOpenContact('תיאום פגישת ייעוץ ראשונית')}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wider text-[#f3eee6] hover:text-white bg-[#1c1917]/80 hover:bg-[#2a2521] border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#e5c158]" />
            <span>תיאום פגישת ייעוץ אישית ואינטימית</span>
          </button>
        </div>

        {/* Quick Proof Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-[#d4af37]/20 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">15+</span>
            <span className="text-xs text-[#d8cfc4] mt-1">שנות ניסיון בהפקה</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">850+</span>
            <span className="text-xs text-[#d8cfc4] mt-1">אירועים נוצצים</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">100%</span>
            <span className="text-xs text-[#d8cfc4] mt-1">שקיפות וביטחון תקציבי</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">24/7</span>
            <span className="text-xs text-[#d8cfc4] mt-1">ליווי אישי וצמוד</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[#d8cfc4] hover:text-[#e5c158] transition-colors cursor-pointer">
        <a href="#trust" className="flex flex-col items-center gap-1 text-xs uppercase tracking-widest">
          <span>גלה מדוע אתם בידיים בטוחות</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#e5c158]" />
        </a>
      </div>
    </section>
  );
};
