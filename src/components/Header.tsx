import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Sparkles, HeartHandshake, Film, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  onOpenContact?: (customSubject?: string) => void;
  activeChapterName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeChapterName,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group text-right cursor-pointer"
          >
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

          {/* Active Chapter Indicator (visible when scrolled) */}
          {activeChapterName && (
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1917]/80 border border-[#d4af37]/30 text-xs text-[#e5c158] animate-in fade-in duration-300">
              <Film className="w-3.5 h-3.5 animate-pulse" />
              <span className="text-[11px] font-mono text-[#d8cfc4]">פרק פעיל:</span>
              <span className="font-semibold text-[#fdfbf7]">{activeChapterName}</span>
            </div>
          )}

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#d8cfc4]">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              החזון
            </a>
            <a
              href="#trust"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#trust');
              }}
              className="hover:text-[#e5c158] transition-colors py-1 flex items-center gap-1 text-[#e5c158]"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              שקט נפשי
            </a>
            <a
              href="#event-types"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#event-types');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              אירועים
            </a>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#calculator');
              }}
              className="hover:text-[#e5c158] transition-colors py-1 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
              מתכנן
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#gallery');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              גלריה
            </a>
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#process');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              תהליך
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#testimonials');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              המלצות
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#faq');
              }}
              className="hover:text-[#e5c158] transition-colors py-1"
            >
              שאלות
            </a>
          </nav>

          {/* Zone 3: Direct WhatsApp Action (No phone calls, directly pre-filled WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות ופגישה')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-lg shadow-lg hover:shadow-[#d4af37]/20 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
              <span>תיאום פגישה ב-WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d8cfc4] hover:text-white rounded-lg bg-[#1c1917] border border-[#d4af37]/20 focus:outline-none cursor-pointer"
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
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            החזון והסטנדרט
          </a>
          <a
            href="#trust"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#trust');
            }}
            className="block text-base font-medium text-[#e5c158] hover:text-white py-1.5 flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            שקט נפשי מלא
          </a>
          <a
            href="#event-types"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#event-types');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            סוגי אירועים
          </a>
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#calculator');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#e5c158]" />
            מתכנן קונספט
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#gallery');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            גלריה
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#process');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            תהליך ההפקה
          </a>
          <a
            href="#testimonials"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#testimonials');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            המלצות
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#faq');
            }}
            className="block text-base font-medium text-[#f3eee6] hover:text-[#e5c158] py-1.5"
          >
            שאלות נפוצות
          </a>

          {/* Mobile CTA: Pre-filled WhatsApp button (no phone number) */}
          <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות ופגישה')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-lg shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#121110]" />
              <span>תיאום פגישה ב-WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
