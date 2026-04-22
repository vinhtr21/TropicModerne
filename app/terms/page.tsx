import Nav from '../components/Nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Tropic Moderne Vietnam',
  description: 'Terms and conditions for staying at Tropic Moderne Vietnam properties.',
}

export default function TermsPage() {
  return (
    <>
      <Nav active="terms" />
      <header className="page-hero">
        <div className="hero-bg with-blur" style={{ backgroundImage: "linear-gradient(160deg, rgba(26,22,16,0.55) 0%, rgba(61,47,30,0.3) 60%, rgba(184,154,106,0.15) 100%), url('https://lh3.googleusercontent.com/d/1LphV6aclAD62OzSWMuhZ-rvdFnY4LPYT')" }} />
        <div className="hero-content">
          <p className="hero-eyebrow">Terms &amp; Conditions</p>
          <h1 className="hero-title">Terms &amp; Conditions</h1>
          <p className="hero-sub">These terms govern how you use Tropic Moderne Vietnam&apos;s website and services. Please read them carefully before booking or interacting with any content.</p>
        </div>
      </header>
      <main>
        <section className="content-section">
          <p className="section-label">Terms of Stay</p>
          <h2 className="section-title">Thoughtfully simple, just as your stay should be.</h2>

          <div className="content-block">
            <h3>Arrival &amp; Departure</h3>
            <p>Check-in from 14:00 | Check-out before 12:00. Early arrival or late departure can be arranged subject to availability.</p>
          </div>
          <div className="content-block">
            <h3>Reservations</h3>
            <p>Your stay is confirmed once payment has been received. We will guide you through the process to keep everything seamless.</p>
          </div>
          <div className="content-block">
            <h3>Flexibility</h3>
            <p>We understand that plans may change. Cancellations will be handled with fairness and clarity, based on the agreed policy at the time of booking.</p>
          </div>
          <div className="content-block">
            <h3>Your Stay</h3>
            <p>Each villa is a private sanctuary. We kindly ask that registered occupancy is respected and the space is treated with care.</p>
          </div>
          <div className="content-block">
            <h3>Quiet Enjoyment</h3>
            <p>To maintain a peaceful environment, we ask that noise is kept low after 22:00. Events or gatherings may be arranged upon request.</p>
          </div>
          <div className="content-block">
            <h3>Resort Living</h3>
            <p>As part of Premier Village Danang Resort, certain guidelines apply to ensure a seamless experience for all guests.</p>
          </div>
          <div className="content-block">
            <h3>Detailed Terms &amp; Conditions</h3>
            <p>
              1. Check-in &amp; Check-out<br />
              Check-in: from 14:00 | Check-out: before 12:00<br />
              Early check-in / late check-out subject to availability and may incur additional charges.<br /><br />
              2. Booking &amp; Payment<br />
              A deposit or full payment is required to confirm the reservation. Bookings are not guaranteed until payment is received.<br /><br />
              3. Cancellation Policy<br />
              Free cancellation within 14 days prior to arrival. Late cancellations may incur partial or full charges. No-shows will be charged 100%.<br /><br />
              4. Security Deposit<br />
              A refundable security deposit may be required upon check-in. Damages, loss, or excessive cleaning will be deducted accordingly.<br /><br />
              5. Occupancy<br />
              Guests must not exceed the number stated in the reservation. Additional guests may incur extra charges or be denied access.<br /><br />
              6. House Rules<br />
              No parties or events without prior approval. Quiet hours: 22:00–08:00. No smoking inside the villa. No pets unless agreed in advance.<br /><br />
              7. Damages &amp; Liability<br />
              Guests are responsible for any damage caused during the stay. The host is not liable for loss of personal belongings or accidents.<br /><br />
              8. Resort Regulations<br />
              Guests must comply with all regulations of Premier Village Danang Resort.<br /><br />
              9. Force Majeure<br />
              The host is not responsible for disruptions caused by events beyond control (natural disasters, government actions, etc.)
            </p>
          </div>
          <p className="footer-note">Last updated: April 2026.</p>
        </section>
      </main>
    </>
  )
}
