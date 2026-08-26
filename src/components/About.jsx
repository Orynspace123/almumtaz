import { motion } from 'framer-motion';
import { CONTACT } from '../data/content';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const { t, isAr } = useLang();

  return (
    <section className="sec" id="company">
      <div className="container">
        <SectionHead index="05" title={t('company.title')} />
        <div className="about__grid">
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <p className="about__ar">شركة الاختيار الممتاز للتجارة</p>
            <p className="about__lede">{t('company.lede')}</p>
          </motion.div>

          <motion.div
            className="nameplate"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="nameplate__screw nameplate__screw--tl" />
            <span className="nameplate__screw nameplate__screw--tr" />
            <span className="nameplate__screw nameplate__screw--bl" />
            <span className="nameplate__screw nameplate__screw--br" />
            <div className="nameplate__inner">
              <p className="nameplate__title">{t('plate.title')}</p>
              <table>
                <tbody>
                  <tr><td>{t('plate.tradeName')}</td><td>AL IKHTIAR AL MUMTAZ TRADING CO.</td></tr>
                  <tr><td>{t('plate.arName')}</td><td className="ar">شركة الاختيار الممتاز للتجارة</td></tr>
                  <tr><td>{t('plate.location')}</td><td>{isAr ? CONTACT.addressShortAr : CONTACT.addressShort}</td></tr>
                  <tr><td>{t('plate.field')}</td><td>{t('plate.fieldVal')}</td></tr>
                  <tr><td>{t('plate.coverage')}</td><td>{t('plate.coverageVal')}</td></tr>
                  <tr><td>{t('plate.contact')}</td><td>{CONTACT.whatsappDisplay} · {CONTACT.email}</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
