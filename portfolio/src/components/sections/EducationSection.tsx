import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION } from '@/data'

export function EducationSection() {
  return (
    <section className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="06" title="Education" accent="background" />
      </FadeUp>

      <div className="space-y-3">
        {EDUCATION.map((edu) => (
          <FadeUp key={edu.year}>
            <div className="glass-card grid gap-4 p-5 md:grid-cols-[180px_1fr] md:gap-8 md:p-6">
              <div className="self-start">
                <div className="inline-flex flex-col items-center rounded-xl border border-muted/30 bg-muted/10 px-5 py-3 dark:border-muted/40 dark:bg-muted/15">
                  <span className="mb-1 font-mono text-[8px] uppercase tracking-[0.2em] text-muted/60">Year</span>
                  <span className="font-mono text-[1.15rem] font-semibold leading-none text-muted">{edu.year}</span>
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-display text-[1.05rem] font-semibold text-ink md:text-[1.2rem]">{edu.degree}</h3>
                <p className="mb-1 text-[13px] text-accent md:text-[14px]">{edu.institution}</p>
                <p className="text-[13px] text-muted md:text-[14px]">{edu.detail}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
