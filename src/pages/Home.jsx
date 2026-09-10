/**
 * Home — assembles all landing page sections in order.
 */

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import VideoSection from '@/components/VideoSection'
import RealPlayers from '@/components/RealPlayers'
import WhyItWorks from '@/components/WhyItWorks'
import FAQ from '@/components/FAQ'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <>
      {/* ── Fixed Sticky Navigation Header ── */}
      <Navbar />

      <main id="main-content">
        {/* ── Normal Flow Hero + Content Sections ── */}
        <Hero />
        <HowItWorks />

        {/* ── Additional Sections ── */}
        <VideoSection />
        <RealPlayers />
        <WhyItWorks />
        <FAQ />

        {/* ── CTA & Footer ── */}
        <FooterCTA />
      </main>
    </>
  )
}
