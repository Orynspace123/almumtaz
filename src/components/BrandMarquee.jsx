import { BRANDS } from '../data/content';
import SectionHead from './SectionHead';

function Track() {
  return (
    <>
      {BRANDS.map((b) => (
        <span className="brand-badge" key={b}>
          <span className="brand-badge__dot" />
          <span className="brand-badge__name">{b}</span>
        </span>
      ))}
    </>
  );
}

export default function BrandMarquee() {
  return (
    <section className="brands" id="brands">
      <SectionHead eyebrow="Parts & Service Coverage" title="Brands. All in one place." />
      <div className="marquee" aria-label="Truck and trailer brands we service">
        <div className="marquee__track">
          <Track /><Track />
        </div>
      </div>
    </section>
  );
}
