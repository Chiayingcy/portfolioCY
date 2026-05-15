import * as React from 'react'
import { cn } from '@/lib/utils'

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
}

export function Separator({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) {
  return (
    <div
      className={cn(
        'shrink-0 bg-ink/10',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}
