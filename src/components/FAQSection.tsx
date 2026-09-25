import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/eventData';
import { Sparkles, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 theme-bg-page relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>שאלות ותשובות</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
            שאלות נפוצות
          </h2>
          <p className="text-base sm:text-lg theme-text-body font-normal mt-3">
            מידע ממוקד על תהליך ההפקה, הליווי ולוחות הזמנים.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl theme-bg-card border border-theme-gold overflow-hidden transition-all duration-200 theme-shadow-warm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 font-serif font-bold text-lg sm:text-xl theme-text-head hover:text-[#9e751d] dark:hover:text-[#e5c158] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-mono text-[#9e751d] dark:text-[#e5c158] uppercase font-bold">
                      [{item.category}]
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9e751d] dark:text-[#e5c158] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base theme-text-body font-normal leading-relaxed border-t border-theme-gold mt-1">
                    <p className="pt-4">{item.answer}</p>
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
