import Nav from '../components/Nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Tropic Moderne Vietnam',
  description: 'How Tropic Moderne Vietnam collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav active="privacy" />
      <header className="page-hero">
        <div className="hero-bg with-blur" style={{ backgroundImage: "linear-gradient(160deg, rgba(26,22,16,0.55) 0%, rgba(61,47,30,0.3) 60%, rgba(184,154,106,0.15) 100%), url('https://lh3.googleusercontent.com/d/1_rl8OgPJYLyXvv61W0ymiuiFeXuRxzg6')" }} />
        <div className="hero-content">
          <p className="hero-eyebrow">Privacy Policy</p>
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-sub">We respect your privacy and are committed to protecting your personal information.</p>
        </div>
      </header>
      <main>
        <section className="content-section">
          <p className="section-label">Privacy</p>
          <h2 className="section-title">Your privacy, handled with care</h2>

          <div className="content-block">
            <p>At Tropic Moderne Vietnam, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          </div>
          <div className="content-block">
            <h3>Information we collect</h3>
            <p>We may collect personal information such as your name, email address, phone number, and payment details when you make a booking or contact us. We also collect non-personal information through cookies and analytics tools.</p>
          </div>
          <div className="content-block">
            <h3>How we use your information</h3>
            <p>Your information is used to process bookings, communicate with you, improve our services, and comply with legal obligations. We do not sell or share your personal data with third parties for marketing purposes.</p>
          </div>
          <div className="content-block">
            <h3>Cookies and tracking</h3>
            <p>Our website uses cookies to enhance your experience, analyze site traffic, and remember your preferences. You can control cookie settings through your browser.</p>
          </div>
          <div className="content-block">
            <h3>Data security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>
          <div className="content-block">
            <h3>Your rights</h3>
            <p>You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights or have questions about our privacy practices.</p>
          </div>
          <div className="content-block">
            <h3>Changes to this policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.</p>
          </div>
          <div className="content-block">
            <h3>Contact us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us through the details provided on our website.</p>
          </div>
          <p className="footer-note">Last updated: April 2026.</p>
        </section>
      </main>
    </>
  )
}
