import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, Play, X, Youtube, Compass, Cpu, ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Maqsadimiz',
    desc: "Har bir o'quvchini zamonaviy IT va texnologiya bilimlari bilan qurollantirib, ertangi kelajakka tayyorlash.",
    gradient: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Eye,
    title: "Ko'rish (Vision)",
    desc: "O'zbekistondagi eng ishonchli texnologik ta'lim markazlaridan biriga aylanish.",
    gradient: 'from-emerald-500/15 to-teal-500/10',
    iconColor: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: Heart,
    title: 'Qadriyatlarimiz',
    desc: "Sifat, individual yondashuv va har bir o'quvchining muvaffaqiyatiga sodiqlik.",
    gradient: 'from-rose-500/15 to-pink-500/10',
    iconColor: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Sparkles,
    title: 'Farqimiz',
    desc: "Amaliyotga yo'naltirilgan dastur, tajribali murabbiylar va zamonaviy uskunalar.",
    gradient: 'from-amber-500/15 to-orange-500/10',
    iconColor: 'text-amber-600 bg-amber-50',
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-28 lg:py-36 text-slate-950">
      
      {/* Background Futuristic Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/50 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Top Header & Intro Grid */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left Block: Text & Unique Kinetic UI Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-amber-600 text-xs font-extrabold uppercase tracking-widest shadow-sm mb-6">
              <Compass size={14} className="animate-spin" aria-hidden="true" />
              <span>Biz haqimizda</span>
            </div>

            <h2 className="text-3xl font-black text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Shams Academy bilan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                bilimga yangicha yondashuv
              </span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
              2019-yildan buyon Shams Academy IT, robototexnika va aniq fanlar bo'yicha sifatli ta'lim beruvchi markaz sifatida faoliyat yuritmoqda. Bizning jamoamiz — sohasining bilimdon mutaxassislari.
            </p>

            <div className="mt-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <p className="text-sm font-bold text-slate-900">
                🚀 500 dan ortiq bitiruvchimiz bugungi kunda yetakchi IT kompaniyalarda va xalqaro loyihalarda muvaffaqiyatli faoliyat olib bormoqda.
              </p>
            </div>

            {/* Kinetic Graphic Box */}
            <div className="mt-10 relative w-full h-44 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 flex items-center justify-between overflow-hidden shadow-xl border border-slate-800">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/20 text-cyan-300 font-mono text-xs border border-blue-400/30">
                  <ShieldCheck size={13} className="text-cyan-400" aria-hidden="true" /> 
                  <span>Next-Gen Core</span>
                </div>
                <h3 className="text-white text-lg font-black tracking-tight">Interaktiv Ta'lim Tizimi</h3>
                <p className="text-slate-300 text-xs max-w-[220px]">Real loyihalar va ilg'or metodika asosida mukammal tajriba.</p>
              </div>

              <div className="relative z-10 flex items-center justify-center w-24 h-24" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50 animate-spin" style={{ animationDuration: '15s' }} />
                <div className="absolute inset-2 rounded-full border border-indigo-400/60 bg-indigo-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <Cpu size={28} className="text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Block: Modern Glass Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, desc, gradient, iconColor }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-[2.2rem] border border-slate-200/90 bg-white p-7 shadow-xl shadow-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} aria-hidden="true" />

                <div className="relative z-10">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${iconColor}`}>
                    <Icon size={24} strokeWidth={2.3} aria-hidden="true" />
                  </span>
                  
                  <h3 className="mt-6 text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎙️ YOUTUBE PODCAST FEATURE BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative rounded-[2.5rem] overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-5 p-8 sm:p-12 text-white z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wider uppercase mb-6 shadow-inner">
                <Youtube size={16} aria-hidden="true" /> 
                <span>Shams Podcast #8</span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                Inson doim to'laydi yo puli bilan yo vaqti bilan
              </h3>
              
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Dilshodjon Bahriddinov bilan bo'lib o'tgan qiziqarli podkast. Hayotiy tajribalar, vaqt va pul qadri hamda ta'lim sohasidagi muhim haqiqatlar.
              </p>
              
              <div className="mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Podkast videosini ochish va ko'rish"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-extrabold text-sm shadow-xl shadow-red-600/30 cursor-pointer transition-all hover:shadow-red-600/50 hover:scale-105 active:scale-95"
                >
                  <Play size={18} className="fill-white" aria-hidden="true" /> 
                  <span>Videoni ko'rish</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full bg-slate-950 overflow-hidden group">
              <img 
                src="https://img.youtube.com/vi/fEQHCE0JQLw/maxresdefault.jpg" 
                alt="Shams Podcast #8 lavhasi" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" aria-hidden="true" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Videoni ijro etish"
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)] cursor-pointer backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
                >
                  <Play size={36} className="fill-white ml-1.5" aria-hidden="true" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* 🎬 YOUTUBE MODAL POPUP */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-xl p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Video pleer oynasi"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-red-600 transition-colors cursor-pointer shadow-lg"
                aria-label="Oynani yopish"
              >
                <X size={22} aria-hidden="true" />
              </button>

              <div className="relative aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fEQHCE0JQLw?autoplay=1" 
                  title="Inson doim to'laydi yo puli bilan yo vaqti bilan. Dilshodjon Bahriddinov bilan Podcast #8" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}