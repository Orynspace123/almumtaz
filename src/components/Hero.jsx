import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { buildWhatsAppUrl, WA_DEFAULT_MSG } from '../data/content';
import { WhatsAppIcon, ArrowRightIcon } from './icons';
import TruckSchematic, { SERVICE_POINTS } from './TruckSchematic';
import OpenStatus from './OpenStatus';
import { useLang } from '../i18n/LangContext';

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
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
    const duration = 1000;
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

export default function Hero() {
  const { t, isAr } = useLang();

  // The lede highlights the brand-count phrase; split around it so the
  // <strong> lands correctly in both languages.
  const lede = t('hero.lede');
  const strong = t('hero.ledeStrong');
  const [before, after] = lede.includes(strong) ? lede.split(strong) : [lede, ''];

  return (
    <section className="hero" id="home">
      <motion.div className="container" variants={stagger} initial="hidden" animate="show">
        <motion.div className="hero__meta" variants={rise}>
          <span className="ar">شركة الاختيار الممتاز للتجارة</span>
          <span>{t('hero.meta.trade')}</span>
          <span>{t('hero.meta.loc')}</span>
        </motion.div>

        <h1 className="hero__title">
          <motion.span variants={rise}>{t('hero.t1')}</motion.span>
          <motion.span className="hero__title-outline" variants={rise}>{t('hero.t2')}</motion.span>
          <motion.span className="hero__title-accent" variants={rise}>{t('hero.t3')}</motion.span>
        </h1>

        <div className="hero__lede-row">
          <motion.div variants={rise}>
            <p className="hero__sub">
              {before}{strong && after !== '' ? <strong>{strong}</strong> : null}{after}
            </p>
            <div className="hero__status"><OpenStatus /></div>
          </motion.div>
          <motion.div className="hero__actions" variants={rise}>
            <a
              className="btn btn--accent btn--lg"
              href={buildWhatsAppUrl(WA_DEFAULT_MSG)}
              target="_blank" rel="noopener"
            >
              <WhatsAppIcon size={17} /> {t('hero.cta1')}
            </a>
            <a className="btn btn--lg" href="#finder">
              {t('hero.cta2')}{' '}
              <span className="btn__arrow" style={isAr ? { transform: 'scaleX(-1)' } : undefined}>
                <ArrowRightIcon size={15} />
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div className="hero__schematic" variants={rise}>
          <TruckSchematic />
          {/* Shown on phones only, where the SVG's own labels are too small */}
          <ul className="hero__schematic-legend" aria-hidden="true">
            {SERVICE_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </motion.div>

        <motion.div className="hero__stats" variants={rise}>
          <div className="hero__stat">
            <Counter target={14} />
            <div className="hero__stat-label">{t('hero.stat1')}</div>
          </div>
          <div className="hero__stat">
            <Counter target={12} />
            <div className="hero__stat-label">{t('hero.stat2')}</div>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">1</span>
            <div className="hero__stat-label">{t('hero.stat3')}</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
