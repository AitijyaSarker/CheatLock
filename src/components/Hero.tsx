import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Download, Play, Eye, Camera, AlertTriangle, CheckCircle, Lock, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface HeroProps {
  theme: 'dark' | 'light';
  onActionClick: (id: string) => void;
}

export default function Hero({ theme, onActionClick }: HeroProps) {
  const { t } = useTranslation();
  const [suspicionScore, setSuspicionScore] = useState(12);
  const [logs, setLogs] = useState<Array<{ id: number; time: string; msg: string; severity: 'low' | 'med' | 'high' }>>([
    { id: 1, time: '09:30:02', msg: 'Candidate Verified (Attendance: 100%)', severity: 'low' },
    { id: 2, time: '09:30:08', msg: 'Lockdown Shell Engaged (Host: Android 14 Mobile)', severity: 'low' },
  ]);
  const [isFaceDetected, setIsFaceDetected] = useState(true);
  const [eyeCoordinates, setEyeCoordinates] = useState({ x: 0, y: 0 });
  const [faceBbox, setFaceBbox] = useState({ top: '25%', left: '26%', width: '48%', height: '52%' });
  const [isScanning, setIsScanning] = useState(true);

  // Dynamic simulation cycles
  useEffect(() => {
    const scoreInterval = setInterval(() => {
      // simulate random tracking behaviors
      const newScore = Math.floor(10 + Math.random() * 20);
      setSuspicionScore(newScore);

      // simulate moving eyes
      setEyeCoordinates({
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 40,
      });

      // simulate small face movements
      setFaceBbox({
        top: `${23 + Math.random() * 4}%`,
        left: `${24 + Math.random() * 4}%`,
        width: `${46 + Math.random() * 4}%`,
        height: `${50 + Math.random() * 4}%`,
      });
    }, 2800);

    // alert sequence simulation
    const alertTimeout = setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: 3, time: '09:30:14', msg: 'Gaze Deviation: Off-screen focus > 3.2s', severity: 'med' },
      ]);
      setSuspicionScore(48);
    }, 5000);

    const alertTimeout2 = setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: 4, time: '09:30:18', msg: 'Key Violation: Tab Alt+Tab Attempt Blocked', severity: 'high' },
      ]);
      setSuspicionScore(86);
    }, 10000);

    const alertTimeout3 = setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: 5, time: '09:30:21', msg: 'Audio Check: Whisper background noise match', severity: 'med' },
      ]);
      setSuspicionScore(62);
    }, 15000);

    return () => {
      clearInterval(scoreInterval);
      clearTimeout(alertTimeout);
      clearTimeout(alertTimeout2);
      clearTimeout(alertTimeout3);
    };
  }, []);

  return (
    <section
      id="home"
      className={`relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-[#050816] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050816] to-[#050816]'
          : 'bg-[#F8FAFC] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/5 via-[#F8FAFC] to-[#F8FAFC]'
      }`}
    >
      {/* Visual background lights */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none anim-pulse-glow" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none anim-pulse-glow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            {/* Animated Sub-Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium w-fit ${
                theme === 'dark'
                  ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                  : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span className="font-mono tracking-wide">{t('hero.badge')}</span>
            </motion.div>

            {/* Title / Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                {t('hero.title1')} <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>{' '}
                {t('hero.title3')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-base sm:text-lg max-w-xl font-sans leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {t('hero.desc')}
              </motion.p>
            </div>

            {/* Call to Actions (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-cta-download"
                onClick={() => onActionClick('download')}
                className="relative group overflow-hidden px-8 py-4 rounded-full font-bold text-base text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center space-x-2 shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-colors" />
                <Download className="w-5 h-5 relative z-10 text-white" />
                <span className="relative z-10 text-white">{t('hero.cta1')}</span>
              </button>

              <button
                id="hero-cta-demo"
                onClick={() => onActionClick('watch-demo')}
                className={`px-8 py-4 rounded-full font-bold text-base border transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2.5 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-sm'
                }`}
              >
                <Play className="w-4 h-4 text-blue-500" />
                <span>{t('hero.cta2')}</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-500/10"
            >
              <p className={`text-xs font-mono uppercase tracking-widest mb-4 ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                {t('hero.trust.title')}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'AI Powered', val: 'Computer Vision' },
                  { label: 'Real-Time Monitoring', val: '< 200ms Latency' },
                  { label: 'Secure Exams', val: 'Zero bypasses' },
                  { label: 'Automated Reports', val: 'Audit Ledger' },
                ].map((badge, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs font-bold text-blue-500 dark:text-blue-400">
                      {badge.label}
                    </span>
                    <span className={`text-[10px] font-mono ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {badge.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Floating Proctor Dashboard Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center relative w-full">
            {/* Visual Accent glow ring behind mockup */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 blur-xl pointer-events-none opacity-80" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`w-full max-w-[540px] rounded-[2rem] border flex flex-col overflow-hidden shadow-2xl relative ${
                theme === 'dark'
                  ? 'bg-[#0F172A] border-white/10'
                  : 'bg-white border-slate-200'
              }`}
            >
              {/* Terminal Header */}
              <div className={`px-4 py-3 border-b flex items-center justify-between ${
                theme === 'dark' ? 'bg-slate-900/50 border-slate-800/80' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                  <span className={`ml-2 text-[10px] font-mono font-medium ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    CheatLock Control Console | Live Session
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-mono font-bold uppercase tracking-wider animate-pulse">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                  <span>Stream Active</span>
                </div>
              </div>

              {/* Main Console Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-1 p-4">
                {/* Visual Video Feed and overlay boxes */}
                <div className="md:col-span-7 relative bg-black/40 rounded-lg aspect-video md:aspect-square flex items-center justify-center overflow-hidden border border-slate-500/10">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.07)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

                  {/* Face Simulator Outline */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                    {/* Face mesh box */}
                    <motion.rect
                      initial={false}
                      animate={{
                        x: parseFloat(faceBbox.left),
                        y: parseFloat(faceBbox.top),
                        width: parseFloat(faceBbox.width),
                        height: parseFloat(faceBbox.height),
                      }}
                      transition={{ type: 'spring', damping: 20 }}
                      className="fill-none stroke-blue-400 stroke-[0.5] stroke-dasharray-[1,1]"
                    />
                    {/* Eyes tracking nodes */}
                    <circle cx={42 + eyeCoordinates.x / 10} cy={48 + eyeCoordinates.y / 10} r="1.5" className="fill-cyan-400/80" />
                    <circle cx={58 + eyeCoordinates.x / 10} cy={48 + eyeCoordinates.y / 10} r="1.5" className="fill-cyan-400/80" />

                    {/* Laser scanning line sweeping down */}
                    {isScanning && (
                      <motion.line
                        x1="5"
                        y1="10"
                        x2="95"
                        y2="10"
                        animate={{ y1: [10, 90, 10], y2: [10, 90, 10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                        className="stroke-red-500 stroke-[0.5] opacity-60 shadow-[0_0_8px_rgba(239,68,68,1)]"
                      />
                    )}
                  </svg>

                  {/* Dynamic Face Graphics & Tracking Indicators */}
                  <div className="text-center absolute z-0 flex flex-col items-center">
                    <div className="relative w-28 h-28 rounded-full bg-slate-800/20 hover:bg-slate-800/35 border border-white/5 active:scale-95 transition-all flex items-center justify-center">
                      {/* Avatar design - geometric wireframe outline */}
                      <Camera className="w-10 h-10 text-slate-500/80 animate-pulse" />
                      <div className="absolute inset-1.5 rounded-full border-t border-l border-blue-500/40 animate-spin" style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-3 rounded-full border-b border-r border-cyan-400/40 animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <div className="mt-4 flex flex-col space-y-1">
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 border border-white/10 px-2 py-0.5 rounded-full">
                        CANDIDATE: ID_#83015_NY
                      </span>
                      <span className="text-[9px] font-mono text-green-400 flex items-center justify-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                        <span>Biometrics Synced</span>
                      </span>
                    </div>
                  </div>

                  {/* Corner indicator coordinates */}
                  <div className="absolute left-2.5 top-2.5 font-mono text-[8px] text-slate-500 space-y-0.5">
                    <div>GAZE_VEC: [{(eyeCoordinates.x).toFixed(1)}, {(eyeCoordinates.y).toFixed(1)}]</div>
                    <div>FPS: 60 / LATENCY: 34ms</div>
                  </div>

                  <div className="absolute right-2.5 top-2.5 flex items-center space-x-1 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-mono text-[8px] text-blue-300 font-bold uppercase tracking-wider">Lockdown Mode</span>
                  </div>

                  {/* Corner bounds visual */}
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1.5 text-[9px] font-mono text-cyan-400 bg-slate-900/90 border border-white/10 px-2 py-0.5 rounded">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Focus Angle: 97.4%</span>
                  </div>
                </div>

                {/* telemetry, metrics dashboards, state parameters */}
                <div className="md:col-span-5 flex flex-col justify-between p-2 space-y-3">
                  {/* Suspicion score block */}
                  <div className={`p-3 rounded-lg border text-center relative ${
                    theme === 'dark' ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <span className={`text-[9px] font-mono uppercase tracking-widest ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      AI Suspicion Metric
                    </span>

                    <div className="my-2.5 relative flex items-center justify-center h-24">
                      {/* Suspicion Score dynamic SVG ring gauge */}
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="32" className="stroke-slate-800 fill-none" strokeWidth="6" />
                        <motion.circle
                          cx="40"
                          cy="40"
                          r="32"
                          className={`fill-none ${
                            suspicionScore > 60
                              ? 'stroke-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]'
                              : suspicionScore > 30
                              ? 'stroke-yellow-500'
                              : 'stroke-blue-500'
                          }`}
                          strokeWidth="6"
                          strokeDasharray={2 * Math.PI * 32}
                          animate={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - suspicionScore / 100) }}
                          transition={{ type: 'spring', damping: 15 }}
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <motion.span
                          animate={{ color: suspicionScore > 60 ? '#EF4444' : suspicionScore > 30 ? '#F59E0B' : '#3B82F6' }}
                          className="text-2xl font-bold font-mono"
                        >
                          {suspicionScore}%
                        </motion.span>
                        <span className="text-[8px] font-mono text-slate-500">
                          {suspicionScore > 60 ? 'HIGH THREAT' : suspicionScore > 30 ? 'NORMAL RISK' : 'STABLE'}
                        </span>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono flex justify-center space-x-1 bg-emerald-500/10 border border-emerald-500/20 py-1 rounded text-emerald-400">
                      <span>SECURE BOUNDS STATE</span>
                    </div>
                  </div>

                  {/* System State metrics */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}>OS Lock Hook:</span>
                      <span className="text-emerald-400 font-bold uppercase">Success</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}>Hotkeys Intercepted:</span>
                      <span className="text-emerald-400">100% Active</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className={theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}>Multi-Display Lock:</span>
                      <span className="text-blue-400">Enforced</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Alerts Stream Stream Block (lower container of dashboard mockup) */}
              <div className={`p-4 border-t flex-1 flex flex-col justify-between ${
                theme === 'dark' ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-50/50 border-slate-200'
              }`}>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                    Live Integrity Stream Alerts
                  </h4>
                  <div className="space-y-1.5 max-h-[140px] overflow-y-auto">
                    <AnimatePresence mode="popLayout">
                      {logs.slice(-3).map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, x: -15, y: 5 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`p-2 rounded font-mono text-[9px] flex items-center justify-between border ${
                            log.severity === 'high'
                              ? theme === 'dark'
                                ? 'bg-red-500/10 border-red-500/30 text-red-300'
                                : 'bg-red-50 border-red-200 text-red-700'
                              : log.severity === 'med'
                              ? theme === 'dark'
                                ? 'bg-yellow-500/10 border-yellow-500/25 text-yellow-300'
                                : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                              : theme === 'dark'
                              ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                              : 'bg-white border-slate-150 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            {log.severity === 'high' && <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-400" />}
                            {log.severity === 'med' && <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-yellow-400" />}
                            {log.severity === 'low' && <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-400" />}
                            <span className="truncate">{log.msg}</span>
                          </div>
                          <span className="text-[8px] opacity-70 shrink-0 select-none ml-2">{log.time}</span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[10px] font-mono text-slate-500">
                    Encrypted Session Node Integrity Certified • AES-256
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Minor floating helper tags for background premium feel */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-12 hidden md:flex items-center space-x-2 bg-slate-900/90 text-[10px] font-mono text-cyan-400 px-3.5 py-1.5 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] pointer-events-none"
            >
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>Full Lockdown Active</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-12 hidden md:flex items-center space-x-2 bg-slate-900/90 text-[10px] font-mono text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-400/20 shadow-[0_0_15px_rgba(34,197,94,0.15)] pointer-events-none"
            >
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span>99.8% Confidence Accuracy</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
