import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#121110] relative overflow-hidden border-t border-[#d4af37]/20">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>החזון והסטנדרט</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
                אסתטיקה גבוהה, דיוק מופתי וחום אנושי
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#d8cfc4] font-light leading-relaxed">
              הפקת אירוע איכותי דורשת הקשבה אמיתית, רגישות וניהול לוגיסטי מדויק. נופר הפקות אירועים נוצרה כדי להעניק לכם מרחב בטוח שבו כל פרט מתוכנן מראש, כדי שתוכלו להגיע נינוחים ולהתרגש באמת.
            </p>

            {/* Core Pillars - Minimalist and crisp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20">
                <ShieldCheck className="w-5 h-5 text-[#e5c158] mb-2" />
                <h3 className="text-sm font-serif font-bold text-[#fdfbf7] mb-1">ודאות ושקיפות</h3>
                <p className="text-xs text-[#d8cfc4] font-light">
                  תכנון סגור ומבוקר ללא הפתעות.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20">
                <Heart className="w-5 h-5 text-[#e5c158] mb-2" />
                <h3 className="text-sm font-serif font-bold text-[#fdfbf7] mb-1">אווירה עוטפת</h3>
                <p className="text-xs text-[#d8cfc4] font-light">
                  הרמוניה בין תאורה, מוזיקה ואירוח.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20">
                <Award className="w-5 h-5 text-[#e5c158] mb-2" />
                <h3 className="text-sm font-serif font-bold text-[#fdfbf7] mb-1">ספקים נבחרים</h3>
                <p className="text-xs text-[#d8cfc4] font-light">
                  נבחרת יוצרים מהשורה הראשונה.
                </p>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Manifest Card */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(229, 193, 88, 0.15)"
              className="p-6 sm:p-8 rounded-2xl border-[#d4af37]/25 shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-5">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#e5c158]">
                  // סטנדרט הפקה
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fdfbf7]">
                  ערכי הליווי שלנו
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-[#d8cfc4]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                    <span>הקשבה מלאה לחזון ולסגנון האישי</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                    <span>ניהול קפדני של לוחות הזמנים והספקים</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c158] shrink-0" />
                    <span>נוכחות ופתרון אתגרים בזמן אמת</span>
                  </li>
                </ul>

                <div className="pt-5 border-t border-[#d4af37]/20 flex items-center justify-between">
                  <div>
                    <span className="block text-base font-serif font-bold text-[#fdfbf7]">נופר</span>
                    <span className="text-xs text-[#e5c158]">מייסדת ומפיקה ראשית</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-gradient-to-tr from-[#1c1917] to-[#2a2521] flex items-center justify-center font-serif text-[#e5c158] font-bold text-lg shadow-lg">
                    N
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};
