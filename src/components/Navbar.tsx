import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, Menu, X, Sun, Moon, Download, Globe } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  activeSection: string;
}

export default function Navbar({ theme, toggleTheme, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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

  const { t, lang, setLang } = useTranslation();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  const navLinks = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.features'), id: 'features' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.mission'), id: 'mission' },
    { label: t('nav.team'), id: 'team' },
    { label: t('nav.pricing'), id: 'pricing' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-[#050816]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10 py-3'
              : 'bg-white/80 backdrop-blur-md shadow-[0_4px_35px_rgba(0,0,0,0.06)] border-b border-gray-200 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            id="navbar-logo"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-[#0b1120] text-blue-400 p-1.5 rounded-lg border border-blue-500/30 flex items-center justify-center">
                <Shield className="w-5 h-5 absolute text-blue-400/80" />
                <Lock className="w-2.5 h-2.5 text-cyan-400 relative z-10 translate-y-0.5" />
                {/* Visual indicator of AI node */}
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                CheatLock
              </span>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-400 dark:text-cyan-400/80 font-bold -mt-0.5">
                AI Proctored
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? theme === 'dark'
                        ? 'text-white'
                        : 'text-blue-600'
                      : theme === 'dark'
                      ? 'text-slate-300 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeBubble"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        theme === 'dark' ? 'bg-white/5 border border-white/5' : 'bg-blue-50 border border-blue-100'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className={`flex lg:hidden mr-auto lg:mr-0 lg:ml-auto items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors border ${
              theme === 'dark'
                ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-800 text-blue-400'
                : 'bg-blue-50 border-blue-100 hover:bg-blue-100 text-blue-600'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? 'BN' : 'EN'}</span>
          </button>

          {/* Right Action buttons */}
          <div id="navbar-actions" className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle Button Desktop */}
            <button
              onClick={toggleLang}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors border ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-800 text-blue-400'
                  : 'bg-blue-50 border-blue-100 hover:bg-blue-100 text-blue-600'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'BN' : 'EN'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 rounded-full cursor-pointer transition-colors border ${
                theme === 'dark'
                  ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-800 text-cyan-400'
                  : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-blue-600'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('download')}
              className="relative group overflow-hidden px-4.5 py-2 rounded-full text-sm font-semibold cursor-pointer text-white shadow-xl transition-all duration-300 transform active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-blue-400/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full rounded-full-after" />
              <span className="relative flex items-center space-x-1.5">
                <Download className="w-4 h-4" />
                <span>{t('nav.download')}</span>
              </span>
            </button>
          </div>

          {/* Mobile Side Buttons & Controls */}
          <div id="navbar-mobile-controls" className="flex items-center space-x-3 lg:hidden">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full cursor-pointer transition-colors ${
                theme === 'dark' ? 'bg-slate-900 text-cyan-400 border border-slate-800' : 'bg-slate-100 text-blue-600 border border-slate-200'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full cursor-pointer transition-colors ${
                theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] z-40 flex flex-col p-6 backdrop-blur-xl border-t ${
              theme === 'dark'
                ? 'bg-[#050816]/95 border-white/10 text-white'
                : 'bg-white/95 border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex flex-col space-y-4 mb-8">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left text-lg font-medium py-2.5 border-b cursor-pointer ${
                      isActive
                        ? 'text-blue-500 font-bold border-blue-500/30'
                        : theme === 'dark'
                        ? 'text-slate-300 border-white/5'
                        : 'text-slate-600 border-slate-100'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex flex-col space-y-4 mt-auto">
              <button
                onClick={() => scrollToSection('download')}
                className="py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl cursor-pointer shadow-lg active:scale-95"
              >
                {t('nav.download')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
