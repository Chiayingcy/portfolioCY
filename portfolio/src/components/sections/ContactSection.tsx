import { Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

type IconComponent = LucideIcon | (({ size }: { size?: number }) => JSX.Element)

const CONTACT_ITEMS: { icon: IconComponent; label: string; val: string; href: string }[] = [
  { icon: Mail,         label: 'Email',    val: 'claws2627@gmail.com',      href: 'mailto:claws2627@gmail.com' },
  { icon: Phone,        label: 'Phone',    val: '+6019-5747073',            href: 'tel:+60195747073' },
  { icon: GitHubIcon,   label: 'GitHub',   val: 'github.com/Chiayingcy',    href: 'https://github.com/Chiayingcy' },
  { icon: LinkedInIcon, label: 'LinkedIn', val: 'ooi-chia-ying-9ba7031b7', href: 'https://www.linkedin.com/in/ooi-chia-ying-9ba7031b7/' },
]

export function ContactSection() {
  return (
    <section id="contact" className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="06" title="Get in" accent="touch" />
      </FadeUp>

      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
        <FadeUp delay={80}>
          <div className="glass-card p-6 md:p-8">
            <h3 className="mb-4 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[0.92] text-ink">
              Let's build products
              <span className="block text-accent">people trust.</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted md:text-[15px]">
              Open to full-stack, fintech, and payment engineering roles.
              Based in Puchong, available on-site in KL or remote collaboration.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:claws2627@gmail.com?subject=Interview%20Invitation"
                className="rounded-full bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent dark:bg-accent dark:hover:bg-accent-light"
              >
                Schedule Interview
              </a>
              <a
                href="/resumeoi_Resume.pdf"
                download="resumeoi_Resume.pdf"
                className="rounded-full border border-ink/20 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/20 dark:hover:border-accent/50"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ooi-chia-ying-9ba7031b7/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/20 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/20 dark:hover:border-accent/50"
              >
                Connect on LinkedIn
              </a>
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              Typical response time: within 24 hours
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={160}>
          <div className="space-y-3">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="glass-card flex items-center gap-4 p-4 text-ink transition-all duration-200 hover:translate-x-1"
              >
                <span className="flex w-6 shrink-0 items-center justify-center text-accent">
                  <item.icon size={16} />
                </span>
                <div>
                  <p className="mb-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{item.label}</p>
                  <p className="text-[13px] font-semibold text-ink md:text-[14px]">{item.val}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
