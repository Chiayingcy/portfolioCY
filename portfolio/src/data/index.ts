import type {
  Project,
  Experience,
  TradingInstrument,
  SkillGroup,
  Education,
  Course,
  NavItem,
} from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Trading', href: '#trading' },
  { label: 'Contact', href: '#contact' },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Primary stack — daily in production',
    tier: 'primary',
    skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Tailwind CSS', 'RESTful API'],
  },
  {
    label: 'Working knowledge',
    tier: 'working',
    skills: ['React', 'TypeScript', 'JavaScript', 'Maschain', 'Docker', 'Jenkins', 'HTML / CSS'],
  },
  {
    label: 'Exploring / learning',
    tier: 'exploring',
    skills: ['Node.js', 'Python', 'MQL4', 'Pine Script', 'Solana / Web3', 'Selenium'],
  },
  {
    label: 'AI tools — daily workflow',
    tier: 'ai',
    skills: ['GitHub Copilot', 'Claude', 'ChatGPT'],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'masverse',
    period: 'Apr 2024 – Present',
    company: 'Masverse Technologies Sdn. Bhd.',
    companyShort: 'Masverse · Puchong',
    role: 'Junior Full Stack Developer',
    subtitle: 'Fintech · Blockchain · Web Apps',
    bullets: [
      'Led the revamp of a legacy education platform into BlockchainCert — a blockchain-based certification system now adopted by 100+ universities nationwide',
      'Migrated legacy system from Yii to Laravel + React, improving performance and maintainability',
      'Designed and built a Canva-like certificate editor enabling customisable digital certificate creation',
      'Contributed to MyKapital, an investment platform (primary & secondary market) under SSM Interest Scheme regulations (SC & BNM)',
      'Optimised application performance to support 1000+ concurrent active users',
      'Implemented and supported CI/CD pipelines using Jenkins',
      'Participated in Agile practices — sprint planning, daily standups, cross-functional collaboration',
    ],
    tags: ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Maschain', 'Docker', 'Jenkins', 'Tailwind CSS'],
  },
  {
    id: 'trading',
    period: 'Sep 2024',
    company: 'FundingPips & AlphaCapitalGroup',
    companyShort: 'FundingPips · AlphaCapital',
    role: 'Certified Trader — Prop Evaluation',
    subtitle: 'Proprietary Trading · Risk Management',
    bullets: [
      'Passed prop trading evaluations under strict risk and drawdown constraints',
      'Applied rule-based strategies using price action, liquidity concepts, and market structure analysis',
      'Maintained consistent performance while adhering to risk limits and evaluation parameters',
      'Made data-driven decisions under pressure in fast-moving market conditions',
    ],
    tags: ['XAUUSD', 'EURUSD', 'GBPUSD', 'CFD Trading', 'Risk Management', 'Price Action'],
  },
  {
    id: 'veecotech',
    period: 'Apr 2023 – Oct 2023',
    company: 'Veecotech Solutions Sdn. Bhd.',
    companyShort: 'Veecotech',
    role: 'Web Designer',
    subtitle: 'WordPress · Frontend · UI',
    bullets: [
      'Built and customised WordPress websites based on design mockups with responsive design',
      'Enhanced website performance through layout optimisation and UI improvements',
      'Worked with project managers and clients to translate requirements into web solutions',
    ],
    tags: ['WordPress', 'HTML / CSS', 'Frontend'],
  },
  {
    id: 'infogenius',
    period: 'Jan 2021 – Apr 2021',
    company: 'Infogenius Skill Training Center',
    companyShort: 'Infogenius',
    role: 'Intern — IT Support',
    subtitle: 'Software Testing · Arduino',
    bullets: [
      'Tested new software and developed internal programs',
      'Built a "Face ID Attendance" reverse engineering project',
      'Wrote basic Arduino programs',
    ],
    tags: ['Software Testing', 'Arduino', 'IT Support'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'mykapital',
    title: 'MyKapital',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'Investment platform (primary & secondary market) under SSM Interest Scheme regulations. Handles investor onboarding, KYC/AML, bulk imports, wallet integration with Maschain, and checker-maker approval workflows.',
    highlights: [
      'Bulk investor import pipeline with dry-run mode and validation',
      'Checker-maker approval flow with full audit trail',
      'Maschain wallet integration with idempotency & exponential backoff',
      'N+1 query fixes via JOIN-based model scopes',
    ],
    tags: ['Laravel', 'Vue.js', 'Maschain', 'MySQL', 'Docker'],
  },
  {
    id: 'bcc',
    title: 'BlockchainCert (BCC)',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'Blockchain-based digital certification system adopted by 100+ universities. Includes a Canva-like certificate editor, on-chain issuance and verification. Migrated from legacy Yii to Laravel + React.',
    highlights: [
      'Canva-like certificate editor with drag-and-drop UI',
      'On-chain issuance and tamper-proof verification',
      'Yii → Laravel + React migration',
      '100+ institutions nationwide',
    ],
    tags: ['React', 'Laravel', 'Maschain', 'Blockchain'],
  },
  {
    id: 'tradebotx',
    title: 'TradeBotX',
    type: 'personal',
    category: 'Personal · MQL4',
    description:
      'Expert Advisor Bot in MetaTrader 4 that connects trading accounts via Telegram bot commands — enabling remote trade management and automation from mobile.',
    tags: ['MQL4', 'MetaTrader 4', 'Telegram Bot', 'Automation'],
  },
  {
    id: 'tv-indicators',
    title: 'TradingView Indicators',
    type: 'personal',
    category: 'Personal · Pine Script',
    description:
      'Custom Pine Script indicators for TradingView — researched and redeveloped to display various analysis functions and signals on charts.',
    tags: ['Pine Script', 'TradingView', 'Technical Analysis'],
  },
  {
    id: 'trade-journal',
    title: 'Trade Journal Bot',
    type: 'personal',
    category: 'Personal · JavaScript',
    description:
      'A Discord bot to record and log trades automatically — automates trade journaling so performance can be reviewed and patterns identified over time.',
    tags: ['JavaScript', 'Discord Bot', 'Trading'],
  },
  {
    id: 'prop-tracking',
    title: 'Prop Tracking',
    type: 'personal',
    category: 'Personal · JavaScript',
    description:
      'Tracking tool for prop firm challenge performance — monitors drawdown, consistency scores, and key metrics during evaluation phases.',
    tags: ['JavaScript', 'Dashboard', 'Prop Firm'],
  },
  {
    id: 'tg-forward',
    title: 'Telegram Forward Bot',
    type: 'personal',
    category: 'Personal · Python',
    description:
      'Python bot that forwards messages between Telegram channels — useful for signal distribution and automated message routing workflows.',
    tags: ['Python', 'Telegram API', 'Automation'],
  },
  {
    id: 'solana-blinks',
    title: 'Solana Blinks',
    type: 'personal',
    category: 'Personal · TypeScript',
    description:
      'Exploring Solana blockchain interactions — experimenting with on-chain actions and Web3 integrations as part of learning the broader Web3 ecosystem.',
    tags: ['TypeScript', 'Solana', 'Web3'],
  },
  {
    id: 'blood-bank',
    title: 'FYP — Online Blood Bank System',
    type: 'academic',
    category: 'Academic · Blade / PHP',
    description:
      'Final year project — a Laravel Blade web application for managing blood bank records, donor registration, and inventory.',
    tags: ['PHP', 'Laravel', 'Blade', 'MySQL'],
  },
  {
    id: 'bus-booking',
    title: 'Bus Online Booking System',
    type: 'academic',
    category: 'Academic · PHP',
    description: 'Diploma group project — a PHP-based bus ticket booking web application built collaboratively.',
    tags: ['PHP', 'HTML', 'CSS', 'Group Project'],
  },
]

export const TRADING_INSTRUMENTS: TradingInstrument[] = [
  {
    symbol: 'XAUUSD',
    name: 'Gold / US Dollar',
    description:
      'Primary instrument. Focused on intraday and swing setups using price action, liquidity concepts, and market structure.',
    status: 'active',
    color: 'gold',
  },
  {
    symbol: 'EURUSD',
    name: 'Euro / US Dollar',
    description:
      'Traded for diversification. High liquidity pair suited to structure-based entries during London and New York sessions.',
    status: 'active',
    color: 'blue',
  },
  {
    symbol: 'GBPUSD',
    name: 'British Pound / USD',
    description:
      'Volatile pair with strong momentum moves. Traded using the same rule-based approach focused on key levels and session timing.',
    status: 'active',
    color: 'orange',
  },
]

export const EDUCATION: Education[] = [
  {
    year: '2023',
    degree: 'Bachelor of Science (Hons) in Computer Science',
    institution: 'Coventry University / INTI International College Penang · 3+0',
    detail: 'Upper Second Class Honours',
  },
  {
    year: '2021',
    degree: 'Diploma in Information Technology',
    institution: 'INTI International College Penang',
    detail: "CGPA 3.53 / 4.00 · Distinction · Dean's List (Apr 2020 & Aug 2020)",
  },
]

export const COURSES: Course[] = [
  { date: 'Jun 2025', name: 'AI Automation with GenAI (Chatbot)', org: 'KLA Consultancy Sdn. Bhd.' },
  { date: 'Jun 2025', name: 'Kickstart Automation: Selenium with Python', org: 'Profound Source Sdn. Bhd.' },
  { date: 'Apr 2024', name: 'Exploring Web3 — Navigating the Decentralised Internet', org: 'Masverse Sdn. Bhd.' },
  { date: 'Academic', name: 'Ideal Vision Image Screening & Segregation', org: 'INTI International College Penang' },
]

export const TICKER_ITEMS = [
  'LARAVEL', 'VUE.JS', 'REACT', 'TYPESCRIPT', 'MASCHAIN', 'BLOCKCHAIN',
  'FINTECH', 'XAUUSD', 'EURUSD', 'GBPUSD', 'PROP TRADING', 'AI-NATIVE',
  'DOCKER', 'MYSQL', 'PAYMENT SYSTEMS', 'FULL STACK',
]
