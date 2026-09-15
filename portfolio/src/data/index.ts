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
      'Led the revamp of a legacy education platform into BlockchainCert — a blockchain-based certification system now adopted by 100+ universities nationwide',
      'Migrated the legacy Yii system to a modern Laravel + React stack, improving performance, maintainability, and scalability',
      'Designed and built a Canva-style certificate editor, enabling customizable digital certificate creation',
      'Contributed to MyKapital, an investment platform covering primary and secondary markets under SC & BNM-regulated schemes',
      'Optimized application performance to support 1,000+ concurrent active users',
      'Ensured seamless front-end and back-end integration, reducing system errors and improving reliability',
      'Implemented and supported CI/CD pipelines using Jenkins, reducing manual deployment effort',
      'Participated in Agile practices — sprint planning, daily stand-ups, and cross-functional collaboration',
    ],
    tags: ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Maschain', 'Docker', 'Jenkins', 'Tailwind CSS'],
  },
  {
    id: 'ujilari',
    period: 'Mar 2026 – May 2026',
    company: 'Ujilari Studio',
    companyShort: 'Ujilari Studio · Remote',
    role: 'Full Stack Developer, Part Time',
    subtitle: 'Remote · Short-Term Contract',
    bullets: [
      'Provided IT support and troubleshooting for internal systems',
      'Assisted with system administration and maintenance',
      'Handled minor system configuration and improvements',
      'Provided development support and coding tasks for PruBSN Takaful Crowd and REDI',
    ],
    tags: ['IT Support', 'System Administration', 'Troubleshooting', 'Development Support'],
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
  {
    id: 'zeppy',
    period: 'Dec 2019 – Mar 2020',
    company: 'Zeppy Sdn. Bhd.',
    companyShort: 'Zeppy',
    role: 'Part-Time E-Commerce Coordinator',
    subtitle: 'E-Commerce · Shopee Operations',
    bullets: [
      'Managed Shopee order processing and coordination',
      'Designed product photos for online listings',
      'Researched and translated product descriptions into English',
    ],
    tags: ['E-Commerce', 'Shopee', 'Product Content'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'blockchaincert',
    title: 'BlockchainCert',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'A blockchain-based certification system adopted by 100+ universities. Migrated the legacy Yii system to Laravel and React, built a customizable certificate editor, and optimized the system to support 1,000+ concurrent users.',
    highlights: [
      'Migrated the legacy Yii system to a modern Laravel + React stack',
      'Built a drag-and-drop certificate editor for customizable digital certificate design',
      'Implemented blockchain-based certificate verification for tamper-proof, publicly verifiable credentials',
      'Optimized the platform to support 1,000+ concurrent users',
    ],
    outcomes: [
      'Adopted by 100+ universities',
      'Supports 1,000+ concurrent users',
    ],
    architecture: [
      'React-based editor with reusable drag-and-resize components',
      'Laravel API handling certificate issuance, verification, and role-based access',
      'Blockchain hash verification for independent certificate authenticity checks',
    ],
    tags: ['Laravel', 'React', 'Yii', 'Maschain', 'Blockchain'],
    link: 'https://www.blockchaincert.my/',
    images: [
      { src: '/projects/BlockchainCert/organisation-dashboard.png', alt: 'BlockchainCert organisation dashboard' },
      { src: '/projects/BlockchainCert/template-designer.png', alt: 'BlockchainCert certificate template designer' },
      { src: '/projects/BlockchainCert/cert.png', alt: 'BlockchainCert issued certificate detail view' },
    ],
  },
  {
    id: 'maschain',
    title: 'MasChain',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'Blockchain infrastructure integrated across Masverse products for wallet management and on-chain verification, used within BlockchainCert and MyKapital.',
    highlights: [
      'Maintained and debugged the services layer to keep wallet and verification flows stable',
      'Improved UI usability and consistency across MasChain-integrated screens',
    ],
    tags: ['Maschain', 'Blockchain'],
    link: 'https://maschain.com/',
  },
  {
    id: 'mykapital',
    title: 'MyKapital',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'An investment platform involving primary and secondary markets. I contributed to onboarding, identity verification, bulk data handling, blockchain wallet integration, and multi-step approval processes.',
    highlights: [
      'Built bulk investor import with validation and a safe preview before committing changes',
      'Contributed to multi-step approval workflows with an audit trail for each action',
      'Integrated blockchain wallet processing with failure handling and reliable retries',
      'Optimized database queries on high-traffic pages',
    ],
    outcomes: [
      'Supported a platform handling 1,000+ users concurrently',
      'Reduced data errors through structured approval and verification flows',
    ],
    architecture: [
      'Laravel service modules with background job queues for wallet processing',
      'MySQL queries optimized with joins and indexes on high-traffic pages',
    ],
    tags: ['Laravel', 'Vue.js', 'Maschain', 'MySQL', 'Docker'],
    link: 'https://mykapital.my/',
    images: [
      { src: '/projects/MyKapital/dashboard.png', alt: 'MyKapital admin dashboard' },
      { src: '/projects/MyKapital/scheme.png', alt: 'MyKapital scheme management' },
      { src: '/projects/MyKapital/interest-payout.png', alt: 'MyKapital interest payout module' },
    ],
  },
  {
    id: 'agent-system',
    title: 'Agent System',
    type: 'work',
    category: 'Work · Masverse',
    description:
      'A platform for creating products and agents, with configurable commission levels across an agent hierarchy. Agents can request payouts and track their sales within the system.',
    highlights: [
      "Built an API to retrieve an agent's related products by agent key",
      "Integrated the API into MyKapital to call each agent's related agent list",
      'Enabled admins to configure different discount rates per agent within the scheme',
    ],
    tags: [],
    link: 'https://agentsystem.io',
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
    link: 'https://prop.claws27.xyz/view',
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
    institution: 'Coventry University / INTI International College Penang',
    detail: 'Upper Second Class',
  },
  {
    year: '2021',
    degree: 'Diploma in Information Technology',
    institution: 'INTI International College Penang',
    detail: "CGPA 3.53 / 4.00 · Distinction · Dean's List (Apr 2020 & Aug 2020)",
  },
]

export const CERTIFICATES: Course[] = [
  { date: 'Jun 2025', name: 'AI Automation with Gen-AI Chatbot', org: 'KLA Consultancy Sdn. Bhd.' },
  { date: 'Jun 2025', name: 'Kickstart Automation: Selenium with Python', org: 'Profound Source Sdn. Bhd.' },
  { date: 'Apr 2024', name: 'Exploring Web 3: Understanding and Navigating the Decentralised Future of the Internet', org: 'Masverse Sdn. Bhd.' },
  { date: 'Academic', name: 'Ideal Vision Image Screening and Segregation Project', org: 'INTI International College Penang' },
  { date: 'Sep 2024', name: 'Proprietary Trading Evaluation — Certified Trader', org: 'FundingPips & AlphaCapitalGroup' },
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
