import bgImg from '@/assets/tech-hero-bg.jpg';
import appleBtn from '@/assets/apple-button.webp';
import playstoreBtn from '@/assets/playstore-button.webp';
import Footer from '@/components/Footer';

export default function FooterCTA() {
  return (
    <section style={{ width: '100%', paddingTop: '2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Banner Container */}
      <div style={{ maxWidth: '1140px', margin: '0 auto', marginBottom: '4.5rem', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', padding: '5rem 1.5rem', textAlign: 'center', background: '#0a0a0a' }}>
          
          {/* Background Image & Overlay */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
            <img 
              src={bgImg} 
              alt="Background" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4))' }}></div>
          </div>
          
          {/* Content */}
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '580px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 600, letterSpacing: '-0.025em', color: '#ffffff', marginBottom: '14px', lineHeight: 1.15 }}>
              Buy, Sell, Repair, or Protect Today
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.82)', marginBottom: '30px', lineHeight: 1.55, maxWidth: '440px' }}>
              Experience transparent upfront repair pricing, instant AI trade-in valuations, and company-owned UK workshops with Techwow.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
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
                  border: '1px solid rgba(255,255,255,0.15)',
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
                  border: '1px solid rgba(255,255,255,0.15)',
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
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
