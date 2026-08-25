import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';

const LINKS = [
  { href: '#brands', label: 'Brands' },
  { href: '#finder', label: 'Find Your Fix' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
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
          <span className="navbar__logo-mark">AM</span>
          <span className="navbar__logo-text">AL <em>MUMTAZ</em></span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="navbar__actions">
          <motion.a
            className="btn btn--accent"
            href={buildWhatsAppUrl("Hi Al Mumtaz, I'd like a quote.")}
            target="_blank" rel="noopener"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <WhatsAppIcon /> WhatsApp
          </motion.a>
        </div>

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
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              ))}
              <a href={`tel:${CONTACT.phone2}`} onClick={() => setOpen(false)}>Call: {CONTACT.phone2Display}</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
