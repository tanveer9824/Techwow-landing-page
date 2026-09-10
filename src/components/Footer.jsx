import React from 'react'
import { Link } from 'react-router-dom'
import blueLogo from '@/assets/blue-logo.png'

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#ffffff',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        borderTop: '1px solid #f0f0f0',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div className="footer-inner-container">
        {/* Navigation Side */}
        <div
          className="footer-nav-col"
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '140px' }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.01em',
              marginBottom: '4px',
            }}
          >
            Navigation
          </span>
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              color: '#777',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
          >
            Home
          </Link>
          <Link
            to="/privacy-policy"
            style={{
              color: '#777',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-use"
            style={{
              color: '#777',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
          >
            Terms of Use
          </Link>
          <Link
            to="/disclaimer"
            style={{
              color: '#777',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
          >
            Disclaimer
          </Link>
          <Link
            to="/contact-us"
            style={{
              color: '#777',
              textDecoration: 'none',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
          >
            Contact Us
          </Link>
        </div>

        {/* Branding & Social Side */}
        <div
          className="footer-brand-col"
          style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '300px' }}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <img
              src={blueLogo}
              alt="Conquer Circles Logo"
              style={{ width: '26px', height: '26px', objectFit: 'contain', display: 'block' }}
            />
            <span
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#111',
                letterSpacing: '-0.02em',
              }}
            >
              Conquer Circles
            </span>
          </Link>
          <p style={{ color: '#777', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
            Walk. Claim. Conquer.
            <br />
            Turn every walk into territory.
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '6px' }}>
            {/* Instagram */}
            <a href="#" style={{ color: '#333' }} aria-label="Instagram">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" style={{ color: '#333' }} aria-label="TikTok">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" style={{ color: '#333' }} aria-label="LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .footer-inner-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 32px;
          align-items: flex-start;
        }

        .footer-brand-col {
          order: 1;
        }

        .footer-nav-col {
          order: 2;
        }

        @media (max-width: 767px) {
          .footer-inner-container {
            flex-direction: column;
            gap: 28px;
          }
          .footer-nav-col {
            order: 1;
          }
          .footer-brand-col {
            order: 2;
          }
        }
      `}</style>
    </footer>
  )
}
