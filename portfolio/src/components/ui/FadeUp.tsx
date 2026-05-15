import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
