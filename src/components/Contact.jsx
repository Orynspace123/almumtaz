import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT, buildWhatsAppUrl } from '../data/content';
import { WhatsAppIcon, PhoneIcon, MailIcon, PinIcon } from './icons';
import SectionHead from './SectionHead';

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const row = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const CARDS = [
  { Icon: WhatsAppIcon, title: 'WhatsApp', value: CONTACT.whatsappDisplay, href: buildWhatsAppUrl() },
  { Icon: PhoneIcon, title: 'Call the Workshop', value: CONTACT.phone2Display, href: `tel:${CONTACT.phone2}` },
  { Icon: MailIcon, title: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  {
    Icon: PinIcon, title: 'Location', value: CONTACT.addressShort,
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
    setNote('Opening your email app to send this to us…');
  }

  return (
    <section className="section" id="contact">
      <SectionHead eyebrow="Get in touch" title="Bring us the truck. We'll handle the rest." />

      <div className="contact__grid">
        <motion.div className="contact__cards" variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {CARDS.map(({ Icon, title, value, href }) => (
            <motion.a
              className="contact__card" key={title} href={href} target="_blank" rel="noopener"
              variants={row} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 350, damping: 24 }}
            >
              <Icon size={22} />
              <div><strong>{title}</strong><span>{value}</span></div>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          className="contact__form" onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="contact__form-title">Or send us a message directly</p>
          <div className="contact__form-row">
            <label>Name <input type="text" name="name" required /></label>
            <label>Phone <input type="tel" name="phone" required /></label>
          </div>
          <label>Truck / trailer brand <input type="text" name="brand" placeholder="e.g. Volvo FH16" /></label>
          <label>What do you need? <textarea name="message" rows={3} required placeholder="Spare part, or the issue you're facing" /></label>
          <motion.button
            type="submit" className="btn btn--accent"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            Send Message
          </motion.button>
          <p className="contact__form-note">{note}</p>
        </motion.form>
      </div>
    </section>
  );
}
