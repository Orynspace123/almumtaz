import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS, FINDER_SERVICES, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';
import SectionHead from './SectionHead';

function Chip({ label, active, onClick }) {
  return (
    <motion.button
      type="button"
      className={`chip${active ? ' is-active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 26 }}
    >
      {label}
    </motion.button>
  );
}

export default function Finder() {
  const [brand, setBrand] = useState(null);
  const [service, setService] = useState(null);

  const ready = Boolean(brand && service);
  const message = ready
    ? `Hi Al Mumtaz, I have a ${brand} and need: ${service}. Can you help?`
    : null;

  let previewText = 'Select a brand and a service above to build your request.';
  if (brand && !service) previewText = 'Select the service you need to build your request.';
  if (!brand && service) previewText = 'Select your brand to build your request.';
  if (ready) previewText = `"${message}"`;

  return (
    <section className="section" id="finder">
      <SectionHead
        eyebrow="The fastest way to reach us"
        title="Find your fix."
        sub="Tell us your truck and the problem — we'll build your message. One tap sends it straight to our workshop on WhatsApp."
      />

      <div className="finder__panel">
        <div className="finder__step">
          <span className="finder__step-label"><em>01</em> Your brand</span>
          <div className="finder__chips" role="group" aria-label="Select your truck brand">
            {BRANDS.map((b) => (
              <Chip key={b} label={b} active={brand === b} onClick={() => setBrand(b)} />
            ))}
          </div>
        </div>

        <div className="finder__step">
          <span className="finder__step-label"><em>02</em> What you need</span>
          <div className="finder__chips" role="group" aria-label="Select the service you need">
            {FINDER_SERVICES.map((s) => (
              <Chip key={s} label={s} active={service === s} onClick={() => setService(s)} />
            ))}
          </div>
        </div>

        <div className="finder__result">
          <AnimatePresence mode="wait">
            <motion.p
              key={previewText}
              className="finder__preview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {previewText}
            </motion.p>
          </AnimatePresence>

          <motion.a
            className={`btn btn--accent btn--lg finder__send${ready ? ' is-ready' : ''}`}
            href={buildWhatsAppUrl(message || '')}
            target="_blank" rel="noopener"
            aria-disabled={!ready}
            whileHover={ready ? { scale: 1.04 } : {}}
            whileTap={ready ? { scale: 0.97 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <WhatsAppIcon /> Send on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
