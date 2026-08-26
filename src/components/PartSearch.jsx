import { useState } from 'react';
import { motion } from 'framer-motion';
import { buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';
import { useLang } from '../i18n/LangContext';

// Highest-intent visitors arrive knowing a part number. This packages
// whatever they type straight into a WhatsApp message — no catalogue,
// no stock database, just the fastest path to a human who can check the
// shelf.
export default function PartSearch() {
  const { t } = useLang();
  const [q, setQ] = useState('');
  const trimmed = q.trim();

  function submit(e) {
    e.preventDefault();
    if (!trimmed) return;
    window.open(buildWhatsAppUrl(t('search.msg', { q: trimmed })), '_blank', 'noopener');
  }

  return (
    <motion.form
      className="partsearch" onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="partsearch__text">
        <h3>{t('search.title')}</h3>
        <p>{t('search.sub')}</p>
      </div>
      <div className="partsearch__controls">
        <input
          type="text" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder={t('search.placeholder')}
          aria-label={t('search.title')}
        />
        <button type="submit" className="btn btn--accent" disabled={!trimmed}>
          <WhatsAppIcon size={16} /> {t('search.button')}
        </button>
      </div>
      <p className="partsearch__hint">{t('search.hint')}</p>
    </motion.form>
  );
}
