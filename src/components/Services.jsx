import { motion } from 'framer-motion';
import { PARTS, REPAIRS } from '../data/content';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

const list = { hidden: {}, show: { transition: { staggerChildren: 0.045 } } };
const row = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

function SpecList({ items, startAt }) {
  return (
    <motion.ul variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {items.map((name, i) => (
        <motion.li className="spec-row" key={name} variants={row}>
          <span className="spec-row__num">{String(startAt + i).padStart(2, '0')}</span>
          <span className="spec-row__name">{name}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function Services({ index }) {
  const { t } = useLang();
  return (
    <section className="sec" id="services">
      <div className="container">
        <SectionHead index={index} title={t('services.title')} sub={t('services.sub')} />

        <div className="services__cols">
          <div>
            <h3 className="services__group-title"><em>A</em> {t('services.groupA')}</h3>
            <SpecList items={PARTS} startAt={1} />
          </div>
          <div>
            <h3 className="services__group-title"><em>B</em> {t('services.groupB')}</h3>
            <SpecList items={REPAIRS} startAt={PARTS.length + 1} />
          </div>
        </div>
      </div>
    </section>
  );
}
