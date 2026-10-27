export type ServiceCategory = 
  | 'Engineering' 
  | 'Design' 
  | 'Automation' 
  | 'Geospatial' 
  | 'Enterprise';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  category: ServiceCategory;
  accentColor: string; // e.g. '#155EEF', '#FF6848', '#059669', '#7C3AED'
  accentBg: string;
  iconName: string;
  badge: string;
  problemsSolved: string[];
  targetAudience: string[];
  deliverables: string[];
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: ServiceFAQ[];
  relatedProjectIds: string[];
}

export type ProductStatus = 'Research' | 'Prototype' | 'Pilot' | 'Production' | 'Coming Soon';

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  description: string;
  category: string;
  status: ProductStatus;
  accentColor: string;
  accentBg: string;
  heroImage: string;
  showcaseImages: string[];
  purpose: string;
  targetAudience: string[];
  problemAddressed: string[];
  verifiedFeatures: string[];
  plannedCapabilities: string[];
  keyHighlights: {
    label: string;
    value: string;
  }[];
}

export type ProjectCategory = 
  | 'All' 
  | 'Websites' 
  | 'Web Applications' 
  | 'Mobile Applications' 
  | 'UI/UX' 
  | 'GIS & Geospatial'
  | 'Internal Products' 
  | 'Concept Projects';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterCategory: ProjectCategory;
  isConcept: boolean;
  statusBadge: string;
  liveUrl?: string;
  thumbnail: string;
  fullImage: string;
  summary: string;
  client?: string;
  challenge: string;
  objectives: string[];
  approach: string;
  designDetails: string;
  implementationDetails: string;
  techStack?: string[];
  features: string[];
  outcomes?: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  accentBg: string;
  icon: string;
  keyActivities: string[];
  deliverable: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

