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
    <section id="gallery" className="py-24 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>גלריית אירועים בלתי נשכחת</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            הצצה לרגעים שהפכנו למציאות חמה
          </h2>
          <p className="text-base sm:text-lg text-[#d8cfc4] font-light mt-4">
            כל תמונה מספרת סיפור של תשוקה, תאורת אווירה נעימה והפקה ללא תקלות.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'כל הגלריה' },
            { id: 'wedding', label: 'חתונות' },
            { id: 'corporate', label: 'אירועים עסקיים' },
            { id: 'boutique', label: 'מסיבות VIP' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#c5a059] text-[#121110] shadow-md font-bold'
                  : 'bg-[#1c1917] text-[#d8cfc4] border border-[#d4af37]/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#1c1917] border border-[#d4af37]/20 cursor-pointer h-80 sm:h-96 shadow-lg transition-all duration-300 hover:border-[#d4af37]/50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#121110]/80 border border-[#d4af37]/40 backdrop-blur-md flex items-center justify-center text-[#e5c158] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-6 right-6 left-6 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#e5c158]">
                  {item.categoryLabel} · {item.location}
                </span>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#e5c158]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#d8cfc4] line-clamp-2 pt-1 font-light">
                  {item.details}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveItemIndex(null)}
            className="absolute top-6 right-6 text-[#d8cfc4] hover:text-white p-2 rounded-full bg-[#1c1917] border border-[#d4af37]/30 cursor-pointer z-50"
            aria-label="סגור"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#1c1917] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 relative">
            
            {/* Image (7 cols) */}
            <div className="md:col-span-7 relative h-72 md:h-[500px] bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={handlePrev}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#121110]/80 border border-[#d4af37]/40 text-[#e5c158] hover:bg-[#1c1917] cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#121110]/80 border border-[#d4af37]/40 text-[#e5c158] hover:bg-[#1c1917] cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Info (5 cols) */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase text-[#e5c158]">
                  {activeItem.categoryLabel} · {activeItem.year}
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  {activeItem.title}
                </h3>
                <div className="text-xs font-medium text-[#e5c158] bg-[#121110] px-3 py-1.5 rounded-lg border border-[#d4af37]/20 inline-block">
                  לוקיישן: {activeItem.location}
                </div>
                <p className="text-sm text-[#d8cfc4] font-light leading-relaxed pt-2">
                  {activeItem.details}
                </p>
              </div>

              <div className="pt-6 border-t border-[#d4af37]/20 flex items-center justify-between">
                <span className="text-xs text-[#d8cfc4]">תמונה {activeItemIndex! + 1} מתוך {filteredItems.length}</span>
                <button
                  onClick={() => setActiveItemIndex(null)}
                  className="px-4 py-2 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-lg cursor-pointer"
                >
                  חזרה לגלריה
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
