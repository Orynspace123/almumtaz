import { motion } from 'framer-motion';
import { TESTIMONIALS, MAPS_URL } from '../data/content';
import SectionHead from './SectionHead';
import { ArrowRightIcon } from './icons';
import { useLang } from '../i18n/LangContext';

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Real Google reviews only, quoted from the shop's listing. No star
// rating is shown — see the note on TESTIMONIALS in content.js.
export default function Testimonials({ index }) {
  const { t, isAr } = useLang();
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="sec" id="reviews">
      <div className="container">
        <SectionHead index={index} title={t('reviews.title')} sub={t('reviews.sub')} />

        <motion.div
          className="reviews"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
        >
          {TESTIMONIALS.map((r) => (
            <motion.figure className="review" key={r.name} variants={rise}>
              <blockquote>{isAr && r.quoteAr ? r.quoteAr : r.quote}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>
                  {t('reviews.source')}
                  {r.lang ? ` · ${t('reviews.translated', { l: r.lang })}` : ''}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <a className="reviews__link" href={MAPS_URL} target="_blank" rel="noopener">
          {t('reviews.readAll')} <ArrowRightIcon size={15} />
        </a>
      </div>
    </section>
  );
}
