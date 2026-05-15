import { MapPin, Briefcase, Calendar, Mail, Phone, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SKILL_GROUPS } from '@/data'

const FACTS: { icon: LucideIcon; k: string; v: string }[] = [
  { icon: MapPin,     k: 'Location',     v: 'Puchong, Selangor, Malaysia' },
  { icon: Briefcase,  k: 'Current role', v: 'Junior Full Stack Dev · Masverse Technologies' },
  { icon: Calendar,   k: 'Since',        v: 'April 2024 · Present' },
  { icon: Mail,       k: 'Email',        v: 'claws2627@gmail.com' },
  { icon: Phone,      k: 'Phone',        v: '+6019-5747073' },
  { icon: TrendingUp, k: 'Trading',      v: 'XAUUSD · EURUSD · GBPUSD · FundingPips · AlphaCapital' },
]

const TIER_STYLES: Record<string, string> = {
  primary: 'border-accent/30 bg-accent/5 text-accent',
  working: 'border-blue-400/30 bg-blue-400/5 text-blue-600',
  exploring: 'border-ink/15 bg-bg2 text-muted',
  ai: 'border-accent/30 bg-accent/5 text-accent',
}

export function AboutSection() {
  return (
    <section id="about" className="container-shell section-pad">
      <FadeUp>
        <SectionHeader num="01" title="About" accent="me" />
      </FadeUp>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <FadeUp delay={100}>
          <div className="glass-card h-full p-6 md:p-8">
            <blockquote className="mb-7 border-l-[3px] border-accent pl-5 font-display text-[1.15rem] leading-relaxed text-ink2 md:text-[1.35rem]">
              "I build products that real people depend on — and I care about getting the details right."
            </blockquote>

            <p className="mb-4 text-sm leading-relaxed text-ink2 md:text-[15px]">
            I'm a <strong className="font-semibold text-ink">Junior Full Stack Developer</strong> at Masverse Technologies,
            where I work on a regulated investment platform (MyKapital) and BlockchainCert — a digital certificate
            system now used by 100+ universities across Malaysia.
            </p>
            <p className="mb-7 text-sm leading-relaxed text-ink2 md:text-[15px]">
            I use <strong className="font-medium text-ink">AI tools daily</strong> — Copilot, ChatGPT, Claude, Gemini and others —
            to work faster and think through problems better. I'm still growing, but I take quality seriously.
            </p>

            <div className="divide-y divide-ink/10">
              {FACTS.map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex items-start gap-4 py-3">
                <span className="flex w-[116px] shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  <Icon size={11} strokeWidth={2} className="shrink-0" />
                  {k}
                </span>
                <span className="text-[13px] text-ink md:text-[14px]">{v}</span>
              </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="glass-card h-full space-y-6 p-6 md:p-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.tier}>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${TIER_STYLES[group.tier]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <p className="mt-2 font-mono text-[11px] italic text-muted">
              "What I use every day" means production-ready. "Currently learning" means actively building and experimenting.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
