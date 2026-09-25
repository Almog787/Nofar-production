import React from 'react';
import { Mail, MapPin, Camera, Globe, ArrowUp, MessageSquare, Lock } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#e5c158] text-[#121110] flex items-center justify-center font-serif font-bold text-lg">
                N
              </div>
              <span className="text-xl font-serif font-bold text-white uppercase tracking-wider">
                נופר <span className="font-light text-[#e5c158]">| הפקות אירועים</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              הפקת אירועי יוקרה, חתונות, כנסים ומסיבות קונספט. אסתטיקה מאופקת, חום אנושי וליווי אישי מקצה לקצה.
            </p>
            <div className="text-[11px] font-mono text-[#e5c158]">
              // בוטיק אקסקלוסיבי: עד 2 אירועים בחודש
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ניווט במסע</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">החזון והסטנדרט</a></li>
              <li><a href="#space-walkthrough" className="hover:text-white transition-colors">ארכיטקטורת החלל</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">שקט נפשי מלא</a></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">סוגי אירועים</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">מתכנן קונספט</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">גלריה</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">התמחויות</h4>
            <ul className="space-y-2 text-xs">
              <li>חתונות יוקרה בטבע וגנים פרטיים</li>
              <li>אירועים עסקיים, השקות וגאלות</li>
              <li>מסיבות VIP ווילות יוקרה</li>
              <li>בר ובת מצווה בקונספט צעיר ומפואר</li>
              <li>תאורת אווירה ואקוסטיקה מבוקרת</li>
            </ul>
          </div>

          {/* WhatsApp & Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">יצירת קשר ישירה</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getWhatsAppUrl('פנייה מה-Footer באתר')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#e5c158] hover:text-white transition-colors group"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#e5c158]" />
                  <span className="font-semibold">WhatsApp עסקי רשמי</span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300">(צ'אט ישיר)</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>office@nofar-events.co.il</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>מגדלי עזריאלי, תל אביב</span>
              </li>
            </ul>
            
            {/* Direct WhatsApp Pill */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl('תיאום שיחת היכרות עם נופר')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c1917] border border-[#d4af37]/35 text-xs font-semibold text-[#e5c158] hover:bg-[#2a2521] transition-all"
              >
                <MessageSquare className="w-3 h-3 fill-[#e5c158]" />
                <span>שיחה ב-WhatsApp עכשיו</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 נופר הפקות אירועי יוקרה. כל הזכויות שמורות.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>לראש הדף</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
