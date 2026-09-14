import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
              Legal &amp; Privacy
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
              Privacy Policy
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
              How Techwow collects, uses, discloses, and protects your personal information under UK GDPR.
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
              Last Updated: 08 Sept 2026
            </span>
          </div>

          <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            This Privacy Policy describes how <strong>Techwow Ltd</strong> (&quot;Techwow,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses, and protects personal information when you access or use our mobile application, website, stores, and related services (collectively, the &quot;Service&quot;).
          </p>
          <div
            style={{
              background: '#f4f7ff',
              borderLeft: '4px solid #4C6FFF',
              borderRadius: '0 12px 12px 0',
              padding: '1.25rem 1.5rem',
              margin: '1.5rem 0',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#1e3a8a', lineHeight: 1.65, margin: 0 }}>
              <strong>Direct Service Notice:</strong> Techwow is a device repair, trade-in, and retail business operating in the United Kingdom. <strong>We are not a marketplace and we do not connect you to third-party repair shops.</strong> When you book a repair, that booking comes directly to us and is processed through our own centralised system by our own technicians.
            </p>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            By using Techwow, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

        {/* Data Controller Table */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 600,
              color: '#111',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Data Controller
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', width: '38%', background: '#fafafa' }}>
                    Registered name
                  </td>
                  <td style={{ padding: '12px 18px', color: '#111', fontWeight: 500 }}>TECHWOW LTD</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', background: '#fafafa' }}>
                    Registered in
                  </td>
                  <td style={{ padding: '12px 18px', color: '#111' }}>England and Wales</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', background: '#fafafa' }}>
                    Company number
                  </td>
                  <td style={{ padding: '12px 18px', color: '#111' }}>13962308</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', background: '#fafafa' }}>
                    Registered office
                  </td>
                  <td style={{ padding: '12px 18px', color: '#111' }}>
                    05 Leicester Steet, Northwich, England, CW9 5LA
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', background: '#fafafa' }}>
                    ICO registration number
                  </td>
                  <td style={{ padding: '12px 18px', color: '#6b7280' }}>
                    [ICO number — registration required, see note]
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 18px', fontWeight: 600, color: '#4b5563', background: '#fafafa' }}>
                    Privacy contact
                  </td>
                  <td style={{ padding: '12px 18px', color: '#4C6FFF', fontWeight: 500 }}>
                    <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF', textDecoration: 'none' }}>
                      techwowltd@yahoo.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

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
            For the purposes of this Privacy Policy:
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
            <li>
              <strong>&quot;Account&quot;</strong> means a unique account created to access the Service.
            </li>
            <li>
              <strong>&quot;Personal Data&quot;</strong> means any information that identifies or relates to an identifiable individual.
            </li>
            <li>
              <strong>&quot;Repair Data&quot;</strong> means information relating to a repair booking, including device details, fault type, appointment or shipping details, technician notes, and repair status history.
            </li>
            <li>
              <strong>&quot;Buy Back Data&quot;</strong> means information collected when you offer a device for sale to us, including Scan Images, device attributes, AI assessment outputs, valuations, and payout details.
            </li>
            <li>
              <strong>&quot;Scan Images&quot;</strong> means the photographs of your device captured during the guided AI Buy Back assessment.
            </li>
            <li>
              <strong>&quot;Device Identifiers&quot;</strong> means serial numbers, IMEI numbers, and equivalent unique hardware identifiers.
            </li>
            <li>
              <strong>&quot;Order Data&quot;</strong> means information relating to purchases made through the Store, including basket contents, delivery address, and order history.
            </li>
            <li>
              <strong>&quot;User Content&quot;</strong> means any data, messages, images, reviews, or materials submitted through the Service, including chat messages and support tickets.
            </li>
            <li>
              <strong>&quot;Service&quot;</strong> refers to the Techwow application, website, physical stores, and related offerings.
            </li>
          </ul>
        </section>

        {/* 2. Scope & Applicability */}
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
            2. Scope &amp; Applicability
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Techwow operates exclusively in the <strong>United Kingdom</strong>. This Privacy Policy applies to users in the UK and is intended to comply with:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>The <strong>UK General Data Protection Regulation (UK GDPR)</strong></li>
            <li>The <strong>Data Protection Act 2018</strong></li>
            <li>The <strong>Privacy and Electronic Communications Regulations 2003 (PECR)</strong></li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We do not offer the Service to users outside the United Kingdom and do not target users in other jurisdictions. If you access the Service from outside the UK, you do so on your own initiative and are responsible for compliance with local law.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Our supervisory authority is the <strong>Information Commissioner&apos;s Office (ICO)</strong>.
          </p>
        </section>

        {/* 3. Eligibility & Children's Privacy */}
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
            3. Eligibility &amp; Children&apos;s Privacy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Techwow is not intended for children.
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
            <li>You must be at least <strong>18 years old</strong> to create an Account, sell a device to us through Buy Back, or make a purchase through the Store.</li>
            <li>We apply an 18+ threshold because the Service involves entering binding contracts, taking payment, and purchasing goods from you.</li>
            <li>A parent or guardian may book a repair for a child&apos;s device using their own Account. In that case we process the adult&apos;s Personal Data and only the technical details of the device concerned.</li>
            <li>We do not knowingly collect Personal Data from anyone under 18. If such data is identified, it will be deleted promptly.</li>
            <li>Parents or guardians may contact us at <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF' }}>techwowltd@yahoo.com</a> regarding potential data removal.</li>
          </ul>
        </section>

        {/* 4. Information We Collect */}
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
            4. Information We Collect
          </h2>

          {/* 4.1 */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.1 Information You Provide
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Full name</li>
              <li>Email address</li>
              <li>Mobile telephone number</li>
              <li>Password (stored only as a salted cryptographic hash — never in readable form)</li>
              <li>Profile photo, if uploaded</li>
              <li>Saved delivery and billing addresses</li>
              <li>Account preferences, including theme, notification settings, and privacy toggles</li>
              <li>Product reviews and star ratings</li>
              <li>Customer support communications</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              Where you sign in using <strong>Google</strong> or <strong>Apple</strong>, we receive the identifier, name, and email address those providers share with us. If you use <em>Sign in with Apple</em> and select <em>Hide My Email</em>, we receive a private relay address rather than your actual email address.
            </p>
          </div>

          {/* 4.2 Repair Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.2 Repair Data
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              When you book a repair through the Service, we collect:
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Device brand, model, storage, and stated condition</li>
              <li>The fault or repair type selected (screen, battery, charging port, camera, water damage, software, and similar)</li>
              <li>Device Identifiers, where required to validate parts, warranty, or ownership</li>
              <li>Your selected store, appointment date and time slot, or your mail-in shipping address</li>
              <li>Repair reference number, repair status history, technician notes, and diagnostic results</li>
              <li>Photographs of the device taken on intake and on completion</li>
              <li>Messages exchanged with our technicians through the in-app Chat Centre</li>
              <li>Payment and invoice records for the repair</li>
            </ul>

            <div
              style={{
                background: '#fff9ed',
                borderLeft: '4px solid #f59e0b',
                borderRadius: '0 12px 12px 0',
                padding: '1.25rem 1.5rem',
                marginTop: '1rem',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: 600, color: '#b45309' }}>
                Important clarifications regarding data on your device:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#78350f', lineHeight: 1.6 }}>
                <li>Your device may contain your own Personal Data — photos, messages, accounts, and documents. We ask you to back up your device and sign out of your accounts before handing it over or posting it to us.</li>
                <li>Our technicians access only what is necessary to diagnose, repair, and test the device, and are bound by written confidentiality obligations.</li>
                <li>Where a repair requires your device passcode, we will request it explicitly, use it only for that repair, and delete it from our records on completion.</li>
                <li>We do not copy, retain, or browse your personal content.</li>
              </ul>
            </div>
          </div>

          {/* 4.3 Buy Back & AI Assessment Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.3 Buy Back &amp; AI Assessment Data
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              The Buy Back service is entirely digital. There is no physical appraisal at the offer stage. When you use it, we collect:
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li><strong>Scan Images</strong> — photographs of your device captured through our guided flow, covering up to six angles (rear, front screen off, front screen on, left side, right side, and ports)</li>
              <li><strong>Device attributes</strong> you enter or confirm, including device type, brand, model, storage, purchase year, battery health, processor, RAM, case size, connectivity, controllers included, and external condition</li>
              <li><strong>AI assessment outputs</strong>, including detected condition of the screen, back glass, camera lenses, frame, ports and buttons, the condition score, and the estimated value generated</li>
              <li><strong>Device Identifiers</strong>, including serial number and IMEI</li>
              <li><strong>Contact details</strong> for the offer — full name, telephone number, and email address</li>
              <li><strong>Payout details</strong>, and your selected payment route (instant payment or standard process)</li>
              <li><strong>Verification records</strong>, including notes made by our team during the confirmation call and on physical inspection of the device</li>
              <li><strong>Proof of ownership or identity</strong>, where required to confirm that a device is lawfully yours</li>
            </ul>

            <div
              style={{
                background: '#f4f7ff',
                borderLeft: '4px solid #4C6FFF',
                borderRadius: '0 12px 12px 0',
                padding: '1.25rem 1.5rem',
                marginTop: '1rem',
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', fontWeight: 600, color: '#1e3a8a' }}>
                Important Buy Back clarifications:
              </h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#1e40af', lineHeight: 1.6 }}>
                <li>Scan Images are of your device, but may unintentionally include your hands, your face, other people, or your surroundings. Please photograph your device against a plain background where possible.</li>
                <li>We do <strong>not</strong> use facial recognition or any other biometric identification technology on Scan Images, and we do not use them to identify people.</li>
                <li>Scan Images are not sold and are not shared with third parties for advertising purposes.</li>
                <li>When we take ownership of a device, we perform a secure, certified data wipe before it is refurbished or resold. You remain responsible for factory resetting the device and removing it from your iCloud, Google, or Samsung account before sending it — a device still linked to your account cannot be resold and we may be unable to complete your payout.</li>
              </ul>
            </div>
          </div>

          {/* 4.4 Store & Purchase Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.4 Store &amp; Purchase Data
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Products viewed, saved, and added to your basket</li>
              <li>Order contents, order value, order ID, and order history</li>
              <li>Delivery and billing address and delivery preferences</li>
              <li>Payment method type, and the last four digits and expiry date of a saved card</li>
              <li>Returns, refunds, and warranty claims</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              <strong>We do not store full payment card numbers or CVC codes.</strong> These are captured and processed directly by our payment provider.
            </p>
          </div>

          {/* 4.5 Location Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.5 Location Data
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li><strong>Approximate location</strong>, derived from your IP address, used for security and fraud prevention</li>
              <li><strong>Precise device location</strong>, used only to display your nearest Techwow store and travel distances in the Find Store screen</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: '0 0 0.75rem 0' }}>
              Precise location is collected only if you enable Location Services in the app and grant permission at operating system level. We do not collect precise location in the background. You may withdraw this permission at any time in your device settings or under <em>Profile → Privacy &amp; Security</em>. Withdrawing it does not prevent you from using any part of the Service — you will simply need to select a store manually.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              Location Data is not sold and is not shared with third parties for advertising purposes.
            </p>
          </div>

          {/* 4.6 Communications & Chat Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.6 Communications &amp; Chat Data
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Support tickets submitted through <em>Contact Support</em>, including subject, message content, and any files you attach</li>
              <li>Conversations with <strong>TechBot</strong>, our AI assistant</li>
              <li>Messages exchanged with our technicians and support agents</li>
              <li>Emails, SMS, and telephone calls with our team. Calls may be recorded for training and quality purposes; where they are, you will be told at the start of the call.</li>
              <li>Your marketing preferences and opt-in or opt-out status</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#b45309', fontWeight: 500, margin: 0 }}>
              Please do not enter passwords, full card numbers, or sensitive personal information into chat or TechBot.
            </p>
          </div>

          {/* 4.7 Automatically Collected Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.7 Automatically Collected Data
            </h3>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>IP address, device model, operating system and version, app version, language, and time zone</li>
              <li>Device identifiers and push notification tokens</li>
              <li>Log files, crash reports, and performance diagnostics</li>
              <li>Screens viewed, features used, and interaction patterns</li>
            </ul>
          </div>

          {/* 4.8 In-Store Data */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.8 In-Store Data
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              Where we operate CCTV in our stores, images of visitors are recorded for the prevention and detection of crime and for the safety of staff and customers. Signage is displayed at each site where CCTV is in operation. <em>[TO CONFIRM: which sites operate CCTV.]</em>
            </p>
          </div>

          {/* 4.9 Special Category Data */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              4.9 Special Category Data
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              We do not seek to collect special category data, such as information about health, race, religion, or biometric data used for identification. Please do not include such information in chat messages, support tickets, or device photographs unless genuinely necessary.
            </p>
          </div>
        </section>

        {/* 5. Cookies & Tracking Technologies */}
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
            5. Cookies &amp; Tracking Technologies
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Our website uses cookies and our app uses similar technologies such as SDKs and mobile identifiers.
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li><strong>Strictly necessary</strong> cookies (sign-in, security, basket contents) are always active and are required for the Service to function.</li>
            <li><strong>Analytics, performance, and marketing</strong> cookies are set only with your consent, collected through our cookie banner.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            You may change your preferences at any time through <em>Cookie Settings</em> or your browser settings. Full detail is set out in our Cookie Policy.
          </p>
        </section>

        {/* 6. How We Use Information */}
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
            6. How We Use Information
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We use collected data to:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>Create and manage your Account</li>
            <li>Book, schedule, and carry out repairs, and keep you updated on repair status</li>
            <li>Generate Buy Back valuations, verify devices, complete purchases, and issue payouts</li>
            <li>Process Store orders, deliveries, returns, and refunds</li>
            <li>Take payment and issue refunds</li>
            <li>Send service-related communications such as booking confirmations, repair updates, offer expiry notices, and delivery updates</li>
            <li>Provide customer support and operate TechBot</li>
            <li>Screen devices offered to us against theft and outstanding-finance registers</li>
            <li>Prevent fraud and protect the security of the Service</li>
            <li>Meet accounting, tax, consumer law, warranty, and electrical waste (WEEE) obligations</li>
            <li>Establish, exercise, or defend legal claims</li>
            <li>Analyse usage to improve the app, our pricing, and our repair operations</li>
            <li>Improve the accuracy of our AI valuation models, where you have consented</li>
            <li>Send marketing communications, where permitted</li>
          </ul>
        </section>

        {/* 7. Legal Basis for Processing */}
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
            7. Legal Basis for Processing
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We process Personal Data under the following bases:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
                Performance of a contract
              </h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: '#555' }}>
                <li>Creating and managing your Account</li>
                <li>Booking and carrying out repairs</li>
                <li>Producing Buy Back valuations and completing purchases and payouts</li>
                <li>Processing Store orders, payments, deliveries, and returns</li>
                <li>Sending service-related messages about a live repair, order, or offer</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
                Legal obligation
              </h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: '#555' }}>
                <li>Retaining accounting and tax records</li>
                <li>Meeting consumer law and warranty obligations</li>
                <li>Verifying identity and screening devices for theft or outstanding finance</li>
                <li>Responding to lawful requests from authorities and regulators</li>
                <li>Electrical waste (WEEE) reporting</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
                Legitimate interests
              </h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: '#555' }}>
                <li>Fraud prevention and platform security</li>
                <li>Analytics and improvement of the Service</li>
                <li>Handling customer queries efficiently</li>
                <li>CCTV in our stores for crime prevention and staff and customer safety</li>
                <li>Establishing, exercising, or defending legal claims</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
                Consent
              </h3>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.9rem', color: '#555' }}>
                <li>Precise Location Data</li>
                <li>Marketing emails, SMS, and push notifications (unless the PECR soft opt-in applies)</li>
                <li>Non-essential cookies and analytics technologies</li>
                <li>Using Scan Images to improve our AI valuation models</li>
              </ul>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginTop: '1.25rem', marginBottom: '0.5rem' }}>
            Where we rely on legitimate interests, we have carried out a balancing assessment to confirm our interests do not override your rights. You may request a summary of that assessment.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
            Where we rely on consent, you may withdraw it at any time. Withdrawal does not affect processing carried out before you withdrew it.
          </p>
        </section>

        {/* 8. User Content Licence */}
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
            8. User Content Licence
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            By submitting User Content, you grant Techwow a limited, non-exclusive, royalty-free licence to store, process, display, and analyse such content solely for the purpose of operating and improving the Service.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            For product reviews, this licence additionally permits public display of the review alongside your display name.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            This licence terminates upon deletion of your Account, subject to legal retention obligations and to any consent you have separately given under Section 14.2.
          </p>
        </section>

        {/* 9. Payments & Transactions */}
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
            9. Payments &amp; Transactions
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
            <li>Card payments, Apple Pay, and Google Pay transactions are processed by our payment provider. <strong>We do not store full card details.</strong></li>
            <li>We store only the card type, last four digits, and expiry date for saved payment methods.</li>
            <li>Where cash on delivery or in-store payment is used, we record the transaction but not payment instrument details.</li>
            <li>Buy Back payouts are processed to the bank or payment details you provide at the point of sale.</li>
            <li>Transaction records are retained for accounting and legal compliance as set out in Section 11.</li>
          </ul>
        </section>

        {/* 10. Data Storage & Security */}
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
            10. Data Storage &amp; Security
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Data is stored using secure cloud infrastructure. We apply appropriate technical and organisational measures, including:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>Encryption of data in transit (TLS) and at rest</li>
            <li>Password hashing using a modern, salted algorithm</li>
            <li>Role-based access control, so staff access only what their role requires</li>
            <li>Multi-factor authentication on internal administrative systems</li>
            <li>Logging and monitoring of access to customer records</li>
            <li>Secure, certified data erasure on all devices we acquire</li>
            <li>Staff training on data protection and confidentiality</li>
            <li>Written security obligations imposed on all service providers</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            No system is completely secure. If a personal data breach occurs that is likely to result in a risk to your rights and freedoms, we will report it to the ICO within 72 hours and, where the risk is high, notify you directly without undue delay.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Please keep your password confidential and unique to Techwow, and tell us immediately if you believe your Account has been accessed without your permission.
          </p>
        </section>

        {/* 11. Data Retention */}
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
            11. Data Retention
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We retain Personal Data only as long as necessary:
          </p>
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
            <li><strong>Account and profile data</strong> — while your Account remains active, then deleted within <strong>30 days</strong> of closure. Backups containing deleted data are overwritten within <strong>90 days</strong>.</li>
            <li><strong>Repair records, invoices, and warranty history</strong> — <strong>6 years</strong> from completion, to support warranty claims and contractual limitation periods.</li>
            <li><strong>Order, payment, and transaction records</strong> — <strong>6 years</strong> from the end of the relevant tax year, as required by HMRC and the Companies Act 2006.</li>
            <li><strong>Buy Back offer records, Device Identifiers, and valuation history</strong> — <strong>6 years</strong>, to evidence lawful acquisition and title.</li>
            <li><strong>Scan Images from declined or abandoned offers</strong> — <strong>[12 months] <em>(to confirm)</em></strong>, then deleted.</li>
            <li><strong>Scan Images from completed purchases</strong> — <strong>[6 years] <em>(to confirm)</em></strong>, as evidence of the condition in which a device was purchased.</li>
            <li><strong>Images used for AI model improvement (with consent)</strong> — until consent is withdrawn, then removed from future training within <strong>[90 days]</strong>.</li>
            <li><strong>Chat, TechBot conversations, and support tickets</strong> — <strong>24 months</strong> from last contact.</li>
            <li><strong>Call recordings</strong> — <strong>[6 months] <em>(to confirm)</em></strong>.</li>
            <li><strong>CCTV footage</strong> — <strong>31 days</strong>, unless required for an active investigation.</li>
            <li><strong>Device passcodes provided for repair</strong> — deleted on completion of the repair.</li>
            <li><strong>Marketing suppression records</strong> — retained indefinitely so that we do not contact you again in error.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            You may request deletion at any time. Where we no longer need data for its original purpose but must retain it for legal reasons, we restrict access to it rather than using it actively.
          </p>
        </section>

        {/* 12. Data Sharing & Disclosure */}
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
            12. Data Sharing &amp; Disclosure
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.75rem' }}>
            We do not sell Personal Data.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            We share data only in the following specific and limited circumstances:
          </p>
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
            <li><strong>Cloud infrastructure providers</strong> — host the app, website, and our records.</li>
            <li><strong>Payment processors</strong> — take card and wallet payments and process refunds and payouts.</li>
            <li><strong>AI and machine-vision providers</strong> — run the device assessment used in Buy Back and power TechBot.</li>
            <li><strong>Email, SMS, and push notification providers</strong> — deliver service and marketing messages. These providers receive device tokens and contact details only.</li>
            <li><strong>Couriers and logistics partners</strong> — deliver Store orders and collect and return mail-in repairs. These providers receive your name, address, and contact number only.</li>
            <li><strong>Parts suppliers and authorised repair partners</strong> — where a repair requires a part, a manufacturer warranty claim, or specialist work we do not perform in-house. These parties receive the device model, Device Identifier, fault description, and repair reference only.</li>
            <li><strong>Device-history and stolen-property registers</strong> — devices offered to us through Buy Back may be checked against industry registers such as CheckMEND and the National Mobile Property Register.</li>
            <li><strong>Analytics and diagnostics providers</strong> — receive usage statistics, crash reports, and performance diagnostics. These providers do not receive Scan Images or Buy Back valuations.</li>
            <li><strong>Professional advisers</strong> — accountants, auditors, insurers, and lawyers, where necessary.</li>
            <li><strong>Legal authorities</strong> — where a device is reported lost, stolen, or subject to an outstanding finance agreement, we may share your details, the Device Identifiers, and the offer record with the police, the relevant network operator, or an insurer. We may also disclose data where required by law, court order, or a regulator such as the ICO or HMRC.</li>
            <li><strong>Business transfers</strong> — if Techwow is sold, merged, or reorganised, Personal Data may be transferred to the acquiring entity, subject to this Policy.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            All service providers act as <strong>processors</strong> under written contract and may use your data only to perform services for us.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            <strong>Other users</strong> can see only your display name and the content of any review you publish. Nothing else in your Account is visible to other users.
          </p>
        </section>

        {/* 13. International Data Transfers */}
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
            13. International Data Transfers
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Techwow operates in the United Kingdom and our data is held primarily in the UK or the European Economic Area. Some service providers may process data outside the UK.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Where Personal Data leaves the UK, we ensure one of the following safeguards is in place:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li>The destination country is covered by <strong>UK adequacy regulations</strong>; or</li>
            <li>We have entered into the <strong>UK International Data Transfer Agreement (IDTA)</strong>, or the EU Standard Contractual Clauses with the <strong>UK International Data Transfer Addendum</strong>, and have carried out a transfer risk assessment.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            You may request details of the safeguards applied to a specific transfer by contacting us.
          </p>
        </section>

        {/* 14. Your Privacy Rights */}
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
            14. Your Privacy Rights
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Under the UK GDPR you have the right to:
          </p>
          <ul
            style={{
              paddingLeft: '1.5rem',
              margin: '0 0 1.25rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.7,
            }}
          >
            <li><strong>Access</strong> your data and receive a copy of it</li>
            <li><strong>Correct</strong> inaccurate or incomplete data</li>
            <li><strong>Request deletion</strong> of your data, where we have no overriding legal reason to retain it</li>
            <li><strong>Restrict</strong> processing while a dispute or accuracy issue is resolved</li>
            <li><strong>Object</strong> to processing based on legitimate interests, and to <strong>direct marketing at any time</strong></li>
            <li><strong>Data portability</strong> — receive data you provided in a structured, machine-readable format</li>
            <li><strong>Withdraw consent</strong>, including for precise Location Data and AI model improvement</li>
            <li><strong>Request human review</strong> of automated decisions (see Section 14.1)</li>
            <li><strong>Lodge a complaint</strong> with the Information Commissioner&apos;s Office</li>
          </ul>

          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
              Actioning your rights directly in the Techwow App:
            </h4>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>
              <li>Update your details — <em>Profile → Personal Information</em></li>
              <li>Manage marketing and notifications — <em>Profile → Notification</em></li>
              <li>Manage location and data sharing — <em>Profile → Privacy &amp; Security</em></li>
              <li>
                Delete your Account — <em>Profile → Delete Account</em>, or online via our{' '}
                <Link to="/delete-account" style={{ color: '#4C6FFF', fontWeight: 600 }}>
                  Account Deletion Page
                </Link>
              </li>
            </ul>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            For anything else, contact us using the details in Section 18. We will respond within <strong>one month</strong>. If your request is complex or you have made several, we may extend this by up to two further months and will tell you if we do. We may ask you to verify your identity before acting on a request.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '2rem' }}>
            <strong>Deleting your Account</strong> permanently removes your profile, saved addresses, saved payment methods, preferences, booking history, and chat history from our live systems. Records required for tax, warranty, consumer law, and proof-of-title purposes are retained for the periods in Section 11. Active bookings, orders, or Buy Back requests may be cancelled or affected. Account deletion cannot be undone.
          </p>

          {/* 14.1 Automated Decision-Making */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              14.1 Automated Decision-Making
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Our Buy Back service uses automated processing. When you scan a device, our AI analyses your Scan Images alongside the details you provide to detect condition, produce a condition score, and generate an <strong>estimated</strong> value.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              <strong>This estimate is not a final or binding offer.</strong> Before any payment is made:
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>A member of our team reviews the AI assessment and contacts you to verify the details</li>
              <li>The device is physically inspected on arrival or at your appointment</li>
              <li>The valuation may be revised up or down based on that inspection, and you are free to decline</li>
            </ul>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Because a person reviews the outcome and can change it before it takes effect, this is <strong>not a decision based solely on automated processing</strong> within the meaning of Article 22 of the UK GDPR.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Regardless, you may at any time ask us to explain how a valuation was reached, ask a member of our team to review it, or challenge or decline the offer.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
              <strong>TechBot</strong> is an automated assistant that answers common questions about repairs, orders, and products. It cannot make binding decisions about your Account, your money, or your device. You may ask to speak to a person at any time. TechBot conversations are stored and may be reviewed by our team to improve accuracy and handle escalations.
            </p>
          </div>

          {/* 14.2 Use of Scan Images for AI Improvement */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#222', marginBottom: '0.75rem' }}>
              14.2 Use of Scan Images for AI Improvement
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              We would like to use Scan Images and assessment outcomes to improve the accuracy of our valuation models. <strong>We will do this only where you have given separate consent</strong>, which we request at the point of scanning.
            </p>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
              <li>Declining does not affect your offer, your valuation, or your ability to use any part of the Service.</li>
              <li>You may withdraw consent at any time under <em>Profile → Privacy &amp; Security</em>.</li>
              <li>Images used for model improvement are stripped of contact details and account identifiers before use.</li>
            </ul>
          </div>
        </section>

        {/* 15. Marketing Communications */}
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
            15. Marketing Communications
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            You may receive service-related messages and optional marketing communications:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#444', lineHeight: 1.7 }}>
            <li><strong>Service messages</strong> — booking confirmations, repair status updates, offer expiry notices, order and delivery updates, and security alerts. These are necessary to perform our contract with you and continue while you have an active transaction.</li>
            <li><strong>Marketing messages</strong> — sent where you have opted in, or where you have previously purchased from us, the marketing relates to similar products or services, and you were given an opportunity to opt out at the time (the PECR soft opt-in).</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Push notifications are grouped by category — repair, buyback, product, and promotions — and each can be controlled independently under <em>Profile → Notification</em>. Every marketing email and SMS contains an unsubscribe mechanism. You may opt out of non-essential communications at any time.
          </p>
        </section>

        {/* 16. Third-Party Links */}
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
            16. Third-Party Links
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            The Service may contain links to third-party websites or services, including Apple and Google sign-in, payment providers, and courier tracking pages.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We are not responsible for their privacy practices. Once you leave our Service, this Policy no longer applies. We encourage you to read the privacy policy of any service you use.
          </p>
        </section>

        {/* 17. Changes to This Policy */}
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
            17. Changes to This Policy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We may update this Privacy Policy periodically. Updates take effect when posted with a revised &quot;Last Updated&quot; date.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Where a change is material — for example, using your data for a genuinely new purpose — we will notify you in the app or by email before it takes effect, and where the law requires it, we will ask for your consent.
          </p>
        </section>

        {/* 18. Contact Information */}
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
            18. Contact Information
          </h2>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
              TECHWOW LTD
            </p>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
              Registered in England and Wales, company number 13962308<br />
              Post: Data Protection Lead, Techwow Ltd, 05 Leicester Steet, Northwich, England, CW9 5LA<br />
              Email: <a href="mailto:techwowltd@yahoo.com" style={{ color: '#4C6FFF', textDecoration: 'none' }}>techwowltd@yahoo.com</a><br />
              Telephone: [Phone number]<br />
              Operating in the United Kingdom
            </p>
          </div>

          <div
            style={{
              background: '#f8fafc',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '1.5rem',
            }}
          >
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
              Supervisory Authority Complaints
            </p>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: '0 0 0.75rem 0' }}>
              If you are not satisfied with our response, you have the right to complain to:
            </p>
            <p style={{ fontSize: '0.9rem', color: '#333', lineHeight: 1.6, margin: 0 }}>
              <strong>Information Commissioner&apos;s Office (ICO)</strong><br />
              Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF<br />
              Helpline: 0303 123 1113<br />
              Website:{' '}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4C6FFF', textDecoration: 'underline' }}
              >
                https://ico.org.uk/make-a-complaint/
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
