'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Nav, GoldRule, ScrollReveal, DiscordIcon } from '@/components'

// ─── Checkmark feature item ──────────────────────────────────────────────────
function CheckFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-gold/60 flex items-center justify-center">
        <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-body text-muted text-base leading-relaxed">{children}</span>
    </li>
  )
}

// ─── Pricing card ─────────────────────────────────────────────────────────────
function PricingCard({
  name,
  price,
  priceSuffix = 'one-time',
  tagline,
  features,
  ctaLabel,
  ctaHref,
  featured = false,
  badge,
  delay = 0,
}: {
  name: string
  price: string
  priceSuffix?: string
  tagline: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
  badge?: string
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex flex-col h-full p-8 rounded-lg border transition-colors duration-300 ${
          featured
            ? 'border-gold/50 bg-[linear-gradient(135deg,rgba(201,168,76,0.08)_0%,rgba(15,21,32,0.9)_100%)] shadow-[0_0_40px_rgba(201,168,76,0.12)]'
            : 'border-gold/20 bg-navy/40 hover:border-gold/40'
        }`}
      >
        {badge && (
          <span className="absolute -top-3 left-8 font-ui text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_100%)] text-void font-semibold">
            {badge}
          </span>
        )}

        <h3 className="font-ui text-parchment text-lg font-semibold tracking-wide mb-1">{name}</h3>
        <p className="font-body text-muted text-sm italic mb-5">{tagline}</p>

        <div className="mb-6">
          <span className="font-display text-gold text-4xl">{price}</span>
          <span className="font-body text-muted text-sm ml-2">{priceSuffix}</span>
        </div>

        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {features.map((feature) => (
            <CheckFeature key={feature}>{feature}</CheckFeature>
          ))}
        </ul>

        <a
          href={ctaHref}
          className={`font-ui tracking-widest uppercase text-sm px-6 py-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
            featured
              ? 'text-void font-semibold bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)] hover:brightness-110'
              : 'text-parchment border border-gold/40 hover:border-gold hover:bg-gold/5'
          }`}
        >
          {ctaLabel}
        </a>
      </motion.div>
    </ScrollReveal>
  )
}

// ─── API cost table ───────────────────────────────────────────────────────────
type ApiRow = {
  service: string
  detail: string
  status: 'Required' | 'Optional' | 'Free'
  cost: string
  note: string
}

function StatusBadge({ status }: { status: ApiRow['status'] }) {
  const styles = {
    Required: 'border-gold/40 text-gold',
    Optional: 'border-gold/20 text-muted',
    Free: 'border-green-400/40 text-green-400',
  }
  return (
    <span className={`inline-block font-ui text-xs tracking-wide rounded px-2 py-0.5 border ${styles[status]}`}>
      {status}
    </span>
  )
}

function ApiTable({ title, rows }: { title: string; rows: ApiRow[] }) {
  return (
    <div className="p-8 rounded-lg border border-gold/20 bg-navy/40">
      <h3 className="font-ui text-parchment text-lg font-semibold tracking-wide mb-6">{title}</h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gold/10">
            <th className="font-ui text-gold text-xs tracking-widest uppercase text-left pb-3 pr-2">Service</th>
            <th className="font-ui text-gold text-xs tracking-widest uppercase text-left pb-3 pr-2">Model</th>
            <th className="font-ui text-gold text-xs tracking-widest uppercase text-left pb-3 pr-2">Status</th>
            <th className="font-ui text-gold text-xs tracking-widest uppercase text-left pb-3">Cost</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.service} className="border-b border-gold/10 align-top">
              <td className="font-body text-parchment text-sm py-4 pr-2">{row.service}</td>
              <td className="font-body text-muted text-sm py-4 pr-2">{row.detail}</td>
              <td className="py-4 pr-2">
                <StatusBadge status={row.status} />
              </td>
              <td className="font-body text-muted text-sm py-4">{row.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="flex flex-col gap-3 mt-6">
        {rows.map((row) => (
          <li key={row.service} className="font-body text-muted text-sm italic leading-relaxed">
            <span className="text-parchment not-italic">{row.service}:</span> {row.note}
          </li>
        ))}
      </ul>
    </div>
  )
}

const SOULOGOS_API_ROWS: ApiRow[] = [
  {
    service: 'ElevenLabs TTS',
    detail: 'eleven_v3',
    status: 'Required',
    cost: 'Creator plan $22/mo',
    note: '~121K chars/mo included. A heavy session uses ~75K chars.',
  },
  {
    service: 'LLM Provider',
    detail: 'Pick one',
    status: 'Required',
    cost: '$5-15/mo typical',
    note: 'OpenAI, Anthropic, or Google Gemini. Weekly home game runs under $1/session.',
  },
]

const SESSION_API_ROWS: ApiRow[] = [
  {
    service: 'faster-whisper',
    detail: 'Local CPU',
    status: 'Free',
    cost: 'No key needed',
    note: 'Fully local. Included with install.',
  },
  {
    service: 'AssemblyAI',
    detail: 'Universal-2',
    status: 'Optional',
    cost: 'Free tier: 100 hrs/mo',
    note: 'Best accuracy. Free tier covers most home games. Paid $0.37/hr after.',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Is this really a one-time payment?',
    a: 'Yes. You pay once and own the software. No monthly fees, no per-session charges, no API costs beyond your own ElevenLabs and AI provider accounts.',
  },
  {
    q: 'What does self-hosted mean?',
    a: 'Soulogos runs on your own computer. Your campaign data, NPC souls, and session transcripts never leave your machine. We never see your content.',
  },
  {
    q: 'Do I need a subscription to ElevenLabs or an AI provider?',
    a: 'Yes. Soulogos brings its own voice and AI capabilities but you supply the API keys. ElevenLabs Creator plan runs about $22/month. AI costs depend on usage but typically $5-15/month for a weekly home game.',
  },
  {
    q: 'What is the Founder Tier?',
    a: 'A limited-time pricing tier for waitlist members only. You get the full bundle at a discount, a free upgrade to v2.0 when it ships, and your name in the founding member credits. Once we launch publicly this tier goes away.',
  },
  {
    q: 'When does v2.0 ship and what is in it?',
    a: 'v2.0 is planned for 2027 and will include VTT integration (Roll20, Foundry), a native desktop console, and deeper campaign tools. Founder Tier members get it free.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gold/10 py-6">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full text-left gap-6"
      >
        <span className="font-ui text-parchment text-lg font-semibold tracking-wide">{question}</span>
        <span
          className={`flex-shrink-0 font-display text-gold text-2xl leading-none transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-muted text-base leading-relaxed pt-4 max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <>
      <Nav />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-32 pb-10 overflow-hidden bg-[radial-gradient(ellipse_80%_70%_at_70%_30%,#111827_0%,#0A0D14_55%,#050709_100%)]"
      >
        <div className="max-w-4xl w-full">
          <ScrollReveal>
            <div className="overline mb-5">Pricing</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-parchment leading-tight mb-6 text-[clamp(2.2rem,5vw,3.8rem)] [text-shadow:0_0_60px_rgba(201,168,76,0.15)]">
              One Price.<br />
              <span className="text-[#E8C97A]">Your Table, Forever.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-muted max-w-xl text-[clamp(1.1rem,2vw,1.25rem)] leading-[1.8] mb-2">
              No subscriptions. No monthly bills. Pay once, run forever.
            </p>
          </ScrollReveal>
          <GoldRule />
        </div>
      </section>

      {/* ── PRICING CARDS ─────────────────────────────────────────────── */}
      <section id="pricing" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pb-32 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingCard
              name="Soulogos"
              price="$129"
              tagline="Give your NPCs a real voice and memory"
              features={[
                'Unlimited NPCs per campaign',
                'ElevenLabs voice integration',
                'Persistent NPC memory',
                'Syrinscape soundboard',
                'Authoring Console',
                'Self-hosted, your data stays yours',
                'Supports Claude, GPT, and Gemini',
                'Windows installer included',
                'One-time payment, no subscription',
              ]}
              ctaLabel="Join Waitlist"
              ctaHref="/#waitlist"
              delay={0.1}
            />
            <PricingCard
              name="Soulogos Session"
              price="$49"
              tagline="Your table, remembered"
              features={[
                'Real-time voice transcription',
                'Local Whisper STT (fully private)',
                'AI session debrief for DMs',
                'Player-facing recap generation',
                'Session archive and search',
                'Self-hosted, your data stays yours',
                'One-time payment, no subscription',
              ]}
              ctaLabel="Join Waitlist"
              ctaHref="/#waitlist"
              delay={0.2}
            />
            <PricingCard
              name="Bundle"
              price="$169"
              tagline="Save $9 vs buying separately"
              features={['Everything in Soulogos', 'Everything in Soulogos Session', 'One-time payment, no subscription']}
              ctaLabel="Join Waitlist"
              ctaHref="/#waitlist"
              featured
              badge="Best Value"
              delay={0.3}
            />
            <PricingCard
              name="Founder Tier"
              price="$99"
              priceSuffix="bundle"
              tagline="Limited time for waitlist members"
              features={[
                'Everything in the bundle',
                'Free upgrade to v2.0 when it ships',
                'Founding member credit in the app',
                'Lock in before launch pricing ends',
              ]}
              ctaLabel="Claim Founder Pricing"
              ctaHref="/#waitlist"
              featured
              badge="Waitlist Only"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ── SOUL PACKS ────────────────────────────────────────────────── */}
      <section
        id="packs"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-32 bg-[linear-gradient(180deg,#0A0D14_0%,#0F1520_50%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">Expand Your World</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-10">
            <p className="font-body text-muted text-lg leading-relaxed max-w-2xl mt-4">
              Soul Packs are curated collections of ready-to-deploy NPCs, complete with voice
              direction and token art prompts already written. Drop them into any campaign,
              any system, no authoring required.
            </p>
          </ScrollReveal>

          <div className="max-w-md">
            <ScrollReveal delay={0.2}>
              <div className="relative flex flex-col h-full p-8 rounded-lg border border-gold/20 bg-navy/40">
                <span className="absolute -top-3 left-8 font-ui text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full border border-gold/40 text-gold bg-void">
                  Coming Soon
                </span>
                <h3 className="font-ui text-parchment text-lg font-semibold tracking-wide mb-1">Soul Pack 1</h3>
                <p className="font-body text-muted text-sm italic mb-5">Villains and Antagonists</p>
                <div className="mb-6">
                  <span className="font-display text-gold text-3xl">$19</span>
                </div>
                <ul className="flex flex-col gap-3">
                  <CheckFeature>25 original NPC villains ready to deploy</CheckFeature>
                  <CheckFeature>Voice direction prompts included</CheckFeature>
                  <CheckFeature>Token image prompts included</CheckFeature>
                  <CheckFeature>Works in any campaign, any system</CheckFeature>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-muted text-sm italic mt-8">More packs in development.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── API COSTS ─────────────────────────────────────────────────── */}
      <section id="api-costs" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-32 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-2">
            <h2 className="section-heading">What APIs Will I Need?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-10">
            <p className="font-body text-muted text-lg leading-relaxed max-w-2xl mt-4">
              Soulogos is self-hosted. You bring your own API keys. These are the third-party
              services required and what they typically cost for a weekly home game.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal delay={0.2}>
              <ApiTable title="Soulogos -- NPC Voice Engine" rows={SOULOGOS_API_ROWS} />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ApiTable title="Soulogos Session -- Transcription" rows={SESSION_API_ROWS} />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-muted text-sm italic mt-8">
              API costs are controlled entirely by you. Use lighter models or fewer echo blocks
              to reduce spend. A typical 4-hour session costs $5-15 depending on NPC voice volume.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section id="faq" className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-32 w-full">
        <div className="max-w-7xl w-full mr-auto">
          <GoldRule />
          <ScrollReveal className="mb-10">
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl">
              {FAQS.map((item, i) => (
                <FAQItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section
        id="cta"
        className="relative arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-32 overflow-hidden text-left bg-[radial-gradient(ellipse_70%_60%_at_30%_50%,rgba(201,168,76,0.06)_0%,rgba(15,21,32,0.8)_50%,#0A0D14_100%)]"
      >
        <div className="max-w-7xl w-full mr-auto">
          <ScrollReveal>
            <h2 className="font-display text-parchment mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] [text-shadow:0_0_40px_rgba(201,168,76,0.2)]">
              Ready to Give Your NPCs<br />
              <span className="text-[#E8C97A]">a Voice?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              <a
                href="/#waitlist"
                className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-void font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] bg-[linear-gradient(135deg,#C9A84C_0%,#E8C97A_50%,#C9A84C_100%)] shadow-[0_4px_24px_rgba(201,168,76,0.35)]"
              >
                Join Waitlist
              </a>
              <a
                href="https://discord.gg/u6P8shaMZp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui tracking-widest uppercase text-base px-10 py-5 rounded-lg text-parchment border border-gold/40 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <DiscordIcon size={16} />
                Join Discord
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="border-t border-gold/10 arcanum-section pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-12 pb-12 text-left bg-[#050709]">
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
