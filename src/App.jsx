import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import OpenRoles from './pages/OpenRoles'
import JobDetails from './pages/JobDetails'
import ShadcnTest from './pages/ShadcnTest'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="careers" element={<Careers />} />
                <Route path="contact" element={<Contact />} />
                <Route path="open-roles" element={<OpenRoles />} />
                <Route path="job-details" element={<JobDetails />} />
                <Route path="shadcn-test" element={<ShadcnTest />} />
            </Route>
        </Routes>
    )
}

export default App
