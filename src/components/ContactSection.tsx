import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'חתונה',
    guestCount: '200-400',
    eventDate: '',
    notes: initialSubject || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>יצירת קשר אישית</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
                בואו נדבר על האירוע שלכם
              </h2>
            </div>

            <p className="text-sm text-[#d8cfc4] font-light leading-relaxed">
              נשמח להכיר, להקשיב לציפיות שלכם ולהציג בפניכם מתווה הפקה מדויק בשיחה נינוחה.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="tel:0541234567"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">חיוג ישיר</span>
                  <span className="text-sm font-bold text-[#fdfbf7] font-mono" dir="ltr">054-123-4567</span>
                </div>
              </a>

              <a
                href="https://wa.me/972541234567?text=%D7%94%D7%99%20%D7%A0%D7%95%D7%A4%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%AA%D7%90%D7%95%D7%9D%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%94%D7%99%D7%9B%D7%A8%D7%95%D7%AA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">WhatsApp</span>
                  <span className="text-sm font-bold text-[#fdfbf7]">הודעה ישירה</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">דואר אלקטרוני</span>
                  <span className="text-sm font-bold text-[#fdfbf7] font-mono">office@nofar-events.co.il</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">סטודיו</span>
                  <span className="text-sm font-bold text-[#fdfbf7]">מגדלי עזריאלי, תל אביב</span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1917]/90 p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-10 space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-3 shadow-xl font-bold">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  הפנייה התקבלה
                </h3>
                <p className="text-xs text-[#d8cfc4] max-w-sm mx-auto font-light">
                  תודה רבה. ניצור עמכם קשר בהקדם לתיאום שיחת היכרות אישית.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-bold text-[#121110] bg-[#e5c158] rounded-lg cursor-pointer mt-3"
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#d4af37]/20 pb-3">
                  <h3 className="text-lg font-serif font-bold text-[#fdfbf7]">
                    תיאום שיחת היכרות
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">שם מלא *</label>
                    <input
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">טלפון *</label>
                    <input
                      type="tel"
                      required
                      placeholder="050-0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">סוג האירוע</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="חתונה">חתונה</option>
                      <option value="אירוע חברה">אירוע חברה / כנס</option>
                      <option value="בר/בת מצווה">בר / בת מצווה</option>
                      <option value="מסיבת VIP">מסיבת VIP / פרטי</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">אורחים משוערים</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="עד 100">עד 100 אורחים</option>
                      <option value="100-250">100 - 250 אורחים</option>
                      <option value="250-500">250 - 500 אורחים</option>
                      <option value="500+">500+ אורחים</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#f3eee6]">הערות (רשות)</label>
                  <textarea
                    rows={2}
                    placeholder="פרטים נוספים, תאריך משוער או העדפות..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>שולח...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>שליחת פרטים לתיאום פגישה</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#e5c158]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>שיחת אפיון מקצועית ללא שום התחייבות</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
