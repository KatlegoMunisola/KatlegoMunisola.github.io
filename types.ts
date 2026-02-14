
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'operational' | 'in-progress' | 'auditing';
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
  level: number; // 0-100
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
