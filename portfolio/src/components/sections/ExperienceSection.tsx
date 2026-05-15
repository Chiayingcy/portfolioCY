import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EXPERIENCES } from '@/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="02" title="Work" accent="experience" />
      </FadeUp>

      <div className="space-y-4 md:space-y-5">
        {EXPERIENCES.map((exp, i) => (
          <FadeUp key={exp.id} delay={i * 80}>
            <article className="glass-card grid gap-5 p-5 md:grid-cols-[210px_1fr] md:gap-8 md:p-7">
              <div className="space-y-2">
                <span className="chip">{exp.period}</span>
                <p className="text-[12px] leading-snug text-muted">{exp.companyShort}</p>
              </div>
              <div>
                <h3 className="mb-1 font-display text-[1.22rem] font-semibold text-ink md:text-[1.35rem]">{exp.role}</h3>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{exp.subtitle}</p>
                <ul className="mb-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="relative pl-4 text-[13px] leading-relaxed text-ink2 md:text-[14px]">
                      <span className="absolute left-0 top-[4px] text-accent text-[11px]">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink/15 bg-white/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted dark:bg-surface/28 dark:border-ink/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
