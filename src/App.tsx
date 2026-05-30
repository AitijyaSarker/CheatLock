import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import AboutStats from './components/AboutStats';
import MissionVision from './components/MissionVision';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import DownloadCTA from './components/DownloadCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Persist Theme Selection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('cheatlock_theme') as 'dark' | 'light';
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        localStorage.setItem('cheatlock_theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('cheatlock_theme', nextTheme);
  };

  // Dynamic Scroll Spy for Navbar Active link syncing
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'mission', 'team', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 160; // offset of search bounds

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    handleScrollToSection('contact');
  };

  const handleHeroActionClick = (id: string) => {
    if (id === 'watch-demo') {
      setIsVideoModalOpen(true);
    } else {
      handleScrollToSection(id);
    }
  };

  return (
    <div
      id="app-container"
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden selection:bg-blue-600/35 selection:text-white ${
        theme === 'dark' ? 'bg-[#050816] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Background Glimmer Effects for Geometric Balance theme */}
      {theme === 'dark' && (
        <>
          <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[110px] pointer-events-none z-0" />
          <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
        </>
      )}

      {/* Interactive sticky glass navigation header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Main landing container segments */}
      <main id="main-content">
        <Hero theme={theme} onActionClick={handleHeroActionClick} />

        <Features theme={theme} />

        <Workflow theme={theme} />

        <AboutStats theme={theme} />

        <MissionVision theme={theme} />

        <Team theme={theme} />

        <Comparison theme={theme} onConsultClick={() => handleScrollToSection('contact')} />

        <Pricing theme={theme} onSelectPlan={handleSelectPlan} />

        <Testimonials theme={theme} />

        <DownloadCTA theme={theme} onWatchDemoClick={() => setIsVideoModalOpen(true)} />

        <Contact theme={theme} preSelectedPlan={selectedPlan} />
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} theme={theme} />

      {/* Footer credits and social details */}
      <Footer theme={theme} onLinkClick={handleScrollToSection} />
    </div>
  );
}
