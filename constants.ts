
import { Course, BankDetails, ContactInfo } from './types';

export const COURSES: Course[] = [
  {
    id: 'web-dev-react',
    title: 'Modern Web Development with React',
    description: 'Master the art of building scalable, high-performance web applications using React 18+, TypeScript, and modern ecosystem tools.',
    instructor: 'Lead Engineering Team',
    duration: '12 Weeks',
    schedule: 'Saturday & Sunday (2 Hours/Day)',
    fee: 'PKR 1,000',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'office-mastery',
    title: 'Word, Excel, & Power Point Mastery',
    description: 'Go from beginner to power user. Optimize your workflow with advanced spreadsheet functions, professional documents, and high-impact presentations.',
    instructor: 'Productivity Experts',
    duration: '12 Weeks',
    schedule: 'Saturday & Sunday (2 Hours/Day)',
    fee: 'PKR 1,000',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business-comm',
    title: 'Master in Business Communication',
    description: 'Elevate your professional presence. Learn strategic communication, persuasive writing, and leadership-grade public speaking skills.',
    instructor: 'Corporate Communications Lead',
    duration: '12 Weeks',
    schedule: 'Saturday & Sunday (2 Hours/Day)',
    fee: 'PKR 1,000',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'green-economy',
    title: 'Green Economy & Sustainability',
    description: 'Understand the future of global industry. Explore sustainable development goals, carbon footprints, and environmental management systems.',
    instructor: 'Sustainability Consultants',
    duration: '12 Weeks',
    schedule: 'Saturday & Sunday (2 Hours/Day)',
    fee: 'PKR 1,000',
    icon: '🌿',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  }
];

export const BANK_DETAILS: BankDetails = {
  bankName: 'Faysal Bank Limited',
  accountTitle: 'Skill Up Online (Private) Limited',
  iban: 'PK29FAYS3398787000006017'
};

export const CONTACT: ContactInfo = {
  whatsapp: '+923100441444',
  email: 'info@skilluponline.online',
  website: 'www.skilluponline.online',
  facebook: 'https://www.facebook.com/SkillUpOnlineBahawalpur/',
  linkedin: 'https://www.linkedin.com/company/skill-up-online'
};
