export interface TeamMember {
  id: string;
  name: string;
  role: string;
  institution: string;
  avatarUrl?: string;
  isLead?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'ai' | 'security' | 'intelligence';
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  isCustom?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  avatarUrl: string;
}

export interface ComparisonRow {
  feature: string;
  cheatLock: boolean | string;
  traditional: boolean | string;
  description: string;
}
