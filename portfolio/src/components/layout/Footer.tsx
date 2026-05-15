
export function Footer() {
  return (
    <footer className="section-topline mt-12">
      <div className="container-shell py-10">
        <div className="glass-card flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row md:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            © 2026 Chia Ying Ooi · Full Stack Developer · Puchong, Selangor
          </p>
          <a
            href="mailto:claws2627@gmail.com"
            className="rounded-full border border-ink/15 bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent/40 hover:text-accent dark:bg-surface/25 dark:border-ink/18 dark:hover:border-accent/50"
          >
            Contact for Interview
          </a>
        </div>
      </div>
    </footer>
  )
}
