import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Flame, Clock, Tag } from 'lucide-react';
import { COURSES } from '../data/courses.js';
import { useCourse } from '../components/CourseContext.jsx';

// 3D harakatlanuvchi jonli elementlar (Floating 3D Animated Graphics)
const FloatingCourseGraphics = {
  dasturlash: () => (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Orqa fon porlashi */}
      <div className="absolute w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      
      {/* 3D Suzuvchi KodBlok */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotateZ: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-28 h-16 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 p-3 shadow-xl border border-blue-500/30 flex flex-col justify-between"
      >
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <div className="space-y-1.5">
          <motion.div 
            animate={{ width: ["60%", "90%", "60%"] }} 
            transition={{ duration: 3, repeat: Infinity }} 
            className="h-1.5 bg-cyan-400 rounded-full" 
          />
          <div className="h-1.5 w-1/2 bg-indigo-400 rounded-full" />
        </div>
      </motion.div>

      {/* Aylanuvchi kichik 3D element */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute right-4 top-2 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-600 font-mono text-xs font-bold shadow-md"
      >
        {'</>'}
      </motion.div>
    </div>
  ),

  ingliz: () => (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="absolute w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
      
      {/* Suzuvchi Kitob / Til elementi */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotateY: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex items-center gap-3 border border-emerald-400/40"
      >
        <span className="text-2xl">abc</span>
        <div className="h-6 w-px bg-emerald-400/50" />
        <span className="text-xs font-bold uppercase tracking-wider">English</span>
      </motion.div>

      {/* Suzib yuruvchi yulduzcha */}
      <motion.div
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 bottom-2 text-emerald-500"
      >
        <Sparkles size={20} />
      </motion.div>
    </div>
  ),

  matematika: () => (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="absolute w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      
      {/* Suzuvchi Sigma / Formula */}
      <motion.div
        animate={{ y: [-7, 7, -7], rotateZ: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-xl flex items-center justify-center text-3xl font-black font-serif border border-purple-400/40"
      >
        ∑
      </motion.div>

      {/* Kichik raqamlar elementi */}
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-6 top-3 px-2.5 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-black shadow-sm"
      >
        f(x)
      </motion.div>
    </div>
  ),

  robototexnika: () => (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <div className="absolute w-24 h-24 bg-rose-500/10 rounded-full blur-xl animate-pulse" />
      
      {/* Suzuvchi Robot boshi / Chip */}
      <motion.div
        animate={{ y: [-5, 5, -5], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-20 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-xl flex flex-col items-center justify-center gap-1 border border-rose-400/40"
      >
        <div className="flex gap-3">
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
        </div>
        <div className="w-8 h-1.5 bg-white/40 rounded-full" />
      </motion.div>
    </div>
  ),

  'mental-arifmetika': () => (
    <div className="full h-32 flex items-center justify-center overflow-hidden relative w-full">
      <div className="absolute w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse" />
      
      {/* Suzuvchi Abakus / Hisob elementi */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotateZ: [-2, 2, -2] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl flex items-center justify-around px-2 border border-amber-300/40"
      >
        <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 2, repeat: Infinity }} className="w-3.5 h-3.5 rounded-full bg-white shadow-md" />
        <motion.div animate={{ x: [4, -4, 4] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-3.5 h-3.5 rounded-full bg-white shadow-md" />
        <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-3.5 h-3.5 rounded-full bg-white shadow-md" />
      </motion.div>
    </div>
  ),
};

const getCardTheme = (index) => {
  const themes = [
    { border: 'hover:border-blue-500/50', badge: 'bg-blue-50 text-blue-600 border-blue-200', btn: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20' },
    { border: 'hover:border-emerald-500/50', badge: 'bg-emerald-50 text-emerald-600 border-emerald-200', btn: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20' },
    { border: 'hover:border-purple-500/50', badge: 'bg-purple-50 text-purple-600 border-purple-200', btn: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20' },
    { border: 'hover:border-rose-500/50', badge: 'bg-rose-50 text-rose-600 border-rose-200', btn: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20' },
    { border: 'hover:border-amber-500/50', badge: 'bg-amber-50 text-amber-600 border-amber-200', btn: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20' },
  ];
  return themes[index % themes.length];
};

function CourseCard({ course, index }) {
  const { setSelectedCourseId } = useCourse();
  const theme = getCardTheme(index);
  const GraphicComponent = FloatingCourseGraphics[course.id] || FloatingCourseGraphics.dasturlash;

  // 3D Tilt Motion (Kursor harakatiga qarab egilish)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleShowDetails = () => {
    setSelectedCourseId(course.id);
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleShowDetails}
      className={`group relative flex flex-col justify-between p-7 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-300 cursor-pointer overflow-hidden ${theme.border}`}
    >
      {/* 3D Depth Content Layer */}
      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col justify-between h-full">
        
        {/* Yuqori qism: 3D Animatsiyali harakatlanuvchi grafik element */}
        <div className="relative mb-4 rounded-2xl bg-slate-50/80 border border-slate-100 p-2 shadow-inner">
          <GraphicComponent />
          <div className="absolute top-2.5 right-2.5">
            <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase border shadow-sm ${theme.badge}`}>
              {course.level || "Boshlang'ich"}
            </span>
          </div>
        </div>

        {/* Sarlavha va Tavsif */}
        <div className="mb-6">
          <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight mb-2.5">
            {course.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {course.desc}
          </p>
        </div>

        {/* Pastki qism: Davomiyligi, narxi va tugma */}
        <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
              <Clock size={13} className="text-slate-400" />
              {course.duration || "3 oy"}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
              <Tag size={13} className="text-slate-400" />
              {course.price || "Kelishilgan"}
            </span>
          </div>

          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              handleShowDetails();
            }}
            className={`inline-flex items-center justify-center p-3.5 rounded-2xl shadow-md transition-all ${theme.btn}`}
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </div>

      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="courses" className="relative bg-white py-28 lg:py-36 text-slate-900 overflow-hidden [perspective:1000px]">
      
      {/* Oq fondagi yengil yumshoq dekorativ elementlar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Sarlavha qismi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Flame size={14} className="text-orange-500 fill-orange-500" />
              Ta'lim Markazi
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900"
            >
              Kelajak kasblarini biz bilan o'rganing
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base max-w-md leading-relaxed"
          >
            Sizning muvaffaqiyatli kelajagingiz uchun eng so'nggi metodika va 3D interaktiv yondashuv asosida tuzilgan professional kurslar.
          </motion.p>
        </div>

        {/* Kartochkalar gridi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}