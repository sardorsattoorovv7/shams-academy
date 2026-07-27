import { useMemo } from 'react';

/**
 * Sun
 * Two families of rays behind the badge:
 *  1) A dense ring of thin radial lines (360°), generated programmatically.
 *  2) Bold leaf/flame-shaped rays (SVG paths), concentrated at the bottom
 *     and three large ones at the 2 o'clock position, matching the source art.
 *
 * All positioning derives from polar math + map() — no per-ray hardcoding.
 */

const CENTER = 320;

const polar = (deg, r) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CENTER + r * Math.cos(rad), CENTER + r * Math.sin(rad)];
};

function ThinRays({ count, innerR, outerR, strokeWidth, opacityRange, gradId }) {
  const rays = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const deg = (360 / count) * i;
      const [x1, y1] = polar(deg, innerR);
      const [x2, y2] = polar(deg, outerR);
      const jitter = Math.abs(Math.sin(i * 12.9898) % 1);
      const lenScale = 0.82 + jitter * 0.32;
      const opacity = opacityRange[0] + jitter * (opacityRange[1] - opacityRange[0]);
      const ex = x1 + (x2 - x1) * lenScale;
      const ey = y1 + (y2 - y1) * lenScale;
      return { id: `ray-${i}`, x1, y1, x2: ex, y2: ey, opacity };
    });
  }, [count, innerR, outerR, opacityRange]);

  return (
    <g strokeLinecap="round">
      {rays.map((r) => (
        <line
          key={r.id}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke={`url(#${gradId})`}
          strokeWidth={strokeWidth}
          opacity={r.opacity}
        />
      ))}
    </g>
  );
}

// A bold tapered "leaf" ray built from a quadratic path so it reads clearly
// as a flame/petal rather than a thin line or stretched ellipse.
function LeafRay({ deg, length, baseWidth, radiusStart = 116, gradId }) {
  const [bx1, by1] = polar(deg - baseWidth, radiusStart);
  const [bx2, by2] = polar(deg + baseWidth, radiusStart);
  const [tipX, tipY] = polar(deg, radiusStart + length);
  const [cx1, cy1] = polar(deg - baseWidth * 0.85, radiusStart + length * 0.62);
  const [cx2, cy2] = polar(deg + baseWidth * 0.85, radiusStart + length * 0.62);

  const d = `M ${bx1} ${by1}
             Q ${cx1} ${cy1}, ${tipX} ${tipY}
             Q ${cx2} ${cy2}, ${bx2} ${by2}
             Z`;

  return <path d={d} fill={`url(#${gradId})`} />;
}

export default function Sun({ rotate = true, uid = 'sun' }) {
  const rayGradId = `${uid}-sunRayGradient`;
  const leafGradId = `${uid}-sunLeafGradient`;
  const leafShadowId = `${uid}-leafShadow`;

  // Bottom fan of leaves, wide spread centered on 6 o'clock.
  const bottomLeaves = useMemo(
    () => [
      { deg: 138, length: 108, baseWidth: 7 },
      { deg: 154, length: 134, baseWidth: 8 },
      { deg: 170, length: 148, baseWidth: 8.5 },
      { deg: 190, length: 148, baseWidth: 8.5 },
      { deg: 206, length: 134, baseWidth: 8 },
      { deg: 222, length: 108, baseWidth: 7 },
    ],
    []
  );

  // Three large, prominent leaves clustered at ~2 o'clock, matching the
  // source art's standout feature.
  const featureLeaves = useMemo(
    () => [
      { deg: 48, length: 132, baseWidth: 8 },
      { deg: 62, length: 168, baseWidth: 9.5 },
      { deg: 76, length: 140, baseWidth: 8 },
    ],
    []
  );

  return (
    <g className={rotate ? 'sun-rotate' : ''} style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}>
      <defs>
        <linearGradient id={rayGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--gold-light)" />
          <stop offset="55%" stopColor="var(--gold-mid)" />
          <stop offset="100%" stopColor="var(--gold-dark)" />
        </linearGradient>
        <linearGradient id={leafGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--gold-light)" />
          <stop offset="55%" stopColor="var(--gold-mid)" />
          <stop offset="100%" stopColor="var(--gold-dark)" />
        </linearGradient>
        <filter id={leafShadowId} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="var(--shadow-color)" />
        </filter>
      </defs>

      <ThinRays
        count={120}
        innerR={122}
        outerR={168}
        strokeWidth={2}
        opacityRange={[0.4, 0.9]}
        gradId={rayGradId}
      />

      <g filter={`url(#${leafShadowId})`}>
        {bottomLeaves.map((l) => (
          <LeafRay key={`b-${l.deg}`} {...l} gradId={leafGradId} />
        ))}
        {featureLeaves.map((l) => (
          <LeafRay key={`f-${l.deg}`} {...l} gradId={leafGradId} />
        ))}
      </g>
    </g>
  );
}
