import { motion } from 'motion/react';
import { Target, Globe, Shield, Sparkles } from 'lucide-react';

interface MissionVisionProps {
  theme: 'dark' | 'light';
}

export default function MissionVision({ theme }: MissionVisionProps) {
  return (
    <section
      id="mission-vision"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#050816]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl border p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group min-h-[400px] ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/30 border-slate-800 hover:border-blue-500/20 shadow-2xl'
                : 'bg-gradient-to-br from-slate-50 via-slate-50/50 to-blue-50/20 border-slate-200 hover:border-blue-300 shadow-xl'
            }`}
          >
            {/* Geometric Vector Accent Background (Mission: Target Crosshair Indicator Grid) */}
            <div className="absolute right-[-10%] top-[-10%] w-[240px] h-[240px] opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-700">
              <svg className="w-full h-full stroke-blue-500 fill-none stroke-[0.5]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" strokeDasharray="3,3" />
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="10" />
                <line x1="50" y1="0" x2="50" y2="100" />
                <line x1="0" y1="50" x2="100" y2="50" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10 text-left">
              <div className="flex items-center space-x-3">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  OUR TARGETED GOAL
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  The Mission
                </h3>
                <p className={`text-lg sm:text-xl font-medium leading-relaxed font-display ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  To eliminate academic dishonesty through intelligent monitoring and secure digital examination systems.
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  By embedding local edge biometric verification and active system-level prevention tools, we ensure Remote learning stays trustworthy, respectable, and fair for every hardworking student.
                </p>
              </div>
            </div>

            {/* Bottom decoration indicator */}
            <div className="mt-8 pt-6 border-t border-slate-500/10 flex items-center space-x-2 text-xs font-mono text-slate-500">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>STRICT COMPLIANCE METRIC ACCREDITATION</span>
            </div>
          </motion.div>

          {/* Vision Card Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`rounded-3xl border p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group min-h-[400px] ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950/20 border-slate-800 hover:border-cyan-500/20 shadow-2xl'
                : 'bg-gradient-to-br from-slate-50 via-slate-50/50 to-cyan-50/20 border-slate-200 hover:border-cyan-200 shadow-xl'
            }`}
          >
            {/* Geometric Vector Accent Background (Vision: Global Network Node Constellations) */}
            <div className="absolute right-[-10%] top-[-10%] w-[240px] h-[240px] opacity-20 pointer-events-none group-hover:scale-110 group-hover:opacity-30 transition-all duration-700">
              <svg className="w-full h-full stroke-cyan-500 fill-none stroke-[0.5]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeDasharray="5,2" />
                {/* Globe orbits */}
                <ellipse cx="50" cy="50" rx="40" ry="12" />
                <ellipse cx="50" cy="50" rx="12" ry="40" />
                {/* Nodes constellation lines floating */}
                <line x1="20" y1="20" x2="50" y2="10" strokeDasharray="1,1" />
                <line x1="80" y1="80" x2="50" y2="90" strokeDasharray="1,1" />
                <circle cx="50" cy="10" r="1.5" className="fill-cyan-400" />
                <circle cx="50" cy="90" r="1.5" className="fill-cyan-400" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10 text-left">
              <div className="flex items-center space-x-3">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                  OUR FORWARD PROJECTION
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  The Vision
                </h3>
                <p className={`text-lg sm:text-xl font-medium leading-relaxed font-display ${
                  theme === 'dark' ? 'text-white' : 'text-slate-800'
                }`}>
                  To become the global standard for trusted online assessments and examination integrity.
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  We envision a world where remote-certified diplomas, micro-credentials, and state examinations carry the same undisputed validity, fairness, and prestige as any test taken inside a brick-and-mortar hall.
                </p>
              </div>
            </div>

            {/* Bottom decoration indicator */}
            <div className="mt-8 pt-6 border-t border-slate-500/10 flex items-center space-x-2 text-xs font-mono text-slate-500">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>GLOBAL TRUST-NETWORK INTEGRITY PARADIGM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
