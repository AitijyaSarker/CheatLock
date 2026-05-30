import { TeamMember, FeatureItem, WorkflowStep, PricingPlan, TestimonialItem, ComparisonRow } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'aitijya',
    name: 'Aitijya Sarker Atibo',
    role: 'Project Coordinator',
    institution: 'Metropolitan University, Sylhet',
    avatarUrl: '/team/aitijya.png',
    isLead: true,
  },
  {
    id: 'jubayer',
    name: 'Jubayer Rahman Chowdhury',
    role: 'Development Lead',
    institution: 'Metropolitan University, Sylhet',
    avatarUrl: '/team/jubayer.jpg',
  },
  {
    id: 'aman',
    name: 'Amanur Rahman Aman',
    role: 'Business Analyst',
    institution: 'Metropolitan University, Sylhet',
    avatarUrl: '/team/aman.png',
  },
  {
    id: 'sandid',
    name: 'Sandid Haque',
    role: 'Business Analyst',
    institution: 'Metropolitan University, Sylhet',
    avatarUrl: '/team/sandid.png',
  },
  {
    id: 'jeky',
    name: 'Jeky Hasan Shuvo',
    role: 'Global Marketing Executive',
    institution: 'Leeds Beckett University',
    avatarUrl: '/team/jeky.jpg',
  },
  {
    id: 'rupanta',
    name: 'Rupanta Mazumder Kona',
    role: 'Marketing Manager',
    institution: 'Metropolitan University, Sylhet',
    avatarUrl: '/team/rupanta.png',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Authentication',
    subtitle: 'Step 1: Secure Identity',
    description: 'Verify candidate identity with frictionless biometric authentication prior to unlocking the exam terminal.',
    bulletPoints: [
      'Real-Time Student ID verification via neural face scanning',
      'Dual-factor active face biometrics to eliminate proxy attendance',
    ],
  },
  {
    stepNumber: 2,
    title: 'System Lockdown',
    subtitle: 'Step 2: Environment Clampdown',
    description: 'Convert standard client browsers into fortified testing terminals preventing external communication.',
    bulletPoints: [
      'Enforce full screen mode with automatic escape prevention',
      'Intercept secondary monitors, clipboard events, and hotkeys',
      'Lock out tab switching, developer consoles, and third-party extensions',
    ],
  },
  {
    stepNumber: 3,
    title: 'AI Proctoring',
    subtitle: 'Step 3: Continuous Monitoring',
    description: 'Analyze applicant focus, movements, and audio streams locally and in parallel on our secure server cloud.',
    bulletPoints: [
      'High-precision live gaze tracking and off-screen detection',
      'Acoustic voice analysis for whispering, prompts, or environmental crosstalk',
      'Real-time posture and head position tracking',
    ],
  },
  {
    stepNumber: 4,
    title: 'Automated Oversight',
    subtitle: 'Step 4: Real-time Evaluation',
    description: 'Consolidate anomalies into high-signal violation streams optimized for instant proctor evaluation.',
    bulletPoints: [
      'Calculates CheatLock AI Suspicion Scores (0 to 100) on the fly',
      'Flags real-time violations with frames-of-interest and video snips',
      'Live proctor dashboard sorts high-risk exams dynamically',
    ],
  },
  {
    stepNumber: 5,
    title: 'Submission',
    subtitle: 'Step 5: Verifiable Completion',
    description: 'Secure test delivery, close the session, and immediately generate fully audited verification ledgers.',
    bulletPoints: [
      'Crash-resistant cloud autosaving prevents packet loss issues',
      'Generates automated exam integrity reports with instant PDFs',
      'Uploads a tamper-proof encrypted log directly to your CMS or LMS',
    ],
  },
];

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'face',
    title: 'AI Face Recognition',
    description: 'Continuously verifies that the authorized student stays in the frame, flagging secondary people or proxy test-takers.',
    iconName: 'UserCheck',
    category: 'ai',
  },
  {
    id: 'eye',
    title: 'Eye Tracking',
    description: 'Advanced gaze path tracking detects when a student repeatedly stares at books, secondary screens, or paper sheets.',
    iconName: 'Eye',
    category: 'ai',
  },
  {
    id: 'voice',
    title: 'Voice Monitoring',
    description: 'Acoustic wave monitoring logs whispering, external speech prompts, and environmental conversations using context-aware filters.',
    iconName: 'Mic',
    category: 'ai',
  },
  {
    id: 'browser',
    title: 'Browser Lockdown',
    description: 'Disables right-clicks, copy-pasting, developer tools, secondary screens, virtual machines, and arbitrary tab switches.',
    iconName: 'ShieldAlert',
    category: 'security',
  },
  {
    id: 'mobile',
    title: 'Mobile Detection',
    description: 'Visual object detection models identify smartphones, tablets, or wearable screens if they enter the examination radius.',
    iconName: 'Smartphone',
    category: 'ai',
  },
  {
    id: 'reports',
    title: 'Automated Reports',
    description: 'Generate detailed, timestamped event ledgers with captured screenshots and annotated visual markers for clear grading audits.',
    iconName: 'FileSpreadsheet',
    category: 'intelligence',
  },
  {
    id: 'dashboard',
    title: 'Real-Time Dashboard',
    description: 'Allows a single administrator or examiner to monitor up to 50 active exam candidates in a highly responsive grid layout.',
    iconName: 'LayoutDashboard',
    category: 'intelligence',
  },
  {
    id: 'multi-sec',
    title: 'Multi-Layer Security',
    description: 'Encrypted network channels, secure session headers, and tokenized authorization safeguard test content from leakage.',
    iconName: 'Lock',
    category: 'security',
  },
  {
    id: 'analytics',
    title: 'Integrity Analytics',
    description: 'Gain powerful organization-wide insights into suspicious behavior vectors across course modules and test schedules.',
    iconName: 'BarChart3',
    category: 'intelligence',
  },
];

export const STATS = [
  { value: '99.8%', label: 'Detection Accuracy', desc: 'Industry-leading confidence score' },
  { value: '24/7', label: 'Automated Monitoring', desc: 'Secure exams scale seamlessly' },
  { value: '500K+', label: 'Sessions Protected', desc: 'Trusted by global universities' },
  { value: 'Bank-Grade', label: 'Platform Security', desc: 'Fully GDPR & SOC-2 Compliant' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$29',
    period: 'month',
    description: 'Perfect for local classrooms and growing online schools looking for core proctoring.',
    features: [
      'Up to 500 exam sessions/mo',
      'AI Student ID recognition',
      'Standard eye-tracking alert system',
      'Core browser lockdown features',
      'Email support (24h SLA)',
      'Basic downloadable PDF reports',
    ],
    ctaText: 'Get Started with Starter',
  },
  {
    name: 'Professional',
    price: '$99',
    period: 'month',
    description: 'The standard for modern universities and professional online examiners needing deep analytics.',
    features: [
      'Up to 5000 exam sessions/mo',
      'Full Multi-Modal AI Proctored Suite',
      'Subtle voice & mobile screen detection',
      'Real-time automated suspension tracking',
      'Access to Examiner Grid Dashboard',
      'Automated Integrity report compilation',
      'LMS / API Integration hookups',
      'Priority slack & phone feedback support',
    ],
    ctaText: 'Upgrade to Professional',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom setups tailored for large-scale examination boards, corporate learning, and full state universities.',
    features: [
      'Unlimited exam sessions/mo',
      'Dedicated private server deployment options',
      'Tailored custom LMS plugins (Moodle, Canvas, BlackBoard)',
      '1-on-1 account onboarding & support',
      'Dedicated compliance manager access',
      '99.99% custom SLA guarantee',
      'Hardware lock integration keypairs',
    ],
    ctaText: 'Contact Sales',
    isCustom: true,
  },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'AI Detection Accuracy',
    cheatLock: '99.8% (Multi-modal neural net checks)',
    traditional: 'None (Manual proctor review required)',
    description: 'Automatically scans face, gaze, voice, and devices instantly.',
  },
  {
    feature: 'Real-Time Monitoring Feed',
    cheatLock: 'Live dashboard with dynamic AI urgency sorting',
    traditional: 'Recorded streams manually audited after the test',
    description: 'Proctors get high-alert items immediately prioritized at the top of their screens.',
  },
  {
    feature: 'Browser Lockdown',
    cheatLock: 'Full Kernel & System-level event blocking controls',
    traditional: 'Basic JS popups easily bypassed',
    description: 'We intercept shortcut triggers and override all copy/paste or multitasking options.',
  },
  {
    feature: 'Mobile Device Detection',
    cheatLock: 'High-speed device object detection models',
    traditional: 'Fully blind to on-desk smartphones',
    description: 'Tracks surrounding elements in camera frames to flag hidden phones or tablets.',
  },
  {
    feature: 'Audit Log Output',
    cheatLock: 'Instant annotated timelines with event photos',
    traditional: 'Hours of video review to manually find clips',
    description: 'Examiners can read a clean sequence report of critical flags in under 2 minutes.',
  },
  {
    feature: 'Deployment Complexity',
    cheatLock: 'Zero-configuration secure mobile companion application',
    traditional: 'Heavy legacy desktop setups requiring complex installation',
    description: 'Bypass desktop setups completely. Fast install on student Android and iOS devices.',
  },
  {
    feature: 'Student Privacy Safeguards',
    cheatLock: 'GDPR-Compliant edge stream scoring (never records raw static video)',
    traditional: 'Invasive third-party human proctors watching students live',
    description: 'CheatLock respects student privacy by assessing streams on-the-fly and reporting events mathematically.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'safwan',
    quote: "CheatLock's system ensures our backend logic isn't tampered with during online evaluations. It's built perfectly for coding tests and general exams alike.",
    author: "Safwan Chowdhury",
    role: "Academic Backend, 65 Compiler Coaching",
    institution: "CSE Department, Metropolitan University",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 'farhan',
    quote: "Taking exams with CheatLock feels incredibly smooth. It's secure but doesn't slow down my browser or cause lagging issues like other proctoring software.",
    author: "Farhan Ahmed",
    role: "Student Developer",
    institution: "Tech Society, Metropolitan University",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 'nabil',
    quote: "The automated system lockdown feature is a game-changer. It creates a fair environment for everyone without needing a live supervisor constantly watching.",
    author: "Nabil Rahman",
    role: "System Analyst",
    institution: "CSE Department, Metropolitan University",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
];
