import { motion } from 'framer-motion';
import { buildWhatsAppUrl, WA_DEFAULT_MSG } from '../data/content';
import { WhatsAppIcon } from './icons';

// Always-visible WhatsApp bubble in the official brand green — the one
// button most Saudi B2B visitors actually look for.
export default function FloatingWhatsApp() {
  return (
    <motion.a
      className="wa-float"
      href={buildWhatsAppUrl(WA_DEFAULT_MSG)}
      target="_blank" rel="noopener"
      aria-label="Chat with the workshop on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <WhatsAppIcon size={30} />
    </motion.a>
  );
}
