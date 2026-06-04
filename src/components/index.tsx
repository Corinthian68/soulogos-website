'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

// ─── Arcane Sigil SVG ──────────────────────────────────────────────────────
export function ArcaneSigil() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        width="700"
        height="700"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-[0.055] animate-[sigil-rotate_90s_linear_infinite]"
      >
        {/* Outer circle */}
        <circle cx="350" cy="350" r="320" stroke="#C9A84C" strokeWidth="1" />
        {/* Inner circle */}
        <circle cx="350" cy="350" r="260" stroke="#C9A84C" strokeWidth="0.7" />
        {/* Middle ring */}
        <circle cx="350" cy="350" r="200" stroke="#C9A84C" strokeWidth="0.5" />
        {/* Inner small */}
        <circle cx="350" cy="350" r="80" stroke="#C9A84C" strokeWidth="0.7" />

        {/* 8-pointed star outer */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const x1 = (350 + 320 * Math.cos(rad)).toFixed(2)
          const y1 = (350 + 320 * Math.sin(rad)).toFixed(2)
          const x2 = (350 + 80 * Math.cos(rad)).toFixed(2)
          const y2 = (350 + 80 * Math.sin(rad)).toFixed(2)
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.5" />
        })}

        {/* Hexagram (star of david style) */}
        <polygon
          points="350,90 577,437 123,437"
          stroke="#C9A84C"
          strokeWidth="0.6"
          fill="none"
        />
        <polygon
          points="350,610 123,263 577,263"
          stroke="#C9A84C"
          strokeWidth="0.6"
          fill="none"
        />

        {/* Rune marks at cardinal points */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180
          const cx = (350 + 290 * Math.cos(rad)).toFixed(2)
          const cy = (350 + 290 * Math.sin(rad)).toFixed(2)
          return (
            <g key={angle} className={`origin-[350px_350px] rotate-[${angle}deg]`}>
              <rect x="345" y="52" width="10" height="16" stroke="#C9A84C" strokeWidth="0.8" fill="none" />
              <line x1="350" y1="52" x2="350" y2="68" stroke="#C9A84C" strokeWidth="0.5" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ─── Gold Rule ──────────────────────────────────────────────────────────────
export function GoldRule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className={`gold-rule w-full my-16 origin-left transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${inView ? 'scale-x-100' : 'scale-x-0'}`}
    />
  )
}

// ─── Scroll Reveal ──────────────────────────────────────────────────────────
export function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Delay mapping for Tailwind classes
  const delayMap: Record<number, string> = {
    0: 'delay-0',
    0.1: 'delay-100',
    0.2: 'delay-200',
    0.3: 'delay-300',
    0.4: 'delay-400',
    0.5: 'delay-500',
    0.6: 'delay-600',
  }
  
  const delayClass = delayMap[delay] || 'delay-0'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${delayClass} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'} ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Feature Card ──────────────────────────────────────────────────────────
export function FeatureCard({
  icon,
  title,
  body,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  body: string
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className="group relative p-8 md:p-10 rounded-lg border border-gold/20 bg-navy/60 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 h-full hover:shadow-[0_0_30px_4px_rgba(201,168,76,0.12),inset_0_0_30px_rgba(201,168,76,0.04)]"
      >
        <div className="text-gold mb-2 opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
        <h3 className="font-ui text-parchment text-xl font-semibold mb-2 tracking-wide">{title}</h3>
        <p className="font-body text-muted text-lg leading-relaxed">{body}</p>
      </div>
    </ScrollReveal>
  )
}

// ─── Waitlist Form ──────────────────────────────────────────────────────────
export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="w-full">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-5 py-4 rounded-lg bg-void border border-gold/30 text-parchment font-body text-lg placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_10px_2px_rgba(201,168,76,0.2)] font-body"
            />
          </div>
          <button
            type="submit"
            id="waitlist-submit-btn"
            className="w-full py-4 px-8 rounded-lg font-ui font-semibold tracking-widest uppercase bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] bg-[length:200%_200%] text-void text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
          >
            Join the Waitlist
          </button>
        </form>
      ) : (
        <div
          className="text-center py-8 px-6 rounded-lg border border-gold/40 bg-navy/60 shadow-[0_0_30px_rgba(201,168,76,0.1)] animate-[fade-up_0.6s_ease-out_forwards]"
        >
          <div className="text-4xl mb-3" aria-hidden="true">🔮</div>
          <p className="font-display text-gold text-xl mb-2">Your soul has been registered.</p>
          <p className="font-body text-muted text-base">We will summon you when the voices are ready.</p>
        </div>
      )}

      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-gold/20" />
        <span className="font-ui text-muted text-sm tracking-widest">or</span>
        <div className="flex-1 h-px bg-gold/20" />
      </div>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        id="discord-cta-btn"
        className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-lg font-ui font-semibold tracking-widest uppercase text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] bg-[#5865F2] shadow-[0_4px_20px_rgba(88,101,242,0.3)]"
      >
        <DiscordIcon />
        Join Our Discord
      </a>

      <p className="text-center font-body text-muted text-base mt-6 italic">
        No spam. No obligation. Just a heads-up when we are ready for you.
      </p>
    </div>
  )
}

// ─── Discord Icon ───────────────────────────────────────────────────────────
export function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  )
}

// ─── Authoring Console Mockup ───────────────────────────────────────────────
export function ConsoleMockup() {
  return (
    <div className="w-full aspect-[16/10] max-w-2xl mx-auto rounded-lg border border-gold/30 bg-navy/80 shadow-[0_0_40px_rgba(201,168,76,0.1)] overflow-hidden flex flex-col">
      <div className="h-8 border-b border-gold/20 flex items-center px-4 bg-void/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <p className="font-ui text-gold/50 text-lg uppercase tracking-widest text-center">
          Authoring Console<br/>
          <span className="text-sm tracking-widest mt-2 block">Coming in public release</span>
        </p>
      </div>
    </div>
  )
}

// ─── Syrinscape Cue Board ───────────────────────────────────────────────────
export function SyrinscapeCueBoard() {
  return (
    <div className="w-full max-w-lg mx-auto bg-navy/80 rounded-lg border border-gold/20 p-6 shadow-[0_0_30px_rgba(201,168,76,0.05)]">
      <p className="font-ui text-gold/60 text-sm uppercase tracking-widest text-center mb-6">Live Syrinscape Cue Board</p>
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 25 }).map((_, i) => {
          let bgColor = 'bg-void/50 border-gold/10'
          if (i === 12) bgColor = 'bg-red-900/40 border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
          else if (i % 7 === 0) bgColor = 'bg-blue-900/30 border-blue-400/30'
          else if (i % 5 === 0) bgColor = 'bg-gold/10 border-gold/30'

          return (
            <div key={i} className={`aspect-square rounded ${bgColor} border hover:bg-gold/20 hover:border-gold/50 transition-colors cursor-pointer`} />
          )
        })}
      </div>
    </div>
  )
}

// ─── Nav ────────────────────────────────────────────────────────────────────
export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 transition-all duration-500 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md border-b border-gold/15' : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <Image src="/logo-full.png" alt="Soulogos Lantern Logo" width={32} height={40} className="object-contain" />
        <span className="font-display text-parchment tracking-wide text-xl [text-shadow:0_0_20px_rgba(201,168,76,0.3)]">
          Soulogos
        </span>
      </div>
      
      <a
        href="#waitlist"
        id="nav-join-waitlist-btn"
        className="font-ui text-xs tracking-widest uppercase px-5 py-2.5 rounded border border-gold/60 text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold gold-pulse-btn"
      >
        Join Waitlist
      </a>
    </nav>
  )
}
