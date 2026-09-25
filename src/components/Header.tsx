import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, HeartHandshake, Film, MessageSquare, Compass, Zap, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  onOpenContact?: (customSubject?: string) => void;
  activeChapterName?: string;
  onSwitchToLandingPage?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeChapterName,
  onSwitchToLandingPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          ? 'bg-[var(--bg-page)]/98 backdrop-blur-lg border-b border-theme-gold py-2.5 sm:py-3 shadow-md'
          : 'bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-theme-gold/30 py-3 sm:py-3.5 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group text-right cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#e5c158] to-[#f7f4ed] text-[#121110] flex items-center justify-center font-serif font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider font-bold theme-text-head uppercase leading-none">
                נופר <span className="font-light text-[#9e751d]">| הפקות אירועים</span>
              </span>
              <span className="text-[11px] tracking-wider text-[#9e751d] font-cinzel font-semibold hidden sm:block mt-1">
                WARM LUXURY EVENT PRODUCTIONS
              </span>
            </div>
          </a>

          {/* Active Chapter HUD Indicator (visible when scrolled on large screens) */}
          {activeChapterName && (
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full theme-bg-card border border-theme-gold text-xs text-[#9e751d] animate-in fade-in duration-300 shadow-xs">
              <Film className="w-3.5 h-3.5 animate-pulse text-[#9e751d]" />
              <span className="text-[11px] font-mono theme-text-muted">פרק פעיל:</span>
              <span className="font-bold theme-text-head">{activeChapterName}</span>
            </div>
          )}

          {/* Zone 2: Curated & Streamlined Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold theme-text-head">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all"
            >
              החזון והחלל
            </a>

            <a
              href="#event-types"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#event-types');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all"
            >
              סוגי אירועים
            </a>

            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#calculator');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9e751d]" />
              מתכנן קונספט
            </a>

            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#gallery');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all"
            >
              גלריה
            </a>

            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#process');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all"
            >
              תהליך והמלצות
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-theme-card-subtle hover:text-[#9e751d] transition-all text-[#9e751d]"
            >
              יצירת קשר
            </a>
          </nav>

          {/* Zone 3: Direct Conversion Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onSwitchToLandingPage && (
              <button
                onClick={onSwitchToLandingPage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-theme-gold theme-bg-card theme-text-head hover:border-theme-gold-strong transition-all cursor-pointer shadow-xs text-xs font-bold"
                title="מעבר לגרסת מסע קצר ודף נחיתה"
              >
                <Zap className="w-3.5 h-3.5 text-[#9e751d]" />
                <span>דף נחיתה (מסע קצר)</span>
              </button>
            )}

            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות ופגישה')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
              <span>תיאום פגישה ב-WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            {onSwitchToLandingPage && (
              <button
                onClick={onSwitchToLandingPage}
                className="px-2.5 py-1.5 rounded-lg border border-theme-gold theme-bg-card text-xs font-bold theme-text-head flex items-center gap-1 shadow-xs"
                title="דף נחיתה"
              >
                <Zap className="w-3.5 h-3.5 text-[#9e751d]" />
                <span>מסע קצר</span>
              </button>
            )}

            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות מהירה')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] to-[#c5a059] rounded-lg flex items-center gap-1.5 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#121110]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 theme-text-head rounded-xl theme-bg-card border border-theme-gold focus:outline-none cursor-pointer shadow-xs"
              aria-label="תפריט ניווט"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Structured Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-page)]/98 border-b border-theme-gold px-6 py-6 space-y-4 text-right backdrop-blur-xl animate-in slide-in-from-top-2 shadow-2xl">
          
          {/* Landing page switch banner in drawer */}
          {onSwitchToLandingPage && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSwitchToLandingPage();
              }}
              className="w-full p-3 rounded-xl border border-[#9e751d] bg-[#e5c158]/20 text-sm font-bold theme-text-head flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#9e751d]" />
                <span>מעבר למסע קצר (דף נחיתה מהיר)</span>
              </div>
              <ArrowLeft className="w-4 h-4 text-[#9e751d]" />
            </button>
          )}

          {/* Numbered Clean Navigation Chapters */}
          <div className="space-y-1 pt-1">
            {[
              { label: 'החזון והסטנדרט', anchor: '#about', num: '01' },
              { label: 'ארכיטקטורת החלל', anchor: '#space-walkthrough', num: '02' },
              { label: 'שקט נפשי מלא', anchor: '#trust', num: '03' },
              { label: 'סוגי אירועים', anchor: '#event-types', num: '04' },
              { label: 'מתכנן קונספט אישי', anchor: '#calculator', num: '05' },
              { label: 'גלריית אירועים', anchor: '#gallery', num: '06' },
              { label: 'תהליך ההפקה', anchor: '#process', num: '07' },
              { label: 'המלצות ועדויות', anchor: '#testimonials', num: '08' },
              { label: 'שאלות ותשובות', anchor: '#faq', num: '09' },
              { label: 'יצירת קשר ותיאום', anchor: '#contact', num: '10' },
            ].map((item) => (
              <a
                key={item.anchor}
                href={item.anchor}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.anchor);
                }}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-theme-card-subtle text-base font-bold theme-text-head"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#9e751d] font-semibold">{item.num}</span>
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="pt-3 border-t border-theme-gold">
            <a
              href={getWhatsAppUrl('תיאום שיחת היכרות ופגישה')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-sm font-bold text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] rounded-xl shadow-lg flex items-center justify-center gap-2"
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
