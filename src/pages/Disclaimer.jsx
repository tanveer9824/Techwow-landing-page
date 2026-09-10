import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function Disclaimer() {
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
              Disclaimer
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
              Your safety matters. Please read this disclaimer to understand the scope and limitations of our services.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Disclaimer Content Container ── */}
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
            Disclaimer
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 1.5rem 0' }}>
            Conquer Circles — Last Updated: 21 August 2026
          </p>
          <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0 }}>
            The information and services provided by <strong>Conquer Circles</strong> are for general entertainment and recreational purposes only.
          </p>
        </div>

        {/* 1. Real-World Safety — Your Responsibility */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            1. Real-World Safety — Your Responsibility
          </h2>
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#111', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Conquer Circles encourages walking in real-world locations. <strong>Your safety is your sole responsibility.</strong>
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#333', lineHeight: 1.7 }}>
            <li>Always be aware of your surroundings while using the Service</li>
            <li>Do not use the Service while driving, cycling, or operating any vehicle or machinery</li>
            <li>Do not walk while looking at your screen — stop before interacting with the app</li>
            <li>Do not trespass on private property or enter restricted, hazardous, or unlawful areas</li>
            <li>Do not enter roadways, railways, construction sites, waterways, or any unsafe location to claim or defend Territory</li>
            <li>Use caution when walking at night or in unfamiliar areas</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#111', fontWeight: 600, lineHeight: 1.7, margin: 0 }}>
            No Territory, ranking, badge, or reward is worth risking your safety or the safety of others.
          </p>
        </section>

        {/* 2. No Medical or Fitness Advice */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            2. No Medical or Fitness Advice
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Conquer Circles does not provide medical advice, diagnosis, treatment, or healthcare services.
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>The Service is a game, not a fitness, health, or training program</li>
            <li>Step counts, activity data, and gameplay statistics are provided for informational purposes only</li>
            <li>The Service is not a medical device</li>
            <li>The Service is not intended to diagnose, treat, cure, or prevent any disease</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Always consult a qualified healthcare professional before beginning any new physical activity, including increased walking.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Never disregard professional medical advice or delay seeking it because of information provided by Conquer Circles.
          </p>
        </section>

        {/* 3. Physical Activity Risk */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            3. Physical Activity Risk
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Walking and physical activity carry inherent risks, including injury. You acknowledge that:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>You participate in physical activity voluntarily and at your own risk</li>
            <li>You are responsible for assessing your own physical condition and limits</li>
            <li>You should stop and seek medical attention if you experience pain, dizziness, or discomfort</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Conquer Circles assumes no responsibility for injuries sustained during use of the Service.
          </p>
        </section>

        {/* 4. GPS & Location Accuracy */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            4. GPS &amp; Location Accuracy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            The Service depends on GPS and location data provided by your device and third-party providers. You acknowledge that:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>GPS accuracy varies by device, environment, weather, and conditions outside our control</li>
            <li>Location errors may occur in dense urban areas, indoors, or near tall structures</li>
            <li>Territory claims, tile ownership, energy calculations, and gameplay outcomes may be affected by location inaccuracy</li>
            <li>Map data is provided by third parties and may be incomplete or outdated</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Conquer Circles makes no guarantees regarding the accuracy of location data or gameplay outcomes derived from it.
          </p>
        </section>

        {/* 5. No Guarantees or Results */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            5. No Guarantees or Results
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Conquer Circles does not guarantee:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Specific fitness, health, or activity outcomes</li>
            <li>Accuracy of step counts, distance, or location data</li>
            <li>Retention of Territory, rankings, or in-game progress</li>
            <li>Continuous or error-free operation of the Service</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Territory is temporary, subject to decay, capture by other players, and seasonal reset. Results vary based on individual behavior, consistency, and factors beyond our control.
          </p>
        </section>

        {/* 6. Third-Party Devices & Services */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            6. Third-Party Devices &amp; Services
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            The Service may integrate with or display data from third-party devices, platforms, or services, including Apple Health, Google Fit, app stores, and map providers. Conquer Circles:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Does not control third-party devices or services</li>
            <li>Is not responsible for their accuracy, availability, or performance</li>
            <li>Disclaims liability arising from third-party data or integrations</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Use of third-party services is governed by their own terms and policies.
          </p>
        </section>

        {/* 7. Interactions With Other Users */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            7. Interactions With Other Users
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            Conquer Circles includes social features, including Circles and in-app chat.
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>We do not control the conduct of other users</li>
            <li>We are not responsible for interactions, disputes, or conduct between users</li>
            <li>Do not follow, confront, harass, or approach other players in the real world in connection with gameplay</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Report abusive behavior through the Service.
          </p>
        </section>

        {/* 8. Limitation of Responsibility */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            8. Limitation of Responsibility
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
            To the fullest extent permitted by law:
          </p>
          <ul style={{ paddingLeft: '1.5rem', margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
            <li>Conquer Circles is not responsible for injuries, property damage, legal consequences, or other damages resulting from use of the Service</li>
            <li>Users assume full responsibility for decisions made and routes taken while using the Service</li>
            <li>Use of the Service is at your own risk</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Nothing in this Disclaimer excludes liability that cannot be excluded under applicable law.
          </p>
        </section>

        {/* 9. Not for Emergency Use */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            9. Not for Emergency Use
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Conquer Circles is not intended for emergency situations and does not provide emergency, navigation, or safety services.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            If you believe you are experiencing a medical emergency, contact emergency services immediately.
          </p>
        </section>

        {/* 10. Changes to This Disclaimer */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            10. Changes to This Disclaimer
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We may update this Disclaimer from time to time.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Changes take effect when posted with an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* 11. Contact Information */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
            11. Contact Information
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
