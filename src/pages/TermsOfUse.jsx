import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
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
              Terms of Use
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
              Terms and conditions governing your access to and use of Conquer Circles.
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
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111', margin: '0 0 0.5rem 0' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 1.5rem 0' }}>
            Conquer Circles — Last Updated: 21 August 2026
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of the <strong>Conquer Circles</strong> mobile application, website, and related services (collectively, the &quot;Service&quot;).
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            By creating an account, downloading, or using Conquer Circles, you agree to be bound by these Terms. If you do not agree, do not use the Service.
          </p>
        </div>

        {/* 1. Interpretation & Definitions */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            1. Interpretation &amp; Definitions
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            For the purposes of these Terms:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li><strong>&quot;Account&quot;</strong> means a unique account created to access the Service.</li>
            <li><strong>&quot;Circle&quot;</strong> means a private group of players who compete and communicate within the Service.</li>
            <li><strong>&quot;Territory&quot;</strong> means in-game map tiles claimed through gameplay.</li>
            <li><strong>&quot;Virtual Items&quot;</strong> means in-game badges, cosmetics, energy, rewards, and similar non-monetary digital items.</li>
            <li><strong>&quot;User Content&quot;</strong> means any data, messages, usernames, or materials you submit through the Service.</li>
            <li><strong>&quot;Service&quot;</strong> refers to the Conquer Circles application and related offerings.</li>
          </ul>
        </section>

        {/* 2. Eligibility */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            2. Eligibility
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>You must be at least 16 years old to use the Service.</li>
            <li>By using the Service, you represent that you are at least 16 years old and legally capable of entering into these Terms.</li>
            <li>If you are under the age of majority in your jurisdiction, you confirm that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.</li>
            <li>We may terminate accounts that we believe belong to users under 16.</li>
          </ul>
        </section>

        {/* 3. SAFETY — PLEASE READ CAREFULLY */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            3. SAFETY — PLEASE READ CAREFULLY
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Conquer Circles encourages walking in real-world locations. <strong>Your safety is your responsibility.</strong>
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#333', lineHeight: 1.7 }}>
            <li><strong>Be aware of your surroundings at all times.</strong> Do not use the Service while driving, cycling, operating machinery, or in any situation requiring your full attention.</li>
            <li><strong>Do not walk while looking at your screen.</strong> Stop walking before interacting with the app.</li>
            <li><strong>Obey all laws.</strong> Do not trespass on private property, enter restricted or hazardous areas, cross barriers, or violate any local ordinance in order to claim, defend, or attack Territory.</li>
            <li><strong>Do not enter dangerous locations.</strong> This includes roadways, railways, construction sites, waterways, private land, restricted government or military property, or any area that is unsafe or unlawful to enter.</li>
            <li><strong>Use caution at night and in unfamiliar areas.</strong> Consider walking with others.</li>
            <li><strong>Respect others.</strong> Do not trespass, harass, follow, or intimidate any person in connection with gameplay.</li>
            <li><strong>Consult a doctor before beginning any new physical activity.</strong> Conquer Circles is a game, not a medical or fitness program, and does not provide medical advice.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#111', fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
            No in-game Territory, ranking, badge, or reward is worth risking your safety or the safety of others. <strong>You assume all risks associated with physical activity and travel undertaken while using the Service.</strong>
          </p>
        </section>

        {/* 4. Account Registration & Security */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            4. Account Registration &amp; Security
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>You must provide accurate information when creating an Account.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You are responsible for all activity that occurs under your Account.</li>
            <li>Notify us immediately of any unauthorized use of your Account.</li>
            <li>You may not sell, transfer, rent, or share your Account with any other person.</li>
          </ul>
        </section>

        {/* 5. License to Use the Service */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            5. License to Use the Service
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable license to use the Service for your own non-commercial entertainment purposes.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We reserve all rights not expressly granted.
          </p>
        </section>

        {/* 6. Acceptable Use & Prohibited Conduct */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            6. Acceptable Use &amp; Prohibited Conduct
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            You agree <strong>not</strong> to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Falsify, spoof, simulate, or manipulate GPS location, step count, or movement data by any means, including third-party apps, modified devices, or hardware.</li>
            <li>Use bots, scripts, automation, emulators, or modified clients to interact with the Service.</li>
            <li>Use vehicles, bicycles, drones, or any means other than walking to claim, defend, or attack Territory.</li>
            <li>Create multiple accounts to gain a gameplay advantage, or operate accounts on behalf of others.</li>
            <li>Buy, sell, trade, or transfer Accounts, Territory, or Virtual Items for real-world value.</li>
            <li>Reverse engineer, decompile, or attempt to access the Service&#39;s source code or underlying systems.</li>
            <li>Interfere with, overload, or attempt to gain unauthorized access to the Service or its infrastructure.</li>
            <li>Harass, threaten, stalk, impersonate, or abuse other users, including through Circle chat.</li>
            <li>Post unlawful, hateful, sexually explicit, violent, or otherwise objectionable content.</li>
            <li>Use the Service to trespass or to encourage others to trespass or break the law.</li>
            <li>Use the Service for any commercial purpose without our written permission.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Violation of this Section may result in trust score reduction, energy or Territory penalties, suspension, or permanent termination of your Account.
          </p>
        </section>

        {/* 7. Anti-Cheat & Fair Play */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            7. Anti-Cheat &amp; Fair Play
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>We operate automated and manual systems designed to detect location spoofing, step manipulation, and other forms of cheating.</li>
            <li>These systems may reduce your trust score, invalidate Territory claims, reduce energy or step credit, restrict features, or suspend or terminate your Account.</li>
            <li>We may take these actions with or without prior notice.</li>
            <li>If your Account is restricted or suspended based substantially on an automated decision, you may request human review by contacting us at the details below.</li>
            <li>Determinations regarding cheating are made at our reasonable discretion.</li>
          </ul>
        </section>

        {/* 8. Circles & User Content */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            8. Circles &amp; User Content
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>You are solely responsible for User Content you submit, including Circle chat messages.</li>
            <li>By submitting User Content, you grant us a limited, non-exclusive, royalty-free, worldwide license to store, process, display, and distribute that content solely for the purpose of operating and improving the Service. This license ends when you delete the content or your Account, subject to legal retention obligations and copies already shared with other users.</li>
            <li>We do not pre-screen User Content but may remove content or restrict accounts that violate these Terms.</li>
            <li>Circle owners are responsible for managing their Circles reasonably. We are not responsible for disputes between Circle members.</li>
          </ul>
        </section>

        {/* 9. Virtual Items, Territory & Seasons */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            9. Virtual Items, Territory &amp; Seasons
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li><strong>Virtual Items and Territory have no real-world monetary value.</strong> They are a limited license to use in-game features, not property.</li>
            <li>Territory is temporary. Tiles decay, may be captured by other players, and are <strong>reset at the end of each season</strong>.</li>
            <li>Virtual Items may be modified, devalued, or removed at any time as part of game balancing.</li>
            <li>You have no ownership interest in any Account, Territory, Virtual Item, or in-game progress.</li>
            <li>Except where required by law, Virtual Items and Territory are non-refundable and non-transferable, and are forfeited if your Account is terminated for violation of these Terms.</li>
          </ul>
        </section>

        {/* 10. Subscriptions & Payments */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            10. Subscriptions &amp; Payments
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>The Service offers optional paid features, including a Premium subscription and a Season Pass.</li>
            <li>Payments are processed through the Apple App Store and Google Play, and are subject to their respective terms.</li>
            <li><strong>Subscriptions renew automatically</strong> at the then-current price until cancelled. You may cancel at any time through your Apple or Google account settings; cancellation takes effect at the end of the current billing period.</li>
            <li>Refunds are handled by Apple or Google in accordance with their policies. Where required by applicable consumer law (including EU and UK withdrawal rights), statutory refund and cancellation rights apply and are not limited by these Terms.</li>
            <li>We may change pricing prospectively, with notice where required by law.</li>
            <li>Paid features provide convenience and cosmetic benefits. We aim to avoid pay-to-win mechanics, but we may adjust game balance at our discretion.</li>
          </ul>
        </section>

        {/* 11. Modifications to the Service */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            11. Modifications to the Service
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>We may modify, suspend, update, or discontinue any part of the Service — including gameplay mechanics, seasons, Virtual Items, or the Service in its entirety — at any time.</li>
            <li>We will provide reasonable notice of material changes where practicable.</li>
            <li>We are not liable for any modification, suspension, or discontinuation of the Service, except as required by law.</li>
          </ul>
        </section>

        {/* 12. Termination */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            12. Termination
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>You may stop using the Service and delete your Account at any time.</li>
            <li>We may suspend or terminate your Account, with or without notice, if you violate these Terms, if we suspect fraudulent or unlawful activity, or if required by law.</li>
            <li>Upon termination, your license to use the Service ends and any Territory, Virtual Items, and in-game progress are forfeited.</li>
            <li>Sections that by their nature should survive termination (including Sections 8, 9, 13, 14, 15, and 16) will survive.</li>
          </ul>
        </section>

        {/* 13. Intellectual Property */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            13. Intellectual Property
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>The Service, including its software, design, graphics, maps, game mechanics, trademarks, and content, is owned by Conquer Circles or its licensors and is protected by intellectual property laws.</li>
            <li>You may not copy, modify, distribute, sell, or create derivative works from the Service without our written permission.</li>
            <li>Map data and location services may be provided by third parties and are subject to their own terms.</li>
          </ul>
        </section>

        {/* 14. Disclaimers */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            14. Disclaimers
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            <strong>The Service is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind</strong>, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We do not warrant that the Service will be uninterrupted, error-free, or secure, or that GPS, location, or step data will be accurate.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            GPS accuracy varies by device, environment, and conditions outside our control. Territory claims, tile ownership, and gameplay outcomes may be affected.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            <strong>Conquer Circles is a game, not a health, fitness, or medical service, and does not provide medical advice.</strong>
          </p>
        </section>

        {/* 15. Limitation of Liability */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            15. Limitation of Liability
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            To the maximum extent permitted by applicable law, Conquer Circles and its officers, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, data, goodwill, or in-game progress.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            To the maximum extent permitted by applicable law, our total aggregate liability arising out of or relating to the Service will not exceed the amount you paid us in the twelve (12) months preceding the claim.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            <strong>Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law</strong>, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation, or statutory consumer rights.
          </p>
        </section>

        {/* 16. Indemnification */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            16. Indemnification
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            To the extent permitted by law, you agree to indemnify and hold harmless Conquer Circles from claims, damages, losses, and expenses (including reasonable legal fees) arising out of your misuse of the Service, your violation of these Terms, your violation of any law, or your infringement of the rights of any third party.
          </p>
        </section>

        {/* 17. Third-Party Services */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            17. Third-Party Services
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            The Service may integrate with or link to third-party services, including Apple Health, Google Fit, app stores, and map providers. Your use of those services is governed by their own terms and privacy policies. We are not responsible for third-party services.
          </p>
        </section>

        {/* 18. Privacy */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            18. Privacy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Your use of the Service is also governed by our{' '}
            <Link to="/privacy-policy" style={{ color: '#4C6FFF', textDecoration: 'none', fontWeight: 500 }}>
              Privacy Policy
            </Link>
            , which explains how we collect and use your information, including precise location data.
          </p>
        </section>

        {/* 19. Changes to These Terms */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            19. Changes to These Terms
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We may update these Terms periodically. We will post the revised Terms with an updated &quot;Last Updated&quot; date, and where changes are material, provide notice through the Service or by email.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* 20. Governing Law & Dispute Resolution */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            20. Governing Law &amp; Dispute Resolution
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            These Terms are governed by applicable law without regard to conflict of law principles. Nothing in this section deprives consumers of mandatory protections available under the law of their country of residence.
          </p>
        </section>

        {/* 21. General */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            21. General
          </h2>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li><strong>Entire Agreement:</strong> These Terms and the Privacy Policy constitute the entire agreement between you and Conquer Circles regarding the Service.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full effect.</li>
            <li><strong>No Waiver:</strong> Our failure to enforce any provision is not a waiver of that provision.</li>
            <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Force Majeure:</strong> We are not liable for failures caused by events beyond our reasonable control.</li>
          </ul>
        </section>

        {/* 22. Contact */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            22. Contact
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
