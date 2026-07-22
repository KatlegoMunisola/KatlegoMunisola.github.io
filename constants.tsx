import { Project, Experience, Certification } from './types';

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
  },
  {
    id: 'bitewise',
    title: 'BiteWise — Food Allergy & IBS Management App',
    description: 'A cross-platform mobile app that helps people managing food allergies and IBS track symptoms, log meals, and catch hidden allergens before they eat.',
    tags: ['React Native', 'Mobile', 'AI/ML', 'Firebase'],
    status: 'operational',
    star: {
      situation: 'People with food allergies or IBS need to correlate what they eat with symptoms, but ingredient labels routinely hide allergens under unfamiliar names (casein for milk, tahini for sesame, albumen for egg), and there is no fast way to check a home-cooked or restaurant meal. Existing tracking apps handle logging but not allergen detection, and existing scanner apps do not connect back to a personal symptom history.',
      task: 'Build a local-first, offline-capable tool for my final year project that unifies symptom/meal logging with real allergen detection across packaged, scanned, and home-cooked food.',
      action: 'Built symptom, food, and daily-factor logging on a local-first SQLite store that syncs to Firebase when online; added a live barcode scanner that checks products against the Open Food Facts database against 14 tracked allergen categories; added an AI-powered meal-photo feature using a vision-language model (Google Gemini via a Cloudflare Workers proxy) for unpackaged or home-cooked meals, clearly labeled as an estimate; wired up Firebase Auth + Firestore for cross-device sync with graceful offline degradation; and used Firebase App Distribution for beta testing.',
      result: 'Shipped a working cross-platform beta that lets users scan, log, and photograph meals to catch hidden allergens and correlate them with symptoms, fully usable offline.'
    }
  },
  {
    id: 'vulnerability-scanner',
    title: 'Network Vulnerability Scanner',
    description: 'A Python-based tool that scans local networks and reports open ports and possible vulnerabilities, built to learn network enumeration and socket programming.',
    tags: ['Python', 'Nmap', 'Security'],
    status: 'operational'
  },
  {
    id: 'secure-portfolio',
    title: 'Secure Portfolio Website',
    description: 'This personal cybersecurity-themed portfolio site, built with React and focused on clean UI, performance, and security best practices.',
    tags: ['React', 'Security', 'UI/UX'],
    status: 'operational'
  },
  {
    id: 'public-wifi-research',
    title: 'Public WiFi Security Research',
    description: 'An ongoing research project analyzing public WiFi network security practices in Botswana, covering encryption standards, access point configuration, and risk assessment.',
    tags: ['Security', 'Research', 'Networking'],
    status: 'in-progress'
  }
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
    ],
    tags: ['Xamarin', 'CI/CD', 'Incident Response']
  },
  {
    role: 'Vice Lead',
    company: 'Google Student Developers Club',
    location: 'BIUST',
    period: 'Aug 2022 – May 2023',
    highlights: [
      'Coordinated technical workshops for 100+ students',
      'Managed cross-functional development teams'
    ],
    tags: ['Leadership', 'Community', 'Workshops']
  },
  {
    role: 'Chairman',
    company: 'Library Ambassadors Committee',
    location: 'BIUST',
    period: 'Aug 2021 – Present',
    highlights: [
      'Leading strategic library initiatives and student advocacy',
      'Overseeing committee operations and member engagement'
    ],
    tags: ['Leadership', 'Advocacy']
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Cyber Threat Management', issuer: 'Cisco' },
  { name: 'Data Science & ML Fundamentals', issuer: 'IBM / Coursera' },
  { name: 'Online Leadership Certification', issuer: 'MCW Global' }
];
