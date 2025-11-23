
import { LucideIcon } from "lucide-react";

export type Language = 'pt' | 'en';

export interface Project {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  tech: string[];
  status: 'Secure' | 'Vulnerable' | 'In Progress';
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Offensive' | 'Defensive' | 'Tools';
}

export interface Experience {
  id: number;
  role: { pt: string; en: string };
  company: string;
  period: { pt: string; en: string };
  location: string;
  description: { pt: string; en: string };
  skills: string[];
}

export interface Education {
  id: number;
  title: { pt: string; en: string };
  institution: string;
  period: string;
  type: 'Degree' | 'Technical' | 'Course';
  description: { pt: string; en: string };
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  skills?: string[];
  link?: string;
}

export interface NavItem {
  label: { pt: string; en: string };
  href: string;
  icon: LucideIcon;
}
