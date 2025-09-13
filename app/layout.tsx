import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benedict Brady | Meridian',
  description: 'The personal website of Benedict Brady',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}