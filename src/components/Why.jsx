import { motion } from 'framer-motion';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Why({ index }) {
  const { t } = useLang();
  const rows = [1, 2, 3, 4];

  return (
    <section className="sec" id="why">
      <div className="container">
        <SectionHead index={index} title={t('why.title')} />
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        >
          {rows.map((n) => (
            <motion.div className="why__row" key={n} variants={rise}>
              <span className="why__num">{String(n).padStart(2, '0')}</span>
              <h3>{t(`why.${n}.t`)}</h3>
              <p>{t(`why.${n}.b`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
