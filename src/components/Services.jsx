import { motion } from 'framer-motion';
import { PARTS, REPAIRS } from '../data/content';
import SectionHead from './SectionHead';

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

// The full capability list as a numbered spec sheet — 12 lines,
// continuous numbering across both groups.
export default function Services() {
  return (
    <section className="sec" id="services">
      <div className="container">
        <SectionHead
          index="02"
          title="From the part to the full repair."
          sub="Two supply lines and ten in-house repair services. Most jobs sourced, diagnosed and fixed the same day — parts counter and workshop share one roof."
        />

        <div className="services__cols">
          <div>
            <h3 className="services__group-title"><em>A</em> — PARTS SUPPLY</h3>
            <SpecList items={PARTS} startAt={1} />
          </div>
          <div>
            <h3 className="services__group-title"><em>B</em> — WORKSHOP REPAIRS</h3>
            <SpecList items={REPAIRS} startAt={PARTS.length + 1} />
          </div>
        </div>
      </div>
    </section>
  );
}
