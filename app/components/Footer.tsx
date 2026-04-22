import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <Link href="/" className="logo">
            Tropic <span>Moderne </span>Vietnam
          </Link>
          <p className="footer-desc">Luxury villas and curated apartments in Da Nang, Vietnam. We offer exceptional stays with world-class service and unforgettable views.</p>
        </div>
        <div>
          <p className="footer-col-title">Properties</p>
          <ul className="footer-links">
            <li><Link href="/#properties">Eco Flow Villa</Link></li>
            <li><Link href="/#properties">The Palm Haven Villa</Link></li>
            <li><Link href="/#properties">Ocean Whisper Villa</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="#">Guest Reviews</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 The Tropic Moderne Vietnam. All rights reserved.</span>
        <span className="footer-copy">Da Nang, Vietnam</span>
      </div>
    </>
  )
}
