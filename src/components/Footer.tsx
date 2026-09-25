import React from 'react';
import { Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#ded5cb] border-t border-theme-gold py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/25">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#e5c158] text-[#121110] flex items-center justify-center font-serif font-bold text-xl shadow-md">
                N
              </div>
              <span className="text-xl font-serif font-bold text-[#fdfbf7] uppercase tracking-wider">
                נופר <span className="font-light text-[#e5c158]">| הפקות אירועים</span>
              </span>
            </div>
            <p className="text-sm text-[#ded5cb] font-normal leading-relaxed">
              הפקת אירועי יוקרה, חתונות, כנסים ומסיבות קונספט. אסתטיקה מאופקת, חום אנושי וליווי אישי מקצה לקצה.
            </p>
            <div className="text-xs font-mono font-bold text-[#e5c158]">
              // בוטיק אקסקלוסיבי: עד 2 אירועים בחודש
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-[#fdfbf7] uppercase tracking-wider">ניווט במסע</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-[#e5c158] transition-colors">החזון והסטנדרט</a></li>
              <li><a href="#space-walkthrough" className="hover:text-[#e5c158] transition-colors">ארכיטקטורת החלל</a></li>
              <li><a href="#trust" className="hover:text-[#e5c158] transition-colors">שקט נפשי מלא</a></li>
              <li><a href="#event-types" className="hover:text-[#e5c158] transition-colors">סוגי אירועים</a></li>
              <li><a href="#calculator" className="hover:text-[#e5c158] transition-colors">מתכנן קונספט</a></li>
              <li><a href="#gallery" className="hover:text-[#e5c158] transition-colors">גלריה</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-[#fdfbf7] uppercase tracking-wider">התמחויות</h4>
            <ul className="space-y-2.5 text-sm text-[#ded5cb]">
              <li>חתונות יוקרה בטבע וגנים פרטיים</li>
              <li>אירועים עסקיים, השקות וגאלות</li>
              <li>מסיבות VIP ווילות יוקרה</li>
              <li>בר ובת מצווה בקונספט צעיר ומפואר</li>
              <li>תאורת אווירה ואקוסטיקה מבוקרת</li>
            </ul>
          </div>

          {/* WhatsApp & Contact Details */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-[#fdfbf7] uppercase tracking-wider">יצירת קשר ישירה</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppUrl('פנייה מה-Footer באתר')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#e5c158] hover:text-white transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 fill-[#e5c158]" />
                  <span className="font-bold">WhatsApp עסקי רשמי</span>
                  <span className="text-xs text-stone-400 group-hover:text-stone-300">(צ'אט ישיר)</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <Mail className="w-4 h-4 text-stone-400" />
                <span className="font-mono">office@nofar-events.co.il</span>
              </li>
              <li className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>מגדלי עזריאלי, תל אביב</span>
              </li>
            </ul>
            
            {/* Direct WhatsApp Pill */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('תיאום שיחת היכרות עם נופר')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25211d] border border-theme-gold text-sm font-bold text-[#e5c158] hover:bg-[#2e2924] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-[#e5c158]" />
                <span>שיחה ב-WhatsApp עכשיו</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-400 font-medium">
          <div>
            © 2026 נופר הפקות אירועי יוקרה. כל הזכויות שמורות.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>לראש הדף</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
