/**
 * Rocket
 * ------
 * Hand-drawn SVG rocket: nose cone, body, two fins/wings, a circular
 * window, and an engine/exhaust base. Rendered as a <g> so it can be
 * composed inside the shared Logo <svg> stage (see Logo.jsx), and
 * positioned so its origin sits at the badge center (320, 320).
 *
 * `uid` namespaces this instance's gradient/filter IDs so multiple Logo
 * instances can coexist on one page without ID collisions.
 */
export default function Rocket({ uid = 'rocket' }) {
  const bodyGradId = `${uid}-rocketGradient`;
  const darkGradId = `${uid}-rocketGradientDark`;
  const windowGradId = `${uid}-windowGradient`;
  const shadowId = `${uid}-rocketShadow`;

  return (
    <g transform="translate(320,320)">
      <defs>
        <linearGradient id={bodyGradId} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="var(--gold-light)" />
          <stop offset="55%" stopColor="var(--gold-mid)" />
          <stop offset="100%" stopColor="var(--gold-dark)" />
        </linearGradient>
        <linearGradient id={darkGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gold-dark)" />
          <stop offset="100%" stopColor="#C2760A" />
        </linearGradient>
        <linearGradient id={windowGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAF2FF" />
          <stop offset="100%" stopColor="var(--blue-light)" />
        </linearGradient>
        <filter id={shadowId} x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="rgba(120,70,0,0.4)" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        {/* Right sail facet (angular, paper-plane/flag style like the source mark) */}
        <path
          d="M 0 -48 L 22 30 C 14 24, 6 12, 0 -6 Z"
          fill={`url(#${bodyGradId})`}
        />
        {/* Left sail facet — slightly darker, suggesting a fold down the middle */}
        <path
          d="M 0 -48 L -20 26 C -12 20, -4 8, 0 -6 Z"
          fill={`url(#${darkGradId})`}
        />

        {/* Swept tail fin */}
        <path
          d="M -20 26 C -14 30, -6 32, 0 33 C 8 31, 15 27, 22 30
             C 16 40, 6 45, 0 46 C -8 45, -16 38, -20 26 Z"
          fill={`url(#${darkGradId})`}
        />

        {/* Small base foot / letter-like accent (matches the mark's base flourish) */}
        <path
          d="M -6 40 L -6 50 L -1 50 L -1 45 L 5 45 L 5 50 L 10 50 L 10 40 Z"
          fill={`url(#${darkGradId})`}
          opacity="0.9"
        />

        {/* Fold-line highlight down the center */}
        <path d="M 0 -48 L 0 33" stroke="#FFF4CF" strokeWidth="1.2" opacity="0.5" />

        {/* Window */}
        <circle cx="0" cy="-4" r="6.5" fill={`url(#${windowGradId})`} stroke="#ffffff" strokeWidth="1.4" />
        <circle cx="-2" cy="-6" r="1.8" fill="#ffffff" opacity="0.8" />
      </g>
    </g>
  )
}
