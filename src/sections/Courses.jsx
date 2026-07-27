import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Eye, ArrowRight, Sparkles, Flame, Zap } from 'lucide-react';
import { COURSES } from '../data/courses.js';
import { useCourse } from '../components/CourseContext.jsx';

// Dinamik va jonli SVG illyustratsiyalar
const CourseImages = {
  dasturlash: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id="progGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect x="10" y="12" width="100" height="76" rx="14" fill="url(#progGrad)" />
      <rect x="16" y="18" width="88" height="52" rx="8" fill="#090D16" />
      <circle cx="24" cy="28" r="3" fill="#EF4444" />
      <circle cx="34" cy="28" r="3" fill="#F59E0B" />
      <circle cx="44" cy="28" r="3" fill="#10B981" />
      <rect x="22" y="38" width="40" height="4" rx="2" fill="#38BDF8" />
      <rect x="22" y="48" width="60" height="4" rx="2" fill="#34D399" />
      <rect x="22" y="58" width="28" height="4" rx="2" fill="#F472B6" />
      <rect x="54" y="58" width="32" height="4" rx="2" fill="#FCD34D" />
      <path d="M 26 88 L 94 88 L 102 100 L 18 100 Z" fill="#334155" opacity="0.9" />
      <rect x="34" y="92" width="52" height="4" rx="2" fill="#64748B" />
      <text x="73" y="72" fill="#38BDF8" fontSize="14" fontWeight="950" fontFamily="monospace">{'</>'}</text>
    </svg>
  ),
  
  ingliz: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="90" height="90" rx="18" fill="url(#engGrad)" />
      <path d="M 60 28 C 70 23, 92 23, 102 28 L 102 92 C 92 87, 70 87, 60 92 Z" fill="#F0FDF4" />
      <path d="M 60 28 C 50 23, 28 23, 18 28 L 18 92 C 28 87, 50 87, 60 92 Z" fill="#DCFCE7" />
      <line x1="28" y1="38" x2="48" y2="40" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="28" y1="50" x2="44" y2="52" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="72" y1="38" x2="92" y2="40" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="72" y1="50" x2="88" y2="52" stroke="#047857" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="60" r="15" fill="#FEF08A" />
      <text x="52" y="65" fill="#1E293B" fontSize="11" fontWeight="800">abc</text>
    </svg>
  ),
  
  matematika: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id="mathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="96" height="96" rx="18" fill="url(#mathGrad)" />
      <line x1="22" y1="88" x2="98" y2="88" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="88" x2="22" y2="22" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 22 78 Q 48 25, 68 52 T 98 32" fill="none" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
      <circle cx="68" cy="52" r="4.5" fill="#F43F5E" />
      <text x="62" y="24" fill="#FFFFFF" fontSize="13" fontWeight="900">f(x)</text>
      <text x="70" y="102" fill="#DDD6FE" fontSize="11" fontWeight="800">∑ π ∞</text>
    </svg>
  ),
  
  robototexnika: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id="roboGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="96" height="96" rx="18" fill="url(#roboGrad)" />
      <rect x="34" y="30" width="52" height="42" rx="9" fill="#FFFFFF" />
      <circle cx="48" cy="46" r="6.5" fill="#0EA5E9" />
      <circle cx="72" cy="46" r="6.5" fill="#0EA5E9" />
      <rect x="50" y="58" width="20" height="4.5" rx="2" fill="#94A3B8" />
      <line x1="60" y1="30" x2="60" y2="18" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="16" r="4.5" fill="#FDE047" />
      <path d="M 28 86 L 92 86 L 82 98 L 38 98 Z" fill="#881337" />
      <circle cx="60" cy="92" r="3.5" fill="#FDE047" />
    </svg>
  ),
  
  'mental-arifmetika': () => (
    <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105">
      <defs>
        <linearGradient id="mentalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="96" height="96" rx="18" fill="url(#mentalGrad)" />
      <rect x="24" y="24" width="72" height="72" rx="8" fill="#F8FAFC" opacity="0.95" />
      <line x1="60" y1="24" x2="60" y2="96" stroke="#94A3B8" strokeWidth="3.5" />
      <circle cx="60" cy="38" r="8" fill="#F43F5E" />
      <circle cx="60" cy="60" r="8" fill="#F59E0B" />
      <circle cx="60" cy="82" r="8" fill="#10B981" />
      <text x="32" y="44" fill="#0F172A" fontSize="12" fontWeight="900">1</text>
      <text x="32" y="66" fill="#0F172A" fontSize="12" fontWeight="900">2</text>
      <text x="74" y="86" fill="#0F172A" fontSize="13" fontWeight="900">⚡</text>
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const getCardTheme = (index) => {
  const themes = [
    {
      bgGrad: 'from-sky-500/10 via-indigo-500/5 to-transparent',
      border: 'hover:border-sky-500/40 border-slate-200/80',
      badge: 'bg-sky-50 text-sky-700 border-sky-200',
      glow: 'bg-sky-400/15',
      accent: 'text-sky-600',
      btnBg: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-500/25',
    },
    {
      bgGrad: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      border: 'hover:border-emerald-500/40 border-slate-200/80',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      glow: 'bg-emerald-400/15',
      accent: 'text-emerald-600',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25',
    },
    {
      bgGrad: 'from-purple-500/10 via-violet-500/5 to-transparent',
      border: 'hover:border-purple-500/40 border-slate-200/80',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      glow: 'bg-purple-400/15',
      accent: 'text-purple-600',
      btnBg: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/25',
    },
    {
      bgGrad: 'from-rose-500/10 via-pink-500/5 to-transparent',
      border: 'hover:border-rose-500/40 border-slate-200/80',
      badge: 'bg-rose-50 text-rose-700 border-rose-200',
      glow: 'bg-rose-400/15',
      accent: 'text-rose-600',
      btnBg: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/25',
    },
    {
      bgGrad: 'from-amber-500/10 via-orange-500/5 to-transparent',
      border: 'hover:border-amber-500/40 border-slate-200/80',
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      glow: 'bg-amber-400/15',
      accent: 'text-amber-600',
      btnBg: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/25',
    },
  ];
  return themes[index % themes.length];
};

function CourseCard({ course, index }) {
  const { icon: Icon, title, desc, id, duration, level, price } = course;
  const theme = getCardTheme(index);
  const { setSelectedCourseId } = useCourse();
  const ImageComponent = CourseImages[id] || CourseImages.dasturlash;

  // 3D Tilt Motion Hook-lari
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleShowDetails = () => {
    setSelectedCourseId(id);
    const showcaseElement = document.getElementById('showcase');
    if (showcaseElement) {
      showcaseElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleShowDetails}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border ${theme.border} shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
    >
      {/* Spotlight Effect */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-50 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Background Gradient Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgGrad} opacity-80 pointer-events-none transition-opacity duration-500 group-hover:opacity-100`} />
      <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full ${theme.glow} blur-2xl pointer-events-none`} />

      <div className="relative z-10 p-6 sm:p-7 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
        {/* SVG Illyustratsiya */}
        <div className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-100 shadow-inner p-3 transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="w-full h-full flex items-center justify-center">
            <ImageComponent />
          </div>
          {/* Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${theme.badge} border shadow-sm backdrop-blur-md bg-white/95`}>
              <Zap size={12} className="fill-current animate-pulse" />
              {level || "Boshlang'ich"}
            </span>
          </div>
        </div>
        
        {/* Sarlavha va Tavsif */}
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className={`p-2 rounded-xl bg-slate-100 ${theme.accent} transition-transform duration-300 group-hover:scale-110`}>
              <Icon size={18} strokeWidth={2.2} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Xususiyatlar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-lg">
            <Sparkles size={13} className={theme.accent} />
            {duration || "3 oy"}
          </span>
          <span className="text-sm font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">
            {price || "Kelishilgan holda"}
          </span>
        </div>

        {/* Tugma */}
        <div className="mt-5 pt-2">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              handleShowDetails();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full inline-flex items-center justify-center gap-2.5 rounded-2xl px-5 py-3 text-sm font-bold shadow-md transition-all duration-300 ${theme.btnBg}`}
          >
            <Eye size={17} strokeWidth={2.2} />
            Batafsil ko'rish
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 lg:py-32 text-slate-900">
      {/* Light Interactive Grid & Animated BG Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
          >
            <Flame size={15} className="text-blue-600 fill-blue-500 animate-bounce" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
              Bizning Ta'lim Yo'nalishlarimiz
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight"
          >
            Kelajagingizni bugundan quring
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-600 leading-relaxed"
          >
            Zamonaviy kasblar va puxta bilimlar orqali o'z salohiyatingizni to'liq namoyon eting. O'zingizga mos yo'nalishni tanlang!
          </motion.p>
        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 [perspective:1000px]">
          {COURSES.map((course, i) => (
            <CourseCard
              key={course.id}
              course={course}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}