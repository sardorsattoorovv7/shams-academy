/**
 * Glow
 * ----
 * Soft radial glow rendered behind the sun/circle/rocket stack, as an
 * SVG blurred-gradient circle so it composes inside the same coordinate
 * stage as the rest of the mark (see Logo.jsx).
 *
 * `uid` namespaces this instance's gradient ID so multiple Logo
 * instances can coexist on one page without ID collisions.
 */
export default function Glow({ uid = 'glow' }) {
  const gradId = `${uid}-glowGradient`;
  return (
    <g className="logo-glow" style={{ transformOrigin: '320px 320px' }}>
      <defs>
        <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,213,74,0.55)" />
          <stop offset="45%" stopColor="rgba(255,179,0,0.28)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0)" />
        </radialGradient>
      </defs>
      <circle cx="320" cy="320" r="210" fill={`url(#${gradId})`} />
    </g>
  )
}
