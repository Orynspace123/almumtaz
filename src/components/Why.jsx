import { motion } from 'framer-motion';
import SectionHead from './SectionHead';

const CARDS = [
  { num: '01', title: 'One stop, not five', body: 'Parts and repair under the same roof — no shuttling your truck between a parts shop and a separate workshop.' },
  { num: '02', title: '14 brands, one counter', body: "Mercedes-Benz to Sino Truck to Ashok Leyland — your fleet doesn't have to be one brand for us to keep it running." },
  { num: '03', title: 'Registered & on-site', body: "Licensed trading company with a physical storefront and workshop in Dammam's Second Industrial Area." },
  { num: '04', title: 'Talk to the workshop directly', body: 'No call centre. Message the shop on WhatsApp and get a real answer from someone who knows the part.' },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Why() {
  return (
    <section className="section section--muted" id="why">
      <SectionHead eyebrow="Why fleets choose Al Mumtaz" title="Built for uptime, not excuses." />
      <motion.div className="why__grid" variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {CARDS.map((c) => (
          <motion.div
            className="why__card" key={c.num} variants={card}
            whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <span className="why__card-num">{c.num}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
