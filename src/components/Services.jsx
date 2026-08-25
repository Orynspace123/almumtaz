import { motion } from 'framer-motion';
import { PARTS, REPAIRS } from '../data/content';
import { WrenchIcon } from './icons';
import SectionHead from './SectionHead';

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const row = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section className="section" id="services">
      <SectionHead
        eyebrow="Spare Parts & Workshop"
        title="From the part to the full repair."
        sub="Two spare-parts lines and ten in-house repair services — most jobs sourced, diagnosed and fixed the same day."
      />

      <div className="services__groups">
        <div className="services__group">
          <h3 className="services__group-title">Spare Parts</h3>
          <motion.ul className="services__list" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {PARTS.map((p) => (
              <motion.li key={p} variants={row}><WrenchIcon />{p}</motion.li>
            ))}
          </motion.ul>
        </div>
        <div className="services__group">
          <h3 className="services__group-title">Workshop Repairs</h3>
          <motion.ul className="services__list services__list--grid" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {REPAIRS.map((r) => (
              <motion.li key={r} variants={row}><WrenchIcon />{r}</motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
