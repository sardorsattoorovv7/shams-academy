import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Azizbek',
    role: 'Dasturlash ustozi',
    detail: 'Full-stack dasturchi va mentor',
    experience: '5+ yil tajriba',
    skills: ['Python', 'React', 'Node.js'],
    tint: 'from-[#0A53D9] to-[#00278A]',
    badgeBg: 'bg-blue-50 text-blue-700',
  },
  {
    name: 'Malika',
    role: 'Mental Arifmetika',
    detail: 'Metodist va boshlang\'ich ta\'lim',
    experience: '6+ yil tajriba',
    skills: ['Abakus', 'Tezkor hisob', 'Mantiq'],
    tint: 'from-[#FF6B6B] to-[#C92A2A]',
    badgeBg: 'bg-rose-50 text-rose-700',
  },
  {
    name: 'Dmitriy',
    role: 'Robototexnika ustozi',
    detail: 'Elektronika va injiniring',
    experience: '4+ yil tajriba',
    skills: ['Arduino', 'IoT', '3D Modellashtirish'],
    tint: 'from-[#233457] to-[#081633]',
    badgeBg: 'bg-slate-100 text-slate-800',
  },
  {
    name: 'Jamshid',
    role: 'Muhandislik va CNC',
    detail: 'Texnik ko\'nikmalar murabbiyi',
    experience: '6+ yil tajriba',
    skills: ['CNC Dastgohlar', 'Metall ishlovi', 'Chizma'],
    tint: 'from-[#D97706] to-[#92400E]',
    badgeBg: 'bg-amber-50 text-amber-800',
  },
];

function Avatar({ name, tint }) {
  const initial = name.charAt(0);
  return (
    <div className="relative">
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tint} text-2xl font-black text-white shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1`}>
        {initial}
      </div>
      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white shadow-sm ring-2 ring-white" title="Faol mutaxassis">
        ✓
      </span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-24 lg:py-32">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-600 ring-1 ring-inset ring-blue-500/20">
            Professional Jamoa
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Bizning tajribali ustozlarimiz
          </h2>
          <p className="mt-4 text-base text-slate-600">
            O'z ishining professionallari bo'lgan murabbiylarimiz sizga eng sifatli bilim va amaliy ko'nikmalarni ulashishga tayyor.
          </p>
        </div>

        {/* Marquee Slider (Right to Left) with pause on hover */}
        <div className="relative mt-16 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex group/marquee">
            <motion.div
              className="flex shrink-0 gap-6 py-4 group-hover/marquee:[animation-play-state:paused]"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 45,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {/* Ikki marta takrorlaymiz, uzluksiz (infinite loop) harakatlanishi uchun */}
              {[...TEAM, ...TEAM].map(({ name, role, detail, experience, skills, tint, badgeBg }, i) => (
                <article
                  key={`${name}-${i}`}
                  className="group relative flex w-[300px] sm:w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/80 hover:shadow-xl shadow-sm cursor-pointer"
                >
                  <div>
                    {/* Header: Avatar and Experience Badge */}
                    <div className="flex items-start justify-between">
                      <Avatar name={name} tint={tint} />
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeBg}`}>
                        {experience}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="mt-5">
                      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                      <p className="text-sm font-medium text-blue-600">{role}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{detail}</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="mt-6 pt-4 border-t border-slate-100/80">
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:bg-slate-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}