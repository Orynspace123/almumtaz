import { motion } from 'framer-motion';
import { CONTACT } from '../data/content';
import SectionHead from './SectionHead';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Company section: the Arabic registered name front and centre, and the
// company facts rendered as a machine nameplate — data, not decoration.
export default function About() {
  return (
    <section className="sec" id="company">
      <div className="container">
        <SectionHead index="04" title="The company." />
        <div className="about__grid">
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
            <p className="about__ar">شركة الاختيار الممتاز للتجارة</p>
            <p className="about__lede">
              Registered as <strong>Al Ikhtiar Al Mumtaz Trading Company</strong> — known at the counter
              simply as <strong>Al Mumtaz</strong>. We stock and fit spare parts across the brands that move
              Saudi's freight, and repair what a parts counter alone can't fix: hydraulics, brakes,
              turbos, gearboxes, diesel pumps. If it keeps a truck off the road, it's our problem now.
            </p>
          </motion.div>

          <motion.div
            className="nameplate"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="nameplate__screw nameplate__screw--tl" />
            <span className="nameplate__screw nameplate__screw--tr" />
            <span className="nameplate__screw nameplate__screw--bl" />
            <span className="nameplate__screw nameplate__screw--br" />
            <div className="nameplate__inner">
              <p className="nameplate__title">— COMPANY DATA PLATE —</p>
              <table>
                <tbody>
                  <tr><td>TRADING NAME</td><td>AL IKHTIAR AL MUMTAZ TRADING CO.</td></tr>
                  <tr><td>الاسم التجاري</td><td className="ar">شركة الاختيار الممتاز للتجارة</td></tr>
                  <tr><td>LOCATION</td><td>{CONTACT.addressShort}</td></tr>
                  <tr><td>FIELD</td><td>TRUCK &amp; TRAILER SPARE PARTS · WORKSHOP REPAIR</td></tr>
                  <tr><td>COVERAGE</td><td>14 BRANDS / 12 SERVICE LINES</td></tr>
                  <tr><td>CONTACT</td><td>{CONTACT.whatsappDisplay} · {CONTACT.email}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
