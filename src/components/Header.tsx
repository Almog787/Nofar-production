import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  onOpenContact: (customSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121110]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Clean Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#e5c158] to-[#f7f4ed] text-[#121110] flex items-center justify-center font-serif font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider font-bold text-[#fdfbf7] uppercase">
                נופר <span className="font-light text-[#e5c158]">| הפקות אירועים</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#d8cfc4] font-cinzel uppercase hidden sm:block">
                WARM LUXURY EVENT PRODUCTIONS
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#d8cfc4]">
            <a href="#about" className="hover:text-[#e5c158] transition-colors py-1">
              אודות
            </a>
            <a href="#trust" className="hover:text-[#e5c158] transition-colors py-1 flex items-center gap-1 text-[#e5c158]">
              <HeartHandshake className="w-3.5 h-3.5" />
              ביטחון ושקט נפשי
            </a>
            <a href="#event-types" className="hover:text-[#e5c158] transition-colors py-1">
              סוגי אירועים
            </a>
            <a href="#calculator" className="hover:text-[#e5c158] transition-colors py-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
              מחשבון אירוע
            </a>
            <a href="#gallery" className="hover:text-[#e5c158] transition-colors py-1">
              גלריית אירועים
            </a>
            <a href="#process" className="hover:text-[#e5c158] transition-colors py-1">
              תהליך ההפקה
            </a>
            <a href="#testimonials" className="hover:text-[#e5c158] transition-colors py-1">
              המלצות
            </a>
            <a href="#faq" className="hover:text-[#e5c158] transition-colors py-1">
              שאלות נפוצות
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0541234567"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#f3eee6] hover:text-[#e5c158] border border-[#d4af37]/20 hover:border-[#d4af37]/50 rounded-lg transition-all bg-[#1c1917]/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
              <span dir="ltr">054-123-4567</span>
            </a>
            <button
              onClick={() => onOpenContact()}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-lg shadow-lg hover:shadow-[#d4af37]/20 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>תיאום פגישה חמה</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-[#121110] bg-[#e5c158] rounded-md"
            >
              פגישה
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d8cfc4] hover:text-white rounded-lg bg-[#1c1917] border border-[#d4af37]/20 focus:outline-none"
              aria-label="תפריט"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121110]/98 border-b border-[#d4af37]/20 px-6 py-6 space-y-4 text-right backdrop-blur-xl animate-in slide-in-from-top-2">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            אודות
          </a>
          <a
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#e5c158] hover:text-white py-1.5 flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            ביטחון ושקט נפשי
          </a>
          <a
            href="#event-types"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            סוגי אירועים
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#e5c158]" />
            מחשבון אירוע מותאם אישית
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            גלריית אירועים
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            תהליך ההפקה
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            המלצות
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            שאלות נפוצות
          </a>
          <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col gap-3">
            <a
              href="tel:0541234567"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#f3eee6] border border-[#d4af37]/30 rounded-lg bg-[#1c1917]"
            >
              <Phone className="w-4 h-4 text-[#e5c158]" />
              <span>054-123-4567</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-lg shadow-lg"
            >
              תיאום פגישת ייעוץ אישית
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
