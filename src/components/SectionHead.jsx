import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <motion.p
        className="section-head__eyebrow"
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="section-head__title"
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          className="section-head__sub"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.14 }}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
