import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EDUCATION, COURSES } from '@/data'

export function EducationSection() {
  return (
    <section className="border-t border-ink/10 max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="05" title="Education" accent="& courses" />
      </FadeUp>

      <div className="divide-y divide-ink/10 mb-10">
        {EDUCATION.map((edu) => (
          <FadeUp key={edu.year}>
            <div className="grid grid-cols-[180px_1fr] gap-10 py-8">
              <p className="font-mono text-[11px] text-muted tracking-[0.06em]">{edu.year}</p>
              <div>
                <h3 className="font-display font-bold text-[1.05rem] text-ink mb-1">{edu.degree}</h3>
                <p className="text-[13px] text-accent mb-1">{edu.institution}</p>
                <p className="text-[13px] text-muted font-light">{edu.detail}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-4">
          Courses &amp; certifications
        </p>
        <div className="grid grid-cols-4 gap-2.5">
          {COURSES.map((c) => (
            <div key={c.name} className="bg-bg2 border border-ink/10 rounded-lg p-4">
              <p className="font-mono text-[10px] text-muted tracking-[0.08em] mb-1">{c.date}</p>
              <p className="text-[13px] text-ink font-medium leading-snug mb-1">{c.name}</p>
              <p className="text-[11px] text-muted">{c.org}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}
