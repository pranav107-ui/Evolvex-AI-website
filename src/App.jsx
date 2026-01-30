import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const OpenRoles = lazy(() => import('./pages/OpenRoles'))
const JobDetails = lazy(() => import('./pages/JobDetails'))

const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const OurTeam = lazy(() => import('./pages/OurTeam'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Blog = lazy(() => import('./pages/Blog'))

// Simple Loading Fallback
const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen bg-[#0b1220]">
        <div className="w-10 h-10 border-4 border-[#6C4CF4]/30 border-t-[#6C4CF4] rounded-full animate-spin"></div>
    </div>
)

function App() {
    return (
        <>
            <ScrollToTop />
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="careers" element={<Careers />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="open-roles" element={<OpenRoles />} />
                        <Route path="job-details" element={<JobDetails />} />

                        <Route path="terms-of-use" element={<TermsOfUse />} />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="terms-of-service" element={<TermsOfService />} />
                        <Route path="our-team" element={<OurTeam />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="blog" element={<Blog />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
