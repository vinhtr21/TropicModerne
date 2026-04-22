'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const props: Record<string, { img: string; album: string[]; name: string; desc: string }> = {
  villa1: {
    img: 'https://lh3.googleusercontent.com/d/1v9tPPUxmPyIkc7sl6s56wz14gzUCjUDC',
    album: ['https://lh3.googleusercontent.com/d/1f1WvKybnsBpACchG26AbuDCcpMMsTqZy','https://lh3.googleusercontent.com/d/11NQrP1ATMq5UNKAGS8E3AufX4gYwjarn','https://lh3.googleusercontent.com/d/1PwQvIfdxYFd8-2TV8c-BNX4Y4ZqELAUD','https://lh3.googleusercontent.com/d/17veZYiwigqLsZ_2ZSN-qcnUDlW-Z5x8C','https://lh3.googleusercontent.com/d/1NhtLlmJudvAPezR1Ir15I2Vh4WZqH2-F','https://lh3.googleusercontent.com/d/1G6fFz-u0wanAa4eW1Z1cicmW7lTOdv0k','https://lh3.googleusercontent.com/d/1upe3y6xqsm0n_dmOnwgg9mhU-LgeT8Hm','https://lh3.googleusercontent.com/d/1wggB87EhzQCFY-jwGH-XgHXIRgdPZWvh','https://lh3.googleusercontent.com/d/1BGZlMJGyZLmwVQQpZe3acY2ExWVjr51U','https://lh3.googleusercontent.com/d/1naUBg2CL7dTjJnE8QMWZOE_CPhp2kqvr','https://lh3.googleusercontent.com/d/1z-BS_8d-E2tf3Mgp8eDYy8CsGkGvenkA','https://lh3.googleusercontent.com/d/1Qnbhoi7RTg9XQvH8Y_3eZG3NOs7pfA-i','https://lh3.googleusercontent.com/d/1sQ1TvbFWce6HGGxpRnQjQ8nGBpzDX4TJ','https://lh3.googleusercontent.com/d/1Dn6DnYOiF1b_tYNHbpTPC_GwCTPzOrw0','https://lh3.googleusercontent.com/d/1LphV6aclAD62OzSWMuhZ-rvdFnY4LPYT','https://lh3.googleusercontent.com/d/1019TVKYHbXALDLovz8Ky5b0MXlPVqa6h','https://lh3.googleusercontent.com/d/1dPbiFUqjumr5kxsQQ1jq1P1wX-Y72-Ym','https://lh3.googleusercontent.com/d/1x93OYauSfJ1VRBBof4zQYs5cowFd6BQj','https://lh3.googleusercontent.com/d/1VtUMYzyqSWXYkUcQz6-YHtOPsJ9UFC63','https://lh3.googleusercontent.com/d/11KnRQBTjEleoahI2uhQRb50AFHpo0pvj'],
    name: 'EcoFlow Villa',
    desc: 'Nestled within the prestigious Premier Village Danang Resort, this elegant four-bedroom villa offers a refined five-star retreat with complete privacy. The residence features a private swimming pool, a spacious open-plan living area, and a fully equipped kitchen. Designed with a contemporary aesthetic infused with tropical charm, it is ideal for families or groups seeking comfort and exclusivity, just moments from the pristine beachfront. From $285 / night.'
  },
  villa2: {
    img: 'https://lh3.googleusercontent.com/d/1v9tPPUxmPyIkc7sl6s56wz14gzUCjUDC',
    album: ['https://lh3.googleusercontent.com/d/1kNNPS7-_UdUDeEp-sbKVnU0xQzSkydry','https://lh3.googleusercontent.com/d/1484QUZLlvNOL9nwrL_FWCPtJxI5Gp_au','https://lh3.googleusercontent.com/d/1SrNSfymtXiralDNo7yNSzBCkb1oj9Dmm','https://lh3.googleusercontent.com/d/1n91amonTZqwZlsagBQUGjzUjJ0TE95xg','https://lh3.googleusercontent.com/d/1BFYYn8ORvwRIhV9gL6jTlS3VNliHcpWf','https://lh3.googleusercontent.com/d/1xwocG3rv7rotCFhsoObJskL3-GPtD780','https://lh3.googleusercontent.com/d/1uwEAeGrBEnDRU4WfXZq9ECA2J7zR1qan','https://lh3.googleusercontent.com/d/19NvHeO-YfDjauvb31KcxXtPVH9z7C9Lr','https://lh3.googleusercontent.com/d/1T0My1d3Ar7WakBz-W23_H1wn8f5_j-9F','https://lh3.googleusercontent.com/d/1wggB87EhzQCFY-jwGH-XgHXIRgdPZWvh','https://lh3.googleusercontent.com/d/1BGZlMJGyZLmwVQQpZe3acY2ExWVjr51U','https://lh3.googleusercontent.com/d/1ElQWzy6sNs5en55feEWyoMCL4k6rNYnF','https://lh3.googleusercontent.com/d/1cPTBWG8Od6AMDFt3pcIfXljGo4WoHEJZ','https://lh3.googleusercontent.com/d/1BiZcD_9mOpL3wbZnNlba9PuP4VA8ms6L','https://lh3.googleusercontent.com/d/10Ug6ChFJsKiTLa0BpDgQ41Y_tYE8i2Ru'],
    name: 'The Palm Haven Villa',
    desc: 'Nestled within the prestigious Premier Village Danang Resort, this elegant four-bedroom villa offers a private five-star retreat with a swimming pool, spacious open-plan living, and a fully equipped kitchen. A dedicated entertainment room with home cinema, foosball, and an outdoor BBQ area adds the perfect touch for memorable stays. Contemporary design blends with tropical surroundings, ideal for families or groups seeking comfort just steps from the beach.'
  },
  villa3: {
    img: 'https://lh3.googleusercontent.com/d/1v9tPPUxmPyIkc7sl6s56wz14gzUCjUDC',
    album: ['https://lh3.googleusercontent.com/d/17hH8ObZWs-pEq05BvJB2OBtxNs3rGz39'],
    name: 'Coral Haven Villa',
    desc: 'A modern 3-bedroom sanctuary nestled near the Marble Mountains. The signature rooftop terrace frames sweeping mountain and ocean vistas, while interiors blend natural stone and tropical wood in a seamlessly elegant style. $350 / night.'
  },
  apt1: {
    img: 'https://lh3.googleusercontent.com/d/1_26ubn6EVttpFFMa_1Y16w7d9EFSxH61',
    album: ['https://lh3.googleusercontent.com/d/1_26ubn6EVttpFFMa_1Y16w7d9EFSxH61','https://lh3.googleusercontent.com/d/1Yfb6A6_wH1x6wUn_f3jqWcCgUSFNv3Dq','https://lh3.googleusercontent.com/d/1veKxG7CrjKZd7WWwzZ0Zs4cKhRVwk5Hh','https://lh3.googleusercontent.com/d/1rsuDpHz-7TRCryg-j3AadwEmLrVQ7ZGq','https://lh3.googleusercontent.com/d/1eo20xfzav9Lb8JSOhFBY_XerF7adVjro','https://lh3.googleusercontent.com/d/1FNU8JYSTNLHxohJOrtzfZYgMZW1wkJia','https://lh3.googleusercontent.com/d/1R1n51oz4TMjjf9ynZ3b6FvUwEHyVE3nw','https://lh3.googleusercontent.com/d/1qDJdRNnCdv2_VKb4ojjWZIm9PW7Cuqxt','https://lh3.googleusercontent.com/d/187Lq080QnJ_ltYmfu-IYDttWB-K4ejrZ','https://lh3.googleusercontent.com/d/1owJ0ErYu9VSSc87-Mmn8r6TZtc_N-jQt','https://lh3.googleusercontent.com/d/1n5avOaPslmPQ3f70SuRQLafO9zkmqj1B'],
    name: 'Courtyart Apartel 1 Bedroom - Unit 101',
    desc: "A stylishly appointed 1-bedroom studio on the 18th floor, overlooking the Han River. Fully equipped kitchen, high-speed internet, and access to the building's rooftop pool and gym. Ideal for couples or solo travelers. $95 / night."
  },
  apt2: {
    img: 'https://lh3.googleusercontent.com/d/1xvYrJUoBCqQ6FEtEDaf5wFv39khwISpu',
    album: ['https://lh3.googleusercontent.com/d/1xvYrJUoBCqQ6FEtEDaf5wFv39khwISpu','https://lh3.googleusercontent.com/d/1MqN8kGS4wN3WZhlhKRfgq6QTmC0Q2EET','https://lh3.googleusercontent.com/d/1UhGtj1bnyEbFtCNHCp_z1TzCKZgJwYyO','https://lh3.googleusercontent.com/d/1vGN5lvP992q5OetuLtrcESnWm26_qu3V','https://lh3.googleusercontent.com/d/1blJNczTpLCjo8SAz-08wZIms7Tarr1W1','https://lh3.googleusercontent.com/d/1xKOEqRClI6NUrtNG1kMcjCaCmS5S9guW','https://lh3.googleusercontent.com/d/1ORUWbrHETZU8XhCS4MZYRQghpqM6alP4','https://lh3.googleusercontent.com/d/1jvbdUiejrD_eYOG5eKljynaiB2nkxRUN','https://lh3.googleusercontent.com/d/1aVRkopUDkcCAPwB4HeNDf1GTooktwZcP'],
    name: 'Courtyart Apartel Studio - Unit 201, 202, 301, 302',
    desc: 'An elevated studio in Bac My An with open views, luxury furnishings, a full kitchen, and dedicated concierge service. $30 / night.'
  },
  apt3: {
    img: 'https://lh3.googleusercontent.com/d/1D_4rXunCGeMm_usDXUQkJum6Q9y_QHaU',
    album: ['https://lh3.googleusercontent.com/d/1D_4rXunCGeMm_usDXUQkJum6Q9y_QHaU','https://lh3.googleusercontent.com/d/1pHOTa7QWLbu0hNEOq722ue2UbU4TWwhM','https://lh3.googleusercontent.com/d/1PIpsOyxhGlwG1p8l7AkXmpDKcMxepI4_','https://lh3.googleusercontent.com/d/1HF_ziB3DhZKf-GO5fQiQ8joPpfRnXo9e','https://lh3.googleusercontent.com/d/10qe80nADuq3tgJ_c-CXhpw-LbnMFMQxO','https://lh3.googleusercontent.com/d/1i0lc_6nSGLH7fKFhHQFXXGfpE17M87mF','https://lh3.googleusercontent.com/d/1DQNFEAjvOnu3_E_9T8TQPntMKl28cTER','https://lh3.googleusercontent.com/d/1pJeoGoYQeMoh0oe6zMA6USnOFlLF5kKC','https://lh3.googleusercontent.com/d/1Zf4MVCO-wSC_SMyygoa7f3QE-lBStHGm','https://lh3.googleusercontent.com/d/1TUAJhq0Wi2V-1U5AaUm3xfl47imcOYnt'],
    name: 'Courtyart Apartel Studio - Unit 203',
    desc: 'An elevated studio with panoramic views, luxury furnishings, and full kitchen. $30 / night.'
  },
  apt4: {
    img: 'https://lh3.googleusercontent.com/d/105CaaeOsFhU_XHuTjYuNXi3mfglfLmo1',
    album: ['https://lh3.googleusercontent.com/d/105CaaeOsFhU_XHuTjYuNXi3mfglfLmo1','https://lh3.googleusercontent.com/d/1quZiU5roVphrTeD4HB9OA9Zl7OU4BPAP','https://lh3.googleusercontent.com/d/16TzMuthOb_DjqYc4L1SdBJVf4xH6LGIh','https://lh3.googleusercontent.com/d/1GbKu3tdaZciwumKafrzjQvm6S1XIUB6u','https://lh3.googleusercontent.com/d/1j8p4cvXRIlYa_dYpYu1cAy-a4pTgzuLC','https://lh3.googleusercontent.com/d/109BsT-KGxZsceWCubfGMr3cXn7-hKkx-','https://lh3.googleusercontent.com/d/16pnDTNfFidmT124KX0KPaBubUKIPKKVi','https://lh3.googleusercontent.com/d/1NI7-wc4g9Jplsds8eD3si70gBzndhLqN','https://lh3.googleusercontent.com/d/1qrehVUQ4oCjL9S826XRRF-RNRrODXVsl'],
    name: 'Courtyart Apartel Studio - Unit 204',
    desc: 'Stylish studio with bath tub, big windows and city light views. Full kitchen, fast WiFi. $30 / night.'
  },
  apt5: {
    img: 'https://lh3.googleusercontent.com/d/1Fc49Zf1GwGMitwzMX4FfCEueM8_roR74',
    album: ['https://lh3.googleusercontent.com/d/1Fc49Zf1GwGMitwzMX4FfCEueM8_roR74','https://lh3.googleusercontent.com/d/1NF20D6hRJXT8lxnCL-e7iIQzL5ABHXan','https://lh3.googleusercontent.com/d/10BFOSO2a5eDPMUVTH69-iFXQ1UYkoaoI','https://lh3.googleusercontent.com/d/117RJtvlBrc2IXpp1sEXfVUDTsoV4p2c8','https://lh3.googleusercontent.com/d/1oRfAwPnAb-zC6mtwVvsRIVEWwqYvzicc','https://lh3.googleusercontent.com/d/1FBn47Fp01TZkI-kPOjHI_cTpIyj_xoSQ','https://lh3.googleusercontent.com/d/125S3gNu7Lknlf24Zzfe6xaDSskHAWmYG'],
    name: 'Courtyart Apartel Studio - Unit 303',
    desc: 'Bright studio with L-shaped sofa, big windows and natural light. Full kitchen and premium amenities. $30 / night.'
  },
  apt6: {
    img: 'https://lh3.googleusercontent.com/d/11_XvuXPR7apmEOQfx1XvHPGWRZ_ukRN0',
    album: ['https://lh3.googleusercontent.com/d/11_XvuXPR7apmEOQfx1XvHPGWRZ_ukRN0','https://lh3.googleusercontent.com/d/1cqrLIOOhvv9-h3tOFyEw3U8lzo9GXQAm','https://lh3.googleusercontent.com/d/1WqfqQLMNetNxnjRkfIYc0tNClitmXj9i','https://lh3.googleusercontent.com/d/1Kqegu7STWgBZcgPG3_OwkkimI7UzUY3t','https://lh3.googleusercontent.com/d/18y-7kUxJKHvFka_jGwurgQDMbhe69Npj','https://lh3.googleusercontent.com/d/1eTG8FxbrQHEkS5LkQjppzdvn0M7bpcmW','https://lh3.googleusercontent.com/d/1UWz_WcOygDXbRyGipNaDEQC5Jtva7ZWm','https://lh3.googleusercontent.com/d/12ax5qE3IwFZIfC5TA9xk4d5s_SbY5HBj','https://lh3.googleusercontent.com/d/1VNJJeKNEyXNdyKhAoG5CjiV7OADjKBu6','https://lh3.googleusercontent.com/d/159VGnav9GxlH6zzia0pUr3m_ALlk1WxZ'],
    name: 'Courtyart Apartel Studio - Unit 304',
    desc: 'Contemporary studio with natural light, big windows and modern kitchen. Ideal for couples. $30 / night.'
  }
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHzxeGpai5SwoEgy8EnkX0PHqJc6knufEngazsVcLw8fnZUk5OmWh5hcG2uc-iYfhl/exec'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'villas' | 'apartments'>('villas')
  const [lightbox, setLightbox] = useState<{ id: string; index: number } | null>(null)
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  // Form refs
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  const propertyRef = useRef<HTMLSelectElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const showToast = (msg: string, type: 'success' | 'error') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  const openLightbox = (id: string) => setLightbox({ id, index: 0 })
  const closeLightbox = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('lightbox')) setLightbox(null)
  }
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightbox) return
    const album = props[lightbox.id].album
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + album.length) % album.length })
  }
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightbox) return
    const album = props[lightbox.id].album
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % album.length })
  }

  const handleSubmit = async () => {
    const name = nameRef.current?.value.trim() ?? ''
    const phone = phoneRef.current?.value.trim() ?? ''
    if (!name) { showToast('⚠️ Please enter your full name.', 'error'); return }
    if (!phone) { showToast('⚠️ Please enter your phone number.', 'error'); return }
    const data = {
      name, phone,
      email: emailRef.current?.value.trim(),
      propertyType: typeRef.current?.value,
      property: propertyRef.current?.value,
      message: messageRef.current?.value.trim(),
      submittedAt: new Date().toISOString()
    }
    setSubmitting(true)
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    } catch (err) { console.warn(err) }
    setSubmitting(false)
    showToast("✅ Enquiry sent! We'll contact you within 24 hours.", 'success')
    if (nameRef.current) nameRef.current.value = ''
    if (phoneRef.current) phoneRef.current.value = ''
    if (emailRef.current) emailRef.current.value = ''
    if (messageRef.current) messageRef.current.value = ''
    if (typeRef.current) typeRef.current.selectedIndex = 0
    if (propertyRef.current) propertyRef.current.selectedIndex = 0
  }

  const lb = lightbox ? props[lightbox.id] : null

  return (
    <>
      {/* HERO */}
      <header>
        <div className="hero-bg" style={{ backgroundImage: "linear-gradient(160deg, rgba(26,22,16,0.55) 0%, rgba(61,47,30,0.3) 60%, rgba(184,154,106,0.15) 100%), url('https://lh3.googleusercontent.com/d/1kNNPS7-_UdUDeEp-sbKVnU0xQzSkydry')" }} />
        <div className="hero-content">
          <p className="hero-eyebrow">Da Nang, Vietnam</p>
          <h1 className="hero-title">Where <em>Tropical</em> Meets<br />Modern Luxury</h1>
          <p className="hero-sub">Private villas and curated apartments — chosen by instinct, shaped by detail</p>
          <a href="#properties" className="hero-cta">Explore Properties</a>
        </div>
        <div className="hero-scroll">Scroll</div>
      </header>

      {/* PROPERTIES */}
      <div className="categories" id="properties">
        <div className="cat-header">
          <div>
            <p className="section-label">Our Collection</p>
            <h2 className="section-title">Exceptional <em>Properties</em></h2>
          </div>
          <div className="cat-tabs">
            <button className={`cat-tab${activeTab === 'villas' ? ' active' : ''}`} onClick={() => setActiveTab('villas')}>Villas</button>
            <button className={`cat-tab${activeTab === 'apartments' ? ' active' : ''}`} onClick={() => setActiveTab('apartments')}>Apartments</button>
          </div>
        </div>

        {/* VILLAS */}
        <div id="panel-villas" className={`properties-panel${activeTab === 'villas' ? ' active' : ''}`}>
          {/* Villa 1 */}
          <div className="prop-card" onClick={() => openLightbox('villa1')}>
            <div className="prop-img-wrap"><img src={props.villa1.img} alt="EcoFlow Villa" /></div>
            <div className="prop-body">
              <h3 className="prop-name">EcoFlow Villa</h3>
              <p className="prop-location">Premier Village Danang Resort</p>
              <div className="prop-features">
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>4 Bedrooms</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></svg>Private Pool</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Beachfront</span>
              </div>
              <div className="prop-divider"></div>
              <span className="prop-price">$285<span className="prop-price-label">/ night</span></span>
            </div>
          </div>
          {/* Villa 2 */}
          <div className="prop-card" onClick={() => openLightbox('villa2')}>
            <div className="prop-img-wrap"><img src={props.villa2.img} alt="The Palm Haven Villa" /></div>
            <div className="prop-body">
              <h3 className="prop-name">The Palm Haven Villa</h3>
              <p className="prop-location">Premier Village Danang Resort</p>
              <div className="prop-features">
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>4 Bedrooms</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>Private Pool</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M7 4v16M17 4v16M3 8h18M3 16h18" /></svg>Cinema Room</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Beach Access</span>
              </div>
              <div className="prop-divider"></div>
              <span className="prop-price">$285<span className="prop-price-label">/ night</span></span>
            </div>
          </div>
          {/* Villa 3 */}
          <div className="prop-card" onClick={() => openLightbox('villa3')}>
            <div className="prop-img-wrap">
              <img src="https://lh3.googleusercontent.com/d/17hH8ObZWs-pEq05BvJB2OBtxNs3rGz39" alt="Ocean Whisper Villa" />
              <span className="prop-badge">New</span>
            </div>
            <div className="prop-body">
              <h3 className="prop-name">Ocean Whisper Villa</h3>
              <p className="prop-location">Premier Village Danang Resort</p>
              <div className="prop-features">
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>3 Bedrooms</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Ocean View</span>
              </div>
              <div className="prop-divider"></div>
              <span className="prop-price">$350<span className="prop-price-label">/ night</span></span>
            </div>
          </div>
        </div>

        {/* APARTMENTS */}
        <div id="panel-apartments" className={`properties-panel${activeTab === 'apartments' ? ' active' : ''}`}>
          {/* Apt 1 */}
          <div className="prop-card" onClick={() => openLightbox('apt1')}>
            <div className="prop-img-wrap"><img src={props.apt1.img} alt="Unit 101" /><span className="prop-badge">New</span></div>
            <div className="prop-body">
              <h3 className="prop-name">Unit 101</h3><p className="prop-location">Courtyart Apartel</p>
              <div className="prop-features">
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>1 Bedroom</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Open Terrace</span>
              </div>
              <div className="prop-divider"></div><span className="prop-price">$55<span className="prop-price-label">/ night</span></span>
            </div>
          </div>
          {/* Apt 2 */}
          <div className="prop-card" onClick={() => openLightbox('apt2')}>
            <div className="prop-img-wrap"><img src={props.apt2.img} alt="Unit 201" /></div>
            <div className="prop-body">
              <h3 className="prop-name">Unit 201, 202, 301, 302</h3><p className="prop-location">Courtyart Apartel</p>
              <div className="prop-features">
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>Studio</span>
                <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Big Window</span>
              </div>
              <div className="prop-divider"></div><span className="prop-price">$30<span className="prop-price-label">/ night</span></span>
            </div>
          </div>
          {['apt3','apt4','apt5','apt6'].map((id,i) => {
            const p = props[id]
            const units = ['Unit 203','Unit 204','Unit 303','Unit 304']
            return (
              <div key={id} className="prop-card" onClick={() => openLightbox(id)}>
                <div className="prop-img-wrap"><img src={p.img} alt={units[i]} /></div>
                <div className="prop-body">
                  <h3 className="prop-name">{units[i]}</h3><p className="prop-location">Courtyart Apartel</p>
                  <div className="prop-features">
                    <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>Studio</span>
                    <span className="prop-feat"><svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" /></svg>Big Window</span>
                  </div>
                  <div className="prop-divider"></div><span className="prop-price">$30<span className="prop-price-label">/ night</span></span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat-item"><div className="stat-num">5+</div><div className="stat-label">Properties</div></div>
        <div className="stat-item"><div className="stat-num">98%</div><div className="stat-label">Guest Satisfaction</div></div>
        <div className="stat-item"><div className="stat-num">3</div><div className="stat-label">Prime Locations</div></div>
        <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Concierge Support</div></div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="contact-left">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let&apos;s Plan Your<br /><em>Dream Stay</em></h2>
          <p className="contact-intro">&ldquo;Every great journey begins with a single inquiry. Tell us what you&apos;re looking for and we&apos;ll make it happen.&rdquo;</p>
          <div className="contact-info">
            {[
              { icon: <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" />, label: 'Address', val: '99 Vo Nguyen Giap, My Khe, Da Nang' },
              { icon: <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" />, label: 'Phone / Whatsapp / Zalo', val: '+84 588 888 880' },
              { icon: <path d="M18 2h-3.6C11.8 2 10 3.8 10 6.4V9H7v4h3v9h4v-9h3.2l.8-4H14V6.8c0-.6.4-1 1-1H18V2Z" />, label: 'Facebook', val: 'The Tropic Moderne Vietnam' },
              { icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>, label: 'Instagram', val: '@thetropicmoderne' },
              { icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" />, label: 'Email', val: 'Courtyartapartel@gmail.com' },
            ].map(({ icon, label, val }) => (
              <div key={label} className="contact-info-item">
                <div className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg></div>
                <div className="ci-text"><strong>{label}</strong>{val}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form">
          <h3 className="form-title">Send an Enquiry</h3>
          <div className="form-row">
            <div className="form-group"><label>Full Name *</label><input ref={nameRef} type="text" placeholder="Nguyen Van A" /></div>
            <div className="form-group"><label>Phone Number *</label><input ref={phoneRef} type="tel" placeholder="+84 9xx xxx xxx" /></div>
          </div>
          <div className="form-group"><label>Email Address</label><input ref={emailRef} type="email" placeholder="your@email.com" /></div>
          <div className="form-row">
            <div className="form-group">
              <label>Property Type</label>
              <select ref={typeRef}><option value="">Select type</option><option>Villa</option><option>Apartment</option></select>
            </div>
            <div className="form-group">
              <label>Specific Property</label>
              <select ref={propertyRef}>
                <option value="">Select property</option>
                <option>EcoFlow Villa</option><option>The Palm Haven Villa</option><option>Ocean Whisper Villa</option>
                <option>Courtyart - 101</option><option>Courtyart - 201</option><option>Courtyart - 202</option>
                <option>Courtyart - 203</option><option>Courtyart - 204</option><option>Courtyart - 301</option>
                <option>Courtyart - 302</option><option>Courtyart - 303</option><option>Courtyart - 304</option>
              </select>
            </div>
          </div>
          <div className="form-group"><label>Message / Special Request</label><textarea ref={messageRef} placeholder="Tell us your check-in dates, number of guests, or any special requirements…" /></div>
          <div className="form-btns">
            <button className="btn btn-submit" onClick={handleSubmit} disabled={submitting}>{submitting ? 'Sending…' : 'Send Enquiry →'}</button>
            <div className="btn-divider">or contact directly via</div>
            <a href="https://wa.me/84588888880" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contact via WhatsApp
            </a>
            <a href="https://zalo.me/84588888880" target="_blank" rel="noreferrer" className="btn btn-zalo">
              <svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.33c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.26 14.4l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.556 2.186z" /></svg>
              Contact via Zalo
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && lb && (
        <div className="lightbox open" onClick={closeLightbox}>
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={prevImg}>‹</button>
            <button className="lightbox-nav lightbox-next" onClick={nextImg}>›</button>
            <img className="lightbox-img" src={lb.album[lightbox.index]} alt={`${lb.name} image ${lightbox.index + 1}`} />
            <div className="lightbox-body">
              <h2>{lb.name}</h2>
              <p>{lb.desc}</p>
              <p className="lightbox-counter">{lightbox.index + 1} / {lb.album.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className={`toast show ${toast.type}`}>{toast.msg}</div>}
    </>
  )
}
