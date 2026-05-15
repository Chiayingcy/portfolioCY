import React from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { SKILL_GROUPS } from '@/data'

const FACTS = [
  { k: 'Location', v: 'Puchong, Selangor, Malaysia' },
  { k: 'Current role', v: 'Junior Full Stack Dev · Masverse Technologies' },
  { k: 'Since', v: 'April 2024 · Present' },
  { k: 'Email', v: 'claws2627@gmail.com' },
  { k: 'Phone', v: '+6019-5747073' },
  { k: 'Trading', v: 'XAUUSD · EURUSD · GBPUSD · FundingPips · AlphaCapital' },
]

const TIER_STYLES: Record<string, string> = {
  primary: 'border-accent/30 bg-accent/5 text-accent',
  working: 'border-blue-400/30 bg-blue-400/5 text-blue-600',
  exploring: 'border-ink/15 bg-bg2 text-muted',
  ai: 'border-accent/30 bg-accent/5 text-accent',
}

export function AboutSection() {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-12 py-[4.5rem]">
      <FadeUp>
        <SectionHeader num="01" title="About" accent="me" />
      </FadeUp>

      <div className="grid grid-cols-2 gap-20">
        {/* left */}
        <FadeUp delay={100}>
          <blockquote className="font-display italic text-[1.25rem] text-ink-2 leading-relaxed border-l-[3px] border-accent pl-6 mb-8">
            "I enjoy building practical systems that solve real problems — and I'm always learning."
          </blockquote>

          <p className="text-sm text-ink-2 leading-relaxed mb-5 font-light">
            I'm a <strong className="font-medium text-ink">Junior Full Stack Developer</strong> at Masverse Technologies,
            working on MyKapital (an investment platform under SC & BNM regulations) and BlockchainCert — a
            blockchain-based certification system adopted by 100+ universities nationwide.
          </p>
          <p className="text-sm text-ink-2 leading-relaxed mb-8 font-light">
            I use <strong className="font-medium text-ink">AI tools daily</strong> (GitHub Copilot, Claude, ChatGPT)
            to move faster and solve problems more effectively. I'm still growing, but I take quality seriously.
          </p>

          <div className="divide-y divide-ink/10">
            {FACTS.map(({ k, v }) => (
              <div key={k} className="flex gap-4 py-2.5 items-baseline">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted w-[90px] shrink-0">{k}</span>
                <span className="text-[13px] text-ink">{v}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* right — skills */}
        <FadeUp delay={200}>
          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <div key={group.tier}>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mb-2">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-sm border font-mono text-[11px] tracking-[0.08em] px-2.5 py-1 ${TIER_STYLES[group.tier]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <p className="font-mono text-[11px] text-muted italic mt-2">
              Honest framing — primary means production-confident, exploring means actively learning.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
