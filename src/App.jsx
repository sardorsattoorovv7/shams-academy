import { CourseProvider } from './components/CourseContext.jsx';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Courses from './sections/Courses.jsx';
import Showcase from './sections/Showcase.jsx';
import About from './sections/About.jsx';
import Team from './sections/Team.jsx';
import CTASection from './sections/CTASection.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  console.log('🚀 App rendered');
  return (
    <CourseProvider>
      <div className="min-h-screen bg-white font-sans text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Courses />
          <Showcase />
          <About />
          <Team />
          <CTASection />
        </main>
        <Footer />
      </div>
    </CourseProvider>
  );
}