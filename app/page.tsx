import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tropic Moderne Vietnam — Luxury Villas & Apartments in Da Nang',
  description: 'Discover luxury villas and curated apartments in Da Nang, Vietnam. Exceptional stays with world-class service and unforgettable views.',
}

export default function Page() {
  return (
    <>
      <Nav />
      <HomePage />
      <Footer />
    </>
  )
}
