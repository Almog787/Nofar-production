import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { NOFAR_WHATSAPP_DISPLAY, getWhatsAppUrl } from '../utils/whatsapp';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    eventType: 'חתונה',
    guestCount: '200-400',
    eventDate: '',
    notes: initialSubject || '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `היי נופר, שמי ${formData.fullName}. אשמח לתאם פגישה לגבי ${formData.eventType} (${formData.guestCount} מוזמנים${formData.eventDate ? `, תאריך משוער: ${formData.eventDate}` : ''}). ${formData.notes ? `פרטים נוספים: ${formData.notes}` : ''}`;
    
    setSubmitted(true);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
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
                <span>יצירת קשר ישירה ב-WhatsApp</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
                בואו נדבר על האירוע שלכם
              </h2>
            </div>

            <p className="text-sm text-[#d8cfc4] font-light leading-relaxed">
              נשמח להכיר, להקשיב לציפיות שלכם ולהציג בפניכם מתווה הפקה מדויק בשיחה נינוחה וישירה מול נופר.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Business Concierge Card */}
              <a
                href={getWhatsAppUrl('פנייה ישירה לתיאום פגישה')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#1c1917]/90 border border-[#e5c158]/50 hover:border-[#e5c158] transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2a2521] border border-[#e5c158]/40 flex items-center justify-center text-[#e5c158] group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#e5c158] font-mono uppercase font-bold">WhatsApp עסק רשמי</span>
                    <span className="px-1.5 py-0.2 rounded bg-[#e5c158] text-[#121110] text-[9px] font-bold">זמין עכשיו</span>
                  </div>
                  <span className="text-base font-bold text-[#fdfbf7] font-mono mt-0.5 block" dir="ltr">
                    {NOFAR_WHATSAPP_DISPLAY}
                  </span>
                  <span className="text-xs text-[#d8cfc4]">שליחת הודעה מוכנה מראש לנופר</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">דואר אלקטרוני</span>
                  <span className="text-sm font-bold text-[#fdfbf7] font-mono">office@nofar-events.co.il</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-9 h-9 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#d8cfc4] block">סטודיו</span>
                  <span className="text-sm font-bold text-[#fdfbf7]">מגדלי עזריאלי, תל אביב</span>
                </div>
              </div>
            </div>

            {/* Scarcity badge */}
            <div className="p-3.5 rounded-xl bg-[#171513] border border-[#d4af37]/25 flex items-center gap-3 text-xs text-[#d8cfc4]">
              <ShieldCheck className="w-4 h-4 text-[#e5c158] shrink-0" />
              <span>תשומת לב מלאה: אירוע אחד ביום ועד שני אירועים בחודש.</span>
            </div>

          </div>

          {/* Form Side (7 cols) - Routes to prefilled WhatsApp */}
          <div className="lg:col-span-7 bg-[#1c1917]/90 p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-10 space-y-3 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-3 shadow-xl font-bold">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  הפרטים מוכנים ב-WhatsApp!
                </h3>
                <p className="text-xs text-[#d8cfc4] max-w-sm mx-auto font-light leading-relaxed">
                  ההודעה נוסחה מראש עבורכם ונפתחה ישירות בחלון ה-WhatsApp של נופר.
                </p>
                <div className="pt-3">
                  <a
                    href={getWhatsAppUrl(`היי נופר, שמי ${formData.fullName}. אשמח לתאם פגישה עבור אירוע ${formData.eventType}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#121110] bg-[#e5c158] rounded-xl shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#121110]" />
                    <span>פתיחה מחדש ב-WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#d4af37]/20 pb-3">
                  <h3 className="text-lg font-serif font-bold text-[#fdfbf7]">
                    תיאום פגישה מהיר ב-WhatsApp
                  </h3>
                  <p className="text-xs text-[#d8cfc4] mt-0.5">
                    הפרטים יישלחו כהודעה מוכנה מראש ישירות לנופר.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#f3eee6]">שם מלא *</label>
                  <input
                    type="text"
                    required
                    placeholder="שם פרטי ומשפחה"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">סוג אירוע</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="חתונה">חתונה</option>
                      <option value="אירוע חברה">אירוע חברה / כנס</option>
                      <option value="בר/בת מצווה">בר / בת מצווה</option>
                      <option value="מסיבת VIP">מסיבת VIP פרטית</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#f3eee6]">כמות אורחים משוערת</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
                    >
                      <option value="עד 100">עד 100 אורחים</option>
                      <option value="100-200">100-200 אורחים</option>
                      <option value="200-400">200-400 אורחים</option>
                      <option value="400+">400+ אורחים</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#f3eee6]">תאריך מועדף (אופציונלי)</label>
                  <input
                    type="text"
                    placeholder="לדוגמה: מאי 2026 / סתיו הקרוב"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#f3eee6]">הערות או חלום מיוחד</label>
                  <textarea
                    rows={2}
                    placeholder="ספרו לנו קצת על מה שחשוב לכם באירוע..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <MessageSquare className="w-4 h-4 fill-[#121110]" />
                  <span>מעבר ל-WhatsApp עם ההודעה המוכנה</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
