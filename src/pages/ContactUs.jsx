import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSend, FiCheckCircle, FiMapPin, FiClock } from 'react-icons/fi'
import whiteLogo from '@/assets/white-logo.png'
import Footer from '@/components/Footer'

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formsubmit.co/ajax/tanveerok355@gmail.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitSuccess(true)
        form.reset()
      } else {
        setErrorMsg('Something went wrong. Please try again or reach out directly via email.')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setErrorMsg('Network error. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
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
              Contact Us
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 300,
              }}
            >
              Have questions about a repair booking, mail-in box, or AI valuation? Reach out to our UK team.
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Registered Office Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid #f0f0f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4C6FFF',
                fontSize: '1.25rem',
              }}
            >
              <FiMapPin />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', margin: '0 0 0.25rem 0' }}>
                Registered Office
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                TECHWOW LTD
                <br />
                05 Leicester Steet, Northwich, England, CW9 5LA
                <br />
                <span style={{ fontSize: '0.8rem', color: '#999' }}>Company #13962308 (England & Wales)</span>
              </p>
            </div>
          </div>

          {/* Support Hours & Email Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              border: '1px solid #f0f0f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4C6FFF',
                fontSize: '1.25rem',
              }}
            >
              <FiClock />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', margin: '0 0 0.25rem 0' }}>
                Customer Support
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, margin: 0 }}>
                Hours: [Monday–Saturday 9am–6pm]
                <br />
                Email: [support@techwow.co.uk]
                <br />
                Phone: [+44 (0) 800 000 0000]
              </p>
            </div>
          </div>
        </div>

        {/* ── Contact Form Section ── */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            border: '1px solid #f0f0f0',
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#111', margin: '0 0 0.5rem 0' }}>
              Send Us a Message
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: 1.5 }}>
              Fill in the form below and our UK support team will get back to you within 1 business day.
            </p>
          </div>

          {submitSuccess ? (
            <div
              style={{
                padding: '2rem',
                background: '#f0fdf4',
                borderRadius: '16px',
                border: '1px solid #bbf7d0',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <FiCheckCircle style={{ fontSize: '2.5rem', color: '#16a34a' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#166534', margin: 0 }}>
                Message Sent Successfully!
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#15803d', margin: 0, maxWidth: '400px' }}>
                Thank you for contacting Techwow. We have received your message and will respond shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                style={{
                  marginTop: '1rem',
                  padding: '8px 16px',
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Inquiry from Techwow Contact Form" />

              {errorMsg && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    color: '#991b1b',
                    fontSize: '0.85rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label
                    htmlFor="name"
                    style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      background: '#fafafa',
                      fontSize: '0.9rem',
                      color: '#111',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label
                    htmlFor="email"
                    style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="sarah@example.co.uk"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0',
                      background: '#fafafa',
                      fontSize: '0.9rem',
                      color: '#111',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="subject"
                  style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}
                >
                  Topic / Inquiry Type
                </label>
                <select
                  id="subject"
                  name="inquiry_type"
                  defaultValue="Repair Booking Inquiry"
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    background: '#fafafa',
                    fontSize: '0.9rem',
                    color: '#111',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                >
                  <option>Repair Booking Inquiry</option>
                  <option>Buy Back / AI Valuation</option>
                  <option>Prepaid Mail-in Box</option>
                  <option>Store Accessory Order</option>
                  <option>Warranty or [X]-Month Guarantee</option>
                  <option>General Question</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label
                  htmlFor="message"
                  style={{ fontSize: '0.85rem', fontWeight: 500, color: '#333' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help with your device today?"
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    background: '#fafafa',
                    fontSize: '0.9rem',
                    color: '#111',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '14px 24px',
                  background: isSubmitting ? '#93c5fd' : '#4C6FFF',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  alignSelf: 'flex-start',
                  transition: 'background 0.2s',
                  boxShadow: '0 4px 14px rgba(76, 111, 255, 0.25)',
                }}
              >
                <FiSend />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
