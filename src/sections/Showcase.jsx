import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Check, ArrowRight, ChevronLeft, ChevronRight, 
  Code, BookOpen, Calculator, Cpu, Wrench, Brain,
  Star
} from 'lucide-react';
import DeskIllustration from './DeskIllustration.jsx';
import { COURSES } from '../data/courses.js';
import { useCourse } from '../components/CourseContext.jsx';

// Har bir kurs uchun SVG ikonkalar
const getCourseIcon = (courseId) => {
  const icons = {
    1: Code,
    2: BookOpen,
    3: Calculator,
    4: Cpu,
    5: Wrench,
    6: Brain,
  };
  return icons[courseId] || BookOpen;
};

// Har bir kurs uchun ranglar
const getCourseColors = (courseId) => {
  const colors = {
    1: { 
      text: 'text-blue-600', 
      light: 'bg-blue-50',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
      ring: 'ring-blue-400',
      bg: 'bg-blue-500'
    },
    2: { 
      text: 'text-emerald-600', 
      light: 'bg-emerald-50',
      border: 'border-emerald-200',
      hover: 'hover:bg-emerald-100',
      ring: 'ring-emerald-400',
      bg: 'bg-emerald-500'
    },
    3: { 
      text: 'text-purple-600', 
      light: 'bg-purple-50',
      border: 'border-purple-200',
      hover: 'hover:bg-purple-100',
      ring: 'ring-purple-400',
      bg: 'bg-purple-500'
    },
    4: { 
      text: 'text-rose-600', 
      light: 'bg-rose-50',
      border: 'border-rose-200',
      hover: 'hover:bg-rose-100',
      ring: 'ring-rose-400',
      bg: 'bg-rose-500'
    },
    5: { 
      text: 'text-amber-600', 
      light: 'bg-amber-50',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      ring: 'ring-amber-400',
      bg: 'bg-amber-500'
    },
    6: { 
      text: 'text-cyan-600', 
      light: 'bg-cyan-50',
      border: 'border-cyan-200',
      hover: 'hover:bg-cyan-100',
      ring: 'ring-cyan-400',
      bg: 'bg-cyan-500'
    },
  };
  return colors[courseId] || colors[1];
};

// Kurs uchun maxsus nuqtalar
const getCoursePoints = (course) => {
  const points = {
    1: [
      "Zamonaviy dasturlash tillari",
      'Amaliy loyihalar',
      'IT sohasidagi yangiliklar',
    ],
    2: [
      'Grammatika va lug\'at boyligi',
      'Suhbatlashish amaliyoti',
      'Xalqaro sertifikat tayyorgarligi',
    ],
    3: [
      'Mantiqiy fikrlash',
      'Masalalar yechish',
      'Olimpiada tayyorgarligi',
    ],
    4: [
      'Robot yasash',
      'Dasturlash asoslari',
      'Loyihalar yaratish',
    ],
    5: [
      'Metallga ishlov berish texnologiyalari',
      'Chizma va loyihalash',
      'Amaliy mashg\'ulotlar',
    ],
    6: [
      'Tez hisoblash',
      'Mantiqiy misollar',
      'Olimpiada tayyorgarligi',
    ],
  };
  return points[course.id] || points[1];
};

// Qo'shimcha statistikalar
const getCourseStats = (course) => {
  const stats = {
    1: { students: 120, rating: 4.8, lessons: 48 },
    2: { students: 95, rating: 4.7, lessons: 36 },
    3: { students: 80, rating: 4.9, lessons: 42 },
    4: { students: 60, rating: 4.6, lessons: 32 },
    5: { students: 45, rating: 4.5, lessons: 28 },
    6: { students: 70, rating: 4.8, lessons: 38 },
  };
  return stats[course.id] || stats[1];
};

export default function Showcase() {
  const { selectedCourseId, setSelectedCourseId } = useCourse();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll tracking for background rocket trajectory
  const { scrollYProgress } = useScroll();
  const rocketX = useTransform(scrollYProgress, [0, 1], ['5%', '85%']);
  const rocketY = useTransform(scrollYProgress, [0, 1], ['10%', '90%']);
  const rocketRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  console.log('🖼️ Showcase - selectedCourseId:', selectedCourseId); // Debug

  useEffect(() => {
    if (selectedCourseId !== null && selectedCourseId !== undefined) {
      const index = COURSES.findIndex(c => c.id === selectedCourseId);
      if (index !== -1) {
        console.log('🖼️ Showcase - setting index to:', index); // Debug
        setCurrentIndex(index);
      }
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (!selectedCourseId && COURSES.length > 0) {
      setSelectedCourseId(COURSES[0].id);
    }
  }, []);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? COURSES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedCourseId(COURSES[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex === COURSES.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedCourseId(COURSES[newIndex].id);
  };

  const handleSelectCourse = (index) => {
    setCurrentIndex(index);
    setSelectedCourseId(COURSES[index].id);
  };

  const currentCourse = COURSES[currentIndex];
  if (!currentCourse) return null;

  const coursePoints = getCoursePoints(currentCourse);
  const colors = getCourseColors(currentCourse.id);
  const IconComponent = getCourseIcon(currentCourse.id);
  const stats = getCourseStats(currentCourse);

  return (
    <section id="showcase" className="relative overflow-hidden mx-auto max-w-7xl px-5 py-12 lg:px-8">
      {/* 3D background wrapper with scrolling animated rocket logo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
        <motion.div 
          style={{ left: rocketX, top: rocketY, rotate: rocketRotate }}
          className="absolute text-6xl select-none"
        >
          🚀
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <DeskIllustration />
        </motion.div>

        <motion.div
          key={currentCourse.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
          }}
          className="lg:max-w-sm lg:justify-self-end"
        >
          {/* Kurs nomi va SVG ikonka */}
          <div className="flex items-center gap-3">
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.light} ${colors.text} shadow-sm ring-2 ${colors.ring} ring-offset-2`}
            >
              <IconComponent size={22} strokeWidth={2.2} />
            </motion.span>
            <div>
              <h3 className={`text-lg font-bold ${colors.text}`}>
                {currentCourse.title}
              </h3>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium text-ink">{stats.rating}</span>
                <span className="text-xs text-ink-faint">· {stats.students} o'quvchi</span>
              </div>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm leading-relaxed text-ink-soft"
          >
            {currentCourse.desc}
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 grid grid-cols-3 gap-2"
          >
            <div className="rounded-lg bg-ink/5 p-2 text-center transition-all hover:bg-ink/10">
              <div className="text-xs text-ink-faint">Darslar</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {stats.lessons}
              </div>
            </div>
            <div className="rounded-lg bg-ink/5 p-2 text-center transition-all hover:bg-ink/10">
              <div className="text-xs text-ink-faint">O'quvchilar</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {stats.students}+
              </div>
            </div>
            <div className="rounded-lg bg-ink/5 p-2 text-center transition-all hover:bg-ink/10">
              <div className="text-xs text-ink-faint">Reyting</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {stats.rating} ⭐
              </div>
            </div>
          </motion.div>

          {/* Kurs haqida ma'lumotlar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 grid grid-cols-2 gap-2"
          >
            <div className={`rounded-lg ${colors.light} p-2 text-center border ${colors.border} transition-all hover:scale-105 hover:shadow-md cursor-default`}>
              <div className="text-xs text-ink-faint">Davomiyligi</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {currentCourse.duration}
              </div>
            </div>
            <div className={`rounded-lg ${colors.light} p-2 text-center border ${colors.border} transition-all hover:scale-105 hover:shadow-md cursor-default`}>
              <div className="text-xs text-ink-faint">Daraja</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {currentCourse.level}
              </div>
            </div>
            <div className={`rounded-lg ${colors.light} p-2 text-center border ${colors.border} transition-all hover:scale-105 hover:shadow-md cursor-default`}>
              <div className="text-xs text-ink-faint">Narxi</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {currentCourse.price}
              </div>
            </div>
            <div className={`rounded-lg ${colors.light} p-2 text-center border ${colors.border} transition-all hover:scale-105 hover:shadow-md cursor-default`}>
              <div className="text-xs text-ink-faint">Jadval</div>
              <div className={`text-sm font-bold ${colors.text}`}>
                {currentCourse.schedule}
              </div>
            </div>
          </motion.div>

          {/* Kurs nuqtalari */}
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 space-y-2.5"
          >
            {coursePoints.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2.5 text-sm text-ink"
              >
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.light} ${colors.text}`}>
                  <Check size={13} strokeWidth={3} />
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Tugmalar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex items-center gap-3"
          >
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-shams-gold-light to-shams-gold-dark px-5 py-2.5 text-sm font-semibold text-shams-navy shadow-card transition-all hover:shadow-lg cursor-pointer"
            >
              Barcha kurslar
              <ArrowRight size={15} strokeWidth={2.5} />
            </motion.a>

            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-1.5 rounded-full ${colors.light} ${colors.text} px-5 py-2.5 text-sm font-semibold shadow-card transition-all hover:shadow-lg border ${colors.border} cursor-pointer`}
            >
              Yozilish
            </motion.a>

            {/* Navigatsiya tugmalari */}
            <div className="ml-auto flex gap-1.5">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.light} ${colors.text} transition-all hover:shadow-md ${colors.hover} cursor-pointer`}
                aria-label="Oldingi kurs"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${colors.light} ${colors.text} transition-all hover:shadow-md ${colors.hover} cursor-pointer`}
                aria-label="Keyingi kurs"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Kurs indikatorlari */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex justify-center gap-1.5"
          >
            {COURSES.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => handleSelectCourse(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex 
                    ? `w-6 ${colors.text.replace('text', 'bg')}` 
                    : 'w-2 bg-ink/20 hover:bg-ink/40'
                }`}
                aria-label={`${i + 1}-kurs`}
              />
            ))}
          </motion.div>

          {/* Dekorativ SVG ikonka - o'ng yuqori burchakda */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="absolute -right-6 -top-10 hidden lg:block"
          >
            <div className={`flex h-24 w-24 items-center justify-center rounded-full shadow-lg ${colors.bg} text-white`}>
              <IconComponent size={36} strokeWidth={1.5} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}