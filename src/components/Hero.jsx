import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, ArrowRightIcon } from './icons';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf;
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target]);

  return <span ref={ref} className="hero__stat-num">{value}</span>;
}

function StatBlock({ target, label }) {
  return (
    <div>
      <Counter target={target} />
      <div className="hero__stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <motion.div className="hero__inner" variants={container} initial="hidden" animate="show">
        <motion.p className="hero__eyebrow" variants={item}>
          شركة الاختيار الممتاز للتجارة &nbsp;·&nbsp; Trading Co. &nbsp;·&nbsp; Second Industrial Area, Dammam
        </motion.p>

        <h1 className="hero__title">
          <motion.span variants={item}>Every brand.</motion.span>
          <motion.span variants={item}>Every fix.</motion.span>
          <motion.span className="hero__title-accent" variants={item}>One address.</motion.span>
        </h1>

        <motion.p className="hero__sub" variants={item}>
          Genuine &amp; compatible spare parts, plus full workshop repair — for Mercedes-Benz, Volvo, MAN,
          Scania and 10 more truck &amp; trailer brands. Diagnosed, sourced and fixed under one roof in Dammam.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <motion.a
            className="btn btn--accent btn--lg"
            href={buildWhatsAppUrl("Hi Al Mumtaz, I'd like a quote.")}
            target="_blank" rel="noopener"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <WhatsAppIcon /> Get a Quote on WhatsApp
          </motion.a>
          <motion.a
            className="btn btn--outline btn--lg"
            href="#finder"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            Find Your Fix <ArrowRightIcon />
          </motion.a>
        </motion.div>

        <motion.div className="hero__stats" variants={item}>
          <StatBlock target={14} label="Brands Covered" />
          <StatBlock target={12} label="Service Lines" />
          <div>
            <span className="hero__stat-num">1</span>
            <div className="hero__stat-label">Location, Every Fleet</div>
          </div>
        </motion.div>
      </motion.div>

      <a className="hero__scroll" href="#brands" aria-label="Scroll to brands"><span /></a>
    </section>
  );
}
