import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Images } from 'lucide-react'
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

type LightboxState = { images: { src: string; alt: string }[]; index: number }

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === filter)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length })
      if (e.key === 'ArrowLeft') setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="projects" className="container-shell section-pad section-topline">
      <FadeUp>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <SectionHeader num="03" title="Projects" accent="& repos" />
          <a
            href="https://github.com/Chiayingcy"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/20 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/20 dark:hover:border-accent/50"
          >
            &#128279; View GitHub Profile
          </a>
        </div>
      </FadeUp>

      <FadeUp delay={50}>
        <div className="mb-6 flex w-fit flex-wrap gap-1 rounded-2xl border border-white/70 bg-white/70 p-1.5 shadow-[0_8px_22px_rgba(16,32,61,0.08)] dark:border-ink/12 dark:bg-surface/35 dark:shadow-[0_8px_22px_rgba(0,0,0,0.30)]">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={cn(
                'rounded-xl px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-200',
                filter === tab.value
                  ? 'bg-ink text-white shadow-sm dark:bg-accent'
                  : 'text-muted hover:text-ink'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </FadeUp>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project, i) => {
          const points = [...(project.highlights ?? []), ...(project.outcomes ?? [])].slice(0, 4)

          return (
          <FadeUp key={project.id} delay={i * 50}>
            <div
              className={cn(
                'group glass-card relative flex h-full flex-col p-5 transition-all duration-200 hover:-translate-y-1 md:p-6',
                TYPE_HOVER[project.type]
              )}
            >
              <div className={cn('absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-transparent transition-all duration-200', TYPE_TOP[project.type])} />

              <p className={cn('mb-2 font-mono text-[10px] uppercase tracking-[0.12em]', TYPE_ACCENT[project.type])}>
                {project.category}
              </p>
              <h3 className="mb-1.5 font-display text-[1.18rem] font-semibold leading-tight text-ink md:text-[1.3rem]">
                {project.title}
              </h3>
              <p className="mb-3 text-[13px] leading-relaxed text-ink2 md:text-[14px]">
                {project.description}
              </p>

              {points.length > 0 && (
                <ul className="mb-3 space-y-1">
                  {points.map((point, j) => (
                    <li key={j} className="relative pl-3.5 text-[12.5px] leading-snug text-ink2 md:text-[13px]">
                      <span className="absolute left-0 top-[7px] h-1 w-1 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/15 bg-white dark:bg-surface/25 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.github || project.images) && (
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-ink/10 pt-3.5">
                  {project.images && project.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setLightbox({ images: project.images!, index: 0 })}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent dark:border-ink/15 dark:bg-surface/25"
                    >
                      <Images size={13} strokeWidth={2} /> Preview
                    </button>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent dark:bg-accent dark:hover:bg-accent-light"
                    >
                      Visit Site <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent dark:border-ink/15 dark:bg-surface/25"
                    >
                      GitHub <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeUp>
          )
        })}
      </div>

      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/60"
          >
            &#10005;
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length })
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-colors hover:border-white/60 md:left-6"
              >
                &#8249;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length })
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-xl text-white transition-colors hover:border-white/60 md:right-6"
              >
                &#8250;
              </button>
            </>
          )}

          <figure className="flex max-h-full max-w-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].alt}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">
              {lightbox.images[lightbox.index].alt}
              {lightbox.images.length > 1 && ` · ${lightbox.index + 1}/${lightbox.images.length}`}
            </figcaption>
          </figure>
        </div>,
        document.body
      )}
    </section>
  )
}
