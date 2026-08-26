import { motion } from 'framer-motion';
import { PART_BRANDS } from '../data/content';
import { useLang } from '../i18n/LangContext';

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

// Component makers actually stocked (filters, brakes, air, electrics) —
// different from the truck brands, and what a parts buyer scans for.
// Hidden until PART_BRANDS is filled in with real ones.
export default function PartBrands() {
  const { t } = useLang();
  if (!PART_BRANDS.length) return null;

  return (
    <section className="partbrands" id="partbrands">
      <div className="container">
        <p className="partbrands__label">{t('partBrands.label')}</p>
        <motion.ul
          className="partbrands__grid"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
        >
          {PART_BRANDS.map((b) => (
            <motion.li key={b} variants={rise}>{b}</motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
