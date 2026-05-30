import { motion } from 'motion/react';
import { useSiteData, useTranslation } from '../context/LanguageContext';
import { ChevronsRight, Shield, X, Check, ArrowRight } from 'lucide-react';

interface ComparisonProps {
  theme: 'dark' | 'light';
  onConsultClick: () => void;
}

export default function Comparison({ theme, onConsultClick }: ComparisonProps) {
  const { COMPARISON_DATA } = useSiteData();
  const { t } = useTranslation();
  return (
    <section
      id="comparison"
      className={`py-24 transition-colors duration-500 relative ${
        theme === 'dark'
          ? 'bg-[#050816] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.03)_0%,_transparent_50%)]'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-bold">
              Technical Distinctions
            </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            How Code Enforces Credibility
          </h2>
          <p className={`text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Audit the structural, security, and computational differences between CheatLock AI and traditional, easily-bypassed assessment configurations.
          </p>
        </div>

        {/* Comparison Table Desktop Container */}
        <div className="overflow-x-auto rounded-3xl border border-slate-500/10 box-shadow shadow-2xl">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className={`border-b border-slate-500/10 ${
                theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
              }`}>
                <th className="p-6 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase w-[25%]">
                  Capability / Feature
                </th>
                <th className="p-6 text-sm font-display font-extrabold text-blue-500 dark:text-blue-400 w-[38%]">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                    <span>CheatLock Proctored Shell</span>
                  </div>
                </th>
                <th className="p-6 text-sm font-display font-bold text-slate-400 w-[37%]">
                  Traditional Remote Exams
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-500/10">
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors duration-200 hover:bg-slate-500/5 ${
                    theme === 'dark' ? 'bg-slate-900/10' : 'bg-white'
                  }`}
                >
                  {/* Category */}
                  <td className="p-6">
                    <div className="font-display font-semibold text-sm">
                      {row.feature}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-snug">
                      {row.description}
                    </div>
                  </td>

                  {/* CheatLock Column */}
                  <td className="p-6">
                    <div className="flex items-start space-x-3 text-sm">
                      <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`font-semibold ${
                        theme === 'dark' ? 'text-slate-200 animate-pulse-once' : 'text-slate-800'
                      }`}>
                        {row.cheatLock}
                      </span>
                    </div>
                  </td>

                  {/* Traditional Column */}
                  <td className="p-6 text-sm text-slate-400">
                    <div className="flex items-start space-x-3 text-slate-500">
                      <div className="p-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">
                        {row.traditional}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Callout underneath */}
        <div className={`mt-10 rounded-2xl p-6 border text-left flex flex-col md:flex-row items-center justify-between gap-6 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-950/20 to-slate-950 border-slate-800'
            : 'bg-gradient-to-r from-blue-50/20 to-slate-50 border-slate-200'
        }`}>
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="font-display font-semibold text-sm">
              Ready to Upgrade your Examination Infrastructure?
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We provide comprehensive pilot sandboxes for testing. Integrate CheatLock with custom LTI credentials (Moodle, Canvas, Blackboard) in under an hour.
            </p>
          </div>
          <button
            onClick={onConsultClick}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold uppercase tracking-wider text-white shadow-md active:scale-95 transition-all text-center cursor-pointer shrink-0 flex items-center space-x-1.5"
          >
            <span>Initiate Pilot Trial</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
