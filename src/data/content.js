// Al Mumtaz Trading Co. — content & config
// Everything the owner may need to edit lives in this one file.

// ---------------------------------------------------------------------
// CONTACT
// NOTE: phone numbers were transcribed from a photo of the shop's promo
// poster and are UNVERIFIED — confirm the exact digits before launch.
// ---------------------------------------------------------------------
export const CONTACT = {
  whatsapp: '966566033782', // digits only, country code, no +
  whatsappDisplay: '+966 56 603 3782',
  phone2: '+966530858220',
  phone2Display: '+966 53 085 822',
  email: 'sales@al-mumtaz.net',
  addressShort: 'Thaslin, near Souq Al Ghanam — Second Industrial Area, Dammam',
  addressShortAr: 'ثاسلين، بالقرب من سوق الغنم — المنطقة الصناعية الثانية، الدمام',
};

// The shop's exact pin, supplied by the owner.
export const MAPS_URL = 'https://maps.app.goo.gl/sb3KaUd2whfTkLTQA';

// ---------------------------------------------------------------------
// OPENING HOURS — confirmed by the shop: 08:00–20:00 Saturday to
// Thursday, closed Friday.
// Drives the live "Open now / Closed" badge. 24h clock, Riyadh time.
// day: 0=Sunday … 6=Saturday. Each day is a list of open ranges, so a
// midday break would just be two ranges. An empty list = closed all day.
// ---------------------------------------------------------------------
export const HOURS = {
  0: [['08:00', '20:00']], // Sun
  1: [['08:00', '20:00']], // Mon
  2: [['08:00', '20:00']], // Tue
  3: [['08:00', '20:00']], // Wed
  4: [['08:00', '20:00']], // Thu
  5: [],                   // Fri — closed
  6: [['08:00', '20:00']], // Sat
};
export const TIMEZONE = 'Asia/Riyadh';

export const BRANDS = [
  'Mercedes-Benz', 'Volvo', 'MAN', 'Iveco', 'Scania', 'DAF', 'Renault',
  'Shacman', 'Sino Truck', 'Ashok Leyland', 'Tata', 'BPW', 'ROR', 'SAF',
];

// ---------------------------------------------------------------------
// PARTS BRANDS STOCKED (filters, brakes, air systems, electrics…)
// Intentionally EMPTY: these are component makers, not truck makers, and
// listing brands the shop doesn't actually carry would be a false claim.
// Add the real ones (e.g. 'Fleetguard', 'Mann', 'Wabco', 'Knorr-Bremse')
// and the section appears automatically. Leave empty and it stays hidden.
// ---------------------------------------------------------------------
export const PART_BRANDS = [];

// ---------------------------------------------------------------------
// TESTIMONIALS — real Google reviews, quoted verbatim from the shop's
// Google Business listing. Several were written in Arabic, Hindi or
// Malayalam; `quote` is Google's own English translation and `lang`
// names the original language so the site can say so.
//
// Deliberately NOT shown: a star rating or review average. Not every
// review in the listing is five stars, so publishing one would be a
// claim we can't stand behind. The quotes speak for themselves.
// ---------------------------------------------------------------------
export const TESTIMONIALS = [
  {
    quote: 'They have all the parts needed for Chinese, Mercedes, Volvo, MAN, Renault, and Iveco trucks, and trailers in general. Also, Mr. Arshad is extremely professional and respectful. May God grant them success.',
    quoteAr: 'لديهم جميع القطع اللازمة للشاحنات الصينية ومرسيدس وفولفو ومان ورينو وإيفيكو، والمقطورات بشكل عام. كما أن الأستاذ أرشد محترف للغاية ومحترم. وفقهم الله.',
    name: 'Aseel Al-faqih',
    lang: 'Arabic',
  },
  {
    quote: "Everything they have is of good quality and very cheap. I have found things here at very cheap prices that I couldn't find even after searching for a long time. They are very friendly to us in every way, both in their speech and actions.",
    quoteAr: 'كل ما لديهم ذو جودة عالية وبأسعار زهيدة جداً. وجدت هنا قطعاً بأسعار رخيصة جداً لم أجدها بعد بحث طويل. وهم ودودون معنا في كل شيء، قولاً وفعلاً.',
    name: 'Sahir Jabbar',
    lang: 'Malayalam',
  },
  {
    quote: 'Reasonable price, excellent service, especially from Mr. Arshad and Mr. Anas; they are both very kind people.',
    quoteAr: 'أسعار معقولة وخدمة ممتازة، خاصة من الأستاذ أرشد والأستاذ أنس؛ كلاهما شخصان لطيفان جداً.',
    name: 'M M Nissar',
    lang: 'Arabic',
  },
  {
    quote: 'Excellent location for truck services, repairs including starter motors, alternators, and all truck spare parts.',
    quoteAr: 'موقع ممتاز لخدمات الشاحنات والإصلاحات، بما في ذلك سلف التشغيل والدينمو وجميع قطع غيار الشاحنات.',
    name: 'Asim Othman',
    lang: 'Arabic',
  },
  {
    quote: 'All trailer spare parts available. Valve service and hydraulic crimping.',
    quoteAr: 'جميع قطع غيار المقطورات متوفرة. خدمة الصمامات وكبس الخراطيم الهيدروليكية.',
    name: 'Raj Magar',
    lang: 'Hindi',
  },
  {
    quote: 'Good service and good truck parts. Thanks for the service, Al Ikhtiar Al Mumtaz.',
    quoteAr: 'خدمة جيدة وقطع غيار شاحنات جيدة. شكراً على الخدمة، الاختيار الممتاز.',
    name: 'Rafeek Bin Hasbulla',
    lang: null,
  },
  {
    quote: 'Very good parts and cheap rates.',
    quoteAr: 'قطع غيار ممتازة وأسعار مناسبة.',
    name: 'Omi DK',
    lang: null,
  },
  {
    quote: 'Arshad and Anas, may God bless them, their treatment of others is excellent and they are very hardworking. We wish them success.',
    quoteAr: 'أرشد وأنس، بارك الله فيهما، تعاملهما مع الناس ممتاز وهما مجتهدان جداً. نتمنى لهما التوفيق.',
    name: 'Waleed Al-Sheikh',
    lang: 'Arabic',
  },
];

export const PARTS = ['Truck Spare Parts', 'Trailer Spare Parts'];

export const REPAIRS = [
  'Hydraulic Hoses Crimping', 'Air Valve Repairing', 'Brake Caliper Repairing',
  'Brake & Clutch Liner Installation', 'Turbo Repairing', 'Gear Repairing',
  'Engine Repairing', 'Brake Chamber Repairing', 'Air Compressor Repairing',
  'Diesel Pump Services',
];

// Coarser categories for the "Find Your Fix" tool.
export const FINDER_SERVICES = [
  'Truck / Trailer Spare Parts',
  'Hydraulic & Air Systems',
  'Brake & Clutch',
  'Engine, Turbo & Gear',
  'Diesel Pump Service',
];

export const WA_DEFAULT_MSG = 'Hi Al Mumtaz, I need a spare part / repair for my truck.';

export function buildWhatsAppUrl(message) {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// ---------------------------------------------------------------------
// Open/closed state, evaluated in the shop's own timezone so it's correct
// no matter where the visitor is.
// ---------------------------------------------------------------------
export function getOpenState(now = new Date()) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE, hour12: false,
    weekday: 'short', hour: '2-digit', minute: '2-digit',
  });
  const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]));
  const dayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
  const mins = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);

  const toMins = (hhmm) => {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
  };

  const today = HOURS[dayIndex] || [];
  for (const [from, to] of today) {
    if (mins >= toMins(from) && mins < toMins(to)) {
      return { open: true, until: to };
    }
  }
  // Closed — find the next opening time, scanning today then forward.
  for (const [from] of today) {
    if (mins < toMins(from)) return { open: false, next: from, nextDay: null };
  }
  for (let step = 1; step <= 7; step += 1) {
    const d = (dayIndex + step) % 7;
    const ranges = HOURS[d] || [];
    if (ranges.length) {
      return {
        open: false,
        next: ranges[0][0],
        nextDay: step === 1 ? 'tomorrow' : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d],
      };
    }
  }
  return { open: false };
}
