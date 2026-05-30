import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Sparkles, Calculator, Coins, ShieldCheck, Zap, Mail, Layers, CircleHelp } from 'lucide-react';
import { useSiteData, useTranslation } from '../context/LanguageContext';

interface PricingProps {
  theme: 'dark' | 'light';
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ theme, onSelectPlan }: PricingProps) {
  const { PRICING_PLANS } = useSiteData();
  const { t } = useTranslation();
  // Toggle between 'pay-per-exam' and 'subscriptions'
  const [activeTab, setActiveTab] = useState<'pay-per-exam' | 'subscriptions'>('pay-per-exam');

  // Interactive calculator state
  const [calcTier, setCalcTier] = useState<'tier-1' | 'tier-2' | 'tier-3'>('tier-3');
  const [studentCount, setStudentCount] = useState<number>(50);

  // Subscription cycle state ('monthly' | 'half-yearly' | 'yearly')
  const [subCycle, setSubCycle] = useState<'monthly' | 'half-yearly' | 'yearly'>('yearly');

  // Calculates interactive pay-per-exam value
  const getTierRate = (tier: string) => {
    if (tier === 'tier-1') return 0.10;
    if (tier === 'tier-2') return 0.25;
    return 0.50; // tier-3
  };

  const getTierName = (tier: string) => {
    if (tier === 'tier-1') return 'Tier 1 (Basic screenlock)';
    if (tier === 'tier-2') return 'Tier 2 (Exam controlling)';
    return 'Tier 3 (AI integration)';
  };

  const calculatedCredits = parseFloat((studentCount * getTierRate(calcTier)).toFixed(2));
  const calculatedUSD = calculatedCredits; // Pegged 1:1
  const calculatedBDT = Math.round(calculatedCredits * 120);

  // Pay per exam static tiers list for visualization cards
  const payPerExamTiers = [
    {
      level: 'Tier 1',
      rate: '0.10 EC',
      usd: '$0.10',
      bdt: '৳ 12',
      title: 'Basic Full Screen Lock',
      focus: 'Coaching tests, quizzes & anti-tabs validation',
      features: [
        'Runs only in full screen',
        'Tab Switch Detection (auto-submit/pause)',
        'Screenshot & Screen Recording Protection (blocks on Android)',
        'Copy-Paste Disabled (no text capture)',
        'Keyboard Shortcut Blocking (Alt+Tab, Win, Ctrl+C/V)',
        'Teacher Admin Panel & LMS Integration',
        'Automatic Crash-Proof Auto-Save Answers',
        '3 warnings limit system',
      ],
      popBadge: '',
    },
    {
      level: 'Tier 2',
      rate: '0.25 EC',
      usd: '$0.25',
      bdt: '৳ 30',
      title: 'Exam Controlling Features',
      focus: 'Time-bound quizzes, shuffling, and face check validation',
      features: [
        'Everything in Tier 1 standard lock',
        'Auto Timer per Question (can\'t return)',
        'Randomized Questions & shuffled choices',
        'Question Locking (locks once answered)',
        'Face Detection AI Camera verification',
        'Flag multiple faces or user missing',
        'Direct automated reports',
        'Slack / LMS webhook reporting feeds',
      ],
      popBadge: 'Highly Optimal',
    },
    {
      level: 'Tier 3',
      rate: '0.50 EC',
      usd: '$0.50',
      bdt: '৳ 60',
      title: 'Full AI Integration Suite',
      focus: 'High-stakes university exams, recruitment, and complete audit security',
      features: [
        'Everything in Tier 1 & Tier 2 locks',
        'Eye Movement Tracking (scans looking away)',
        'Head Pose Tracking (unusual angles)',
        'Local Acoustic Voice Detection (noise/whispering)',
        'Phone Detection Model (AI checks screen objects)',
        'Full Interactive Proctor Grid Dashboard',
        'AI Suspicion Scores (0-100 analytics)',
        'Real-time automated warnings',
      ],
      popBadge: 'Maximum Integrity',
    },
  ];

  // Subscription plans list
  const subscriptionTiers = [
    {
      name: 'Individual Teacher Pro',
      limit: 'Up to 100 Registered Students',
      desc: 'Perfect for local educators, school teachers, and active course tutors.',
      pricing: {
        monthly: { base: '$15.00', bdt: '৳ 1,800', note: '/mo' },
        'half-yearly': { base: '$75.00', bdt: '৳ 9,000', note: '/6-mo', save: 'Saves $15' },
        yearly: { base: '$120.00', bdt: '৳ 14,400', note: '/yr', save: 'Saves $60 (Best Value)' },
      },
      features: [
        'Unlimited exam sessions with clean math',
        'All Tiers (Tier 1, Tier 2 & Tier 3 AI) completely included',
        'No per-student credits required',
        'Standard interactive proctoring dashboards',
        'Crash-proof secure Cloud Auto-saving answers',
        'Direct Teacher Admin panel options',
        'Basic classroom integrations',
        '24 hours email support',
      ],
      isPopular: false,
    },
    {
      name: 'Coaching Center Premium',
      limit: 'Up to 500 Registered Students',
      desc: 'Ideal for established coaching hubs, online schools, and training groups.',
      pricing: {
        monthly: { base: '$49.00', bdt: '৳ 5,880', note: '/mo' },
        'half-yearly': { base: '$245.00', bdt: '৳ 29,400', note: '/6-mo', save: 'Saves $49' },
        yearly: { base: '$399.00', bdt: '৳ 47,880', note: '/yr', save: 'Saves $189 (Ultimate Value)' },
      },
      features: [
        'Unlimited exam sessions with clean mathematical logs',
        'All three security levels (Tiers 1, 2, 3) completely unlocked',
        'Deep customized examiner audit panel feeds',
        'API LMS hookups (Moodle, Canvas, Blackboard custom integrations)',
        'Auto timer, eye and head pose tracker models',
        'Interactive real-time proctor dashboard with priority urgency rows',
        'Phone support and slack response channels',
        'SOC-2 / GDPR secure encrypted backups',
      ],
      isPopular: true,
    },
    {
      name: 'Institutional / University',
      limit: 'Unlimited Registered Students',
      desc: 'Powering enterprise universities, colleges, and national evaluation boards.',
      pricing: {
        monthly: { base: 'Custom Scale', bdt: 'Custom Pricing', note: '' },
        'half-yearly': { base: 'Custom Scale', bdt: 'Custom Pricing', note: '' },
        yearly: { base: 'Custom Scale', bdt: 'Custom Pricing', note: '' },
      },
      customNote: 'Usually ranges from $1,500 to $5,000/year, depending on target API setups, custom server deploy configs, and LMS needs.',
      features: [
        'Completely unlimited students and proctored sheets',
        'Direct custom server container image setups (private cloud)',
        '1-on-1 account onboarding & dedicated student orientation trials',
        'Custom single sign-on (SSO) & university email authentications',
        'Whitelabel mobile proctor skin client builds',
        'Hardware key binding integration features',
        'Dedicated 24/7 technical proctor deployment hotline',
        'Premium strict uptime SLA contract guarantees',
      ],
      isPopular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className={`py-24 transition-colors duration-500 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0b1120]' : 'bg-[#fdfdfd]'
      }`}
    >
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-xs font-mono tracking-widest text-blue-500 dark:text-blue-400 uppercase font-black">
              B2B REVENUE MODELS
            </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]">
            Highly Flexible Business Model
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-650'}`}>
            Powering educational integrity dynamically. Load pre-paid <strong>Exam Credits (EC)</strong> for occasional use or unlock <strong>Unlimited Examinations</strong> with budget-friendly subscription plans.
          </p>

          {/* Pegged exchange rate notice panel */}
          <div className="pt-2">
            <div className={`inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl border text-xs font-mono ${
              theme === 'dark' ? 'bg-slate-900/60 border-slate-800 text-slate-350' : 'bg-blue-50/70 border-blue-100 text-slate-700'
            }`}>
              <Coins className="w-4.5 h-4.5 text-blue-500" />
              <span>Unified Peg Value: <strong className="text-blue-500 dark:text-blue-400">1 EC = $1.00 USD = 120 BDT</strong></span>
              <span className="opacity-40">|</span>
              <span>Supported methods: Stripe, PayPal, bKash, Nagad</span>
            </div>
          </div>

          {/* Mode Tab Switcher */}
          <div className="pt-6 flex justify-center">
            <div className={`p-1 rounded-full flex items-center border ${
              theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setActiveTab('pay-per-exam')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer transition-all duration-300 flex items-center space-x-1.5 ${
                  activeTab === 'pay-per-exam'
                    ? 'bg-blue-600 text-white shadow-md'
                    : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-650 hover:text-slate-900'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Pre-Paid Exam Credits (Scale Per-Student)</span>
              </button>
              <button
                onClick={() => setActiveTab('subscriptions')}
                className={`px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer transition-all duration-300 flex items-center space-x-1.5 ${
                  activeTab === 'subscriptions'
                    ? 'bg-blue-600 text-white shadow-md'
                    : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-650 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Unlimited Subscriptions (Fixed Capacity)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Inner Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'pay-per-exam' ? (
            <motion.div
              key="pay-per-exam-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Pay Per Exam Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {payPerExamTiers.map((tier, idx) => (
                  <div
                    key={tier.level}
                    className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 border ${
                      tier.popBadge
                        ? theme === 'dark'
                          ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/40 border-blue-500 shadow-[0_15px_45px_rgba(59,130,246,0.2)]'
                          : 'bg-white border-blue-500 shadow-[0_15px_35px_rgba(59,130,246,0.1)]'
                        : theme === 'dark'
                        ? 'bg-slate-900/35 border-slate-850 hover:border-slate-800 shadow-md'
                        : 'bg-slate-550/5 border-slate-200 hover:border-blue-200 shadow-sm'
                    }`}
                  >
                    {tier.popBadge && (
                      <div className="absolute top-0 right-6 -translate-y-1/2 inline-flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3 animate-spin-slow" />
                        <span>{tier.popBadge}</span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                          {tier.level}
                        </span>
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold bg-blue-500/10 text-blue-500 dark:text-blue-400 px-2.5 py-1 rounded-full">
                            {tier.rate}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-display font-black mt-2 text-left">
                        {tier.title}
                      </h3>
                      <p className={`text-xs mt-2 text-left h-12 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-550'}`}>
                        {tier.focus}
                      </p>

                      {/* Display Costing Conversion Rate */}
                      <div className="my-6 border-y border-slate-500/10 py-4 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 leading-none">USD RATE / Student</p>
                          <p className={`text-lg font-mono font-black mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{tier.usd}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 leading-none">BDT RATE / Student</p>
                          <p className="text-lg font-mono font-black mt-1 text-blue-500 dark:text-cyan-400">{tier.bdt}</p>
                        </div>
                      </div>

                      {/* features */}
                      <div className="space-y-3.5 text-left mb-6">
                        <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 font-bold block mb-1">
                          Included exam locks:
                        </span>
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-xs font-medium">
                            <div className="p-0.5 rounded-full mt-0.5 bg-blue-500/10 text-blue-500 dark:text-blue-400 shrink-0">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectPlan(`Pre-Paid ${tier.level} exam credits`)}
                      className={`w-full py-3.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        tier.popBadge
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white shadow-xl'
                          : theme === 'dark'
                          ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-950 hover:text-white'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                      }`}
                    >
                      Inquire {tier.level} Sandbox
                    </button>
                  </div>
                ))}
              </div>

              {/* Dynamic Cost Calculator Widget for Pre-Paid Credits */}
              <div className={`mt-10 rounded-3xl p-6 md:p-8 border shadow-xl relative overflow-hidden text-left ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-slate-950 via-slate-950 to-blue-950/20 border-slate-850'
                  : 'bg-gradient-to-r from-slate-50 via-slate-100/50 to-cyan-50/10 border-slate-200'
              }`}>
                {/* Accent design symbols */}
                <div className="absolute top-4 right-4 text-blue-500/20">
                  <Calculator className="w-16 h-16" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-blue-500 dark:text-blue-400 font-bold uppercase block">
                      INTERACTIVE COST CALCULATOR
                    </span>
                    <h4 className="text-xl font-display font-extrabold pb-1">
                      Estimate your Pay-Per-Exam budget on the fly
                    </h4>

                    {/* Step 1: Select Tier Rate */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono tracking-wider text-slate-500 font-bold block">
                        Step 1: Choose Features Security Level
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {['tier-1', 'tier-2', 'tier-3'].map((tier) => (
                          <button
                            key={tier}
                            onClick={() => setCalcTier(tier as any)}
                            className={`py-2 px-3 rounded-xl border text-[11px] font-black uppercase text-center transition-all cursor-pointer ${
                              calcTier === tier
                                ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                                : theme === 'dark'
                                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                                : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
                            }`}
                          >
                            {tier.replace('-', ' ')} ({getTierRate(tier)} EC)
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Set student slider */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="uppercase tracking-wider text-slate-500 font-bold">
                          Step 2: Anticipated Number of Students
                        </span>
                        <span className="text-blue-500 dark:text-cyan-400 font-black text-sm">
                          {studentCount} Students
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        step="10"
                        value={studentCount}
                        onChange={(e) => setStudentCount(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>10 students</span>
                        <span>500 students</span>
                        <span>1000 students</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative z-10">
                    <div className={`p-6 rounded-2xl border text-center ${
                      theme === 'dark' ? 'bg-[#050816]/90 border-slate-800' : 'bg-white border-slate-200/80 shadow'
                    }`}>
                      <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-550 mb-1">Estimated Costing Summary</p>
                      
                      <div className="pt-2 pb-4 space-y-1">
                        <div className="text-3xl font-display font-black text-blue-500 dark:text-blue-400">
                          {calculatedCredits} <span className="text-xs uppercase font-mono tracking-tight font-medium">Credits (EC)</span>
                        </div>
                        <p className="text-slate-500 text-[10px] font-mono tracking-widest leading-relaxed uppercase pt-0.5">
                          Pegged equivalent values in local currencies
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 border-t border-slate-500/10 pt-4">
                        <div>
                          <p className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Total in USD</p>
                          <p className={`text-base font-mono font-bold mt-0.5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            ${calculatedUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="border-l border-slate-500/10">
                          <p className="text-[9px] uppercase font-mono tracking-wider text-slate-500">Total in BDT</p>
                          <p className="text-base font-mono font-bold mt-0.5 text-cyan-500 dark:text-cyan-400">
                            ৳ {calculatedBDT.toLocaleString('en-US')}
                          </p>
                        </div>
                      </div>

                      {/* Direct CTA based on dynamic config */}
                      <button
                        onClick={() => onSelectPlan(`Pre-Paid Bundle of ${studentCount} candidates on ${getTierName(calcTier)}`)}
                        className="w-full mt-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest cursor-pointer shadow hover:opacity-95 transition-all text-center"
                      >
                        Enquire this calculator scale
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="subscriptions-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Billing commitment Switcher inside Subscriptions */}
              <div className="flex justify-center pt-2">
                <div className={`p-1 rounded-full flex items-center border ${
                  theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
                }`}>
                  {['monthly', 'half-yearly', 'yearly'].map((cycle) => {
                    const isSelected = subCycle === cycle;
                    let cycleLabel = 'Monthly';
                    let badge = '';
                    if (cycle === 'half-yearly') {
                      cycleLabel = 'Half-Yearly';
                      badge = 'Save (৳)';
                    } else if (cycle === 'yearly') {
                      cycleLabel = 'Annual (Best)';
                      badge = 'High Save';
                    }

                    return (
                      <button
                        key={cycle}
                        onClick={() => setSubCycle(cycle as any)}
                        className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all duration-300 flex items-center space-x-1 ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md'
                            : theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-650 hover:text-slate-900'
                        }`}
                      >
                        <span>{cycleLabel}</span>
                        {badge && (
                          <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                            isSelected
                              ? 'bg-blue-400 text-white'
                              : 'bg-emerald-500/10 text-emerald-400'
                          }`}>
                            {badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Subscriptions Grid Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
                {subscriptionTiers.map((plan, idx) => {
                  const isPopular = plan.isPopular;
                  const currentPlanPricing = plan.pricing[subCycle];
                  const hasCustomPricing = currentPlanPricing.base === 'Custom Scale';

                  return (
                    <div
                      key={plan.name}
                      className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 border ${
                        isPopular
                          ? theme === 'dark'
                            ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-blue-950/40 border-2 border-blue-500 shadow-[0_15px_45px_rgba(59,130,246,0.3)] scale-[1.02] z-10'
                            : 'bg-white border-2 border-blue-500 shadow-[0_15px_35px_rgba(59,130,246,0.12)] scale-[1.02] z-10'
                          : theme === 'dark'
                          ? 'bg-slate-900/35 border-slate-850 hover:border-slate-800 shadow-md'
                          : 'bg-slate-550/5 border-slate-200 hover:border-blue-200 shadow-sm'
                      }`}
                    >
                      {/* Popular tag styling */}
                      {isPopular && (
                        <div className="absolute top-0 right-8 -translate-y-1/2 inline-flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[9px] font-mono font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Most Popular Pack</span>
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
                            SUBSCRIPTION
                          </span>
                          <span className="text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 px-2 py-0.5 rounded">
                            {plan.limit}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-black mt-2 text-left">
                          {plan.name}
                        </h3>
                        <p className={`text-xs mt-2 text-left h-12 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-550'}`}>
                          {plan.desc}
                        </p>

                        {/* Cost visual block */}
                        <div className="my-6 border-b border-slate-500/10 pb-6 text-left">
                          <div className="flex items-baseline justify-start">
                            <span className="text-3xl md:text-4xl font-display font-black tracking-tight text-white-important">
                              <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                                {currentPlanPricing.base}
                              </span>
                            </span>
                            {!hasCustomPricing && (
                              <span className="text-xs shrink-0 font-medium ml-1.5 text-slate-550 opacity-80">
                                {currentPlanPricing.note}
                              </span>
                            )}
                          </div>

                          {/* Localized Bangladeshi Equivalent Pricing Display */}
                          {!hasCustomPricing ? (
                            <div className="flex items-center justify-between mt-2 pt-1">
                              <p className="text-xs font-bold text-cyan-500 dark:text-cyan-400 font-mono">
                                Approx. {currentPlanPricing.bdt} BDT {currentPlanPricing.note}
                              </p>

                              {/* Save tags */}
                              {currentPlanPricing.save && (
                                <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded">
                                  {currentPlanPricing.save}
                                </span>
                              )}
                            </div>
                          ) : (
                            <div className="mt-2 text-[11px] font-mono text-slate-500 uppercase leading-normal">
                              {currentPlanPricing.bdt}
                            </div>
                          )}
                        </div>

                        {/* Custom scale institutional range text */}
                        {plan.customNote && (
                          <div className="mb-6 p-4 rounded-xl bg-blue-500/5 text-[11px] font-medium leading-relaxed border border-blue-500/10 text-blue-400">
                            <strong>Note:</strong> {plan.customNote}
                          </div>
                        )}

                        {/* Features inclusion checklist */}
                        <div className="space-y-3 mt-4 mb-6">
                          <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 font-bold block mb-1">
                            Plan Inclusions:
                          </span>
                          {plan.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start space-x-2.5 text-xs font-medium">
                              <div className={`p-0.5 rounded-full mt-0.5 bg-blue-500/10 text-blue-400 shrink-0`}>
                                <Check className="w-3 h-3" />
                              </div>
                              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectPlan(`${plan.name} Sub (${subCycle} billing)`)}
                        className={`w-full py-3.5 rounded-xl font-bold text-center text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          isPopular
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white shadow-xl'
                            : theme === 'dark'
                            ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-950 hover:text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                        }`}
                      >
                        Contact Sales for Trial
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Trust Note below */}
        <div className="text-center mt-12">
          <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500 font-mono">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Not matches your exam volumes? Reach out to and consult with </span>
            <button
              onClick={() => onSelectPlan('Localized customized enterprise scale')}
              className="text-blue-500 dark:text-blue-400 underline font-extrabold hover:text-blue-400 cursor-pointer text-xs"
            >
              CheatLock Team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
