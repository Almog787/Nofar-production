/**
 * Nofar Event Productions - Secure WhatsApp Concierge
 * Phone number is obfuscated and dynamically reconstructed at runtime
 * to protect against automated web scrapers, crawler bots, and harvest scripts.
 */

// Dynamically assembled character array: '972523672423'
const _SECURE_OCTETS = [57, 55, 50, 53, 50, 51, 54, 55, 50, 52, 50, 51];

const getSecureDestination = (): string => {
  return String.fromCharCode(..._SECURE_OCTETS);
};

export const getWhatsAppUrl = (contextOrSubject?: string): string => {
  let message = 'היי נופר, הגעתי דרך האתר ואשמח לתאם איתך שיחת היכרות לגבי הפקת אירוע.';

  if (contextOrSubject) {
    message = `היי נופר, הגעתי דרך האתר ואשמח לקבל פרטים לגבי: ${contextOrSubject}.`;
  }

  return `https://wa.me/${getSecureDestination()}?text=${encodeURIComponent(message)}`;
};
