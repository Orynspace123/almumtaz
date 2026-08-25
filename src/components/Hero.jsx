import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, ArrowRightIcon } from './icons';
import TruckSchematic from './TruckSchematic';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf;
    const start = performance.now();
    const duration = 1000;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return <span ref={ref} className="hero__stat-num">{value}<em>{suffix}</em></span>;
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="container" variants={stagger} initial="hidden" animate="show">
        <motion.div className="hero__meta" variants={rise}>
          <span className="ar">شركة الاختيار الممتاز للتجارة</span>
          <span>Truck &amp; trailer parts + workshop</span>
          <span>Second Industrial Area — Dammam, KSA</span>
        </motion.div>

        <h1 className="hero__title">
          <motion.span variants={rise}>Every brand.</motion.span>
          <motion.span className="hero__title-outline" variants={rise}>Every fix.</motion.span>
          <motion.span className="hero__title-accent" variants={rise}>One address.</motion.span>
        </h1>

        <div className="hero__lede-row">
          <motion.p className="hero__sub" variants={rise}>
            Spare parts and full workshop repair for <strong>14 truck &amp; trailer brands</strong> —
            Mercedes-Benz to Sino Truck, BPW to SAF. Diagnosed, sourced and fixed under one roof,
            so your truck goes back on the road instead of between shops.
          </motion.p>
          <motion.div className="hero__actions" variants={rise}>
            <a
              className="btn btn--accent btn--lg"
              href={buildWhatsAppUrl("Hi Al Mumtaz, I'd like a quote.")}
              target="_blank" rel="noopener"
            >
              <WhatsAppIcon size={17} /> Get a quote
            </a>
            <a className="btn btn--lg" href="#finder">
              Find your fix <span className="btn__arrow"><ArrowRightIcon size={15} /></span>
            </a>
          </motion.div>
        </div>

        <motion.div className="hero__schematic" variants={rise}>
          <TruckSchematic />
        </motion.div>

        <motion.div className="hero__stats" variants={rise}>
          <div className="hero__stat">
            <Counter target={14} suffix="" />
            <div className="hero__stat-label">Brands covered — parts &amp; service</div>
          </div>
          <div className="hero__stat">
            <Counter target={12} suffix="" />
            <div className="hero__stat-label">Service lines under one roof</div>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">1<em>.</em></span>
            <div className="hero__stat-label">Address for the whole fleet</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
