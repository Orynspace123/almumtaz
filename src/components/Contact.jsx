import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon, ArrowRightIcon } from './icons';
import SectionHead from './SectionHead';

const list = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ROWS = [
  { Icon: WhatsAppIcon, label: 'WhatsApp — fastest', value: CONTACT.whatsappDisplay, href: buildWhatsAppUrl() },
  { Icon: PhoneIcon, label: 'Call the workshop', value: CONTACT.phone2Display, href: `tel:${CONTACT.phone2}` },
  { Icon: MailIcon, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    Icon: PinIcon, label: 'Find the shop', value: CONTACT.addressShort,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Al Ikhtiar Al Mumtaz Trading, Thaslin, Second Industrial Area, Dammam')}`,
  },
];

export default function Contact() {
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const phone = data.get('phone');
    const brand = data.get('brand');
    const message = data.get('message');
    const subject = `Website enquiry from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nBrand: ${brand || '-'}\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNote('OPENING YOUR EMAIL APP…');
  }

  return (
    <section className="sec" id="contact">
      <div className="container">
        <SectionHead index="05" title="Bring us the truck." />

        <div className="contact__grid">
          <motion.div
            className="contact__rows"
            variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          >
            {ROWS.map(({ Icon, label, value, href }) => (
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
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="jobform__head">
              <span>ENQUIRY FORM</span>
              <span><em>REPLY SAME DAY</em></span>
            </div>
            <div className="jobform__body">
              <div className="jobform__row">
                <label>Name <input type="text" name="name" required /></label>
                <label>Phone <input type="tel" name="phone" required /></label>
              </div>
              <label>Truck / trailer brand <input type="text" name="brand" placeholder="e.g. Volvo FH16" /></label>
              <label>What do you need? <textarea name="message" rows={3} required placeholder="Spare part, or the issue you're facing" /></label>
              <button type="submit" className="btn btn--fill">
                Send message <span className="btn__arrow"><ArrowRightIcon size={14} /></span>
              </button>
              <p className="jobform__note">{note}</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
