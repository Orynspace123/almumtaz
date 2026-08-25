import { motion } from 'framer-motion';

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

// Numbered, left-aligned section header — spec-sheet style, replaces the
// centered eyebrow/title/sub pattern.
export default function SectionHead({ index, title, sub }) {
  return (
    <motion.div
      className="sec__head"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span className="sec__index" variants={rise}>SEC.{index}</motion.span>
      <div className="sec__titles">
        <motion.h2 variants={rise}>{title}</motion.h2>
        {sub && <motion.p className="sec__sub" variants={rise}>{sub}</motion.p>}
      </div>
    </motion.div>
  );
}
