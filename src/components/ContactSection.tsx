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
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#121110] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c158]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>צור קשר ושיחת ייעוץ</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#fdfbf7] tracking-tight leading-tight">
                בואו נצניח יחד את האירוע שלכם לשיא
              </h2>
            </div>

            <p className="text-base text-[#d8cfc4] font-light leading-relaxed">
              צרו עמנו קשר לתיאום פגישת ייעוץ ואפיון קונספט ראשונית ללא כל התחייבות. הצוות החם והאכפתי שלנו זמין עבורכם לכל שאלה.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:0541234567"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:bg-[#e5c158] group-hover:text-[#121110] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#d8cfc4] block">טלפון ישיר לנופר</span>
                  <span className="text-base font-bold text-[#fdfbf7] font-mono" dir="ltr">054-123-4567</span>
                </div>
              </a>

              <a
                href="https://wa.me/972541234567?text=%D7%94%D7%99%20%D7%A0%D7%95%D7%A4%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%94%D7%A4%D7%A7%D7%AA%20%D7%90%D7%99%D7%A8%D7%95%D7%A2"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158] group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#d8cfc4] block">WhatsApp מהיר</span>
                  <span className="text-base font-bold text-[#fdfbf7]">הודעה מהירה בווצאפ</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-10 h-10 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#d8cfc4] block">דואר אלקטרוני</span>
                  <span className="text-base font-bold text-[#fdfbf7] font-mono">office@nofar-events.co.il</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1917]/80 border border-[#d4af37]/20">
                <div className="w-10 h-10 rounded-lg bg-[#2a2521] border border-[#d4af37]/30 flex items-center justify-center text-[#e5c158]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#d8cfc4] block">משרדים וסטודיו</span>
                  <span className="text-base font-bold text-[#fdfbf7]">מגדלי עזריאלי, תל אביב</span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1917]/90 p-8 sm:p-10 rounded-2xl border border-[#d4af37]/30 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#e5c158] text-[#121110] flex items-center justify-center mx-auto mb-4 shadow-xl font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#fdfbf7]">
                  פנייתך התקבלה באהבה!
                </h3>
                <p className="text-sm text-[#d8cfc4] max-w-md mx-auto font-light">
                  תודה רבה! צוות נופר הפקות אירועים ייצור עמך קשר תוך זמן קצר לתיאום שיחת הייעוץ החמה.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-bold text-[#121110] bg-[#e5c158] rounded-lg cursor-pointer mt-4"
                >
                  שליחת פנייה נוספת
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#d4af37]/20 pb-4">
                  <h3 className="text-xl font-serif font-bold text-[#fdfbf7]">
                    טופס תיאום פגישת ייעוץ אישית
                  </h3>
                  <p className="text-xs text-[#d8cfc4] mt-1">
                    מלאו את הפרטים ונחזור אליכם ישירות.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#f3eee6]">שם מלא *</label>
                    <input
                      type="text"
                      required
                      placeholder="ישראל ישראלי"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
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
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#f3eee6]">אימייל (רשות)</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#f3eee6]">סוג האירוע</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="חתונה">חתונה</option>
                      <option value="אירוע חברה">אירוע חברה / כנס</option>
                      <option value="בר/בת מצווה">בר / בת מצווה</option>
                      <option value="מסיבת VIP">מסיבת VIP / אירוע פרטי</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#f3eee6]">כמות מוזמנים משוערת</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="עד 100">עד 100 אורחים</option>
                      <option value="100-250">100 - 250 אורחים</option>
                      <option value="250-500">250 - 500 אורחים</option>
                      <option value="500+">500+ אורחים</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#f3eee6]">תאריך אירוע משוער</label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#f3eee6]">הערות / בקשות מיוחדות</label>
                  <textarea
                    rows={3}
                    placeholder="ספרו לנו קצת על החזון שלכם או התקציב המתוכנן..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#121110] border border-[#d4af37]/30 focus:border-[#e5c158] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#e5c158] via-[#f5d77f] to-[#c5a059] hover:brightness-110 rounded-xl shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>שולח פנייה...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>שליחת טופס לתיאום פגישה חמה</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#e5c158] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>שיחת ייעוץ אישית, מקצועית וללא שום התחייבות</span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
