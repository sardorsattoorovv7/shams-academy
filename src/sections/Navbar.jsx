import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo.jsx';

const NAV_LINKS = [
  { label: 'Bosh sahifa', href: '#home', active: true },
  { label: 'Kurslar', href: '#courses' },
  { label: 'Imkoniyatlar', href: '#showcase' },
  { label: 'Biz haqimizda', href: '#about' },
  { label: 'Jamoa', href: '#team' },
  { label: 'Aloqa', href: '#footer' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label="Shams Academy — bosh sahifa">
          <Logo size={44} withText={false} />
          <span className="font-trajan leading-tight">
            <span className="block text-[0.95rem] font-extrabold tracking-[0.12em] text-shams-blue-dark">
              SHAMS
            </span>
            <span className="block text-[0.55rem] font-semibold tracking-[0.22em] text-shams-blue-light/80">
              ACADEMY
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Asosiy navigatsiya">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-shams-blue-light ${
                link.active ? 'text-shams-blue-light' : 'text-ink-soft'
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-shams-gold-mid" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden items-center gap-1.5 rounded-full bg-gradient-to-b from-shams-gold-light to-shams-gold-dark px-5 py-2.5 text-sm font-semibold text-shams-navy shadow-card transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Ro'yxatdan o'tish
          <ArrowRight size={16} strokeWidth={2.5} />
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/5 bg-white px-5 py-4 lg:hidden" aria-label="Mobil navigatsiya">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-soft hover:text-shams-blue-light"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-shams-gold-light to-shams-gold-dark px-5 py-2.5 text-sm font-semibold text-shams-navy shadow-card"
                onClick={() => setOpen(false)}
              >
                Ro'yxatdan o'tish
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
