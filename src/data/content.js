// Al Mumtaz Trading Co. — content & config
// NOTE: phone numbers were transcribed from a photo of the shop's promo
// poster and are UNVERIFIED — confirm the exact digits before this site
// goes live. Everything reads from CONTACT, so a fix here updates every
// link on the site.
export const CONTACT = {
  whatsapp: '966566033782', // digits only, country code, no +
  whatsappDisplay: '+966 56 603 3782',
  phone2: '+966530858220',
  phone2Display: '+966 53 085 822',
  email: 'sales@al-mumtaz.net',
  addressShort: 'Thaslin, near Souq Al Ghanam — Second Industrial Area, Dammam',
};

export const BRANDS = [
  'Mercedes-Benz', 'Volvo', 'MAN', 'Iveco', 'Scania', 'DAF', 'Renault',
  'Shacman', 'Sino Truck', 'Ashok Leyland', 'Tata', 'BPW', 'ROR', 'SAF',
];

export const PARTS = ['Truck Spare Parts', 'Trailer Spare Parts'];

export const REPAIRS = [
  'Hydraulic Hoses Crimping', 'Air Valve Repairing', 'Brake Caliper Repairing',
  'Brake & Clutch Liner Installation', 'Turbo Repairing', 'Gear Repairing',
  'Engine Repairing', 'Brake Chamber Repairing', 'Air Compressor Repairing',
  'Diesel Pump Services',
];

// Coarser categories for the "Find Your Fix" tool — a handful of taps,
// not a wall of 12 individual service chips.
export const FINDER_SERVICES = [
  'Truck / Trailer Spare Parts',
  'Hydraulic & Air Systems',
  'Brake & Clutch',
  'Engine, Turbo & Gear',
  'Diesel Pump Service',
];

export function buildWhatsAppUrl(message) {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
