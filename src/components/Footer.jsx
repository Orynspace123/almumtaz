import { CONTACT, buildWhatsAppUrl } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">AL <em>MUMTAZ</em></span>
          <p>شركة الاختيار الممتاز للتجارة — Truck &amp; Trailer Spare Parts and Workshop, Dammam.</p>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <a href="#brands">Brands</a>
          <a href="#finder">Find Your Fix</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener">WhatsApp: {CONTACT.whatsappDisplay}</a>
          <a href={`tel:${CONTACT.phone2}`}>Call: {CONTACT.phone2Display}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Al Ikhtiar Al Mumtaz Trading Co. All rights reserved.</span>
        <span>Dammam, Saudi Arabia</span>
      </div>
    </footer>
  );
}
