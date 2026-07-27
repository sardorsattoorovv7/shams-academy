import { motion } from 'framer-motion';

/**
 * HeroIllustration
 * -----------------
 * An original, hand-drawn SVG scene of a robotic arm performing precision
 * work — echoes the "IT / robototexnika" subject matter without using any
 * external photography. Built entirely from paths/shapes so it stays crisp
 * at any size and matches the brand's blue/navy/gold palette.
 */
export default function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 560 520"
      className="w-full h-auto"
      role="img"
      aria-label="Robototexnika qo'li aniq ishlov berish jarayonida"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <defs>
        <linearGradient id="heroPlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FB" />
          <stop offset="100%" stopColor="#D9E2F5" />
        </linearGradient>
        <linearGradient id="heroArm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F7FC" />
          <stop offset="100%" stopColor="#C8D2E6" />
        </linearGradient>
        <linearGradient id="heroArmDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#233457" />
          <stop offset="100%" stopColor="#081633" />
        </linearGradient>
        <linearGradient id="heroAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A53D9" />
          <stop offset="100%" stopColor="#00278A" />
        </linearGradient>
        <radialGradient id="heroSpark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="55%" stopColor="#FFB300" />
          <stop offset="100%" stopColor="rgba(255,179,0,0)" />
        </radialGradient>
        <filter id="heroShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="rgba(8,22,51,0.18)" />
        </filter>
      </defs>

      {/* Backdrop panel */}
      <rect x="40" y="60" width="480" height="400" rx="32" fill="url(#heroPlate)" />

      {/* Work table */}
      <g filter="url(#heroShadow)">
        <rect x="90" y="360" width="380" height="26" rx="8" fill="url(#heroArmDark)" />
        <rect x="120" y="386" width="18" height="60" fill="#B9C3DA" />
        <rect x="420" y="386" width="18" height="60" fill="#B9C3DA" />
      </g>

      {/* Workpiece / gear on the table */}
      <g transform="translate(300,352)">
        <circle r="34" fill="url(#heroAccent)" />
        <circle r="34" fill="none" stroke="#00184F" strokeWidth="3" opacity="0.3" />
        {Array.from({ length: 10 }, (_, i) => {
          const a = (360 / 10) * i;
          return (
            <rect
              key={i}
              x="-5"
              y="-42"
              width="10"
              height="12"
              rx="2"
              fill="url(#heroAccent)"
              transform={`rotate(${a})`}
            />
          );
        })}
        <circle r="13" fill="#EEF2FB" />
        <circle r="5" fill="#233457" />
      </g>

      {/* Spark glow at the tool tip */}
      <circle cx="300" cy="300" r="46" fill="url(#heroSpark)" opacity="0.9" />

      {/* Robotic arm base */}
      <g filter="url(#heroShadow)">
        <rect x="240" y="86" width="120" height="34" rx="10" fill="url(#heroArmDark)" />
        <circle cx="300" cy="120" r="26" fill="url(#heroArm)" stroke="#8FA4C8" strokeWidth="2" />
        <circle cx="300" cy="120" r="9" fill="url(#heroAccent)" />

        {/* Upper segment */}
        <g transform="rotate(18 300 120)">
          <rect x="288" y="118" width="26" height="120" rx="13" fill="url(#heroArm)" stroke="#8FA4C8" strokeWidth="1.5" />
        </g>

        {/* Elbow joint */}
        <circle cx="337" cy="228" r="19" fill="url(#heroArmDark)" />
        <circle cx="337" cy="228" r="7" fill="url(#heroAccent)" />

        {/* Forearm segment, angled down toward the workpiece */}
        <g transform="rotate(52 337 228)">
          <rect x="325" y="226" width="24" height="110" rx="12" fill="url(#heroArm)" stroke="#8FA4C8" strokeWidth="1.5" />
        </g>

        {/* Wrist joint */}
        <circle cx="300" cy="300" r="14" fill="url(#heroAccent)" />

        {/* Tool tip */}
        <path d="M 292 300 L 300 340 L 308 300 Z" fill="url(#heroArmDark)" />
      </g>

      {/* Ambient dots */}
      <g fill="#0A53D9" opacity="0.18">
        {Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 4 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={430 + c * 16} cy={90 + r * 16} r="2.5" />
          ))
        )}
      </g>
    </motion.svg>
  );
}
