import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import appleBtn from '@/assets/apple-button.webp';
import playstoreBtn from '@/assets/playstore-button.webp';

const faqs = [
  {
    id: 1,
    question: 'How does Conquer Circles verify I actually walked?',
    answer: 'We use GPS speed-checks (2–15 km/h) to confirm real walking movement, blocking vehicle driving and phone-shaking. Suspicious activity is flagged by our anti-cheat system and reviewed through a trust score.',
  },
  {
    id: 2,
    question: 'What happens to my territory if I stop playing for a few days?',
    answer: 'Your claimed territory gradually loses "defense power" over time. If you don\'t walk through it to reinforce it, other active players in your area can more easily claim it for themselves.',
  },
  {
    id: 3,
    question: 'Is Conquer Circles pay-to-win?',
    answer: 'No. Movement and territory capture are based entirely on physical walking. In-app purchases are limited to cosmetic items, map themes, and advanced data analytics.',
  },
  {
    id: 4,
    question: 'What location data do you collect, and is it shared?',
    answer: 'We only collect location data while you are actively tracking a walk. We never sell your location data to third parties. Your exact paths are generalized for privacy when shown on the global leaderboard.',
  },
  {
    id: 5,
    question: 'Do I need a specific phone or wearable to play?',
    answer: 'Any modern iOS or Android smartphone with GPS capabilities will work perfectly. Native Apple Watch and WearOS support is coming soon.',
  },
  {
    id: 6,
    question: 'Can I play solo, or do I need to join a circle?',
    answer: 'You can absolutely play solo! However, joining a Circle (guild) allows you to pool your territory with friends, compete in global guild leaderboards, and capture massive areas together.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section style={{ width: '100%', padding: '5rem 1.5rem', boxSizing: 'border-box', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="faq-grid-container">
        
        {/* Left Column: Heading, Subtitle and Download CTA Buttons */}
        <div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)', fontWeight: 600, color: '#000000', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '14px' }}>
            Frequently Asked<br />Questions
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#666666', lineHeight: 1.55, marginBottom: '28px', maxWidth: '360px' }}>
            Everything you need to know about Conquer Circles before getting started.
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
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src={appleBtn} alt="" style={{ height: '26px', width: '24px', objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
                <span style={{ fontSize: '0.58rem', opacity: 0.85, letterSpacing: '0.02em', marginBottom: '2px' }}>
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
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <img src={playstoreBtn} alt="" style={{ height: '24px', width: '24px', objectFit: 'contain', flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
                <span style={{ fontSize: '0.58rem', opacity: 0.85, letterSpacing: '0.02em', marginBottom: '2px' }}>
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
            const isOpen = openId === faq.id;

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
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#111111', lineHeight: 1.35 }}>
                    {faq.question}
                  </span>
                  <span style={{ fontSize: '1.15rem', color: '#555555', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', flexShrink: 0 }}>
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
                      <p style={{ padding: '0 20px 18px 20px', margin: 0, color: '#555555', fontSize: '0.86rem', lineHeight: 1.6 }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
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
  );
}
