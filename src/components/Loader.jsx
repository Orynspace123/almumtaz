import { motion } from 'framer-motion';

// Mount/unmount is controlled by App (inside AnimatePresence) — this
// component only defines how it enters and exits.
export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="loader__mark">
        <span>AL</span><span className="loader__accent">MUMTAZ</span>
      </div>
      <div className="loader__bar"><span /></div>
    </motion.div>
  );
}
