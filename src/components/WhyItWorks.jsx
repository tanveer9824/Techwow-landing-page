import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Map, Zap, Smartphone, Shield, Users } from 'lucide-react';

import imgField from '@/assets/why_outdoor_field.jpg';
import imgForest from '@/assets/why_forest.jpg';
import imgCoastal from '@/assets/why_coastal.jpg';
import imgMountain from '@/assets/why_mountain_sunset.jpg';
import imgCircles from '@/assets/real_players_1.png';

const tabs = [
  {
    id: 'gps',
    icon: Map,
    title: 'GPS-Verified Capture',
    description: 'Every tile claim is verified by real GPS movement — speed-checked between 2–15 km/h to block driving and phone-shaking. If you didn\'t walk it, you don\'t own it.',
    image: imgField,
    widget: (
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.5)', padding: '3px 9px', borderRadius: '100px', marginBottom: '14px' }}>
          <span style={{ fontSize: '10px' }}>✧</span>
          <p style={{ fontSize: '0.72rem', color: '#555', margin: 0, fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>Running Stats</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 10px', marginBottom: '14px' }}>
          {[['Distance', '2.3', 'km'], ['Pace', "4'56\"", '/km'], ['Calories', '128', 'kcal'], ['Elevation Gain', '12', 'm']].map(([l, v, u]) => (
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
            <p style={{ fontSize: '0.68rem', color: '#666', margin: '0 0 2px', fontWeight: 500, fontFamily: 'Inter,sans-serif' }}>Max Altitude</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif', letterSpacing: '-0.02em' }}>
              128 <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>m</span>
            </p>
          </div>
          <button style={{ background: '#4C6FFF', border: 'none', borderRadius: '9px', padding: '8px 20px', fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', cursor: 'pointer', fontFamily: 'Inter,sans-serif', transition: 'all 0.2s ease', boxShadow: '0 4px 14px rgba(76, 111, 255, 0.35)' }}>Save</button>
        </div>
      </div>
    ),
  },
  {
    id: 'live',
    icon: Zap,
    title: 'Live Territory Engine',
    description: 'Tiles fill in, energy builds, and clusters form the moment you cross new ground. Your map updates in real time as you walk.',
    image: imgForest,
    widget: (
      <div style={{ textAlign: 'center', padding: '8px' }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(100,100,100,0.8)', marginBottom: '4px', fontFamily: 'Inter,sans-serif' }}>◎ Today's session</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111', margin: '0 0 12px', fontFamily: 'Inter,sans-serif' }}>5 km recovery</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#4C6FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '20px', color: '#ffffff' }}>▶</span>
          </div>
          <svg width="60" height="40" viewBox="0 0 60 40">
            <path d="M0 30 Q10 10 20 20 Q30 30 40 5 Q50 -10 60 15" stroke="#4C6FFF" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 'devices',
    icon: Smartphone,
    title: 'Works With Your Devices',
    description: 'Syncs with Apple Health, Google Fit, and your phone\'s GPS automatically — no manual logging, your steps just become territory.',
    image: imgCoastal,
    widget: (
      <div style={{ padding: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '8px' }}>
          {[['Distance','2.3 km'],['Calories','128 kcal'],['Pace',"4'56\"/km"]].map(([l,v]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '8px', padding: '6px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.6rem', color: 'rgba(100,100,100,0.8)', margin: '0 0 2px', fontFamily: 'Inter,sans-serif' }}>{l}</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif' }}>{v}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[['Distance','2.3 km'],['Today','Active']].map(([l,v]) => (
            <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,0.4)', borderRadius: '8px', padding: '8px 10px' }}>
              <p style={{ fontSize: '0.65rem', color: 'rgba(100,100,100,0.8)', margin: '0 0 2px', fontFamily: 'Inter,sans-serif' }}>{l}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#111', margin: 0, fontFamily: 'Inter,sans-serif' }}>{v}</p>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#4C6FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: '#ffffff' }}>⏸</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'defense',
    icon: Shield,
    title: 'Defense & Protection',
    description: 'New tiles get a 12-hour Protection Window, and active players get an Absence Shield so you never lose everything overnight. Walk again to restrengthen what\'s yours.',
    image: imgMountain,
    widget: (
      <div style={{ padding: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {[
            { label: '♥ HeartRate', value: '138 bpm' },
            { label: '◎ Muscle Fatigue', value: '78%' },
            { label: '◎ Recovery time', value: '12h24' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px', padding: '8px 10px' }}>
              <p style={{ fontSize: '0.6rem', color: 'rgba(100,100,100,0.8)', margin: '0 0 4px', fontFamily: 'Inter,sans-serif' }}>{s.label}</p>
              <p style={{ fontSize: '1rem', fontWeight: 800, color: '#111', margin: '0 0 4px', fontFamily: 'Inter,sans-serif' }}>{s.value}</p>
              <svg width="100%" height="24" viewBox="0 0 60 24">
                <path d="M0 18 Q15 6 30 14 Q45 22 60 4" stroke="#4C6FFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'circles',
    icon: Users,
    title: 'Circles',
    description: 'Team up with friends in a private circle of 3–25 players. Defend territory together, launch coordinated raids, and climb the leaderboard as a group.',
    image: imgCircles,
    widget: (
      <div style={{ textAlign: 'center', padding: '12px 8px' }}>
        <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111', margin: 0, fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.01em', lineHeight: 1.4 }}>
          John just hit <strong>10km</strong> today
        </p>
      </div>
    ),
  },
];

export default function WhyItWorks() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smoothly update active point as user scrolls through the 5 points
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = tabs.length;
    const clamped = Math.min(Math.max(latest, 0), 0.999);
    const index = Math.floor(clamped * total);
    setActiveIndex(index);
  });

  const activeTab = tabs[activeIndex] || tabs[0];

  // Smooth click scroll to point
  const handleTabClick = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetPos = containerTop + (index / (tabs.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetPos, behavior: 'smooth' });
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
                  Why It Works
                </p>
                
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', fontWeight: 600, color: '#000000', letterSpacing: '-0.025em', lineHeight: 1.15, margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                Smarter walking, with real territory to show for it
              </h2>
            </div>
            <div className="why-header-subtext">
              <p style={{ fontSize: '0.92rem', color: '#666666', lineHeight: 1.6, fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
                Conquer Circles isn't just a step tracker — it's a live strategy game built on GPS-verified movement, real territory, and real rivals.
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
                      width: '290px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      border: '1px solid rgba(255,255,255,0.75)',
                      maxWidth: '85vw',
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

