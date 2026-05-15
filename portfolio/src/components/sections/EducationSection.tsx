import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION, COURSES } from '@/data'

export function EducationSection() {
  return (
    <section className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="05" title="Education" accent="& courses" />
      </FadeUp>

      <div className="mb-8 space-y-3 md:mb-10">
        {EDUCATION.map((edu) => (
          <FadeUp key={edu.year}>
            <div className="glass-card grid gap-4 p-5 md:grid-cols-[180px_1fr] md:gap-8 md:p-6">
              <span className="chip w-fit">{edu.year}</span>
              <div>
                <h3 className="mb-1 font-display text-[1.05rem] font-semibold text-ink md:text-[1.2rem]">{edu.degree}</h3>
                <p className="mb-1 text-[13px] text-accent md:text-[14px]">{edu.institution}</p>
                <p className="text-[13px] text-muted md:text-[14px]">{edu.detail}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
          Courses &amp; certifications
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c) => (
            <div key={c.name} className="glass-card p-4">
              <p className="mb-1 font-mono text-[10px] tracking-[0.12em] text-muted">{c.date}</p>
              <p className="mb-1 text-[13px] font-semibold leading-snug text-ink md:text-[14px]">{c.name}</p>
              <p className="text-[11px] text-muted">{c.org}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
