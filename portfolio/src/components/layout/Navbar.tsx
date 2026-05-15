import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/data'
import { useTheme } from '@/hooks/useTheme'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const closeMenu = () => setOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-6">
      <nav
        className={cn(
          'mx-auto flex h-14 w-full max-w-[1180px] items-center justify-between rounded-2xl border px-4 md:px-6',
          'transition-all duration-300',
          scrolled
            ? 'border-white/70 bg-white/82 shadow-[0_8px_28px_rgba(16,32,61,0.16)] backdrop-blur-xl dark:border-ink/12 dark:bg-surface/88 dark:shadow-[0_8px_28px_rgba(0,0,0,0.40)]'
            : 'border-white/50 bg-white/62 backdrop-blur-md dark:border-ink/10 dark:bg-surface/72'
        )}
      >
      <div className="font-display text-lg font-semibold tracking-tight text-ink">
        claws<span className="text-accent">.dev</span>
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-emerald-700 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden xl:inline">Open to collaborate</span>
        </div>
        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-muted transition-all hover:border-accent/40 hover:text-accent dark:border-ink/15 dark:bg-surface/30 dark:text-muted dark:hover:text-accent"
        >
          {dark ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
        </button>
        <a
          href="#contact"
          className="whitespace-nowrap rounded-full bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-accent dark:bg-accent dark:hover:bg-accent-light"
        >
          <span className="hidden xl:inline">Book Intro Call</span>
          <span className="xl:hidden">Book Call</span>
        </a>
      </div>

      <div className="flex items-center gap-2 lg:hidden">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-muted transition-all hover:text-accent dark:border-ink/15 dark:bg-surface/30"
        >
          {dark ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-full border border-ink/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-[1180px] rounded-2xl border border-white/70 bg-white/92 p-4 shadow-[0_14px_30px_rgba(16,32,61,0.18)] backdrop-blur-xl dark:border-ink/12 dark:bg-surface/92 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-ink/10 bg-white/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink dark:border-ink/12 dark:bg-surface/35"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-ink px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-white dark:bg-accent"
            >
              Book Intro Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
