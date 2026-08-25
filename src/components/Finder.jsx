import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS, FINDER_SERVICES, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon } from './icons';
import SectionHead from './SectionHead';

// The site's working tool, styled as a workshop job card: pick brand +
// problem, it writes the WhatsApp message and sends it to the counter.
export default function Finder() {
  const [brand, setBrand] = useState(null);
  const [service, setService] = useState(null);

  const ready = Boolean(brand && service);
  const message = ready
    ? `Hi Al Mumtaz, I have a ${brand} and need: ${service}. Can you help?`
    : null;

  let previewText = 'AWAITING INPUT — select a brand and a service to draft your request.';
  if (brand && !service) previewText = `BRAND: ${brand}. Now select the service you need.`;
  if (!brand && service) previewText = `SERVICE: ${service}. Now select your brand.`;
  if (ready) previewText = `"${message}"`;

  return (
    <section className="sec" id="finder">
      <div className="container">
        <SectionHead
          index="01"
          title="Find your fix."
          sub="Tell us the truck and the problem — we draft the message, one tap sends it to the workshop's WhatsApp. No forms, no call centre."
        />

        <motion.div
          className="finder__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="finder__card-head">
            <span>REPAIR ORDER — <em>DRAFT</em></span>
            <span>AL MUMTAZ · DAMMAM · SAME-DAY REPLY</span>
          </div>

          <div className="finder__body">
            <div className="finder__step">
              <span className="finder__step-label"><em>STEP 01</em> Your truck brand</span>
              <div className="finder__chips" role="group" aria-label="Select your truck brand">
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
              <span className="finder__step-label"><em>STEP 02</em> What you need</span>
              <div className="finder__chips" role="group" aria-label="Select the service you need">
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
                <WhatsAppIcon size={17} /> Send on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
