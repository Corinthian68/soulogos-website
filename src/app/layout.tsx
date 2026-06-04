import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soulogos by Cognition & Chaos - Give Your NPCs a Voice',
  description:
    'Soulogos is a Discord bot that brings tabletop RPG NPCs to life with AI-generated voices, deep character memory, and natural conversation. Built for Dungeon Masters. Powered by Claude AI and ElevenLabs.',
  metadataBase: new URL('https://soulogos.com'),
  openGraph: {
    title: 'Soulogos by Cognition & Chaos - Give Your NPCs a Voice',
    description:
      'The Discord bot that voices your tabletop NPCs. Powered by AI and brought to life with real speech.',
    url: 'https://soulogos.com',
    siteName: 'Soulogos by Cognition & Chaos',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soulogos - Give Your NPCs a Voice.',
    description: 'The Discord bot that voices your tabletop NPCs - powered by AI and real speech synthesis.',
  },
  keywords: [
    'tabletop RPG',
    'Discord bot',
    'NPC voices',
    'AI dungeon master',
    'ElevenLabs',
    'Claude AI',
    'TTRPG tools',
    'DnD Discord',
    'NPC generator',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-parchment font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
