import { motion, useReducedMotion } from 'framer-motion';

// Blueprint-style side profile of a tractor-trailer, drawn as animated
// line art with callout labels pointing at the systems the workshop
// actually services. This is the site's one bespoke visual asset — it
// carries the "workshop, not template" identity, so keep it schematic:
// clean strokes, no fills, dimension-line callouts.

const INK = 'var(--ink)';
const ORANGE = 'var(--orange)';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.15 + i * 0.07, duration: 0.8, ease: 'easeInOut' },
      opacity: { delay: 0.15 + i * 0.07, duration: 0.01 },
    },
  }),
};

const fadeLabel = {
  hidden: { opacity: 0, y: 6 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 1.3 + i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Callout({ i, x, yFrom, yTo, label, below }) {
  const textY = below ? yTo + 20 : yTo - 12;
  return (
    <g className="schem__callout">
      <motion.rect
        className="schem__dot"
        x={x - 3.5} y={yFrom - 3.5} width="7" height="7" fill={ORANGE}
        variants={fadeLabel} custom={i}
      />
      <motion.line
        className="schem__leader"
        x1={x} y1={yFrom} x2={x} y2={yTo} stroke={INK} strokeWidth="1" strokeDasharray="4 4"
        variants={draw} custom={i + 10}
      />
      <motion.text
        className="schem__label"
        x={x} y={textY} textAnchor="middle" variants={fadeLabel} custom={i}
      >
        {label}
      </motion.text>
    </g>
  );
}

function Wheel({ cx, custom }) {
  return (
    <g>
      <motion.circle cx={cx} cy="286" r="34" fill="none" stroke={INK} strokeWidth="2.5" variants={draw} custom={custom} />
      <motion.circle cx={cx} cy="286" r="14" fill="none" stroke={INK} strokeWidth="1.5" variants={draw} custom={custom + 1} />
      <motion.circle cx={cx} cy="286" r="3.5" fill={INK} variants={fadeLabel} custom={custom} />
    </g>
  );
}

// The five systems the callouts point at — also rendered as a plain
// list on phones, where SVG labels in a 1200-wide viewBox would shrink
// to a few unreadable pixels.
export const SERVICE_POINTS = [
  'Trailer spare parts',
  'Air systems',
  'Engine · Turbo',
  'Hydraulics',
  'Brakes · Chambers',
];

export default function TruckSchematic() {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="schem"
      viewBox="0 0 1200 400"
      role="img"
      aria-label="Schematic drawing of a truck and trailer with the workshop's service points labelled"
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {/* ground */}
      <motion.line x1="20" y1="320" x2="1180" y2="320" stroke={INK} strokeWidth="1.5" strokeDasharray="10 8" variants={draw} custom={0} />

      {/* trailer box + panel lines */}
      <motion.rect x="60" y="100" width="660" height="135" fill="none" stroke={INK} strokeWidth="2.5" variants={draw} custom={1} />
      <motion.path
        d="M125 108 V227 M190 108 V227 M255 108 V227 M320 108 V227 M385 108 V227 M450 108 V227 M515 108 V227 M580 108 V227 M645 108 V227"
        stroke={INK} strokeWidth="1" opacity="0.35" fill="none" variants={draw} custom={4}
      />

      {/* chassis rail */}
      <motion.path d="M60 240 H1050 M60 248 H1050" stroke={INK} strokeWidth="1.5" fill="none" variants={draw} custom={2} />

      {/* landing legs */}
      <motion.path d="M176 248 V302 M188 248 V302 M166 302 H198" stroke={INK} strokeWidth="2" fill="none" variants={draw} custom={5} />

      {/* exhaust stack */}
      <motion.path d="M750 240 V92 M762 240 V92 M746 92 H766" stroke={INK} strokeWidth="2" fill="none" variants={draw} custom={6} />

      {/* cab */}
      <motion.path
        d="M772 240 V112 L890 104 L952 148 L1024 162 L1040 200 L1044 240"
        fill="none" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" variants={draw} custom={3}
      />
      <motion.path d="M888 240 V126" stroke={INK} strokeWidth="1.5" variants={draw} custom={7} />
      <motion.path d="M784 128 L882 118 L912 150 L784 152 Z" fill="none" stroke={INK} strokeWidth="1.5" variants={draw} custom={8} />
      {/* fuel tank */}
      <motion.rect x="845" y="252" width="88" height="28" rx="10" fill="none" stroke={INK} strokeWidth="1.5" variants={draw} custom={9} />
      {/* bumper */}
      <motion.path d="M1044 248 V272" stroke={INK} strokeWidth="2.5" variants={draw} custom={9} />

      {/* wheels */}
      <Wheel cx="545" custom={10} />
      <Wheel cx="630" custom={11} />
      <Wheel cx="800" custom={12} />
      <Wheel cx="985" custom={13} />

      {/* callouts — each points at a system the workshop services */}
      <Callout i={0} x={300} yFrom={100} yTo={44} label="Trailer spare parts" />
      <Callout i={1} x={756} yFrom={92} yTo={44} label="Air systems" />
      <Callout i={2} x={985} yFrom={150} yTo={44} label="Engine · Turbo" />
      <Callout i={3} x={182} yFrom={302} yTo={356} label="Hydraulics" below />
      <Callout i={4} x={630} yFrom={320} yTo={356} label="Brakes · Chambers" below />
    </motion.svg>
  );
}
