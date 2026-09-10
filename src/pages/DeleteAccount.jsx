import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function DeleteAccount() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', fontFamily: 'Inter, system-ui, sans-serif', color: '#111' }}>

      {/* ── Top Hero Header Card ── */}
      <div style={{ padding: '16px', maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            background: '#4C6FFF',
            borderRadius: '28px',
            padding: '2rem 2.5rem 5rem 2.5rem',
            position: 'relative',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Bar with Brand Logo */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '4rem' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                color: '#ffffff',
              }}
            >
              <img
                src={whiteLogo}
                alt="Conquer Circles Logo"
                style={{ width: '30px', height: '30px', objectFit: 'contain', display: 'block' }}
              />
              <span style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.015em' }}>
                Conquer Circles
              </span>
            </Link>
          </div>

          {/* Title & Subtitle */}
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff',
              }}
            >
              Delete Account
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 300,
              }}
            >
              Permanently delete your Conquer Circles account and personal data
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <main
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '3rem 1.5rem 6rem 1.5rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Intro Block */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', margin: '0 0 0.5rem 0' }}>
            Delete Account
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            Follow the steps below to delete your Conquer Circles account and remove associated data.
          </p>
        </div>

        {/* Option 1: Delete from the app */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            Option 1: Delete from the app (Recommended)
          </h2>
          
          <ol style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li>Open the <strong>Conquer Circles</strong> app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Click on your <strong>Profile Information</strong></li>
            <li>Select <strong>Delete Account</strong></li>
            <li>Confirm your choice</li>
          </ol>

          <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: 500, margin: 0 }}>
            Your account and associated data will be permanently deleted.
          </p>
        </section>

        {/* Option 2: Request deletion via email */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            Option 2: Request deletion via email
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you are unable to access the app, you may request account deletion by email.
          </p>

          <p style={{ fontSize: '0.95rem', color: '#333', margin: '0 0 6px 0' }}>
            Send an email to: info@codefend.tech
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', margin: '0 0 1.25rem 0' }}>
            Email subject: <strong>Account Deletion Request</strong>
          </p>

          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#222', marginBottom: '0.5rem' }}>
            Please include:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Your registered email address</li>
            <li>Your Conquer Circles username (if available)</li>
          </ul>

          <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
            We may verify your request to protect your account and will process deletion within 7 business days.
          </p>
        </section>

        {/* What happens after deletion */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            What happens after deletion
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            When your account is deleted:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Your personal profile and account information are removed</li>
            <li>Your location history and walking route data are deleted</li>
            <li>Your Territory, tiles, and gameplay progress are permanently forfeited</li>
            <li>Your badges, cosmetics, achievements, and season history are removed</li>
            <li>Your Circle memberships are ended and you are removed from all Circles</li>
            <li>You will no longer be able to access your account</li>
          </ul>

          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Some information may be retained if required by law, such as:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Billing and transaction records</li>
            <li>Records needed for legal or regulatory compliance</li>
          </ul>

          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Some information may also remain visible where it cannot be removed unilaterally, such as:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Messages you sent in Circle chat, which may remain visible to other Circle members</li>
            <li>Historical leaderboard records from completed seasons, which may be retained in anonymized form</li>
          </ul>
        </section>

        {/* Important notes */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            Important notes
          </h2>

          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', fontSize: '0.95rem', color: '#333', lineHeight: 1.7 }}>
            <li><strong>Account deletion is permanent and cannot be undone.</strong></li>
            <li>Deleted data cannot be recovered.</li>
            <li>All Territory you control is immediately released and becomes available to other players.</li>
            <li>Virtual Items, badges, and season progress have no monetary value and are not refundable.</li>
            <li>Active subscriptions must be cancelled through the platform where you originally subscribed (such as the Apple App Store or Google Play) before deleting your account.</li>
          </ul>

          <p style={{ fontSize: '0.92rem', color: '#333', margin: 0 }}>
            For more information on how we handle your data, please review our{' '}
            <Link to="/privacy-policy" style={{ color: '#4C6FFF', textDecoration: 'none', fontWeight: 600 }}>
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* Need help? */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            Need help?
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            If you have questions or need assistance with account deletion, contact us at:
          </p>
          <p style={{ margin: 0 }}>
            <a href="mailto:info@codefend.tech" style={{ color: '#4C6FFF', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}>
              info@codefend.tech
            </a>
          </p>
        </section>
      </main>

      {/* ── Bottom Footer Bar ── */}
      <Footer />
    </div>
  )
}
