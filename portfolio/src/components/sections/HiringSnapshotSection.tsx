import { FadeUp } from '@/components/ui/FadeUp'
import { HIRING_SIGNALS, IMPACT_METRICS } from '@/data'

export function HiringSnapshotSection() {
  return (
    <section className="container-shell section-pad">
      <FadeUp>
        <div className="glass-card p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">At a glance</p>
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[0.95] text-ink">
                Quick Overview
              </h2>
            </div>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="rounded-full border border-ink/20 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/20 dark:hover:border-accent/50"
            >
              Download Resume
            </a>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_METRICS.map((item) => (
              <article key={item.label} className="rounded-2xl border border-ink/10 bg-white/80 p-4 dark:bg-surface/30 dark:border-ink/12">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{item.label}</p>
                <p className="font-display text-[1.45rem] font-semibold text-ink">{item.value}</p>
                <p className="text-[12px] text-muted">{item.note}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {HIRING_SIGNALS.map((signal) => (
              <article key={signal.title} className="rounded-2xl border border-ink/10 bg-white/80 p-5 dark:bg-surface/30 dark:border-ink/12">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{signal.title}</p>
                <ul className="space-y-2">
                  {signal.points.map((point) => (
                    <li key={point} className="relative pl-4 text-[13px] text-ink2 md:text-[14px]">
                      <span className="absolute left-0 top-[1px] text-accent">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
