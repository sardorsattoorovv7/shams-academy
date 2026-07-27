import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import Sun from './Sun.jsx'
import Circle from './Circle.jsx'
import Rocket from './Rocket.jsx'
import Glow from './Glow.jsx'
import Text from './Text.jsx'

/**
 * Logo
 * ----
 * Full Shams Academy logo: layered Glow + Sun + Circle + Rocket mark,
 * all composed inside a single 640x640 SVG stage so it scales
 * losslessly at any size, plus the SHAMS / ACADEMY wordmark beneath.
 *
 * A unique id (via useId) namespaces every gradient/filter id used by
 * the sub-components, so multiple <Logo /> instances can be rendered
 * on the same page without SVG id collisions.
 *
 * Interactions:
 *  - On mount: sun rays rotate 0.5°, rocket rises + scales in, glow fades up.
 *  - On hover: sun rotates very slowly, rocket lifts slightly, glow intensifies.
 */
export default function Logo({ size = 320, withText = true, className = '' }) {
  const [hovered, setHovered] = useState(false)
  const uid = useId().replace(/:/g, '')

  return (
    <div
      className={`flex flex-col items-center select-none ${className}`}
      role="img"
      aria-label="Shams Academy — Bilim bilan kelajak sari logotipi"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logo-shell" style={{ width: size, height: size }}>
        <svg
          className="logo-svg-root"
          viewBox="0 0 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Glow uid={uid} />
          </motion.g>

          <motion.g
            style={{ transformOrigin: '320px 320px' }}
            animate={{ rotate: hovered ? 8 : 0.5 }}
            transition={{
              duration: hovered ? 20 : 1.4,
              ease: hovered ? 'linear' : 'easeOut',
              repeat: hovered ? Infinity : 0,
            }}
          >
            <Sun rotate={false} uid={uid} />
          </motion.g>

          <Circle uid={uid} />

          <motion.g
            style={{ transformOrigin: '320px 320px' }}
            initial={{ y: 60, opacity: 0, scale: 0.8 }}
            animate={{
              y: hovered ? -8 : 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: hovered ? 0.6 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Rocket uid={uid} />
          </motion.g>
        </svg>
      </div>

      {withText && <Text />}
    </div>
  )
}
