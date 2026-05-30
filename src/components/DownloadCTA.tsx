import { motion } from 'motion/react';
import { Download, Play, ShieldCheck, Cpu } from 'lucide-react';

interface DownloadProps {
  theme: 'dark' | 'light';
  onWatchDemoClick: () => void;
}

export default function DownloadCTA({ theme, onWatchDemoClick }: DownloadProps) {
  return (
    <section
      id="download"
      className={`py-20 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#050816]' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-8 md:p-14 overflow-hidden border text-center shadow-3xl ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/40 border-slate-800 shadow-[0_20px_50px_rgba(59,130,246,0.15)] animate-pulse-once'
              : 'bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/30 border-slate-200'
          }`}
        >
          {/* Intense background lighting node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/15 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-1 right-2.5 w-72 h-72 bg-cyan-500/5 blur-[80px] pointer-events-none rounded-full" />

          {/* Central content */}
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-black">
              TERMINAL SECUREMENT DOWNLOAD
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]">
              Secure Your Exams Today
            </h2>

            <p className={`text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-650'
            }`}>
              Equip your institution with the absolute gold standard in online examination security. Block cheating vectors, automate reports, and restore credit in under an hour.
            </p>

            {/* Platform Download Actions buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Unified Mobile App download */}
              <button
                id="download-btn-mobile"
                onClick={() => alert('CheatLock Mobile Client App downloaded! (Simulation)')}
                className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 shadow-xl active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center space-x-2 shrink-0"
              >
                <Download className="w-5 h-5 text-white animate-bounce-slow" />
                <span>Download App</span>
              </button>

              {/* Watch demo */}
              <button
                id="download-btn-watch"
                onClick={onWatchDemoClick}
                className={`w-full sm:w-auto px-8 py-4.5 rounded-full border text-xs font-bold uppercase tracking-wider active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center space-x-2.5 shrink-0 ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <Play className="w-4 h-4 text-blue-500" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Platform Meta terms */}
            <div className="pt-6 border-t border-slate-500/10 flex flex-wrap justify-center gap-6 text-[10px] font-mono text-slate-500">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Version 2.4.9 Stable Build (SHA256 Encrypted Signature)</span>
              </span>
              <span className="flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>Compatible with Android (v8.0+) & iOS (v14+) Devices</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
