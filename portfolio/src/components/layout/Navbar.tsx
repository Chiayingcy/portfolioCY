import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[58px]',
        'transition-all duration-300',
        scrolled
          ? 'bg-bg/92 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent'
      )}
    >
      <div className="font-display font-bold text-[1.1rem] text-ink">
        claws<span className="text-accent">.</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[11px] tracking-[0.08em] uppercase text-muted hover:text-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 font-mono text-[12px] text-green-600">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Open to opportunities
      </div>
    </nav>
  )
}
