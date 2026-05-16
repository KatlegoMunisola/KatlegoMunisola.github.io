
import { Project, Skill, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'wifi-sec',
    title: 'WiFi Security Assessment',
    description: 'Comprehensive vulnerability audit of public network infrastructures across Botswana hubs. Implemented WPA2/WPA3 penetration testing and rogue AP detection protocols.',
    tags: ['Aircrack-ng', 'Python', 'Networking'],
    status: 'operational',
    star: {
      situation: 'Public WiFi networks in local tech hubs were highly susceptible to Man-in-the-Middle (MITM) attacks and data interception.',
      task: 'Audit the existing infrastructure, identify rogue Access Points, and validate encryption standards.',
      action: 'Deployed custom WPA2/WPA3 penetration testing protocols using Aircrack-ng and automated reporting with Python scripts.',
      result: 'Identified 15 critical vulnerabilities and provided mitigation strategies, securing network access for over 5,000 daily users.'
    }
  },
  {
    id: 'ir-dashboard',
    title: 'Incident Response Dashboard',
    description: 'A custom SOC-style visualization tool for real-time threat monitoring and automated ticket generation based on firewall logs and suspicious traffic patterns.',
    tags: ['TypeScript', 'React', 'D3.js'],
    status: 'operational',
    star: {
      situation: 'The SOC team was manually parsing raw firewall logs, leading to slow response times for critical threats.',
      task: 'Build a unified, real-time dashboard to visualize network anomalies and automate incident ticketing.',
      action: 'Developed a React/TypeScript interface utilizing D3.js for live data mapping and integrated it with existing log aggregation APIs.',
      result: 'Reduced Mean Time to Detect (MTTD) by 40% and fully automated initial threat-level classification.'
    }
  },
  {
    id: 'linux-hardening',
    title: 'Linux Hardening Automation',
    description: 'Suite of Bash and Python scripts designed to automate CIS benchmark compliance on enterprise Linux distributions, reducing attack vectors by 60%.',
    tags: ['Bash', 'Python', 'Security'],
    status: 'auditing',
    star: {
      situation: 'Enterprise Linux servers were being deployed with default, insecure configurations, creating compliance risks.',
      task: 'Create an automated pipeline to enforce CIS benchmarks universally across all new deployments.',
      action: 'Authored a suite of modular Bash and Python scripts integrated into the CI/CD deployment pipeline to strip unnecessary services and enforce strict firewall rules.',
      result: 'Achieved 100% automated CIS compliance, reducing potential system attack vectors by 60%.'
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
