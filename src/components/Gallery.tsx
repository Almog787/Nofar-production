import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { IMAGES } from '../data/eventData';

interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'corporate' | 'boutique';
  categoryLabel: string;
  location: string;
  image: string;
  year: string;
  details: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'חתונת יוקרה חמה ורומנטית',
    category: 'wedding',
    categoryLabel: 'חתונה',
    location: 'אריאה, קיסריה',
    image: IMAGES.wedding,
    year: '2026',
    details: 'עיצוב רומנטי בתאורת נרות זהובה, סידורי ורדים לבנים צפופים, נורות קריסטל תלויות ותפריט שף משובח.'
  },
  {
    id: 'g2',
    title: 'ערב גאלה & השקת מוצר',
    category: 'corporate',
    categoryLabel: 'אירוע חברה',
    location: 'האנגר 11, תל אביב',
    image: IMAGES.corporate,
    year: '2026',
    details: 'אירוע חברה עבור 600 עובדים ומנהלים. במה דיגיטלית מרהיבה, מיתוג ברונזה ואווירה חמה ומזמינה.'
  },
  {
    id: 'g3',
    title: 'מסיבת VIP בוילה פרטית',
    category: 'boutique',
    categoryLabel: 'מסיבת VIP',
    location: 'סביון',
    image: IMAGES.boutique,
    year: '2026',
    details: 'מסיבת קוקטייל אקסקלוסיבית, תאורת אווירה זהובה, בר קוקטיילים פרימיום ומוזיקה חיה.'
  },
  {
    id: 'g4',
    title: 'קבלת פנים יוקרתית וחמה',
    category: 'wedding',
    categoryLabel: 'חתונה',
    location: 'חוות רונית',
    image: IMAGES.hero,
    year: '2025',
    details: 'מתחם קבלת פנים פתוח תחת כיפת השמיים, ריהוט אלטרנטיבי חם ואווירה קסומה.'
  }
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 theme-bg-section relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>גלריית אירועים בלתי נשכחת</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            הצצה לרגעים שהפכנו למציאות חמה
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-4">
            כל תמונה מספרת סיפור של תשוקה, תאורת אווירה נעימה והפקה ללא תקלות.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {[
            { id: 'all', label: 'כל הגלריה' },
            { id: 'wedding', label: 'חתונות' },
            { id: 'corporate', label: 'אירועים עסקיים' },
            { id: 'boutique', label: 'מסיבות VIP' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md'
                  : 'theme-bg-card theme-text-head border border-theme-gold hover:border-theme-gold-strong shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="group relative h-96 sm:h-[420px] rounded-3xl overflow-hidden border border-theme-gold cursor-pointer bg-neutral-900 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Deep gradient so text is always 100% readable on light and dark backgrounds */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300" />

              <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
                <div className="space-y-1.5 text-right">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-[#f5d77f]">
                    <span>{item.categoryLabel}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors shrink-0 shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-6 left-6 text-white hover:text-[#e5c158] p-2.5 rounded-full bg-white/10 border border-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#e5c158] p-3.5 rounded-full bg-white/10 border border-white/20 transition-colors cursor-pointer"
              aria-label="תמונה קודמת"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#e5c158] p-3.5 rounded-full bg-white/10 border border-white/20 transition-colors cursor-pointer"
              aria-label="תמונה הבאה"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full theme-bg-card border border-theme-gold rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="md:w-3/5 h-80 md:h-[500px] relative bg-black">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="md:w-2/5 p-7 sm:p-8 flex flex-col justify-between text-right space-y-4">
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-bg-card-subtle text-xs font-mono font-bold text-[#9e751d] dark:text-[#e5c158] border border-theme-gold">
                    <span>{activeItem.categoryLabel}</span>
                    <span>•</span>
                    <span>{activeItem.year}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold theme-text-head">
                    {activeItem.title}
                  </h3>

                  <p className="text-sm text-[#9e751d] dark:text-[#e5c158] font-mono font-semibold">
                    מיקום: {activeItem.location}
                  </p>

                  <p className="text-sm sm:text-base theme-text-body font-normal leading-relaxed">
                    {activeItem.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-gold flex items-center justify-between">
                  <span className="text-sm font-semibold theme-text-muted">אירוע בלעדי</span>
                  <span className="text-sm font-serif font-bold theme-text-head">נופר הפקות</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
