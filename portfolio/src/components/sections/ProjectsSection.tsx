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
    <section id="projects" className="border-t border-ink/10 max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="03" title="Projects" accent="& repos" />
      </FadeUp>

      {/* filter tabs */}
      <FadeUp delay={50}>
        <div className="flex gap-1 mb-10 p-1 bg-bg2 rounded-md w-fit">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'font-mono text-[11px] tracking-widest uppercase px-4 py-2 rounded transition-all duration-200',
                filter === tab.value
                  ? 'bg-bg text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </FadeUp>

      <div className="grid grid-cols-2 gap-3.5">
        {filtered.map((project, i) => (
          <FadeUp key={project.id} delay={i * 50}>
            <div
              className={cn(
                'group relative bg-bg2 border border-ink/10 rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5',
                TYPE_HOVER[project.type]
              )}
            >
              {/* top accent bar */}
              <div className={cn('absolute top-0 left-0 right-0 h-0.5 rounded-t-lg bg-transparent transition-all duration-200', TYPE_TOP[project.type])} />

              <p className={cn('font-mono text-[10px] tracking-[0.12em] uppercase mb-3', TYPE_ACCENT[project.type])}>
                {project.category}
              </p>
              <h3 className="font-display font-bold text-[1.2rem] text-ink mb-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-[13px] text-ink-2 font-light leading-relaxed mb-4">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-[12px] text-ink-2 font-light pl-3 relative">
                      <span className="absolute left-0 text-accent text-[10px] top-[2px]">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-bg3 border border-ink/10 text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
