// Small hand-rolled SVG icon set — no icon-library dependency, matches the
// UI/UX Pro Max checklist item "no emojis as icons".
export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.44 1.33 4.94L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01a8.1 8.1 0 0 1-4.14-1.14l-.3-.17-3.14.82.84-3.06-.19-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.49 3.66-8.15 8.16-8.15 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.39 5.77c0 4.49-3.67 8.15-8.16 8.15z"/>
  </svg>
);

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
  </svg>
);

export const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export const WrenchIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.7 6.3a4 4 0 0 0-5.6 4.9L3 17.3V21h3.7l6.1-6.1a4 4 0 0 0 4.9-5.6l-2.8 2.8-2-2 2.8-2.8z"/>
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);
