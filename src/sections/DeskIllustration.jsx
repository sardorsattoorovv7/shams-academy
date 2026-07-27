import { motion } from 'framer-motion';
import { useCourse } from '../components/CourseContext.jsx';
import { useEffect, useState } from 'react';
import { COURSES } from '../data/courses.js';
import CourseLottie from '../components/CourseLottie.jsx';

// Har bir kurs uchun Lottie komponentlari
const CourseIllustrations = {
  'dasturlash': () => <CourseLottie courseKey="dasturlash" />,
  'ingliz': () => <CourseLottie courseKey="ingliz" />,
  'matematika': () => <CourseLottie courseKey="matematika" />,
  'robototexnika': () => <CourseLottie courseKey="robototexnika" />,
  'mental-arifmetika': () => <CourseLottie courseKey="mental-arifmetika" />,
};

// Default komponent
const DefaultIllustration = () => (
  <div className="w-full h-auto flex items-center justify-center p-8">
    <div className="text-center">
      <div className="text-6xl mb-4">📚</div>
      <p className="text-slate-600 text-lg font-medium">Kurs tanlang</p>
    </div>
  </div>
);

export default function DeskIllustration() {
  const { selectedCourseId } = useCourse();
  const [currentId, setCurrentId] = useState(selectedCourseId || 'dasturlash');

  useEffect(() => {
    if (selectedCourseId) {
      setCurrentId(selectedCourseId);
    }
  }, [selectedCourseId]);

  const getCourseKey = (id) => {
    if (!id) return 'dasturlash';
    if (typeof id === 'number') {
      const course = COURSES.find(c => c.id === id);
      return course ? course.id : 'dasturlash';
    }
    return id;
  };

  const courseKey = getCourseKey(currentId);
  const IllustrationComponent = CourseIllustrations[courseKey] || DefaultIllustration;

  return (
    <div className="relative overflow-hidden bg-white py-20 text-slate-900">
      {/* Interactive Clean Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Subtle Light Glows */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-center">
        <motion.div
          key={courseKey}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="w-full max-w-2xl mx-auto cursor-pointer transition-transform duration-500 hover:scale-105"
        >
          <IllustrationComponent />
        </motion.div>
      </div>
    </div>
  );
}