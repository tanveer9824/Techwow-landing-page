/**
 * Navbar
 *
 * Sticky / Fixed header:
 *  - Displays the "Conquer Circles" logo + watch icon.
 *  - On Hero (dark): text is white.
 *  - As you scroll into "How It Works" (light): seamlessly adapts to dark text with glassmorphism backdrop.
 */

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import blueLogo from '@/assets/blue-logo.png'
import whiteLogo from '@/assets/white-logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const updateNavbarState = () => {
      const hero = document.getElementById('hero')
      if (!hero) return

      const navHeight = headerRef.current ? headerRef.current.offsetHeight : 70
      const heroRect = hero.getBoundingClientRect()

      // The hero is only considered fully scrolled past when its bottom edge
      // has completely passed above the fixed navbar bottom edge
      setIsScrolled(heroRect.bottom <= navHeight)
    }

    window.addEventListener('scroll', updateNavbarState, { passive: true })
    window.addEventListener('resize', updateNavbarState, { passive: true })

    // Initial check
    updateNavbarState()

    // IntersectionObserver with rootMargin matching navbar height
    const heroEl = document.getElementById('hero')
    let observer
    if (heroEl) {
      const navHeight = headerRef.current ? headerRef.current.offsetHeight : 70
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.bottom <= navHeight) {
            setIsScrolled(true)
          } else if (entry.isIntersecting) {
            setIsScrolled(false)
          }
        },
        {
          threshold: 0,
          rootMargin: `-${navHeight}px 0px 0px 0px`,
        }
      )
      observer.observe(heroEl)
    }

    return () => {
      window.removeEventListener('scroll', updateNavbarState)
      window.removeEventListener('resize', updateNavbarState)
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.06)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '1.25rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo: Brand Emblem + Wordmark */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label="Techwow home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: isScrolled ? '#000000' : '#ffffff',
            transition: 'color 0.3s ease',
          }}
        >
          {/* Brand Logo */}
          <img
            src={isScrolled ? blueLogo : whiteLogo}
            alt="Techwow Logo"
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              display: 'block',
              transition: 'opacity 0.2s ease',
            }}
          />

          <span
            style={{
              fontSize: '1.05rem',
              fontWeight: 600,
              letterSpacing: '-0.015em',
            }}
          >
            Techwow®
          </span>
        </Link>
      </div>
    </header>
  )
}
