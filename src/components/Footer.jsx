import { CONTACT, buildWhatsAppUrl } from '../data/content';
import { useLang } from '../i18n/LangContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="hazard" aria-hidden="true" />
      <div className="footer__cols">
        <div className="footer__about">
          <span className="footer__tag">{t('footer.tag')}</span>
          <p>{t('footer.blurb')}</p>
        </div>
        <div className="footer__col">
          <h4>{t('footer.site')}</h4>
          <a href="#brands">{t('nav.brands')}</a>
          <a href="#finder">{t('nav.finder')}</a>
          <a href="#services">{t('nav.services')}</a>
          <a href="#company">{t('nav.company')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </div>
        <div className="footer__col">
          <h4>{t('footer.contact')}</h4>
          <a href={buildWhatsAppUrl()} target="_blank" rel="noopener">WA {CONTACT.whatsappDisplay}</a>
          <a href={`tel:${CONTACT.phone2}`}>TEL {CONTACT.phone2Display}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
      <div className="footer__legal">
        <span>{t('footer.rights', { y: new Date().getFullYear() })}</span>
        <span>{t('footer.loc')}</span>
      </div>
      <div className="footer__wordmark" aria-hidden="true">ALMUMTAZ</div>
    </footer>
  );
}
