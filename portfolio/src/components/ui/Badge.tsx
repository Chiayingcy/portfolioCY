import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-muted/28 bg-muted/10 text-muted',
        accent: 'border-accent/35 bg-accent/10 text-accent',
        blue: 'border-blue-400/35 bg-blue-400/10 text-blue-700 dark:text-blue-300',
        green: 'border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
        gold: 'border-amber-500/35 bg-amber-500/10 text-amber-700 dark:text-amber-300',
        outline: 'border-ink/20 bg-transparent text-ink2',
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
