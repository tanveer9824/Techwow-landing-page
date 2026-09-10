import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'
import Disclaimer from '@/pages/Disclaimer'
import ContactUs from '@/pages/ContactUs'
import DeleteAccount from '@/pages/DeleteAccount'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

/**
 * App — root router.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/policies/privacy_policy" element={<PrivacyPolicy />} />

        {/* Terms of Use */}
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/terms-conditions" element={<TermsOfUse />} />
        <Route path="/policies/terms-conditions" element={<TermsOfUse />} />
        <Route path="/policies/terms_conditions" element={<TermsOfUse />} />

        {/* Disclaimer */}
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/policies/disclaimer" element={<Disclaimer />} />

        {/* Contact Us */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Delete Account (Google Play Compliance URL — not linked in UI navigation) */}
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/delete_account" element={<DeleteAccount />} />
        <Route path="/account-deletion" element={<DeleteAccount />} />
        <Route path="/policies/delete-account" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  )
}
