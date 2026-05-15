import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'

const CONTACT_ITEMS = [
  { icon: '✉', label: 'Email', val: 'claws2627@gmail.com', href: 'mailto:claws2627@gmail.com' },
  { icon: '☎', label: 'Phone', val: '+6019-5747073', href: 'tel:+60195747073' },
  { icon: '◈', label: 'GitHub', val: 'github.com/Chiayingcy', href: 'https://github.com/Chiayingcy' },
  { icon: 'in', label: 'LinkedIn', val: 'ooi-chia-ying-9ba7031b7', href: 'https://www.linkedin.com/in/ooi-chia-ying-9ba7031b7/' },
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
                href="/resume.pdf"
                download="ChiaYingOoi_Resume.pdf"
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
                <span className="text-[15px] w-6 text-center shrink-0">{item.icon}</span>
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
