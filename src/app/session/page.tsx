'use client'

import Image from 'next/image'
import {
  Nav,
  GoldRule,
  ScrollReveal,
  FeatureCard,
  ScrollTracker,
} from '@/components'

// ─── Icon components ─────────────────────────────────────────────────────────

function RecordIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="12" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="6" fill="#C9A84C" opacity="0.6" />
      <circle cx="18" cy="18" r="3" fill="#E8C97A" />
    </svg>
  )
}

function TranscribeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="6" y="4" width="24" height="28" rx="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="11" y1="12" x2="25" y2="12" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="17" x2="25" y2="17" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="11" y1="22" x2="20" y2="22" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <circle cx="26" cy="27" r="4" stroke="#E8C97A" strokeWidth="1.2" fill="none" opacity="0.7" />
      <line x1="29" y1="30" x2="32" y2="33" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function RememberIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 4L28 8L24 12" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 8H22C18.686 8 16 10.686 16 14V18" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="2.5" fill="#E8C97A" opacity="0.8" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="10" y="8" width="5" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <rect x="21" y="8" width="5" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M4 4H17L32 19L21 30L6 15V4Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <circle cx="11" cy="11" r="2.5" stroke="#E8C97A" strokeWidth="1.2" />
    </svg>
  )
}

function ScrollDocIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M8 6C8 4.895 8.895 4 10 4H26C27.105 4 28 4.895 28 6V30C28 31.105 27.105 32 26 32H10C8.895 32 8 31.105 8 30V6Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <line x1="13" y1="12" x2="23" y2="12" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="13" y1="16" x2="23" y2="16" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="13" y1="20" x2="23" y2="20" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="13" y1="24" x2="19" y2="24" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function ChannelIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="6" width="12" height="24" rx="3" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <rect x="20" y="6" width="12" height="24" rx="3" stroke="#E8C97A" strokeWidth="1.5" fill="none" opacity="0.7" />
      <line x1="7" y1="12" x2="13" y2="12" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="7" y1="16" x2="13" y2="16" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <line x1="23" y1="12" x2="29" y2="12" stroke="#E8C97A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <line x1="23" y1="16" x2="29" y2="16" stroke="#E8C97A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function CompatIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="12" cy="18" r="8" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="18" r="8" stroke="#E8C97A" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M18 11C20.2 13.5 20.2 22.5 18 25" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function DiscordNativeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="7" width="30" height="22" rx="5" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="18" r="3" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
      <circle cx="23" cy="18" r="3" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
      <path d="M10 12C10 12 12 10 18 10C24 10 26 12 26 12" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 24C10 24 12 26 18 26C24 26 26 24 26 24" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

// ─── Local sub-components ────────────────────────────────────────────────────

function TechBadge({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex flex-col items-start gap-1 px-6 py-5 rounded-lg border border-gold/15 bg-navy/40 hover:border-gold/40 transition-all duration-300 min-w-[200px]">
      <span className="font-ui text-gold text-sm font-semibold tracking-wide">{name}</span>
      <span className="font-body text-muted text-xs leading-tight">{desc}</span>
    </div>
  )
}

function Step({
  number,
  title,
  body,
  icon,
  delay = 0,
}: {
  number: string
  title: string
  body: string
  icon: React.ReactNode
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay} className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-3 bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)]">
          <span className="font-display text-gold text-xl">{number}</span>
        </div>
        <div className="hidden md:block w-px flex-1 bg-gold/15 min-h-[60px]" />
      </div>
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="font-ui text-parchment text-xl font-semibold tracking-wide">{title}</h3>
        </div>
        <p className="font-body text-muted text-lg leading-relaxed">{body}</p>
      </div>
    </ScrollReveal>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SessionPage() {
  return (
    <>
      <Nav />
      <ScrollTracker sections={[
        { id: 'hero',        label: 'I. The Table' },
        { id: 'problem',     label: 'II. The Problem' },
        { id: 'how-it-works', label: 'III. How It Works' },
        { id: 'outputs',     label: 'IV. The Outputs' },
        { id: 'privacy',     label: 'V. Privacy' },
        { id: 'features',    label: 'VI. Features' },
        { id: 'crosssell',   label: 'VII. The Pair' },
        { id: 'pricing',     label: 'VIII. Pricing' },
      ]} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-[80vh] flex flex-col justify-end arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/session-banner.png"
            alt="Soulogos Session -- a self-hosted transcription companion for Dungeon Masters"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,13,20,0.88)_0%,rgba(10,13,20,0.45)_50%,rgba(10,13,20,0.25)_100%)]" />
        </div>

        {/* Session logo floating right, mirrors homepage lantern treatment */}
        <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none hidden lg:flex items-center justify-center pr-4 opacity-[0.85] mix-blend-screen translate-x-[18%] mt-8">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src="/session-lantern.png"
              alt="Soulogos Session Lantern"
              fill
              sizes="500px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom: Wordmark + Headline + body + CTAs */}
        <div className="relative z-10 max-w-7xl w-full mr-auto">
          {/* Wordmark block */}
          <div className="max-w-3xl w-full mb-8 animate-[fade-up_0.6s_ease-out_forwards]">
            <div className="flex flex-col items-start text-left mb-8 w-full">
              <h2 className="font-display text-[#C9A84C] tracking-[0.15em] text-[clamp(2rem,4vw,3rem)] leading-none [text-shadow:0_0_40px_rgba(201,168,76,0.25)] uppercase">
                Soulogos Session
              </h2>
              <p className="font-ui text-[#C9A84C] tracking-[0.25em] text-[clamp(0.9rem,1.8vw,1.4rem)] uppercase leading-none mt-5 pl-[3px] whitespace-nowrap">
                by Cognition &amp; Chaos
              </p>
            </div>
            <div className="py-4 w-full">
              <div className="w-48 h-[1px] bg-[linear-gradient(90deg,rgba(201,168,76,0.35)_0%,transparent_100%)]" />
            </div>
          </div>

          <h1 className="font-display text-parchment leading-tight mb-6 text-[clamp(2.4rem,5.4vw,4.08rem)] [text-shadow:0_0_60px_rgba(201,168,76,0.15)] animate-[fade-up_0.6s_ease-out_forwards] delay-100">
            Your table, remembered.
          </h1>
          <p className="font-body text-muted max-w-xl mb-10 text-[clamp(1.1rem,2vw,1.25rem)] leading-[1.8] animate-[fade-up_0.6s_ease-out_forwards] delay-200">
            A self-hosted transcription companion for Dungeon Masters. Session records your game, transcribes it on your own machine, and turns it into a structured debrief and a player recap. Automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 animate-[fade-up_0.6s_ease-out_forwards] delay-300">
            <a
              href="#pricing"
              className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
            >
              Get Session
            </a>
            <a
              href="#pricing"
              className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-parchment border border-gold/40 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center"
            >
              Get the Bundle
            </a>
            <a
              href="/setup"
              className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-parchment border border-gold/40 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
      <section id="problem" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <p className="font-body italic text-[clamp(1.4rem,2.5vw,2rem)] text-gold leading-snug">The session ends. The memory doesn't have to.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-muted text-lg leading-relaxed max-w-2xl">
              You ran four hours of the best session yet. Now it is Thursday and you are staring at a blank prep doc. Who did the party promise to help? Which NPC turned on them? What was that name the rogue gave the innkeeper? The session happened. The memory of it is already going.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-6">
            <p className="font-body text-muted text-lg leading-relaxed max-w-2xl">
              Most DMs solve this by scribbling notes mid-game and missing the table, or by remembering nothing and winging it. There is a better way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_50%,#0A0D14_100%)]">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">Record. Transcribe. Remember.</h2>
          </ScrollReveal>

          <div className="max-w-3xl">
            <Step
              number="I"
              title="Record"
              icon={<RecordIcon />}
              body="Session joins your Discord voice channel and captures the table. Pause anytime -- the bot stays connected while you handle side conversations or breaks."
              delay={0.1}
            />
            <Step
              number="II"
              title="Transcribe"
              icon={<TranscribeIcon />}
              body="Audio is transcribed locally on your own machine using faster-whisper. Your session audio never leaves your hardware."
              delay={0.2}
            />
            <Step
              number="III"
              title="Remember"
              icon={<RememberIcon />}
              body="One click turns the raw transcript into two finished documents written for two different audiences. Your debrief and your recap, done."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── THE TWO OUTPUTS ───────────────────────────────────────────── */}
      <section id="outputs" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">One recording. Two documents.</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={0.1}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/25 h-full bg-[linear-gradient(135deg,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_100%)]">
                <div className="overline mb-2">FOR THE DM ONLY</div>
                <h3 className="font-display text-gold text-2xl mb-4 leading-snug">The Structured Debrief</h3>
                <p className="font-body text-muted text-lg leading-relaxed">
                  A private breakdown of what actually happened. Canon locked this session. NPCs whose loyalties shifted. Arc beats for every player character. Threads opened and closed. What is bearing down on the party next session. Everything you need to prep, and nothing the players should see.
                </p>
                <p className="font-body text-muted text-sm italic mt-6">Posted privately to your DM channel.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/10 h-full bg-navy/40">
                <div className="overline mb-2">FOR YOUR PLAYERS</div>
                <h3 className="font-display text-parchment text-2xl mb-4 leading-snug">The Player Recap</h3>
                <p className="font-body text-muted text-lg leading-relaxed">
                  A short spoiler-safe recap written in your campaign's voice, ready to drop in Discord before next game. It tells the players what they experienced, names nothing they should not know, and reads like the opening of the next chapter.
                </p>
                <p className="font-body text-muted text-sm italic mt-6">Posted to your player channel automatically.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRIVACY ───────────────────────────────────────────────────── */}
      <section id="privacy" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_50%,#0A0D14_100%)]">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">Runs on your machine. Your keys, your choice.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-muted text-lg leading-relaxed max-w-2xl mb-8">
              Session is self-hosted on your own hardware. Transcription happens locally with faster-whisper, so your session audio is never uploaded anywhere. To generate a debrief or recap, the transcript is sent to the AI provider you choose -- OpenAI, Google Gemini, or Anthropic -- using your own API key. No lock-in, no middleman, no subscription. You decide which company sees your text, and you pay them directly.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-stretch justify-start gap-5">
              <TechBadge name="OpenAI" desc="GPT-4o and compatible models" />
              <TechBadge name="Google Gemini" desc="Gemini Pro and Flash models" />
              <TechBadge name="Anthropic" desc="Claude Sonnet and Haiku models" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURE LIST ──────────────────────────────────────────────── */}
      <section id="features" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">Everything at the Table</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <FeatureCard
              icon={<PauseIcon />}
              title="Pause and Resume"
              body="Stop capturing mid-session and pick back up without missing a beat. The bot stays in your voice channel while paused."
              delay={0.1}
            />
            <FeatureCard
              icon={<TagIcon />}
              title="Session Naming"
              body="Tag each recording with a name. Crown of the Oathbreaker Session 6 is easier to find than a timestamp."
              delay={0.2}
            />
            <FeatureCard
              icon={<ScrollDocIcon />}
              title="Raw Transcript Export"
              body="Get the full word-for-word transcript with timestamps. No AI, no interpretation, just the record."
              delay={0.3}
            />
            <FeatureCard
              icon={<ChannelIcon />}
              title="Dual Channel Routing"
              body="DM debrief goes to your private prep channel. Player recap goes to your player channel. Automatic, every time."
              delay={0.4}
            />
            <FeatureCard
              icon={<CompatIcon />}
              title="Works Alongside Soulogos"
              body="Both bots run in the same voice channel at the same time. NPCs speak. Session listens. No conflict."
              delay={0.5}
            />
            <FeatureCard
              icon={<DiscordNativeIcon />}
              title="Discord Native"
              body="Everything happens in Discord. No extra apps, no browser tabs, no switching contexts mid-session."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* ── CROSS-SELL ────────────────────────────────────────────────── */}
      <section id="crosssell" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_50%,#0A0D14_100%)]">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">Pair It With Soulogos</h2>
          </ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
            <ScrollReveal delay={0.1} className="flex-1">
              <p className="font-body text-muted text-lg leading-relaxed mb-8 max-w-xl">
                Session remembers your table. Soulogos gives it a voice. Together they are a complete DM toolkit -- NPCs that speak in the moment, and a record that outlives the session.
              </p>
              <a
                href="/"
                className="inline-block font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-parchment border border-gold/40 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore Soulogos
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex-shrink-0">
              <Image
                src="/lantern-only.png"
                alt="Soulogos Lantern"
                width={48}
                height={48}
                className="object-contain opacity-80"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PRICING CTA ───────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-16 w-full overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_50%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">The Unending Record</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-2">
            <p className="section-subheading">One purchase. No subscription.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mb-10">
            <p className="font-body text-muted text-lg leading-relaxed max-w-xl mt-4">
              Session is available as a standalone purchase or bundled with Soulogos. Early waitlist members get founding-tier pricing.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/20 h-full bg-navy/30 flex flex-col gap-6">
                <div>
                  <h3 className="font-ui text-parchment text-xl font-semibold tracking-wide mb-1">Session Alone</h3>
                  <p className="font-body text-muted text-base italic">The complete transcription companion.</p>
                  <p className="font-display text-gold text-2xl mt-4">Price TBD</p>
                </div>
                <a
                  href="#"
                  className="font-ui tracking-widest uppercase text-sm px-8 py-4 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)] text-center"
                >
                  Get Session
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/25 h-full bg-[linear-gradient(135deg,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_100%)] flex flex-col gap-6">
                <div>
                  <h3 className="font-ui text-parchment text-xl font-semibold tracking-wide mb-1">Soulogos + Session Bundle</h3>
                  <p className="font-body text-muted text-base italic">Both tools. One table.</p>
                  <p className="font-display text-gold text-2xl mt-4">Price TBD</p>
                </div>
                <a
                  href="#"
                  className="font-ui tracking-widest uppercase text-sm px-8 py-4 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)] text-center"
                >
                  Get the Bundle
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-muted text-sm italic">
              Already own Soulogos? Session can be added separately.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="border-t border-gold/10 arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-12 pb-12 text-left bg-[#050709]">
        <div className="max-w-7xl w-full mr-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image src="/lantern-only.png" alt="Soulogos Lantern Logo" width={32} height={32} className="object-contain" />
              <div>
                <span className="font-display text-parchment tracking-wide text-xl block [text-shadow:0_0_20px_rgba(201,168,76,0.3)]">
                  Soulogos
                </span>
                <span className="font-ui text-gold text-xs tracking-widest uppercase">
                  by Cognition &amp; Chaos
                </span>
              </div>
            </div>
            <p className="font-body text-muted text-base italic mb-1">
              Give your NPCs a voice. Give them a soul.
            </p>
            <p className="font-body text-muted text-base italic mb-1">
              Your table, remembered.
            </p>
            <p className="font-body text-muted/50 text-sm italic mb-6">
              Built with obsession by a Dungeon Master who got tired of flat NPCs.
            </p>
            <p className="font-ui text-muted text-xs tracking-widest uppercase">
              soulogos.com &nbsp;|&nbsp; soulogos.gg
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-6">
              <a
                href="https://discord.gg/u6P8shaMZp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-muted text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                Discord
              </a>
              <a
                href="mailto:cognitionandchaos.studio@soulogos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-muted text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                Email
              </a>
            </div>
            <p className="font-ui text-muted/30 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} Soulogos by Cognition &amp; Chaos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
