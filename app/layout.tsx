import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tropic Moderne Vietnam',
  description: 'Luxury villas and curated apartments in Da Nang, Vietnam.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
