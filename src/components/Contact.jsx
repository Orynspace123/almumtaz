import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, MAPS_URL, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon } from './icons';
import SectionHead from './SectionHead';
import { useLang } from '../i18n/LangContext';

const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const { t, isAr } = useLang();
  const [note, setNote] = useState('');

  const rows = [
    { Icon: WhatsAppIcon, label: t('contact.wa'), value: CONTACT.whatsappDisplay, href: buildWhatsAppUrl() },
    { Icon: PhoneIcon, label: t('contact.call'), value: CONTACT.phone2Display, href: `tel:${CONTACT.phone2}` },
    { Icon: MailIcon, label: t('contact.email'), value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { Icon: PinIcon, label: t('contact.find'), value: isAr ? CONTACT.addressShortAr : CONTACT.addressShort, href: MAPS_URL },
  ];

  // The form hands off to WhatsApp rather than email: it's where the shop
  // actually answers, and it works on a phone with no mail app set up.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const brand = (data.get('brand') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const lines = isAr
      ? [`مرحباً الممتاز،`, `الاسم: ${name}`, `الجوال: ${phone}`, brand ? `المركبة: ${brand}` : null, ``, message]
      : [`Hi Al Mumtaz,`, `Name: ${name}`, `Phone: ${phone}`, brand ? `Vehicle: ${brand}` : null, ``, message];

    window.open(buildWhatsAppUrl(lines.filter((l) => l !== null).join('\n')), '_blank', 'noopener');
    setNote(t('form.note'));
  }

  return (
    <section className="sec" id="contact">
      <div className="container">
        <SectionHead index="08" title={t('contact.title')} />

        <div className="contact__grid">
          <motion.div
            className="contact__rows"
            variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {rows.map(({ Icon, label, value, href }) => (
              <motion.a className="contact__row" key={label} href={href} target="_blank" rel="noopener" variants={rise}>
                <div>
                  <div className="contact__row-label">{label}</div>
                  <div className="contact__row-value">{value}</div>
                </div>
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            className="jobform" onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="jobform__head">
              <span>{t('form.head')}</span>
              <span><em>{t('form.headRight')}</em></span>
            </div>
            <div className="jobform__body">
              <div className="jobform__row">
                <label>{t('form.name')} <input type="text" name="name" required /></label>
                <label>{t('form.phone')} <input type="tel" name="phone" required /></label>
              </div>
              <label>{t('form.brand')} <input type="text" name="brand" placeholder={t('form.brandPh')} /></label>
              <label>{t('form.need')} <textarea name="message" rows={3} required placeholder={t('form.needPh')} /></label>
              <button type="submit" className="btn btn--wa">
                <WhatsAppIcon size={16} /> {t('form.submit')}
              </button>
              <p className="jobform__note">{note}</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
