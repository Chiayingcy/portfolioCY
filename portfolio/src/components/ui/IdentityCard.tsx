
export function IdentityCard() {
  return (
    <div className="float-slow relative w-[250px] max-w-full shrink-0">
      <div className="glass-card relative h-[320px] w-[250px] overflow-hidden rounded-3xl border border-white/70">
        <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent/25 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-500/25 blur-2xl" />

        <div className="identity-grid absolute inset-0" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <span className="chip mb-5">Product Builder</span>

          <div className="relative mb-4 h-24 w-24">
            <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 96 96" fill="none">
              <circle cx="48" cy="48" r="44" stroke="#ff6b35" strokeWidth="1.5" strokeDasharray="10 6" opacity="0.5" />
            </svg>
            <div className="absolute inset-2 flex items-center justify-center rounded-full border border-ink/15 bg-white/80 dark:bg-white/12 dark:border-white/20">
              <span
                className="font-display text-3xl font-semibold leading-none"
                style={{ background: 'linear-gradient(135deg, #ff6b35, #4f78ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                CY
              </span>
            </div>
          </div>

          <p className="font-display text-lg font-semibold text-ink">Chia Ying Ooi</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Full Stack · Fintech · Web3</p>

          <div className="mt-5 rounded-full border border-accent/35 bg-accent/10 px-4 py-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">claws</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        Available for interview calls
      </p>
    </div>
  )
}
