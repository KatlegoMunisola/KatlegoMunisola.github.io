
import { Project, Skill, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'wifi-sec',
    title: 'WiFi Security Assessment',
    description: 'Comprehensive vulnerability audit of public network infrastructures across Botswana hubs. Implemented WPA2/WPA3 penetration testing and rogue AP detection protocols.',
    tags: ['Aircrack-ng', 'Python', 'Networking'],
    status: 'operational'
  },
  {
    id: 'ir-dashboard',
    title: 'Incident Response Dashboard',
    description: 'A custom SOC-style visualization tool for real-time threat monitoring and automated ticket generation based on firewall logs and suspicious traffic patterns.',
    tags: ['TypeScript', 'React', 'D3.js'],
    status: 'operational'
  },
  {
    id: 'linux-hardening',
    title: 'Linux Hardening Automation',
    description: 'Suite of Bash and Python scripts designed to automate CIS benchmark compliance on enterprise Linux distributions, reducing attack vectors by 60%.',
    tags: ['Bash', 'Python', 'Security'],
    status: 'auditing'
  }
];

export const TECHNICAL_SKILLS: Skill[] = [
  { name: 'Python & C#', category: 'technical', level: 90 },
  { name: 'TypeScript/React', category: 'technical', level: 85 },
  { name: 'Linux Admin', category: 'technical', level: 95 },
  { name: 'CI/CD Pipelines', category: 'technical', level: 88 },
  { name: 'Cloud Infra', category: 'technical', level: 80 },
  { name: 'Threat Mgmt', category: 'technical', level: 92 }
];

export const SOFT_SKILLS: string[] = [
  'Leadership', 'Strategic Collaboration', 'Crisis Communication', 'Problem Solving'
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'DevOps Intern',
    company: 'Botswana Telecommunications Corporation (BTC)',
    location: 'Gaborone',
    period: 'June 2023 – Oct 2023',
    highlights: [
      'Developed mobile app interfaces (Xamarin) with 85% user satisfaction',
      'Oversaw 30+ production incidents, reducing MTTR by 40%',
      'Executed critical patches for 200+ users with zero downtime'
    ]
  },
  {
    role: 'Vice Lead',
    company: 'Google Student Developers Club',
    location: 'BIUST',
    period: 'Aug 2022 – May 2023',
    highlights: [
      'Coordinated technical workshops for 100+ students',
      'Managed cross-functional development teams'
    ]
  },
  {
    role: 'Chairman',
    company: 'Library Ambassadors Committee',
    location: 'BIUST',
    period: 'Aug 2021 – Present',
    highlights: [
      'Leading strategic library initiatives and student advocacy',
      'Overseeing committee operations and member engagement'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Cyber Threat Management', issuer: 'Cisco' },
  { name: 'Data Science & ML Fundamentals', issuer: 'IBM / Coursera' },
  { name: 'Online Leadership Certification', issuer: 'MCW Global' }
];
