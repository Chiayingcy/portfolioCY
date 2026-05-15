export interface Project {
  id: string
  title: string
  type: 'work' | 'personal' | 'academic'
  category: string
  description: string
  highlights?: string[]
  tags: string[]
  link?: string
}

export interface Experience {
  id: string
  period: string
  company: string
  companyShort: string
  role: string
  subtitle: string
  bullets: string[]
  tags: string[]
}

export interface TradingInstrument {
  symbol: string
  name: string
  description: string
  status: 'active' | 'learning'
  color: 'gold' | 'blue' | 'orange'
}

export interface SkillGroup {
  label: string
  tier: 'primary' | 'working' | 'exploring' | 'ai'
  skills: string[]
}

export interface Education {
  year: string
  degree: string
  institution: string
  detail: string
}

export interface Course {
  date: string
  name: string
  org: string
}

export type NavItem = {
  label: string
  href: string
}
