import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';

const LINKS = [
  { href: '#brands', label: 'Brands' },
  { href: '#finder', label: 'Find your fix' },
  { href: '#services', label: 'Services' },
  { href: '#company', label: 'Company' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="Al Mumtaz Trading Co. — home">
          <span className="navbar__logo-plate">AM</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Al Mumtaz</span>
            <span className="navbar__logo-sub">TRADING CO. — DAMMAM</span>
          </span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <a
          className="btn btn--fill navbar__cta navbar__cta--desktop"
          href={buildWhatsAppUrl("Hi Al Mumtaz, I'd like a quote.")}
          target="_blank" rel="noopener"
        >
          <WhatsAppIcon size={15} /> WhatsApp
        </a>

        <button
          className={`navbar__burger${open ? ' is-open' : ''}`}
          aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="navbar__mobile"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
              <a href={`tel:${CONTACT.phone2}`} onClick={() => setOpen(false)}>
                CALL THE WORKSHOP → {CONTACT.phone2Display}
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
