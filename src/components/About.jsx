import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about__inner">
        <motion.div
          className="about__text"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-head__eyebrow">Al Ikhtiar Al Mumtaz Trading Co.</p>
          <h2>شركة الاختيار الممتاز للتجارة</h2>
          <p className="about__lede">
            Known on the ground as <strong>Al Mumtaz</strong> — a truck &amp; trailer spare parts
            and repair workshop in Dammam's Second Industrial Area, near Souq Al Ghanam, Thaslin.
            We stock and fit parts across the brands that move Saudi's freight, and repair what
            a parts counter alone can't fix.
          </p>
        </motion.div>

        <motion.div
          className="about__frame" aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about__frame-mark">AM</span>
        </motion.div>
      </div>
    </section>
  );
}
