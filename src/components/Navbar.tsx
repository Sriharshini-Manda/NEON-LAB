import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FlaskConical, Menu, X, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0d15]/85 backdrop-blur-2xl border-b border-white/5 shadow-[0_1px_16px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1440px] mx-auto h-20 px-3 sm:px-6 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#ff16f0] opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#1c1b23] border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff]">
                <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <span className="font-['Syne'] font-extrabold text-lg sm:text-xl tracking-wider uppercase text-[#e9feff] drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]">
              NEON<span className="text-[#ff16f0]">LAB</span>
            </span>
          </Link>

          {/* Status Indicator (Desktop/Tablet) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932]/70 backdrop-blur-md border border-[#3bff17]/30 shadow-[inset_0_0_8px_rgba(59,255,23,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3bff17] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3bff17] shadow-[0_0_8px_rgba(59,255,23,0.9)]"></span>
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#efffe4] uppercase tracking-widest font-medium">
              Lab Status: Online
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8 font-['JetBrains_Mono'] text-xs uppercase tracking-wider">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-all duration-200 cursor-pointer ${
                isActive && !location.hash
                  ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                  : 'text-[#b9caca] hover:text-[#00f5ff]'
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/experiments"
            className={({ isActive }) =>
              `transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                  : 'text-[#b9caca] hover:text-[#00f5ff]'
              }`
            }
          >
            EXPERIMENTS
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                  : 'text-[#b9caca] hover:text-[#00f5ff]'
              }`
            }
          >
            COMMUNITY
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-200 cursor-pointer ${
                isActive && location.hash !== '#contact'
                  ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                  : 'text-[#b9caca] hover:text-[#00f5ff]'
              }`
            }
          >
            ABOUT
          </NavLink>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState({}, '', '#contact');
              } else {
                window.location.href = '/#contact';
              }
            }}
            className={`transition-all duration-200 cursor-pointer ${
              location.hash === '#contact'
                ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                : 'text-[#b9caca] hover:text-[#00f5ff]'
            }`}
          >
            GET IN TOUCH
          </a>
        </nav>

        {/* Primary CTA Action & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentUser ? (
            <Link
              to="/auth"
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1c1b23] border border-[#3bff17]/40 text-[#3bff17] hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all font-['JetBrains_Mono'] text-[10px] sm:text-xs font-bold shadow-[0_0_12px_rgba(59,255,23,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#3bff17] animate-pulse"></span>
              <span className="truncate max-w-[90px] sm:max-w-[130px]">@{currentUser.handle}</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              aria-label="Join the Lab authentication and onboarding"
              className="relative p-[1px] rounded-full overflow-hidden group shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_28px_rgba(59,255,23,0.6)] transition-all cursor-pointer block shrink-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#3bff17] to-[#00f5ff] animate-pulse"></div>
              <div className="relative px-3 py-1.5 sm:px-5 sm:py-2 bg-[#0e0d15] rounded-full group-hover:bg-transparent transition-colors flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3bff17] group-hover:text-[#0e0d15] transition-colors fill-current" />
                <span className="font-['JetBrains_Mono'] text-[10px] sm:text-xs text-[#e9feff] uppercase tracking-wider font-bold group-hover:text-[#0e0d15] transition-colors whitespace-nowrap">
                  JOIN THE LAB
                </span>
              </div>
            </Link>
          )}

          {/* Mobile Menu Toggle Button - Guaranteed Visibility */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            className="md:hidden p-2 rounded-xl bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] hover:text-[#3bff17] hover:border-[#3bff17] transition-colors cursor-pointer shrink-0 z-50 flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff16f0]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bottom-0 w-full h-[calc(100vh-5rem)] bg-[#0e0d15] border-b border-white/10 px-6 py-8 flex flex-col gap-3 font-['JetBrains_Mono'] text-sm tracking-wider uppercase shadow-2xl z-[100] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-3 px-4 rounded-xl transition-colors ${
                isActive && !location.hash
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-4 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white hover:bg-[#1c1b23]/50'
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/experiments"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-3 px-4 rounded-xl transition-colors ${
                isActive
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-4 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white hover:bg-[#1c1b23]/50'
              }`
            }
          >
            EXPERIMENTS
          </NavLink>
          <NavLink
            to="/community"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-3 px-4 rounded-xl transition-colors ${
                isActive
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-4 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white hover:bg-[#1c1b23]/50'
              }`
            }
          >
            COMMUNITY
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-3 px-4 rounded-xl transition-colors ${
                isActive && location.hash !== '#contact'
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-4 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white hover:bg-[#1c1b23]/50'
              }`
            }
          >
            ABOUT
          </NavLink>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState({}, '', '#contact');
              } else {
                window.location.href = '/#contact';
              }
            }}
            className={`py-3 px-4 rounded-xl transition-colors ${
              location.hash === '#contact'
                ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-4 border-[#00f5ff]'
                : 'text-[#b9caca] hover:text-white hover:bg-[#1c1b23]/50'
            }`}
          >
            GET IN TOUCH
          </a>

          <Link
            to="/auth"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 py-3.5 px-4 rounded-xl bg-[#00f5ff] text-[#0e0d15] font-bold transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current text-[#0e0d15]" />
            <span>JOIN THE LAB</span>
          </Link>
        </div>
      )}
    </header>
  );
}
