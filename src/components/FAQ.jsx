import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import appleBtn from '@/assets/apple-button.webp'
import playstoreBtn from '@/assets/playstore-button.webp'

const faqs = [
  {
    id: 1,
    question: 'How does the AI Buy Back valuation work?',
    answer:
      'Our app or web portal guides you through a 6-step camera scan (back, front screen off, front screen on, left side, right side, and ports). Our computer vision model inspects the images and generates an itemised condition report covering display, back glass, camera lenses, frame, and ports, scored out of 100.',
  },
  {
    id: 2,
    question: 'Is the AI valuation guaranteed or locked in?',
    answer:
      'No. In compliance with UK consumer regulations, the AI figure is an instant estimate, subject to physical inspection and human verification before payout. A Techwow specialist will call you to confirm all details. Unlike competitors who quietly lower offers after delivery, our itemised report shows exactly what is assessed.',
  },
  {
    id: 3,
    question: 'What is the difference between Instant Payment and Regular Process?',
    answer:
      'With Instant Payment, your funds are sent immediately via bank transfer upon verification, with a £10 convenience fee deducted. With the Regular Process, your device is sent in and processed at our workshop, and you receive the full valuation amount without any deductions.',
  },
  {
    id: 4,
    question: 'Are your repairs carried out by third-party shops?',
    answer:
      'No. Techwow is NOT a marketplace, directory, or aggregator. We own our stores, employ our technicians directly, and fulfil every repair through one centralised system. You deal with one accountable company end to end.',
  },
  {
    id: 5,
    question: 'How does the Mail-in prepaid box work?',
    answer:
      'When you select Mail-in, Techwow dispatches a prepaid, secure, padded shipping box to your UK address. Place your device inside, seal it with the tamper-evident strip, and drop it off at any local post office. We track every stage live.',
  },
  {
    id: 6,
    question: 'What guarantee do you offer on repairs?',
    answer:
      'Every repair carried out by Techwow is backed by our dedicated [X]-month guarantee covering installed replacement components and workshop labour against manufacturing defects under normal use.',
  },
  {
    id: 7,
    question: 'Can I chat directly with the technician fixing my phone?',
    answer:
      'Yes. Once your repair is checked into our workshop and assigned to a technician, a direct conversation thread opens in your app and account dashboard so you can message with the person holding your device.',
  },
  {
    id: 8,
    question: 'Are you affiliated with Apple, Samsung, or Google?',
    answer:
      'No. Techwow is an independent UK device repair and trade-in company. All manufacturer trademarks (such as Apple, iPhone, Samsung, Galaxy, and Google Pixel) belong to their respective owners and are used strictly to identify compatible equipment.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  return (
    <section
      style={{
        width: '100%',
        padding: '5rem 1.5rem',
        boxSizing: 'border-box',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div className="faq-grid-container">
        {/* Left Column: Heading, Subtitle and Download CTA Buttons */}
        <div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
              fontWeight: 600,
              color: '#000000',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Frequently Asked
            <br />
            Questions
          </h2>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#666666',
              lineHeight: 1.55,
              marginBottom: '28px',
              maxWidth: '360px',
            }}
          >
            Everything you need to know about our repairs, AI trade-ins, and workshop operations.
          </p>

          <div className="faq-button-group">
            {/* App Store button */}
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                background: '#000000',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '10px 18px',
                minWidth: '175px',
                height: '56px',
                boxSizing: 'border-box',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={appleBtn}
                alt=""
                style={{ height: '26px', width: '24px', objectFit: 'contain', flexShrink: 0 }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontSize: '0.58rem',
                    opacity: 0.85,
                    letterSpacing: '0.02em',
                    marginBottom: '2px',
                  }}
                >
                  Available on the
                </span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  App Store
                </span>
              </div>
            </a>

            {/* Google Play button */}
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                background: '#000000',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '10px 18px',
                minWidth: '175px',
                height: '56px',
                boxSizing: 'border-box',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <img
                src={playstoreBtn}
                alt=""
                style={{ height: '24px', width: '24px', objectFit: 'contain', flexShrink: 0 }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontSize: '0.58rem',
                    opacity: 0.85,
                    letterSpacing: '0.02em',
                    marginBottom: '2px',
                  }}
                >
                  GET IT ON
                </span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion of Light Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id

            return (
              <div
                key={faq.id}
                style={{
                  background: '#fafafa',
                  borderRadius: '14px',
                  border: '1px solid #f0f0f0',
                  overflow: 'hidden',
                  transition: 'background-color 0.2s ease, border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '14px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: '#111111',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: '1.15rem',
                      color: '#555555',
                      fontWeight: 400,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          padding: '0 20px 18px 20px',
                          margin: 0,
                          color: '#555555',
                          fontSize: '0.86rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .faq-grid-container {
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: flex-start;
          width: 100%;
        }

        .faq-button-group {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 1024px) and (min-width: 768px) {
          .faq-button-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        @media (max-width: 767px) {
          .faq-grid-container {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .faq-button-group {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  )
}
