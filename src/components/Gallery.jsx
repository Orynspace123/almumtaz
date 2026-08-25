import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHead from './SectionHead';

// Real photos of the shop — the strongest authenticity signal on the
// site. Files live in public/photos/ under these exact names; any that
// are missing are silently skipped, so the owner can upload photos
// straight to the GitHub repo (drag & drop) and they appear on the next
// deploy with zero code changes. The whole section hides until at least
// one photo exists.
const PHOTOS = [
  { src: '/photos/exterior-1.jpg', cap: 'THE STOREFRONT — SECOND INDUSTRIAL AREA' },
  { src: '/photos/exterior-2.jpg', cap: 'STREET VIEW' },
  { src: '/photos/counter-1.jpg', cap: 'PARTS COUNTER' },
  { src: '/photos/interior-1.jpg', cap: 'STOCK — FILTERS, VALVES, ELECTRICS' },
  { src: '/photos/interior-2.jpg', cap: 'STOCK SHELVES' },
  { src: '/photos/workshop-1.jpg', cap: 'WORKSHOP FLOOR' },
  { src: '/photos/workshop-2.jpg', cap: 'REPAIR BAY' },
  { src: '/photos/workshop-3.jpg', cap: 'ON THE JOB' },
];

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Gallery() {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      PHOTOS.map(
        (p) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(p);
            img.onerror = () => resolve(null);
            img.src = p.src;
          }),
      ),
    ).then((results) => {
      if (!cancelled) setAvailable(results.filter(Boolean));
    });
    return () => { cancelled = true; };
  }, []);

  if (available.length === 0) return null;

  return (
    <section className="sec" id="shop">
      <div className="container">
        <SectionHead
          index="04"
          title="The shop."
          sub="Not a virtual storefront — a stocked counter and a working repair floor you can walk into today."
        />
        <motion.div
          className="gallery"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
        >
          {available.map((p, i) => (
            <motion.figure className="gallery__item" key={p.src} variants={rise}>
              <img src={p.src} alt={p.cap.toLowerCase()} loading="lazy" />
              <figcaption>
                <span>FIG.{String(i + 1).padStart(2, '0')}</span> {p.cap}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
