/**
 * Nofar Event Productions - WhatsApp Concierge Utility
 * Business Number: 052-367-2423 (+972-52-367-2423)
 */

export const NOFAR_WHATSAPP_NUMBER = '972523672423';
export const NOFAR_WHATSAPP_DISPLAY = '052-367-2423';

export const getWhatsAppUrl = (contextOrSubject?: string): string => {
  let message = 'היי נופר, הגעתי דרך האתר ואשמח לתאם איתך שיחת היכרות ותיאום פגישה לגבי הפקת אירוע.';

  if (contextOrSubject) {
    message = `היי נופר, הגעתי דרך האתר ואשמח לקבל פרטים לגבי: ${contextOrSubject}. מתי נוכל לשוחח?`;
  }

  return `https://wa.me/${NOFAR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
