import { motion } from 'motion/react';
import { useSiteData, useTranslation } from '../context/LanguageContext';
import { Quote, MessageSquare } from 'lucide-react';

interface TestimonialsProps {
  theme: 'dark' | 'light';
}

export default function Testimonials({ theme }: TestimonialsProps) {
  const { TESTIMONIALS_DATA } = useSiteData();
  const { t } = useTranslation();
  return (
    <section
      id="testimonials"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0b1120]' : 'bg-slate-50'
      }`}
    >
      {/* Visual background lights */}
      <div className="absolute top-[-10%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none anim-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
              Peer Validations
            </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            Trusted by Leaders in Education
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Read reviews from administrators, program architects, and chief exam controllers who integrated our lockdown suite.
          </p>
        </div>

        {/* Testimonials Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {TESTIMONIALS_DATA.map((t, idx) => {
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl p-6 md:p-8 border text-left flex flex-col justify-between transition-all duration-300 relative group hover:border-slate-500/20 hover:-translate-y-1 ${
                  theme === 'dark'
                    ? 'bg-slate-950/40 border-slate-850 shadow-lg'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                {/* Quote visual overlay */}
                <div className="absolute top-6 right-6 text-slate-500/10 group-hover:text-blue-500/10 transition-colors duration-300">
                  <Quote className="w-16 h-16 transform scale-x-[-1]" />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Rating Stars Mock */}
                  <div className="flex space-x-1 text-yellow-500 font-bold text-xs font-mono">
                    <span>★ ★ ★ ★ ★</span>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Credentials */}
                <div className="mt-8 pt-5 border-t border-slate-500/10 flex items-center space-x-4 relative z-10">
                  {/* Photo frame */}
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/5 bg-slate-800 shrink-0">
                    <img
                      src={t.avatarUrl}
                      alt={t.author}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115"
                      loading="lazy"
                    />
                  </div>

                  {/* Text labels */}
                  <div className="truncate">
                    <div className="font-display font-semibold text-sm truncate">
                      {t.author}
                    </div>
                    <div className="text-xs text-blue-500 dark:text-blue-400 truncate">
                      {t.role}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {t.institution}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
