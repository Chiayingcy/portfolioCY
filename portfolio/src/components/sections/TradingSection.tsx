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
  { label: 'Forex pairs', val: 'EUR Â· GBP', sub: 'EURUSD Â· GBPUSD' },
  { label: 'Evaluation status', val: 'Certified', sub: 'FundingPips Â· AlphaCapital' },
  { label: 'Strategy', val: 'Rule-based', sub: 'Price action Â· Market structure' },
  { label: 'Personal tools', val: 'MT4 + TV', sub: 'Custom EA bot & indicators' },
]

export function TradingSection() {
  return (
    <section id="trading" className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="04" title="Trading" accent="background" />
      </FadeUp>

      <FadeUp delay={80}>
        <p className="mb-8 max-w-[700px] text-[15px] leading-relaxed text-ink2 md:mb-10 md:text-base">
          I actively trade <strong className="font-medium text-ink">XAUUSD, EURUSD, and GBPUSD</strong> and
          have passed prop firm evaluations with FundingPips and AlphaCapitalGroup. Trading has sharpened my{' '}
          <strong className="font-medium text-ink">analytical thinking, risk discipline, and decision-making under pressure</strong>
          {' '}â€” and directly shapes how I think about building financial systems.
        </p>
      </FadeUp>

      <FadeUp delay={120}>
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {STAT_CARDS.map((s) => (
            <div key={s.label} className="glass-card p-4 md:p-5">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{s.label}</p>
              <p className="mb-1 font-display text-[1.3rem] font-semibold leading-none text-ink">{s.val}</p>
              <p className="text-[11px] text-muted md:text-[12px]">{s.sub}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={160}>
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Instruments traded</p>
        <p className="mb-4 text-[13px] text-muted">Markets I trade regularly â€” and why they shape how I think about building fintech products.</p>
        <div className="space-y-2 mb-6">
          {TRADING_INSTRUMENTS.map((inst) => (
            <div
              key={inst.symbol}
              className="glass-card flex flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:gap-6"
            >
              <span className={`font-display font-bold text-[1.2rem] w-[110px] shrink-0 ${SYMBOL_COLOR[inst.color]}`}>
                {inst.symbol}
              </span>
              <p className="flex-1 text-[13px] text-ink2 md:text-[14px]">{inst.description}</p>
              {inst.role && (
                <span className={`w-fit shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${STATUS_BADGE[inst.color]}`}>
                  {inst.role}
                </span>
              )}
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={200}>
        <div className="glass-card border-amber-500/30 bg-amber-500/10 p-5 text-[13px] italic leading-relaxed text-ink2 md:text-[14px]">
          Being a prop trader means I understand fintech and payment platforms from the user's side â€” I know
          what makes a payout flow trustworthy, why real-time account visibility matters, and what it feels
          like when a system fails under pressure. That perspective informs how I build.
        </div>
      </FadeUp>
    </section>
  )
}
