/**
 * HowItWorks
 *
 * Responsive Bento Grid:
 *  - Desktop (> 1024px): 3-column Bento grid (Tall Man card, Stacked Stat + Legs, Tall Woman card)
 *  - Tablet (641px - 1024px): 2x2 Grid (Top-L: Man, Top-R: Woman, Bottom-L: Legs, Bottom-R: 75% Stat)
 *  - Mobile (<= 640px): 1-column Stack
 */

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

import cardManWatch from '@/assets/tech-ai-scan.jpg'
import cardWomanWater from '@/assets/tech-prepaid-box.jpg'
import cardRunningLegs from '@/assets/tech-hero-bg.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
      style={{
        padding: '7rem 1.5rem 6rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* ── Section Header ── */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        custom={0}
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          maxWidth: '620px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#666666',
            marginBottom: '0.75rem',
          }}
        >
          How It Works
        </p>

        {/* Headline */}
        <h2
          id="how-it-works-heading"
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            fontWeight: 500,
            color: '#000000',
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem',
          }}
        >
          Book With Us. Accountable End to End.
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.05rem',
            color: '#555555',
            lineHeight: 1.6,
            maxWidth: '540px',
            margin: '0 auto',
          }}
        >
          Techwow is not a marketplace. We own the workshops, employ the technicians, and fulfil
          every repair and trade-in through one centralised UK system.
        </p>
      </motion.div>

      {/* ── Responsive Bento Grid ── */}
      <div className="bento-grid-container">
        {/* Card 1: Buy Back AI Scan */}
        <motion.div
          id="card-routes"
          className="bento-card card-routes"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <img
            src={cardManWatch}
            alt="Techwow digital device assessment"
            className="bento-card-img"
          />
          <div className="bento-card-gradient" aria-hidden="true" />
          <h3 className="bento-card-title">Buy Back: Guided 6-step AI camera scan with instant condition report</h3>
        </motion.div>

        {/* Card 2: In-Store & Mail-in */}
        <motion.div
          id="card-rivalry"
          className="bento-card card-rivalry"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <img
            src={cardWomanWater}
            alt="Customer booking repair"
            className="bento-card-img"
          />
          <div className="bento-card-gradient" aria-hidden="true" />
          <h3 className="bento-card-title">Reserved in-store slot or prepaid secure mail-in box</h3>
        </motion.div>

        {/* Card 3: Upfront Pricing */}
        <motion.div
          id="card-empire"
          className="bento-card card-empire"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <img
            src={cardRunningLegs}
            alt="Tech technician repair workshop"
            className="bento-card-img"
          />
          <div className="bento-card-gradient" aria-hidden="true" />
          <h3 className="bento-card-title">Transparent upfront repair pricing before you commit</h3>
        </motion.div>

        {/* Card 4: Stat Card (100% in Blue #4C6FFF) */}
        <motion.div
          id="card-stat"
          className="bento-card card-stat"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div style={{ marginBottom: '0.75rem' }}>
            <TrendingUp size={36} color="#ffffff" strokeWidth={2.5} aria-hidden="true" />
          </div>
          <p className="bento-stat-number">100%</p>
          <p className="bento-stat-label">fulfilled by Techwow's own employed UK technicians — never third-party shops</p>
        </motion.div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .bento-grid-container {
          display: grid;
          width: 100%;
          max-width: 1140px;
          gap: 1.25rem;
        }

        .bento-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          display: flex;
        }

        .bento-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .bento-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 65%);
          z-index: 1;
        }

        .bento-card-title {
          position: relative;
          z-index: 2;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: -0.02em;
          line-height: 1.25;
          padding: 1.75rem;
          margin: 0;
          margin-top: auto;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .card-stat {
          background: #4C6FFF;
          padding: 2rem 1.75rem;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 12px 36px rgba(76, 111, 255, 0.22);
        }

        .bento-stat-number {
          font-size: 3.6rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 0.65rem;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .bento-stat-label {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.35;
          font-weight: 500;
          letter-spacing: -0.01em;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── Desktop: 3-column Bento Grid (min-width: 1025px) ── */
        @media (min-width: 1025px) {
          .bento-grid-container {
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-rows: 255px 255px;
            height: 540px;
          }
          .card-routes {
            grid-column: 1;
            grid-row: 1 / span 2;
            height: 100%;
          }
          .card-stat {
            grid-column: 2;
            grid-row: 1;
            height: 100%;
          }
          .card-empire {
            grid-column: 2;
            grid-row: 2;
            height: 100%;
          }
          .card-rivalry {
            grid-column: 3;
            grid-row: 1 / span 2;
            height: 100%;
          }
        }

        /* ── Tablet / iPad: 2x2 Grid (768px to 1024px) ── */
        @media (min-width: 768px) and (max-width: 1024px) {
          .bento-grid-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            max-width: 860px;
          }
          .card-routes {
            grid-column: 1;
            grid-row: 1;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-rivalry {
            grid-column: 2;
            grid-row: 1;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-empire {
            grid-column: 1;
            grid-row: 2;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-stat {
            grid-column: 2;
            grid-row: 2;
            aspect-ratio: 1 / 1;
            height: auto;
          }
        }

        /* ── Mobile: 1-Column Stack (max-width: 767px) ── */
        @media (max-width: 767px) {
          .bento-grid-container {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            max-width: 100%;
            width: 100%;
          }
          .card-routes {
            order: 1;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-stat {
            order: 2;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-rivalry {
            order: 3;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
          }
          .card-empire {
            order: 4;
            width: 100%;
            aspect-ratio: 1 / 1;
            height: auto;
          }
        }
      `}</style>
    </section>
  )
}
