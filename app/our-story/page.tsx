import Nav from '../components/Nav'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story — Tropic Moderne Vietnam',
  description: 'The origin of Tropic Moderne — a passion for private, intentional, quietly refined spaces.',
}

export default function OurStoryPage() {
  return (
    <>
      <Nav active="our-story" />
      <header className="page-hero">
        <div className="hero-bg with-blur" style={{ backgroundImage: "linear-gradient(160deg, rgba(26,22,16,0.55) 0%, rgba(61,47,30,0.3) 60%, rgba(184,154,106,0.15) 100%), url('https://lh3.googleusercontent.com/d/1EJhIJP7SA7W4UfcnOQ3WpCxSSZsyfbcW')" }} />
        <div className="hero-content">
          <p className="hero-eyebrow">Our Story</p>
          <h1 className="hero-title">The Origin of <em>Tropic Moderne</em></h1>
          <p className="hero-sub">Discover the passion behind Tropic Moderne Vietnam</p>
          <a href="#story" className="hero-cta">Learn More</a>
        </div>
      </header>

      <section id="story">
        <div className="about-content">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Our <em>Passion</em> for Luxury Living</h2>
            <p className="about-text">
              &ldquo;Tropic Moderne began with a refusal — to settle for spaces that look good but feel nothing.
              I set out to create villas that are lived in, not just stayed in — private, intentional, and quietly refined.
              Every home is chosen by instinct, shaped by detail, and held to a standard I wouldn&apos;t compromise on.
              This is not mass hospitality — it&apos;s personal.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
