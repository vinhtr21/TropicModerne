import Nav from '../components/Nav'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Tropic Moderne Vietnam',
  description: 'Discover the philosophy behind Tropic Moderne Vietnam — refined tropical living in Da Nang.',
}

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <header className="page-hero">
        <div className="hero-bg with-blur" style={{ backgroundImage: "linear-gradient(160deg, rgba(26,22,16,0.55) 0%, rgba(61,47,30,0.3) 60%, rgba(184,154,106,0.15) 100%), url('https://lh3.googleusercontent.com/d/1_rl8OgPJYLyXvv61W0ymiuiFeXuRxzg6')" }} />
        <div className="hero-content">
          <p className="hero-eyebrow">About Us</p>
          <h1 className="hero-title">Crafting <em>Memories</em> in Paradise</h1>
          <p className="hero-sub">Discover the passion behind Tropic Moderne Vietnam</p>
          <a href="#story" className="hero-cta">Learn More</a>
        </div>
      </header>

      <section id="story">
        <div className="about-content">
          <div>
            <p className="section-label">About Us</p>
            <h2 className="section-title">A Philosophy of <em>Refined Tropical Living</em></h2>
            <p className="about-text">
              &ldquo;Tropic Moderne was born from a simple belief — that true luxury is not defined by excess, but by how a space makes you feel.
              <br /><br />
              Rooted in the spirit of tropical living, we curate a collection of private villas and residences where modern design meets the quiet beauty of nature. Each property is carefully selected not only for its location, but for its ability to create a sense of calm, intimacy, and belonging.
              <br /><br />
              We are drawn to spaces where light moves gently through open architecture, where indoor and outdoor living blend effortlessly, and where every detail contributes to a seamless experience.
              <br /><br />
              At Tropic Moderne, hospitality is deeply personal. We do not simply offer accommodation; we craft stays that feel considered, private, and quietly exceptional.
              <br /><br />
              This is Tropic Moderne. A private world, thoughtfully curated.&rdquo;
            </p>
          </div>
          <div className="about-details">
            <div className="about-item">
              <div className="about-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></div>
              <div className="about-text-content"><strong>Curated Selection</strong>Each property is handpicked for its unique charm, location, and quality, ensuring only the finest options for our guests.</div>
            </div>
            <div className="about-item">
              <div className="about-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg></div>
              <div className="about-text-content"><strong>Prime Locations</strong>Strategically located in Da Nang&apos;s most desirable areas, our properties offer convenience and breathtaking views.</div>
            </div>
            <div className="about-item">
              <div className="about-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <div className="about-text-content"><strong>Personalized Service</strong>Our dedicated team provides 24/7 concierge support, ensuring every detail of your stay is perfect.</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
