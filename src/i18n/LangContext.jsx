import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { STRINGS } from './strings';

const LangContext = createContext(null);

function initialLang() {
  if (typeof window === 'undefined') return 'en';
  const url = new URLSearchParams(window.location.search).get('lang');
  if (url === 'ar' || url === 'en') return url;
  try {
    const saved = localStorage.getItem('almumtaz.lang');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    /* private mode / blocked storage — fall through to default */
  }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    const dir = STRINGS[lang].dir;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try { localStorage.setItem('almumtaz.lang', lang); } catch { /* ignore */ }
  }, [lang]);

  // t('key', { a: 'b' }) — {placeholders} in the string are substituted.
  const t = useCallback(
    (key, vars) => {
      const raw = STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
      if (!vars) return raw;
      return Object.entries(vars).reduce(
        (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
        raw,
      );
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, isAr: lang === 'ar', dir: STRINGS[lang].dir }),
    [lang, t],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
