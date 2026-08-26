import { useLang } from '../i18n/LangContext';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      className="langtoggle"
      onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
      aria-label={lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
    >
      {lang === 'en' ? 'ع' : 'EN'}
    </button>
  );
}
