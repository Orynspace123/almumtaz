import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

// Real photos of the shop — the strongest authenticity signal on the
// site. Files live in public/photos/ under these exact names; any that
// are missing are silently skipped, so the owner can upload photos
// straight to the GitHub repo (drag & drop) and they appear on the next
// deploy with zero code changes. The whole section hides until at least
// one photo exists.
const PHOTOS = [
  { src: '/photos/exterior-1.jpg', en: 'THE STOREFRONT — SECOND INDUSTRIAL AREA', ar: 'واجهة المحل — المنطقة الصناعية الثانية' },
  { src: '/photos/exterior-2.jpg', en: 'STREET VIEW', ar: 'من الشارع' },
  { src: '/photos/counter-1.jpg', en: 'PARTS COUNTER', ar: 'مكتب قطع الغيار' },
  { src: '/photos/interior-1.jpg', en: 'STOCK — FILTERS, VALVES, ELECTRICS', ar: 'المخزون — فلاتر، صمامات، كهرباء' },
  { src: '/photos/interior-2.jpg', en: 'STOCK SHELVES', ar: 'رفوف المخزون' },
  { src: '/photos/workshop-1.jpg', en: 'WORKSHOP FLOOR', ar: 'أرضية الورشة' },
  { src: '/photos/workshop-2.jpg', en: 'REPAIR BAY', ar: 'منطقة الإصلاح' },
  { src: '/photos/workshop-3.jpg', en: 'ON THE JOB', ar: 'أثناء العمل' },
];

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Gallery({ index, onPhotos }) {
  const { t, isAr } = useLang();
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
      if (cancelled) return;
      const found = results.filter(Boolean);
      setAvailable(found);
      onPhotos?.(found.length > 0);
    });
    return () => { cancelled = true; };
  }, [onPhotos]);

  if (available.length === 0) return null;

  return (
    <section className="sec" id="shop">
      <div className="container">
        <SectionHead index={index} title={t('shop.title')} sub={t('shop.sub')} />
        <motion.div
          className="gallery"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
        >
          {available.map((p, i) => {
            const cap = isAr ? p.ar : p.en;
            return (
              <motion.figure className="gallery__item" key={p.src} variants={rise}>
                <img src={p.src} alt={cap} loading="lazy" />
                <figcaption>
                  <span>FIG.{String(i + 1).padStart(2, '0')}</span> {cap}
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
