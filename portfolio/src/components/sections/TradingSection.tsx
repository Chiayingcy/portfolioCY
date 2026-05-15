import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TRADING_INSTRUMENTS } from '@/data'

const SYMBOL_COLOR: Record<string, string> = {
  gold: 'text-yellow-700',
  blue: 'text-blue-600',
  orange: 'text-accent',
}

const STATUS_BADGE: Record<string, string> = {
  gold: 'border-yellow-600/30 text-yellow-700 bg-yellow-600/5',
  blue: 'border-blue-400/30 text-blue-600 bg-blue-400/5',
  orange: 'border-accent/30 text-accent bg-accent/5',
}

const STAT_CARDS = [
  { label: 'Primary instrument', val: 'XAUUSD', sub: 'Gold / US Dollar' },
  { label: 'Forex pairs', val: 'EUR · GBP', sub: 'EURUSD · GBPUSD' },
  { label: 'Evaluation status', val: 'Certified', sub: 'FundingPips · AlphaCapital' },
  { label: 'Strategy', val: 'Rule-based', sub: 'Price action · Market structure' },
  { label: 'Personal tools', val: 'MT4 + TV', sub: 'Custom EA bot & indicators' },
]

export function TradingSection() {
  return (
    <section id="trading" className="border-t border-ink/10 max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="04" title="Trading" accent="background" />
      </FadeUp>

      <FadeUp delay={80}>
        <p className="text-base text-ink-2 max-w-[640px] leading-relaxed font-light mb-10">
          I actively trade <strong className="font-medium text-ink">XAUUSD, EURUSD, and GBPUSD</strong> and
          have passed prop firm evaluations with FundingPips and AlphaCapitalGroup. Trading has sharpened my{' '}
          <strong className="font-medium text-ink">analytical thinking, risk discipline, and decision-making under pressure</strong>
          {' '}— and directly shapes how I think about building financial systems.
        </p>
      </FadeUp>

      {/* stat cards */}
      <FadeUp delay={120}>
        <div className="grid grid-cols-5 gap-3 mb-8">
          {STAT_CARDS.map((s) => (
            <div key={s.label} className="bg-bg2 border border-ink/10 rounded-lg p-4 hover:border-ink/20 transition-colors">
              <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">{s.label}</p>
              <p className="font-display font-bold text-[1.3rem] text-ink leading-none mb-1">{s.val}</p>
              <p className="text-[11px] text-muted">{s.sub}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* instruments */}
      <FadeUp delay={160}>
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-3">Instruments traded</p>
        <div className="space-y-2 mb-6">
          {TRADING_INSTRUMENTS.map((inst) => (
            <div
              key={inst.symbol}
              className="flex items-center gap-6 px-5 py-4 bg-bg2 border border-ink/10 rounded-lg hover:border-ink/20 transition-colors"
            >
              <span className={`font-display font-bold text-[1.2rem] w-[110px] shrink-0 ${SYMBOL_COLOR[inst.color]}`}>
                {inst.symbol}
              </span>
              <p className="flex-1 text-[13px] text-ink-2 font-light">{inst.description}</p>
              <span className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-sm border shrink-0 ${STATUS_BADGE[inst.color]}`}>
                Active
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={200}>
        <div className="p-5 bg-yellow-600/5 border border-yellow-600/20 rounded-lg italic text-[13px] text-ink-2 leading-relaxed">
          Being a prop trader means I understand fintech and payment platforms from the user's side — I know
          what makes a payout flow trustworthy, why real-time account visibility matters, and what it feels
          like when a system fails under pressure. That perspective informs how I build.
        </div>
      </FadeUp>
    </section>
  )
}
