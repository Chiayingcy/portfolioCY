import React from 'react'
import { IdentityCard } from '@/components/ui/IdentityCard'
import { Badge } from '@/components/ui/Badge'
import { TICKER_ITEMS } from '@/data'

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

const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* main content */}
      <div className="flex-1 flex items-end max-w-[1100px] mx-auto w-full px-12 pt-[110px] pb-12 border-b border-ink/18">
        <div className="grid grid-cols-[1fr_auto] gap-12 w-full items-end">

          {/* left */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-6">
              <span className="text-muted-2">——</span>
              Full Stack Developer · Puchong, Selangor, MY
            </div>

            <h1 className="font-display font-black text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-ink mb-6">
              Chia<br />
              Ying{' '}
              <em className="font-display italic font-normal text-accent">Ooi</em>
            </h1>

            <p className="text-base text-ink-2 max-w-[520px] leading-relaxed mb-8 font-light">
              I build <strong className="font-medium text-ink">fintech platforms and blockchain systems</strong> at Masverse —
              working across Laravel backends, Vue.js and React frontends, and Maschain integrations.
              Outside of code, I trade <strong className="font-medium text-ink">XAUUSD, EURUSD & GBPUSD</strong> and
              run prop firm evaluations.
            </p>

            <div className="flex gap-3 flex-wrap mb-10">
              <a
                href="#projects"
                className="font-mono text-[11px] tracking-widest uppercase px-5 py-3 rounded-sm bg-ink text-bg hover:bg-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://github.com/Chiayingcy"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase px-5 py-3 rounded-sm border border-ink/18 text-ink hover:border-ink hover:-translate-y-0.5 transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ooi-chia-ying-9ba7031b7/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase px-5 py-3 rounded-sm border border-ink/18 text-ink hover:border-ink hover:-translate-y-0.5 transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {STACK_TAGS.map((t) => (
                <Badge key={t.label} variant={t.v}>{t.label}</Badge>
              ))}
            </div>
          </div>

          {/* right — identity card */}
          <IdentityCard />
        </div>
      </div>

      {/* ticker */}
      <div className="border-t border-b border-ink/10 py-2.5 overflow-hidden">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: 'ticker 30s linear infinite' }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="font-mono text-[11px] tracking-widest uppercase text-muted">
              <span className="text-accent mr-12">·</span>{item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
