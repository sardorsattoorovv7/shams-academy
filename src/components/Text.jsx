/**
 * Text
 * ----
 * Two-line "SHAMS / ACADEMY" wordmark in a Trajan-like serif,
 * blue gradient + emboss/3D treatment via layered text-shadow
 * (see styles/logo.css for the `.shams-wordmark` rules).
 */
export default function Text({ className = '' }) {
  return (
    <div className={`shams-wordmark ${className}`} role="text" aria-label="Shams Academy">
      <span className="shams-wordmark__line shams-wordmark__line--top">SHAMS</span>
      <span className="shams-wordmark__line shams-wordmark__line--bottom">ACADEMY</span>
    </div>
  )
}
