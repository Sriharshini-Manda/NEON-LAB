import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiments from './pages/Experiments';
import About from './pages/About';
import Community from './pages/Community';
import Auth from './pages/Auth';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';

// Utility component to manage route scroll and hash scrolling
function ScrollAndHashManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToHashElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Attempt immediate scroll
      if (!scrollToHashElement()) {
        // If element not yet ready or page transition underway, retry after brief tick
        const timer = setTimeout(scrollToHashElement, 80);
        return () => clearTimeout(timer);
      }
    } else {
      // Normal route navigation without hash -> scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

function Layout() {
  return (
    <div className="relative min-h-screen bg-[#13121b] text-[#e5e0ed] overflow-x-hidden selection:bg-[#00f5ff] selection:text-[#0e0d15] flex flex-col justify-between">
      {/* Background Ambient Glows & Cyber Grid (Persisted across pages) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(157,78,221,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(157,78,221,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#00f5ff]/15 blur-[120px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#ff16f0]/15 blur-[120px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-[#3bff17]/10 blur-[120px]"></div>
      </div>

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Viewport wrapped in ErrorBoundary */}
      <main className="relative z-10 pt-20 flex-1">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>

      {/* Shared Global Footer with Dedicated Contact Section (id="contact") */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <ScrollAndHashManager />
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
