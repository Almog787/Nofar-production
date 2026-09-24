import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/eventData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>שאלות ותשובות</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
            שאלות נפוצות
          </h2>
          <p className="text-sm sm:text-base text-[#d8cfc4] font-light mt-3">
            מידע ממוקד על תהליך ההפקה, הליווי ולוחות הזמנים.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#fdfbf7] hover:text-[#e5c158] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono text-[#e5c158] uppercase">
                      [{item.category}]
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#e5c158] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#d8cfc4] font-light leading-relaxed border-t border-[#d4af37]/15 mt-1">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
