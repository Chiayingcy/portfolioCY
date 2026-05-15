import React from 'react'

export function IdentityCard() {
  return (
    <div className="relative w-[220px] shrink-0">
      {/* card */}
      <div className="relative w-[220px] h-[280px] rounded-2xl bg-bg-dark3 border border-white/8 overflow-hidden">

        {/* grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`h${i}`}
            className="absolute left-0 right-0 h-px bg-white/5"
            style={{ top: `${25 + i * 22}%` }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <div
            key={`v${i}`}
            className="absolute top-0 bottom-0 w-px bg-white/5"
            style={{ left: `${25 + i * 25}%` }}
          />
        ))}

        {/* corner marks */}
        {[
          'top-3 left-3 border-t-2 border-l-2',
          'top-3 right-3 border-t-2 border-r-2',
          'bottom-3 left-3 border-b-2 border-l-2',
          'bottom-3 right-3 border-b-2 border-r-2',
        ].map((cls, i) => (
          <div key={i} className={`absolute w-4 h-4 border-accent/70 ${cls}`} />
        ))}

        {/* top label */}
        <div className="absolute top-5 left-0 right-0 text-center font-mono text-[9px] tracking-[0.2em] text-accent/70 uppercase">
          Portfolio · 2026
        </div>

        {/* initials circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
          <div className="relative w-24 h-24">
            {/* spinning dashed ring */}
            <svg
              className="absolute inset-0 animate-spin-slow"
              viewBox="0 0 96 96"
              fill="none"
            >
              <circle
                cx="48" cy="48" r="44"
                stroke="#c8622a"
                strokeWidth="1"
                strokeDasharray="12 6"
                opacity="0.45"
              />
            </svg>
            {/* solid ring */}
            <div className="absolute inset-2 rounded-full border border-white/8 bg-bg-dark2 flex items-center justify-center">
              <span
                className="font-display font-black text-3xl leading-none"
                style={{ background: 'linear-gradient(135deg, #c8622a, #e8924a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                CY
              </span>
            </div>
          </div>
        </div>

        {/* accent line -->*/}
        <div
          className="absolute left-6 right-6 h-px"
          style={{ bottom: '108px', background: 'linear-gradient(90deg, #c8622a, #e8924a, #c8622a)' }}
        />

        {/* name */}
        <div className="absolute bottom-16 left-0 right-0 text-center">
          <p className="font-display font-black text-[15px] text-white/90 leading-tight">
            Chia Ying Ooi
          </p>
        </div>

        {/* nickname badge */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="border border-accent/60 bg-accent/10 rounded px-3 py-0.5">
            <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">claws</span>
          </div>
        </div>
      </div>

      {/* caption */}
      <p className="mt-2 text-center font-mono text-[10px] tracking-[0.1em] uppercase text-muted-2">
        Chia Ying Ooi · claws
      </p>
    </div>
  )
}
