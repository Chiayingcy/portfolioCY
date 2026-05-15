import type {
  Project,
  Experience,
  TradingInstrument,
  SkillGroup,
  Education,
  Course,
  NavItem,
  ImpactMetric,
  HiringSignal,
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
    label: 'What I use every day',
    tier: 'primary',
    skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Tailwind CSS', 'RESTful API'],
  },
  {
    label: 'Comfortable with',
    tier: 'working',
    skills: ['React', 'TypeScript', 'JavaScript', 'Maschain', 'Docker', 'Jenkins', 'HTML / CSS'],
  },
  {
    label: 'Currently learning',
    tier: 'exploring',
    skills: ['Node.js', 'Python', 'MQL4', 'Pine Script', 'Solana / Web3', 'Selenium'],
  },
  {
    label: 'AI tools in my workflow',
    tier: 'ai',
    skills: [
      'GitHub Copilot',
      'ChatGPT',
      'Claude',
      'Google Gemini',
      'Perplexity',
      'Cursor',
      'v0',
      'Bolt.new',
    ],
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
      'Led the rebuild of a university certification system into BlockchainCert — now used by 100+ universities nationwide',
      'Upgraded a legacy codebase to a modern Laravel + React stack, making it faster and easier to maintain',
      'Built a drag-and-drop certificate editor (like Canva) for designing and issuing digital certificates',
      'Worked on MyKapital, a regulated investment platform handling real investor accounts and approval workflows',
      'Tuned app performance to handle 1000+ users at the same time without slowdowns',
      'Set up and maintained automated deployment pipelines for consistent, low-risk releases',
      'Worked in an Agile team — daily standups, sprint planning, and close collaboration across functions',
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
      'Passed professional trading evaluations with strict rules on risk and maximum allowed loss',
      'Used a rule-based approach — no guessing, just reading chart patterns and key price levels',
      'Stayed disciplined under pressure and kept results consistent across different market conditions',
      'Made quick decisions based on data, not emotion — a habit that carries into how I build software',
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
      'A regulated investment platform where real investors buy and sell securities. I worked on onboarding, identity verification, bulk data handling, blockchain wallet integration, and multi-step approval processes.',
    highlights: [
      'Bulk investor import with validation and a safe preview mode before committing changes',
      'Multi-step approval workflow with a full audit trail for every action taken',
      'Blockchain wallet integration built to handle failures gracefully and retry reliably',
      'Database performance fixes that cut query load significantly on busy pages',
    ],
    outcomes: [
      'Platform handles 1000+ users at the same time without slowdowns',
      'Fewer data errors thanks to structured approval and verification flows',
      'More confident deployments — wallet jobs retry cleanly and never double-process',
    ],
    architecture: [
      'Laravel service modules with background job queues for wallet processing',
      'State machine for multi-step approvals with traceability at every step',
      'MySQL queries optimised with proper joins and indexes on high-traffic pages',
    ],
    tags: ['Laravel', 'Vue.js', 'Maschain', 'MySQL', 'Docker'],
    link: 'https://mykapital.my/',
  },
  {
    id: 'bcc',
    title: 'BlockchainCert (BCC)',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'A blockchain-powered certificate system used by 100+ universities to issue and verify digital certificates. I helped rebuild it from the ground up — new drag-and-drop editor, modern codebase, and on-chain verification.',
    highlights: [
      'Drag-and-drop certificate editor so staff can design templates without touching code',
      'Certificates stored on blockchain — tamper-proof and publicly verifiable',
      'Full codebase migration to a cleaner, modern stack (Laravel + React)',
      'Rolled out to 100+ institutions nationwide',
    ],
    outcomes: [
      'Over 100 universities now issue verifiable digital certificates through the platform',
      'Modernised a slow, hard-to-maintain codebase into something the team can move fast with',
      'Staff spend less time on manual certificate work — most of it is automated now',
    ],
    architecture: [
      'React editor with reusable drag-and-resize components',
      'Laravel API handling issuance, verification, and role-based access',
      'Blockchain hash verification so any certificate can be independently checked',
    ],
    tags: ['React', 'Laravel', 'Maschain', 'Blockchain'],
    link: 'https://www.blockchaincert.my/',
  },
  {
    id: 'tradebotx',
    title: 'TradeBotX',
    type: 'personal',
    category: 'Personal · MQL4',
    description:
      'Expert Advisor Bot in MetaTrader 4 that connects trading accounts via Telegram bot commands — enabling remote trade management and automation from mobile.',
    tags: ['MQL4', 'MetaTrader 4', 'Telegram Bot', 'Automation'],
    github: 'https://github.com/Chiayingcy/TradeBotX',
  },
  {
    id: 'tv-indicators',
    title: 'TradingView Indicators',
    type: 'personal',
    category: 'Personal · Pine Script',
    description:
      'Custom Pine Script indicators for TradingView — researched and redeveloped to display various analysis functions and signals on charts.',
    tags: ['Pine Script', 'TradingView', 'Technical Analysis'],
    github: 'https://github.com/Chiayingcy/TradingView-indicators',
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
    github: 'https://github.com/Chiayingcy/Solana-Blinks',
  },
  {
    id: 'blood-bank',
    title: 'FYP — Online Blood Bank System',
    type: 'academic',
    category: 'Academic · Blade / PHP',
    description:
      'Final year project — a Laravel Blade web application for managing blood bank records, donor registration, and inventory.',
    tags: ['PHP', 'Laravel', 'Blade', 'MySQL'],
    github: 'https://github.com/Chiayingcy/fyp-OnlineBloodBankSystem',
  },
  {
    id: 'bus-booking',
    title: 'Bus Online Booking System',
    type: 'academic',
    category: 'Academic · PHP',
    description: 'Diploma group project — a PHP-based bus ticket booking web application built collaboratively.',
    tags: ['PHP', 'HTML', 'CSS', 'Group Project'],
    github: 'https://github.com/Chiayingcy/Bus-Online-Booking-System',
  },
]

export const TRADING_INSTRUMENTS: TradingInstrument[] = [
  {
    symbol: 'XAUUSD',
    name: 'Gold / US Dollar',
    description:
      'My main market. I trade both short-term and multi-day setups, reading chart patterns and key price levels to find entries.',
    status: 'active',
    role: 'Primary',
    color: 'gold',
  },
  {
    symbol: 'EURUSD',
    name: 'Euro / US Dollar',
    description:
      'High volume and very liquid — great for clean setups during peak trading hours in London and New York.',
    status: 'active',
    role: 'Secondary',
    color: 'blue',
  },
  {
    symbol: 'GBPUSD',
    name: 'British Pound / USD',
    description:
      'Moves fast with big swings. I trade it selectively when the setup is clear and the timing is right.',
    status: 'active',
    role: 'Secondary',
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

export const IMPACT_METRICS: ImpactMetric[] = [
  { label: 'Current role', value: 'Full Stack Developer', note: 'Fintech and blockchain products in production' },
  { label: 'Real-world reach', value: '100+ Universities', note: 'Institutions using BlockchainCert today' },
  { label: 'Scale handled', value: '1000+ Users', note: 'Concurrent users supported without issues' },
  { label: 'Main stack', value: 'Laravel · Vue · React', note: 'Shipped production code across all three' },
]

export const HIRING_SIGNALS: HiringSignal[] = [
  {
    title: 'How I work with teams',
    points: [
      'Shipped real products that are live and used by real people',
      'Good fit for fintech, payments, or any product where accuracy and trust matter',
      'Comfortable in Agile teams — I communicate early and collaborate across functions',
    ],
  },
  {
    title: 'What I bring technically',
    points: [
      'Rebuilt a full legacy system while keeping everything running — no big-bang rewrites',
      'Handles failure gracefully — retries, safe defaults, and audit trails built in',
      'Writes code that teammates can read, extend, and maintain without asking me',
    ],
  },
]
