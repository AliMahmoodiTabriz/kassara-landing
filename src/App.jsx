import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function AppContent() {
  const location = useLocation();
  const isStandalonePage = location.pathname.includes('/standalone');

  return (
    <div className="min-h-screen bg-black">
      {!isStandalonePage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy/standalone" element={<PrivacyPolicy standalone={true} />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms-of-service/standalone" element={<TermsOfService standalone={true} />} />
        </Routes>
      </main>
      {!isStandalonePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
