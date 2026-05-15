import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Separator } from '@/components/ui/Separator'
import { EXPERIENCES } from '@/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-ink/10 max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="02" title="Work" accent="experience" />
      </FadeUp>

      <div className="space-y-0">
        {EXPERIENCES.map((exp, i) => (
          <FadeUp key={exp.id} delay={i * 80}>
            <div className="grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-ink/10 last:border-b-0">
              <div>
                <p className="font-mono text-[11px] text-muted tracking-[0.06em] mb-1">{exp.period}</p>
                <p className="text-[12px] text-muted-2 leading-snug">{exp.companyShort}</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-[1.25rem] text-ink mb-0.5">{exp.role}</h3>
                <p className="font-mono text-[11px] text-accent tracking-[0.06em] uppercase mb-4">{exp.subtitle}</p>
                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-[13px] text-ink-2 font-light pl-4 relative leading-relaxed">
                      <span className="absolute left-0 top-[5px] text-muted-2 text-[11px]">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-bg2 border border-ink/10 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
