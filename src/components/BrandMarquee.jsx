import { BRANDS } from '../data/content';

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
  return (
    <section className="brands" id="brands">
      <p className="brands__label">Brands — all in one place · parts &amp; service coverage</p>
      <div className="marquee" aria-label="Truck and trailer brands we cover">
        <div className="marquee__track">
          <Track /><Track />
        </div>
      </div>
    </section>
  );
}
