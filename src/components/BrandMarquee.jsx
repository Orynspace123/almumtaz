import { BRANDS } from '../data/content';
import { useLang } from '../i18n/LangContext';

function Track() {
  return (
    <>
      {BRANDS.map((b) => (
        <span key={b} style={{ display: 'flex', alignItems: 'center' }}>
          <span className="marquee__item">{b}</span>
          <span className="marquee__sep" aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

// Dark band of oversized brand names — the shop's own poster line,
// "Brands. All in one place.", as a running strip.
export default function BrandMarquee() {
  const { t } = useLang();
  return (
    <section className="brands" id="brands">
      <p className="brands__label">{t('brands.label')}</p>
      <div className="marquee" aria-label={t('brands.label')}>
        <div className="marquee__track">
          <Track /><Track />
        </div>
      </div>
    </section>
  );
}
