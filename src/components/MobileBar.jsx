import { CONTACT, MAPS_URL, buildWhatsAppUrl, WA_DEFAULT_MSG } from '../data/content';
import { WhatsAppIcon, PhoneIcon, PinIcon } from './icons';
import { useLang } from '../i18n/LangContext';

// Sticky action bar on phones — where most of this traffic will land.
// WhatsApp / Call / Directions, always one thumb away.
export default function MobileBar() {
  const { t } = useLang();
  return (
    <nav className="mobilebar" aria-label="Quick actions">
      <a href={buildWhatsAppUrl(WA_DEFAULT_MSG)} target="_blank" rel="noopener" className="mobilebar__item mobilebar__item--wa">
        <WhatsAppIcon size={19} /><span>{t('bar.wa')}</span>
      </a>
      <a href={`tel:${CONTACT.phone2}`} className="mobilebar__item">
        <PhoneIcon size={18} /><span>{t('bar.call')}</span>
      </a>
      <a href={MAPS_URL} target="_blank" rel="noopener" className="mobilebar__item">
        <PinIcon size={18} /><span>{t('bar.dir')}</span>
      </a>
    </nav>
  );
}
