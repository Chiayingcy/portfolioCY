# claws · Portfolio

Personal portfolio of Chia Ying Ooi (claws) — Full Stack Developer.

Built with **React 18 + TypeScript + Tailwind CSS + shadcn/ui patterns + Motion**.

## Stack

- **React 18** + **TypeScript** — strict mode
- **Tailwind CSS** — utility-first styling with custom design tokens
- **shadcn/ui** patterns — Badge, Separator (class-variance-authority based)
- **Motion** (Framer Motion v11) — ready to use for page transitions
- **Vite** — fast dev server and build
- **DM Sans** + **Playfair Display** + **DM Mono** — font trio

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Static assets (images, icons, fonts)
│   │
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (shadcn-style)
│   │   │   ├── Badge.tsx        — variant badge component
│   │   │   ├── FadeUp.tsx       — scroll-triggered fade animation
│   │   │   ├── IdentityCard.tsx — CY initials card (replaces avatar)
│   │   │   ├── SectionHeader.tsx— consistent section headings
│   │   │   └── Separator.tsx    — horizontal/vertical divider
│   │   │
│   │   ├── layout/          # Page-level layout components
│   │   │   ├── Navbar.tsx       — sticky navigation
│   │   │   └── Footer.tsx       — page footer
│   │   │
│   │   └── sections/        # Full page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── TradingSection.tsx
│   │       ├── EducationSection.tsx
│   │       └── ContactSection.tsx
│   │
│   ├── data/
│   │   └── index.ts         # All portfolio content in one place
│   │
│   ├── hooks/
│   │   └── useInView.ts     # IntersectionObserver scroll hook
│   │
│   ├── lib/
│   │   └── utils.ts         # cn() utility (clsx + tailwind-merge)
│   │
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   │
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + Tailwind directives
│
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── postcss.config.js
```

## Customisation

All portfolio content lives in **`src/data/index.ts`** — update your projects, experience, skills, and trading instruments there without touching component code.

Design tokens live in **`tailwind.config.ts`** — colours, fonts, and animations.

## Deploying

```bash
npm run build
# dist/ folder is ready to deploy to Vercel, Netlify, or any static host
```

For **Vercel**: connect repo → auto-detects Vite → done.
