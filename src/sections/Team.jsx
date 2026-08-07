import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Nasriddinov Humoyun',
    role: 'Ingliz tili ustozi',
    detail: 'Full-stack dasturchi va mentor',
    experience: '5+ yil tajriba',
    skills: ['Python', 'React', 'Node.js'],
    image: '/Humoyun-img.jpg',
  },
  {
    name: 'Malika',
    role: 'Mental Arifmetika',
    detail: 'Metodist va boshlang\'ich ta\'lim',
    experience: '6+ yil tajriba',
    skills: ['Abakus', 'Tezkor hisob', 'Mantiq'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Dmitriy',
    role: 'Robototexnika ustozi',
    detail: 'Elektronika va injiniring',
    experience: '4+ yil tajriba',
    skills: ['Arduino', 'IoT', '3D Modellashtirish'],
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Jamshid',
    role: 'Muhandislik va CNC',
    detail: 'Texnik ko\'nikmalar murabbiyi',
    experience: '6+ yil tajriba',
    skills: ['CNC Dastgohlar', 'Metall ishlovi', 'Chizma'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-100 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-rose-100 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
            Bizning Jamoa
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Tajribali va jonkuyar ustozlarimiz
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            O'quvchilarimizning muvaffaqiyati yo'lida tinimsiz mehnat qilayotgan, o'z ishining ustalari bilan tanishing.
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative mt-20 w-full overflow-hidden pb-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
              {[...TEAM, ...TEAM].map(({ name, role, detail, experience, skills, image }, i) => (
                <article
                  key={`${name}-${i}`}
                  className="group relative flex h-[380px] w-[280px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-100"
                >
                  {/* Rasm qismi (Hover bo'lganda gradient yo'qoladi, to'liq tabiiy rangida ko'rinadi) */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-100"
                    />

                    {/* Odatiy holatda matn o'qilishi uchun yengil qoraytirilgan gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-opacity duration-500 group-hover:opacity-20" />

                    {/* Faollik belgisi */}
                    <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Faol
                    </span>

                    {/* Tajriba badji */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-white/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm">
                        {experience}
                      </span>
                    </div>

                    {/* Ma'lumotlar (Pastki qism) */}
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white transition-transform duration-500">
                      <h3 className="text-xl font-bold tracking-tight">{name}</h3>
                      <p className="text-sm font-medium text-blue-200">{role}</p>

                      {/* Qo'shimcha ma'lumot va ko'nikmalar (Hover qilganda chiqadi) */}
                      <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="mt-2 text-xs text-slate-100 leading-relaxed">
                            {detail}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-md bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-medium text-white"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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