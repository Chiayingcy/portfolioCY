import React from 'react'
import { IdentityCard } from '@/components/ui/IdentityCard'
import { Badge } from '@/components/ui/Badge'
import { SKILL_GROUPS, TICKER_ITEMS } from '@/data'

const STACK_TAGS = [
  { label: 'Laravel', v: 'accent' as const },
  { label: 'Vue.js', v: 'accent' as const },
  { label: 'React', v: 'blue' as const },
  { label: 'PHP', v: 'accent' as const },
  { label: 'Maschain', v: 'accent' as const },
  { label: 'XAUUSD', v: 'gold' as const },
  { label: 'EURUSD', v: 'gold' as const },
  { label: 'GBPUSD', v: 'gold' as const },
  { label: 'Docker', v: 'default' as const },
  { label: 'MySQL', v: 'default' as const },
  { label: 'Tailwind CSS', v: 'default' as const },
]

const SKILL_ITEMS = SKILL_GROUPS.flatMap((group) => group.skills.map((skill) => skill.toUpperCase()))
const tickerItems = Array.from(new Set([...TICKER_ITEMS, ...SKILL_ITEMS]))
const doubled = [...tickerItems, ...tickerItems]

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col pt-24 md:pt-28">
      <div className="container-shell flex flex-1 items-end pb-12 md:pb-14">
        <div className="glass-card grid w-full items-center gap-10 p-6 md:grid-cols-[1fr_auto] md:p-10">
          <div className="reveal">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="chip">Full Stack Developer</span>
              <span className="chip">Puchong, Selangor, MY</span>
              <span className="chip border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">Open to Opportunities</span>
            </div>

            <h1 className="mb-5 font-display text-[clamp(2.6rem,8vw,6.2rem)] font-semibold leading-[0.9] tracking-tight text-ink">
              Chia Ying
              <span className="block text-accent">Ooi</span>
            </h1>

            <p className="text-balance mb-7 max-w-[620px] text-base leading-relaxed text-ink2 md:text-lg">
              I build <strong className="font-semibold text-ink">fintech and blockchain products</strong> that real users depend on — from investment platforms to blockchain-verified certificates.
              I code in Laravel, Vue, and React, and I bring a trader's mindset to how I think about risk, data, and edge cases.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent dark:bg-accent dark:hover:bg-accent-light"
              >
                Let's Collaborate
              </a>
              <a
                href="#projects"
                className="rounded-full border border-ink/20 bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/20 dark:hover:border-accent/50"
              >
                See Project Highlights
              </a>
              <a
                href="mailto:claws2627@gmail.com"
                className="rounded-full border border-ink/20 bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/35 dark:bg-surface/25 dark:border-ink/20"
              >
                Email Me
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {STACK_TAGS.map((t) => (
                <Badge key={t.label} variant={t.v}>{t.label}</Badge>
              ))}
            </div>
          </div>

          <div className="mx-auto md:mx-0">
            <IdentityCard />
          </div>
        </div>
      </div>

      <div className="ticker-wrap section-topline border-b border-ink/10 py-3 overflow-hidden">
        <div
          className="ticker-track flex w-max gap-12 whitespace-nowrap animate-ticker will-change-transform [animation-duration:44s]"
        >
          {doubled.map((item, i) => (
            <span key={i} className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
              <span className="mr-12 text-accent">·</span>{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
