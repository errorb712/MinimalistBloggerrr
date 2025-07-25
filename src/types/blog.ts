export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishedAt: Date;
  updatedAt: Date;
  readTime: number;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  affiliateData?: AffiliateData;
  serviceData?: ServiceData;
  parentingData?: ParentingData;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export type LayoutType = 'grid' | 'list' | 'search';
export type BlogType = 'recipe' | 'portfolio' | 'knowledge' | 'code' | 'affiliate' | 'service' | 'parenting';

export interface RecipeData {
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface PortfolioData {
  projectUrl?: string;
  technologies: string[];
  role: string;
  duration: string;
  client?: string;
}

export interface CodeData {
  language: string;
  code: string;
  demo?: string;
  github?: string;
}

export interface AffiliateData {
  product: {
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    pros: string[];
    cons: string[];
    affiliateLink: string;
    images: string[];
    specifications?: { [key: string]: string };
  };
  verdict: string;
  buyingGuide?: string[];
}

export interface ServiceData {
  serviceType: string;
  averageCost: string;
  timeRequired: string;
  difficulty: 'DIY' | 'Professional Required' | 'Either';
  tools?: string[];
  steps?: string[];
  whenToCallPro: string[];
  redFlags: string[];
}

export interface ParentingData {
  ageGroup: string;
  difficulty: 'Easy' | 'Medium' | 'Challenging';
  timeRequired: string;
  materials?: string[];
  benefits: string[];
  tips: string[];
  safetyNotes?: string[];
}