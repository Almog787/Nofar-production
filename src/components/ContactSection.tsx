import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle2, Sparkles, MessageSquare, Lock } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

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
    const message = `היי נופר, שמי ${formData.fullName}. אשמח לתאם שיחת היכרות לגבי ${formData.eventType} (${formData.guestCount} מוזמנים${formData.eventDate ? `, תאריך משוער: ${formData.eventDate}` : ''}). ${formData.notes ? `פרטים נוספים: ${formData.notes}` : ''}`;
    
    setSubmitted(true);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 theme-bg-section relative border-t border-theme-gold transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9e751d] dark:text-[#e5c158]">
                <Sparkles className="w-4 h-4" />
                <span>יצירת קשר ישירה ב-WhatsApp</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold theme-text-head tracking-tight leading-tight">
                בואו נדבר על האירוע שלכם
              </h2>
            </div>

            <p className="text-base sm:text-lg theme-text-body font-normal leading-relaxed">
              נשמח להכיר, להקשיב לציפיות שלכם ולהציג בפניכם מתווה הפקה מדויק בשיחה נינוחה וישירה מול נופר.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* WhatsApp Business Concierge Card */}
              <a
                href={getWhatsAppUrl('פנייה ישירה לשיחת היכרות')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl theme-bg-card border border-[#9e751d] hover:border-[#785611] transition-all group theme-shadow-warm"
              >
                <div className="w-12 h-12 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158] group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#9e751d] dark:text-[#e5c158] font-mono uppercase font-bold">WhatsApp עסקי רשמי</span>
                    <span className="px-2 py-0.5 rounded bg-[#e5c158] text-[#121110] text-xs font-bold">מענה ישיר מנופר</span>
                  </div>
                  <span className="text-base sm:text-lg font-bold theme-text-head mt-0.5 block">
                    שיחה ישירה ומאובטחת
                  </span>
                  <span className="text-xs sm:text-sm theme-text-muted font-medium">לחיצה למעבר לצ'אט עם הודעה מוכנה</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl theme-bg-card border border-theme-gold theme-shadow-warm">
                <div className="w-10 h-10 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs theme-text-muted font-semibold block">דואר אלקטרוני</span>
                  <span className="text-sm sm:text-base font-bold theme-text-head font-mono">office@nofar-events.co.il</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl theme-bg-card border border-theme-gold theme-shadow-warm">
                <div className="w-10 h-10 rounded-xl theme-bg-card-subtle border border-theme-gold flex items-center justify-center text-[#9e751d] dark:text-[#e5c158] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs theme-text-muted font-semibold block">סטודיו</span>
                  <span className="text-sm sm:text-base font-bold theme-text-head">מגדלי עזריאלי, תל אביב</span>
                </div>
              </div>
            </div>

            {/* Scarcity & Privacy Guarantee badge */}
            <div className="p-4 rounded-2xl theme-bg-card border border-theme-gold flex items-center gap-3 text-xs sm:text-sm theme-text-body font-medium">
              <Lock className="w-5 h-5 text-[#9e751d] dark:text-[#e5c158] shrink-0" />
              <span>ערוץ מאובטח ומוגן מספאם · אירוע יחיד ביום ועד שני אירועים בחודש.</span>
            </div>

          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 theme-bg-card p-6 sm:p-9 rounded-3xl border border-theme-gold theme-shadow-warm relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-3 shadow-xl font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold theme-text-head">
                  הפרטים מוכנים ב-WhatsApp!
                </h3>
                <p className="text-sm sm:text-base theme-text-body max-w-sm mx-auto font-normal leading-relaxed">
                  ההודעה נוסחה מראש עבורכם ונפתחה ישירות בחלון ה-WhatsApp של נופר.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl(`היי נופר, שמי ${formData.fullName}. אשמח לתאם פגישה עבור אירוע ${formData.eventType}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#121110] bg-[#e5c158] rounded-xl shadow-md"
                  >
                    <MessageSquare className="w-5 h-5 fill-[#121110]" />
                    <span>פתיחה מחדש ב-WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-theme-gold pb-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold theme-text-head">
                    תיאום שיחת היכרות ב-WhatsApp
                  </h3>
                  <p className="text-sm theme-text-muted mt-1 font-normal">
                    הפרטים יישלחו כהודעה מוכנה מראש ישירות לנופר ללא חשיפת הפרטים לספאם.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold theme-text-head">שם מלא *</label>
                  <input
                    type="text"
                    required
                    placeholder="שם פרטי ומשפחה"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold theme-text-head">סוג אירוע</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                    >
                      <option value="חתונה">חתונה</option>
                      <option value="אירוע חברה">אירוע חברה / כנס</option>
                      <option value="בר/בת מצווה">בר / בת מצווה</option>
                      <option value="מסיבת VIP">מסיבת VIP פרטית</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold theme-text-head">כמות אורחים משוערת</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                    >
                      <option value="עד 100">עד 100 אורחים</option>
                      <option value="100-200">100-200 אורחים</option>
                      <option value="200-400">200-400 אורחים</option>
                      <option value="400+">400+ אורחים</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold theme-text-head">תאריך מועדף (אופציונלי)</label>
                  <input
                    type="text"
                    placeholder="לדוגמה: מאי 2026 / סתיו הקרוב"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold theme-text-head">הערות או חלום מיוחד</label>
                  <textarea
                    rows={3}
                    placeholder="ספרו לנו קצת על מה שחשוב לכם באירוע..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full theme-bg-input border border-theme-gold focus:border-[#9e751d] rounded-xl px-4 py-3 text-base theme-text-head focus:outline-none resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-105 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
                >
                  <MessageSquare className="w-5 h-5 fill-[#121110]" />
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
