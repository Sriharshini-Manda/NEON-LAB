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
      <div className="max-w-[1440px] mx-auto h-20 px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#ff16f0] opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 rounded-xl bg-[#1c1b23] border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff]">
                <FlaskConical className="w-5 h-5" />
              </div>
            </div>
            <span className="font-['Syne'] font-extrabold text-xl tracking-wider uppercase text-[#e9feff] drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]">
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
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 font-['JetBrains_Mono'] text-xs uppercase tracking-wider">
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
                isActive
                  ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_8px_rgba(0,245,255,0.6)] border-b border-[#00f5ff]/60 pb-1'
                  : 'text-[#b9caca] hover:text-[#00f5ff]'
              }`
            }
          >
            ABOUT
          </NavLink>
        </nav>

        {/* Primary CTA Action */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <Link
              to="/auth"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1b23] border border-[#3bff17]/40 text-[#3bff17] hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all font-['JetBrains_Mono'] text-xs font-bold shadow-[0_0_12px_rgba(59,255,23,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#3bff17] animate-pulse"></span>
              <span className="truncate max-w-[130px]">@{currentUser.handle}</span>
            </Link>
          ) : (
            <Link
              to="/auth"
              aria-label="Join the Lab authentication and onboarding"
              className="relative p-[1px] rounded-full overflow-hidden group shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_28px_rgba(59,255,23,0.6)] transition-all cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#3bff17] to-[#00f5ff] animate-pulse"></div>
              <div className="relative px-5 py-2 bg-[#0e0d15] rounded-full group-hover:bg-transparent transition-colors flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#3bff17] group-hover:text-[#0e0d15] transition-colors fill-current" />
                <span className="font-['JetBrains_Mono'] text-xs text-[#e9feff] uppercase tracking-wider font-bold group-hover:text-[#0e0d15] transition-colors whitespace-nowrap">
                  JOIN THE LAB
                </span>
              </div>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            className="md:hidden p-2 rounded-xl bg-[#1c1b23] border border-white/10 text-[#b9caca] hover:text-[#00f5ff] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff16f0]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0d15]/95 border-b border-white/10 backdrop-blur-3xl px-6 py-6 flex flex-col gap-4 font-['JetBrains_Mono'] text-sm tracking-wider uppercase shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive && !location.hash
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-2 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white'
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/experiments"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-2 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white'
              }`
            }
          >
            EXPERIMENTS
          </NavLink>
          <NavLink
            to="/community"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-2 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white'
              }`
            }
          >
            COMMUNITY
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#00f5ff] bg-[#1c1b23] font-bold border-l-2 border-[#00f5ff]'
                  : 'text-[#b9caca] hover:text-white'
              }`
            }
          >
            ABOUT
          </NavLink>

          <Link
            to="/auth"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 py-3 px-4 rounded-xl bg-[#00f5ff] text-[#0e0d15] font-bold transition-all shadow-[0_0_16px_rgba(0,245,255,0.4)] flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>JOIN THE LAB</span>
          </Link>
        </div>
      )}
    </header>
  );
}
