import React from 'react';
import { ShieldCheck, Eye, Award, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#121110] relative overflow-hidden border-t border-[#d4af37]/20">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>אודות נופר הפקות אירועים</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight text-balance">
                מקצועיות ללא פשרות, יחס חם ותשומת לב לכל פרט
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#d8cfc4] font-light leading-relaxed">
              מאחורי כל אירוע מנצח עומדת חשיבה אסטרטגית, דיוק קפדני ותשוקה בלתי מתפשרת לאווירה חמה ומזמינה. נופר הפקות אירועים הוקמה מתוך שאיפה להבטיח שכל זוג, משפחה או חברה ירגישו עטופים, בטוחים ורגועים לאורך כל הדרך.
            </p>

            <p className="text-base sm:text-lg text-[#d8cfc4] font-light leading-relaxed">
              אנחנו לא רק מנהלים ספקים - אנחנו יוצרים חוויה שלמה, אישית ומרגשת. החל מרגע אפיון הקונספט, דרך תאורת האווירה הזהובה, העיצוב הפרחוני והקולינריה המשובחת, ועד לניהול הדוק ביום האירוע שמאפשר לכם להגיע נינוחים ולחגוג מכל הלב.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20 shadow-lg">
                <ShieldCheck className="w-6 h-6 text-[#e5c158] mb-3" />
                <h3 className="text-base font-bold text-[#fdfbf7] mb-1">שקיפות תקציבית</h3>
                <p className="text-xs text-[#d8cfc4] leading-relaxed">
                  קובץ תקציב מפורט, ללא הפתעות ועם ניצול מקסימלי של כל שקל.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20 shadow-lg">
                <Heart className="w-6 h-6 text-[#e5c158] mb-3" />
                <h3 className="text-base font-bold text-[#fdfbf7] mb-1">אווירה חמה</h3>
                <p className="text-xs text-[#d8cfc4] leading-relaxed">
                  הרמוניה מושלמת בין תאורה זהובה, טקסטורות עשירות ויחס אישי.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#1c1917]/90 border border-[#d4af37]/20 shadow-lg">
                <Award className="w-6 h-6 text-[#e5c158] mb-3" />
                <h3 className="text-base font-bold text-[#fdfbf7] mb-1">ספקים מובחרים</h3>
                <p className="text-xs text-[#d8cfc4] leading-relaxed">
                  חיבור בלעדי לשפים, דיג\'יים וצלמים המובילים בתעשייה.
                </p>
              </div>
            </div>

          </div>

          {/* Left Column: Visual Manifest Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel relative overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c5a059] via-[#f5d77f] to-[#c5a059]" />

              <div className="space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#e5c158]">
                  // הסטנדרט והחום של נופר
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  למה הלקוחות שלנו מרגישים בטוחים איתנו?
                </h3>

                <ul className="space-y-4 text-sm text-[#d8cfc4]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                    <span><strong>שקט נפשי מלא:</strong> אתם מתרגשים - אנחנו דואגים לכל היתר באחריות ובאהבה.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                    <span><strong>אווירה יוקרתית וחמה:</strong> שילוב בין אסתטיקה גבוהה לחמימות ישראלית מחברת.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#e5c158] shrink-0 mt-0.5" />
                    <span><strong>זמינות אישית 24/7:</strong> נופר זמינה לכל שאלה, דאגה או התייעצות לאורך כל הדרך.</span>
                  </li>
                </ul>

                <div className="pt-6 border-t border-[#d4af37]/20 flex items-center justify-between">
                  <div>
                    <span className="block text-lg font-serif font-bold text-[#fdfbf7]">נופר</span>
                    <span className="text-xs text-[#e5c158]">מייסדת ומפיקה ראשית</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 bg-gradient-to-tr from-[#1c1917] to-[#2a2521] flex items-center justify-center font-serif text-[#e5c158] font-bold text-xl shadow-lg">
                    N
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
