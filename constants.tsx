import { Project, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'bitewise',
    title: 'BiteWise — Food Allergy & IBS Management App',
    description: 'A local-first food and symptom tracker that brings allergen checks and AI meal-photo analysis together. Android beta.',
    tags: ['React Native', 'TypeScript', 'SQLite', 'Firebase'],
    status: 'operational',
    star: {
      situation: 'People managing food allergies and IBS need to connect meals with symptoms and check foods before they eat.',
      task: 'Build a mobile tool that supports food and symptom logging, allergen scanning, and meal-photo analysis.',
      action: 'Built a React Native app with local SQLite logging synced to Firestore, Firebase Authentication, barcode scanning, and AI meal-photo analysis.',
      result: 'Delivered an Android beta combining offline-capable logging with barcode and photo-based food checks.'
    }
  },
  {
    id: 'atm-scout',
    title: 'ATM Scout',
    description: 'A crowdsourced map of ATM cash availability in Botswana. Reports are geofenced to help block remote false reports.',
    tags: ['Flutter', 'Supabase', 'Mapbox', 'Geolocation'],
    status: 'operational'
  },
  {
    id: 'phishblock',
    title: 'PhishBlock',
    description: 'A personal JavaScript cybersecurity project that helps users spot phishing, started after a BIUST ICT alert about rising Office 365 phishing emails.',
    tags: ['JavaScript', 'Cybersecurity', 'Phishing Defence'],
    status: 'operational'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Founder',
    company: 'Ponalo Digital',
    location: 'Gaborone',
    period: '2026 – Present',
    highlights: [
      'Building apps and websites for small and medium businesses.',
      'Developing a WhatsApp-based lead and payment management tool for Botswana SMEs.',
      'Selected for the MASA Innovation Program 2026/27, Cohort 1, with the mobile payments and customer messaging product.'
    ],
    tags: ['Product Development', 'SME Tools', 'Mobile Payments']
  },
  {
    role: 'DevOps Intern',
    company: 'Botswana Telecommunications Corporation (BTC)',
    location: 'Gaborone',
    period: 'Jun – Jul 2023',
    highlights: [
      'Designed and developed a website with a mentor to digitise the SIM registration process.',
      'Led the BOCRA API integration for the SIM registration project.',
      'Helped implement CI/CD pipelines and improve deployment processes.',
      'Improved the PASELA experience in the BTC mobile app.',
      'Researched DevOps tools with a fintech focus and helped automate routine tasks.',
      'Reviewed project repositories and recommended branch protection rules for an unprotected main branch.',
      'Documented ongoing projects and open tasks for handover.'
    ],
    tags: ['CI/CD', 'API Integration', 'DevOps', 'Xamarin']
  }
];

export const EDUCATION = {
  degree: 'BSc Computer Science and Software Engineering',
  institution: 'Botswana International University of Science and Technology (BIUST)',
  location: 'Palapye, Botswana',
  period: 'Graduated Sep 2026'
};

export const ACTIVITIES = [
  'Vice Lead, Google Developer Student Club (GDSC) BIUST · 2023/24',
  'Chairperson, Library Ambassadors · 2023/24',
  'Class Representative, BSc Computer Science and Software Engineering · 2020–2024',
  'Member, BIUST Innovation Club · 2023/24'
];

export const SKILL_GROUPS = [
  { label: 'Software & mobile', skills: 'Python, C++, React, React Native, Flutter, Xamarin' },
  { label: 'DevOps & delivery', skills: 'CI/CD, deployment processes, Git, GitHub workflows, Docker, API integration' },
  { label: 'Networking & security', skills: 'Cisco Networking Academy: Endpoint Security and Introduction to IoT; phishing defence' },
  { label: 'Data & integration', skills: 'MySQL, SQLite, Firestore, Firebase Authentication' },
  { label: 'Business', skills: 'Microsoft Excel, PowerPoint and Word; written and verbal communication' }
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Cyber Security Consulting Job Simulation', issuer: 'PwC US · Forage', date: 'Oct 2026' },
  { name: 'Aspire Leaders Program', issuer: 'Aspire Institute', date: '2025' },
  { name: 'Online Leadership Course', issuer: 'MCW Global', date: 'Nov 2024' },
  { name: 'Endpoint Security', issuer: 'Cisco Networking Academy' },
  { name: 'Introduction to IoT', issuer: 'Cisco Networking Academy' },
  { name: 'CompTIA Security+', issuer: 'In progress' }
];
