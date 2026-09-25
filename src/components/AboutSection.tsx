import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { SpotlightCard } from './react-bits/SpotlightCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 theme-bg-section relative overflow-hidden border-t border-theme-gold transition-colors duration-300">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158]">
                <Sparkles className="w-4 h-4" />
                <span>החזון והסטנדרט</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
                אסתטיקה גבוהה, דיוק מופתי וחום אנושי
              </h2>
            </div>

            <p className="text-base sm:text-lg theme-text-body font-normal leading-relaxed">
              הפקת אירוע איכותי דורשת הקשבה אמיתית, רגישות וניהול לוגיסטי מדויק. נופר הפקות אירועים נוצרה כדי להעניק לכם מרחב בטוח שבו כל פרט מתוכנן מראש, כדי שתוכלו להגיע נינוחים ולהתרגש באמת.
            </p>

            {/* Core Pillars - Minimalist, warm and crisp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl theme-bg-card border border-theme-gold theme-shadow-warm">
                <ShieldCheck className="w-6 h-6 text-[#9e751d] dark:text-[#e5c158] mb-2.5" />
                <h3 className="text-base font-serif font-bold theme-text-head mb-1.5">ודאות ושקיפות</h3>
                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  תכנון סגור ומבוקר ללא שום הפתעות.
                </p>
              </div>

              <div className="p-5 rounded-2xl theme-bg-card border border-theme-gold theme-shadow-warm">
                <Heart className="w-6 h-6 text-[#9e751d] dark:text-[#e5c158] mb-2.5" />
                <h3 className="text-base font-serif font-bold theme-text-head mb-1.5">אווירה עוטפת</h3>
                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  הרמוניה בין תאורה, מוזיקה ואירוח.
                </p>
              </div>

              <div className="p-5 rounded-2xl theme-bg-card border border-theme-gold theme-shadow-warm">
                <Award className="w-6 h-6 text-[#9e751d] dark:text-[#e5c158] mb-2.5" />
                <h3 className="text-base font-serif font-bold theme-text-head mb-1.5">ספקים נבחרים</h3>
                <p className="text-sm theme-text-body font-normal leading-relaxed">
                  נבחרת יוצרים מהשורה הראשונה בישראל.
                </p>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Manifest Card */}
          <div className="lg:col-span-5">
            <SpotlightCard
              spotlightColor="rgba(229, 193, 88, 0.15)"
              className="p-7 sm:p-9 rounded-3xl theme-bg-card border-theme-gold theme-shadow-warm relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] font-bold">
                  // סטנדרט הפקה אישי
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold theme-text-head">
                  ערכי הליווי שלנו
                </h3>

                <ul className="space-y-4 text-sm sm:text-base theme-text-body">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                    <span className="font-medium">הקשבה מלאה לחזון ולסגנון האישי</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                    <span className="font-medium">ניהול קפדני של לוחות הזמנים והספקים</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
                    <span className="font-medium">נוכחות מלאה ופתרון אתגרים בזמן אמת</span>
                  </li>
                </ul>

                <div className="pt-6 border-t border-theme-gold flex items-center justify-between">
                  <div>
                    <span className="block text-lg font-serif font-bold theme-text-head">נופר</span>
                    <span className="text-sm font-semibold text-[#9e751d] dark:text-[#e5c158]">מייסדת ומפיקה ראשית</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-theme-gold bg-gradient-to-tr from-[#e5c158] to-[#c5a059] flex items-center justify-center font-serif text-[#121110] font-bold text-xl shadow-md">
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
