import { motion } from 'framer-motion';
import SectionHead from './SectionHead';

const ROWS = [
  { num: '01', title: 'One stop, not five', body: 'Parts counter and workshop under the same roof — no shuttling your truck between a parts shop, a hose crimper and a separate garage.' },
  { num: '02', title: '14 brands, one counter', body: "Mercedes-Benz to Sino Truck to Ashok Leyland, plus BPW, ROR and SAF axles. A mixed fleet is still one stop." },
  { num: '03', title: 'Registered & on-site', body: "A licensed trading company with a real storefront and workshop in Dammam's Second Industrial Area — come see the shop before you commit a fleet." },
  { num: '04', title: 'Talk to the workshop', body: 'No call centre. The WhatsApp number is answered at the counter, by people who know the part from its picture.' },
];

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Why() {
  return (
    <section className="sec" id="why">
      <div className="container">
        <SectionHead index="03" title="Built for uptime, not excuses." />
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        >
          {ROWS.map((r) => (
            <motion.div className="why__row" key={r.num} variants={rise}>
              <span className="why__num">{r.num}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
