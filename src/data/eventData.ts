import heroImg from '../assets/images/hero_warm_luxury_event_1790277039732.jpg';
import weddingImg from '../assets/images/wedding_warm_gold_1790277052711.jpg';
import corporateImg from '../assets/images/corporate_warm_gala_1790277064617.jpg';
import boutiqueImg from '../assets/images/boutique_warm_party_1790277074468.jpg';

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  guestRange: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventType: string;
  date: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const IMAGES = {
  hero: heroImg,
  wedding: weddingImg,
  corporate: corporateImg,
  boutique: boutiqueImg,
};

export const EVENT_TYPES: EventType[] = [
  {
    id: 'wedding',
    title: 'חתונות יוקרה',
    subtitle: 'רומנטיקה בתפירה אישית',
    description: 'הפקה עוטפת ובלתי נשכחת. תכנון מוקפד המעניק לכם שלווה מלאה לחגוג את הרגע הגדול שלכם.',
    image: weddingImg,
    tags: ['קונספט ייחודי', 'קולינריה עילית', 'תאורת אווירה'],
    features: ['עיצוב חופה בהתאמה אישית', 'ליווי אישי רציף', 'ניהול מוקפד של יום האירוע'],
    guestRange: '150 - 800 אורחים'
  },
  {
    id: 'corporate',
    title: 'אירועים עסקיים & גאלה',
    subtitle: 'נוכחות מותג בסטנדרט בינלאומי',
    description: 'כנסים וערבי הוקרה מדויקים. חיבור הרמוני בין ערכי הארגון לאירוח יוקרתי ברמה הגבוהה ביותר.',
    image: corporateImg,
    tags: ['מיתוג חווייתי', 'טכנולוגיה מתקדמת', 'אירוח VIP'],
    features: ['אפיון קונספט תאגידי', 'ניהול לוגיסטי מדויק', 'צוות גיבוי מלא בשטח'],
    guestRange: '50 - 2,500 אורחים'
  },
  {
    id: 'boutique',
    title: 'מסיבות קונספט & VIP',
    subtitle: 'אקסקלוסיביות אינטימית',
    description: 'אירועים פרטיים בלוקיישנים נבחרים. אווירה חמה, מסקרנת ומדויקת עד לפרט האחרון.',
    image: boutiqueImg,
    tags: ['לוקיישן פרטי', 'מיקסולוגיה מותאמת', 'אווירה לילית'],
    features: ['פרטיות מלאה', 'קולינריה בהתאמה אישית', 'עיצוב חלל עוטף'],
    guestRange: '30 - 250 אורחים'
  },
  {
    id: 'barmitzvah',
    title: 'בר / בת מצווה',
    subtitle: 'חגיגה משפחתית מרגשת',
    description: 'איזון מדויק בין יוקרה מאופקת לחוויה סוחפת וצעירה שמחברת את כל הדורות יחד.',
    image: heroImg,
    tags: ['תוכן חווייתי', 'עיצוב עדכני', 'הפקה משפחתית'],
    features: ['קונספט אישי לחוגג', 'מתחמים מותאמים', 'שקט נפשי מלא להורים'],
    guestRange: '100 - 450 אורחים'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'מאיה ועומר רוזנברג',
    role: 'חתונה בטבע',
    eventType: 'אירוע פרטי',
    date: '2026',
    quote: 'השקט הנפשי שנופר העניקה לנו היה המתנה האמיתית. דיוק מופתי, יחס חם ואפס דאגות לאורך כל הדרך.',
    rating: 5
  },
  {
    id: '2',
    name: 'דניאל אהרוני',
    role: 'סמנכ״ל שיווק',
    eventType: 'אירוע חברה',
    date: '2026',
    quote: 'הפקת גאלה ל-600 אורחים שזרמה ללא דופי. מקצועיות בלתי מתפשרת ואסתטיקה יוצאת דופן.',
    rating: 5
  },
  {
    id: '3',
    name: 'רונית ושגיא גולן',
    role: 'אירוע משפחתי',
    eventType: 'אירוע VIP',
    date: '2026',
    quote: 'פעם שנייה שאנחנו בוחרים בנופר. המסירות וההקשבה שלה הופכות כל אירוע ליצירת מופת.',
    rating: 5
  }
];

export const TRUST_GUARANTEES = [
  {
    title: 'שקיפות ותכנון מקדים',
    description: 'אפיון מדויק וסגור מראש ללא הפתעות, המבטיח ניהול מבוקר ושקט.',
    badge: 'ודאות מלאה'
  },
  {
    title: 'נוכחות וניהול בשטח',
    description: 'מנהלי הפקה בכירים מלווים את האירוע מתחילתו ועד אחרון האורחים.',
    badge: 'שליטה מלאה'
  },
  {
    title: 'נבחרת ספקים בלעדית',
    description: 'חיבור ישיר ליוצרים, שפים ואמנים מובילים בתנאים מועדפים.',
    badge: 'סטנדרט עליון'
  },
  {
    title: 'ליווי אישי ממוקד',
    description: 'זמינות רציפה, יחס מסור ומענה קשוב לכל שלב בדרך.',
    badge: 'יחס מסור'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'אפיון קונספט',
    description: 'הגדרת החזון, השפה העיצובית והמסגרת המדויקת לאירוע.'
  },
  {
    number: '02',
    title: 'בחירת לוקיישן וספקים',
    description: 'התאמת המרחב האידיאלי ונבחרת הספקים המדויקת ביותר.'
  },
  {
    number: '03',
    title: 'עיצוב ותכנון לוגיסטי',
    description: 'ירידה לפרטים, תאורת אווירה חמה ובניית לוח זמנים מוקפד.'
  },
  {
    number: '04',
    title: 'ניהול האירוע בשטח',
    description: 'הוצאה לפועל ברמת דיוק עליונה המאפשרת לכם לחגוג בנחת.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'ביטחון והפקה',
    question: 'מה מבטיח את הצלחת האירוע?',
    answer: 'אנחנו מפיקים עד שני אירועים בלבד בחודש ואירוע אחד ביום, מה שמבטיח שנופר נוכחת אישית בשטח מההקמות בבוקר ועד אחרון האורחים בריכוז מלא.'
  },
  {
    category: 'זמנים',
    question: 'מתי מומלץ להתחיל בתהליך?',
    answer: 'לחתונות מומלץ 6-9 חודשים מראש. לאירועים עסקיים ובוטיק ניתן לתאם גם בלוחות זמנים קצרים.'
  },
  {
    category: 'תהליך',
    question: 'כיצד מתבצע הליווי השוטף?',
    answer: 'בפגישות אפיון ממוקדות, עדכונים רציפים ותוכנית עבודה שקופה המעניקה לכם ודאות מלאה.'
  },
  {
    category: 'אווירה ועיצוב',
    question: 'כיצד נוצרת האווירה החמה?',
    answer: 'באמצעות תאורה זהובה רכה, חומרים טבעיים, מוזיקה מדויקת ושירות מסביר פנים לכל אורח.'
  }
];

export const STATS = [
  { value: '1', label: 'אירוע יחיד ביום', desc: '100% פוקוס עליכם' },
  { value: 'עד 2', label: 'אירועי בוטיק בחודש', desc: 'אקסקלוסיביות ללא פשרות' },
  { value: '100%', label: 'נוכחות אישית בשטח', desc: 'מהבוקר ועד אחרון האורחים' },
  { value: '0', label: 'הפתעות בתקציב', desc: 'שקיפות ויושרה מוחלטת' },
];
