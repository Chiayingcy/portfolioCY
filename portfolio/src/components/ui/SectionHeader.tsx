import React from 'react'

interface SectionHeaderProps {
  num: string
  title: string
  accent: string
}

export function SectionHeader({ num, title, accent }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-6 mb-12">
      <span className="font-mono text-[11px] text-muted-2 tracking-widest shrink-0">{num}</span>
      <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-ink leading-none">
        {title} <em className="font-display italic font-normal text-accent">{accent}</em>
      </h2>
      <div className="flex-1 h-px bg-ink/18 mb-1" />
    </div>
  )
}
