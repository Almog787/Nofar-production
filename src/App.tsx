import React, { useState } from 'react';

// Import high-resolution custom generated event space & decor images (pure architectural atmospheres, no generic crowds)
import heroImg from './assets/images/hero_estate_decor_1790748893908.jpg';
import estateWeddingImg from './assets/images/estate_wedding_decor_1790748906655.jpg';
import vipLoungeImg from './assets/images/vip_lounge_decor_1790748925738.jpg';
import corporateSummitImg from './assets/images/corporate_summit_decor_1790748938040.jpg';
import galileeWeddingImg from './assets/images/galilee_wedding_decor_1790748950218.jpg';
import intimateSoireeImg from './assets/images/intimate_soiree_decor_1790748963347.jpg';

// Data types for Concepts & Real Proposals
type ConceptCategory = 'all' | 'weddings' | 'corporate' | 'vip';

interface ConceptProposal {
  id: string;
  category: 'weddings' | 'corporate' | 'vip';
  title: string;
  subtitle: string;
  badge: string;
  guests: string;
  proposalNum: string;
  subType: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  colSpan: string;
  aspect: string;
  atmosphereNotes: string;
  estimatedTimeline: string[];
  palette: string[];
}

const CONCEPT_PROPOSALS: ConceptProposal[] = [
  {
    id: 'estate-wedding',
    category: 'weddings',
    title: 'חתונת ערב מלכותית בנחלה פרטית בשרון',
    subtitle: 'ESTATE SUNSET CEREMONY',
    badge: 'חתונה בנחלה פרטית • שרון',
    guests: '150 - 350 מוזמנים',
    proposalNum: 'קונספט 01',
    subType: 'חתונה פתוחה תחת כיפת השמיים',
    description: 'קונספט ערב בעיצוב אדריכלי מותאם מאפס. מאות נרות ופמוטי קריסטל, סידורי פרחים עשירים באלביון בורדו ולבן שמנת, תאורת גרילנדות חמות 2700K וקולינריה ברמת שף.',
    features: [
      'תאורת אווירה חמה ומחמיאה (2700K) סביב עצי הנחלה',
      'שזירה בוטנית עונתית עשירה על גבי שולחנות עץ אלון',
      'סאונד אקוסטי מותאם לקבלת פנים ומערכת הגברה מלאה לרחבה',
      'נוכחות ופיקוח מלא של נופר משעות הבוקר המוקדמות',
      'התאמת גנרטורים כפולים וגיבוי חשמל מלא',
    ],
    tags: ['נחלה פרטית', 'תאורה חמה', 'שזירה בוטנית', 'שף בוטיק'],
    image: estateWeddingImg,
    colSpan: 'lg:col-span-7',
    aspect: 'aspect-[16/11]',
    atmosphereNotes: 'שקיעה רומנטית, בריזת ערב, ריח יסמין ופרחים רעננים, שולחנות עץ ארוכים מוארים בעשרות נרות.',
    estimatedTimeline: [
      '18:30 — קבלת פנים וקוקטיילים עם הרכב אקוסטי חי',
      '19:45 — טקס חופה מרגש בשעת השקיעה המוזהבת',
      '20:30 — ארוחת ערב שף בישיבה אלגנטית',
      '21:45 — פתיחת רחבת הריקודים ומסיבה לתוך הלילה',
    ],
    palette: ['#faf8f5', '#dfc89e', '#8a6d2b', '#201e1b'],
  },
  {
    id: 'secret-soiree',
    category: 'vip',
    title: "מסיבת לאונג' VIP & קוקטייל אקסקלוסיבי",
    subtitle: 'EXCLUSIVE SUNSET LOUNGE',
    badge: 'מסיבת שקיעה • וילה בקיסריה',
    guests: '60 - 160 מוזמנים',
    proposalNum: 'קונספט 02',
    subType: 'אירוח יוקרתי בוילה פרטית',
    description: "בר שיש מרכזי שקוע, עיצובי שזירה תלויים בגווני ענבר ומג'נטה דרמטיים, מיקסולוגיה אישית ואווירת לאונג' יוקרתי ברמה הגבוהה ביותר סביב הבריכה.",
    features: [
      'מיקסולוגיה מותאמת אישית עם 3 קוקטיילי חתימה',
      'עמדת בר שקוע ועיצובי שזירה בוטנית תלויה',
      'הרכב לייב צ׳ילאאוט & דיג׳יי מוביל',
      'אירוח VIP דיסקרטי ומוקפד עם צוות מלצרים צמוד',
    ],
    tags: ['60-160 מוזמנים', 'לוקיישן פרטי', 'בר מיקסולוגיה', 'סאונד לאונג׳'],
    image: vipLoungeImg,
    colSpan: 'lg:col-span-5',
    aspect: 'aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4]',
    atmosphereNotes: 'תאורת שקיעה זהובה, קוקטיילים מעושנים, מקומות ישיבה נמוכים ואינטימיים סביב בריכה מוארת.',
    estimatedTimeline: [
      '19:00 — כניסה אינטימית, שמפניה וטעימות שף Finger-Food',
      '20:30 — ברביקיו שף פרימיום ועמדות פתוחות',
      '22:00 — הרמת כוסית, דיג׳יי ומסיבת ריקודים אל תוך הלילה',
    ],
    palette: ['#201e1b', '#dfc89e', '#c5a059', '#faf8f5'],
  },
  {
    id: 'corporate-summit',
    category: 'corporate',
    title: 'אירוע השקה יוקרתי & כנס מנהלים שנתי',
    subtitle: 'EXECUTIVE SUMMIT & BRAND LAUNCH',
    badge: 'השקת מותג וכנס מנהלים • תל אביב',
    guests: '120 - 450 מוזמנים',
    proposalNum: 'קונספט 03',
    subType: 'אירוע חברות, כנסי מנהלים והשקות מותג',
    description: 'תכנון וייצור במת תלת-ממד פרמטרית מוארת, מסכי לד מעוקלים, סנכרון אור וסאונד ממוחשב, שולחנות עגולים מעוצבים ואירוח ערב אלגנטי ברמת גימור עילאית.',
    features: [
      'בינוי במת תלת-ממד פרמטרית ומסכי לד באיכות שידור',
      'בימוי תוקרן, סרטוני השקה ותאורה ארגונית מחמיאה',
      'הגברה קונצרטית ואיזון אקוסטי ברמה בינלאומית',
      'ניהול לוגיסטי מדויק של שולחנות מנהלים וקייטרינג פרימיום',
      'עמדות רישום דיגיטליות מהירות ואירוח VIP',
    ],
    tags: ['במה מותאמת', 'בימוי תוכן', 'הגברה קונצרטית', 'קייטרינג שף'],
    image: corporateSummitImg,
    colSpan: 'lg:col-span-12',
    aspect: 'aspect-[16/9] lg:aspect-[16/10]',
    atmosphereNotes: 'יוקרה עסקית שקטה, קווים ארכיטקטוניים נקיים, תאורה ארגונית מחמיאה, דיוק מושלם של כל שנייה בלו״ז.',
    estimatedTimeline: [
      '18:00 — קבלת פנים, מינגלינג ונטוורקינג בליווי יין משובח',
      '19:15 — פתיחת האולם המרכזי ודברי פתיחה מפי ההנהלה',
      '20:00 — ארוחת ערב עסקית חגיגית בת 3 מנות',
      '21:15 — מופע מרכזי והשקת המוצר החדש',
    ],
    palette: ['#131314', '#ebe5dc', '#8a6d2b', '#ffffff'],
  },
  {
    id: 'galilee-friday',
    category: 'weddings',
    title: 'חתונת שישי צהריים בבוסתן גלילי פתוח',
    subtitle: 'GALILEAN BOTANIC WEDDING',
    badge: 'חתונת שישי • בוסתן צפוני',
    guests: '100 - 280 מוזמנים',
    proposalNum: 'קונספט 04',
    subType: 'חתונת שישי נינוחה ואלגנטית',
    description: 'חגיגת שישי צהריים עם עצי זית עתיקים, שולחנות שוק מקומיים עשירים בחומרי גלם טריים, יין בוטיק צפוני והרכב מוזיקלי חי בניחוח ים-תיכוני מעודן.',
    features: [
      'שולחנות עץ חשופים עם ראנרים מפשתן טבעי',
      'שזירת ענפי זית, פרחי בר עונתיים ולימונים טריים',
      'קייטרינג מהחווה לשולחן (Farm-to-Table) בטאבון עצים',
      'מערך הצללה מרהיב מפני שמש ישירה ופתרונות אוורור שקטים',
    ],
    tags: ['שישי צהריים', 'בוסתן טבעי', 'Farm to Table', 'הרכב חי'],
    image: galileeWeddingImg,
    colSpan: 'lg:col-span-6',
    aspect: 'aspect-[4/3]',
    atmosphereNotes: 'שמש נעימה בין ענפי הזית, בריזה צפונית, ריחות אפייה טרייה, יין לבן צונן ואווירה משפחתית חמה.',
    estimatedTimeline: [
      '11:30 — קבלת פנים בבוסתן עם מיצי פירות טריים ובר קוקטיילים קליל',
      '12:45 — חופה פתוחה מול הנוף הגלילי',
      '13:30 — סעודת צהריים עשירה מהטאבון ושולחנות שוק',
      '15:00 — מסיבת שישי עליזה עם דיג׳יי עד כניסת השבת',
    ],
    palette: ['#f6f3ee', '#5f5b55', '#8a6d2b', '#dfc89e'],
  },
  {
    id: 'intimate-villa',
    category: 'vip',
    title: 'מסיבת יום הולדת עגול 50 בוילה יוקרתית',
    subtitle: 'INTIMATE MILESTONE SOIREE',
    badge: 'חגיגת 50 • וילה פרטית',
    guests: '40 - 100 מוזמנים',
    proposalNum: 'קונספט 05',
    subType: 'אירוע בוטיק משפחתי וחברים קרובים',
    description: 'ערב אינטימי ומרגש במיוחד שנבנה סביב בעל/ת השמחה. ארוחת שף פרטית סביב שולחן אבירים ארוך עם כלי חרסינה ונרות, הקרנת וידאו ארט של רגעי חיים ומוזיקה חיה.',
    features: [
      'עיצוב שולחן אבירים מרהיב עם כלי חרסינה ופמוטי כסף',
      'תפריט שף מותאם של 5 מנות בליווי יינות מתאימים',
      'פינת צילום מעוצבת למזכרת יוקרתית לכל אורח',
      'סרטון הפתעה שהופק ונערך מראש בהנחיית נופר',
    ],
    tags: ['אירוע אינטימי', 'שולחן אבירים', 'שף פרטי', 'וילה יוקרתית'],
    image: intimateSoireeImg,
    colSpan: 'lg:col-span-6',
    aspect: 'aspect-[4/3]',
    atmosphereNotes: 'חמימות של בית עם שירות של מלון חמישה כוכבים סופריור, צחוק, התרגשות ויין טוב.',
    estimatedTimeline: [
      '19:30 — הגעת אורחים וקוקטייל פתיחה ליד האח או הבריכה',
      '20:30 — ארוחת שף יוקרתית בישיבה מלאה',
      '22:00 — ברכות, סרטון מרגש והרמת כוסית',
      '22:45 — קינוחים, קפה ומוזיקת ג׳אז חיה',
    ],
    palette: ['#22201d', '#ebe5dc', '#c5a059', '#faf8f5'],
  },
];

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Concept filtering state
  const [activeFilter, setActiveFilter] = useState<ConceptCategory>('all');
  const [selectedConcept, setSelectedConcept] = useState<ConceptProposal | null>(null);

  // Privacy & Terms modal state (safe custom inline modal, no window.alert)
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  // Interactive Estimator state
  const [calcType, setCalcType] = useState<'wedding' | 'summit' | 'private'>('wedding');
  const [guestCount, setGuestCount] = useState<number>(250);
  const [lightingChecked, setLightingChecked] = useState<boolean>(true);
  const [floralChecked, setFloralChecked] = useState<boolean>(true);
  const [barChecked, setBarChecked] = useState<boolean>(false);

  // -----------------------------------------------------------------
  // SMART WHATSAPP WISHLIST BUILDER STATE (Replaces old contact form)
  // -----------------------------------------------------------------
  const [wishlistEventType, setWishlistEventType] = useState<string>('חתונת בוטיק בנחלה / שטח');
  const [wishlistLocation, setWishlistLocation] = useState<string>('נחלה פרטית בשרון / מרכז');
  const [wishlistSeason, setWishlistSeason] = useState<string>('אביב / קיץ 2026');
  const [wishlistGuests, setWishlistGuests] = useState<string>('150 - 300 מוזמנים');
  const [wishlistHighlights, setWishlistHighlights] = useState<string[]>([
    'תאורת אווירה חמה (2700K) ונברשות',
    'שזירה בוטנית עשירה ומותאמת',
    'קייטרינג שף וקולינריה ברמה גבוהה',
  ]);
  const [wishlistClientName, setWishlistClientName] = useState<string>('');

  const toggleHighlight = (item: string) => {
    if (wishlistHighlights.includes(item)) {
      setWishlistHighlights(wishlistHighlights.filter((h) => h !== item));
    } else {
      setWishlistHighlights([...wishlistHighlights, item]);
    }
  };

  // Build the dynamic WhatsApp message text
  const generateWhatsAppMessage = () => {
    const nameIntro = wishlistClientName.trim()
      ? `שלום נופר, שמי ${wishlistClientName.trim()}. `
      : `היי נופר, `;
    const highlightsText =
      wishlistHighlights.length > 0
        ? `\n✨ דגשים ורצונות שחשובים לנו:\n• ${wishlistHighlights.join('\n• ')}`
        : '';

    return `${nameIntro}נכנסתי לאתר של הסטודיו והרכבתי מפרט רצונות לאירוע:
💎 סוג אירוע: ${wishlistEventType}
📍 לוקיישן מועדף: ${wishlistLocation}
🗓️ עונה משוערת: ${wishlistSeason}
👥 סדר גודל: ${wishlistGuests}${highlightsText}

אשמח שנשוחח ונבדוק זמינות לתיאום פגישת היכרות ואפיון!`;
  };

  const handleOpenWhatsAppWishlist = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/972548894231?text=${text}`, '_blank');
  };

  // Filtered concepts
  const filteredConcepts = CONCEPT_PROPOSALS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  // Realistic market calculations (Israeli boutique event numbers)
  const typeFactors = { wedding: 1.15, summit: 1.1, private: 1.0 };
  const currentFactor = typeFactors[calcType];
  const typeNames = {
    wedding: 'חתונת בוטיק בנחלה / שטח',
    summit: 'אירוע חברה / השקה עסקית',
    private: 'מסיבה פרטית VIP',
  };

  const extras =
    (lightingChecked ? 12000 : 0) +
    (floralChecked ? 18000 : 0) +
    (barChecked ? 14000 : 0);

  const baseMin = guestCount * 380 * currentFactor + extras;
  const baseMax = guestCount * 580 * currentFactor + extras + 25000;

  let tierName = 'Bespoke Atelier Signature';
  let tierDesc =
    'מעטפת הפקה מלאה ואינטימית: אדריכלות חלל, תיאום ספקים נבחרים, בקרה תקציבית שקופה ונוכחות מלאה של נופר מהבוקר.';
  let calcStaff = 'נופר + 2 מנהלי שטח צמודים';
  let calcPrep = '2-4 חודשים';

  if (guestCount <= 120) {
    tierName = 'Intimate Boutique Atelier';
    tierDesc =
      'אירוע אינטימי ואיכותי עם דגש על שירות אישי, קולינריה מדויקת ועיצוב שולחנות מוקפד.';
    calcStaff = 'נופר + מנהל שטח צמוד';
    calcPrep = '1-2 חודשים';
  } else if (guestCount > 350) {
    tierName = 'Grand Estate Sovereign';
    tierDesc =
      'הפקת שטח מורכבת הכוללת תיאום תשתיות, חשמל, גיבויים, סנכרון עשרות ספקים וניהול רציף של מספר מתחמים.';
    calcStaff = 'נופר + 3-4 מנהלי שטח';
    calcPrep = '4-6 חודשים';
  }

  const formattedMin = '₪' + Math.round(baseMin).toLocaleString();
  const formattedMax = '₪' + Math.round(baseMax).toLocaleString();

  const handleCalculatorWhatsApp = () => {
    const text = encodeURIComponent(
      `היי נופר, השתמשתי במחשבון הקונספט באתר: מדובר ב-${typeNames[calcType]} עבור כ-${guestCount} מוזמנים. אומדן המעטפת שהתקבל הוא ${tierName} (${formattedMin} - ${formattedMax}). אשמח שנשוחח על תיאום פגישת אפיון!`
    );
    window.open(`https://wa.me/972548894231?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#faf8f5] text-[#22201d] font-sans antialiased min-h-screen selection:bg-[#c5a059] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP MINIMALIST EDITORIAL NAVIGATION                        */}
      {/* ------------------------------------------------------------- */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ece7de] transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a className="flex items-center gap-3 group" href="#hero">
            <span className="font-headline tracking-[0.2em] text-xl font-medium text-[#22201d] group-hover:text-[#8a6d2b] transition-colors">
              NOFAR
            </span>
            <span className="h-3 w-[1px] bg-[#e2dcd3]" />
            <span className="font-mono-label text-[10px] tracking-[0.25em] text-[#5f5b55] uppercase hidden sm:inline-block">
              BOUTIQUE EVENT ATELIER
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-right">
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#portfolio"
            >
              הצעות לקונספטים
            </a>
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#advantage"
            >
              היתרון של עסק חדש
            </a>
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#services"
            >
              עמודי התווך
            </a>
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#process"
            >
              תהליך ההפקה
            </a>
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#calculator"
            >
              מחשבון קונספט
            </a>
            <a
              className="text-xs uppercase tracking-[0.14em] text-[#5f5b55] hover:text-[#22201d] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#8a6d2b] hover:after:w-full after:transition-all"
              href="#wishlist-contact"
            >
              הרכבת פנייה ב-WhatsApp
            </a>
          </nav>

          {/* Trailing Action: WhatsApp Direct Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/972548894231?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A4%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%95%D7%9C%D7%AA%D7%90%D7%9D%20%D7%A4%D7%92%D7%99%D7%A9%D7%AA%20%D7%94%D7%99%D7%9B%D7%A8%D7%95%D7%AA%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono-label tracking-[0.14em] uppercase px-5 py-2.5 bg-[#201e1b] text-[#fbfaf8] hover:bg-[#8a6d2b] transition-all duration-300 rounded-none shadow-sm cursor-pointer"
            >
              <span>שיחה ב-WhatsApp</span>
              <span className="material-symbols-outlined text-[15px]">chat</span>
            </a>
            <button
              aria-label="Open Menu"
              className="md:hidden text-[#22201d] p-2 focus:outline-none cursor-pointer"
              id="mobileMenuToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf8f5] border-t border-[#ece7de] px-6 py-6 flex flex-col gap-4 text-sm animate-in slide-in-from-top-2 text-right">
            <a
              className="text-[#22201d] font-medium py-1"
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
            >
              הצעות לקונספטים
            </a>
            <a
              className="text-[#5f5b55] hover:text-[#22201d] py-1"
              href="#advantage"
              onClick={() => setMobileMenuOpen(false)}
            >
              היתרון של עסק בוטיק חדש
            </a>
            <a
              className="text-[#5f5b55] hover:text-[#22201d] py-1"
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
            >
              עמודי התווך
            </a>
            <a
              className="text-[#5f5b55] hover:text-[#22201d] py-1"
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
            >
              תהליך ההפקה ב-5 שלבים
            </a>
            <a
              className="text-[#5f5b55] hover:text-[#22201d] py-1"
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
            >
              מחשבון קונספט ותקציב
            </a>
            <a
              className="text-[#5f5b55] hover:text-[#22201d] py-1"
              href="#wishlist-contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              הרכבת פנייה ב-WhatsApp
            </a>
            <a
              href="https://wa.me/972548894231?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A4%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%95%D7%9C%D7%AA%D7%90%D7%9D%20%D7%A4%D7%92%D7%99%D7%A9%D7%AA%20%D7%94%D7%99%D7%9B%D7%A8%D7%95%D7%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center text-xs tracking-widest uppercase bg-[#201e1b] hover:bg-[#8a6d2b] text-white py-3 cursor-pointer transition-colors block"
            >
              שיחה ישירה ב-WhatsApp עם נופר
            </a>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 2. HERO SECTION (Tailored to a Fresh Boutique Studio)         */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden" id="hero">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* Top Tagline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-7 mb-10 hairline-b gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#8a6d2b]" />
              <span className="font-mono-label text-[11px] tracking-[0.22em] uppercase text-[#5f5b55]">
                BOUTIQUE EVENT STUDIO • FRESH PERSPECTIVE & HIGH CRAFT
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono-label tracking-[0.16em] text-[#8a6d2b]">
              <span>עונת השקה 2026/2027</span>
              <span>•</span>
              <span className="text-[#5f5b55]">פגישות אפיון אישיות עם נופר</span>
            </div>
          </div>

          {/* Main Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 text-right">
            <div className="lg:col-span-8">
              <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.1] tracking-tight text-[#1e1c19]">
                הפקת אירועי בוטיק <br />
                <span className="italic font-normal text-[#8a6d2b]">
                  ברוח רעננה, אישית ומדויקת
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:pb-2">
              <p className="text-[#5f5b55] text-base sm:text-lg font-light leading-relaxed mb-6">
                אנחנו סטודיו בוטיק חדש ורענן, שקם מתוך התשוקה להביא אלגנטיות מאופקת, עיצוב שנוגע בלב ושקט נפשי אמיתי. אצלנו אתם לא &quot;עוד אירוע בלוח השנה&quot;, אלא פרויקט הדגל שמקבל 200% תשומת לב, יצירתיות ונוכחות מלאה של נופר.
              </p>
              <div className="flex items-center gap-4 justify-end lg:justify-start">
                <a
                  href="#wishlist-contact"
                  className="inline-flex items-center gap-2 text-xs font-mono-label tracking-[0.16em] uppercase px-6 py-3.5 bg-[#201e1b] text-white hover:bg-[#8a6d2b] transition-all duration-300 cursor-pointer"
                >
                  <span>הרכבת פנייה ב-WhatsApp</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_left</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 text-xs font-mono-label tracking-[0.16em] uppercase px-5 py-3.5 border border-[#e2dcd3] hover:border-[#8a6d2b] text-[#22201d] hover:text-[#8a6d2b] transition-all cursor-pointer"
                  href="#portfolio"
                >
                  <span>הצעות לקונספטים</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Featured Editorial Photo - Architectural Olive Grove Twilight Setup */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[#e2dcd3] bg-[#efebe4]">
            <img
              alt="Bespoke luxury event styling and olive grove tablescape by Nofar"
              className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] transition-transform duration-1000 ease-out hover:scale-[1.02]"
              src={heroImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end text-white pointer-events-none">
              <div className="bg-black/35 backdrop-blur-md px-4 py-2 text-xs tracking-widest font-mono-label uppercase border border-white/20">
                NOFAR BOUTIQUE ATELIER • FRESH SEASON
              </div>
              <span className="text-xs text-white/90 hidden sm:inline-block font-light">
                תכנון ועיצוב קונספט אישי ומותאם
              </span>
            </div>
          </div>

          {/* Standards of a New Boutique Studio */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-6 hairline-t text-right">
            <div>
              <div className="font-cormorant text-3xl md:text-4xl text-[#1e1c19]">1</div>
              <div className="text-xs text-[#5f5b55] font-mono-label tracking-wider uppercase mt-1">
                אירוע יחיד ביום (100% פוקוס)
              </div>
            </div>
            <div>
              <div className="font-cormorant text-3xl md:text-4xl text-[#1e1c19]">1:1</div>
              <div className="text-xs text-[#5f5b55] font-mono-label tracking-wider uppercase mt-1">
                ליווי ישיר של נופר מהבוקר
              </div>
            </div>
            <div>
              <div className="font-cormorant text-3xl md:text-4xl text-[#1e1c19]">0%</div>
              <div className="text-xs text-[#5f5b55] font-mono-label tracking-wider uppercase mt-1">
                עמלות נסתרות ושקיפות מוחלטת
              </div>
            </div>
            <div>
              <div className="font-cormorant text-3xl md:text-4xl text-[#1e1c19]">100%</div>
              <div className="text-xs text-[#5f5b55] font-mono-label tracking-wider uppercase mt-1">
                התאמה אישית ללא תבניות שחוקות
              </div>
            </div>
          </div>
        </div>

        {/* Real Grounded Specializations Strip */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-12 pt-8 hairline-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-[#5f5b55]">
            <div className="flex items-center gap-2.5 text-xs font-mono-label tracking-[0.2em] uppercase text-[#8a6d2b]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a6d2b]" />
              <span>התמחויות הבוטיק שלנו:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-xs font-mono-label tracking-wider uppercase text-[#22201d]">
              <span>נחלות פרטיות בשרון ובמרכז</span>
              <span className="text-[#dfc89e]">•</span>
              <span>אירועי טבע פתוחים</span>
              <span className="text-[#dfc89e]">•</span>
              <span>וילות יוקרה בקיסריה והסביבה</span>
              <span className="text-[#dfc89e]">•</span>
              <span>מתחמי בוטיק וגלריות אירוח</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE NEW BOUTIQUE ADVANTAGE (Why Work With a New Studio)    */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-[#f6f3ee] hairline-t hairline-b relative" id="advantage">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-right">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase font-semibold">
                THE NEW STUDIO ADVANTAGE
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal leading-tight">
                למה לבחור דווקא בסטודיו בוטיק חדש?
              </h2>
              <p className="text-sm sm:text-base text-[#5f5b55] font-light leading-relaxed">
                בחברות הפקה ותיקות, אירועים עלולים להפוך ל&quot;פס ייצור&quot; מנוהל על ידי מתאמים מתחלפים. אצלנו, כעסק חדש ורענן, כל אירוע הוא חלון הראווה והמוניטין החשוב ביותר שלנו.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white p-6 border border-[#e2dcd3]">
                <div className="w-10 h-10 bg-[#faf8f5] border border-[#8a6d2b]/30 flex items-center justify-center text-[#8a6d2b] mb-4">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </div>
                <h4 className="font-medium text-base text-[#22201d] mb-2">אכפתיות ורעב להצלחה</h4>
                <p className="text-xs text-[#5f5b55] font-light leading-relaxed">
                  האירוע שלכם מקבל את מלוא האנרגיה, התשוקה והפוקוס המוחלט – שום פרט לא מתפספס.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#e2dcd3]">
                <div className="w-10 h-10 bg-[#faf8f5] border border-[#8a6d2b]/30 flex items-center justify-center text-[#8a6d2b] mb-4">
                  <span className="material-symbols-outlined text-xl">person_check</span>
                </div>
                <h4 className="font-medium text-base text-[#22201d] mb-2">קשר ישיר מול נופר</h4>
                <p className="text-xs text-[#5f5b55] font-light leading-relaxed">
                  בלי מתווכים ובלי טלפון שבור. אתם מדברים ישירות עם מי שמנהלת את האירוע בפועל.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#e2dcd3]">
                <div className="w-10 h-10 bg-[#faf8f5] border border-[#8a6d2b]/30 flex items-center justify-center text-[#8a6d2b] mb-4">
                  <span className="material-symbols-outlined text-xl">palette</span>
                </div>
                <h4 className="font-medium text-base text-[#22201d] mb-2">עיצוב עכשווי וטרנדי</h4>
                <p className="text-xs text-[#5f5b55] font-light leading-relaxed">
                  שפה עיצובית רעננה המחוברת למגמות החמות ביותר בעולם האירועים והקולינריה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. SELECTED WORKS / EDITORIAL CONCEPT LOOKBOOK                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#faf8f5] relative" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-right">
            <div>
              <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3 font-semibold">
                REALISTIC CONCEPT PORTFOLIO
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
                תיק הצעות ורעיונות להשראה
              </h2>
              <p className="text-[#5f5b55] text-sm sm:text-base mt-2 max-w-xl font-light leading-relaxed">
                כהפקת בוטיק רעננה ואותנטית, גיבשנו עבורכם הצעות קונספט ישימות, מפורטות ומדויקות לכל סגנון. כל הצעה כוללת חזון, מפרט ספקים, לוח זמנים משוער ופלטת גוונים.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-end" id="portfolioFilter">
              <button
                onClick={() => setActiveFilter('all')}
                className={`text-xs font-mono-label uppercase tracking-wider px-4 py-2 transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#201e1b] text-white shadow-sm'
                    : 'bg-[#ede8df] text-[#5f5b55] hover:text-[#22201d] hover:bg-[#e4ded4]'
                }`}
              >
                הכל
              </button>
              <button
                onClick={() => setActiveFilter('weddings')}
                className={`text-xs font-mono-label uppercase tracking-wider px-4 py-2 transition-all cursor-pointer ${
                  activeFilter === 'weddings'
                    ? 'bg-[#201e1b] text-white shadow-sm'
                    : 'bg-[#ede8df] text-[#5f5b55] hover:text-[#22201d] hover:bg-[#e4ded4]'
                }`}
              >
                חתונות בוטיק
              </button>
              <button
                onClick={() => setActiveFilter('corporate')}
                className={`text-xs font-mono-label uppercase tracking-wider px-4 py-2 transition-all cursor-pointer ${
                  activeFilter === 'corporate'
                    ? 'bg-[#201e1b] text-white shadow-sm'
                    : 'bg-[#ede8df] text-[#5f5b55] hover:text-[#22201d] hover:bg-[#e4ded4]'
                }`}
              >
                אירועי חברה והשקות מותג
              </button>
              <button
                onClick={() => setActiveFilter('vip')}
                className={`text-xs font-mono-label uppercase tracking-wider px-4 py-2 transition-all cursor-pointer ${
                  activeFilter === 'vip'
                    ? 'bg-[#201e1b] text-white shadow-sm'
                    : 'bg-[#ede8df] text-[#5f5b55] hover:text-[#22201d] hover:bg-[#e4ded4]'
                }`}
              >
                מסיבות VIP & לאונג׳
              </button>
            </div>
          </div>

          {/* Editorial Works Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {filteredConcepts.map((item) => (
              <article
                key={item.id}
                className={`${item.colSpan} bg-white border border-[#e2dcd3] p-5 sm:p-7 group transition-all duration-300 hover:shadow-lg text-right flex flex-col justify-between`}
              >
                {item.id === 'corporate-summit' ? (
                  /* Wide Banner Split for Corporate Summit */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
                    <div className="lg:col-span-7 aspect-[16/9] lg:aspect-[16/10] overflow-hidden relative bg-[#ede8df]">
                      <img
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={item.image}
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-mono-label tracking-wider uppercase text-[#22201d] border border-[#e2dcd3]">
                        {item.badge}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono-label">
                        {item.guests}
                      </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[11px] font-mono-label uppercase tracking-[0.2em] text-[#8a6d2b] font-semibold">
                            {item.proposalNum}
                          </span>
                          <span className="w-4 h-[1px] bg-[#e2dcd3]" />
                          <span className="text-xs text-[#5f5b55]">{item.subType}</span>
                        </div>
                        <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl text-[#22201d] group-hover:text-[#8a6d2b] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#5f5b55] mt-3 font-light leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {item.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-[#ede8df] text-[#5f5b55] text-xs font-mono-label"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 pt-5 hairline-t flex items-center justify-between">
                        <span className="text-xs text-[#968f84] font-light">
                          הפקה מודולרית מלאה • {item.guests}
                        </span>
                        <button
                          onClick={() => setSelectedConcept(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono-label uppercase tracking-widest text-[#201e1b] hover:text-[#8a6d2b] font-medium cursor-pointer"
                        >
                          <span>פירוט המפרט</span>
                          <span className="material-symbols-outlined text-sm">arrow_left</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Editorial Cards */
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className={`${item.aspect} overflow-hidden relative mb-6 bg-[#ede8df]`}>
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          src={item.image}
                        />
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-mono-label tracking-wider uppercase text-[#22201d] border border-[#e2dcd3]">
                          {item.badge}
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono-label">
                          {item.guests}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] font-mono-label uppercase tracking-[0.2em] text-[#8a6d2b] font-semibold">
                          {item.proposalNum}
                        </span>
                        <span className="w-4 h-[1px] bg-[#e2dcd3]" />
                        <span className="text-xs text-[#5f5b55]">{item.subType}</span>
                      </div>
                      <h3 className="font-cormorant text-2xl sm:text-3xl text-[#22201d] group-hover:text-[#8a6d2b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5f5b55] mt-2.5 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 hairline-t flex items-center justify-between">
                      <span className="text-xs text-[#968f84] font-light">
                        {item.tags.slice(0, 2).join(' • ')}
                      </span>
                      <button
                        onClick={() => setSelectedConcept(item)}
                        className="inline-flex items-center gap-1 text-xs font-mono-label uppercase tracking-widest text-[#201e1b] hover:text-[#8a6d2b] font-medium cursor-pointer"
                      >
                        <span>צפייה במפרט המלא</span>
                        <span className="material-symbols-outlined text-sm">arrow_left</span>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. BESPOKE SERVICES SECTION (Editorial Pillars)               */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#faf8f5] relative" id="services">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3">
              BOUTIQUE CRAFT & APPROACH
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              ארבעת עמודי התווך של ההפקה
            </h2>
            <p className="text-[#5f5b55] text-base mt-3 font-light leading-relaxed">
              הפקת אירוע מושלם אינה רק עיצוב – היא חיבור הרמוני בין אדריכלות חלל, ניהול תקציב הדוק ודיוק תפעולי שמעניק לכם שקט נפשי אמיתי.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 01 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between transition-all duration-300 hover:border-[#8a6d2b] group luxe-card-shadow text-right">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 hairline-b">
                  <span className="font-cormorant text-3xl text-[#8a6d2b] font-light">01</span>
                  <span className="material-symbols-outlined text-[#968f84] group-hover:text-[#8a6d2b] transition-colors text-2xl">
                    architecture
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#22201d] mb-3 group-hover:text-[#8a6d2b] transition-colors">
                  קונספט ועיצוב אדריכלי
                </h3>
                <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                  בניית לוחות השראה פרטניים (Moodboards), תוכניות הושבה וזרימת קהל, התאמת פלטת צבעים ייחודית ושפה ויזואלית הרמונית שמחברת כל פרט בחלל.
                </p>
              </div>
              <div className="mt-8 pt-4 hairline-t text-[11px] font-mono-label tracking-wider uppercase text-[#968f84]">
                Spatial Design • Storytelling
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between transition-all duration-300 hover:border-[#8a6d2b] group luxe-card-shadow text-right">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 hairline-b">
                  <span className="font-cormorant text-3xl text-[#8a6d2b] font-light">02</span>
                  <span className="material-symbols-outlined text-[#968f84] group-hover:text-[#8a6d2b] transition-colors text-2xl">
                    handshake
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#22201d] mb-3 group-hover:text-[#8a6d2b] transition-colors">
                  איתור ספקי עלית מותאמים
                </h3>
                <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                  חיבור לספקים מעולים שנבחרו בקפידה: קייטרינג שף, אומני שזירה עונתית, מעצבי תאורה, הרכבי מוזיקה ודיג׳ייז מובילים בלי פערי תיווך.
                </p>
              </div>
              <div className="mt-8 pt-4 hairline-t text-[11px] font-mono-label tracking-wider uppercase text-[#968f84]">
                Curated Partners • Tasting Panels
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between transition-all duration-300 hover:border-[#8a6d2b] group luxe-card-shadow text-right">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 hairline-b">
                  <span className="font-cormorant text-3xl text-[#8a6d2b] font-light">03</span>
                  <span className="material-symbols-outlined text-[#968f84] group-hover:text-[#8a6d2b] transition-colors text-2xl">
                    account_balance_wallet
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#22201d] mb-3 group-hover:text-[#8a6d2b] transition-colors">
                  ניהול תקציב בשקיפות מלאה
                </h3>
                <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                  קובץ בקרה פיננסי משותף בזמן אמת, פירוק כל הצעת מחיר עד לרמת הבורג, אפס חריגות תקציב ועזרה במשא ומתן הוגן ומקצועי מול הספקים.
                </p>
              </div>
              <div className="mt-8 pt-4 hairline-t text-[11px] font-mono-label tracking-wider uppercase text-[#968f84]">
                Budget Transparency • Fiscal Control
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between transition-all duration-300 hover:border-[#8a6d2b] group luxe-card-shadow text-right">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 hairline-b">
                  <span className="font-cormorant text-3xl text-[#8a6d2b] font-light">04</span>
                  <span className="material-symbols-outlined text-[#968f84] group-hover:text-[#8a6d2b] transition-colors text-2xl">
                    concierge
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[#22201d] mb-3 group-hover:text-[#8a6d2b] transition-colors">
                  פיקוח שטח וניהול יום האירוע
                </h3>
                <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                  נופר נוכחת בשטח מהבוקר המוקדם ועד אחרון האורחים. ניהול ספקים קפדני, עמידה מדויקת בלו״ז ופתרון מיידי של כל אתגר בשקט מוחלט.
                </p>
              </div>
              <div className="mt-8 pt-4 hairline-t text-[11px] font-mono-label tracking-wider uppercase text-[#968f84]">
                On-Site Command • Total Peace of Mind
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. THE 5-STEP BOUTIQUE JOURNEY (Realistic, Grounded Process)   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#f6f3ee] hairline-t hairline-b relative" id="process">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-right">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3">
              METHODOLOGY & ROADMAP
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              איך נראה תהליך ההפקה איתנו?
            </h2>
            <p className="text-[#5f5b55] text-base mt-3 font-light leading-relaxed">
              בלי הפתעות ובלי מתחים מיותרים – שלב אחרי שלב בדרך לאירוע מושלם.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 border border-[#e2dcd3] flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-2xl text-[#8a6d2b] block mb-3">01. הקשבה ואפיון</span>
                <h4 className="font-medium text-base text-[#22201d] mb-2">פגישת היכרות אישית</h4>
                <p className="text-xs text-[#5f5b55] leading-relaxed font-light">
                  יושבים על קפה, לומדים להכיר את הטעם, השאיפות והתקציב, ומגבשים את הכיוון האדריכלי הראשוני.
                </p>
              </div>
              <div className="mt-4 pt-3 hairline-t text-[10px] font-mono-label text-[#8a6d2b] uppercase">
                שלב ההשראה
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e2dcd3] flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-2xl text-[#8a6d2b] block mb-3">02. תוכנית ותקציב</span>
                <h4 className="font-medium text-base text-[#22201d] mb-2">בניית מאסטר-פלאן</h4>
                <p className="text-xs text-[#5f5b55] leading-relaxed font-light">
                  הגדרת מסגרת תקציבית שקופה לכל סעיף, יצירת לוח זמנים מפורט (Timeline) ובחירת הלוקיישן האידיאלי.
                </p>
              </div>
              <div className="mt-4 pt-3 hairline-t text-[10px] font-mono-label text-[#8a6d2b] uppercase">
                שליטה תקציבית
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e2dcd3] flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-2xl text-[#8a6d2b] block mb-3">03. נבחרת ספקים</span>
                <h4 className="font-medium text-base text-[#22201d] mb-2">טעימות והתאמות</h4>
                <p className="text-xs text-[#5f5b55] leading-relaxed font-light">
                  חיבור לספקים המדויקים לסגנון שלכם, ליווי אישי בטעימות קייטרינג, פגישות מוזיקה והתאמות שזירה.
                </p>
              </div>
              <div className="mt-4 pt-3 hairline-t text-[10px] font-mono-label text-[#8a6d2b] uppercase">
                איכות ללא פשרות
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e2dcd3] flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-2xl text-[#8a6d2b] block mb-3">04. סקיצות ושטח</span>
                <h4 className="font-medium text-base text-[#22201d] mb-2">סיור העמדה טכני</h4>
                <p className="text-xs text-[#5f5b55] leading-relaxed font-light">
                  סיור שטח מדוקדק עם מעצבי התאורה, צוות החשמל וההגברה, ובדיקת כל נקודות המעבר והגיבויים.
                </p>
              </div>
              <div className="mt-4 pt-3 hairline-t text-[10px] font-mono-label text-[#8a6d2b] uppercase">
                דיוק הנדסי
              </div>
            </div>

            <div className="bg-white p-6 border border-[#e2dcd3] flex flex-col justify-between">
              <div>
                <span className="font-cormorant text-2xl text-[#8a6d2b] block mb-3">05. יום האירוע</span>
                <h4 className="font-medium text-base text-[#22201d] mb-2">ניהול שקט ומלא</h4>
                <p className="text-xs text-[#5f5b55] leading-relaxed font-light">
                  נופר בשטח מהבוקר, מנצחת על כל הספקים. אתם מגיעים נטו ליהנות ולהתרגש יחד עם האורחים שלכם.
                </p>
              </div>
              <div className="mt-4 pt-3 hairline-t text-[10px] font-mono-label text-[#8a6d2b] uppercase">
                שקט נפשי מוחלט
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 7. BESPOKE EVENT CALCULATOR (With Direct WhatsApp Action)     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#faf8f5] relative" id="calculator">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3 font-semibold">
              BESPOKE EXPERIENCE CALCULATOR
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              מחשבון קונספט והערכת היקף
            </h2>
            <p className="text-[#5f5b55] text-sm sm:text-base mt-2 font-light">
              הזינו את פרטי האירוע המשוערים לקבלת אומדן תקציבי ריאלי ושליחה ישירה ל-WhatsApp של נופר.
            </p>
          </div>

          {/* Planning Container */}
          <div className="bg-[#ffffff] border border-[#e2dcd3] p-7 sm:p-10 luxe-card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-8 text-right">
                {/* Step 1: Event Type */}
                <div>
                  <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-3">
                    1. סוג ואופי האירוע
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcType('wedding')}
                      className={`p-3 text-center transition-all text-xs font-medium tracking-wide cursor-pointer ${
                        calcType === 'wedding'
                          ? 'bg-[#201e1b] text-white shadow-sm'
                          : 'bg-[#faf8f5] border border-[#e2dcd3] text-[#5f5b55] hover:text-[#22201d]'
                      }`}
                    >
                      חתונת בוטיק
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcType('summit')}
                      className={`p-3 text-center transition-all text-xs font-medium tracking-wide cursor-pointer ${
                        calcType === 'summit'
                          ? 'bg-[#201e1b] text-white shadow-sm'
                          : 'bg-[#faf8f5] border border-[#e2dcd3] text-[#5f5b55] hover:text-[#22201d]'
                      }`}
                    >
                      השקה ועסקי
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcType('private')}
                      className={`p-3 text-center transition-all text-xs font-medium tracking-wide cursor-pointer ${
                        calcType === 'private'
                          ? 'bg-[#201e1b] text-white shadow-sm'
                          : 'bg-[#faf8f5] border border-[#e2dcd3] text-[#5f5b55] hover:text-[#22201d]'
                      }`}
                    >
                      מסיבת VIP
                    </button>
                  </div>
                </div>

                {/* Step 2: Guests Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label
                      className="text-xs font-mono-label tracking-wider uppercase text-[#5f5b55]"
                      htmlFor="guestSlider"
                    >
                      2. כמות מוזמנים משוערת
                    </label>
                    <span className="font-cormorant text-2xl text-[#8a6d2b] font-medium">
                      {guestCount} מוזמנים
                    </span>
                  </div>
                  <input
                    className="w-full h-1.5 bg-[#e4ded4] appearance-none cursor-pointer editorial-slider"
                    id="guestSlider"
                    max="600"
                    min="50"
                    step="25"
                    type="range"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                  />
                  <div className="flex justify-between text-[11px] font-mono-label text-[#968f84] mt-2">
                    <span>50 אורחים (אינטימי)</span>
                    <span>300 אורחים</span>
                    <span>600 אורחים (מתחם רחב)</span>
                  </div>
                </div>

                {/* Step 3: Bespoke Additions */}
                <div>
                  <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-3">
                    3. שדרוגים מבוקשים (לבחירה)
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 bg-[#faf8f5] border border-[#e2dcd3] hover:border-[#8a6d2b]/50 cursor-pointer transition-colors">
                      <input
                        checked={lightingChecked}
                        onChange={(e) => setLightingChecked(e.target.checked)}
                        className="accent-[#8a6d2b] w-4 h-4 cursor-pointer"
                        type="checkbox"
                      />
                      <span className="text-xs sm:text-sm text-[#22201d]">
                        מיצגי תאורת אווירה חמה (2700K) ונברשות קריסטל תלויות
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-[#faf8f5] border border-[#e2dcd3] hover:border-[#8a6d2b]/50 cursor-pointer transition-colors">
                      <input
                        checked={floralChecked}
                        onChange={(e) => setFloralChecked(e.target.checked)}
                        className="accent-[#8a6d2b] w-4 h-4 cursor-pointer"
                        type="checkbox"
                      />
                      <span className="text-xs sm:text-sm text-[#22201d]">
                        שזירה בוטנית עונתית עשירה על גבי שולחנות ומתחם החופה
                      </span>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-[#faf8f5] border border-[#e2dcd3] hover:border-[#8a6d2b]/50 cursor-pointer transition-colors">
                      <input
                        checked={barChecked}
                        onChange={(e) => setBarChecked(e.target.checked)}
                        className="accent-[#8a6d2b] w-4 h-4 cursor-pointer"
                        type="checkbox"
                      />
                      <span className="text-xs sm:text-sm text-[#22201d]">
                        בר קוקטיילים ומיקסולוגיה פרימיום עם מותגי אלכוהול מיובאים
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Dynamic Output Card */}
              <div className="lg:col-span-5 bg-[#faf8f5] border border-[#e2dcd3] p-7 flex flex-col justify-between h-full text-right">
                <div>
                  <div className="flex items-center justify-between pb-4 hairline-b">
                    <span className="font-mono-label text-[10px] tracking-[0.25em] text-[#8a6d2b] uppercase font-semibold">
                      RECOMMENDED TIER
                    </span>
                    <span className="material-symbols-outlined text-[#8a6d2b] text-xl">
                      auto_awesome
                    </span>
                  </div>
                  <div className="my-6">
                    <h4 className="font-cormorant text-3xl text-[#22201d]">{tierName}</h4>
                    <p className="text-xs sm:text-sm text-[#5f5b55] font-light mt-2 leading-relaxed">
                      {tierDesc}
                    </p>
                  </div>
                  <div className="bg-white p-5 border border-[#e2dcd3] space-y-3 mb-6">
                    <div className="flex justify-between text-xs text-[#5f5b55]">
                      <span>מערך ניהול שטח:</span>
                      <span className="text-[#22201d] font-medium">{calcStaff}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#5f5b55]">
                      <span>משך תכנון מומלץ:</span>
                      <span className="text-[#22201d] font-medium">{calcPrep}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#5f5b55] pt-2 hairline-t">
                      <span className="font-mono-label uppercase tracking-wider text-[11px]">
                        אומדן מסגרת תקציבית:
                      </span>
                      <span className="text-[#8a6d2b] font-cormorant text-lg font-semibold">
                        {formattedMin} — {formattedMax}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleCalculatorWhatsApp}
                    className="w-full py-3.5 bg-[#201e1b] hover:bg-[#8a6d2b] text-white text-xs font-mono-label tracking-[0.16em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>שליחת המפרט לפגישת ייעוץ ב-WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-[#968f84] font-light mt-3">
                    *פותח שיחת WhatsApp ישירה עם נופר הכוללת את כל נתוני המחשבון.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 8. REAL CLIENT TESTIMONIALS                                   */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#f6f3ee] hairline-t hairline-b relative" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3">
              GENUINE EXPERIENCES
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              מילים מהאנשים שסמכו עלינו
            </h2>
            <p className="text-[#5f5b55] text-base mt-2 font-light">
              שקט נפשי, ירידה לפרטים הכי קטנים ותוצאה שמשאירה חיוך ענק.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            {/* Quote 1 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between luxe-card-shadow">
              <div>
                <div className="flex text-[#8a6d2b] mb-5 gap-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-cormorant text-xl text-[#22201d] leading-relaxed italic">
                  &quot;נופר פשוט הצילה אותנו מהלחץ של הפקת חתונה בנחלה של ההורים. מהרגע הראשון היא הביאה סדר מופתי, ספקים שכולם התלהבו מהם, וביום עצמו לא הרגשנו שום דאגה. הגענו נטו לחגוג!&quot;
                </p>
              </div>
              <div className="mt-8 pt-5 hairline-t flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#22201d]">שירה & יונתן גבעון</div>
                  <div className="text-xs text-[#5f5b55] font-light">חתונה בנחלה פרטית • מושב בצרה</div>
                </div>
                <div className="w-10 h-10 border border-[#8a6d2b]/40 bg-[#faf8f5] flex items-center justify-center font-cormorant text-[#8a6d2b] text-base font-semibold shrink-0">
                  ש&י
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between luxe-card-shadow">
              <div>
                <div className="flex text-[#8a6d2b] mb-5 gap-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-cormorant text-xl text-[#22201d] leading-relaxed italic">
                  &quot;אירוע ההשקה השנתי לבכירי החברה דרש רמת דיוק שוויצרית. נופר ניהלה את כל שלבי ההפקה בשקט נפשי מדהים, התקציב עמד בדיוק ביעדים שהגדרנו והפידבקים מההנהלה היו יוצאים מן הכלל.&quot;
                </p>
              </div>
              <div className="mt-8 pt-5 hairline-t flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#22201d]">מאיה כהן</div>
                  <div className="text-xs text-[#5f5b55] font-light">סמנכ״לית משאבי אנוש • חברת טכנולוגיה</div>
                </div>
                <div className="w-10 h-10 border border-[#8a6d2b]/40 bg-[#faf8f5] flex items-center justify-center font-cormorant text-[#8a6d2b] text-base font-semibold shrink-0">
                  מכ
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-[#ffffff] p-8 border border-[#e2dcd3] flex flex-col justify-between luxe-card-shadow">
              <div>
                <div className="flex text-[#8a6d2b] mb-5 gap-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-cormorant text-xl text-[#22201d] leading-relaxed italic">
                  &quot;חיפשנו מפיקה שבאמת תקשיב לנו ותייצר מסיבת 50 אינטימית ומרגשת בוילה. העיצוב, התאורה, האוכל והאווירה גרמו לכל האורחים להגיד שזה היה האירוע הכי יפה שהם היו בו.&quot;
                </p>
              </div>
              <div className="mt-8 pt-5 hairline-t flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#22201d]">דורון & מיכל לוי</div>
                  <div className="text-xs text-[#5f5b55] font-light">מסיבת יום הולדת 50 • וילה בקיסריה</div>
                </div>
                <div className="w-10 h-10 border border-[#8a6d2b]/40 bg-[#faf8f5] flex items-center justify-center font-cormorant text-[#8a6d2b] text-base font-semibold shrink-0">
                  ד&מ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. THE ATELIER MANIFESTO & FAQ                                */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#faf8f5] relative" id="faq">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono-label text-[11px] tracking-[0.25em] text-[#8a6d2b] uppercase block mb-3">
              HONEST & CLEAR ANSWERS
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              שאלות נפוצות ותפיסת עולם
            </h2>
            <p className="text-[#5f5b55] text-sm sm:text-base mt-2 font-light">
              כל מה שחשוב לדעת על תהליך הליווי, תכנון התקציב ורמת המחויבות שלנו לכל לקוח.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="bg-white p-7 border border-[#e2dcd3] luxe-card-shadow">
              <h3 className="font-cormorant text-xl text-[#22201d] font-medium mb-3">
                למה אתם מפיקים רק אירוע יחיד ביום?
              </h3>
              <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                כי אירוע של פעם בחיים דורש ריכוז מלא. נופר לא מפזרת תשומת לב בין מספר אירועים במקביל, אלא נוכחת בשטח מהבוקר המוקדם עד שאחרון האורחים עוזב.
              </p>
            </div>

            <div className="bg-white p-7 border border-[#e2dcd3] luxe-card-shadow">
              <h3 className="font-cormorant text-xl text-[#22201d] font-medium mb-3">
                איפה אתם מפיקים אירועים בארץ?
              </h3>
              <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                אנו מפיקים בנחלות פרטיות בשרון, גני אירועים ומלונות יוקרה במרכז, וילות בקיסריה, ואירועי טבע פתוחים בצפון ובדרום עם פתרונות תשתית מלאים.
              </p>
            </div>

            <div className="bg-white p-7 border border-[#e2dcd3] luxe-card-shadow">
              <h3 className="font-cormorant text-xl text-[#22201d] font-medium mb-3">
                איך מתבצע פיקוח התקציב ומניעת חריגות?
              </h3>
              <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                שקיפות מלאה היא עקרון ברזל. אנחנו בונים יחד קובץ תקציב מפורט, אתם מקבלים את הצעות המחיר המקוריות ישירות מהספקים, ללא עמלות תיווך סמויות.
              </p>
            </div>

            <div className="bg-white p-7 border border-[#e2dcd3] luxe-card-shadow">
              <h3 className="font-cormorant text-xl text-[#22201d] font-medium mb-3">
                האם מתאימים גם לאירועים אינטימיים של 60-120 אורחים?
              </h3>
              <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                בוודאי! אירועי בוטיק אינטימיים הם אחת ההתמחויות האהובות עלינו. באירוע אינטימי כל פרט עיצובי, שירות וקולינריה מורגש פי כמה.
              </p>
            </div>
          </div>

          {/* Creative Philosophy Card */}
          <div className="mt-16 p-8 border border-[#e4ded4] bg-[#f6f3ee] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-right">
              <span className="font-mono-label text-[10px] tracking-[0.2em] text-[#8a6d2b] uppercase font-semibold">
                CREATIVE PHILOSOPHY
              </span>
              <p className="font-cormorant text-2xl text-[#22201d] italic">
                ״אירוע אינו אוסף של פריטי עיצוב, אלא סימפוניה של רגש, תאורה ורגעים שנחרטים בזיכרון לנצח.״
              </p>
            </div>
            <div className="text-center md:text-left shrink-0">
              <span className="font-cormorant text-xl text-[#8a6d2b] font-medium block">
                נופר בן-דוד
              </span>
              <span className="font-mono-label text-[10px] tracking-wider text-[#968f84] uppercase">
                Founder & Lead Producer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 10. SMART WHATSAPP WISHLIST BUILDER & DIRECT CONTACT          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-[#f6f3ee] hairline-t relative" id="wishlist-contact">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] border border-[#8a6d2b]/30 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-label text-[11px] tracking-[0.2em] text-[#8a6d2b] uppercase font-semibold">
                WHATSAPP WISHLIST BUILDER
              </span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-[#1f1d1a] font-normal">
              בניית פנייה אישית ישירות ל-WhatsApp של נופר
            </h2>
            <p className="text-[#5f5b55] text-sm sm:text-base mt-2 font-light leading-relaxed">
              סמנו בכמה קליקים פשוטים את הרצונות, הסגנון והלוקיישן המועדף עליכם. המערכת תרכיב עבורכם הודעה מוכנה ומדויקת לפתיחת שיחה אישית ב-WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-right">
            {/* Step-by-Step Wishlist Selector Controls */}
            <div className="lg:col-span-7 bg-white border border-[#e2dcd3] p-7 sm:p-9 luxe-card-shadow space-y-7">
              {/* Step 1: Event Type */}
              <div>
                <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2.5 font-semibold">
                  1. איזה סוג אירוע אתם מתכננים?
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'חתונת בוטיק בנחלה / שטח',
                    'אירוע חברה / השקה עסקית',
                    'מסיבת VIP פרטית בוילה',
                    'אירוע שקיעה בטבע',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setWishlistEventType(type)}
                      className={`p-3 text-right text-xs font-medium transition-all cursor-pointer border ${
                        wishlistEventType === type
                          ? 'bg-[#201e1b] text-white border-[#201e1b] shadow-xs'
                          : 'bg-[#faf8f5] text-[#5f5b55] border-[#e2dcd3] hover:border-[#8a6d2b]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Location Preference */}
              <div>
                <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2.5 font-semibold">
                  2. לוקיישן או אזור מועדף
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'נחלה פרטית בשרון / מרכז',
                    'וילה יוקרתית בקיסריה',
                    'טבע פתוח / בוסתן',
                    'מתחם בוטיק / גלריה',
                    'מחפשים לוקיישן (ייעוץ)',
                  ].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setWishlistLocation(loc)}
                      className={`p-2.5 text-right text-xs transition-all cursor-pointer border ${
                        wishlistLocation === loc
                          ? 'bg-[#8a6d2b] text-white border-[#8a6d2b]'
                          : 'bg-[#faf8f5] text-[#5f5b55] border-[#e2dcd3] hover:border-[#8a6d2b]'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Season & Guest Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2.5 font-semibold">
                    3. עונה או תאריך יעד
                  </label>
                  <select
                    value={wishlistSeason}
                    onChange={(e) => setWishlistSeason(e.target.value)}
                    className="w-full bg-[#faf8f5] border border-[#e2dcd3] focus:border-[#8a6d2b] text-[#22201d] text-xs px-3.5 py-2.5 outline-none cursor-pointer"
                  >
                    <option value="אביב / קיץ 2026">אביב / קיץ 2026</option>
                    <option value="סתיו / חורף 2026">סתיו / חורף 2026</option>
                    <option value="עונת 2027">עונת 2027</option>
                    <option value="תאריך ספציפי (אציין בשיחה)">תאריך ספציפי (אציין בשיחה)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2.5 font-semibold">
                    4. כמות מוזמנים משוערת
                  </label>
                  <select
                    value={wishlistGuests}
                    onChange={(e) => setWishlistGuests(e.target.value)}
                    className="w-full bg-[#faf8f5] border border-[#e2dcd3] focus:border-[#8a6d2b] text-[#22201d] text-xs px-3.5 py-2.5 outline-none cursor-pointer"
                  >
                    <option value="40 - 100 מוזמנים (אינטימי)">40 - 100 מוזמנים (אינטימי)</option>
                    <option value="150 - 300 מוזמנים (נחלה / שטח)">150 - 300 מוזמנים (נחלה / שטח)</option>
                    <option value="300 - 500+ מוזמנים (מתחם רחב)">300 - 500+ מוזמנים (מתחם רחב)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Special Wishes & Atmosphere Highlights (Multi-select) */}
              <div>
                <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2.5 font-semibold">
                  5. דגשים ורצונות שחשובים לכם באירוע (סמנו מה שמתאים)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'תאורת אווירה חמה (2700K) ונברשות',
                    'שזירה בוטנית עשירה ומותאמת',
                    'בר קוקטיילים ומיקסולוגיה פרימיום',
                    'קייטרינג שף וקולינריה ברמה גבוהה',
                    'הרכב מוזיקלי חי בקבלת פנים',
                    'שקט נפשי ונוכחות מלאה של נופר בשטח',
                  ].map((item) => {
                    const isChecked = wishlistHighlights.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleHighlight(item)}
                        className={`p-2.5 text-right text-xs transition-all flex items-center gap-2 cursor-pointer border ${
                          isChecked
                            ? 'bg-[#faf8f5] border-[#8a6d2b] text-[#8a6d2b] font-medium'
                            : 'bg-[#ffffff] border-[#e2dcd3] text-[#5f5b55] hover:border-[#8a6d2b]/60'
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {isChecked ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 5: Optional Name */}
              <div>
                <label className="block text-xs font-mono-label tracking-wider uppercase text-[#5f5b55] mb-2 font-semibold">
                  6. השם שלכם (אופציונלי):
                </label>
                <input
                  type="text"
                  placeholder="לדוגמה: שירה ויונתן / רועי"
                  value={wishlistClientName}
                  onChange={(e) => setWishlistClientName(e.target.value)}
                  className="w-full bg-[#faf8f5] border border-[#e2dcd3] px-3.5 py-2.5 text-xs text-[#22201d] outline-none focus:border-[#8a6d2b] transition-colors"
                />
              </div>
            </div>

            {/* Live WhatsApp Memo Card Preview & Direct Trigger */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#ffffff] border border-[#e2dcd3] p-7 luxe-card-shadow text-right">
                <div className="flex items-center justify-between pb-4 hairline-b mb-4">
                  <div className="flex items-center gap-2 text-emerald-600 font-medium text-xs">
                    <span className="material-symbols-outlined text-lg">chat</span>
                    <span>תצוגה מקדימה להודעת ה-WhatsApp</span>
                  </div>
                  <span className="text-[10px] font-mono-label text-[#968f84] uppercase">
                    LIVE MEMO
                  </span>
                </div>

                {/* Simulated WhatsApp Chat Bubble */}
                <div className="bg-[#f0f2f5] border border-[#d1d7db] p-4 text-xs font-sans text-[#111b21] leading-relaxed rounded-tl-none rounded-2xl relative shadow-2xs whitespace-pre-line mb-6 font-light">
                  {generateWhatsAppMessage()}
                  <div className="text-[10px] text-[#667781] text-left mt-2 flex items-center justify-end gap-1">
                    <span>עכשיו</span>
                    <span className="material-symbols-outlined text-xs text-emerald-500">done_all</span>
                  </div>
                </div>

                {/* The Primary Action Button */}
                <button
                  onClick={handleOpenWhatsAppWishlist}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-mono-label tracking-[0.14em] uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md duration-300 font-semibold"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  <span>פתיחת שיחה ב-WhatsApp עם כל הרצונות</span>
                </button>

                <p className="text-[11px] text-center text-[#5f5b55] font-light mt-3">
                  בלחיצה ייפתח צ׳אט WhatsApp אישי ישירות מול נופר עם כל הבחירות והדגשים שסימנתם.
                </p>
              </div>

              {/* Studio Info Quick Card */}
              <div className="bg-[#faf8f5] p-6 border border-[#e2dcd3] space-y-3 text-xs text-[#5f5b55]">
                <div className="flex items-center gap-2.5 text-[#22201d] font-medium">
                  <span className="material-symbols-outlined text-[#8a6d2b] text-base">location_on</span>
                  <span>סטודיו נופר • תל אביב / מרכז והשרון</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#22201d] font-medium">
                  <span className="material-symbols-outlined text-[#8a6d2b] text-base">chat</span>
                  <span>ערוץ תקשורת ישיר: WhatsApp רשמי</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#5f5b55]">
                  <span className="material-symbols-outlined text-[#8a6d2b] text-base">schedule</span>
                  <span>מענה אישי ומהיר לאורך כל ימות השבוע</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 11. EDITORIAL FOOTER                                          */}
      {/* ------------------------------------------------------------- */}
      <footer className="w-full bg-[#faf8f5] hairline-t">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Logo in Footer */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline tracking-[0.2em] text-lg font-medium text-[#22201d] uppercase">
              NOFAR • ATELIER
            </span>
            <span className="font-mono-label text-[10px] text-[#5f5b55] tracking-[0.2em] uppercase">
              BOUTIQUE EVENT ARCHITECTURE & PRODUCTION
            </span>
          </div>

          {/* Copyright Notice */}
          <div className="font-mono-label text-[11px] text-[#968f84] text-center order-3 md:order-2">
            © 2026 NOFAR ATELIER. כל הזכויות שמורות.
          </div>

          {/* Footer Links - Safe custom modals */}
          <div className="flex items-center gap-6 order-2 md:order-3">
            <button
              className="text-[#5f5b55] hover:text-[#8a6d2b] font-mono-label text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
              onClick={() =>
                setModalContent({
                  title: 'מדיניות פרטיות ודיסקרטיות',
                  body: 'אנו בסטודיו נופר מחויבים באופן מלא לשמירה על פרטיות לקוחותינו ועל דיסקרטיות מוחלטת. כל הפרטים הנמסרים במסגרת פניות, פגישות אפיון וחוזים נשמרים בסודיות מלאה ולעולם לא יועברו לצד שלישי.',
                })
              }
            >
              פרטיות
            </button>
            <button
              className="text-[#5f5b55] hover:text-[#8a6d2b] font-mono-label text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
              onClick={() =>
                setModalContent({
                  title: 'תנאי שירות והתקשרות',
                  body: 'כל תוכניות ההפקה, לוחות ההשראה והסקיצות האדריכליות הינן קניין רוחני של סטודיו נופר. תהליך ההפקה מעוגן בהסכם עבודה מסודר המגדיר במדויק את תחומי האחריות, לוחות הזמנים והתנאים המסחריים בשקיפות מלאה.',
                })
              }
            >
              תנאים
            </button>
            <a
              href="https://wa.me/972548894231?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A0%D7%95%D7%A4%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A4%D7%A7%D7%AA%20%D7%90%D7%99%D7%A8%D7%95%D7%A2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5f5b55] hover:text-[#8a6d2b] font-mono-label text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
            >
              WhatsApp
            </a>
            <a
              href="#wishlist-contact"
              className="text-[#5f5b55] hover:text-[#8a6d2b] font-mono-label text-[11px] tracking-wider uppercase transition-colors"
            >
              הרכבת פנייה
            </a>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* 12. FLOATING VIP WHATSAPP BUTTON (BOTTOM-LEFT)                */}
      {/* ------------------------------------------------------------- */}
      <aside aria-label="VIP Concierge" className="fixed bottom-6 left-6 z-50 flex items-center">
        <a
          href="https://wa.me/972548894231?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%95%D7%A4%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%9C%D7%92%D7%91%D7%99%20%D7%94%D7%A4%D7%A7%D7%AA%20%D7%90%D7%99%D7%A8%D7%95%D7%A2"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#201e1b] hover:bg-[#25D366] text-white px-4 py-3 border border-[#8a6d2b]/40 shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono-label text-[11px] tracking-[0.16em] uppercase hidden sm:inline-block">
            WHATSAPP CONCIERGE
          </span>
          <span
            className="material-symbols-outlined text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            chat
          </span>
        </a>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* 13. CONCEPT DETAILS LIGHTBOX / MODAL                          */}
      {/* ------------------------------------------------------------- */}
      {selectedConcept && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedConcept(null)}
        >
          <div
            className="max-w-3xl w-full bg-[#faf8f5] border border-[#e2dcd3] shadow-2xl relative text-right overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedConcept(null)}
              className="absolute top-4 left-4 z-10 w-9 h-9 bg-black/70 border border-white/20 text-white flex items-center justify-center hover:text-[#8a6d2b] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#efebe4]">
              <img
                src={selectedConcept.image}
                alt={selectedConcept.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-mono-label tracking-wider uppercase text-[#22201d] border border-[#e2dcd3]">
                {selectedConcept.badge}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono-label text-xs text-[#8a6d2b] tracking-widest uppercase font-semibold">
                    {selectedConcept.proposalNum}
                  </span>
                  <span className="text-[#968f84]">•</span>
                  <span className="text-xs text-[#5f5b55]">{selectedConcept.subType}</span>
                </div>
                <h3 className="font-cormorant text-3xl text-[#22201d]">
                  {selectedConcept.title}
                </h3>
              </div>

              <p className="text-sm text-[#5f5b55] font-light leading-relaxed">
                {selectedConcept.description}
              </p>

              {/* Atmosphere notes */}
              <div className="bg-white p-4 border border-[#e2dcd3]">
                <span className="text-xs font-mono-label text-[#8a6d2b] uppercase tracking-wider block font-semibold mb-1">
                  אווירה ותחושה בחלל:
                </span>
                <p className="text-xs text-[#5f5b55] leading-relaxed">
                  {selectedConcept.atmosphereNotes}
                </p>
              </div>

              {/* Features breakdown */}
              <div className="space-y-2.5 pt-2 hairline-t">
                <span className="text-xs font-mono-label text-[#8a6d2b] uppercase tracking-wider block font-semibold">
                  מרכיבי הקונספט והמפרט הטכני:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#22201d]">
                  {selectedConcept.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#8a6d2b] text-base shrink-0">
                        check
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimated schedule */}
              <div className="space-y-2 pt-2 hairline-t">
                <span className="text-xs font-mono-label text-[#8a6d2b] uppercase tracking-wider block font-semibold">
                  לוח זמנים משוער לאירוע מסוג זה:
                </span>
                <div className="space-y-1.5 text-xs text-[#5f5b55]">
                  {selectedConcept.estimatedTimeline.map((time, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8a6d2b]" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="pt-4 hairline-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#968f84] font-light">
                  התאמה מומלצת: {selectedConcept.guests}
                </span>
                <a
                  href={`https://wa.me/972548894231?text=${encodeURIComponent(
                    `שלום נופר, ראיתי באתר את ${selectedConcept.proposalNum} ("${selectedConcept.title}") ואשמח שנתייעץ על התאמת הקונספט לאירוע שלנו!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-mono-label uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs font-semibold"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>התייעצות על הקונספט ב-WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 14. PRIVACY & TERMS MODAL (Safe custom modal, no alert)       */}
      {/* ------------------------------------------------------------- */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="max-w-md w-full bg-[#faf8f5] border border-[#e2dcd3] p-7 shadow-2xl relative text-right"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 left-4 text-[#5f5b55] hover:text-[#22201d] cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <h4 className="font-cormorant text-2xl text-[#22201d] mb-3">
              {modalContent.title}
            </h4>
            <p className="text-sm text-[#5f5b55] leading-relaxed font-light mb-6">
              {modalContent.body}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 bg-[#201e1b] text-white text-xs font-mono-label uppercase tracking-wider hover:bg-[#8a6d2b] transition-colors cursor-pointer"
            >
              סגירה
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
