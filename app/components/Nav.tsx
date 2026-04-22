'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Nav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="logo">
        <img src="https://lh3.googleusercontent.com/d/1QsJ27YbRVjrHlOT7tO0kb9-6SGkZ0mI6" alt="Tropic Moderne Logo" />
        <span className="logo-text">Tropic <span>Moderne </span>Vietnam</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/#properties" className={active === 'properties' ? 'active' : ''}>Properties</Link></li>
        <li><Link href="/about" className={active === 'about' ? 'active' : ''}>About Us</Link></li>
        <li><Link href="/our-story" className={active === 'our-story' ? 'active' : ''}>Our Story</Link></li>
        <li><Link href="/terms" className={active === 'terms' ? 'active' : ''}>Terms</Link></li>
        <li><Link href="/privacy" className={active === 'privacy' ? 'active' : ''}>Privacy</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
