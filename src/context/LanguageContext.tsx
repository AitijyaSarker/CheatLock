import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TEAM_MEMBERS, WORKFLOW_STEPS, FEATURE_ITEMS, STATS, PRICING_PLANS, COMPARISON_DATA, TESTIMONIALS_DATA } from '../data';
import { TEAM_MEMBERS_BN, WORKFLOW_STEPS_BN, FEATURE_ITEMS_BN, STATS_BN, PRICING_PLANS_BN, COMPARISON_DATA_BN, TESTIMONIALS_DATA_BN } from '../data_bn';

type Language = 'en' | 'bn';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.about': 'About Us',
    'nav.mission': 'Mission & Vision',
    'nav.team': 'Our Team',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.download': 'Download App',
    // Hero
    'hero.badge': 'LOCK OUT SHORTCUTS. UNLOCK TRUE INTEGRITY.',
    'hero.title1': 'AI-Powered',
    'hero.title2': 'Exam Integrity',
    'hero.title3': 'Platform',
    'hero.desc': 'Monitor, prevent, and detect academic dishonesty in real time using advanced multi-modal AI proctoring and military-grade browser lockdown technology. Ensure every score is earned, not engineered.',
    'hero.cta1': 'Download App',
    'hero.cta2': 'Watch Demo',
    'hero.trust.title': 'Enterprise Trust Architecture',
    
    // Global Labels
    'features.tag': 'Features',
    'features.categories.all': 'All',
    'features.categories.ai': 'AI',
    'features.categories.security': 'Security',
    'features.categories.intelligence': 'Intelligence',
    'features.labels.ai': 'AI',
    'features.labels.security': 'Security',
    'features.labels.intelligence': 'Intelligence',
    'features.title': 'AI-Driven Platform Features',
    'features.desc': 'From computer vision to deep browser interception, discover how CheatLock actively preserves the legitimacy of every exam session.',
    'workflow.title': 'The CheatLock Lifecycle',
    'workflow.desc': 'A transparent, seamless, and fully automated process designed to keep your exams secure from the first verification step to final submission.',
    'stats.title': 'Trusted Worldwide',
    'stats.desc': 'Join the universities leading the digital education revolution with uncompromised examination security.',
    'team.title': 'Meet NextZen',
    'team.desc': 'The minds behind CheatLock — a multidisciplinary team combining technology, innovation, business strategy, and marketing to redefine online examination integrity.',
    'team.badge': 'Core Innovation Board',
    'pricing.badge': 'Flexible Licensing Options',
    'pricing.title': 'Clear & Scalable Pricing',
    'pricing.desc': 'Whether you are a growing coding bootcamp or a massive state university, CheatLock adapts seamlessly to your volume and requirements.',
    'pricing.contact': 'Contact the CheatLock Team',
    'comparison.title': 'Head-to-Head Comparison',
    'comparison.desc': 'Why traditional proctoring services fall short and why our AI-first approach changes the game.',
    'testimonials.title': 'Client Success Stories',
    'testimonials.desc': 'Hear from the educational institutions that trust us to preserve academic integrity worldwide.',
  },
  bn: {
    // Navbar
    'nav.home': 'হোম',
    'nav.features': 'বৈশিষ্ট্য',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.mission': 'লক্ষ্য ও উদ্দেশ্য',
    'nav.team': 'আমাদের দল',
    'nav.pricing': 'মূল্যতালিকা',
    'nav.contact': 'যোগাযোগ',
    'nav.download': 'অ্যাপ ডাউনলোড',
    // Hero
    'hero.badge': 'শর্টকাট লক করুন। প্রকৃত অখণ্ডতা আনলক করুন।',
    'hero.title1': 'এআই-পাওয়ার্ড',
    'hero.title2': 'পরীক্ষার অখণ্ডতা',
    'hero.title3': 'প্ল্যাটফর্ম',
    'hero.desc': 'উন্নত এআই প্রক্টরিং এবং মিলিটারি-গ্রেড ব্রাউজার লকডাউন ব্যবহার করে রিয়েল-টাইমে একাডেমিক অসততা প্রতিরোধ এবং সনাক্ত করুন। নিশ্চিত করুন প্রতিটি স্কোর অর্জিত, তৈরি করা নয়।',
    'hero.cta1': 'অ্যাপ ডাউনলোড',
    'hero.cta2': 'ডেমো দেখুন',
    'hero.trust.title': 'এন্টারপ্রাইজ ট্রাস্ট আর্কিটেকচার',
    
    // Global Labels
    'features.tag': 'বৈশিষ্ট্য',
    'features.categories.all': 'সবগুলো',
    'features.categories.ai': 'এআই',
    'features.categories.security': 'নিরাপত্তা',
    'features.categories.intelligence': 'ইন্টেলিজেন্স',
    'features.labels.ai': 'এআই',
    'features.labels.security': 'নিরাপত্তা',
    'features.labels.intelligence': 'ইন্টেলিজেন্স',
    'features.title': 'এআই-চালিত প্ল্যাটফর্ম বৈশিষ্ট্য',
    'features.desc': 'কম্পিউটার ভিশন থেকে ব্রাউজার ইন্টারসেপশন পর্যন্ত, দেখুন কিভাবে চিটলক সক্রিয়ভাবে প্রতিটি পরীক্ষার অখণ্ডতা রক্ষা করে।',
    'workflow.title': 'চিটলক লাইফসাইকেল',
    'workflow.desc': 'একটি স্বয়ংক্রিয় প্রক্রিয়া যা আপনার পরীক্ষাকে প্রথম ধাপ থেকে চূড়ান্ত সাবমিশন পর্যন্ত সুরক্ষিত রাখার জন্য ডিজাইন করা হয়েছে।',
    'stats.title': 'বিশ্বব্যাপী সমাদৃত',
    'stats.desc': 'অপারেশনাল সিকিউরিটির সাথে ডিজিটাল শিক্ষা বিপ্লবে নেতৃত্ব দেওয়া বিশ্ববিদ্যালয়গুলির সাথে যোগ দিন।',
    'team.title': 'নেক্সটজেন এর সাথে পরিচিত হন',
    'team.desc': 'চিটলকের পেছনের মস্তিষ্ক — প্রযুক্তি, উদ্ভাবন, ব্যবসায়িক কৌশল এবং মার্কেটিংকে একত্রিত করে একটি বহুমুখী দল।',
    'team.badge': 'কোর ইনোভেশন বোর্ড',
    'pricing.badge': 'নমনীয় লাইসেন্সিং বিকল্প',
    'pricing.title': 'পরিষ্কার এবং স্কেলেবল মূল্য',
    'pricing.desc': 'আপনি ক্রমবর্ধমান স্কুল বা বড় স্টেট বিশ্ববিদ্যালয় হোন না কেন, চিটলক আপনার প্রয়োজনীয়তার সাথে খাপ খায়।',
    'pricing.contact': 'চিটলক টিমের সাথে যোগাযোগ করুন',
    'comparison.title': 'হেড-টু-হেড তুলনা',
    'comparison.desc': 'ঐতিহ্যবাহী প্রক্টরিং পরিষেবাগুলি কেন পিছিয়ে আছে এবং কেন আমাদের এআই পদ্ধতি সেরা।',
    'testimonials.title': 'ক্লায়েন্ট সাফল্যের গল্প',
    'testimonials.desc': 'বিশ্বব্যাপী একাডেমিক অখণ্ডতা বজায় রাখতে যে সমস্ত শিক্ষাপ্রতিষ্ঠান আমাদের বিশ্বাস করে তাদের কথা শুনুন।',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    // @ts-ignore
    return translations[lang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

export const useSiteData = () => {
  const { lang } = useTranslation();
  if (lang === 'bn') {
    return {
      TEAM_MEMBERS: TEAM_MEMBERS_BN,
      WORKFLOW_STEPS: WORKFLOW_STEPS_BN,
      FEATURE_ITEMS: FEATURE_ITEMS_BN,
      STATS: STATS_BN,
      PRICING_PLANS: PRICING_PLANS_BN,
      COMPARISON_DATA: COMPARISON_DATA_BN,
      TESTIMONIALS_DATA: TESTIMONIALS_DATA_BN,
    };
  }
  return {
    TEAM_MEMBERS,
    WORKFLOW_STEPS,
    FEATURE_ITEMS,
    STATS,
    PRICING_PLANS,
    COMPARISON_DATA,
    TESTIMONIALS_DATA,
  };
};
