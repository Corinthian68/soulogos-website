'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Nav } from '@/components'

// ─── Step content types ──────────────────────────────────────────────────────

type StepData = {
  number: string
  label: string
  title: string
  body: React.ReactNode
}

// ─── Checklist item ──────────────────────────────────────────────────────────

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4 py-4 border-b border-gold/10 last:border-b-0">
      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-gold/60 flex items-center justify-center">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-body text-parchment text-lg leading-relaxed">{children}</span>
    </li>
  )
}

// ─── Screen badge (wizard screens) ───────────────────────────────────────────

function ScreenBadge({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center font-ui text-gold text-xs tracking-widest">
        {n}
      </span>
      <span className="font-body text-parchment text-lg leading-relaxed">{label}</span>
    </div>
  )
}

// ─── Step definitions ────────────────────────────────────────────────────────

const STEPS: StepData[] = [
  {
    number: '01',
    label: 'What you need',
    title: 'Gather your keys.',
    body: (
      <div>
        <p className="font-body text-muted text-lg leading-relaxed mb-8">
          Soulogos is a one-time purchase. There is no subscription and no SaaS. You bring
          your own API keys and pay your providers directly — typically $25–40 per month for
          an active home game.
        </p>

        <ul className="mb-8">
          <CheckItem>
            <span>
              <span className="text-gold font-ui text-sm tracking-widest uppercase">Discord Bot Token</span>
              <br />
              <span className="text-muted text-base leading-relaxed">
                From the{' '}
                <a
                  href="https://discord.com/developers/applications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/80 hover:text-gold underline underline-offset-2 transition-colors"
                >
                  Discord Developer Portal
                </a>
                . Create an application, add a Bot, and copy the token.
              </span>
            </span>
          </CheckItem>
          <CheckItem>
            <span>
              <span className="text-gold font-ui text-sm tracking-widest uppercase">AI Provider Key</span>
              <br />
              <span className="text-muted text-base leading-relaxed">
                Anthropic, OpenAI, or Google Gemini — one is enough. Anthropic Claude is
                recommended for NPC depth and consistency.
              </span>
            </span>
          </CheckItem>
          <CheckItem>
            <span>
              <span className="text-gold font-ui text-sm tracking-widest uppercase">ElevenLabs API Key</span>
              <br />
              <span className="text-muted text-base leading-relaxed">
                Required for NPC voice. The Creator plan ($22/month) covers a full campaign's
                worth of TTS. Text-only mode works without it.
              </span>
            </span>
          </CheckItem>
          <CheckItem>
            <span>
              <span className="text-gold font-ui text-sm tracking-widest uppercase">Discord Server ID</span>
              <span className="font-body text-muted text-sm ml-2 italic">(recommended)</span>
              <br />
              <span className="text-muted text-base leading-relaxed">
                Your Guild ID. Enable Developer Mode in Discord, right-click your server, and
                copy the ID. The setup wizard will prompt for this.
              </span>
            </span>
          </CheckItem>
        </ul>

        <p className="font-body text-muted text-base leading-relaxed italic">
          The setup wizard accepts all four keys step by step. You do not need to write anything
          to a config file by hand.
        </p>
      </div>
    ),
  },

  {
    number: '02',
    label: 'Download and install',
    title: 'One installer. No terminal.',
    body: (
      <div>
        <p className="font-body text-muted text-lg leading-relaxed mb-8">
          Download the installer from GitHub Releases, run it, and Soulogos installs itself.
          No admin rights required. No Python. No Docker.
        </p>

        <a
          href="https://github.com/Corinthian68/Soulogos/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)] mb-10 block w-fit"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2V12M9 12L5 8M9 12L13 8" stroke="#0A0D14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 14H16" stroke="#0A0D14" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Download SoulogosInstaller.exe
        </a>

        <ul className="space-y-4 mb-8">
          {[
            ['No administrator rights required', 'Installs to %LOCALAPPDATA%\\Soulogos — entirely inside your user profile.'],
            ['Installs silently in seconds', 'The installer bundles the full runtime. Nothing to configure before running it.'],
            ['Launches automatically', 'The bot starts immediately after installation and opens the setup wizard in your browser.'],
            ['Optional desktop shortcut', 'The installer offers a desktop shortcut; the system tray icon is always available to relaunch.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-3" />
              <span>
                <span className="font-ui text-parchment text-sm tracking-wide uppercase">{title}</span>
                <br />
                <span className="font-body text-muted text-base leading-relaxed">{desc}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-lg border border-gold/15 bg-navy/40 px-6 py-5">
          <p className="font-ui text-gold text-xs tracking-widest uppercase mb-1">Windows SmartScreen</p>
          <p className="font-body text-muted text-base leading-relaxed">
            If Windows Defender prompts you, click <em className="text-parchment">More info</em> then{' '}
            <em className="text-parchment">Run anyway</em>. The executable is unsigned during early
            access; code signing ships with v1.0.
          </p>
        </div>
      </div>
    ),
  },

  {
    number: '03',
    label: 'Setup wizard',
    title: 'Five screens. Done.',
    body: (
      <div>
        <p className="font-body text-muted text-lg leading-relaxed mb-8">
          On first launch, Soulogos opens your browser to{' '}
          <span className="font-ui text-gold text-sm tracking-wide">localhost:8765/setup</span>.
          Walk through five short screens and the wizard writes your configuration automatically.
          You never touch a file.
        </p>

        <div className="space-y-5 mb-10">
          <ScreenBadge n="1" label="Discord — paste your bot token and confirm your server ID." />
          <ScreenBadge n="2" label="AI Provider — choose Anthropic, OpenAI, or Gemini and paste your key." />
          <ScreenBadge n="3" label="Voice — paste your ElevenLabs key, or skip to run text-only." />
          <ScreenBadge n="4" label="Options — set your NPC channel and any optional preferences." />
          <ScreenBadge n="5" label="Review — confirm everything and click Launch. That's it." />
        </div>

        <div className="rounded-lg border border-gold/25 bg-[linear-gradient(135deg,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_100%)] px-6 py-6">
          <p className="font-ui text-gold text-xs tracking-widest uppercase mb-2">What happens next</p>
          <p className="font-body text-muted text-base leading-relaxed">
            The wizard writes a <span className="font-ui text-parchment text-sm">.env</span> file next to the
            executable and relaunches the bot. The lantern icon appears in your system tray. The bot
            joins your Discord server and waits for players.
          </p>
        </div>
      </div>
    ),
  },

  {
    number: '04',
    label: "You're live",
    title: "Your NPCs are waiting.",
    body: (
      <div>
        <p className="font-body text-muted text-lg leading-relaxed mb-8">
          The bot is connected and your first NPC is ready to speak. Here's how players and
          the DM interact with it from day one.
        </p>

        <div className="space-y-6 mb-10">
          {[
            {
              label: 'Text commands',
              detail:
                'Type in any configured text channel. Soulogos reads the message, routes it to the right NPC, and replies in-thread in character.',
            },
            {
              label: 'Voice — just say their name',
              detail:
                'In a connected voice channel, speak the NPC\'s name to address them directly. Whisper transcribes your speech and routes it automatically. No slash commands, no buttons.',
            },
            {
              label: 'Memory persists across sessions',
              detail:
                'Every NPC remembers what players told them, what they promised, and what they witnessed. Continuity is automatic.',
            },
          ].map(({ label, detail }) => (
            <div key={label} className="flex items-start gap-5">
              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gold" />
              <div>
                <p className="font-ui text-parchment text-sm tracking-wide uppercase mb-1">{label}</p>
                <p className="font-body text-muted text-base leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gold/15 bg-navy/40 px-6 py-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/lantern-only.png" alt="Soulogos tray icon" width={24} height={24} className="object-contain opacity-80" />
            <p className="font-ui text-gold text-xs tracking-widest uppercase">System Tray</p>
          </div>
          <p className="font-body text-muted text-base leading-relaxed">
            The lantern in your Windows notification area shows the bot's status — lit for connected,
            dimmed for disconnected. Right-click to open the{' '}
            <span className="text-parchment">Authoring Console</span>, view logs, or quit.
          </p>
        </div>

        <p className="font-body text-parchment text-lg leading-relaxed italic">
          The Authoring Console is where you write Souls, assign voices, and manage your campaign.
          Open it any time from the tray icon or at{' '}
          <span className="font-ui text-gold text-sm not-italic">localhost:8765/authoring/ui</span>.
        </p>
      </div>
    ),
  },
]

// ─── Main page ───────────────────────────────────────────────────────────────

export default function SetupPage() {
  const [active, setActive] = useState(0)

  const step = STEPS[active]
  const isFirst = active === 0
  const isLast = active === STEPS.length - 1

  return (
    <>
      <Nav />

      {/* ── BACKGROUND LANTERN ─────────────────────────────────────────── */}
      {/* Upper-right, low opacity — atmosphere without competing with left-aligned text */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex items-start justify-end"
        aria-hidden="true"
      >
        <div className="relative w-[700px] h-[700px] opacity-20">
          <Image
            src="/lantern-only.png"
            alt=""
            fill
            sizes="700px"
            className="object-contain"
          />
        </div>
      </div>

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      {/*
        Inline paddingTop bypasses Tailwind layer cascade vs. the arcanum-section
        !important conflict. Nav is fixed at 68px tall; 120px puts the heading 52px below it.
        Left padding matches the arcanum-section gutter values explicitly.
      */}
      <section
        className="relative z-10 pr-8 md:pr-16 lg:pr-24 xl:pr-32 pb-16 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,rgba(201,168,76,0.05)_0%,transparent_70%)]"
        style={{ paddingTop: '120px' }}
      >
        <div className="max-w-3xl pl-6 md:pl-20 lg:pl-24 xl:pl-32">
          <div className="overline mb-5 animate-[fade-up_0.5s_ease-out_forwards]">Setup Guide</div>
          <h1
            className="font-display text-parchment leading-tight mb-6 text-[clamp(2rem,4.5vw,3.4rem)] [text-shadow:0_0_60px_rgba(201,168,76,0.12)] animate-[fade-up_0.5s_ease-out_0.1s_both]"
          >
            Up and running{' '}
            <span className="text-[#E8C97A]">in four steps.</span>
          </h1>
          <p className="font-body text-muted text-[clamp(1.1rem,2vw,1.25rem)] leading-relaxed animate-[fade-up_0.5s_ease-out_0.2s_both]">
            No command line. No Python environment. No config files to edit by hand.
            Download the installer, answer five questions, and your NPCs are live.
          </p>
        </div>
      </section>

      {/* ── STEP TABS ──────────────────────────────────────────────────── */}
      <section className="relative z-10 arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pb-32">
        <div className="max-w-3xl">

          {/* Tab row */}
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Setup steps">
            {STEPS.map((s, i) => (
              <button
                key={s.number}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={[
                  'flex items-center gap-2 px-5 py-3 rounded-lg border transition-all duration-300 font-ui text-xs tracking-widest uppercase',
                  i === active
                    ? 'border-gold bg-gold/10 text-gold shadow-[0_0_16px_rgba(201,168,76,0.2)]'
                    : 'border-gold/20 text-muted hover:border-gold/40 hover:text-parchment',
                ].join(' ')}
              >
                <span className="opacity-60">{s.number}</span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Step card */}
          <div
            key={active}
            className="rounded-xl border border-gold/20 bg-[linear-gradient(135deg,rgba(15,21,32,0.8)_0%,rgba(10,13,20,0.95)_100%)] p-8 md:p-12 mb-8 animate-[fade-up_0.35s_ease-out_forwards]"
            role="tabpanel"
          >
            {/* Step header */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-[#C9A84C] text-[clamp(2.5rem,6vw,4rem)] leading-none opacity-30 select-none">
                {step.number}
              </span>
              <h2 className="font-display text-parchment text-[clamp(1.4rem,3vw,2rem)] leading-tight">
                {step.title}
              </h2>
            </div>

            {/* Step body */}
            <div>{step.body}</div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2" aria-label="Step progress">
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={[
                    'rounded-full transition-all duration-300',
                    i === active
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-gold/25 hover:bg-gold/50',
                  ].join(' ')}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActive(a => Math.max(0, a - 1))}
                disabled={isFirst}
                className="font-ui text-xs tracking-widest uppercase px-6 py-3 rounded-lg border border-gold/20 text-muted transition-all duration-300 hover:border-gold/50 hover:text-parchment disabled:opacity-25 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActive(a => Math.min(STEPS.length - 1, a + 1))}
                disabled={isLast}
                className="font-ui text-xs tracking-widest uppercase px-6 py-3 rounded-lg border border-gold/50 text-gold transition-all duration-300 hover:bg-gold/10 hover:border-gold disabled:opacity-25 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-gold/10 arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-12 pb-12 text-left bg-[#050709]">
        <div className="max-w-7xl w-full mr-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <a href="/" className="mb-4 flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
              <Image src="/lantern-only.png" alt="Soulogos Lantern Logo" width={32} height={32} className="object-contain" />
              <div>
                <span className="font-display text-parchment tracking-wide text-xl block [text-shadow:0_0_20px_rgba(201,168,76,0.3)]">
                  Soulogos
                </span>
                <span className="font-ui text-gold text-xs tracking-widest uppercase">
                  by Cognition &amp; Chaos
                </span>
              </div>
            </a>
            <p className="font-body text-muted text-base italic mb-1">
              Give your NPCs a voice. Give them a soul.
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
                href="https://github.com/Corinthian68/Soulogos/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-muted text-xs tracking-widest uppercase hover:text-gold transition-colors duration-300"
              >
                Download
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
