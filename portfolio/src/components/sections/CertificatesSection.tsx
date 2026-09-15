import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CERTIFICATES } from '@/data'

export function CertificatesSection() {
  return (
    <section className="container-shell section-pad section-topline">
      <FadeUp>
        <SectionHeader num="05" title="Certificates" accent="& training" />
      </FadeUp>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((c) => (
          <FadeUp key={c.name}>
            <div className="glass-card h-full p-4">
              <p className="mb-1 font-mono text-[10px] tracking-[0.12em] text-muted">{c.date}</p>
              <p className="mb-1 text-[13px] font-semibold leading-snug text-ink md:text-[14px]">{c.name}</p>
              <p className="text-[11px] text-muted">{c.org}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
