import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSiteData, useTranslation } from '../context/LanguageContext';
import { UserCheck, ShieldAlert, Binary, Eye, Send, ArrowRight, Video, FileText, CheckCircle } from 'lucide-react';

interface WorkflowProps {
  theme: 'dark' | 'light';
}

export default function Workflow({ theme }: WorkflowProps) {
  const { WORKFLOW_STEPS } = useSiteData();
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);

  // Return icons relevant to workflow steps
  const getStepIcon = (num: number, active: boolean) => {
    const cls = `w-6 h-6 transition-colors duration-300 ${active ? 'text-blue-400' : 'text-slate-500'}`;
    switch (num) {
      case 1:
        return <UserCheck className={cls} />;
      case 2:
        return <ShieldAlert className={cls} />;
      case 3:
        return <Eye className={cls} />;
      case 4:
        return <Binary className={cls} />;
      case 5:
        return <Send className={cls} />;
      default:
        return <UserCheck className={cls} />;
    }
  };

  // Render a simulated graphic based on active step on the right hand side
  const renderStepGraphic = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-blue-400">
              <span>SCANNER_INITIATED</span>
              <span>100% ONLINE</span>
            </div>
            <div className="relative border border-slate-700/50 bg-slate-900/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px]">
              <div className="relative w-24 h-24 rounded-full bg-slate-800/20 border border-blue-500/30 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-x-0 inset-y-0 rounded-full border-t border-cyan-400"
                />
                <UserCheck className="w-10 h-10 text-blue-400" />
              </div>
              <p className="mt-4 font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wide">
                BIOMETRIC MATCH CONFIRMED
              </p>
              <span className="text-[10px] text-slate-400 mt-1 font-mono">
                Student Name: Aitijya Sarker Atibo
              </span>
            </div>
            <div className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-mono text-center">
              Identity Verified. Exam Terminal Authorized.
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-red-500 font-bold">
              <span>SYSTEM_LOCKED</span>
              <span>RESTRICTED</span>
            </div>
            <div className="relative border border-slate-700/50 bg-slate-900/40 rounded-xl p-5 space-y-3 min-h-[220px] flex flex-col justify-center">
              {[
                { label: 'Full Screen Clampdown', status: 'COMPELLED', active: true },
                { label: 'Secondary Display Check', status: '0 DETECTED', active: true },
                { label: 'Clipboard Cut/Copy Lock', status: 'DEACTIVATED', active: true },
                { label: 'App / Developer Console Intercept', status: 'BLOCKED', active: true },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 rounded bg-slate-950/50 border border-white/5 text-[11px] font-mono">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-cyan-400 font-bold tracking-wider">{item.status}</span>
                </div>
              ))}
            </div>
            <div className="p-2.5 bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 text-[10px] font-mono text-center uppercase tracking-widest font-bold">
              Active Terminal Restricting Secondary Input Hooks
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400">
              <span>AI_MODEL_ACTIVE</span>
              <span>LOGGING</span>
            </div>
            <div className="relative border border-slate-700/50 bg-slate-900/40 rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px]">
              <div className="w-full flex justify-between mb-4 font-mono text-[10px] text-slate-500">
                <span>[X-AXIS]: Gaze tracking</span>
                <span className="text-blue-400">ONLINE</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-slate-950 flex items-center justify-center border border-white/10 relative">
                <Video className="w-6 h-6 text-slate-400" />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-blue-500 rounded-full"
                />
              </div>
              <div className="w-full mt-4 space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>Face vector sync:</span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
                <div className="h-1.5 w-full bg-slate-950 rounded bg-clip-border overflow-hidden">
                  <motion.div
                    animate={{ width: ['40%', '98%', '60%', '85%', '20%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-400 flex items-center justify-center space-x-1">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
              <span>Analyzing gaze, posture, and environmental audio</span>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-amber-500">
              <span>THREAT_METRIC_FEED</span>
              <span>LEVEL: AMBER</span>
            </div>
            <div className="relative border border-slate-700/50 bg-slate-900/40 rounded-xl p-5 min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Recent Flagged Vectors</span>
                <div className="mt-2 space-y-2">
                  <div className="p-2 bg-yellow-500/5 border border-yellow-500/15 rounded text-[10px] font-mono flex justify-between items-center text-yellow-300">
                    <span>Unrecognized Voice Match</span>
                    <span>Score: 34</span>
                  </div>
                  <div className="p-2 bg-slate-950/60 border border-white/5 rounded text-[10px] font-mono flex justify-between items-center text-slate-400">
                    <span>Normal exam progress</span>
                    <span>Score: 02</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center p-3.5 bg-slate-950 rounded-lg border border-white/5 mt-4">
                <div className="font-mono text-[10px]">
                  <div className="text-slate-400">AGGREGATE SCORE:</div>
                  <div className="text-lg font-bold text-yellow-400">38 / 100</div>
                </div>
                <span className="text-[8px] font-mono text-slate-500 uppercase bg-slate-900 px-2 py-1 rounded">Moderate</span>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-400">
              <span>LEDGER_RECORD_COMPLETED</span>
              <span>VERIFIED</span>
            </div>
            <div className="relative border border-slate-700/50 bg-slate-900/40 rounded-xl p-6 text-center space-y-4 min-h-[220px] flex flex-col justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="font-mono text-xs text-white font-bold">INTEGRITY_REPORT_STAMPED.PDF</p>
                <p className="text-[10px] font-mono text-slate-400 mt-1">Hash: sha256_e83fd211a77912d</p>
              </div>
              <button className="px-4 py-1.5 rounded-full bg-slate-900 text-[10px] font-semibold border border-white/10 hover:bg-slate-950 text-slate-300 cursor-pointer transition-all flex items-center space-x-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Verify Audit Log Ledger</span>
              </button>
            </div>
            <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 text-center text-xs font-mono font-bold">
              Secure Upload to Canvas Complete
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="mission"
      className={`py-24 transition-colors duration-500 relative ${
        theme === 'dark' ? 'bg-[#0b1120]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
            Rigorous Operations Sequence
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            How <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">CheatLock</span> Works
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Exams aren't just recorded—they are lock-down protected, monitored in real time using edge artificial intelligence, and securely finalized.
          </p>
        </div>

        {/* Workflow Timeline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Timeline Steps Accordion / List (Left side) */}
          <div className="lg:col-span-7 space-y-4 relative">
            {/* Visual connecting line behind numbers on desktop */}
            <div className="absolute left-8 top-10 bottom-10 w-[2px] bg-slate-800/30 hidden lg:block" />

            {WORKFLOW_STEPS.map((step) => {
              const isActive = activeStep === step.stepNumber;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`relative p-5 sm:p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-start space-x-5 group ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-slate-950/60 border-blue-500/30 shadow-[0_4px_25px_rgba(59,130,246,0.15)]'
                        : 'bg-white border-blue-200 shadow-[0_10px_30px_rgba(59,130,246,0.06)]'
                      : theme === 'dark'
                      ? 'bg-slate-900/30 border-slate-900/80 hover:bg-slate-900/60'
                      : 'bg-white/40 border-slate-200/50 hover:bg-white/90'
                  }`}
                >
                  {/* Step bubble */}
                  <div className={`relative z-10 w-11 h-11 rounded-full border flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 border-transparent text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                      : theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 text-slate-500 group-hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-500 group-hover:border-slate-300'
                  }`}>
                    {step.stepNumber}
                  </div>

                  {/* Step textual description */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-mono tracking-widest ${
                        isActive ? 'text-blue-500 dark:text-blue-400 font-bold' : 'text-slate-400'
                      }`}>
                        {step.subtitle}
                      </span>
                      {isActive && (
                        <span className="hidden sm:inline-flex items-center space-x-1.5 text-[10px] font-mono text-emerald-400 animate-pulse bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-450/20">
                          <span>Active Simulation</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-display font-semibold">
                      {step.title}
                    </h3>
                    <p className={`text-sm ${isActive ? 'block' : 'hidden md:block opacity-60'} ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {step.description}
                    </p>

                    {/* Bullet elements visible active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-3 border-t border-slate-500/10 space-y-2"
                        >
                          {step.bulletPoints.map((pt, index) => (
                            <div key={index} className="flex items-start space-x-2 text-xs">
                              <span className="text-blue-500 mt-1 shrink-0">•</span>
                              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                                {pt}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive display simulator mockup (Right side) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 w-full">
            <div className={`rounded-2xl border p-5 shadow-2xl relative overflow-hidden backdrop-blur-md ${
              theme === 'dark'
                ? 'bg-slate-950/80 border-slate-800'
                : 'bg-white border-slate-200'
            }`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-xl pointer-events-none rounded-full" />

              {/* Top controls preview card */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-slate-500/10">
                <div className="flex items-center space-x-2">
                  <div className="p-1 px-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-xs font-mono text-slate-400">
                    STAGE_0{activeStep}
                  </div>
                  <span className="font-display font-bold text-xs uppercase tracking-wider">
                    Console Monitor
                  </span>
                </div>
                {getStepIcon(activeStep, true)}
              </div>

              {/* Main inner dynamic layout graphics */}
              <div className="my-2 min-h-[300px] flex flex-col justify-center">
                {renderStepGraphic()}
              </div>

              {/* Footer specs details */}
              <div className="border-t pt-4 mt-4 border-slate-500/10 text-center flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>ENCRYPT: RSA_CRYPT_4096</span>
                <span>STATUS: STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
