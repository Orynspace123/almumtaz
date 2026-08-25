import { CONTACT, buildWhatsAppUrl } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="hazard" aria-hidden="true" />
      <div className="footer__cols">
        <div className="footer__about">
          <span className="footer__tag">AL MUMTAZ — EVERY BRAND. EVERY FIX. ONE ADDRESS.</span>
          <p>شركة الاختيار الممتاز للتجارة — قطع غيار الشاحنات والمقطورات وورشة إصلاح، الدمام.</p>
        </div>
        <div className="footer__col">
          <h4>Site</h4>
          <a href="#brands">Brands</a>
          <a href="#finder">Find your fix</a>
          <a href="#services">Services</a>
          <a href="#company">Company</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener">WA {CONTACT.whatsappDisplay}</a>
          <a href={`tel:${CONTACT.phone2}`}>TEL {CONTACT.phone2Display}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="footer__legal">
        <span>© {new Date().getFullYear()} AL IKHTIAR AL MUMTAZ TRADING CO.</span>
        <span>SECOND INDUSTRIAL AREA — DAMMAM, SAUDI ARABIA</span>
      </div>
      <div className="footer__wordmark" aria-hidden="true">ALMUMTAZ</div>
    </footer>
  );
}
