import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              How Conquer Circles collects, uses, discloses, and protects your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Policy Content Container ── */}
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 1.5rem 0' }}>
            Conquer Circles — Last Updated: 21 August 2026
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            This Privacy Policy describes how <strong>Conquer Circles</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and protects personal information when you access or use our mobile application, website, and related services (collectively, the &quot;Service&quot;).
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            By using Conquer Circles, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

        {/* 1. Interpretation & Definitions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            1. Interpretation &amp; Definitions
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            For the purposes of this Privacy Policy:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li><strong>&quot;Account&quot;</strong> means a unique account created to access the Service.</li>
            <li><strong>&quot;Personal Data&quot;</strong> means any information that identifies or relates to an identifiable individual.</li>
            <li><strong>&quot;Location Data&quot;</strong> means GPS and movement data collected to determine walking routes, territory claims, and gameplay outcomes.</li>
            <li><strong>&quot;User Content&quot;</strong> means any data, logs, inputs, or materials submitted through the Service, including Circle chat messages.</li>
            <li><strong>&quot;Territory Data&quot;</strong> means gameplay data derived from Location Data, including tile ownership, tile energy, and capture history.</li>
            <li><strong>&quot;Service&quot;</strong> refers to the Conquer Circles application and related offerings.</li>
          </ul>
        </section>

        {/* 2. Scope & Global Applicability */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            2. Scope &amp; Global Applicability
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            This Privacy Policy applies to users worldwide and is intended to comply with applicable data protection laws, including but not limited to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>UK GDPR</li>
            <li>California Consumer Privacy Act (CCPA/CPRA)</li>
            <li>Other applicable international privacy laws</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Where local law provides additional rights, those rights apply.
          </p>
        </section>

        {/* 3. Eligibility & Children's Privacy */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            3. Eligibility &amp; Children&#39;s Privacy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Conquer Circles is not intended for children under the age of 16.
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Users must be at least 16 years old to use the Service.</li>
            <li>We do not knowingly collect Personal Data from children under 16.</li>
            <li>If such data is identified, it will be deleted promptly.</li>
            <li>Parents or guardians may contact us regarding potential data removal.</li>
          </ul>
        </section>

        {/* 4. Information We Collect */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            4. Information We Collect
          </h2>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4.1 Information You Provide
          </h3>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Account details (email address, username)</li>
            <li>Profile preferences</li>
            <li><strong>Home Base location</strong> — a general area you select as your core territory. This is stored as an approximate area, not a street address, and is used only to apply in-app gameplay bonuses. Your Home Base is not displayed to other players as a residential location.</li>
            <li>Circle names, invitations, and membership</li>
            <li>Chat messages typed by the user in Circle chat</li>
            <li>Customer support communications</li>
          </ul>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4.2 Location &amp; Gameplay Data
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Conquer Circles processes precise GPS location to power the core gameplay loop. This includes walking routes, tile claims, tile energy, attack energy, and territory clusters.
          </p>
          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#222', marginBottom: '0.5rem' }}>
            Important clarifications:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Precise location is collected while you use the app, and in the background only if you separately enable background tracking.</li>
            <li>Movement speed is calculated from Location Data solely to distinguish walking from driving or non-genuine movement (anti-cheat).</li>
            <li>Your live, real-time position is never shown to other players — only the resulting territory (claimed tiles) is visible on the shared map.</li>
            <li>Location Data is not sold, and is not shared with third parties for advertising purposes.</li>
          </ul>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4.3 Circles &amp; Social Features
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Conquer Circles includes private Circles where you compete and communicate with other players.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Other members of your Circle can see your username, profile photo, territory you control, public gameplay stats (leaderboard rank, badges), and messages you post in shared Circle chat.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Circle chat messages are stored to operate the feature and are visible only to members of that Circle.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4.4 Automatically Collected Data
          </h3>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Device identifiers and technical data</li>
            <li>Usage statistics and diagnostics</li>
            <li>Log files</li>
            <li>Push notification tokens</li>
          </ul>
        </section>

        {/* 5. Cookies & Tracking Technologies */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            5. Cookies &amp; Tracking Technologies (Web Users)
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you access Conquer Circles via a website, we may use cookies or similar technologies to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Enable essential site functionality</li>
            <li>Analyze usage patterns</li>
            <li>Improve performance</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            You may control cookie preferences through browser settings.
          </p>
        </section>

        {/* 6. How We Use Information */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            6. How We Use Information
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We use collected data to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Provide and operate the Service, including real-time territory tracking and tile claims</li>
            <li>Maintain user accounts</li>
            <li>Operate Circles, leaderboards, and social features</li>
            <li>Run anti-cheat and trust-score systems to detect spoofed location or movement</li>
            <li>Send notifications and service-related communications</li>
            <li>Process subscriptions and in-app purchases</li>
            <li>Improve security, performance, and reliability</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* 7. Legal Basis for Processing (GDPR) */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            7. Legal Basis for Processing (GDPR)
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We process Personal Data under the following bases:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>User consent (in particular, for precise Location Data)</li>
            <li>Performance of a contract</li>
            <li>Legitimate interests (service improvement, anti-cheat, security)</li>
            <li>Legal obligations</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Users may withdraw consent where applicable. Withdrawing consent for Location Data will prevent core gameplay from functioning.
          </p>
        </section>

        {/* 8. User Content License */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            8. User Content License
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            By submitting User Content, you grant Conquer Circles a limited, non-exclusive, royalty-free license to store, process, display, and analyze such content solely for the purpose of operating and improving the Service.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            This license terminates upon deletion of your account, subject to legal retention obligations.
          </p>
        </section>

        {/* 9. Subscriptions & Payments */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            9. Subscriptions &amp; Payments
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Payments are processed through Apple App Store and Google Play.</li>
            <li>We do not store full payment card details.</li>
            <li>Transaction records may be retained for accounting and legal compliance.</li>
          </ul>
        </section>

        {/* 10. Data Storage & Security */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            10. Data Storage &amp; Security
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Data is stored using secure cloud infrastructure.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Reasonable administrative, technical, and organizational safeguards are implemented.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            No system is completely secure; use is at your own risk.
          </p>
        </section>

        {/* 11. Data Retention */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            11. Data Retention
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Data is retained while your account remains active.</li>
            <li>Precise Location Data is retained for a limited period to support gameplay and anti-cheat review, after which it is deleted or aggregated into non-personal statistics.</li>
            <li>You may request deletion at any time.</li>
            <li>Some data may be retained where legally required.</li>
          </ul>
        </section>

        {/* 12. Data Sharing & Disclosure */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            12. Data Sharing &amp; Disclosure
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We do not sell Personal Data.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We share data only in the following specific and limited circumstances:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li><strong>Cloud Infrastructure:</strong> Account data, Location Data, and Territory Data are stored securely solely to operate the Service and preserve your gameplay history within the app.</li>
            <li><strong>Push Notification Services:</strong> Device tokens are used to deliver in-app notifications.</li>
            <li><strong>Analytics &amp; Diagnostics Providers:</strong> Aggregated usage statistics, crash reports, and performance diagnostics may be processed solely to improve the stability and performance of the Service. These providers do not receive your precise Location Data.</li>
            <li><strong>Legal Authorities:</strong> Data may be disclosed where required by applicable law.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            No other sharing takes place. Your live location is never transmitted to other players or third parties — only the resulting territory outcome is visible within the app, as described in Section 4.2.
          </p>
        </section>

        {/* 13. International Data Transfers */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            13. International Data Transfers
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Your data may be processed outside your country of residence.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Appropriate safeguards are applied for cross-border transfers.
          </p>
        </section>

        {/* 14. Your Privacy Rights */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            14. Your Privacy Rights
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Depending on your jurisdiction, you may have rights to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Access your data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent, including for precise Location Data</li>
            <li>Lodge a complaint with your local data protection supervisory authority</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Requests can be submitted via the contact details below. We respond within the timeframe required by applicable law.
          </p>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
            14.1 Automated Decision-Making
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Our anti-cheat systems use automated processing, including trust scores, to detect spoofed location or movement. These systems may reduce trust scores, flag territory claims for review, or restrict or suspend accounts.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            If your account is restricted or suspended based substantially on an automated decision, you may request human review by contacting us at the details below.
          </p>
        </section>

        {/* 15. Marketing Communications */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            15. Marketing Communications
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            You may receive service-related messages and optional communications.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            You may opt out of non-essential communications at any time through settings or unsubscribe mechanisms.
          </p>
        </section>

        {/* 16. Third-Party Links */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            16. Third-Party Links
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            The Service may contain links to third-party websites or services.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We are not responsible for their privacy practices.
          </p>
        </section>

        {/* 17. Changes to This Policy */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            17. Changes to This Policy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We may update this Privacy Policy periodically.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Updates take effect when posted with a revised &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* 18. Contact Information */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            18. Contact Information
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, margin: 0 }}>
            <strong>Conquer Circles</strong><br />
            Email: info@codefend.tech<br />
            Operating Globally
          </p>
        </section>
      </main>

      {/* ── Bottom Footer Bar ── */}
      <Footer />
    </div>
  )
}
