import { motion } from 'framer-motion';
import { CONTACT, MAPS_URL, HOURS } from '../data/content';
import { PinIcon, ArrowRightIcon } from './icons';
import SectionHead from './SectionHead';
import OpenStatus from './OpenStatus';
import { useLang } from '../i18n/LangContext';

const DAY_KEYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_AR = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

// Groups consecutive days that share the same hours, so the table reads
// "SUN–THU  08:00–12:00, 16:00–20:00" instead of five identical rows.
function groupedHours() {
  const rows = [];
  for (let d = 0; d < 7; d += 1) {
    const key = JSON.stringify(HOURS[d] || []);
    const last = rows[rows.length - 1];
    if (last && last.key === key) last.end = d;
    else rows.push({ key, start: d, end: d, ranges: HOURS[d] || [] });
  }
  return rows;
}

export default function FindUs() {
  const { t, isAr } = useLang();
  const days = isAr ? DAY_AR : DAY_KEYS;

  return (
    <section className="sec" id="findus">
      <div className="container">
        <SectionHead index="07" title={t('findus.title')} sub={t('findus.sub')} />

        <div className="findus__grid">
          <motion.a
            className="findus__map" href={MAPS_URL} target="_blank" rel="noopener"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="findus__map-grid" aria-hidden="true" />
            <div className="findus__map-pin">
              <PinIcon size={34} />
            </div>
            <div className="findus__map-cta">
              {t('findus.directions')} <ArrowRightIcon size={15} />
            </div>
          </motion.a>

          <motion.div
            className="findus__info"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <OpenStatus />

            <dl className="findus__facts">
              <dt>{t('findus.landmark')}</dt>
              <dd>{isAr ? CONTACT.addressShortAr : t('findus.landmarkVal')}</dd>
              <dt>{t('findus.parking')}</dt>
              <dd>{t('findus.parkingVal')}</dd>
            </dl>

            <h4 className="findus__hours-title">{t('findus.hours')}</h4>
            <table className="findus__hours">
              <tbody>
                {groupedHours().map((row) => (
                  <tr key={row.start}>
                    <th scope="row">
                      {row.start === row.end ? days[row.start] : `${days[row.start]}–${days[row.end]}`}
                    </th>
                    <td>
                      {row.ranges.length === 0
                        ? '—'
                        : row.ranges.map(([a, b]) => `${a}–${b}`).join('  ·  ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
