'use client'

import Image from 'next/image'
import {
  Nav,
  ArcaneSigil,
  GoldRule,
  ScrollReveal,
  FeatureCard,
  WaitlistForm,
  DiscordIcon,
  ConsoleMockup,
  SyrinscapeCueBoard,
  ScrollTracker,
} from '@/components'

// ─── Icon components ────────────────────────────────────────────────────────
function QuillIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M28 4C28 4 32 8 32 16C32 24 18 32 6 30" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 4L10 28" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 28L8 34L14 30L10 28Z" fill="#C9A84C" />
      <circle cx="19" cy="13" r="2" fill="#E8C97A" opacity="0.6" />
    </svg>
  )
}

function VoiceIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="13" y="6" width="10" height="18" rx="5" stroke="#C9A84C" strokeWidth="1.5" />
      <path d="M8 20C8 26 28 26 28 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <line x1="18" y1="26" x2="18" y2="32" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="32" x2="24" y2="32" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 16 L6 16 M30 16 L32 16" stroke="#E8C97A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <path d="M3 12 L5 14 M31 14 L33 12" stroke="#E8C97A" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function D20Icon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <polygon points="18,3 33,12 33,24 18,33 3,24 3,12" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <polygon points="18,3 27,14 18,14 9,14" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.7" />
      <polygon points="18,14 27,14 33,24 18,33 3,24 9,14" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5" />
      <text x="18" y="25" textAnchor="middle" fill="#E8C97A" fontSize="10" fontFamily="serif" opacity="0.8">20</text>
    </svg>
  )
}

function SoulIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <ellipse cx="18" cy="16" rx="8" ry="10" stroke="#C9A84C" strokeWidth="1.5" />
      <ellipse cx="18" cy="13" rx="5" ry="6" fill="#D4E8FF" opacity="0.2" />
      <path d="M13 24 Q11 30 13 34" stroke="#D4E8FF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M23 24 Q25 30 23 34" stroke="#D4E8FF" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M18 26 Q18 30 18 34" stroke="#D4E8FF" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 4L6 9V20C6 27 18 33 18 33C18 33 30 27 30 20V9L18 4Z" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <path d="M12 18L16 22L24 14" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DiscordBadgeIcon() {
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

// ─── Step component ──────────────────────────────────────────────────────────
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
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="font-ui text-parchment text-xl font-semibold tracking-wide">{title}</h3>
        </div>
        <p className="font-body text-muted text-lg leading-relaxed">{body}</p>
      </div>
    </ScrollReveal>
  )
}

// ─── Tech Badge ──────────────────────────────────────────────────────────────
function TechBadge({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex flex-col items-start gap-1 px-6 py-5 rounded-lg border border-gold/15 bg-navy/40 hover:border-gold/40 transition-all duration-300 min-w-[200px]">
      <span className="font-ui text-gold text-sm font-semibold tracking-wide">{name}</span>
      <span className="font-body text-muted text-xs leading-tight">{desc}</span>
    </div>
  )
}

// ─── Audience Card ──────────────────────────────────────────────────────────
function AudienceCard({
  title,
  subtitle,
  body,
  delay = 0,
}: {
  title: string
  subtitle: string
  body: string
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay} className="flex-1">
      <div
        className="p-8 md:p-10 rounded-lg border border-gold/20 h-full transition-all duration-300 hover:border-gold/40 bg-[linear-gradient(135deg,rgba(15,21,32,0.8)_0%,rgba(10,13,20,0.9)_100%)]"
      >
        <div className="overline mb-2">{subtitle}</div>
        <h3 className="font-display text-parchment text-2xl mb-4 leading-tight">{title}</h3>
        <p className="font-body text-muted text-lg leading-relaxed">{body}</p>
      </div>
    </ScrollReveal>
  )
}

// ─── Hero mist gradient ──────────────────────────────────────────────────────
function MistGradient() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
      <div className="w-full h-64 bg-[linear-gradient(to_top,rgba(201,168,76,0.04)_0%,rgba(212,232,255,0.03)_40%,transparent_100%)] animate-[mist-rise_6s_ease-in-out_infinite]" />
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollTracker />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-0 flex flex-col text-left arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-28 pb-10 overflow-hidden bg-[radial-gradient(ellipse_80%_70%_at_70%_40%,#111827_0%,#0A0D14_55%,#050709_100%)]"
      >
        {/* Full logo image from spec */}
        <div className="absolute right-0 top-8 bottom-0 w-[55%] pointer-events-none hidden lg:flex items-center justify-end pr-16 opacity-80 mix-blend-screen translate-x-[10%]">
          <div className="relative w-[600px] h-[600px]">
            <Image
              src="/logo-full.png"
              alt="Soulogos Lantern Logo"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Faint sigil behind text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 overflow-hidden pointer-events-none -translate-x-1/4 opacity-30">
          <ArcaneSigil />
        </div>

        <MistGradient />

        <div className="max-w-7xl w-full mr-auto relative z-10 flex flex-col">
          {/* Top: Wordmark Block */}
          <div className="max-w-3xl w-full mb-20">
            <div className="flex flex-col items-start text-left mb-8 w-full animate-[fade-up_0.6s_ease-out_forwards]">
              <h1 className="font-display text-[#C9A84C] tracking-[0.15em] text-[clamp(2.8rem,6vw,4.5rem)] leading-none [text-shadow:0_0_40px_rgba(201,168,76,0.25)] uppercase">
                Soulogos
              </h1>
              <p className="font-ui text-[#C9A84C] tracking-[0.25em] text-[clamp(1.4rem,3.15vw,2.38rem)] uppercase leading-none mt-5 pl-[3px] whitespace-nowrap">
                by Cognition &amp; Chaos
              </p>
            </div>

            {/* Thin gold horizontal rule with vertical padding */}
            <div className="py-6 w-full animate-[fade-up_0.6s_ease-out_forwards] delay-75">
              <div className="w-48 h-[1px] bg-[linear-gradient(90deg,rgba(201,168,76,0.35)_0%,transparent_100%)]" />
            </div>
          </div>

          {/* Center/Bottom: Headline, body copy, and buttons */}
          <div className="max-w-3xl w-full mt-0 pb-0 pl-8">
            <div className="overline mb-10 animate-[fade-up_0.6s_ease-out_forwards] delay-100">
              COMING SOON, v0.5 IN ACTIVE DEVELOPMENT
            </div>

            <h2 className="font-display text-parchment leading-tight mb-6 text-[clamp(2.4rem,5.4vw,4.08rem)] [text-shadow:0_0_60px_rgba(201,168,76,0.15)] animate-[fade-up_0.6s_ease-out_forwards] delay-200">
              Give Your NPCs<br />
              <span className="text-[#E8C97A]">a Voice.</span>
              <br />
              Give Them a Soul.
            </h2>

            <p className="font-body text-muted max-w-xl mb-10 text-[clamp(1.1rem,2vw,1.25rem)] leading-[1.8] animate-[fade-up_0.6s_ease-out_forwards] delay-300">
              Soulogos is a Discord bot that brings your tabletop RPG NPCs to life
              with real AI-generated voices, deep character memory, and natural conversation.
              Your players talk. Your NPCs answer, in character, in voice, every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-10 animate-[fade-up_0.6s_ease-out_forwards] delay-400">
              <a
                href="#waitlist"
                id="hero-join-waitlist-btn"
                className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
              >
                Join the Waitlist
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-discord-btn"
                className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-parchment border border-gold/40 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <DiscordIcon size={16} />
                Join Our Discord
              </a>
            </div>

            <p className="font-ui text-muted text-xs tracking-widest uppercase animate-[fade-up_0.6s_ease-out_forwards] delay-500">
              Built for Dungeon Masters &nbsp;·&nbsp; Runs on Discord &nbsp;·&nbsp; v0.5 live with active campaigns
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS SOULOGOS ──────────────────────────────────────────── */}
      <section id="about" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-12">
            <h2 className="section-heading">What Is Soulogos?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal delay={0.1}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/10 bg-navy/30 h-full">
                <div className="overline mb-2">The Problem</div>
                <h3 className="font-display text-parchment text-2xl mb-4 leading-snug">Running NPCs is hard.</h3>
                <p className="font-body text-muted text-lg leading-relaxed">
                  You're tracking initiative, managing the map, handling rules questions,
                  and somehow you're also supposed to voice the innkeeper, the merchant,
                  the villain, and the captain of the guard, all with distinct personalities,
                  consistent backstories, and memorable delivery.
                </p>
                <p className="font-body text-muted text-lg leading-relaxed mt-4 italic">
                  Most DMs don't. They can't. There isn't time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-10 rounded-lg border border-gold/25 h-full bg-[linear-gradient(135deg,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_100%)]">
                <div className="overline mb-2">The Solution</div>
                <h3 className="font-display text-gold text-2xl mb-4 leading-snug">
                  Soulogos gives every NPC their own voice.
                </h3>
                <p className="font-body text-muted text-lg leading-relaxed">
                  Each NPC is a &quot;Soul&quot;, a fully authored character with a unique AI voice,
                  a deep personality, and memory of what's happened in your campaign.
                </p>
                <p className="font-body text-muted text-lg leading-relaxed mt-4">
                  Your players speak in Discord. The NPC responds out loud, in their voice,
                  in character. The bot handles the rest.
                </p>
                <p className="font-body text-parchment text-lg leading-relaxed mt-4 font-medium italic">
                  It's not a soundboard. It's not a chatbot.<br />
                  It's your cast, always ready.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_50%,#0A0D14_100%)]">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">How It Works</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-12">
            <p className="section-subheading">Three steps. No code required.</p>
          </ScrollReveal>

          <div className="max-w-3xl">
            <Step
              number="I"
              title="Author a Soul"
              icon={<QuillIcon />}
              body="You write the character. Their history, their voice, their secrets, their beliefs. The Authoring Console turns that into a living AI persona, consistent, deep, and distinctly theirs. Every Soul is a fully realized character, not a template."
              delay={0.1}
            />
            <Step
              number="II"
              title="Assign a Voice"
              icon={<VoiceIcon />}
              body="Choose from a library of AI voices powered by ElevenLabs. Each NPC gets their own voice ID, tuned with personality-specific settings for pacing, expression, and emotional weight. Your innkeeper doesn't sound like your villain."
              delay={0.2}
            />
            <Step
              number="III"
              title="Run the Session"
              icon={<D20Icon />}
              body="Your players speak in Discord. The NPC hears them, understands context, and responds, out loud, in character, in real time. DM tools let you control who speaks, when, and how. Cue your ambient audio. Set the scene. Run the cast."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURE DEEP DIVE ────────────────────────────────────────── */}
      <section id="features" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">Built for Real Campaigns</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-12">
            <p className="section-subheading">Everything a DM actually needs</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<SoulIcon />}
              title="Living Souls"
              body="Each NPC is authored as a Soul, a deep character bible covering history, beliefs, contradictions, relationships, and secrets. The AI knows what your NPC knows, and nothing more."
              delay={0.1}
            />
            <FeatureCard
              icon={<VoiceIcon />}
              title="Real Voices"
              body="Powered by ElevenLabs text-to-speech. Every NPC has a distinct, expressive voice tuned to their personality. Not a robot. Not a soundboard clip. A performance."
              delay={0.2}
            />
            <FeatureCard
              icon={<DiscordBadgeIcon />}
              title="Players Can Speak"
              body="Real-time speech-to-text lets your players talk naturally in Discord voice channels. NPCs hear them, process context, and respond in character, no typing required."
              delay={0.3}
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Multi-NPC Group Scenes"
              body="Run group threads where multiple NPCs are active simultaneously. Each NPC decides independently whether to respond. The scene unfolds naturally, no puppeteering required."
              delay={0.4}
            />
            <FeatureCard
              icon={<D20Icon />}
              title="Live Ambient Audio"
              body="Syrinscape integration streams live atmospheric audio directly into Discord alongside NPC voices. Combat music, tavern ambience, dungeon dread, cued from a single board during play."
              delay={0.5}
            />
            <FeatureCard
              icon={<QuillIcon />}
              title="Full DM Control"
              body="The Authoring Console gives you a live dashboard for managing NPCs, cues, and session flow. Mute NPCs, override responses, manage group scenes. You are always in command."
              delay={0.6}
            />
            <FeatureCard
              icon={<ShieldIcon />}
              title="Self-Hosted. Yours to Own."
              body="No subscription. No SaaS. Soulogos runs on your server, under your control. One-time license, self-deployed. Your campaign data stays on your hardware."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* ── AUTHORING CONSOLE ────────────────────────────────────────── */}
      <section
        id="console"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_60%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">The Soul Behind the Souls</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-12">
            <p className="section-subheading">Every NPC starts in the Authoring Console.</p>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <ScrollReveal delay={0.2}>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  The Authoring Console is Soulogos's web-based NPC management tool.
                  It's where Souls are born.
                </p>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  Each NPC gets a Soul document, a deep character bible covering their history,
                  voice, beliefs, contradictions, and relationships. The Console lets you write,
                  edit, and deploy Souls directly to the bot without touching a config file.
                </p>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  Pair every Soul with a Voice: choose a voice model, dial in the expressive
                  settings, and preview how your NPC sounds before your players ever hear them.
                </p>
                <p className="font-body text-parchment text-lg leading-relaxed font-medium italic">
                  Then run the session. The bot handles the rest.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full">
              <ScrollReveal delay={0.3}>
                <ConsoleMockup />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SYRINSCAPE INTEGRATION ───────────────────────────────────── */}
      <section id="syrinscape" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-12">
            <h2 className="section-heading">Set the Scene. Every Scene.</h2>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <ScrollReveal delay={0.1}>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  Soulogos integrates live with Syrinscape, the gold standard for
                  tabletop RPG ambient audio.
                </p>
                <p className="font-body text-muted text-lg leading-relaxed mb-6">
                  Build a cue board for each session: combat, exploration, social, dread.
                  During play, fire cues directly from Discord. Music, ambience, and NPC
                  voices all stream together into your voice channel.
                </p>
                <p className="font-body text-parchment text-lg leading-relaxed font-medium italic">
                  Your players don't hear a DM fumbling with a browser tab.<br/>
                  They hear a world.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full">
              <ScrollReveal delay={0.2}>
                <SyrinscapeCueBoard />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ───────────────────────────────────────────── */}
      <section
        id="who"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_60%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-12">
            <h2 className="section-heading">Built For</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <AudienceCard
              subtitle="For the DM"
              title="Dungeon Masters"
              body="You run the world. Soulogos runs the cast. Whether you prep deeply or wing it at the table, Soulogos gives your NPCs consistency and presence that pure improvisation can't match. Built for 5e, works with any system."
              delay={0.1}
            />
            <AudienceCard
              subtitle="For the Community"
              title="Discord Server Owners"
              body="Bring your community's world to life. Running a persistent world server? A roleplay community? A living campaign? Soulogos lets you deploy voiced, AI-driven NPCs into any Discord channel, characters your community can actually talk to."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ── TECH STRIP ───────────────────────────────────────────────── */}
      <section id="tech" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">The Stack Behind the Souls</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-stretch justify-start gap-5 mb-8 mt-10">
              <TechBadge name="Claude AI" desc="NPC reasoning & character voice" />
              <TechBadge name="ElevenLabs" desc="High-fidelity text-to-speech" />
              <TechBadge name="Syrinscape" desc="Live ambient audio integration" />
              <TechBadge name="Discord" desc="Native integration, no extra apps" />
              <TechBadge name="Faster-Whisper" desc="Real-time speech-to-text" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-ui text-gold text-sm tracking-widest uppercase mb-1">Built by a DM, for DMs</p>
            <p className="font-body text-muted text-base italic">
              v0.5 in active development. Live with real campaigns. 1,500+ tests passing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WAITLIST CTA ─────────────────────────────────────────────── */}
      <section
        id="waitlist"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-24 overflow-hidden text-left bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_50%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <ScrollReveal>
              <h2
                className="font-display text-parchment mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] [text-shadow:0_0_40px_rgba(201,168,76,0.2)]"
              >
                The Voices Are Ready.<br />
                <span className="text-[#E8C97A]">Are Your Players?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="font-body text-muted text-lg leading-relaxed max-w-md">
                Soulogos is in active development. A self-hosted license is planned for late 2026
                at a one-time price, no subscriptions. Early waitlist members get priority access
                and founding-tier pricing.
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full max-w-md shrink-0">
            <ScrollReveal delay={0.2}>
              <WaitlistForm />
            </ScrollReveal>
          </div>
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-discord-link"
                className="font-ui text-muted text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                Discord
              </a>
              <a
                href="mailto:cognitionandchaos.studio@soulogos.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-email-link"
                className="font-ui text-muted text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                Email
              </a>
            </div>
            <p className="font-ui text-muted/30 text-xs tracking-wider">
              © {new Date().getFullYear()} Soulogos by Cognition &amp; Chaos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
