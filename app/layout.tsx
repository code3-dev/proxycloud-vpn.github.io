import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProxyCloud - Fast, Unlimited, Safe VPN',
  description: 'ProxyCloud is a fast, unlimited, safe, free, open-source VPN with no ads and no logs for Android and Desktop (Windows, Linux, macOS).',
  keywords: 'ProxyCloud, VPN, free VPN, fast VPN, secure browsing, privacy protection, no ads, no logs, open source, Android VPN, Windows VPN, macOS VPN, Linux VPN, proxy, secure internet, private browsing, anonymous browsing, encrypted connection',
  authors: [{ name: 'Hossein Pira' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
