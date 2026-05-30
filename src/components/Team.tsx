import { useState } from 'react';
import { motion } from 'motion/react';
import { useSiteData, useTranslation } from '../context/LanguageContext';
import { Mail, GraduationCap, Award, Crown, Zap } from 'lucide-react';

interface TeamProps {
  theme: 'dark' | 'light';
}

export default function Team({ theme }: TeamProps) {
  const { TEAM_MEMBERS } = useSiteData();
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Fallback avatars are disabled to ensure transparent profile pictures render cleanly.

  return (
    <section
      id="team"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-[#050816] bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.03)_0%,_transparent_60%)]'
          : 'bg-slate-50'
      }`}
    >
      {/* Decorative dynamic ambient glow */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none anim-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
            {t('team.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            {t('team.title')}
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t('team.desc')}
          </p>
        </div>

        {/* Team Members Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {TEAM_MEMBERS.map((member) => {
            const isFeatured = activeCard === member.id;

            return (
              <motion.div
                key={member.id}
                onMouseEnter={() => setActiveCard(member.id)}
                onMouseLeave={() => setActiveCard(null)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isFeatured ? 0 : 0.1 }}
                className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                  isFeatured
                    ? theme === 'dark'
                      ? 'bg-slate-950 border-2 border-blue-500 shadow-[0_10px_45px_rgba(59,130,246,0.25)] ring-1 ring-blue-500/20 md:scale-[1.02] lg:scale-[1.03] z-10'
                      : 'bg-white border-2 border-blue-500 shadow-[0_15px_40px_rgba(59,130,246,0.12)] md:scale-[1.02] lg:scale-[1.03] z-10'
                    : theme === 'dark'
                    ? 'bg-slate-900/35 border border-slate-850 hover:border-slate-700/60 shadow-lg'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-blue-300'
                }`}
              >
                {/* Visual spotlight back panel glow for featured lead card */}
                {isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/20 blur-[50px] pointer-events-none rounded-full" />
                )}

                {/* Main profile content */}
                <div className="flex flex-col items-center text-center relative z-10">


                  {/* Profile Picture (Circular layout with hovering zoom effects and border glow) */}
                  <div className="relative mb-6">
                    <div className={`absolute -inset-1 rounded-full blur transition-opacity duration-300 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-60 group-hover:opacity-100'
                        : 'bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-40'
                    }`} />
                    <div className="relative rounded-full overflow-hidden w-24 h-24 bg-slate-950 border-2 border-slate-800 flex items-center justify-center">
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Hide broken img tag to reveal fallback gradient
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {isFeatured && (
                      <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-blue-500 text-white border-2 border-slate-950">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Member Name */}
                  <h3 className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors ${
                    isFeatured
                      ? theme === 'dark' ? 'text-white' : 'text-slate-900'
                      : theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {member.name}
                  </h3>

                  {/* Role Title */}
                  <p className={`text-xs font-mono uppercase tracking-wider font-semibold mt-1.5 ${
                    isFeatured ? 'text-indigo-400 dark:text-indigo-300' : 'text-blue-500'
                  }`}>
                    {member.role}
                  </p>

                  {/* Institution details */}
                  <div className={`mt-4 flex items-center justify-center space-x-1.5 text-xs ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <GraduationCap className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="truncate">{member.institution}</span>
                  </div>
                </div>

                {/* Footer aesthetic buttons inside card */}
                <div className="mt-8 pt-4 border-t border-slate-500/10 flex justify-center space-x-3 relative z-10">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                    theme === 'dark' ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-500'
                  }`}>
                    Active Core Member
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
