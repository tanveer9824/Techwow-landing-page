import React, { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

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
        setTimeout(() => setSubmitSuccess(false), 5000) // Hide success message after 5 seconds
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" style={{ width: '100%', padding: '5rem 1.5rem', background: '#fcfcfc', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: '#111', marginBottom: '1rem' }}>
            Contact Us
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.6 }}>
            Have questions, feedback, or need support? Fill out the form below and our team will get back to you within 24-48 hours.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          style={{ background: '#fff', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}
        >
          {submitSuccess && (
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#fff', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#4caf50', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem', marginTop: 0 }}>Message Sent!</h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>We'll get back to you shortly.</p>
            </div>
          )}

          {/* Security & Config for FormSubmit */}
          <input type="hidden" name="_subject" value="New Contact Form Submission - Conquer Circles" />
          <input type="hidden" name="_template" value="table" />
          {/* Disable captcha for seamless AJAX flow */}
          <input type="hidden" name="_captcha" value="false" />
          
          {/* Name Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="John Doe"
              style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #e0e0e0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', width: '100%', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = '#111'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Email Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="john@example.com"
              style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #e0e0e0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', width: '100%', boxSizing: 'border-box' }}
              onFocus={(e) => e.target.style.borderColor = '#111'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Message Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="5"
              placeholder="How can we help you?"
              style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #e0e0e0', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', width: '100%', boxSizing: 'border-box', resize: 'vertical', fontFamily: 'inherit' }}
              onFocus={(e) => e.target.style.borderColor = '#111'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ 
              marginTop: '0.5rem',
              padding: '16px', 
              background: isSubmitting ? '#666' : '#111', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '12px', 
              fontSize: '1.05rem', 
              fontWeight: 600, 
              cursor: isSubmitting ? 'not-allowed' : 'pointer', 
              transition: 'background 0.2s, transform 0.1s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => { if(!isSubmitting) e.currentTarget.style.background = '#333' }}
            onMouseLeave={(e) => { if(!isSubmitting) e.currentTarget.style.background = '#111' }}
            onMouseDown={(e) => { if(!isSubmitting) e.currentTarget.style.transform = 'scale(0.98)' }}
            onMouseUp={(e) => { if(!isSubmitting) e.currentTarget.style.transform = 'scale(1)' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
