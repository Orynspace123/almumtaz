import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// Renders only real customer quotes supplied in content.js. Stays hidden
// while the list is empty — an invented review is worse than no review.
export default function Testimonials() {
  const { t, isAr } = useLang();
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="sec" id="reviews">
      <div className="container">
        <SectionHead index="06" title={t('reviews.title')} />
        <motion.div
          className="reviews"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((r) => (
            <motion.figure className="review" key={r.name + r.company} variants={rise}>
              <blockquote>{isAr && r.quoteAr ? r.quoteAr : r.quote}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>{isAr && r.companyAr ? r.companyAr : r.company}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
