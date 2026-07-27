import { motion } from 'framer-motion';
import { ArrowRight, Users, GraduationCap, Trophy, Star } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const STATS = [
  { icon: Users, value: '6+', label: 'Kurslar' },
  { icon: GraduationCap, value: '500+', label: "O'quvchilar" },
  { icon: Trophy, value: '5+', label: 'Yillik tajriba' },
  { icon: Star, value: '100%', label: 'Natija' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 text-slate-900">
      {/* Interactive Clean Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Subtle Light Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-amber-600 text-xs font-semibold mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            Shams Academy • Kelajak kasblari
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-4xl font-extrabold leading-[1.12] text-slate-900 sm:text-6xl tracking-tight"
          >
            Bilim bilan
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              kelajak sari!
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-600"
          >
            Shams Academy — IT va texnologiya yo'nalishlarida zamonaviy bilim
            beruvchi o'quv markazi. Bizning maqsadimiz — sizni bugun o'rgatib,
            ertangi muvaffaqiyatingizni yaratish.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-400 hover:scale-105"
            >
              Kurslarni ko'rish
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#footer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-500 hover:bg-slate-100 hover:text-slate-900"
            >
              Biz bilan bog'lanish
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-sky-500 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 group-hover:scale-110 transition-transform">
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                <dt className="sr-only">{label}</dt>
                <dd className="text-xl font-extrabold text-slate-900 tracking-tight">{value}</dd>
                <span className="text-xs font-medium text-slate-500">{label}</span>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center overflow-hidden"
        >
          {/* Interactive Hover Zoom Wrapper */}
          <div className="relative w-full max-w-xl scale-110 lg:scale-125 transition-transform duration-500 ease-out hover:scale-135 cursor-pointer">
            <DotLottieReact
              src="https://lottie.host/da5b5b76-6e43-4bcc-9101-1a55f7a0e454/82jBfn8uqb.json"
              loop
              autoplay
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}