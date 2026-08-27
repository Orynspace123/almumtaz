import { useLang } from '../i18n/LangContext';

// Segmented EN | ع switch — reads as a real control rather than a
// mystery button, and shows which language is currently active.
export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="langtoggle" role="group" aria-label="Language / اللغة">
      <button
        type="button"
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'ar' ? 'is-active' : ''}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
        lang="ar"
      >
        عربي
      </button>
    </div>
  );
}
