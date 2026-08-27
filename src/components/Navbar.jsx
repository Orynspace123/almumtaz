import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT, buildWhatsAppUrl, WA_DEFAULT_MSG } from '../data/content';
import { WhatsAppIcon } from './icons';
import LangToggle from './LangToggle';
import OpenStatus from './OpenStatus';
import { useLang } from '../i18n/LangContext';

export default function Navbar({ showShopLink = false, showReviewsLink = false }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only link to sections that actually render — the photo and review
  // sections hide themselves until they have content.
  const LINKS = [
    { href: '#brands', key: 'nav.brands' },
    { href: '#finder', key: 'nav.finder' },
    { href: '#services', key: 'nav.services' },
    ...(showShopLink ? [{ href: '#shop', key: 'nav.shop' }] : []),
    ...(showReviewsLink ? [{ href: '#reviews', key: 'nav.reviews' }] : []),
    { href: '#company', key: 'nav.company' },
    { href: '#contact', key: 'nav.contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="Al Ikhtiar Al Mumtaz Trading Co.">
          <span className="navbar__logo-plate">AM</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">{t('hero.name')}</span>
            <span className="navbar__logo-sub">{t('hero.sub')}</span>
          </span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{t(l.key)}</a>)}
        </nav>

        <div className="navbar__actions">
          <LangToggle />
          <a
            className="btn btn--wa navbar__cta navbar__cta--desktop"
            href={buildWhatsAppUrl(WA_DEFAULT_MSG)}
            target="_blank" rel="noopener"
          >
            <WhatsAppIcon size={15} /> {t('nav.whatsapp')}
          </a>
        </div>

        <button
          className={`navbar__burger${open ? ' is-open' : ''}`}
          aria-label="Menu" aria-expanded={open}
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
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{t(l.key)}</a>
              ))}
              <a href={`tel:${CONTACT.phone2}`} onClick={() => setOpen(false)}>
                {t('nav.callShop')} → {CONTACT.phone2Display}
              </a>
              <div className="navbar__mobile-status"><OpenStatus compact /></div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
