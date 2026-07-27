const CENTER = 320;
const RING_R = 108;
const RING_WIDTH = 13;

const polar = (deg, r) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)];
};

// Describe an SVG arc between two angles (degrees, clockwise from 12 o'clock).
function arcPath(startDeg, endDeg, r) {
  const [x1, y1] = polar(startDeg, r);
  const [x2, y2] = polar(endDeg, r);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

/**
 * `uid` namespaces this instance's gradient/filter IDs so multiple Logo
 * instances can coexist on one page without ID collisions.
 */
export default function Circle({ uid = 'circle' }) {
  const whiteGradId = `${uid}-whiteRingGradient`;
  const blueGradId = `${uid}-blueRingGradient`;
  const circleShadowId = `${uid}-circleShadow`;
  const innerShadowId = `${uid}-innerShadowWhite`;

  // The ring is broken at the bottom (roughly 160°–200°, centered on 6 o'clock),
  // matching the source art gap where three short blue lines cross it.
  const gapStart = 160;
  const gapEnd = 200;

  const ringPath = arcPath(gapEnd, gapStart + 360, RING_R);

  // Three short accent lines filling the broken gap, angled outward.
  const gapMid = (gapStart + gapEnd) / 2;
  const lineAngles = [gapMid - 11, gapMid, gapMid + 11];

  return (
    <g>
      <defs>
        <radialGradient id={whiteGradId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="var(--ring-light)" />
          <stop offset="100%" stopColor="var(--ring-dark)" />
        </radialGradient>
        <linearGradient id={blueGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--blue-light)" />
          <stop offset="100%" stopColor="var(--blue-dark)" />
        </linearGradient>
        <filter id={circleShadowId} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(10,40,100,0.35)" />
        </filter>
        <filter id={innerShadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="3" />
          <feGaussianBlur stdDeviation="4" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="rgba(10,40,100,0.18)" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>

      {/* White disc */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RING_R - RING_WIDTH / 2 - 1}
        fill={`url(#${whiteGradId})`}
        filter={`url(#${circleShadowId})`}
      />
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RING_R - RING_WIDTH / 2 - 1}
        fill="transparent"
        filter={`url(#${innerShadowId})`}
      />

      {/* Broken blue ring */}
      <path
        d={ringPath}
        fill="none"
        stroke={`url(#${blueGradId})`}
        strokeWidth={RING_WIDTH}
        strokeLinecap="round"
      />

      {/* Three accent lines in the gap */}
      <g strokeLinecap="round">
        {lineAngles.map((deg, i) => {
          const [x1, y1] = polar(deg, RING_R - RING_WIDTH * 1.6);
          const [x2, y2] = polar(deg, RING_R + RING_WIDTH * 0.9);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`url(#${blueGradId})`}
              strokeWidth={RING_WIDTH * (i === 1 ? 0.62 : 0.46)}
            />
          );
        })}
      </g>
    </g>
  );
}
