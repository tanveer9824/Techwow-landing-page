import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Map, Zap, Smartphone, Shield, Users } from 'lucide-react';

import imgField from '@/assets/tech-ai-scan.jpg';
import imgForest from '@/assets/repair_closeup_parts.jpg';
import imgCoastal from '@/assets/tech-prepaid-box.jpg';
import imgMountain from '@/assets/tech_disassembled_internal.jpg';
import imgCircles from '@/assets/repair_parts_tools.jpg';

const tabs = [
  {
    id: 'ai-scan',
    icon: Zap,
    title: 'AI-Driven Optical Scan',
    description: 'Our guided 6-step camera scan inspects casing, screen off, screen on, edges, and ports. Computer vision generates an itemised condition report out of 100 before you commit.',
    image: imgField,
    widget: (
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.5)', padding: '3px 9px', borderRadius: '100px', marginBottom: '14px' }}>
          <span style={{ fontSize: '10px' }}>✧</span>
          <p style={{ fontSize: '0.72rem', color: '#555', margin: 0, fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>AI Condition Report</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 10px', marginBottom: '14px' }}>
          {[['Display Screen', '98', '/100'], ['Back Glass', '92', '/100'], ['Camera Lenses', '100', '/100'], ['Frame & Edges', '88', '/100']].map(([l, v, u]) => (
            <div key={l}>
              <p style={{ fontSize: '0.68rem', color: '#666', margin: '0 0 2px', fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>{l}</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em' }}>
                {v} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>{u}</span>
              </p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '0.68rem', color: '#666', margin: '0 0 2px', fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>Estimated Value</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em' }}>
              £385 <span style={{ fontSize: '0.75rem', fontWeight: 400, color: '#4C6FFF' }}>Instant</span>
            </p>
          </div>
          <button style={{ background: '#4C6FFF', border: 'none', borderRadius: '9px', padding: '8px 20px', fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', cursor: 'pointer', fontFamily: 'Inter,sans-serif', transition: 'all 0.2s ease', boxShadow: '0 4px 14px rgba(76, 111, 255, 0.35)' }}>Accept</button>
        </div>
      </div>
    ),
  },
  {
    id: 'pricing',
    icon: Map,
    title: 'Upfront Fixed Pricing',
    description: 'Know the exact cost before you book. Real upfront prices shown for every repair: Screen Repair £89, Battery Replace £49, Charging Port £39, Camera £59.',
    image: imgForest,
    widget: (
      <div style={{ textAlign: 'center', padding: '8px' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(100,100,100,0.8)', marginBottom: '4px', fontFamily: 'Inter,sans-serif' }}>◎ Upfront Repair Quote</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111', margin: '0 0 12px', fontFamily: 'Inter,sans-serif' }}>Screen Repair £89</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#4C6FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '20px', color: '#ffffff' }}>✓</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#444', margin: 0, fontFamily: 'Inter,sans-serif' }}>Parts & labour included.<br />[X]-month guarantee.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'fulfillment',
    icon: Smartphone,
    title: 'In-Store or Prepaid Mail-In',
    description: 'Book an appointment slot at a Techwow store, or receive our secure prepaid shipping box posted directly to your UK address with Royal Mail tracking.',
    image: imgCoastal,
    widget: (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '8px' }}>
          {[['Method','Prepaid Box'],['Courier','Royal Mail'],['Tracking','Tracked 24']].map(([l,v]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '6px 4px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.62rem', color: '#666', margin: '0 0 2px', fontFamily: 'Inter,sans-serif' }}>{l}</p>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif' }}>{v}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {[
            { label: 'UK Delivery', value: 'Complimentary' },
            { label: 'Tamper-Evident', value: 'Padded Box' }
          ].map((item) => (
            <div key={item.label} style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '10px', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px', minWidth: 0 }}>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '0.62rem', color: '#666', margin: '0 0 2px', fontFamily: 'Inter,sans-serif' }}>{item.label}</p>
                <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.value}</p>
              </div>
              <div style={{ width: '22px', height: '22px', minWidth: '22px', borderRadius: '50%', background: '#4C6FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#ffffff', flexShrink: 0 }}>
                ✓
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'sanitisation',
    icon: Shield,
    title: 'Certified Data Sanitisation',
    description: 'Every trade-in device undergoes multi-pass certified data sanitisation, and all serial numbers are screened against UK police registries and CheckMEND.',
    image: imgMountain,
    widget: (
      <div style={{ padding: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {[
            { label: 'CheckMEND', value: 'Clean' },
            { label: 'Data Wipe', value: '100% Erased' },
            { label: 'Inspection', value: 'Verified' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px', padding: '8px 10px' }}>
              <p style={{ fontSize: '0.6rem', color: 'rgba(100,100,100,0.8)', margin: '0 0 4px', fontFamily: 'Inter,sans-serif' }}>{s.label}</p>
              <p style={{ fontSize: '0.95rem', fontWeight: 800, color: '#111', margin: '0 0 4px', fontFamily: 'Inter,sans-serif' }}>{s.value}</p>
              <div style={{ height: '4px', borderRadius: '2px', background: '#4C6FFF', width: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'chat',
    icon: Users,
    title: 'Direct Technician Chat',
    description: 'Chat directly with the certified Techwow technician holding your device in real time, from workshop intake through diagnostic testing and completion.',
    image: imgCircles,
    widget: (
      <div style={{ textAlign: 'center', padding: '12px 8px' }}>
        <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111', margin: 0, fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.4 }}>
          "Display replaced and 18-point diagnostic passed."
        </p>
        <span style={{ fontSize: '0.75rem', color: '#4C6FFF', fontWeight: 600, display: 'block', marginTop: '6px' }}>
          David M. · Techwow Lead Technician
        </span>
      </div>
    ),
  },
];

export default function WhyItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Sync scroll progress to active index (0 to 4 across 5 points)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const rawIndex = Math.floor(latest * tabs.length);
    const clampedIndex = Math.min(Math.max(rawIndex, 0), tabs.length - 1);
    setActiveIndex(clampedIndex);
  });

  const activeTab = tabs[activeIndex];

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollTarget = containerTop + (containerHeight / tabs.length) * idx;
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="why-it-works"
      style={{
        position: 'relative',
        width: '100%',
        height: '360vh', // Provides scroll distance for stepping through 5 points
      }}
    >
      {/* ── Sticky Viewport Container ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 1.5rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1140px', width: '100%' }}>

          {/* ── Top header row ── */}
          <div className="why-header-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <p style={{ fontSize: '0.82rem', color: '#888888', fontWeight: 500, margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Why Techwow
                </p>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 600, color: '#000000', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                One company, accountable end to end
              </h2>
            </div>
            <div className="why-header-subtext">
              <p style={{ fontSize: '0.92rem', color: '#666666', lineHeight: 1.6, fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
                Techwow is not an aggregator or directory connecting you to unknown high-street shops. We own the workshops, employ every technician, and manage every repair and trade-in through one centralised UK system.
              </p>
            </div>
          </div>

          {/* ── Bottom 2-col layout ── */}
          <div className="why-main-grid">

            {/* Left: Accordion with step indicators */}
            <div className="why-accordion-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
              {tabs.map((tab, idx) => {
                const isOpen = activeIndex === idx;
                const Icon = tab.icon;
                return (
                  <div
                    key={tab.id}
                    style={{
                      borderTop: idx === 0 ? '1px solid #f0f0f0' : '1px solid #f0f0f0',
                      transition: 'all 0.3s ease',
                      background: isOpen ? 'rgba(76, 111, 255, 0.03)' : 'transparent',
                      borderRadius: isOpen ? '12px' : '0px',
                      padding: isOpen ? '0 12px' : '0',
                    }}
                  >
                    <button
                      onClick={() => handleTabClick(idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '14px 4px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          background: isOpen ? '#4C6FFF' : '#eceff8',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease',
                          boxShadow: isOpen ? '0 4px 12px rgba(76, 111, 255, 0.35)' : 'none',
                        }}
                      >
                        <Icon size={16} color={isOpen ? '#ffffff' : '#6b7280'} />
                      </div>
                      <span
                        style={{
                          flex: 1,
                          fontSize: '0.95rem',
                          fontWeight: isOpen ? 600 : 500,
                          color: isOpen ? '#111111' : '#555555',
                          fontFamily: 'Inter, system-ui, sans-serif',
                          letterSpacing: '-0.01em',
                          transition: 'color 0.2s',
                        }}
                      >
                        {tab.title}
                      </span>
                      <span
                        style={{
                          fontSize: '1.15rem',
                          color: isOpen ? '#4C6FFF' : '#aaaaaa',
                          fontWeight: 300,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          flexShrink: 0,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {isOpen ? '—' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p style={{ fontSize: '0.86rem', color: '#555555', lineHeight: 1.5, padding: '0 4px 14px 46px', margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {tab.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div style={{ borderTop: '1px solid #f0f0f0' }} />

              {/* Progress Indicator Dots */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '16px', alignItems: 'center' }}>
                {tabs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleTabClick(i)}
                    style={{
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      height: '4px',
                      width: activeIndex === i ? '28px' : '10px',
                      borderRadius: '4px',
                      background: activeIndex === i ? '#4C6FFF' : '#e2e8f0',
                      transition: 'all 0.3s ease',
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Image + floating widget */}
            <div className="why-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab.id}
                  src={activeTab.image}
                  alt={activeTab.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
              </AnimatePresence>

              {/* Frosted glass widget */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id + '-widget'}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{
                      background: 'rgba(255,255,255,0.7)',
                      backdropFilter: 'blur(24px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                      borderRadius: '20px',
                      padding: '20px 22px',
                      width: '320px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(255,255,255,0.75)',
                      maxWidth: 'calc(100% - 32px)',
                    }}
                  >
                    {activeTab.widget}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .why-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 32px;
          align-items: flex-start;
        }

        .why-header-subtext {
          padding-top: 24px;
        }

        .why-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .why-image-wrapper {
          position: relative;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.08);
        }

        @media (max-width: 1024px) {
          .why-header-grid {
            gap: 24px;
            margin-bottom: 24px;
          }
          .why-header-subtext {
            padding-top: 12px;
          }
          .why-main-grid {
            gap: 32px;
          }
          .why-image-wrapper {
            height: 360px;
          }
        }

        @media (max-width: 767px) {
          .why-header-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 20px;
          }
          .why-header-subtext {
            padding-top: 0;
          }
          .why-main-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .why-image-wrapper {
            order: 1;
            height: 260px;
            width: 100%;
          }
          .why-accordion-wrapper {
            order: 2;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

