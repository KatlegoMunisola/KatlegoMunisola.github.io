import { Project, Skill, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nightly-guesthouse',
    title: 'Nightly Guesthouse Platform',
    description: 'A comprehensive full-stack solution for booking management with localized compliance integration.',
    tags: ['Full-Stack', 'Compliance', 'UI/UX'],
    status: 'operational',
    star: {
      situation: 'Local guesthouses lacked unified booking and compliance management systems.',
      task: 'Develop a scalable booking platform integrated with regional compliance requirements.',
      action: 'Architected a full-stack application with real-time availability and compliance reporting modules.',
      result: 'Streamlined booking operations and ensured 100% adherence to local regulations.'
    }
  },
  {
    id: 'network-audit',
    title: 'Network Infrastructure Security Audit',
    description: 'Comprehensive penetration testing and threat mitigation for enterprise-grade infrastructure.',
    tags: ['Penetration Testing', 'Security', 'Auditing'],
    status: 'operational',
    star: {
      situation: 'Enterprise infrastructure was vulnerable to sophisticated internal and external threats.',
      task: 'Conduct a deep-dive security audit and implement proactive defense mechanisms.',
      action: 'Executed extensive penetration testing and developed a comprehensive threat mitigation strategy.',
      result: 'Identified and patched critical vulnerabilities, hardening the network infrastructure.'
    }
  },
  {
    id: 'atm-scout',
    title: 'ATM Scout Mobile Application',
    description: 'Cross-platform discovery tool built with Flutter to locate and monitor ATM statuses.',
    tags: ['Flutter', 'Mobile', 'Geolocation'],
    status: 'operational',
    star: {
      situation: 'Users frequently faced issues locating functional and stocked ATMs in their vicinity.',
      task: 'Create a reliable, community-driven mobile application for tracking ATM statuses.',
      action: 'Developed a cross-platform Flutter application with real-time crowdsourced data and geolocation.',
      result: 'Improved user convenience significantly by providing accurate, up-to-date ATM availability.'
    }
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
