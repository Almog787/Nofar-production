import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, Lock } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  customSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, customSubject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    eventType: 'חתונה',
    notes: customSubject || '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `היי נופר, שמי ${formData.fullName}. פניתי מהאתר לתיאום פגישה לגבי ${formData.eventType}.${formData.notes ? ` פרטים נוספים: ${formData.notes}` : ''}`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="theme-bg-card border border-theme-gold rounded-3xl max-w-lg w-full p-6 sm:p-9 relative shadow-2xl overflow-hidden theme-shadow-warm">
        
        {/* Top Accent Bar */}
        <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 theme-text-muted hover:theme-text-head p-2 rounded-xl theme-bg-card-subtle border border-theme-gold cursor-pointer"
          aria-label="סגור"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-2 shadow-xl font-bold">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold theme-text-head">
              ההודעה מוכנה ב-WhatsApp!
            </h3>
            <p className="text-sm sm:text-base theme-text-body font-normal leading-relaxed">
              השיחה נפתחה ישירות מול נופר ב-WhatsApp בערוץ מאובטח עם הפרטים שהזנתם.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-7 py-3 text-sm font-bold text-[#121110] bg-[#e5c158] rounded-xl cursor-pointer"
              >
                סגור חלון
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-theme-gold pb-3.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9e751d] dark:text-[#e5c158] mb-1">
                <MessageSquare className="w-4 h-4 fill-[#9e751d] dark:fill-[#e5c158]" />
                <span>WhatsApp עסקי רשמי ומאובטח</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold theme-text-head">
                תיאום שיחת היכרות
              </h3>
              <p className="text-xs sm:text-sm theme-text-muted mt-1 font-normal">
                מלאו את הפרטים וההודעה תיפתח ישירות ב-WhatsApp של נופר.
              </p>
            </div>

            {customSubject && (
              <div className="theme-bg-card-subtle p-3 rounded-xl border border-theme-gold text-xs sm:text-sm text-[#9e751d] dark:text-[#e5c158] font-semibold">
                <strong>נושא:</strong> {customSubject}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-bold theme-text-head">שם מלא *</label>
              <input
                type="text"
                required
                placeholder="ישראל ישראלי"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold theme-text-head">סוג האירוע</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none"
              >
                <option value="חתונה">חתונה</option>
                <option value="אירוע חברה">אירוע חברה / כנס</option>
                <option value="בר/בת מצווה">בר / בת מצווה</option>
                <option value="מסיבת VIP">מסיבת VIP פרטית</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold theme-text-head">פרטים נוספים / תאריך מבוקש</label>
              <textarea
                rows={3}
                placeholder="רשמו כאן פרטים או שאלות..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-2.5 text-base theme-text-head focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <MessageSquare className="w-5 h-5 fill-[#121110]" />
              <span>מעבר ל-WhatsApp עם ההודעה</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold theme-text-muted pt-1">
              <Lock className="w-4 h-4 text-[#9e751d] dark:text-[#e5c158]" />
              <span>ערוץ ישיר ומאובטח · דיסקרטיות מלאה מובטחת</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
