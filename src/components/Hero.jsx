/**
 * Hero
 *
 * Two-Layer Architecture:
 * 1. BG LAYER (Clipped + Parallax):
 *    - Absolutely positioned (inset: 0), overflow: hidden.
 *    - Image + film grain noise translate at 0.5x scroll speed via useScroll + useTransform.
 *    - Sized to 130% height so translation never exposes whitespace/empty edges.
 *
 * 2. CONTENT LAYER (Standard Document Flow):
 *    - Sibling container (relative, z-index: 10) above the bg layer.
 *    - No transforms or overflow restrictions applied — text and badges scroll 100% naturally at 1x speed.
 */

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import heroBg from '@/assets/hero-bg.jpg'
import appleBtn from '@/assets/apple-button.webp'
import playstoreBtn from '@/assets/playstore-button.webp'

// Monochromatic film grain noise texture
const noiseSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`

export default function Hero() {
  const sectionRef = useRef(null)

  // Track scroll progress of the hero section (0 when at top, 1 when scrolled past 100vh)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // 0.5x parallax translation for the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — Walk. Claim. Conquer."
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ──────────────────────────────────────────────────────────
          LAYER 1: CLIPPED PARALLAX BACKGROUND
          Only this container has overflow:hidden and parallax transform
      ────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        {/* Parallax Moving Container (115% height to prevent gap during translate) */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '115%',
            y: bgY,
            willChange: 'transform',
          }}
        >
          {/* Background image */}
          <img
            src={heroBg}
            alt="Woman running on a path with a city skyline in the background"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '63% top',
            }}
          />

          {/* Grain / Noise Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("${noiseSvg}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '180px 180px',
              opacity: 0.75,
              mixBlendMode: 'overlay',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("${noiseSvg}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '120px 120px',
              opacity: 0.45,
              mixBlendMode: 'soft-light',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("${noiseSvg}")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '80px 80px',
              opacity: 0.2,
              mixBlendMode: 'overlay',
            }}
          />
        </motion.div>

        {/* Bottom legibility gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.72) 100%)',
          }}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────
          LAYER 2: CONTENT LAYER (NORMAL DOCUMENT SCROLL)
          Completely unclipped, sibling to BG layer, scrolls naturally at 1x
      ────────────────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          textAlign: 'center',
          paddingBottom: '3.5rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Headline */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            margin: '0 0 0.6rem 0',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Walk. Claim.
          <br />
          Conquer.
        </h1>

        {/* Subtext */}
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
            fontWeight: 300,
            letterSpacing: '0.01em',
            margin: '0 0 2rem 0',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Turn every walk into territory.
        </p>

        {/* App Store / Google Play badges */}
        <div
          style={{
            display: 'flex',
            gap: '0.75rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* App Store badge */}
          <a
            id="cta-app-store"
            href="#"
            aria-label="Download on the App Store"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              background: '#000000',
              color: 'white',
              borderRadius: '14px',
              padding: '14px 28px',
              minWidth: '210px',
              height: '66px',
              boxSizing: 'border-box',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img src={appleBtn} alt="" style={{ height: '34px', width: '30px', objectFit: 'contain', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
              <span style={{ fontSize: '0.65rem', opacity: 0.9, letterSpacing: '0.02em', marginBottom: '2px' }}>
                Available on the
              </span>
              <span style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                App Store
              </span>
            </div>
          </a>

          {/* Google Play badge */}
          <a
            id="cta-google-play"
            href="#"
            aria-label="Get it on Google Play"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              background: '#000000',
              color: 'white',
              borderRadius: '14px',
              padding: '14px 28px',
              minWidth: '210px',
              height: '66px',
              boxSizing: 'border-box',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.85'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <img src={playstoreBtn} alt="" style={{ height: '30px', width: '30px', objectFit: 'contain', flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
              <span style={{ fontSize: '0.65rem', opacity: 0.9, letterSpacing: '0.02em', marginBottom: '2px' }}>
                GET IT ON
              </span>
              <span style={{ fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                Google Play
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
