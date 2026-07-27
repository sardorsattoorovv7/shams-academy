import { Send, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../components/Logo.jsx';

const COURSE_LINKS = [
  'Dasturlash (IT)',
  'Ingliz tili',
  'Matematika',
  'Robototexnika',
  'Mental Arifmetika',
];

const SOCIALS = [
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#0f172a] text-slate-300">
      {/* Interactive Clean Subtle Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Subtle Dark Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo size={40} withText={false} />
              <span className="font-trajan leading-tight">
                <span className="block text-sm font-extrabold tracking-[0.12em] text-white">
                  SHAMS
                </span>
                <span className="block text-[0.5rem] font-semibold tracking-[0.22em] text-amber-400">
                  ACADEMY
                </span>
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              Zamonaviy kasblar va fundamental fanlar akademiyasi. Kelajagingizni biz bilan quring.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Kurslar</h4>
            <ul className="mt-4 space-y-2.5">
              {COURSE_LINKS.map((c) => (
                <li key={c}>
                  <a href="#courses" className="text-xs text-slate-400 transition-colors hover:text-amber-400">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Biz bilan aloqa</h4>
            <ul className="mt-4 space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>+998 90 123 45 67</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>info@shamsacademy.uz</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-amber-400 shrink-0" />
                <span>Tayloq, Samarqand, O'zbekiston</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ijtimoiy tarmoqlar</h4>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-all duration-300 hover:bg-amber-400 hover:text-slate-900 hover:scale-105 cursor-pointer shadow-sm"
                >
                  <Icon size={16} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 Shams Academy. Barcha huquqlar himoyalangan.</span>
          <div className="flex gap-6">
            <a href="#footer" className="transition-colors hover:text-amber-400">Maxfiylik siyosati</a>
            <a href="#footer" className="transition-colors hover:text-amber-400">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}