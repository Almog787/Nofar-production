import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  customSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, customSubject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'חתונה',
    notes: customSubject || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-[#1c1917] border border-[#d4af37]/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Top Accent Bar */}
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-[#d8cfc4] hover:text-white p-1.5 rounded-lg bg-[#121110] border border-[#d4af37]/30 cursor-pointer"
          aria-label="סגור"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-2 shadow-xl font-bold">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
              הפנייה התקבלה בהצלחה!
            </h3>
            <p className="text-xs text-[#d8cfc4] font-light leading-relaxed">
              תודה רבה {formData.fullName}. נופר תחזור אליך ישירות בהקדם לשיחת ייעוץ חמה ונעימה.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-bold text-[#121110] bg-[#e5c158] rounded-lg cursor-pointer mt-4"
            >
              סגור חלון
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border-b border-[#d4af37]/20 pb-3">
              <h3 className="text-xl font-serif font-bold text-[#fdfbf7]">
                תיאום פגישת ייעוץ אישית
              </h3>
              <p className="text-xs text-[#d8cfc4] mt-1">
                השאירו פרטים ונופר תחזור אליכם ישירות.
              </p>
            </div>

            {customSubject && (
              <div className="bg-[#121110] p-3 rounded-lg border border-[#d4af37]/30 text-xs text-[#e5c158]">
                <strong>נושא:</strong> {customSubject}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#f3eee6]">שם מלא *</label>
              <input
                type="text"
                required
                placeholder="ישראל ישראלי"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#f3eee6]">מספר טלפון *</label>
              <input
                type="tel"
                required
                placeholder="050-0000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#f3eee6]">סוג האירוע</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
              >
                <option value="חתונה">חתונה</option>
                <option value="אירוע חברה">אירוע חברה / כנס</option>
                <option value="בר/בת מצווה">בר / בת מצווה</option>
                <option value="מסיבת VIP">מסיבת VIP פרטית</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#f3eee6]">הערות נוספות</label>
              <textarea
                rows={2}
                placeholder="תאריך משוער, כמות מוזמנים או דגשים מיוחדים..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>שולח...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>שליחה וקבלת שיחה מנופר</span>
                </>
              )}
            </button>

            <div className="text-center pt-2 flex items-center justify-center gap-1 text-xs text-[#d8cfc4]">
              <Phone className="w-3.5 h-3.5 text-[#e5c158]" />
              <span>חייגו ישירות: <strong className="font-mono text-[#fdfbf7]" dir="ltr">054-123-4567</strong></span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
