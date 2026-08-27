import { useEffect, useState } from 'react';
import { getOpenState, formatTime } from '../data/content';
import { useLang } from '../i18n/LangContext';

// Live "open now / closed" badge, evaluated in the shop's own timezone.
// Re-checks every minute so a page left open doesn't go stale.
export default function OpenStatus({ compact = false }) {
  const { t, lang } = useLang();
  const [state, setState] = useState(() => getOpenState());

  useEffect(() => {
    const id = setInterval(() => setState(getOpenState()), 60_000);
    return () => clearInterval(id);
  }, []);

  const fmt = (hhmm) => formatTime(hhmm, lang);
  const label = state.open
    ? `${t('open.now')} — ${t('open.until', { t: fmt(state.until) })}`
    : state.nextDay
      ? `${t('open.closed')} — ${t('open.opensDay', { d: state.nextDay === 'tomorrow' ? t('open.tomorrow') : state.nextDay, t: fmt(state.next) })}`
      : state.next
        ? `${t('open.closed')} — ${t('open.opens', { t: fmt(state.next) })}`
        : t('open.closed');

  return (
    <span className={`openstatus${state.open ? ' is-open' : ''}${compact ? ' is-compact' : ''}`}>
      <span className="openstatus__dot" aria-hidden="true" />
      {label}
      {!compact && (
        <span className="openstatus__hint">
          {state.open ? t('open.replyFast') : t('open.msgAnyway')}
        </span>
      )}
    </span>
  );
}
