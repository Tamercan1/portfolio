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
  role: 'Building toward Software Engineering & AI.',
  lede: "I build applications that connect software, APIs, backend systems, and AI — and I enjoy exploring technology, experimenting with ideas, and building things along the way.",
  footerTagline: 'built while learning',
  year: '2026',
} as const;

// -- Nav links (label + anchor) -------------------------
export const NAV_ITEMS = [
  { label: 'Home',     href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
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
  mockupUrl: 'spacescout-app.vercel.app',
  mockupQuery: '"What are the most notable near-Earth objects and rover findings this week?"',
  mockupCards: [
    {
      title: '2024 XR3 — Close Approach Analysis',
      body: 'A near-Earth asteroid passing within 0.02 AU, analyzed with orbital telemetry and radar velocity data.',
      source: 'NASA NeoWs API • Space Plan #104',
    },
    {
      title: 'Perseverance Rover — Sol 1042 Discoveries',
      body: 'High-resolution Mastcam-Z imagery from Jezero Crater confirming deltaic sediment layering and rock core sampling targets.',
      source: 'NASA Mars Rover API • Multi-turn Chat Ready',
    },
  ],
  links: {
    app: LINKS.projects.spaceScoutV2.app,
    landing: LINKS.projects.spaceScoutV2.landing,
    github: LINKS.projects.spaceScoutV2.github,
    live: LINKS.projects.spaceScoutV2.app,
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
  links?: {
    demo?: string;
    github?: string;
  };
}

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: 'SpaceScout (v1)',
    eyebrow: 'Harvard CS50W final project',
    description:
      "The original Harvard CS50W final project that established the foundation for SpaceScout's AI-powered NASA data exploration experience.",
    stack: ['React', 'TypeScript', 'Django', 'DRF', 'JWT auth', 'NASA APIs', 'LLM'],
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
    links: {
      demo: LINKS.projects.maiFriend.demo,
      github: LINKS.projects.maiFriend.github,
    },
  },
  {
    title: 'CSE Reviewer',
    eyebrow: 'Mobile-first exam prep app',
    description:
      'A lightweight exam preparation web application designed around practice quizzes, progress tracking, and daily study.',
    stack: ['JavaScript', 'Tailwind CSS', 'LocalStorage'],
    links: {
      demo: LINKS.projects.cseReviewer.demo,
      github: LINKS.projects.cseReviewer.github,
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

// -- About section --------------------------------------
export const ABOUT = {
  paragraphs: [
    "I'm a <strong>Computer Science student</strong> interested in software engineering and AI application development. I like building things and learning by actually implementing them -- from frontend interfaces to backend APIs, databases, and AI-powered features.",
    "I’m interested in the systems behind the interface — how APIs, databases, backend services, and AI components come together to make an application work.",
  ],
  focus: [
    'Backend engineering',
    'Databases',
    'Software architecture',
    'AI application development',
  ],
} as const;

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
    { label: 'GitHub',   href: LINKS.github,              variant: 'primary' as const },
    { label: 'LinkedIn', href: LINKS.linkedin,            variant: 'ghost'   as const },
    { label: 'Email',    href: `mailto:${LINKS.email}`, variant: 'ghost'   as const },
  ],
} as const;
