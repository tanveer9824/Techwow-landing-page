import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '@/assets/tech-ai-scan.jpg';
import img2 from '@/assets/tech-repair-hands.jpg';
import img3 from '@/assets/tech-prepaid-box.jpg';

const cards = [
  {
    id: '01',
    badge: 'Buy Back',
    heading: 'Instant AI Valuation in Seconds',
    description: 'Our 6-step guided camera scan analyses display, glass, frame, and ports before you commit. Choose Instant Payment (-£10 fee) or full regular payout upon verification.',
    image: img1,
  },
  {
    id: '02',
    badge: 'Repair',
    heading: 'Fixed Pricing & Direct Technician Chat',
    description: 'Screen repair £89, battery £49, charging port £39. Track live across 6 milestones and chat directly with the technician holding your device.',
    image: img2,
  },
  {
    id: '03',
    badge: 'Store & Protect',
    heading: 'Accessories & 10% Repair Bundle',
    description: 'Original chargers, cases, and audio. Customers booking a repair receive an automatic 10% bundle discount on all accessories at checkout.',
    image: img3,
  }
];

export default function RealPlayers() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      style={{
        width: '100%',
        padding: '7rem 1.5rem 6rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1140px', width: '100%' }}>
        {/* Title */}
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '600',
            color: '#111',
            marginBottom: '40px',
            letterSpacing: '-0.02em',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Transparent pricing, genuine accountability
        </h2>

        {/* Cards Container */}
        <div className="real-players-container">
          {cards.map((card, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => setActiveCard(index)}
                className={`real-player-card ${isActive ? 'is-active' : 'is-inactive'}`}
                animate={{
                  flex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minWidth: 0,
                }}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.badge}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'filter 0.4s ease, transform 0.4s ease',
                    filter: isActive ? 'blur(0px) brightness(0.85)' : 'blur(2px) brightness(0.72)',
                  }}
                />

                {/* Top-left badge row */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    left: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 5,
                  }}
                >
                  {/* Number pill */}
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '100px',
                      padding: '4px 12px',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: '600',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {card.id}
                  </div>

                  {/* Badge label pill */}
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.22)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '100px',
                      padding: '4px 14px',
                      color: '#fff',
                      fontSize: '13px',
                      fontWeight: '500',
                      fontFamily: 'Inter, system-ui, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {card.badge}
                  </div>
                </div>

                {/* Bottom text — only on active card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '60px 24px 28px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)',
                        zIndex: 5,
                      }}
                    >
                      <h3
                        style={{
                          color: '#fff',
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                          fontWeight: '700',
                          marginBottom: '10px',
                          lineHeight: 1.25,
                          fontFamily: 'Inter, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {card.heading}
                      </h3>
                      <p
                        style={{
                          color: 'rgba(255,255,255,0.82)',
                          fontSize: '0.95rem',
                          lineHeight: 1.55,
                          fontFamily: 'Inter, system-ui, sans-serif',
                          margin: 0,
                        }}
                      >
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        /* Desktop: Horizontal accordion (min-width: 1025px) */
        @media (min-width: 1025px) {
          .real-players-container {
            display: flex;
            gap: 16px;
            height: 540px;
            align-items: stretch;
            width: 100%;
          }
        }

        /* Tablet & Mobile: Vertical stack accordion (max-width: 1024px) */
        @media (max-width: 1024px) {
          .real-players-container {
            display: flex;
            flex-direction: column;
            gap: 14px;
            width: 100%;
          }
          .real-player-card.is-active {
            height: 380px !important;
            flex: none !important;
          }
          .real-player-card.is-inactive {
            height: 84px !important;
            flex: none !important;
          }
        }
      `}</style>
    </section>
  );
}
