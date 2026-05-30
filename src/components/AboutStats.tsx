import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useSiteData, useTranslation } from '../context/LanguageContext';
import { ShieldCheck, CalendarRange, Lock, TrendingUp } from 'lucide-react';

interface AboutStatsProps {
  theme: 'dark' | 'light';
}

export default function AboutStats({ theme }: AboutStatsProps) {
  const { STATS } = useSiteData();
  const { t } = useTranslation();
  // Animated metric counters simulation
  const [accuracy, setAccuracy] = useState(90.0);
  const [sessions, setSessions] = useState(1);

  useEffect(() => {
    const accuracyTimer = setTimeout(() => {
      let current = 90.0;
      const interval = setInterval(() => {
        if (current >= 99.8) {
          clearInterval(interval);
        } else {
          current = parseFloat((current + 0.3).toFixed(1));
          if (current > 99.8) current = 99.8;
          setAccuracy(current);
        }
      }, 35);
    }, 400);

    const sessionsTimer = setTimeout(() => {
      let current = 100;
      const interval = setInterval(() => {
        if (current >= 500) {
          clearInterval(interval);
        } else {
          current += Math.floor(Math.random() * 25) + 12;
          if (current > 500) current = 500;
          setSessions(current);
        }
      }, 30);
    }, 600);

    return () => {
      clearTimeout(accuracyTimer);
      clearTimeout(sessionsTimer);
    };
  }, []);

  const getStatIcon = (idx: number) => {
    const cls = "w-5 h-5 text-blue-400";
    switch (idx) {
      case 0:
        return <TrendingUp className={cls} />;
      case 1:
        return <CalendarRange className={cls} />;
      case 2:
        return <ShieldCheck className={cls} />;
      case 3:
        return <Lock className={cls} />;
      default:
        return <ShieldCheck className={cls} />;
    }
  };

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0b1120]' : 'bg-slate-50'
      }`}
    >
      {/* Decorative accent grid */}
      <div className="absolute inset-x-0 top-0 h-[100px] bg-[linear-gradient(rgba(18,24,38,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context Text */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
              Re-establishing Academic Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              About CheatLock
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed font-sans ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              CheatLock was created to restore trust in online assessments by combining artificial intelligence, real-time behavioral computer vision and biosignal analysis, and secure sandbox exam environments into one powerful, lightweight platform.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              We believe that secure digital evaluations are the cornerstone of democratized online education. Our goal is to make digital examinations as credible, fair, and secure as traditional in-person assessments—enabling educational scale for schools and universities globally.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-6">
              <div className="space-y-1">
                <div className="font-display font-bold text-lg text-blue-500">Credibility Restored</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Matches offline exam validity metrics completely.</div>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-500/10 pt-4 sm:pt-0 sm:pl-6">
                <div className="font-display font-bold text-lg text-cyan-400">Examiner Empowered</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Drives proctor productivity by over 10x with triage AI.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Matrix Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STATS.map((stat, idx) => {
              // override raw static values with anim count values
              let displayVal = stat.value;
              if (idx === 0) displayVal = `${accuracy}%`;
              if (idx === 2) displayVal = `${sessions}K+`;

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border text-left relative overflow-hidden transition-all duration-300 hover:border-slate-500/30 ${
                    theme === 'dark'
                      ? 'bg-slate-950/40 border-slate-800 shadow-[0_4px_15px_rgba(0,0,0,0.2)]'
                      : 'bg-white border-slate-200 shadow-[0_5px_15px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${
                      theme === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-slate-50 border border-slate-100'
                    }`}>
                      {getStatIcon(idx)}
                    </div>
                  </div>

                  <div className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-1 sm:mb-2 text-white-important">
                    <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      {displayVal}
                    </span>
                  </div>

                  <div className={`font-display font-semibold text-sm ${
                    theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {stat.label}
                  </div>

                  <div className={`text-xs mt-1 leading-snug ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {stat.desc}
                  </div>

                  {/* Aesthetic laser grid accent inside stat cards */}
                  <div className="absolute right-0 bottom-0 w-16 h-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/40" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
