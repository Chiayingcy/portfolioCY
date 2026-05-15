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
    <section id="contact" className="border-t border-ink/10 max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="06" title="Get in" accent="touch" />
      </FadeUp>

      <div className="grid grid-cols-2 gap-16 items-center">
        <FadeUp delay={80}>
          <h3 className="font-display font-black text-[clamp(2.5rem,5vw,4rem)] text-ink leading-none mb-4">
            Let's work<br />
            <em className="font-display italic font-normal text-accent">together.</em>
          </h3>
          <p className="text-sm text-muted font-light leading-relaxed">
            Open to full-stack, fintech, and payment engineering roles.<br />
            Based in Puchong — available on-site in KL or remote.
          </p>
        </FadeUp>

        <FadeUp delay={160}>
          <div className="space-y-2.5">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-bg2 border border-ink/10 rounded-lg text-ink hover:border-ink/25 hover:translate-x-1 transition-all duration-200"
              >
                <span className="text-[15px] w-6 text-center shrink-0">{item.icon}</span>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-0.5">{item.label}</p>
                  <p className="text-[13px] font-medium text-ink">{item.val}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
