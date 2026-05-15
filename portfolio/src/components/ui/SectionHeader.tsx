
interface SectionHeaderProps {
  num: string
  title: string
  accent: string
}

export function SectionHeader({ num, title, accent }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-12 md:gap-6">
      <span className="chip shrink-0">{num}</span>
      <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[0.95] text-ink">
        {title} <span className="text-accent">{accent}</span>
      </h2>
      <div className="mb-1 h-px flex-1 bg-ink/20" />
    </div>
  )
}
