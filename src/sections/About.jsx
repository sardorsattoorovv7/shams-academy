import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart, Sparkles, Play, X, Youtube } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const VALUES = [
  {
    icon: Target,
    title: 'Maqsadimiz',
    desc: "Har bir o'quvchini zamonaviy IT va texnologiya bilimlari bilan qurollantirib, ertangi kelajakka tayyorlash.",
  },
  {
    icon: Eye,
    title: "Ko'rish (Vision)",
    desc: "O'zbekistondagi eng ishonchli texnologik ta'lim markazlaridan biriga aylanish.",
  },
  {
    icon: Heart,
    title: 'Qadriyatlarimiz',
    desc: "Sifat, individual yondashuv va har bir o'quvchining muvaffaqiyatiga sodiqlik.",
  },
  {
    icon: Sparkles,
    title: 'Farqimiz',
    desc: 'Amaliyotga yo\'naltirilgan dastur, tajribali murabbiylar va zamonaviy uskunalar.',
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 text-slate-900">
      {/* Interactive Clean Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Subtle Light Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Text & Lottie Animation Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full mb-4 shadow-sm">
              Biz haqimizda
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
              Shams Academy bilan
              <br />
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                bilimga yangicha yondashuv
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              2019-yildan buyon Shams Academy IT, robototexnika va aniq fanlar
              bo'yicha sifatli ta'lim beruvchi markaz sifatida faoliyat
              yuritmoqda. Bizning jamoamiz — sohasining bilimdon mutaxassislari
              bo'lib, har bir darsni amaliyot va real loyihalar orqali
              tushunarli qilib yetkazadi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              500 dan ortiq bitiruvchimiz bugungi kunda IT kompaniyalarda,
              texnik sohalarda va o'z loyihalarida muvaffaqiyatli faoliyat
              yuritishmoqda.
            </p>

            {/* Interactive Lottie Integration matching Hero Style */}
            <div className="mt-6 flex items-center justify-start overflow-hidden">
              <div className="relative w-full max-w-xs scale-105 transition-transform duration-500 ease-out hover:scale-115 cursor-pointer">
                <DotLottieReact
                  src="https://lottie.host/da5b5b76-6e43-4bcc-9101-1a55f7a0e454/82jBfn8uqb.json"
                  loop
                  autoplay
                />
              </div>
            </div>
          </motion.div>

          {/* Right Cards Grid with Hover Zoom & Border Glow */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900 tracking-tight">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🎙️ YOUTUBE PODCAST VIDEO SECTION WITH ANIMATED BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Podcast Info */}
            <div className="lg:col-span-5 p-8 lg:p-12 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-4">
                <Youtube size={16} /> Shams Podcast #8
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Inson doim to'laydi yo puli bilan yo vaqti bilan
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Dilshodjon Bahriddinov bilan bo'lib o'tgan qiziqarli podkast. Hayotiy tajribalar, vaqt va pul qadri hamda ta'lim sohasidagi muhim haqiqatlar haqida.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm shadow-lg shadow-red-600/30 cursor-pointer transition-all hover:shadow-red-600/50"
                >
                  <Play size={16} className="fill-white" /> Videoni ko'rish
                </motion.button>
              </div>
            </div>

            {/* Video Thumbnail / Preview Cover */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[400px] w-full bg-slate-800 overflow-hidden group">
              <img 
                src="https://img.youtube.com/vi/fEQHCE0JQLw/maxresdefault.jpg" 
                alt="Podcast thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              {/* Animated Play Trigger Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-600/50 cursor-pointer"
                  aria-label="Play video"
                >
                  <Play size={32} className="fill-white ml-1" />
                </motion.button>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* YouTube Responsive Iframe */}
              <div className="relative aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/fEQHCE0JQLw?autoplay=1" 
                  title="Inson doim to'laydi yo puli bilan yo vaqti bilan. Dilshodjon Bahriddinov bilan Podcast #8" 
                  frameBorder="0" 
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