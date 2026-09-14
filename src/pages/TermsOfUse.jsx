import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            background: 'linear-gradient(135deg, #4C6FFF 0%, #3B5BDB 100%)',
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
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              marginBottom: '4rem',
            }}
          >
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
                alt="Techwow Logo"
                style={{ width: '30px', height: '30px', objectFit: 'contain', display: 'block' }}
              />
              <span style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.015em' }}>
                Techwow®
              </span>
            </Link>
          </div>

          {/* Title & Subtitle */}
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 14px',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '1rem',
                backdropFilter: 'blur(4px)',
              }}
            >
              Terms &amp; Conditions
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#ffffff',
              }}
            >
              Terms of Use
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 300,
              }}
            >
              Terms and conditions governing your access to and use of Techwow services, repairs, AI trade-ins, and store purchases.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Terms Content Container ── */}
      <main
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '3rem 1.5rem 6rem 1.5rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Intro Block */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              borderBottom: '1px solid #e5e5e5',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4C6FFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              TECHWOW LTD
            </span>
            <span style={{ fontSize: '0.875rem', color: '#666' }}>
              Last Updated: 8th Sept 2026
            </span>
          </div>

          <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the Techwow mobile application, website, stores, and related services (collectively, the &quot;Service&quot;).
          </p>
          <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Techwow is operated by <strong>TECHWOW LTD</strong>, a company registered in England and Wales under company number 13962308, with its registered office at 05 Leicester Steet, Northwich, England, CW9 5LA (&quot;Techwow,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            By creating an Account, downloading the app, booking a repair, submitting a device for Buy Back, or placing an order, you agree to be bound by these Terms. If you do not agree, do not use the Service.
          </p>

          <div
            style={{
              background: '#f0fdf4',
              borderLeft: '4px solid #16a34a',
              borderRadius: '0 12px 12px 0',
              padding: '1.25rem 1.5rem',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#166534', lineHeight: 1.65, margin: 0 }}>
              <strong>Consumer Statutory Rights:</strong> Nothing in these Terms affects your statutory rights as a consumer. Where any provision of these Terms conflicts with your rights under the Consumer Rights Act 2015, the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, or other applicable UK consumer law, your statutory rights prevail.
            </p>
          </div>
        </div>

        {/* 1. Interpretation & Definitions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            1. Interpretation &amp; Definitions
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            For the purposes of these Terms:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li><strong>&quot;Account&quot;</strong> means a unique account created to access the Service.</li>
            <li><strong>&quot;Buy Back&quot;</strong> means our service through which we offer to purchase a device from you following a digital AI assessment.</li>
            <li><strong>&quot;Device&quot;</strong> means any item of hardware you submit to us for repair or offer to us for purchase.</li>
            <li><strong>&quot;Estimated Value&quot;</strong> means the indicative, non-binding valuation generated by our AI assessment before physical inspection.</li>
            <li><strong>&quot;Final Offer&quot;</strong> means the binding offer we make for a Device after verification and physical inspection.</li>
            <li><strong>&quot;Order&quot;</strong> means a purchase of goods placed through the Store.</li>
            <li><strong>&quot;Products&quot;</strong> means accessories, parts, and other goods offered for sale through the Store.</li>
            <li><strong>&quot;Repair&quot;</strong> means a repair service booked through the Service and carried out by us or on our behalf.</li>
            <li><strong>&quot;Store&quot;</strong> means the e-commerce section of the Service.</li>
            <li><strong>&quot;User Content&quot;</strong> means any data, messages, reviews, images, or materials you submit through the Service.</li>
            <li><strong>&quot;Service&quot;</strong> refers to the Techwow application, website, stores, and related offerings.</li>
          </ul>
        </section>

        {/* 2. Eligibility */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            2. Eligibility
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>You must be at least <strong>18 years old</strong> to use the Service.</li>
            <li>By using the Service, you represent that you are at least 18 and legally capable of entering into these Terms.</li>
            <li>The Service is offered only to users in the <strong>United Kingdom</strong>. We do not sell, ship, repair, or purchase Devices outside the UK.</li>
            <li>A parent or guardian may book a Repair for a child&apos;s Device using their own Account, and does so as the contracting party.</li>
            <li>We may suspend or terminate Accounts we reasonably believe belong to users under 18.</li>
          </ul>
        </section>

        {/* 3. IMPORTANT — YOUR DEVICE AND YOUR DATA */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              background: '#fef2f2',
              border: '2px solid #ef4444',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⚠️</span>
              <h2
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#991b1b',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                3. IMPORTANT — YOUR DEVICE AND YOUR DATA — PLEASE READ CAREFULLY
              </h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#7f1d1d', lineHeight: 1.7, marginBottom: '1rem', fontWeight: 500 }}>
              Repairing and selling a Device carries a real risk of data loss. This section sets out what you must do before handing a Device to us:
            </p>
            <ul
              style={{
                paddingLeft: '1.25rem',
                margin: '0 0 1.25rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.925rem',
                color: '#7f1d1d',
                lineHeight: 1.65,
              }}
            >
              <li>
                <strong>Back up your Device before you hand it over or post it to us.</strong> Repairs — particularly to screens, batteries, charging ports, motherboards, and water-damaged Devices — can result in partial or total loss of data. We cannot guarantee that data will survive a repair.
              </li>
              <li>
                <strong>We are not a data recovery service.</strong> We do not offer, and are not responsible for, the recovery of data lost before, during, or after a repair.
              </li>
              <li>
                <strong>Remove or sign out of your accounts before selling a Device to us.</strong> A Device still linked to an iCloud, Google, or Samsung account cannot be resold. If you send us a locked Device, we cannot complete your payout and will return it to you or hold it pending your action.
              </li>
              <li>
                <strong>Perform a factory reset before selling.</strong> When we take ownership of a Device we carry out a secure, certified data wipe, but the responsibility to remove your own data in the first instance is yours.
              </li>
              <li>
                <strong>Remove SIM cards, memory cards, cases, and accessories.</strong> We are not responsible for items left in or attached to a Device unless separately recorded on your intake receipt.
              </li>
              <li>
                <strong>Where a repair requires your passcode</strong>, we will ask for it explicitly. Do not write it on packaging or share it in unsolicited messages.
              </li>
            </ul>
            <div style={{ background: '#ffffff', borderRadius: '10px', padding: '1rem 1.25rem', border: '1px solid #fca5a5' }}>
              <p style={{ fontSize: '0.95rem', color: '#991b1b', lineHeight: 1.6, margin: 0, fontWeight: 600 }}>
                Do not send us a Device containing data you cannot afford to lose. To the fullest extent permitted by law, and subject to Section 16, we are not liable for loss of data, applications, settings, or content on a Device submitted for Repair or Buy Back.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Account Registration & Security */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            4. Account Registration &amp; Security
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>You must provide accurate, current, and complete information when creating an Account.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You are responsible for all activity that occurs under your Account.</li>
            <li>You must notify us immediately at <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF' }}>techwowltd@yahoo.com</a> of any unauthorised use of your Account.</li>
            <li>You may not sell, transfer, rent, or share your Account with any other person.</li>
            <li>
              You may delete your Account at any time through <em>Profile → Delete Account</em>, or via our{' '}
              <Link to="/delete-account" style={{ color: '#4C6FFF', fontWeight: 600 }}>
                Delete Account Page
              </Link>
              . Deletion does not cancel or refund an active Repair, Order, or Buy Back transaction.
            </li>
          </ul>
        </section>

        {/* 5. Licence to Use the Service */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            5. Licence to Use the Service
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable licence to use the Service for your own personal, non-commercial purposes.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We reserve all rights not expressly granted.
          </p>
        </section>

        {/* 6. Acceptable Use & Prohibited Conduct */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            6. Acceptable Use &amp; Prohibited Conduct
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            You agree not to:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1.25rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>Submit for Buy Back, or ask us to repair, any Device that is <strong>stolen, lost, fraudulently obtained, blocklisted, or subject to an outstanding finance or lease agreement</strong>.</li>
            <li>Misrepresent the condition, ownership, model, storage, or history of a Device.</li>
            <li>Attempt to manipulate an AI assessment through altered, edited, AI-generated, stock, or substituted images, or by photographing a Device other than the one you intend to sell.</li>
            <li>Submit a Device that has been tampered with to conceal damage, water exposure, or prior repair.</li>
            <li>Create multiple Accounts to obtain repeat promotional pricing, referral credit, or improved valuations.</li>
            <li>Use bots, scripts, automation, emulators, or modified clients to interact with the Service.</li>
            <li>Reverse engineer, decompile, or attempt to access the Service&apos;s source code or underlying systems.</li>
            <li>Interfere with, overload, or attempt to gain unauthorised access to the Service or its infrastructure.</li>
            <li>Harass, threaten, impersonate, or abuse our staff, technicians, or other users, including through in-app chat and TechBot.</li>
            <li>Submit false, misleading, or incentivised Product reviews.</li>
            <li>Post unlawful, hateful, sexually explicit, violent, or otherwise objectionable User Content.</li>
            <li>Resell Products purchased from the Store on a commercial basis, or use the Service for any commercial purpose, without our written permission.</li>
          </ul>
          <div style={{ background: '#f8fafc', borderLeft: '4px solid #64748b', padding: '1rem 1.25rem', borderRadius: '0 10px 10px 0' }}>
            <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6, margin: 0 }}>
              Violation of this Section may result in cancellation of an Order or Buy Back offer, withholding of payment pending investigation, suspension, or permanent termination of your Account, and — where a Device is suspected stolen — referral to the police.
            </p>
          </div>
        </section>

        {/* 7. Fraud, Stolen Devices & Verification */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            7. Fraud, Stolen Devices &amp; Verification
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>Devices offered to us through Buy Back are checked against industry device-history and stolen-property registers, including <strong>CheckMEND</strong> and the <strong>National Mobile Property Register</strong>, and against network blocklists.</li>
            <li>We may require <strong>proof of identity and proof of ownership</strong> (such as a purchase receipt) before completing a purchase.</li>
            <li>Where a Device is reported lost, stolen, blocklisted, or subject to outstanding finance, we will <strong>withhold payment and will not return the Device</strong>. We will report the matter and, where required, surrender the Device to the police or the rightful owner. This is a legal obligation and not a discretionary decision.</li>
            <li>It is a criminal offence under the <strong>Mobile Telephones (Re-programming) Act 2002</strong> to alter or offer to alter a Device&apos;s IMEI. We will report any attempt to do so.</li>
            <li>We may operate automated fraud-screening systems. Where a decision materially affecting you is based substantially on automated processing, you may request human review by contacting us at the details in Section 23.</li>
            <li>Determinations under this Section are made at our reasonable discretion, acting in good faith.</li>
          </ul>
        </section>

        {/* 8. Repair Services */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            8. Repair Services
          </h2>

          {/* 8.1 Booking */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              8.1 Booking
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Repairs are booked through the Service and are fulfilled by <strong>Techwow directly</strong>. We are not a marketplace and we do not introduce you to third-party repair shops. Bookings come to our centralised system and are carried out by our own technicians or by partners acting on our instructions.</li>
              <li>You may book an <strong>in-store repair</strong> at a selected location and time slot, or a <strong>mail-in repair</strong>, for which we provide prepaid, tracked packaging.</li>
              <li>Appointment slots are held subject to availability. We may contact you to reschedule where a technician or part is unavailable.</li>
            </ul>
          </div>

          {/* 8.2 Quotes and revised pricing */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              8.2 Quotes and revised pricing
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Prices shown at booking are <strong>estimates based on the fault you select</strong>. The final price depends on diagnosis.</li>
              <li>If diagnosis reveals additional faults, water damage, prior third-party repair, or non-genuine parts, we will contact you with a <strong>revised quote before carrying out any additional work</strong>. You may accept, decline, or ask us to return the Device unrepaired.</li>
              <li>Where a Device is found to be beyond economic repair, we will tell you and return it. A diagnostic fee of <strong>[£X]</strong> may apply. <em>[TO CONFIRM]</em></li>
            </ul>
          </div>

          {/* 8.3 Cancellation and your 14-day right to cancel */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              8.3 Cancellation and your 14-day right to cancel
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Where you book a Repair remotely (through the app or website), you have a statutory right to cancel within <strong>14 days</strong> under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.</li>
              <li>If you ask us to begin the Repair within that 14-day period and we do so, you may still cancel, but you must pay for the service provided up to the point of cancellation.</li>
              <li><strong>Once a Repair is fully performed at your express request within the cancellation period, the right to cancel is lost.</strong></li>
              <li>You may cancel a booked appointment free of charge up to <strong>[24 hours]</strong> before the slot. <em>[TO CONFIRM]</em></li>
            </ul>
          </div>

          {/* 8.4 Parts */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              8.4 Parts
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>We may use genuine manufacturer parts, manufacturer-approved parts, or high-quality compatible parts. We will tell you which before work begins where this affects your warranty or Device functionality.</li>
              <li>Replacing parts may void a manufacturer warranty, disable certain Device features (for example True Tone, Face ID, or battery health reporting), or trigger a &quot;non-genuine part&quot; notice on your Device. We will inform you where we are aware of this.</li>
              <li>Parts removed from your Device become our property unless you request their return at the time of booking.</li>
            </ul>
          </div>

          {/* 8.5 Collection of repaired Devices */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              8.5 Collection of repaired Devices
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Repaired Devices must be collected within <strong>[30 days]</strong> of the completion notice. <em>[TO CONFIRM]</em></li>
              <li>We may charge reasonable storage after that period.</li>
              <li>We retain a <strong>lien</strong> over any Device until the agreed price is paid in full.</li>
              <li>Where a Device remains uncollected and unpaid for after we have given written notice, we may sell or dispose of it in accordance with the <strong>Torts (Interference with Goods) Act 1977</strong>, applying the proceeds to sums owed and accounting to you for the balance.</li>
            </ul>
          </div>
        </section>

        {/* 9. Buy Back Service */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            9. Buy Back Service
          </h2>

          {/* 9.1 */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              9.1 How the offer works
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Buy Back is a fully digital assessment. There is no in-person appraisal at the offer stage.
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>The value produced by the AI scan is an <strong>Estimated Value</strong>, not a binding offer. It is generated automatically from your photographs and the details you provide.</li>
              <li><strong>The Estimated Value is subject to verification.</strong> A member of our team will contact you to confirm the details, and the Device is physically inspected on arrival or at your appointment.</li>
              <li>The valuation may be <strong>revised up or down</strong> following inspection. We will tell you the revised figure and you may accept it or decline.</li>
              <li>A binding contract of sale is formed only when you accept the <strong>Final Offer</strong> after inspection.</li>
              <li>You warrant that you are the <strong>lawful owner</strong> of the Device, that it is free of any finance agreement or third-party claim, and that you have the right to sell it.</li>
            </ul>
          </div>

          {/* 9.2 */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              9.2 Declining an offer
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>If you decline the Final Offer, we will return the Device to you at our cost within <strong>[10 working days]</strong>. <em>[TO CONFIRM]</em></li>
              <li>Section 7 applies where a Device is blocklisted, stolen, or subject to finance. In those circumstances the Device will <strong>not</strong> be returned.</li>
            </ul>
          </div>

          {/* 9.3 */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              9.3 Payment routes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.75rem' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                <p style={{ fontWeight: 600, color: '#111', margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>
                  Instant Payment
                </p>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Payment is issued immediately on acceptance. A convenience fee of <strong>£10</strong> applies and is deducted from the amount you receive.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                <p style={{ fontWeight: 600, color: '#111', margin: '0 0 0.25rem 0', fontSize: '0.95rem' }}>
                  Standard Process
                </p>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  The Device is sent to our store and processed, and you receive the full amount without deduction.
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginTop: '0.75rem', marginBottom: 0 }}>
              The fee and the amount you will receive under each route are displayed before you choose. Choosing a payment route does not affect your statutory rights.
            </p>
          </div>

          {/* 9.4 */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              9.4 Sale is final
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              Once you accept the Final Offer and we take ownership, the sale is complete and the Device cannot be recovered. Devices are wiped and processed for refurbishment or resale promptly. Ensure you have retrieved everything you need from the Device first.
            </p>
          </div>
        </section>

        {/* 10. Store Purchases, Delivery & Returns */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            10. Store Purchases, Delivery &amp; Returns
          </h2>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              10.1 Orders
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Product listings are an <strong>invitation to treat</strong>, not an offer. Your Order is an offer to buy, and a contract is formed when we send you a dispatch confirmation.</li>
              <li>We may refuse or cancel an Order where a Product is out of stock, where pricing is obviously erroneous, or where we suspect fraud. If we cancel after payment, we will refund you in full.</li>
              <li>All prices are in <strong>pounds sterling (£)</strong> and include VAT where applicable. <em>[TO CONFIRM: VAT registration status and number.]</em></li>
            </ul>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              10.2 Delivery
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Estimated delivery times are given at checkout and are estimates, not guarantees.</li>
              <li>Unless otherwise agreed, we will deliver within <strong>30 days</strong> of the contract being formed, as required by the Consumer Rights Act 2015.</li>
              <li>Risk in the Products passes to you on delivery.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              10.3 Your 14-day right to cancel
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>You have a statutory right to cancel most Store Orders within <strong>14 days of receiving the Products</strong>, without giving a reason.</li>
              <li>You then have a further 14 days to return them. Return postage is at your cost unless the Product is faulty or misdescribed.</li>
              <li>Products must be returned in a condition allowing resale. We may reduce your refund to reflect handling beyond what is necessary to establish the nature and function of the Product.</li>
              <li>Refunds are issued within 14 days of receiving the Products back, or of proof of return.</li>
              <li>The right to cancel does not apply to sealed audio Products where the seal has been broken after delivery, or to Products made to your specification.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              10.4 Faulty Products
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Under the <strong>Consumer Rights Act 2015</strong>, Products must be of satisfactory quality, fit for purpose, and as described. If they are not, you are entitled to:
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>A <strong>30-day right to reject</strong> and receive a full refund</li>
              <li>After 30 days, a repair or replacement</li>
              <li>A price reduction or final right to reject if a repair or replacement fails</li>
            </ul>
          </div>
        </section>

        {/* 11. Warranties & Guarantees */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            11. Warranties &amp; Guarantees
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>Repairs are covered by a workmanship and parts guarantee of <strong>[X months] from the date of completion</strong>. <em>[TO CONFIRM — see note below.]</em></li>
            <li>The guarantee covers defects in the parts we fitted and in our workmanship. It does <strong>not</strong> cover new accidental damage, liquid damage, further impact damage, software issues unrelated to the repair, or work carried out by a third party after our repair.</li>
            <li>Opening the Device, or having it repaired elsewhere, voids the guarantee on the affected component.</li>
            <li>Refurbished Products sold through the Store carry a warranty of <strong>[X months]</strong>. <em>[TO CONFIRM]</em></li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Any guarantee we offer is <strong>in addition to, and does not affect, your statutory rights</strong> under the Consumer Rights Act 2015.
          </p>
        </section>

        {/* 12. Modifications to the Service */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            12. Modifications to the Service
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>We may modify, suspend, update, or discontinue any part of the Service at any time.</li>
            <li>We will provide reasonable notice of material changes where practicable.</li>
            <li>We are not liable for any modification, suspension, or discontinuation of the Service, except as required by law and except in respect of a Repair, Order, or Buy Back transaction already in progress, which we will honour or refund.</li>
          </ul>
        </section>

        {/* 13. Termination */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            13. Termination
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>You may stop using the Service and delete your Account at any time.</li>
            <li>We may suspend or terminate your Account, with or without notice, if you materially breach these Terms, if we reasonably suspect fraudulent or unlawful activity, or if required by law.</li>
            <li>Termination does not affect Orders already dispatched, Repairs in progress, or accepted Buy Back offers, all of which remain subject to these Terms.</li>
            <li>Termination does not remove your obligation to pay sums owed, or our obligation to refund sums due to you.</li>
            <li>Sections that by their nature should survive termination (including Sections 3, 7, 14, 15, 16, 17, 21, and 22) will survive.</li>
          </ul>
        </section>

        {/* 14. Intellectual Property */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            14. Intellectual Property
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1.5rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>The Service, including its software, design, graphics, AI assessment models, trademarks, and content, is owned by Techwow Ltd or its licensors and is protected by intellectual property law.</li>
            <li>&quot;Techwow&quot; and the Techwow logo are our trademarks. You may not use them without our written permission.</li>
            <li>You may not copy, modify, distribute, sell, or create derivative works from the Service without our written permission.</li>
            <li>
              Manufacturer names, logos, and Device images (including Apple, Samsung, Google, Huawei, OnePlus, and Oppo) are the property of their respective owners and are used for identification purposes only. <strong>Techwow is not affiliated with, authorised by, or endorsed by any of these manufacturers unless expressly stated.</strong>
            </li>
            <li>Map data and location services are provided by third parties and are subject to their own terms.</li>
          </ul>

          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#222', marginBottom: '0.65rem' }}>
              14.1 User Content
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>You are solely responsible for User Content you submit, including chat messages and Product reviews.</li>
              <li>By submitting User Content, you grant us a limited, non-exclusive, royalty-free licence to store, process, display, and distribute that content solely for the purpose of operating and improving the Service. For Product reviews, this includes public display alongside your display name.</li>
              <li>This licence ends when you delete the content or your Account, subject to legal retention obligations.</li>
              <li>We do not pre-screen User Content but may remove content that breaches these Terms.</li>
            </ul>
          </div>
        </section>

        {/* 15. Disclaimers */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            15. Disclaimers
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Nothing in this Section limits our obligations under the Consumer Rights Act 2015 in respect of Repairs or Products.
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>The Service (meaning the app, website, and supporting software) is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that it will be uninterrupted, error-free, or secure.</li>
            <li><strong>The AI assessment produces an estimate, not a guaranteed price.</strong> Its accuracy depends on image quality, lighting, and the information you provide. It may not detect internal faults, prior repairs, or damage not visible in the photographs. Section 9 governs how the final price is determined.</li>
            <li><strong>TechBot is an automated assistant.</strong> Its responses are provided for general guidance, may be inaccurate, and do not constitute a binding quote, diagnosis, or commitment. Where accuracy matters, ask to speak to a member of our team.</li>
            <li>Store distances and locations shown in Find Store depend on third-party map data and device GPS accuracy, and are indicative only.</li>
            <li>Product images are illustrative. Colours and finishes may vary.</li>
          </ul>
        </section>

        {/* 16. Limitation of Liability */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            16. Limitation of Liability
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem', fontWeight: 600 }}>
            Nothing in these Terms excludes or limits our liability for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li>death or personal injury caused by our negligence;</li>
            <li>fraud or fraudulent misrepresentation;</li>
            <li>breach of the terms implied by the Consumer Rights Act 2015 as to title, satisfactory quality, fitness for purpose, description, and reasonable care and skill; or</li>
            <li>any other liability that cannot lawfully be excluded or limited.</li>
          </ul>

          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Subject to the above:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li>We are liable for loss or damage you suffer that is a <strong>foreseeable</strong> result of our breach of these Terms or our failure to use reasonable care and skill. Loss is foreseeable if it is obvious it will happen, or if it was contemplated by both parties at the time the contract was formed.</li>
            <li>We are <strong>not liable for loss of data</strong> on a Device submitted for Repair or Buy Back, where you have not backed it up as required by Section 3.</li>
            <li>We are <strong>not liable for business losses.</strong> The Service is supplied for domestic and private use. If you use it for any commercial or business purpose, we have no liability for loss of profit, loss of business, business interruption, or loss of business opportunity.</li>
            <li>Where we are liable for damage to a Device caused by our negligence during a Repair, our liability is limited to the <strong>repair or replacement of the Device with an equivalent Device of the same model and comparable condition</strong>, or its fair market value immediately before the Repair, at our option.</li>
          </ul>
        </section>

        {/* 17. Indemnification */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            17. Indemnification
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            You agree to indemnify us against losses, damages, and reasonable costs we incur arising from:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li>your submission of a Device that is stolen, blocklisted, subject to outstanding finance, or that you did not have the right to sell; or</li>
            <li>your fraudulent or deliberately misleading misrepresentation of a Device&apos;s condition, ownership, or history.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            This Section applies only to the circumstances listed above and does not otherwise transfer risk to you.
          </p>
        </section>

        {/* 18. Third-Party Services */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            18. Third-Party Services
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            The Service integrates with or links to third-party services, including Apple and Google sign-in, Apple Pay, Google Pay, payment processors, couriers, and map providers. Your use of those services is governed by their own terms and privacy policies. We are not responsible for third-party services.
          </p>
        </section>

        {/* 19. Privacy */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            19. Privacy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Your use of the Service is also governed by our{' '}
            <Link to="/privacy-policy" style={{ color: '#4C6FFF', fontWeight: 600 }}>
              Privacy Policy
            </Link>
            , which explains how we collect and use your information, including Device photographs captured during Buy Back, precise location data, and repair records.
          </p>
        </section>

        {/* 20. Complaints & Dispute Resolution */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            20. Complaints &amp; Dispute Resolution
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>If something goes wrong, contact us first using the details in Section 23. We aim to acknowledge complaints within <strong>[5 working days]</strong> and resolve them within <strong>[28 days]</strong>. <em>[TO CONFIRM]</em></li>
            <li>If we cannot resolve your complaint, you may be entitled to refer it to an approved <strong>Alternative Dispute Resolution (ADR)</strong> provider. <em>[TO CONFIRM: whether Techwow subscribes to an ADR scheme. If not, these Terms must say so, as required by the ADR Regulations 2015.]</em></li>
            <li>You may also contact <strong>Citizens Advice</strong> on <a href="tel:08082231133" style={{ color: '#4C6FFF', textDecoration: 'none' }}>0808 223 1133</a> for consumer guidance.</li>
          </ul>
        </section>

        {/* 21. Changes to These Terms */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            21. Changes to These Terms
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>We may update these Terms periodically. We will post the revised Terms with an updated &quot;Last Updated&quot; date and, where changes are material, notify you through the Service or by email.</li>
            <li>Changes do not apply retrospectively to a Repair, Order, or Buy Back transaction already agreed. The version in force when you entered that transaction governs it.</li>
            <li>Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.</li>
          </ul>
        </section>

        {/* 22. Governing Law & General */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            22. Governing Law &amp; General
          </h2>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li><strong>Governing law:</strong> These Terms are governed by the law of <strong>England and Wales</strong>.</li>
            <li><strong>Jurisdiction:</strong> You may bring proceedings in the courts of England and Wales. If you live in Scotland, you may bring proceedings in Scotland or England and Wales. If you live in Northern Ireland, you may bring proceedings in Northern Ireland or England and Wales.</li>
            <li><strong>Entire Agreement:</strong> These Terms and the Privacy Policy constitute the entire agreement between you and Techwow regarding the Service.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.</li>
            <li><strong>No Waiver:</strong> Our failure to enforce any provision is not a waiver of that provision.</li>
            <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets, provided this does not reduce your rights.</li>
            <li><strong>Third parties:</strong> No person other than you and Techwow has any right to enforce these Terms.</li>
            <li><strong>Force Majeure:</strong> We are not liable for failures caused by events beyond our reasonable control, though this does not remove your right to a refund where we cannot perform.</li>
          </ul>
        </section>

        {/* 23. Contact */}
        <section style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            23. Contact
          </h2>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '1.5rem',
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
              TECHWOW LTD
            </p>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
              Registered in England and Wales, company number 13962308<br />
              Registered office: 05 Leicester Steet, Northwich, England, CW9 5LA<br />
              Email:{' '}
              <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF', textDecoration: 'none', fontWeight: 500 }}>
                techwowltd@yahoo.com
              </a>
              <br />
              Operating in the United Kingdom
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
