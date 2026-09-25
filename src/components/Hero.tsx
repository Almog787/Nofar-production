import React from 'react';
import { Calendar, ArrowDown, ChevronLeft, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/eventData';
import { Particles } from './react-bits/Particles';
import { ShinyText } from './react-bits/ShinyText';
import { CountUp } from './react-bits/CountUp';
import { StarBorder } from './react-bits/StarBorder';

interface HeroProps {
  onOpenContact: (customSubject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#121110]">
      
      {/* React Bits Floating Particles */}
      <Particles
        particleCount={30}
        particleColors={['#e5c158', '#d4af37', '#fdfbf7', '#c5a059']}
        speed={0.2}
      />

      {/* Background Image with Warm Amber Scrim Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.hero}
          alt="אירוע יוקרה חם ומרגש"
          className="w-full h-full object-cover object-center contrast-105 opacity-35 scale-105 transition-transform duration-10000 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/70 to-[#121110]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-transparent to-[#121110]/90" />
        <div className="absolute inset-0 gradient-overlay-radial pointer-events-none" />
      </div>

      {/* Decorative Subtle Grid Lines */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d4af3710_1px,transparent_1px),linear-gradient(to_bottom,#d4af3710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Warm Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1917]/90 border border-[#d4af37]/30 backdrop-blur-md mb-6 shadow-xl">
          <ShieldCheck className="w-3.5 h-3.5 text-[#e5c158]" />
          <ShinyText
            text="דיוק מופתי · יחס אישי · שקט נפשי מלא"
            className="text-xs font-semibold tracking-wider font-sans"
            speed={4}
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fdfbf7] max-w-3xl leading-[1.12] mb-5 text-balance">
          הופכים כל חזון לאירוע <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdfbf7] via-[#e5c158] to-[#c5a059]">
            יוצא דופן ומרגש
          </span>
        </h1>

        {/* Short, elevated subtitle */}
        <p className="text-base sm:text-lg text-[#d8cfc4] max-w-xl font-light leading-relaxed mb-8 text-balance">
          תכנון, עיצוב והפקה של חתונות ואירועי יוקרה. אסתטיקה מאופקת, חום אנושי וליווי צמוד לכל אורך הדרך.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14">
          <a href="#calculator" className="w-full sm:w-auto">
            <StarBorder speed="5s" color="#e5c158" className="w-full sm:w-auto">
              <span>תכנון קונספט אישי</span>
              <ChevronLeft className="w-4 h-4" />
            </StarBorder>
          </a>

          <button
            onClick={() => onOpenContact('תיאום שיחת היכרות ראשונית')}
            className="w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wider text-[#f3eee6] hover:text-white bg-[#1c1917]/80 hover:bg-[#2a2521] border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#e5c158]" />
            <span>תיאום פגישה אישית</span>
          </button>
        </div>

        {/* Quick Proof Metrics Row - Realistic & High-Impact Boutique Standards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#d4af37]/20 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <CountUp to={1} duration={1.2} />
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">אירוע יחיד ביום</span>
            <span className="text-[10px] text-[#d8cfc4]">100% פוקוס עליכם</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <span className="text-sm font-sans font-normal ml-1">עד</span>
              <CountUp to={2} duration={1.5} />
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">אירועים בחודש</span>
            <span className="text-[10px] text-[#d8cfc4]">בוטיק ללא פס ייצור</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <CountUp to={100} duration={2} />
              <span>%</span>
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">נוכחות אישית</span>
            <span className="text-[10px] text-[#d8cfc4]">של נופר לאורך כל היום</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center text-2xl sm:text-3xl font-bold font-serif text-[#e5c158] tabular-nums">
              <span>0</span>
            </div>
            <span className="text-xs text-[#fdfbf7] font-semibold mt-0.5">הפתעות בתקציב</span>
            <span className="text-[10px] text-[#d8cfc4]">שקיפות מלאה מול ספקים</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 text-[#d8cfc4] hover:text-[#e5c158] transition-colors cursor-pointer">
        <a href="#trust" className="flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#e5c158]" />
        </a>
      </div>
    </section>
  );
};
