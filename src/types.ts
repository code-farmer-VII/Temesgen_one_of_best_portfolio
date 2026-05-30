import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  url: string;
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: number;
  name: string;
  description: string;
}

export interface Portfolio {
  id: number;
  title: string;
  link: string;
  images: string[];
  overview: string;
  motivation: string;
  technologies: string[];
  architecture: string;
  futureImprovements: string[];
  contactInfo: string;
}

export interface Review {
  id: number;
  name: string;
  designation: string;
  review: string;
  stars: number;
  socialLinks: {
    id: number;
    icon: LucideIcon;
    url: string;
  }[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface SocialLink {
  id: number;
  label: string;
  icon: LucideIcon;
  url: string;
}

export interface ContactDetail {
  id: number;
  icon: LucideIcon;
  text: string;
}

export interface TimelineItem {
  id: number;
  title: string;
  institution?: string;
  duration: string;
  description: string;
  bullets?: string[];
  location?: string;
  type?: 'education' | 'experience';
}
