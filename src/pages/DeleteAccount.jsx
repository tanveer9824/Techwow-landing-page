import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function DeleteAccount() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sectionHeadStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#111',
    marginBottom: '0.75rem',
    marginTop: 0,
  }

  const bodyText = {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.75,
    margin: 0,
  }

  const listStyle = {
    paddingLeft: '1.5rem',
    margin: '0.75rem 0 1rem 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.7,
  }

  const divider = {
    height: '1px',
    background: '#e8e8e8',
    margin: '2.5rem 0',
  }

  const infoBox = {
    padding: '1.25rem 1.5rem',
    background: '#ffffff',
    borderRadius: '14px',
    border: '1px solid #e2e8f0',
    fontSize: '0.92rem',
    color: '#333',
    lineHeight: 1.75,
  }

  const warnBox = {
    padding: '1.25rem 1.5rem',
    background: '#fff7ed',
    borderRadius: '14px',
    border: '1px solid #fde8c8',
    fontSize: '0.92rem',
    color: '#7c4a00',
    lineHeight: 1.75,
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fafafa',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#111',
      }}
    >
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
          {/* Top Bar */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '4rem' }}>
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: '#ffffff' }}
            >
              <img
                src={whiteLogo}
                alt="Techwow Logo"
                style={{ width: '30px', height: '30px', objectFit: 'contain', display: 'block' }}
              />
              <span style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.015em' }}>Techwow®</span>
            </Link>
          </div>

          {/* Title */}
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
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
              Permanently delete your Techwow account and personal data. UK GDPR &amp; Google Play Data Safety compliant.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem 6rem 1.5rem', boxSizing: 'border-box' }}>

        {/* Before you delete */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.55rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem', marginTop: 0 }}>
            Before you delete
          </h2>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            Please check the following before deleting your account:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Active repairs</strong> — if you have a repair booked, in progress, or awaiting collection, contact us first. Deleting your account may cancel your booking and will remove your access to repair tracking and technician chat.
            </li>
            <li>
              <strong>Pending orders</strong> — orders that have not yet been delivered should be received or cancelled before you delete.
            </li>
            <li>
              <strong>Open Buy Back offers</strong> — an offer you have not yet accepted or declined will be cancelled. If you have already posted a device to us, contact us before deleting so we can complete your payout.
            </li>
            <li>
              <strong>Warranty claims</strong> — your repair history is your proof of warranty. Deleting your account removes your access to it. Download or screenshot anything you may need.
            </li>
          </ul>
        </section>

        <div style={divider} />

        {/* Option 1 */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            Option 1: Delete from the app <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4C6FFF' }}>(Recommended)</span>
          </h2>
          <ol style={listStyle}>
            <li>Open the Techwow app</li>
            <li>Tap the <strong>Profile</strong> tab</li>
            <li>Scroll to the bottom of the page</li>
            <li>Select <strong>Delete Account</strong></li>
            <li>Read the confirmation notice</li>
            <li>Confirm your choice</li>
          </ol>
          <p style={bodyText}>
            Your account and associated data will be permanently deleted.
          </p>
        </section>

        <div style={divider} />

        {/* Option 2 */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            Option 2: Request deletion via email
          </h2>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            If you are unable to access the app, you may request account deletion by email.
          </p>
          <div style={infoBox}>
            <div style={{ marginBottom: '0.4rem' }}>
              <strong>Send an email to:</strong>{' '}
              <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF', textDecoration: 'none' }}>
                techwowltd@yahoo.com
              </a>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Email subject:</strong> Account Deletion Request
            </div>
            <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600, color: '#222' }}>Please include:</p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', color: '#444' }}>
              <li>Your registered email address</li>
              <li>Your registered phone number</li>
              <li>Any recent repair reference or order number (if available)</li>
            </ul>
            <p style={{ margin: '1rem 0 0', color: '#555', fontSize: '0.9rem' }}>
              We may verify your request to protect your account. We will process your deletion within <strong>7 business days</strong>, and in any event within <strong>one month</strong>, as required by the UK GDPR.
            </p>
          </div>
        </section>

        <div style={divider} />

        {/* What happens after deletion */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            What happens after deletion
          </h2>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            When your account is deleted:
          </p>
          <ul style={listStyle}>
            <li>Your personal profile and account information are removed</li>
            <li>Your saved addresses and saved payment methods are removed</li>
            <li>Your repair booking history and technician chat messages are deleted</li>
            <li>Your Buy Back scan images and AI assessment records are deleted, subject to the retention exceptions below</li>
            <li>Your order history and saved basket are removed</li>
            <li>Your notification preferences and push notification tokens are removed</li>
            <li>Any product reviews you have published are anonymised or removed</li>
            <li>You will no longer be able to access your account</li>
          </ul>
          <p style={{ ...bodyText, color: '#555', fontSize: '0.9rem' }}>
            Data is removed from our live systems within <strong>30 days</strong>. Backups containing deleted data are overwritten within <strong>90 days</strong>.
          </p>
        </section>

        <div style={divider} />

        {/* Information we must retain */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            Information we are required to retain
          </h2>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            Some information must be kept even after your account is deleted, because UK law requires it:
          </p>
          <ul style={listStyle}>
            <li>
              <strong>Billing, payment, and transaction records</strong> — retained for 6 years for HMRC and Companies Act purposes
            </li>
            <li>
              <strong>Repair records and invoices</strong> — retained for 6 years, to support warranty claims and legal limitation periods
            </li>
            <li>
              <strong>Buy Back purchase records and device identifiers</strong> — retained for 6 years, as evidence that we acquired a device lawfully and hold good title to it
            </li>
            <li>
              <strong>Records needed for legal, regulatory, or fraud-prevention compliance</strong>
            </li>
          </ul>
          <p style={{ ...bodyText, color: '#555', fontSize: '0.9rem' }}>
            This information is restricted so that it is used only for those purposes, and is not used to contact you or to build a profile of you.
          </p>
        </section>

        <div style={divider} />

        {/* Important notes */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            Important notes
          </h2>
          <div style={warnBox}>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>Account deletion is <strong>permanent and cannot be undone</strong></li>
              <li>Deleted data cannot be recovered</li>
              <li>Deleting your account does not cancel an existing contract with us, or remove your obligation to pay for a repair or order already agreed</li>
              <li>Deleting your account does not automatically issue a refund. Refund requests should be made separately before deletion</li>
              <li>If you create a new account later, none of your previous history, warranty records, or preferences will be restored</li>
            </ul>
          </div>
          <p style={{ ...bodyText, color: '#555', fontSize: '0.9rem', marginTop: '1rem' }}>
            For more information on how we handle your data, please review our{' '}
            <Link to="/privacy-policy" style={{ color: '#4C6FFF', textDecoration: 'none' }}>Privacy Policy</Link>
            {' '}and{' '}
            <Link to="/terms-of-use" style={{ color: '#4C6FFF', textDecoration: 'none' }}>Terms of Use</Link>.
          </p>
        </section>

        <div style={divider} />

        {/* Need help */}
        <section>
          <h2 style={{ ...sectionHeadStyle, fontSize: '1.4rem' }}>
            Need help?
          </h2>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            If you have questions or need assistance with account deletion, contact us at:
          </p>
          <div style={infoBox}>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>Techwow Ltd</div>
            <div>
              Email:{' '}
              <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF', textDecoration: 'none' }}>
                techwowltd@yahoo.com
              </a>
            </div>
            <div style={{ color: '#555', marginTop: '0.4rem' }}>
              Registered in England and Wales, company number 13962308
            </div>
            <div style={{ color: '#555' }}>
              Registered office: 05 Leicester Steet, Northwich, England, CW9 5LA
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
