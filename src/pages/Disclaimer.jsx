import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function Disclaimer() {
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
              Disclosures &amp; Notice
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
              Disclaimer
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
              Your device matters. Please read this disclaimer to understand the scope, service estimates, and limitations of our services.
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
            The information, valuations, quotes, and guidance provided by Techwow are for general informational purposes and are subject to verification. Techwow is operated by <strong>TECHWOW LTD</strong>, registered in England and Wales, company number 13962308.
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
              <strong>Statutory Protection:</strong> Nothing in this Disclaimer excludes or limits any liability that cannot lawfully be excluded, or affects your statutory rights under the Consumer Rights Act 2015 or other UK consumer law.
            </p>
          </div>
        </div>

        {/* 1. Your Data — Your Responsibility */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              background: '#fffbeb',
              border: '2px solid #f59e0b',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🔒</span>
              <h2
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#92400e',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                1. Your Data — Your Responsibility
              </h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#78350f', lineHeight: 1.7, marginBottom: '1rem', fontWeight: 500 }}>
              Repairing or selling a device carries a real risk of data loss. Protecting your own data is your responsibility:
            </p>
            <ul
              style={{
                paddingLeft: '1.25rem',
                margin: '0 0 1.25rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                fontSize: '0.925rem',
                color: '#78350f',
                lineHeight: 1.65,
              }}
            >
              <li><strong>Always back up your device before submitting it for repair or sale.</strong></li>
              <li>Repairs to screens, batteries, charging ports, motherboards, and water-damaged devices can result in partial or total data loss.</li>
              <li>We are not a data recovery service and do not offer data recovery.</li>
              <li>Remove or sign out of iCloud, Google, and Samsung accounts before selling a device to us.</li>
              <li>Perform a factory reset before selling — our secure wipe is a second line of defence, not a substitute for yours.</li>
              <li>Remove SIM cards, memory cards, cases, and accessories before handing a device over.</li>
            </ul>
            <div style={{ background: '#ffffff', borderRadius: '10px', padding: '1rem 1.25rem', border: '1px solid #fcd34d' }}>
              <p style={{ fontSize: '0.95rem', color: '#b45309', lineHeight: 1.6, margin: 0, fontWeight: 700 }}>
                Do not send us a device containing data you cannot afford to lose.
              </p>
            </div>
          </div>
        </section>

        {/* 2. AI Valuations Are Estimates, Not Offers */}
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
            2. AI Valuations Are Estimates, Not Offers
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Our Buy Back service uses artificial intelligence to assess photographs of your device and generate an estimated value:
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
            <li>The Estimated Value is <strong>indicative only and is not a binding offer</strong>.</li>
            <li>It is generated automatically from the images you capture and the details you provide.</li>
            <li>Accuracy depends on image quality, lighting, camera capability, and the accuracy of the information you enter.</li>
            <li>
              The AI <strong>cannot detect internal faults, prior repairs, non-genuine parts, water damage, or hidden defects</strong> that are not visible in the photographs.
            </li>
            <li>Every valuation is subject to human verification and physical inspection, and may be revised <strong>up or down</strong> as a result.</li>
            <li>A binding contract of sale is formed only when you accept the Final Offer after inspection.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            Techwow makes no guarantee that the Estimated Value shown in the app will be the amount you are ultimately paid.
          </p>
        </section>

        {/* 3. Repair Quotes Are Estimates */}
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
            3. Repair Quotes Are Estimates
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Prices shown when booking a repair are based on the fault you select and the device you identify:
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
            <li>The final price depends on diagnosis by a technician.</li>
            <li>Additional faults, water damage, prior third-party repair, or non-genuine parts may change the price or make a device unrepairable.</li>
            <li>We will always contact you with a revised quote before carrying out additional work.</li>
            <li>Repair timescales, including same-day service, depend on parts availability, technician capacity, and the condition of the device, and are estimates rather than guarantees.</li>
          </ul>
        </section>

        {/* 4. Repairs Carry Inherent Risk */}
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
            4. Repairs Carry Inherent Risk
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Electronic repair involves disassembling devices that were not designed to be opened. You acknowledge that:
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
            <li>Some devices, particularly older, previously repaired, water-damaged, or heavily damaged units, may <strong>fail during or after disassembly</strong> despite reasonable care.</li>
            <li>Water-damaged devices may work intermittently or fail without warning, and outcomes cannot be predicted.</li>
            <li>Replacement parts may disable certain device features, such as True Tone, Face ID, or battery health reporting.</li>
            <li>Repairs may void your manufacturer warranty.</li>
            <li>Devices previously opened by a third party carry elevated risk, and we may decline to work on them.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We will tell you where we consider a repair to carry elevated risk before proceeding. Where we damage a device through our own negligence,{' '}
            <Link to="/terms-of-use" style={{ color: '#4C6FFF', fontWeight: 600 }}>
              Section 16 of our Terms of Use
            </Link>{' '}
            sets out what we will do about it.
          </p>
        </section>

        {/* 5. TechBot Is an Automated Assistant */}
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
            5. TechBot Is an Automated Assistant
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            TechBot uses artificial intelligence to answer common questions:
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
            <li>Its responses are <strong>general guidance and may be inaccurate or incomplete</strong>.</li>
            <li>TechBot does <strong>not</strong> provide a binding quote, a diagnosis, a valuation, or a commitment on our behalf.</li>
            <li>TechBot cannot make decisions about your account, your payments, or your device.</li>
            <li>Do not enter passwords, full card numbers, or sensitive personal information into TechBot.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Where accuracy matters, ask to speak to a member of our team.
          </p>
        </section>

        {/* 6. Store Locations & Map Accuracy */}
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
            6. Store Locations &amp; Map Accuracy
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            The Find Store feature depends on device GPS and third-party map data:
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
            <li>Distances and locations shown are <strong>indicative only</strong>.</li>
            <li>GPS accuracy varies by device, environment, and conditions outside our control.</li>
            <li>Map data is supplied by third parties and may be incomplete or out of date.</li>
            <li>Store opening hours, addresses, and availability may change.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Check with the store before travelling for anything time-critical.
          </p>
        </section>

        {/* 7. Products, Images & Compatibility */}
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
            7. Products, Images &amp; Compatibility
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
            <li>Product images are illustrative. Colours, finishes, and packaging may vary.</li>
            <li>Device compatibility information is provided in good faith but you are responsible for confirming that a product fits your specific model and variant.</li>
            <li>Refurbished and pre-owned products are sold in the condition described. Cosmetic condition grades are our assessment and are subjective.</li>
            <li>Battery health figures for pre-owned devices are accurate at the point of testing and will decline with use.</li>
          </ul>
        </section>

        {/* 8. No Manufacturer Affiliation */}
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
            8. No Manufacturer Affiliation
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Techwow is an independent repair, trade-in, and retail business:
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
            <li>
              We are <strong>not affiliated with, authorised by, endorsed by, or an agent of</strong> Apple, Samsung, Google, Huawei, OnePlus, Oppo, Sony, Microsoft, Nintendo, or any other manufacturer, unless expressly stated.
            </li>
            <li>Manufacturer names, logos, and device images are used for identification purposes only and remain the property of their respective owners.</li>
            <li>Repairs carried out by us may affect or void a manufacturer warranty.</li>
          </ul>
        </section>

        {/* 9. Third-Party Services */}
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
            9. Third-Party Services
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            The Service integrates with or links to third-party services, including Apple and Google sign-in, Apple Pay, Google Pay, payment processors, couriers, and map providers. Techwow:
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
            <li>Does not control third-party services</li>
            <li>Is not responsible for their accuracy, availability, or performance</li>
            <li>Disclaims liability arising from third-party data or integrations, to the extent permitted by law</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Use of third-party services is governed by their own terms and policies.
          </p>
        </section>

        {/* 10. No Guarantees of Continuous Operation */}
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
            10. No Guarantees of Continuous Operation
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Techwow does not guarantee:
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
            <li>Uninterrupted or error-free operation of the app or website</li>
            <li>The accuracy of AI assessments, condition scores, or estimated values</li>
            <li>Availability of specific parts, products, appointment slots, or stores</li>
            <li>That a repair will succeed, particularly on water-damaged or previously repaired devices</li>
          </ul>
        </section>

        {/* 11. Devices Suspected Stolen or Financed */}
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
            11. Devices Suspected Stolen or Financed
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Devices offered to us are checked against stolen-property registers, network blocklists, and outstanding finance records:
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
            <li>Where a device is flagged, we will <strong>withhold payment and will not return the device</strong>.</li>
            <li>We will report the matter and, where required, surrender the device to the police or its rightful owner.</li>
            <li>This is a legal obligation, not a discretionary decision, and applies regardless of whether you knew the device&apos;s history.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            Full detail is in Section 7 of our{' '}
            <Link to="/terms-of-use" style={{ color: '#4C6FFF', fontWeight: 600 }}>
              Terms of Use
            </Link>
            .
          </p>
        </section>

        {/* 12. Limitation of Responsibility */}
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
            12. Limitation of Responsibility
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            To the fullest extent permitted by law, and subject always to the opening paragraph of this Disclaimer:
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
            <li>Techwow is not responsible for loss of data on a device that you did not back up.</li>
            <li>Techwow is not responsible for losses arising from your reliance on an Estimated Value, a repair estimate, or a TechBot response as though it were final.</li>
            <li>The Service is supplied for domestic and private use. We accept no liability for business losses, loss of profit, or business interruption.</li>
          </ul>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            Nothing here excludes liability for death or personal injury caused by our negligence, for fraud, or for breach of the terms implied by the Consumer Rights Act 2015.
          </p>
        </section>

        {/* 13. Not for Emergency Use */}
        <section style={{ marginBottom: '3.5rem' }}>
          <div
            style={{
              background: '#fef2f2',
              border: '2px solid #dc2626',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🚨</span>
              <h2
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#991b1b',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                13. Not for Emergency Use &amp; Battery Safety Warning
              </h2>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#7f1d1d', lineHeight: 1.7, marginBottom: '1rem' }}>
              Techwow does not provide emergency, navigation, or safety services. If you are experiencing an emergency, contact the emergency services on <strong>999</strong>.
            </p>
            <div style={{ background: '#ffffff', borderRadius: '10px', padding: '1.1rem 1.25rem', border: '1px solid #fca5a5' }}>
              <p style={{ fontSize: '0.95rem', color: '#991b1b', lineHeight: 1.65, margin: 0, fontWeight: 600 }}>
                If a device is overheating, swelling, smoking, or has a visibly damaged or expanded battery, STOP USING IT, DO NOT CHARGE IT, AND DO NOT POST IT TO US. Lithium batteries in this condition are a fire hazard and cannot lawfully be sent through the post. Contact us for guidance on safe handling and drop-off.
              </p>
            </div>
          </div>
        </section>

        {/* 14. Changes to This Disclaimer */}
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
            14. Changes to This Disclaimer
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
            We may update this Disclaimer from time to time. Changes take effect when posted with an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* 15. Contact Information */}
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
            15. Contact Information
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
