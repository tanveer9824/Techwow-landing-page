import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiMessageSquare, FiSend, FiCheckCircle } from 'react-icons/fi'
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
              Have questions, feedback, or need assistance? Reach out to our support team and we will respond promptly.
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
          
          {/* Direct Email Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid #eaeaea',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#eef2ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4C6FFF',
              }}
            >
              <FiMail size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 0.35rem 0', color: '#111' }}>
                Email Support
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                Our direct support inbox for general inquiries, feedback, and assistance.
              </p>
            </div>
            <a
              href="mailto:tanveerok355@gmail.com"
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#4C6FFF',
                textDecoration: 'none',
                marginTop: 'auto',
                wordBreak: 'break-all',
              }}
            >
              tanveerok355@gmail.com
            </a>
          </div>

          {/* Response Hours Card */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid #eaeaea',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: '#f0fdf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a',
              }}
            >
              <FiMessageSquare size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 0.35rem 0', color: '#111' }}>
                Response Time
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, margin: 0 }}>
                We review every message carefully. Typical turnaround time is within 24 to 48 business hours.
              </p>
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#16a34a', marginTop: 'auto' }}>
              Monday – Friday (Global Support)
            </span>
          </div>

        </div>

        {/* ── Form Card ── */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #eaeaea',
            boxShadow: '0 6px 30px rgba(0,0,0,0.04)',
            position: 'relative',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111', letterSpacing: '-0.02em', margin: '0 0 0.5rem 0' }}>
            Send Us a Message
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            Fill in your details below and your message will be forwarded directly to our support team.
          </p>

          {submitSuccess ? (
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <FiCheckCircle size={44} color="#16a34a" />
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#166534', margin: '0 0 0.4rem 0' }}>
                  Thank you! Your message has been sent.
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#15803d', margin: 0, lineHeight: 1.5 }}>
                  We have received your submission and will get back to you at your email address shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                style={{
                  marginTop: '0.5rem',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  background: '#16a34a',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="_subject" value="New Contact Form Submission - Conquer Circles" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {errorMsg && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#b91c1c',
                    fontSize: '0.9rem',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              {/* Name field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-name" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#222' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #dcdcdc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#4C6FFF')}
                  onBlur={(e) => (e.target.style.borderColor = '#dcdcdc')}
                />
              </div>

              {/* Email field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-email" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#222' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. alex@example.com"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #dcdcdc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#4C6FFF')}
                  onBlur={(e) => (e.target.style.borderColor = '#dcdcdc')}
                />
              </div>

              {/* Message field */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-message" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#222' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #dcdcdc',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    width: '100%',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#4C6FFF')}
                  onBlur={(e) => (e.target.style.borderColor = '#dcdcdc')}
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: '0.5rem',
                  padding: '15px 24px',
                  background: isSubmitting ? '#93a4f8' : '#4C6FFF',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s, transform 0.1s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = '#3b5be0'
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) e.currentTarget.style.background = '#4C6FFF'
                }}
              >
                <FiSend size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </main>

      {/* ── Bottom Footer Bar ── */}
      <Footer />
    </div>
  )
}
