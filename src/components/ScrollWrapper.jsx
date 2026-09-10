/**
 * ScrollWrapper
 *
 * Implements direct, responsive sticky scroll with vertical stretch:
 *
 *  1. Hero section is sticky-pinned in the viewport (100vh).
 *  2. Header/Logo stays fixed at top until the hero section is fully scrolled past.
 *  3. From the very first scroll pixel, the bottom section ("Walk More...") begins
 *     scrolling up directly over the hero.
 *  4. While scrolling, the hero subtly stretches vertically (scaleY / scale) smoothly
 *     from 0 to 1 without any initial freeze or delay.
 *  5. Flat top edge on bottom section (no border radius).
 *
 * Props:
 *   children        — [primaryChild (Hero), secondaryChild (HowItWorks)]
 *   scrollDistance  — scroll runway in px (default: 650)
 */

import { useRef, Children } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollWrapper({ children, scrollDistance = 650 }) {
  const [primary, secondary] = Children.toArray(children)

  const outerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end start'],
  })

  // Continuous subtle vertical stretch directly mapped to scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <>
      {/* ── Sticky Runway Container ── */}
      <div
        ref={outerRef}
        style={{
          height: `calc(100vh + ${scrollDistance}px)`,
          position: 'relative',
          background: '#000000',
        }}
      >
        {/* Sticky Pinned Hero (Header stays fixed at top until fully covered) */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              scale,
              scaleY,
              opacity,
              height: '100%',
              width: '100%',
              transformOrigin: 'center center',
              willChange: 'transform, opacity',
            }}
          >
            {primary}
          </motion.div>
        </div>
      </div>

      {/* ── Sliding Bottom Section ("Walk More...") ── */}
      {/* Starts scrolling up immediately from initial mouse scroll, flat edge */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: `-${scrollDistance}px`,
          borderRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          background: '#ffffff',
        }}
      >
        {secondary}
      </div>
    </>
  )
}
