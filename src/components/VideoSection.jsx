import React from 'react';
import videoSrc from '@/assets/Lk6JZLibgMnasnzDgw6LLF87M2U.mp4';

export default function VideoSection() {
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: 'hidden',
        padding: '60px 1.5rem 0',
        height: '600px',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Bottom fade gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, #fafafa)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Phone Frame — iPhone 17 Pro Max with Dynamic Island */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          borderRadius: '56px',
          padding: '8px',
          background: 'linear-gradient(150deg, #3d3b37 0%, #1e1d1b 30%, #2b2926 70%, #1a1917 100%)',
          boxShadow:
            '0 45px 110px -15px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.12), inset 0 0 0 1px rgba(0, 0, 0, 0.9), inset 0 1.5px 3px rgba(255, 255, 255, 0.25), 0 16px 36px rgba(0,0,0,0.28)',
          boxSizing: 'border-box',
        }}
      >
        {/* Screen Bezel & Display */}
        <div
          style={{
            borderRadius: '48px',
            overflow: 'hidden',
            background: '#000',
            aspectRatio: '9 / 19.5',
            position: 'relative',
            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Video */}
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Subtle top scrim gradient for status bar legibility */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.12) 60%, transparent 100%)',
              zIndex: 15,
              pointerEvents: 'none',
            }}
          />

          {/* Status Bar Container */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >

            {/* Dynamic Island (Centered floating pill) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '10px',
                transform: 'translateX(-50%)',
                width: '110px',
                height: '28px',
                background: '#000000',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '0 9px',
                boxShadow: '0 0 0 0.5px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.6)',
                zIndex: 25,
                boxSizing: 'border-box',
              }}
            >
              {/* Front Camera Lens with subtle reflection */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #1c2b48 10%, #0a0e18 60%, #000000 100%)',
                  boxShadow: 'inset 0 0 1px 0.5px rgba(0, 160, 255, 0.35), 0 0 0 0.5px rgba(255,255,255,0.06)',
                }}
              />
            </div>

          
          </div>

          {/* Glass reflection overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(125deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 30%, transparent 55%)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />

          {/* Bottom Home Bar Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '4.5px',
              background: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '10px',
              zIndex: 20,
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Left Side Buttons (Action button + Volume Up + Volume Down) */}
        <div
          style={{
            position: 'absolute',
            top: '95px',
            left: '-3px',
            width: '3px',
            height: '24px',
            background: 'linear-gradient(to right, #44403c, #292524)',
            borderRadius: '2px 0 0 2px',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '135px',
            left: '-3px',
            width: '3px',
            height: '48px',
            background: 'linear-gradient(to right, #44403c, #292524)',
            borderRadius: '2px 0 0 2px',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '195px',
            left: '-3px',
            width: '3px',
            height: '48px',
            background: 'linear-gradient(to right, #44403c, #292524)',
            borderRadius: '2px 0 0 2px',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.3)',
          }}
        />

        {/* Right Side Buttons (Power / Side Button + Camera Control) */}
        <div
          style={{
            position: 'absolute',
            top: '145px',
            right: '-3px',
            width: '3px',
            height: '65px',
            background: 'linear-gradient(to left, #44403c, #292524)',
            borderRadius: '0 2px 2px 0',
            boxShadow: '1px 0 2px rgba(0,0,0,0.3)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '250px',
            right: '-2px',
            width: '2px',
            height: '32px',
            background: 'linear-gradient(to left, #302d2a, #1c1917)',
            borderRadius: '0 1.5px 1.5px 0',
          }}
        />
      </div>
    </section>
  );
}
