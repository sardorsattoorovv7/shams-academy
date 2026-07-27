import { createContext, useContext, useState, useMemo } from 'react';

const CourseContext = createContext(null);

export function CourseProvider({ children }) {
  const [selectedCourseId, setSelectedCourseId] = useState('dasturlash');

  const value = useMemo(() => ({
    selectedCourseId,
    setSelectedCourseId
  }), [selectedCourseId]);

  console.log('🔷 CourseProvider - selectedCourseId:', selectedCourseId);

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  const context = useContext(CourseContext);
  if (!context) {
    console.warn('⚠️ useCourse must be used within a CourseProvider');
    return { 
      selectedCourseId: 'dasturlash', 
      setSelectedCourseId: () => {} 
    };
  }
  return context;
}