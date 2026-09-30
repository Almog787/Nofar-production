import React, { useState } from 'react';

// Import high-resolution custom generated event space & decor images (pure architectural atmospheres, no generic crowds)
import heroImg from './assets/images/hero_villa_pool_1790751906330.jpg';
import estateWeddingImg from './assets/images/estate_wedding_decor_1790748906655.jpg';
import vipLoungeImg from './assets/images/vip_lounge_decor_1790748925738.jpg';
import corporateSummitImg from './assets/images/corporate_summit_decor_1790748938040.jpg';
import galileeWeddingImg from './assets/images/galilee_wedding_decor_1790748950218.jpg';
import intimateSoireeImg from './assets/images/intimate_soiree_decor_1790748963347.jpg';

// Data types for Concepts & Real Proposals
type ProposalCategory = 'all' | 'weddings' | 'corporate' | 'vip';

interface ConceptProposal {
  id: string;
  category: 'weddings' | 'corporate' | 'vip';
  opusNum: string;
  badge: string;
  title: string;
  subtitle: string;
  guests: string;
  subType: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
  atmosphereNotes: string;
  estimatedTimeline: string[];
}

const PROPOSAL_LOOKBOOK: ConceptProposal[] = [
  {
    id: 'opus-01',
    category: 'weddings',
    opusNum: 'OPUS 01',
    badge: 'ESTATE SIGNATURE',
    title: 'חתונת ערב מלכותית — נחלת יוקרה',
    subtitle: 'ESTATE SUNSET CEREMONY',
    guests: '150 - 420 מוזמנים',
    subType: 'חתונה פתוחה תחת כיפת השמיים',
    description: '420 אורחים • עיצוב קונספט • מאסטר אקוסטי מותאם • מאות נרות ופמוטי קריסטל, סידורי פרחים עשירים באלביון בורדו ולבן שמנת, תאורת גרילנדות חמות 2700K וקולינריה ברמת שף.',
    features: [
      'תאורת אווירה חמה ומחמיאה (2700K) סביב עצי הנחלה',
      'שזירה בוטנית עונתית עשירה על גבי שולחנות עץ אלון',
      'סאונד אקוסטי מותאם לקבלת פנים ומערכת הגברה מלאה לרחבה',
      'נוכחות ופיקוח מלא של נופר משעות הבוקר המוקדמות',
      'התאמת גנרטורים כפולים וגיבוי חשמל מלא',
    ],
    tags: ['נחלה פרטית', 'תאורה חמה', 'שזירה בוטנית', 'שף בוטיק'],
    image: estateWeddingImg,
    atmosphereNotes: 'שקיעה רומנטית, בריזת ערב, ריח יסמין ופרחים רעננים, שולחנות עץ ארוכים מוארים בעשרות נרות.',
    estimatedTimeline: [
      '18:30 — קבלת פנים וקוקטיילים עם הרכב אקוסטי חי',
      '19:45 — טקס חופה מרגש בשעת השקיעה המוזהבת',
      '20:30 — ארוחת ערב שף בישיבה אלגנטית',
      '21:45 — פתיחת רחבת הריקודים ומסיבה לתוך הלילה',
    ],
  },
  {
    id: 'opus-02',
    category: 'vip',
    opusNum: 'OPUS 02',
    badge: 'VIP LOUNGE & PARTY',
    title: "מסיבת לאונג' VIP & קוקטייל אקסקלוסיבי",
    subtitle: 'EXCLUSIVE SUNSET LOUNGE',
    guests: '60 - 160 מוזמנים',
    subType: 'אירוח יוקרתי בוילה פרטית',
    description: "בר שיש מרכזי שקוף, עיצובי שזירה תלויים בגווני ענבר ומג'נטה דרמטיים, מיקסולוגיה עילית ואווירת לאונג' יוקרתי בריביירה סביב הבריכה.",
    features: [
      'מיקסולוגיה מותאמת אישית עם 3 קוקטיילי חתימה',
      'עמדת בר שקוע ועיצובי שזירה בוטנית תלויה',
      'הרכב לייב צ׳ילאאוט & דיג׳יי מוביל',
      'אירוח VIP דיסקרטי ומוקפד עם צוות מלצרים צמוד',
    ],
    tags: ['60-160 מוזמנים', 'לוקיישן פרטי', 'בר מיקסולוגיה', 'סאונד לאונג׳'],
    image: vipLoungeImg,
    atmosphereNotes: 'תאורת שקיעה זהובה, קוקטיילים מעושנים, מקומות ישיבה נמוכים ואינטימיים סביב בריכה מוארת.',
    estimatedTimeline: [
      '19:00 — כניסה אינטימית, שמפניה וטעימות שף Finger-Food',
      '20:30 — ברביקיו שף פרימיום ועמדות פתוחות',
      '22:00 — הרמת כוסית, דיג׳יי ומסיבת ריקודים אל תוך הלילה',
    ],
  },
  {
    id: 'opus-03',
    category: 'corporate',
    opusNum: 'OPUS 03 • GLOBAL SUMMIT',
    badge: 'השקת מותג וכנס מנהלים',
    title: 'אירוע השקה יוקרתי & במת כנס מנהלים אדריכלית',
    subtitle: 'EXECUTIVE SUMMIT & BRAND LAUNCH',
    guests: '120 - 600 מוזמנים',
    subType: 'אירוע חברות, כנסי מנהלים והשקות מותג',
    description: 'תכנון וייצור במת תלת-ממד פרמטרית מוארת, מסכי לד מעוקלים, סנכרון אור וסאונד ממוחשב, שולחנות עגולים מעוצבים ואירוח ערב אלגנטי ברמת גימור עילאית ל-600 בכירי תעשייה.',
    features: [
      'בינוי במת תלת-ממד פרמטרית ומסכי לד באיכות שידור',
      'בימוי תוכן, סרטוני השקה ותאורה ארגונית מחמיאה',
      'הגברה קונצרטית ואיזון אקוסטי ברמה בינלאומית',
      'ניהול לוגיסטי מדויק של שולחנות מנהלים וקייטרינג פרימיום',
      'עמדות רישום דיגיטליות מהירות ואירוח VIP',
    ],
    tags: ['במה מותאמת', 'בימוי תוכן', 'הגברה קונצרטית', 'קייטרינג שף'],
    image: corporateSummitImg,
    atmosphereNotes: 'יוקרה עסקית שקטה, קווים ארכיטקטוניים נקיים, תאורה ארגונית מחמיאה, דיוק מושלם של כל שנייה בלו״ז.',
    estimatedTimeline: [
      '18:00 — קבלת פנים, מינגלינג ונטוורקינג בליווי ייין משובח',
      '19:15 — פתיחת האולם המרכזי ודברי פתיחה מפי ההנהלה',
      '20:00 — ארוחת ערב עסקית חגיגית בת 3 מנות',
      '21:15 — מופע מרכזי והשקת המוצר החדש',
    ],
  },
  {
    id: 'opus-04',
    category: 'weddings',
    opusNum: 'OPUS 04 • BOTANIC GARDEN',
    badge: 'חתונת שישי • בוסתן צפוני',
    title: 'חתונת גליל פתוחה — שולחן אבירים כפרי-יוקרתי',
    subtitle: 'GALILEAN BOTANIC WEDDING',
    guests: '100 - 280 מוזמנים',
    subType: 'חתונת שישי נינוחה ואלגנטית',
    description: 'שולחן אבירים פתוח במטע זיתים, שזירת פרי הדר וצמחי תבלין ארצישראליים, קולינריית פאר כפרית בטאבון עצים ויין בוטיק מקומי.',
    features: [
      'שולחנות עץ חשופים עם ראנרים מפשתן טבעי',
      'שזירת ענפי זית, פרחי בר עונתיים ולימונים טריים',
      'קייטרינג מהחווה לשולחן (Farm-to-Table) בטאבון עצים',
      'מערך הצללה מרהיב מפני שמש ישירה ופתרונות אוורור שקטים',
    ],
    tags: ['שישי צהריים', 'בוסתן טבעי', 'Farm to Table', 'הרכב חי'],
    image: galileeWeddingImg,
    atmosphereNotes: 'שמש נעימה בין ענפי הזית, בריזה צפונית, ריחות אפייה טרייה, יין לבן צונן ואווירה משפחתית חמה.',
    estimatedTimeline: [
      '11:30 — קבלת פנים בבוסתן עם מיצי פירות טריים ובר קוקטיילים קליל',
      '12:45 — חופה פתוחה מול הנוף הגלילי',
      '13:30 — סעודת צהריים עשירה מהטאבון ושולחנות שוק',
      '15:00 — מסיבת שישי עליזה עם דיג׳יי עד כניסת השבת',
    ],
  },
  {
    id: 'opus-05',
    category: 'vip',
    opusNum: 'OPUS 05 • BESPOKE INTIMACY',
    badge: 'חגיגת 50 • וילה פרטית',
    title: 'סעודת סלון פרטית & שולחן אחוזת בוטיק',
    subtitle: 'INTIMATE MILESTONE CELEBRATION',
    guests: '40 - 100 מוזמנים',
    subType: 'אירוע בוטיק משפחתי וחברים קרובים',
    description: 'ארוחת ערב אינטימית בחדר אוכל מפואר, נברשות קריסטל, סידורי פרחים מלכותיים לאניני טעם, תפריט שף 5 מנות ומוזיקה חיה.',
    features: [
      'עיצוב שולחן אבירים מרהיב עם כלי חרסינה ופמוטי כסף',
      'תפריט שף מותאם של 5 מנות בליווי יינות מתאימים',
      'פינת צילום מעוצבת למזכרת יוקרתית לכל אורח',
      'סרטון הפתעה שהופק ונערך מראש בהנחיית נופר',
    ],
    tags: ['אירוע אינטימי', 'שולחן אבירים', 'שף פרטי', 'וילה יוקרתית'],
    image: intimateSoireeImg,
    atmosphereNotes: 'חמימות של בית עם שירות של מלון חמישה כוכבים סופריור, צחוק, התרגשות ויין טוב.',
    estimatedTimeline: [
      '19:30 — הגעת אורחים וקוקטייל פתיחה ליד האח או הבריכה',
      '20:30 — ארוחת שף יוקרתית בישיבה מלאה',
      '22:00 — ברכות, סרטון מרגש והרמת כוסית',
      '22:45 — קינוחים, קפה ומוזיקת ג׳אז חיה',
    ],
  },
];

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProposalCategory>('all');
  const [selectedProposal, setSelectedProposal] = useState<ConceptProposal | null>(null);
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  // Calculator State
  const [calcType, setCalcType] = useState<'wedding' | 'corporate' | 'vip'>('wedding');
  const [guestCount, setGuestCount] = useState<number>(250);
  const [lightingUpgrade, setLightingUpgrade] = useState<boolean>(true);
  const [floralUpgrade, setFloralUpgrade] = useState<boolean>(true);
  const [culinaryUpgrade, setCulinaryUpgrade] = useState<boolean>(false);

  // -----------------------------------------------------------------
  // SMART WHATSAPP WISHLIST BUILDER (Replaces traditional text form)
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

  // Under Construction & WhatsApp Dispatch Modal
  const [constructionModal, setConstructionModal] = useState<{
    isOpen: boolean;
    title: string;
    subtitle: string;
    intendedMessage: string;
    source: string;
  } | null>(null);
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFeedback(true);
    setTimeout(() => setCopiedFeedback(false), 2500);
  };

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

    return `${nameIntro}נכנסתי לאתר הסטודיו והרכבתי מפרט רצונות לאירוע:
💎 סוג אירוע: ${wishlistEventType}
📍 לוקיישן מועדף: ${wishlistLocation}
🗓️ עונה משוערת: ${wishlistSeason}
👥 סדר גודל: ${wishlistGuests}${highlightsText}

אשמח שנשוחח ונבדוק זמינות לתיאום פגישת היכרות ואפיון!`;
  };

  const handleOpenWhatsAppWishlist = () => {
    setConstructionModal({
      isOpen: true,
      title: 'מפרט רצונות לאירוע • Wishlist Concierge',
      subtitle: 'מערכת האירועים מרכזת את כל הדגשים שהגדרתם',
      intendedMessage: generateWhatsAppMessage(),
      source: 'רצונות ומפרט אירוע',
    });
  };

  // Calculate dynamic pricing and tiers
  const baseCostPerGuest = calcType === 'wedding' ? 620 : calcType === 'corporate' ? 540 : 750;
  const lightingCost = lightingUpgrade ? 28000 : 0;
  const floralCost = floralUpgrade ? 35000 : 0;
  const culinaryCost = culinaryUpgrade ? 22000 + guestCount * 80 : 0;

  const totalMin = Math.round((guestCount * baseCostPerGuest + lightingCost + floralCost + culinaryCost) * 0.9);
  const totalMax = Math.round((guestCount * baseCostPerGuest + lightingCost + floralCost + culinaryCost) * 1.25);

  const formattedMin = `₪${Math.round(totalMin / 1000)}k`;
  const formattedMax = `₪${Math.round(totalMax / 1000)}k`;

  let tierName = 'Bespoke Luxury Signature';
  let tierStaff = 'נופר + 5 מנהלי שטח';
  let tierPrep = '7-9 חודשי הפקה';

  if (calcType === 'corporate') {
    tierName = 'Executive Summit & Gala';
    tierStaff = 'נופר + 6 מנהלי שטח והפקה טכנית';
    tierPrep = '3-5 חודשי תכנון מואצים';
  } else if (calcType === 'vip') {
    tierName = 'Private VIP & Villa Celebration';
    tierStaff = 'נופר + 4 מנהלי אירוח צמודים';
    tierPrep = '2-4 חודשי הפקה אישית';
  }

  // Handle calculator message generation
  const generateCalculatorMessage = () => {
    const typeLabel =
      calcType === 'wedding'
        ? 'חתונת יוקרה'
        : calcType === 'corporate'
        ? 'גאלה ועסקי'
        : 'אירוע פרטי VIP';
    const upgrades = [
      lightingUpgrade ? 'בינוי תאורה אדריכלית' : '',
      floralUpgrade ? 'אומנות שזירה בעבודת מלאכת-יד' : '',
      culinaryUpgrade ? 'ניהול קולינרי ובר פרימיום' : '',
    ]
      .filter(Boolean)
      .join(', ');

    return `שלום נופר, הרכבתי מפרט במחשבון הקונספט באתר:
💎 סוג אירוע: ${typeLabel}
👥 מוזמנים: ${guestCount} אורחים
✨ שדרוגים: ${upgrades || 'סטנדרט בוטיק'}
📊 אומדן משוער: ${formattedMin} - ${formattedMax}

אשמח לתאם פגישת היכרות ואפיון!`;
  };

  const handleCalculatorWhatsApp = () => {
    setConstructionModal({
      isOpen: true,
      title: 'אומדן מחשבון קונספט • Production Estimates',
      subtitle: 'הערכת התקציב ומפרט ההפקה שחושב',
      intendedMessage: generateCalculatorMessage(),
      source: 'מחשבון קונספט',
    });
  };

  // Filtered proposals
  const filteredProposals = PROPOSAL_LOOKBOOK.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <div className="bg-[#fbf9f5] text-[#1b1c1a] antialiased selection:bg-[#ffdea5] selection:text-[#261900] min-h-screen">
      {/* ==================== SHARED HEADER (TopNavBar) ==================== */}
      <header className="sticky top-0 w-full z-50 bg-[#fbf9f5]/85 backdrop-blur-md border-b border-[#d1c5b4]/30 transition-all duration-300 ease-in-out shadow-[0_20px_40px_-15px_rgba(26,25,24,0.03)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Brand Logo Anchor */}
          <a className="flex items-center gap-3 group" href="#hero">
            <span className="font-headline-sm text-headline-sm uppercase tracking-widest text-[#1b1c1a] font-semibold flex items-center gap-2">
              <span>NOFAR</span>
              <span className="font-light text-[#775a19] tracking-normal">|</span>
              <span className="font-label-caps text-label-caps tracking-widest uppercase text-[#655e4e] hidden sm:inline-block">
                Luxury Event Productions
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#775a19] border-b border-[#775a19] pb-1 hover:text-[#775a19] duration-300"
              href="#gallery"
            >
              גלריית הצעות
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#4e4639] pb-1 transition-colors duration-300 hover:text-[#775a19]"
              href="#pillars"
            >
              שירותי בוטיק
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#4e4639] pb-1 transition-colors duration-300 hover:text-[#775a19]"
              href="#pillars"
            >
              עמודי התווך
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#4e4639] pb-1 transition-colors duration-300 hover:text-[#775a19]"
              href="#calculator"
            >
              מחשבון קונספט
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#4e4639] pb-1 transition-colors duration-300 hover:text-[#775a19]"
              href="#testimonials"
            >
              המלצות
            </a>
            <a
              className="font-label-caps text-label-caps uppercase tracking-widest text-[#4e4639] pb-1 transition-colors duration-300 hover:text-[#775a19]"
              href="#inquiry"
            >
              פגישת אפיון
            </a>
          </nav>

          {/* Primary Action CTA */}
          <div className="flex items-center gap-4">
            <a
              className="hidden sm:inline-flex items-center justify-center bg-[#1b1c1a] text-[#fbf9f5] px-7 py-3 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#775a19] transition-all duration-300 shadow-sm border border-transparent hover:border-[#c5a059]"
              href="#inquiry"
            >
              תיאום פגישה
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#1b1c1a] hover:text-[#775a19] cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f5] border-b border-[#d1c5b4]/40 px-6 py-6 space-y-4 text-right">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-caps text-xs tracking-widest text-[#775a19] font-medium py-2"
              href="#gallery"
            >
              תיק הצעות וקונספטים
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-caps text-xs tracking-widest text-[#4e4639] py-2"
              href="#pillars"
            >
              שירותי בוטיק ועמודי התווך
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-caps text-xs tracking-widest text-[#4e4639] py-2"
              href="#calculator"
            >
              מחשבון קונספט והערכת היקף
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-caps text-xs tracking-widest text-[#4e4639] py-2"
              href="#testimonials"
            >
              מילים מלקוחותינו
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-label-caps text-xs tracking-widest text-[#4e4639] py-2"
              href="#inquiry"
            >
              תיאום פגישת אפיון
            </a>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section
        className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-[#d1c5b4]/30"
        id="hero"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Subtitle Badge & Headline */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#1b1c1a] mb-6 font-normal tracking-tight">
              אמנות ההפקה והעיצוב העילי
            </h1>

            <p className="font-body-lg text-body-lg text-[#4e4639] max-w-3xl mx-auto leading-relaxed font-light">
              בריאת חוויות בלתי נשכחות בלוקיישנים מובחרים בישראל. מתרגמים חלומות לשפה אדריכלית מדויקת, קולינריה מורכבת ודייקנות אלגנטית באיפוק יוקרתי מושלם.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                className="inline-flex items-center justify-center bg-[#1b1c1a] text-[#fbf9f5] px-8 py-3.5 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#775a19] transition-all duration-300 shadow-sm border border-transparent hover:border-[#c5a059]"
                href="#inquiry"
              >
                תיאום פגישת היכרות
              </a>
              <a
                className="inline-flex items-center justify-center bg-transparent border border-[#c5a059] text-[#1b1c1a] px-8 py-3.5 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#f5f3ef] transition-all duration-300"
                href="#gallery"
              >
                תיק הצעות נבחר
              </a>
            </div>
          </div>

          {/* Hero Visual Plate */}
          <div className="relative rounded-xl overflow-hidden border border-[#d1c5b4]/40 shadow-[0_20px_40px_-15px_rgba(26,25,24,0.06),0_0_1px_rgba(197,160,89,0.25)] bg-[#f5f3ef]">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden group">
              <img
                alt="Luxury Villa & Sunset Pool Gala by Nofar Atelier"
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                src={heroImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/60 via-transparent to-transparent"></div>
              {/* Bottom Floating Caption */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-10 text-white flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#ffdea5]"></span>
                <span className="font-label-caps text-label-caps tracking-widest uppercase text-[#fbf9f5]">
                  ESTATE VILLA &amp; SUNSET POOL GALA • VOL. 24
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SELECTED PORTFOLIO (PROPOSALS & CONCEPTS) ==================== */}
      <section className="py-20 md:py-28 bg-[#f5f3ef]/40" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Title Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-right">
            <div>
              <div className="font-label-caps text-label-caps tracking-widest uppercase text-[#775a19] mb-2">
                SELECTED PORTFOLIO
              </div>
              <h2 className="font-headline-lg text-headline-lg text-[#1b1c1a]">
                תיק הצעות וקונספטים נבחרים
              </h2>
              <p className="font-body-md text-body-md text-[#4e4639] mt-2 max-w-xl font-light">
                הצצה למפרטי קונספט קוסטום-מייד המשלבים אור, חומר, טעמים וארכיטקטורה לחוויה בלתי נשכחת.
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#1b1c1a] text-[#fbf9f5] shadow-sm'
                    : 'bg-[#fbf9f5] border border-[#d1c5b4]/50 text-[#4e4639] hover:border-[#c5a059]'
                }`}
              >
                הכל (All)
              </button>
              <button
                onClick={() => setActiveFilter('weddings')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'weddings'
                    ? 'bg-[#1b1c1a] text-[#fbf9f5] shadow-sm'
                    : 'bg-[#fbf9f5] border border-[#d1c5b4]/50 text-[#4e4639] hover:border-[#c5a059]'
                }`}
              >
                חתונות יוקרה
              </button>
              <button
                onClick={() => setActiveFilter('corporate')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'corporate'
                    ? 'bg-[#1b1c1a] text-[#fbf9f5] shadow-sm'
                    : 'bg-[#fbf9f5] border border-[#d1c5b4]/50 text-[#4e4639] hover:border-[#c5a059]'
                }`}
              >
                אירועים עסקיים &amp; גאלה
              </button>
              <button
                onClick={() => setActiveFilter('vip')}
                className={`px-4 py-2 rounded-lg font-label-caps text-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === 'vip'
                    ? 'bg-[#1b1c1a] text-[#fbf9f5] shadow-sm'
                    : 'bg-[#fbf9f5] border border-[#d1c5b4]/50 text-[#4e4639] hover:border-[#c5a059]'
                }`}
              >
                מסיבות VIP &amp; לאונג'
              </button>
            </div>
          </div>

          {/* Bento-style Asymmetrical Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-right">
            {/* OPUS 01 - Featured Lead Plate (8 cols) */}
            {filteredProposals.some((p) => p.id === 'opus-01') && (
              <div className="md:col-span-8 bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-500 group flex flex-col justify-between shadow-sm">
                <div
                  className="aspect-[16/10] overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[0])}
                >
                  <img
                    alt="OPUS 01 Royal Wedding Reception"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    src={estateWeddingImg}
                  />
                  <div className="absolute top-4 right-4 bg-[#fbf9f5]/90 backdrop-blur-sm px-3 py-1 rounded border border-[#d1c5b4]/40 font-label-caps text-label-caps text-[#775a19] uppercase">
                    ESTATE SIGNATURE
                  </div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                    OPUS 01
                  </div>
                  <h3 className="font-headline-md text-headline-md text-[#1b1c1a] mb-3">
                    חתונת ערב מלכותית — נחלת יוקרה
                  </h3>
                  <p className="font-body-md text-body-md text-[#4e4639] font-light mb-6">
                    420 אורחים • עיצוב קונספט • מאסטר אקוסטי מותאם • מאות נרות ופמוטי קריסטל, סידורי פרחים עשירים באלביון בורדו ולבן שמנת, תאורת גרילנדות חמות 2700K וקולינריה ברמת שף.
                  </p>
                  <button
                    onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[0])}
                    className="inline-flex items-center gap-2 text-[#775a19] font-label-caps text-label-caps tracking-widest uppercase hover:underline cursor-pointer"
                  >
                    <span>סיור במפרט ההצעה</span>
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </button>
                </div>
              </div>
            )}

            {/* OPUS 02 - VIP Lounge (4 cols) */}
            {filteredProposals.some((p) => p.id === 'opus-02') && (
              <div className="md:col-span-4 bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-500 group flex flex-col justify-between shadow-sm">
                <div
                  className="aspect-square overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[1])}
                >
                  <img
                    alt="OPUS 02 VIP Lounge Party"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    src={vipLoungeImg}
                  />
                  <div className="absolute top-4 right-4 bg-[#fbf9f5]/90 backdrop-blur-sm px-3 py-1 rounded border border-[#d1c5b4]/40 font-label-caps text-label-caps text-[#775a19] uppercase">
                    VIP LOUNGE &amp; PARTY
                  </div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                    OPUS 02
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-3">
                    מסיבת לאונג' VIP &amp; קוקטייל אקסקלוסיבי
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#4e4639] font-light mb-6">
                    בר שיש מרכזי שקוף, עיצובי תאורה חלליים ומותאמים, מיקסולוגיה עילית ואווירת לאונג' יוקרתי בריביירה.
                  </p>
                  <button
                    onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[1])}
                    className="inline-flex items-center gap-2 text-[#775a19] font-label-caps text-label-caps tracking-widest uppercase hover:underline cursor-pointer"
                  >
                    <span>סיור במפרט ההצעה</span>
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </button>
                </div>
              </div>
            )}

            {/* OPUS 03 - Corporate Gala (12 cols full panorama) */}
            {filteredProposals.some((p) => p.id === 'opus-03') && (
              <div className="md:col-span-12 bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-500 group grid grid-cols-1 lg:grid-cols-12 shadow-sm">
                <div
                  className="lg:col-span-7 aspect-[16/9] lg:aspect-auto overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[2])}
                >
                  <img
                    alt="OPUS 03 International Gala & Holographic Stage"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    src={corporateSummitImg}
                  />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                    OPUS 03 • GLOBAL SUMMIT
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-[#1b1c1a] mb-4">
                    כנס גאלה בינלאומי &amp; במת הוקרה אדריכלית
                  </h3>
                  <p className="font-body-md text-body-md text-[#4e4639] font-light mb-8 leading-relaxed">
                    תכנון ועיצוב במת תלת-ממד פרמטרית מוארת, מסכי לד מעוקלים, סנכרון אור וסאונד ממוחשב, ואירוח ערב ל-600 בכירי תעשייה.
                  </p>
                  <div>
                    <button
                      onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[2])}
                      className="inline-flex items-center gap-2 text-[#1b1c1a] border-b border-[#c5a059] pb-1 font-label-caps text-label-caps tracking-widest uppercase hover:text-[#775a19] transition-colors cursor-pointer"
                    >
                      <span>סיור מפורט במפרט ההצעה</span>
                      <span className="material-symbols-outlined text-base">arrow_back</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* OPUS 04 - Galilee Wedding (6 cols) */}
            {filteredProposals.some((p) => p.id === 'opus-04') && (
              <div className="md:col-span-6 bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-500 group flex flex-col justify-between shadow-sm">
                <div
                  className="aspect-[16/10] overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[3])}
                >
                  <img
                    alt="OPUS 04 Galilee Botanic Feast"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    src={galileeWeddingImg}
                  />
                  <div className="absolute top-4 right-4 bg-[#fbf9f5]/90 backdrop-blur-sm px-3 py-1 rounded border border-[#d1c5b4]/40 font-label-caps text-label-caps text-[#775a19] uppercase">
                    BOTANIC GARDEN
                  </div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                    OPUS 04 • BOTANIC GARDEN
                  </div>
                  <h3 className="font-headline-md text-headline-md text-[#1b1c1a] mb-3">
                    חתונת גליל פתוחה — שולחן אבירים כפרי-יוקרתי
                  </h3>
                  <p className="font-body-md text-body-md text-[#4e4639] font-light mb-6">
                    שולחן אבירים פתוח במטע זיתים, שזירת פרי הדר וצמחי תבלין ארצישראליים, קולינריית פאר כפרית.
                  </p>
                  <button
                    onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[3])}
                    className="inline-flex items-center gap-2 text-[#775a19] font-label-caps text-label-caps tracking-widest uppercase hover:underline cursor-pointer"
                  >
                    <span>סיור במפרט ההצעה</span>
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </button>
                </div>
              </div>
            )}

            {/* OPUS 05 - Intimate Soirée (6 cols) */}
            {filteredProposals.some((p) => p.id === 'opus-05') && (
              <div className="md:col-span-6 bg-[#fbf9f5] rounded-xl overflow-hidden border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-500 group flex flex-col justify-between shadow-sm">
                <div
                  className="aspect-[16/10] overflow-hidden relative cursor-pointer"
                  onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[4])}
                >
                  <img
                    alt="OPUS 05 Private Salon Gala"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    src={intimateSoireeImg}
                  />
                  <div className="absolute top-4 right-4 bg-[#fbf9f5]/90 backdrop-blur-sm px-3 py-1 rounded border border-[#d1c5b4]/40 font-label-caps text-label-caps text-[#775a19] uppercase">
                    BESPOKE INTIMACY
                  </div>
                </div>
                <div className="p-8">
                  <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                    OPUS 05 • BESPOKE INTIMACY
                  </div>
                  <h3 className="font-headline-md text-headline-md text-[#1b1c1a] mb-3">
                    סעודת סלון פרטית &amp; שולחן אחוזת בוטיק
                  </h3>
                  <p className="font-body-md text-body-md text-[#4e4639] font-light mb-6">
                    ארוחת ערב אינטימית בחדר אוכל מפואר, נברשות קריסטל, סידורי פרחים מלכותיים לאניני טעם.
                  </p>
                  <button
                    onClick={() => setSelectedProposal(PROPOSAL_LOOKBOOK[4])}
                    className="inline-flex items-center gap-2 text-[#775a19] font-label-caps text-label-caps tracking-widest uppercase hover:underline cursor-pointer"
                  >
                    <span>סיור במפרט ההצעה</span>
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== CORE PILLARS (SERVICES) ==================== */}
      <section className="py-20 md:py-28 border-t border-[#d1c5b4]/30" id="pillars">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-label-caps text-label-caps tracking-widest uppercase text-[#775a19] mb-2">
              STUDIO SERVICES
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#1b1c1a] mb-4">
              ארבעת עמודי התווך של ההפקה
            </h2>
            <p className="font-body-lg text-body-lg text-[#4e4639] font-light">
              שילוב הרמוני בין אדריכלות חלל, ניהול אסטרטגי חסר פשרות וחוויות שירות של מלונאות חמישה-כוכבים סופריור.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            {/* Pillar 01 */}
            <div className="bg-[#f5f3ef] p-8 rounded-xl border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display-md text-display-md text-[#d1c5b4] font-light group-hover:text-[#775a19] transition-colors">
                    01
                  </span>
                  <span className="material-symbols-outlined text-3xl text-[#775a19] font-light">
                    architecture
                  </span>
                </div>
                <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                  3D SPATIAL RENDERINGS
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-4">
                  קונספט ועיצוב אדריכלי
                </h3>
                <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed font-light">
                  בניית לוחות השראה מרגשים (Moodboards), הדמיות תלת-ממד של מיקומי ההפקה, תכנון תאורה וזרימת קהל ושפה ויזואלית הרמונית ושלמה.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d1c5b4]/20 flex items-center justify-between text-xs text-[#655e4e]">
                <span>דיוק מרחבי מלא</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-[#f5f3ef] p-8 rounded-xl border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display-md text-display-md text-[#d1c5b4] font-light group-hover:text-[#775a19] transition-colors">
                    02
                  </span>
                  <span className="material-symbols-outlined text-3xl text-[#775a19] font-light">
                    diamond
                  </span>
                </div>
                <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                  EXCLUSIVE PURVEYORS
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-4">
                  איתור וניהול ספקי עלית
                </h3>
                <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed font-light">
                  חיבור לקייטרינג שף יוקרתי, אמני שזירה מובילים, מעצבי תאורה תיאטרליים, ספקי מוזיקה והרכבי ג'אז וקלאסיקה מהשורה הראשונה.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d1c5b4]/20 flex items-center justify-between text-xs text-[#655e4e]">
                <span>נבחרת ספקי עלית</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-[#f5f3ef] p-8 rounded-xl border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display-md text-display-md text-[#d1c5b4] font-light group-hover:text-[#775a19] transition-colors">
                    03
                  </span>
                  <span className="material-symbols-outlined text-3xl text-[#775a19] font-light">
                    schedule
                  </span>
                </div>
                <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                  TIMELINE PRECISION
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-4">
                  ניהול הפקה ותקציב
                </h3>
                <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed font-light">
                  בניית לוח זמנים קפדני (Master Timeline), שקיפות פיננסית מוחלטת ללא חריגות, ניהול משא ומתן וסנכרון חוזים ומערך סידורי ישיבה VIP.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d1c5b4]/20 flex items-center justify-between text-xs text-[#655e4e]">
                <span>אפס חריגות תקציב</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>

            {/* Pillar 04 */}
            <div className="bg-[#f5f3ef] p-8 rounded-xl border border-[#d1c5b4]/40 hover:border-[#c5a059] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display-md text-display-md text-[#d1c5b4] font-light group-hover:text-[#775a19] transition-colors">
                    04
                  </span>
                  <span className="material-symbols-outlined text-3xl text-[#775a19] font-light">
                    room_service
                  </span>
                </div>
                <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase mb-1">
                  WHITE-GLOVE DELIVERY
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-4">
                  פיקוח וניהול יום האירוע
                </h3>
                <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed font-light">
                  צוות מנהלי הפקה עם אוזניות וסנכרון מלא באוויר, ליווי צמוד של בעלי השמחות, קבלת פנים מוקפדת ותגובה מיידית לכל תרחיש בזמן אמת.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#d1c5b4]/20 flex items-center justify-between text-xs text-[#655e4e]">
                <span>נוכחות שקטה ומנהיגות</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BESPOKE EXPERIENCE CALCULATOR ==================== */}
      <section className="py-20 md:py-28 bg-[#f5f3ef] border-t border-[#d1c5b4]/30" id="calculator">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-label-caps text-label-caps tracking-widest uppercase text-[#775a19] mb-2">
              BESPOKE EXPERIENCE CALCULATOR
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#1b1c1a] mb-3">
              מחשבון קונספט הערכת היקף
            </h2>
            <p className="font-body-md text-body-md text-[#4e4639] font-light">
              בחרו את מאפייני האירוע כדי לקבל אומדן מותאם והמלצה ראשונית לחבילת ההפקה.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-right">
            {/* Controls Interactive Column */}
            <div className="lg:col-span-7 bg-[#fbf9f5] p-8 md:p-10 rounded-xl border border-[#d1c5b4]/40 shadow-sm space-y-8">
              {/* Event Type Radio Selection */}
              <div>
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-4">
                  01 • סוג האירוע והאופי
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                      calcType === 'wedding'
                        ? 'border-[#c5a059] bg-[#f5f3ef]'
                        : 'border-[#d1c5b4]/40 hover:border-[#c5a059] bg-[#fbf9f5]'
                    }`}
                  >
                    <input
                      checked={calcType === 'wedding'}
                      onChange={() => setCalcType('wedding')}
                      className="text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      name="eventType"
                      type="radio"
                      value="wedding"
                    />
                    <span className="font-body-md text-body-md font-medium text-[#1b1c1a]">חתונת יוקרה</span>
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                      calcType === 'corporate'
                        ? 'border-[#c5a059] bg-[#f5f3ef]'
                        : 'border-[#d1c5b4]/40 hover:border-[#c5a059] bg-[#fbf9f5]'
                    }`}
                  >
                    <input
                      checked={calcType === 'corporate'}
                      onChange={() => setCalcType('corporate')}
                      className="text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      name="eventType"
                      type="radio"
                      value="corporate"
                    />
                    <span className="font-body-md text-body-md font-medium text-[#1b1c1a]">גאלה ועסקי</span>
                  </label>
                  <label
                    className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                      calcType === 'vip'
                        ? 'border-[#c5a059] bg-[#f5f3ef]'
                        : 'border-[#d1c5b4]/40 hover:border-[#c5a059] bg-[#fbf9f5]'
                    }`}
                  >
                    <input
                      checked={calcType === 'vip'}
                      onChange={() => setCalcType('vip')}
                      className="text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      name="eventType"
                      type="radio"
                      value="vip"
                    />
                    <span className="font-body-md text-body-md font-medium text-[#1b1c1a]">אירוע פרטי VIP</span>
                  </label>
                </div>
              </div>

              {/* Guest Count Range Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider">
                    02 • כמות מוזמנים משוערת
                  </label>
                  <span className="font-headline-sm text-headline-sm text-[#775a19] font-semibold" id="guestCountDisplay">
                    {guestCount} מוזמנים
                  </span>
                </div>
                <input
                  className="w-full h-1.5 bg-[#d1c5b4]/50 rounded-lg appearance-none cursor-pointer custom-range"
                  id="guestRange"
                  max="800"
                  min="50"
                  step="25"
                  type="range"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                />
                <div className="flex justify-between text-xs text-[#7f7667] mt-2 font-mono">
                  <span>50 אורחים</span>
                  <span>400 אורחים</span>
                  <span>800+ אורחים</span>
                </div>
              </div>

              {/* Bespoke Additions Checkboxes */}
              <div>
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-4">
                  03 • אלמנטים ושדרוגי קוסטום-מייד
                </label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-3.5 rounded-lg border border-[#d1c5b4]/40 hover:border-[#c5a059]/60 cursor-pointer transition-colors bg-[#f5f3ef]/30">
                    <input
                      checked={lightingUpgrade}
                      onChange={(e) => setLightingUpgrade(e.target.checked)}
                      className="mt-1 rounded text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      type="checkbox"
                    />
                    <div>
                      <div className="font-body-md text-body-md font-medium text-[#1b1c1a]">
                        בינוי תאורה אדריכלית וגשרי קרסול תלויים
                      </div>
                      <div className="font-body-sm text-body-sm text-[#4e4639] font-light">
                        תכנון תאורה חווייתית ואינטליגנטית מותאמת שקיעה ולילה
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3.5 rounded-lg border border-[#d1c5b4]/40 hover:border-[#c5a059]/60 cursor-pointer transition-colors bg-[#f5f3ef]/30">
                    <input
                      checked={floralUpgrade}
                      onChange={(e) => setFloralUpgrade(e.target.checked)}
                      className="mt-1 rounded text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      type="checkbox"
                    />
                    <div>
                      <div className="font-body-md text-body-md font-medium text-[#1b1c1a]">
                        אומנות שזירה בעבודת מלאכת-יד (Floral Installation)
                      </div>
                      <div className="font-body-sm text-body-sm text-[#4e4639] font-light">
                        מיצגי פרחים חיים, שולחנות אבירים ומרבדי שזירה פיסוליים
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3.5 rounded-lg border border-[#d1c5b4]/40 hover:border-[#c5a059]/60 cursor-pointer transition-colors bg-[#f5f3ef]/30">
                    <input
                      checked={culinaryUpgrade}
                      onChange={(e) => setCulinaryUpgrade(e.target.checked)}
                      className="mt-1 rounded text-[#775a19] focus:ring-[#775a19] border-[#d1c5b4] custom-range"
                      type="checkbox"
                    />
                    <div>
                      <div className="font-body-md text-body-md font-medium text-[#1b1c1a]">
                        ניהול קולינרי ובר פרימיום בינלאומי עם שמפניה
                      </div>
                      <div className="font-body-sm text-body-sm text-[#4e4639] font-light">
                        תפריט שף בהתאמה מלאה, סומלייה ייעודי ובר קוקטיילים מעוצב
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Dynamic Output Atelier Estimation Card */}
            <div className="lg:col-span-5 bg-[#fbf9f5] p-8 md:p-10 rounded-xl border border-[#c5a059]/40 shadow-[0_20px_40px_-15px_rgba(26,25,24,0.06)] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#ffdea5]/20 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#d1c5b4]/30">
                  <div>
                    <div className="font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase">
                      PROPOSED PRODUCTION TIER
                    </div>
                    <h3 className="font-headline-md text-headline-md text-[#1b1c1a] mt-1">{tierName}</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-[#775a19] font-light">
                    workspace_premium
                  </span>
                </div>

                <div className="py-6 space-y-4 border-b border-[#d1c5b4]/30">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4e4639]">מסגרת זמן מומלצת להפקה:</span>
                    <span className="font-medium text-[#1b1c1a] font-mono">{tierPrep}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4e4639]">צוות ניהול יום האירוע:</span>
                    <span className="font-medium text-[#1b1c1a] font-mono">{tierStaff}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#4e4639]">ליווי קונספטואלי ועיצובי:</span>
                    <span className="font-medium text-[#1b1c1a] font-mono">
                      מלא (Full Bespoke Production)
                    </span>
                  </div>
                </div>

                <div className="py-6">
                  <span className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider block mb-1">
                    היקף תקציב הפקה משוער
                  </span>
                  <div className="font-display-md text-display-md text-[#1b1c1a] font-light tracking-tight">
                    {formattedMin} – {formattedMax}
                  </div>
                  <p className="font-body-sm text-body-sm text-[#4e4639] mt-2 font-light">
                    *הערכה ראשונית הכוללת תכנון מלא, ניהול ספקים ושזירה עילית. אפיון מדויק נבנה לאחר פגישת קונספט.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleCalculatorWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#1b1c1a] text-[#fbf9f5] py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#775a19] transition-all duration-300 shadow-sm cursor-pointer border border-[#c5a059]/40"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>קבלת אומדן ישיר ב-WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLIENT PRAISE / TESTIMONIALS ==================== */}
      <section className="py-20 md:py-28 border-t border-[#d1c5b4]/30" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-label-caps text-label-caps tracking-widest uppercase text-[#775a19] mb-2">
              WORDS OF ESTEEM
            </div>
            <h2 className="font-headline-lg text-headline-lg text-[#1b1c1a]">
              מילים מלקוחותינו
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            {/* Review 1 */}
            <div className="bg-[#fbf9f5] p-8 rounded-xl border border-[#d1c5b4]/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-[#775a19] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light italic leading-relaxed mb-6">
                  &quot;נופר יצרה עבורנו עולם קסום באחוזה פרטית. מהאורות הקטנים ועד תזמון המנות של שף המישלן — הכל היה ברמה שמעולם לא ראינו בישראל. שקט נפשי מוחלט.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#d1c5b4]/30">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a]">שירה &amp; דניאל רוזנטל</div>
                <div className="font-label-caps text-label-caps text-[#655e4e] uppercase mt-0.5">
                  חתונה בנחלת יוקרה • קיסריה
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#fbf9f5] p-8 rounded-xl border border-[#d1c5b4]/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-[#775a19] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light italic leading-relaxed mb-6">
                  &quot;הפקת כנס ההשקה ל-600 אורחים ובכירי החברה הייתה מופת של ארגון ודיוק. החזון האדריכלי של הבמה והסנכרון של האמנים השאירו את כולם פעורי פה.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#d1c5b4]/30">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a]">אלון ברקוביץ׳</div>
                <div className="font-label-caps text-label-caps text-[#655e4e] uppercase mt-0.5">
                  מנכ״ל AURA Israel
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#fbf9f5] p-8 rounded-xl border border-[#d1c5b4]/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-[#775a19] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light italic leading-relaxed mb-6">
                  &quot;החמימות והאישיות של נופר, לצד הדרישות המחמירות ביותר מספקים, הפכו את שנת ההכנות למסע רגוע ומענג. התוצאה הייתה עוצרת נשימה.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#d1c5b4]/30">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a]">מיכל &amp; קובי לוי</div>
                <div className="font-label-caps text-label-caps text-[#655e4e] uppercase mt-0.5">
                  ערב חתונת סתיו • חוות רונית
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MANIFEST BANNER & FAQ ==================== */}
      <section className="py-16 md:py-24 bg-[#f5f3ef] border-t border-[#d1c5b4]/30">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Editorial Pull Quote */}
          <div className="text-center py-12 px-6 border-y border-[#c5a059]/40 my-8">
            <span className="material-symbols-outlined text-4xl text-[#775a19] mb-4 font-light">
              format_quote
            </span>
            <blockquote className="font-display-md text-headline-lg md:text-display-md text-[#1b1c1a] italic font-normal leading-snug max-w-3xl mx-auto">
              &quot;אירוע אינו אוסף של פריטי עיצוב, אלא סימפוניה של רגש, תאורה ורגעים שנוצרים בזיכרון לעד.&quot;
            </blockquote>
            <div className="mt-6 font-label-caps text-label-caps text-[#775a19] tracking-widest uppercase">
              NOFAR • FOUNDER &amp; CREATIVE DIRECTOR
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-right">
            <h3 className="font-headline-md text-headline-md text-[#1b1c1a] text-center mb-10">
              שאלות נפוצות ותפיסת עולם
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-[#fbf9f5] rounded-xl border border-[#d1c5b4]/40">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-2 font-medium">
                  באילו אזורים ולוקיישנים אתם מפיקים בארץ?
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light">
                  אנו מתמחים בהפקות בנחלות פרטיות בשרון ובמרכז, וילות יוקרה בקיסריה, בוסתנים ושטחי טבע פתוחים בגליל ובדרום, ומתחמי בוטיק נבחרים עם מעטפת תשתית מלאה.
                </p>
              </div>
              <div className="p-6 bg-[#fbf9f5] rounded-xl border border-[#d1c5b4]/40">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-2 font-medium">
                  כמה זמן מראש מומלץ להתחיל בתהליך ההפקה?
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light">
                  לאירועי יוקרה מורכבים בנחלות או שטחים פתוחים אנו ממליצים על 6 עד 9 חודשים מראש. עם זאת, צוות ההפקה ערוך גם להפקות בזק מואצות תוך 6-8 שבועות בסטנדרט חסר פשרות.
                </p>
              </div>
              <div className="p-6 bg-[#fbf9f5] rounded-xl border border-[#d1c5b4]/40">
                <div className="font-headline-sm text-headline-sm text-[#1b1c1a] mb-2 font-medium">
                  האם ניתן לשכור את שירותי העיצוב בלבד ללא הפקה כוללת?
                </div>
                <p className="font-body-md text-body-md text-[#4e4639] font-light">
                  אנו מתמקדים בהפקה מלאה (Full Turnkey Production) בלבד, מתוך אמונה שעיצוב עילי אינו יכול להתקיים ללא שליטה אבסולוטית על התזמון, הקולינריה, והסאונד.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INITIATE CONVERSATION (CONTACT & WISHLIST) ==================== */}
      <section className="py-20 md:py-28 border-t border-[#d1c5b4]/30 bg-[#fbf9f5]" id="inquiry">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-right">
            {/* Left Sidebar / Studio Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="font-label-caps text-label-caps tracking-widest uppercase text-[#775a19] mb-2">
                  INITIATE CONVERSATION
                </div>
                <h2 className="font-headline-lg text-headline-lg text-[#1b1c1a] mb-4">
                  תיאום פגישת קונספט בסטודיו
                </h2>
                <p className="font-body-lg text-body-lg text-[#4e4639] font-light leading-relaxed mb-8">
                  נשמח לארח אתכם לכוס שמפניה, להאזין לחלומות שלכם ולשרטט יחד את תוואי ההפקה הראשוני.
                </p>

                <div className="space-y-6 border-y border-[#d1c5b4]/30 py-8 my-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#775a19] text-2xl mt-0.5">
                      pin_drop
                    </span>
                    <div>
                      <div className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider">
                        סטודיו ראשי
                      </div>
                      <div className="font-body-md text-body-md text-[#1b1c1a] mt-1">
                        רחוב הירקון 45, תל אביב-יפו
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#775a19] text-2xl mt-0.5">
                      chat
                    </span>
                    <div>
                      <div className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider">
                        ערוץ התקשרות ישיר
                      </div>
                      <div className="font-body-md text-body-md text-[#1b1c1a] mt-1">
                        WhatsApp רשמי ודיסקרטי של נופר
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#775a19] text-2xl mt-0.5">
                      mail
                    </span>
                    <div>
                      <div className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider">
                        אימייל דיסקרטי
                      </div>
                      <div className="font-body-md text-body-md text-[#1b1c1a] mt-1 font-mono">
                        concierge@nofar-events.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-[#775a19] text-2xl mt-0.5">
                      schedule
                    </span>
                    <div>
                      <div className="font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider">
                        שעות קבלת קהל
                      </div>
                      <div className="font-body-md text-body-md text-[#1b1c1a] mt-1">
                        ימים א׳-ה׳ 09:30 - 19:00 (בתיאום מראש)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 text-[#775a19] font-label-caps text-label-caps uppercase tracking-widest hover:underline"
                  href="https://wa.me/972548894231?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A0%D7%95%D7%A4%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%AA%D7%90%D7%9D%20%D7%A4%D7%92%D7%99%D7%A9%D7%AA%20%D7%A7%D7%95%D7%A0%D7%A1%D7%A4%D7%98%20%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>פנייה ישירה לוואטסאפ של נופר</span>
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </a>
              </div>
            </div>

            {/* Right Form / Wishlist Builder Column (Matching exact structure) */}
            <div className="lg:col-span-7 bg-[#f5f3ef] p-8 md:p-12 rounded-xl border border-[#d1c5b4]/40 shadow-sm space-y-7">
              {/* Step 1: Event Type */}
              <div>
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-3">
                  01 • איזה סוג אירוע אתם מתכננים?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                      className={`p-3 text-right text-xs font-medium transition-all cursor-pointer rounded-lg border ${
                        wishlistEventType === type
                          ? 'bg-[#1b1c1a] text-[#fbf9f5] border-[#1b1c1a] shadow-xs'
                          : 'bg-[#fbf9f5] text-[#4e4639] border-[#d1c5b4]/60 hover:border-[#c5a059]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Location Preference */}
              <div>
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-3">
                  02 • לוקיישן או אזור מועדף
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
                      className={`p-2.5 text-right text-xs transition-all cursor-pointer rounded-lg border ${
                        wishlistLocation === loc
                          ? 'bg-[#775a19] text-white border-[#775a19] font-medium'
                          : 'bg-[#fbf9f5] text-[#4e4639] border-[#d1c5b4]/60 hover:border-[#c5a059]'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Season & Guest Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-2">
                    03 • עונה או תאריך יעד
                  </label>
                  <select
                    value={wishlistSeason}
                    onChange={(e) => setWishlistSeason(e.target.value)}
                    className="w-full bg-[#fbf9f5] border-0 border-b border-[#d1c5b4] focus:border-[#c5a059] focus:ring-0 text-[#1b1c1a] text-sm py-2.5 outline-none cursor-pointer font-light"
                  >
                    <option value="אביב / קיץ 2026">אביב / קיץ 2026</option>
                    <option value="סתיו / חורף 2026">סתיו / חורף 2026</option>
                    <option value="עונת 2027">עונת 2027</option>
                    <option value="תאריך ספציפי (אציין בשיחה)">תאריך ספציפי (אציין בשיחה)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-2">
                    04 • כמות מוזמנים משוערת
                  </label>
                  <select
                    value={wishlistGuests}
                    onChange={(e) => setWishlistGuests(e.target.value)}
                    className="w-full bg-[#fbf9f5] border-0 border-b border-[#d1c5b4] focus:border-[#c5a059] focus:ring-0 text-[#1b1c1a] text-sm py-2.5 outline-none cursor-pointer font-light"
                  >
                    <option value="40 - 100 מוזמנים (אינטימי)">40 - 100 מוזמנים (אינטימי)</option>
                    <option value="150 - 300 מוזמנים (נחלה / שטח)">150 - 300 מוזמנים (נחלה / שטח)</option>
                    <option value="300 - 500+ מוזמנים (מתחם רחב)">300 - 500+ מוזמנים (מתחם רחב)</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Special Wishes */}
              <div>
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-2.5">
                  05 • דגשים ורצונות שחשובים לכם באירוע
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
                        className={`p-2.5 text-right text-xs transition-all flex items-center gap-2 cursor-pointer rounded-lg border ${
                          isChecked
                            ? 'bg-[#fbf9f5] border-[#775a19] text-[#775a19] font-medium'
                            : 'bg-[#fbf9f5] border-[#d1c5b4]/50 text-[#4e4639] hover:border-[#c5a059]/60'
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
                <label className="block font-label-caps text-label-caps text-[#655e4e] uppercase tracking-wider mb-2">
                  06 • השם שלכם (אופציונלי)
                </label>
                <input
                  type="text"
                  placeholder="לדוגמה: שירה ויונתן / רועי"
                  value={wishlistClientName}
                  onChange={(e) => setWishlistClientName(e.target.value)}
                  className="w-full bg-[#fbf9f5] border-0 border-b border-[#d1c5b4] focus:border-[#c5a059] focus:ring-0 text-[#1b1c1a] py-2 px-1 text-sm font-light"
                />
              </div>

              {/* Live Preview Memo */}
              <div className="bg-[#fbf9f5] border border-[#d1c5b4]/50 p-4 rounded-xl text-xs text-[#1b1c1a] leading-relaxed whitespace-pre-line font-light">
                {generateWhatsAppMessage()}
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={handleOpenWhatsAppWishlist}
                  className="w-full bg-[#1b1c1a] text-[#fbf9f5] py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#775a19] transition-all duration-300 shadow-sm cursor-pointer border border-[#c5a059]/40 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>פתיחת שיחה ב-WhatsApp עם כל הרצונות</span>
                </button>
              </div>

              <div className="text-center font-body-sm text-body-sm text-[#655e4e]">
                דיסקרטיות מלאה מובטחת. הפרטים אינם מועברים לשום גורם חיצוני.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SHARED FOOTER ==================== */}
      <footer className="w-full bg-[#f5f3ef] border-t border-[#d1c5b4]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 text-right md:text-left">
          {/* Brand & Studio Description */}
          <div className="max-w-md text-right">
            <div className="font-headline-md text-headline-md text-[#1b1c1a] tracking-wider font-semibold mb-3">
              NOFAR Luxury Event Productions
            </div>
            <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed">
              © 2026 NOFAR Event Productions. All rights reserved. Bespoke Curation &amp; Design.
            </p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap gap-6 md:gap-8 font-label-caps text-label-caps uppercase tracking-widest">
            <button
              onClick={() =>
                setModalContent({
                  title: 'אודות סטודיו נופר',
                  body: 'סטודיו נופר מתמחה באדריכלות אירועים, פיסול תאורה ובימוי רגעים בלתי נשכחים. כל הפקה מנוהלת כדיסציפלינה אמנותית ייחודית וברמת שירות ללא פשרות.',
                })
              }
              className="text-[#4e4639] hover:text-[#775a19] duration-300 cursor-pointer"
            >
              Studio Philosophy
            </button>
            <a
              className="text-[#4e4639] hover:text-[#775a19] duration-300"
              href="#inquiry"
            >
              Private Commissions
            </a>
            <button
              onClick={() =>
                setModalContent({
                  title: 'תנאי שירות והתקשרות',
                  body: 'כל תוכניות ההפקה, לוחות ההשראה והסקיצות האדריכליות הינן קניין רוחני של סטודיו נופר. תהליך ההפקה מעוגן בהסכם עבודה מסודר המגדיר במדויק את תחומי האחריות, לוחות הזמנים והתנאים המסחריים בשקיפות מלאה.',
                })
              }
              className="text-[#4e4639] hover:text-[#775a19] duration-300 cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() =>
                setModalContent({
                  title: 'מדיניות פרטיות ודיסקרטיות',
                  body: 'אנו בסטודיו נופר מחויבים באופן מלא לשמירה על פרטיות לקוחותינו ועל דיסקרטיות מוחלטת. כל הפרטים הנמסרים במסגרת פניות, פגישות אפיון וחוזים נשמרים בסודיות מלאה ולעולם לא יועברו לצד שלישי.',
                })
              }
              className="text-[#4e4639] hover:text-[#775a19] duration-300 cursor-pointer"
            >
              Legal Notice
            </button>
          </div>
        </div>
      </footer>

      {/* ==================== FLOATING VIP WHATSAPP BADGE ==================== */}
      <aside aria-label="VIP Concierge" className="fixed bottom-6 left-6 z-50 flex items-center">
        <a
          href="#under-construction"
          onClick={(e) => {
            e.preventDefault();
            setConstructionModal({
              isOpen: true,
              title: 'התייעצות ישירה עם נופר • WhatsApp Concierge',
              subtitle: 'ערוץ ההתקשרות הישיר והאישי',
              intendedMessage: 'היי נופר, נכנסתי לאתר ואשמח להתייעץ לגבי הפקת אירוע יוקרתי איתך!',
              source: 'WhatsApp Concierge',
            });
          }}
          className="group flex items-center gap-3 bg-[#1b1c1a] hover:bg-[#775a19] text-[#fbf9f5] px-4 py-3 border border-[#c5a059]/50 shadow-2xl transition-all duration-300 cursor-pointer rounded-lg"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
          <span className="font-label-caps text-[11px] tracking-[0.16em] uppercase hidden sm:inline-block">
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

      {/* ==================== PROPOSAL DETAILS LIGHTBOX / MODAL ==================== */}
      {selectedProposal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProposal(null)}
        >
          <div
            className="max-w-3xl w-full bg-[#fbf9f5] border border-[#d1c5b4] shadow-2xl relative text-right overflow-hidden my-8 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProposal(null)}
              className="absolute top-4 left-4 z-10 w-9 h-9 bg-black/70 border border-white/20 text-white rounded-full flex items-center justify-center hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#efebe4]">
              <img
                src={selectedProposal.image}
                alt={selectedProposal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-[#fbf9f5]/95 backdrop-blur-sm px-3 py-1 text-[11px] font-label-caps tracking-wider uppercase text-[#1b1c1a] border border-[#d1c5b4] rounded">
                {selectedProposal.badge}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-label-caps text-xs text-[#775a19] tracking-widest uppercase font-semibold">
                    {selectedProposal.opusNum}
                  </span>
                  <span className="text-[#7f7667]">•</span>
                  <span className="text-xs text-[#4e4639]">{selectedProposal.subType}</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-[#1b1c1a]">
                  {selectedProposal.title}
                </h3>
              </div>

              <p className="font-body-md text-body-md text-[#4e4639] font-light leading-relaxed">
                {selectedProposal.description}
              </p>

              {/* Atmosphere notes */}
              <div className="bg-[#fbf9f5] p-4 border border-[#d1c5b4]/60 rounded-lg">
                <span className="text-xs font-label-caps text-[#775a19] uppercase tracking-wider block mb-1">
                  אווירה ותחושה בחלל:
                </span>
                <p className="text-xs text-[#4e4639] leading-relaxed">
                  {selectedProposal.atmosphereNotes}
                </p>
              </div>

              {/* Features breakdown */}
              <div className="space-y-2.5 pt-2 border-t border-[#d1c5b4]/30">
                <span className="text-xs font-label-caps text-[#775a19] uppercase tracking-wider block">
                  מרכיבי הקונספט והמפרט הטכני:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1b1c1a]">
                  {selectedProposal.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#775a19] text-base shrink-0">
                        check
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimated schedule */}
              <div className="space-y-2 pt-2 border-t border-[#d1c5b4]/30">
                <span className="text-xs font-label-caps text-[#775a19] uppercase tracking-wider block">
                  לוח זמנים משוער לאירוע מסוג זה:
                </span>
                <div className="space-y-1.5 text-xs text-[#4e4639]">
                  {selectedProposal.estimatedTimeline.map((time, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="pt-4 border-t border-[#d1c5b4]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#7f7667] font-light">
                  התאמה מומלצת: {selectedProposal.guests}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setConstructionModal({
                      isOpen: true,
                      title: `התייעצות על קונספט ${selectedProposal.opusNum}`,
                      subtitle: selectedProposal.title,
                      intendedMessage: `שלום נופר, ראיתי באתר את ${selectedProposal.opusNum} ("${selectedProposal.title}") ואשמח שנתייעץ על התאמת הקונספט לאירוע שלנו!`,
                      source: selectedProposal.opusNum,
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#1b1c1a] hover:bg-[#775a19] text-[#fbf9f5] font-label-caps text-label-caps uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs rounded-lg border border-[#c5a059]/40"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>התייעצות על הקונספט ב-WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== UNDER CONSTRUCTION & MESSAGE PREVIEW MODAL ==================== */}
      {constructionModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setConstructionModal(null)}
        >
          <div
            className="max-w-xl w-full bg-[#fbf9f5] border border-[#c5a059]/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative text-right overflow-hidden my-6 rounded-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative header band */}
            <div className="bg-gradient-to-r from-[#1b1c1a] via-[#2d2820] to-[#1b1c1a] text-[#fbf9f5] px-6 py-5 border-b border-[#c5a059]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/20 border border-[#c5a059] flex items-center justify-center text-[#ffdea5]">
                  <span className="material-symbols-outlined text-base">construction</span>
                </div>
                <div>
                  <div className="font-label-caps text-xs tracking-widest text-[#ffdea5] uppercase">
                    NOFAR • LAUNCH PREVIEW
                  </div>
                  <div className="text-xs text-[#d1c5b4]/80">סטטוס: האתר בהרצה ופיתוח</div>
                </div>
              </div>
              <button
                onClick={() => setConstructionModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#fbf9f5] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Status Notice */}
              <div className="bg-[#f5f3ef] border border-[#d1c5b4]/70 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse mt-1 shrink-0" />
                  <div>
                    <h4 className="font-headline-sm text-[#1b1c1a] font-semibold text-base mb-1">
                      האתר עדיין בבנייה לקראת השקה רשמית
                    </h4>
                    <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed">
                      תודה על התעניינותכם! חיבור ה-WhatsApp הישיר נמצא בהכנה. בינתיים, ריכזנו עבורכם את ההודעה המלאה שהורכבה ואמורה להישלח ישירות לנופר.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subject & Source */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#775a19] font-label-caps tracking-wider uppercase mb-1.5">
                  <span>{constructionModal.title}</span>
                  <span className="text-[#655e4e]">{constructionModal.source}</span>
                </div>
                <div className="text-xs text-[#4e4639] font-light">
                  {constructionModal.subtitle}
                </div>
              </div>

              {/* Message Box with WhatsApp preview style */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-label-caps text-xs text-[#1b1c1a] tracking-wider uppercase font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#775a19]">chat</span>
                    <span>ההודעה המיועדת להשלח לנופר:</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(constructionModal.intendedMessage)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#775a19] hover:text-[#1b1c1a] font-medium transition-colors cursor-pointer px-2.5 py-1 rounded bg-[#f5f3ef] border border-[#d1c5b4]/60"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {copiedFeedback ? 'done' : 'content_copy'}
                    </span>
                    <span>{copiedFeedback ? 'הועתק ללוח!' : 'העתקת הודעה'}</span>
                  </button>
                </div>

                <div className="relative bg-[#efebe4] border border-[#d1c5b4] p-4 rounded-xl font-light text-xs sm:text-sm text-[#1b1c1a] leading-relaxed whitespace-pre-line shadow-inner max-h-56 overflow-y-auto select-all">
                  {constructionModal.intendedMessage}
                </div>
              </div>

              {/* Direct Communication Fallback */}
              <div className="p-4 bg-[#fbf9f5] border border-[#d1c5b4]/50 rounded-xl space-y-3 text-xs text-[#4e4639]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1b1c1a]">ליצירת קשר ישיר עם נופר:</span>
                  <a
                    href="tel:0548894231"
                    className="text-[#775a19] font-medium hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>054-8894231</span>
                  </a>
                </div>
                <div className="text-[11px] text-[#655e4e] leading-normal">
                  ניתן להעתיק את ההודעה למעלה ולשלוח אותה ידנית בווטסאפ לנייד של נופר, או ליצור קשר טלפוני ישיר.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(constructionModal.intendedMessage)}
                  className="flex-1 py-3 px-4 bg-[#1b1c1a] hover:bg-[#775a19] text-[#fbf9f5] font-label-caps text-label-caps uppercase tracking-widest transition-all rounded-lg cursor-pointer flex items-center justify-center gap-2 border border-[#c5a059]/40"
                >
                  <span className="material-symbols-outlined text-base">
                    {copiedFeedback ? 'done' : 'content_copy'}
                  </span>
                  <span>{copiedFeedback ? 'התוכן הועתק בהצלחה!' : 'העתקת תוכן ההודעה'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setConstructionModal(null)}
                  className="py-3 px-6 bg-transparent hover:bg-[#f5f3ef] text-[#4e4639] hover:text-[#1b1c1a] font-label-caps text-label-caps uppercase tracking-widest transition-colors rounded-lg border border-[#d1c5b4] cursor-pointer"
                >
                  חזרה לאתר
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== PRIVACY & TERMS MODAL ==================== */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="max-w-md w-full bg-[#fbf9f5] border border-[#d1c5b4] p-7 shadow-2xl relative text-right rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 left-4 text-[#4e4639] hover:text-[#1b1c1a] cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
            <h4 className="font-headline-md text-headline-md text-[#1b1c1a] mb-3">
              {modalContent.title}
            </h4>
            <p className="font-body-sm text-body-sm text-[#4e4639] leading-relaxed font-light mb-6">
              {modalContent.body}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 bg-[#1b1c1a] text-[#fbf9f5] font-label-caps text-label-caps uppercase tracking-wider hover:bg-[#775a19] transition-colors cursor-pointer rounded-lg"
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
