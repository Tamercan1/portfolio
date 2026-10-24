import { LINKS } from './links';

/**
 * =======================================================
 *  PORTFOLIO CONFIG
 *  This is the single file you edit to update your
 *  portfolio content: text, projects, about, learning.
 * =======================================================
 */

// -- Identity -------------------------------------------
export const IDENTITY = {
  name: 'Tamercan Wawa',
  fullName: 'Datu Tamer-Can Wawa',
  title: 'Computer Science student',
  role: 'Software Engineering & AI.',
  lede: [
    "I'm a Computer Science student working toward software engineering and AI engineering. I learn by building real projects, experimenting with different technologies, and figuring out how things work under the hood — from frontend interfaces and backend systems to APIs, databases, and AI integrations.",
    "I enjoy building and experimenting with ideas. Whether I'm building an AI-powered application, creating tools to help students prepare for exams, or experimenting with different technologies. I focus on understanding the systems behind what I build, not just getting them to work.",
    "Today, I'm focused on strengthening my foundations in software engineering and AI, building more meaningful projects, and preparing for opportunities where I can learn from experienced engineers, contribute to real products, and keep growing as a developer.",
  ],
  footerTagline: 'built while learning',
  year: '2026',
} as const;

// -- Availability & Connect Badge -----------------------
export const AVAILABILITY = {
  status: 'Open for projects',
  badgeAction: "LET'S CONNECT",
  email: 'wawatamercan@gmail.com',
  timezone: 'PHT (UTC+8)',
  responseTime: '< 24 hours',
  modal: {
    heading: "Let's connect",
    subheading:
      "I'm currently available for software engineering projects, AI engineering collaborations, and internships. Let's discuss your ideas or upcoming opportunities.",
    emailSubject: "Let's Connect — Project / Opportunity",
    emailBody: `Hi Tamercan,

I saw your portfolio and would like to reach out regarding:

• Topic / Opportunity: 
• Scope & Timeline: 

Looking forward to connecting!

Best regards,`,
  },
} as const;

// -- Nav links (label + anchor) -------------------------
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
] as const;

// -- Featured project -----------------------------------
export const FEATURED_PROJECT = {
  eyebrow: 'Full-stack AI space exploration',
  title: 'SpaceScout v2 — AI-Powered Space Exploration',
  description:
    'An AI-powered space exploration platform that turns natural-language questions into structured NASA data discoveries. Explore persistent space plans, browse discoveries, and continue exploring through conversational interactions.',
  stack: [
    'React',
    'TypeScript',
    'Django',
    'DRF',
    'OpenRouter',
    'NASA APIs',
    'BYOK Support',
    'Persistent Plans',
  ],
  flow: [
    'Natural-language query',
    'OpenRouter AI planner',
    'NASA API tool calls',
    'Structured discoveries & persistent plans',
    'Conversational deep-dive',
  ],
  challenge:
    'Architecting reliable LLM tool-calling workflows across multiple NASA APIs, enforcing strict structured JSON schemas for discoveries, and maintaining persistent space plans with interactive conversational context.',
  links: {
    app: LINKS.projects.spaceScoutV2.app,
    landing: LINKS.projects.spaceScoutV2.landing,
    github: LINKS.projects.spaceScoutV2.github,
    live: LINKS.projects.spaceScoutV2.app,
  },
  screenshots: {
    desktop: '/screenshots/spacescout-v2-desktop.png',
    mobile: '/screenshots/spacescout-v2-mobile.jpg',
  },
} as const;

// -- Other projects -------------------------------------
export type ProjectStatus = 'active' | 'inactive' | 'muted';

export interface OtherProject {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  status?: string;
  statusVariant?: ProjectStatus;
  screenshots?: {
    desktop?: string;
    mobile?: string;
  };
  links?: {
    demo?: string;
    github?: string;
  };
}

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: 'CSE Reviewer',
    eyebrow: 'Civil Service Exam prep',
    description:
      'A lightweight Civil Service Examination review platform that has helped 1,000+ users prepare through practice quizzes, timed mock exams, and daily vocabulary drills.',
    stack: ['JavaScript', 'Tailwind CSS', 'LocalStorage'],
    screenshots: {
      desktop: '/screenshots/kacsereviewer-desktop.png',
      mobile: '/screenshots/kacsereviewer-mobile.jpg',
    },
    links: {
      demo: LINKS.projects.cseReviewer.demo,
      github: LINKS.projects.cseReviewer.github,
    },
  },
  {
    title: 'SpaceScout (v1)',
    eyebrow: 'Harvard CS50W final project',
    description:
      "The original Harvard CS50W final project that established the foundation for SpaceScout's AI-powered NASA data exploration experience.",
    stack: ['React', 'TypeScript', 'Django', 'DRF', 'JWT auth', 'NASA APIs', 'LLM'],
    screenshots: {
      desktop: '/screenshots/spacescout-v1-desktop.png',
    },
    links: {
      demo: LINKS.projects.spaceScout.demo,
      github: LINKS.projects.spaceScout.github,
    },
  },
  {
    title: 'mAI Friend',
    eyebrow: 'CS50P final project',
    description:
      'An adaptive AI companion that uses persistent memory, personas, and conversation context to create more personalized interactions.',
    stack: ['Python', 'Google GenAI SDK', 'Prompt engineering', 'JSON memory'],
    screenshots: {
      desktop: '/screenshots/maifriend-desktop.png',
    },
    links: {
      demo: LINKS.projects.maiFriend.demo,
      github: LINKS.projects.maiFriend.github,
    },
  },
  {
    title: 'StudyVault',
    eyebrow: 'AI engineering -- planning stage',
    description:
      'A document-based AI knowledge assistant -- upload documents, ask questions, get answers grounded in what you uploaded.',
    stack: ['FastAPI', 'PostgreSQL', 'Embeddings', 'RAG', 'Docker'],
    status: 'In progress',
    statusVariant: 'muted',
  },
];

// -- Stack section --------------------------------------
export interface StackCategory {
  title: string;
  description: string;
  items: string[];
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    title: 'Languages',
    description: "The languages I use to build projects, backend services, and solve problems.",
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    description: 'Building responsive interfaces and interactive web applications.',
    items: ['React', 'Next JS', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & APIs',
    description: 'Server-side logic, REST APIs, authentication, and application architecture.',
    items: ['Django', 'Django REST Framework', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'AI Engineering',
    description: 'Integrating language models and external data into useful applications.',
    items: ['OpenRouter', 'Google GenAI SDK', 'LLM Integration', 'Prompt Engineering', 'Tool Calling'],
  },
  {
    title: 'Databases & Data',
    description: 'Storing, querying, and managing application data.',
    items: ['PostgreSQL', 'SQLite', 'LocalStorage'],
  },
  {
    title: 'Tools & Deployment',
    description: 'Version control, development workflows, and deploying applications.',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Netlify', 'NASA APIs'],
  },
  {
    title: 'HardWare & Embedded Systems',
    description: 'Microcontroller programming, sensor integrations, and hardware prototyping',
    items: ['Arduino', 'ESP32', 'Sensors & Actuators', 'Embedded C/C++', 'Prototyping'],
  },
];

// -- Currently learning ---------------------------------
export const LEARNING = {
  subtitle: "Areas I'm actively building skill in right now",
  items: [
    'Backend engineering',
    'PostgreSQL',
    'FastAPI',
    'Testing',
    'Docker',
    'RAG',
    'Embeddings',
    'Tool calling',
    'AI application architecture',
  ],
} as const;

// -- Contact section ------------------------------------
export const CONTACT = {
  heading: "Studying, building, and looking for the next thing to learn.",
  subtitle: "Open to software engineering and AI-related internships and conversations. The fastest way to reach me is GitHub or email.",
  links: [
    { label: 'GitHub', href: LINKS.github, variant: 'primary' as const },
    { label: 'LinkedIn', href: LINKS.linkedin, variant: 'ghost' as const },
    { label: 'Email', href: `mailto:${LINKS.email}`, variant: 'ghost' as const },
  ],
} as const;
