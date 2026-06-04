import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhoWeAre from './pages/AboutUs/WhoWeAre';
import CompanyProfile from './pages/AboutUs/CompanyProfile';
import AwardsCertificates from './pages/AboutUs/AwardsCertificates';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PlantMachinery from './pages/PlantMachinery';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Us Routes */}
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/company-profile" element={<CompanyProfile />} />
          <Route path="/about/awards-certificates" element={<AwardsCertificates />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          
          {/* Portfolio Routes */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<Portfolio />} />
          
          {/* Plant & Machinery Fleet */}
          <Route path="/plant-machinery" element={<PlantMachinery />} />
          
          {/* Contact Us Form */}
          <Route path="/contact" element={<Contact />} />

          {/* Legal Disclosures */}
          <Route path="/terms" element={<Legal />} />
          <Route path="/privacy" element={<Legal />} />
          
          {/* Default Redirection Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
