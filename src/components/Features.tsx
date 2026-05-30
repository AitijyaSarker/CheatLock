import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { useTranslation, useSiteData } from '../context/LanguageContext';

interface FeaturesProps {
  theme: 'dark' | 'light';
}

export default function Features({ theme }: FeaturesProps) {
  const { t } = useTranslation();
  const { FEATURE_ITEMS } = useSiteData();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'security' | 'intelligence'>('all');

  const categories = [
    { value: 'all', label: t('features.categories.all') },
    { value: 'ai', label: t('features.categories.ai') },
    { value: 'security', label: t('features.categories.security') },
    { value: 'intelligence', label: t('features.categories.intelligence') },
  ] as const;

  const filteredFeatures = FEATURE_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  // Get corresponding Lucide Icon
  const getFeatureIcon = (iconName: string, themeCls: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent className={themeCls} />;
  };

  return (
    <section
      id="features"
      className={`py-24 transition-colors duration-500 relative ${
        theme === 'dark'
          ? 'bg-[#050816] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.04)_0%,_transparent_50%)]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
            {t('features.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            {t('features.title')}
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            {t('features.desc')}
          </p>
        </div>

        {/* Category Filters (Pills) */}
        <div className="flex flex-wrap justify-center mb-12 gap-2.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : theme === 'dark'
                    ? 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800/80'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Features Bento / Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feat, idx) => {
              const iconThemeCls = `w-6 h-6 ${
                feat.category === 'ai'
                  ? 'text-cyan-400'
                  : feat.category === 'security'
                  ? 'text-blue-400'
                  : 'text-emerald-400'
              }`;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={feat.id}
                  className={`group rounded-2xl border p-6 text-left relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                    theme === 'dark'
                      ? 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-950 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)]'
                      : 'bg-slate-50/50 border-slate-200 hover:border-blue-300 hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.07)]'
                  }`}
                >
                  <div className={`absolute -inset-px opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 rounded-2xl ${
                    feat.category === 'ai'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 blur-md'
                      : feat.category === 'security'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-505 blur-lg'
                      : 'bg-gradient-to-r from-emerald-500 to-cyan-500 blur-md'
                  }`} />

                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${
                      theme === 'dark'
                        ? 'bg-slate-900/60 border-slate-800 group-hover:bg-slate-900 group-hover:border-slate-700'
                        : 'bg-white border-slate-200 shadow-sm group-hover:bg-blue-50/20'
                    }`}>
                      {getFeatureIcon(feat.iconName, iconThemeCls)}
                    </div>
                    <span className={`text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border ${
                      feat.category === 'ai'
                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        : feat.category === 'security'
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    }`}>
                      {feat.category === 'ai' ? t('features.labels.ai') : feat.category === 'security' ? t('features.labels.security') : t('features.labels.intelligence')}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold transition-colors duration-200 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                    {feat.title}
                  </h3>
                  <p className={`text-sm mt-2.5 leading-relaxed ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {feat.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-500/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[9px] text-slate-500">
                      SEC_NODE::{feat.id.toUpperCase()}_CHECK()
                    </span>
                    <span className="font-mono text-[9px] text-blue-400 font-bold">
                      READY_ENFORCED
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
