
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'operational' | 'in-progress' | 'auditing';
  star?: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
}
