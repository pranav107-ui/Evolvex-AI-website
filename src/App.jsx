import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import OpenRoles from './pages/OpenRoles'
import JobDetails from './pages/JobDetails'

import TermsOfUse from './pages/TermsOfUse'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import OurTeam from './pages/OurTeam'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'

function App() {
    return (
        <>
            <ScrollToTop />
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
        </>
    )
}

export default App
