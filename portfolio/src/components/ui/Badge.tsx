import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-sm border font-mono text-[10px] tracking-[0.08em] uppercase px-2 py-0.5 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-ink/18 bg-bg2 text-muted',
        accent: 'border-accent/30 bg-accent/5 text-accent',
        blue: 'border-blue-400/30 bg-blue-400/5 text-blue-600',
        green: 'border-green-600/30 bg-green-600/5 text-green-700',
        gold: 'border-yellow-600/30 bg-yellow-600/5 text-yellow-700',
        outline: 'border-ink/18 bg-transparent text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
