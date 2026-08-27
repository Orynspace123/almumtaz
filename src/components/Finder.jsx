import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS, FINDER_SERVICES, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';
import SectionHead from './SectionHead';
import PartSearch from './PartSearch';
import { useLang } from '../i18n/LangContext';

// The site's working tool, styled as a workshop job card: pick brand +
// problem, it writes the WhatsApp message and sends it to the counter.
export default function Finder({ index }) {
  const { t } = useLang();
  const [brand, setBrand] = useState(null);
  const [service, setService] = useState(null);

  const ready = Boolean(brand && service);
  const message = ready ? t('finder.msg', { b: brand, s: service }) : null;

  let previewText = t('finder.awaiting');
  if (brand && !service) previewText = t('finder.needService', { b: brand });
  if (!brand && service) previewText = t('finder.needBrand', { s: service });
  if (ready) previewText = `"${message}"`;

  const tip = t('finder.tip');
  const tipStrong = t('finder.tipStrong');
  const [tipA, tipB] = tip.includes(tipStrong) ? tip.split(tipStrong) : [tip, ''];

  return (
    <section className="sec" id="finder">
      <div className="container">
        <SectionHead index={index} title={t('finder.title')} sub={t('finder.sub')} />

        <motion.div
          className="finder__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="finder__card-head">
            <span>{t('finder.head')}<em>{t('finder.draft')}</em></span>
            <span>{t('finder.headRight')}</span>
          </div>

          <div className="finder__body">
            <div className="finder__step">
              <span className="finder__step-label">
                <em>{t('finder.step')} 01</em> {t('finder.step1')}
              </span>
              <div className="finder__chips" role="group" aria-label={t('finder.step1')}>
                {BRANDS.map((b) => (
                  <button
                    key={b} type="button"
                    className={`chip${brand === b ? ' is-active' : ''}`}
                    onClick={() => setBrand(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="finder__step">
              <span className="finder__step-label">
                <em>{t('finder.step')} 02</em> {t('finder.step2')}
              </span>
              <div className="finder__chips" role="group" aria-label={t('finder.step2')}>
                {FINDER_SERVICES.map((s) => (
                  <button
                    key={s} type="button"
                    className={`chip${service === s ? ' is-active' : ''}`}
                    onClick={() => setService(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="finder__result">
              <AnimatePresence mode="wait">
                <motion.p
                  key={previewText}
                  className={`finder__preview${ready ? ' is-live' : ''}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.18 }}
                >
                  {previewText}
                </motion.p>
              </AnimatePresence>

              <a
                className={`btn btn--accent btn--lg finder__send${ready ? ' is-ready' : ''}`}
                href={buildWhatsAppUrl(message || '')}
                target="_blank" rel="noopener"
                aria-disabled={!ready}
              >
                <WhatsAppIcon size={17} /> {t('finder.send')}
              </a>
            </div>

            <p className="finder__tip">
              {tipA}{tipB !== '' ? <strong>{tipStrong}</strong> : null}{tipB}
            </p>
          </div>
        </motion.div>

        <PartSearch />
      </div>
    </section>
  );
}
