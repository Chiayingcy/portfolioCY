import React, { useState } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PROJECTS } from '@/data'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'

type Filter = 'all' | 'work' | 'personal' | 'academic'

const FILTER_TABS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Academic', value: 'academic' },
]

const TYPE_ACCENT: Record<Project['type'], string> = {
  work: 'text-accent',
  personal: 'text-blue-600',
  academic: 'text-muted',
}

const TYPE_HOVER: Record<Project['type'], string> = {
  work: 'hover:border-accent/40',
  personal: 'hover:border-blue-400/40',
  academic: 'hover:border-ink/25',
}

const TYPE_TOP: Record<Project['type'], string> = {
  work: 'group-hover:bg-accent',
  personal: 'group-hover:bg-blue-500',
  academic: 'group-hover:bg-muted',
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter)

  return (
    <section id="projects" className="container-shell section-pad section-topline">
      <FadeUp>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <SectionHeader num="03" title="Projects" accent="& repos" />
          <a
            href="https://github.com/Chiayingcy"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/20 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            &#128279; View GitHub Profile
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="mb-8 flex w-fit flex-wrap gap-1 rounded-2xl border border-white/70 bg-white/70 p-1.5 shadow-[0_8px_22px_rgba(16,32,61,0.08)]">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'rounded-xl px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-200',
                filter === tab.value
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-muted hover:text-ink'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </FadeUp>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project, i) => (
          <FadeUp key={project.id} delay={i * 50}>
            <div
              className={cn(
                'group glass-card relative h-full p-6 transition-all duration-200 hover:-translate-y-1',
                TYPE_HOVER[project.type]
              )}
            >
              <div className={cn('absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-transparent transition-all duration-200', TYPE_TOP[project.type])} />

              <p className={cn('mb-3 font-mono text-[10px] uppercase tracking-[0.12em]', TYPE_ACCENT[project.type])}>
                {project.category}
              </p>
              <h3 className="mb-2 font-display text-[1.18rem] font-semibold leading-tight text-ink md:text-[1.3rem]">
                {project.title}
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-ink2 md:text-[14px]">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="mb-4 space-y-1.5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="relative pl-3 text-[12px] text-ink2 md:text-[13px]">
                      <span className="absolute left-0 top-[2px] text-[10px] text-accent">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <div className="mb-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-emerald-700">
                    Business outcomes
                  </p>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="relative pl-3 text-[12px] text-ink2 md:text-[13px]">
                        <span className="absolute left-0 top-[2px] text-emerald-700">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.architecture && project.architecture.length > 0 && (
                <details className="mb-4 rounded-xl border border-ink/12 bg-white/70 p-3">
                  <summary className="cursor-pointer list-none font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                    CTO deep dive
                  </summary>
                  <ul className="mt-3 space-y-1.5 border-t border-ink/10 pt-3">
                    {project.architecture.map((item) => (
                      <li key={item} className="relative pl-3 text-[12px] text-ink2 md:text-[13px]">
                        <span className="absolute left-0 top-[2px] text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/15 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="mt-4 border-t border-ink/10 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent"
                  >
                    <span>&#128279;</span> View on GitHub
                  </a>
                </div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
