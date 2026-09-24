import React from 'react';
import { Phone, Mail, MapPin, Camera, Globe, ArrowUp } from 'lucide-react';

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
              <div className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-950 flex items-center justify-center font-serif font-bold text-lg">
                N
              </div>
              <span className="text-xl font-serif font-bold text-white uppercase tracking-wider">
                נופר <span className="font-light text-zinc-400">| הפקות</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              הפקת אירועי יוקרה, חתונות, כנסים ומסיבות קונספט בשפה עיצובית מונוכרומטית נרדפת לשלמות.
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">ניווט מהיר</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">סוגי אירועים</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">מחשבון אירוע חכם</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">גלריית אירועים</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">תהליך ההפקה</a></li>
            </ul>
          </div>

          {/* Legal / Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">התמחויות</h4>
            <ul className="space-y-2 text-xs">
              <li>חתונות יוקרה בטבע וגני אירועים</li>
              <li>אירועים עסקיים, השקות וגאלות</li>
              <li>מסיבות VIP ואירועים פרטיים</li>
              <li>בר ובת מצווה בקונספט צעיר</li>
              <li>עיצוב מונוכרומטי וטוטאל דיזיין</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">יצירת קשר</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span dir="ltr">054-123-4567</span>
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
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors" title="אינסטגרם">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors" title="אתר אינטרנט">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 נופר הפקות אירועים. כל הזכויות שמורות.
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
