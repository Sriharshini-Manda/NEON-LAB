import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  Terminal, 
  Code2, 
  Share2, 
  MessageSquare, 
  Box, 
  Mail, 
  Copy, 
  CheckCircle2, 
  ArrowUpRight, 
  Send,
  Linkedin,
  Github,
  Globe
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const location = useLocation();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(PROFILE_DATA.discord).then(() => {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    });
  };

  const handleContactScroll = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 w-full bg-[#0e0d15]/95 border-t border-white/5 mt-20 shadow-[0_-1px_30px_rgba(0,0,0,0.7)]">
      {/* 1. DEDICATED CONTACT SECTION (id="contact") */}
      <section 
        id="contact" 
        aria-labelledby="contact-heading"
        className="relative max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-12 w-full scroll-mt-24 overflow-hidden"
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#00f5ff]/15 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#ff16f0]/15 rounded-full blur-[110px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3bff17] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3bff17]"></span>
            </span>
            <Zap className="w-3.5 h-3.5 text-[#3bff17]" />
            <span>TRANSMISSION CHANNEL // DIRECT ACCESS</span>
          </div>

          <h2 
            id="contact-heading" 
            className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.08] mb-4"
          >
            LET'S BUILD SOMETHING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17] drop-shadow-[0_0_24px_rgba(0,245,255,0.4)]">
              ELECTRIC
            </span>
          </h2>

          <p className="font-['Space_Grotesk'] text-base md:text-lg text-[#b9caca] leading-relaxed">
            NEON LAB is an experimental frontend laboratory exploring WebGL shaders, real-time audio reactivity, generative UI, and tactile interactions. Have an unconventional web concept, creative engineering collaboration, or high-performance frontend challenge? Initiate a transmission below.
          </p>
        </div>

        {/* Contact Grid: Terminal Card & Channel Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          {/* Main Action Terminal Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,245,255,0.1)] hover:border-[#00f5ff]/40 transition-colors duration-300">
            <div>
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.6)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.6)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.6)]"></span>
                  <span className="ml-2 font-['JetBrains_Mono'] text-xs text-[#b9caca]">transceiver://neonlab.dev/connect</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#3bff17] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3bff17] animate-pulse"></span>
                  COMM_READY
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-['Syne'] font-bold text-2xl text-white">Direct Communication Link</h3>
                <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] leading-relaxed">
                  Fastest path to connect regarding commissions, shader prototypes, and creative frontend architecture.
                </p>

                {/* Email Display with One-Click Copy */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs shadow-inner">
                    <Mail className="w-4 h-4 text-[#ff16f0]" />
                    <span className="font-medium tracking-wide">{PROFILE_DATA.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      aria-label="Copy Email Address"
                      className="ml-2 p-1 rounded hover:bg-[#2a2932] text-[#b9caca] hover:text-[#00f5ff] transition-colors cursor-pointer"
                      title="Copy to clipboard"
                    >
                      {copiedEmail ? (
                        <CheckCircle2 className="w-4 h-4 text-[#3bff17]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="font-['JetBrains_Mono'] text-xs text-[#3bff17] animate-pulse">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Card */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Neon%20Lab%20Collaboration%20Inquiry`}
                className="group relative px-8 py-3.5 rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#0e0d15] font-bold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_24px_rgba(0,245,255,0.5)] hover:shadow-[0_0_36px_rgba(255,22,240,0.7)] inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17] transition-transform duration-500 group-hover:scale-105"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-4 h-4 fill-current" />
                  INITIATE COLLABORATION
                </span>
              </a>

              <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                Response Latency: &lt; 24h
              </span>
            </div>
          </div>

          {/* Side Network & Social Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* GitHub Card */}
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#1c1b23]/80 border border-white/10 hover:border-[#00f5ff]/40 hover:bg-[#201f27] transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0e0d15] border border-white/10 flex items-center justify-center text-[#00f5ff] group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Syne'] font-bold text-sm text-white group-hover:text-[#00f5ff] transition-colors">
                    GitHub / Source Repos
                  </h4>
                  <p className="font-['Space_Grotesk'] text-xs text-[#b9caca]">
                    Open-source shaders, R3F setups &amp; experiment kits
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#b9caca] group-hover:text-[#00f5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#1c1b23]/80 border border-white/10 hover:border-[#ff16f0]/40 hover:bg-[#201f27] transition-all duration-300 flex items-center justify-between group shadow-md"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0e0d15] border border-white/10 flex items-center justify-center text-[#ff16f0] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Syne'] font-bold text-sm text-white group-hover:text-[#ff16f0] transition-colors">
                    LinkedIn / Professional
                  </h4>
                  <p className="font-['Space_Grotesk'] text-xs text-[#b9caca]">
                    Frontend engineering &amp; creative technology network
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#b9caca] group-hover:text-[#ff16f0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Discord / Live Chat Card */}
            <div className="p-5 rounded-2xl bg-[#1c1b23]/80 border border-white/10 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0e0d15] border border-white/10 flex items-center justify-center text-[#3bff17]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-['Syne'] font-bold text-sm text-white">
                    Discord Handle
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#3bff17]">
                    {PROFILE_DATA.discord}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyDiscord}
                type="button"
                title="Copy Discord username"
                className="font-['JetBrains_Mono'] text-[10px] text-[#efffe4] px-2.5 py-1 rounded-full bg-[#0e0d15] border border-[#3bff17]/30 hover:border-[#3bff17] hover:text-[#3bff17] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {copiedDiscord ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-[#3bff17]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#3bff17]" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE TICKER (Visual Transition) */}
      <div className="w-full py-2.5 bg-[#1c1b23]/70 border-y border-white/5 overflow-hidden whitespace-nowrap shadow-[inset_0_0_12px_rgba(0,245,255,0.08)]">
        <div className="inline-flex gap-8 items-center font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-widest">
          <span className="flex items-center gap-1.5 text-[#00f5ff]">
            <Zap className="w-3.5 h-3.5" /> EXPERIMENTAL REPO ACTIVE
          </span>
          <span>•</span>
          <span className="text-[#ffaced]">WEBGL SHADERS V4 READY</span>
          <span>•</span>
          <span className="text-[#79ff5b]">LATENCY: 12MS</span>
          <span>•</span>
          <span className="text-white">ACCEPTING CREATIVE TECH COMMISSIONS</span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-[#00f5ff]">
            <Terminal className="w-3.5 h-3.5" /> NEURAL AUDIO ENGINE SYNCED
          </span>
          <span>•</span>
          <span className="text-[#ffaced]">THREE.JS R164 RUNTIME</span>
        </div>
      </div>

      {/* 3. FOOTER NAVIGATION & DIRECTORY */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Information */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-['Syne'] font-bold text-lg text-[#e9feff] tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,245,255,0.3)]">
              NEON<span className="text-[#ff16f0]">LAB</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-[10px] text-[#00f5ff] border border-white/5">
              STAGE-3
            </span>
          </div>
          <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-sm text-center md:text-left">
            High-voltage digital playground &amp; creative engineering laboratory exploring the intersection of generative art, web graphics, and interactive systems.
          </p>
        </div>

        {/* 4 Footer Navigation Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 font-['JetBrains_Mono'] text-xs tracking-wider uppercase">
          <Link 
            to="/" 
            className={`transition-colors duration-200 ${location.pathname === '/' && !location.hash ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_6px_rgba(0,245,255,0.6)]' : 'text-[#b9caca] hover:text-[#00f5ff]'}`}
          >
            Home
          </Link>
          <Link 
            to="/experiments" 
            className={`transition-colors duration-200 ${location.pathname === '/experiments' ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_6px_rgba(0,245,255,0.6)]' : 'text-[#b9caca] hover:text-[#00f5ff]'}`}
          >
            Experiments
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors duration-200 ${location.pathname === '/about' ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_6px_rgba(0,245,255,0.6)]' : 'text-[#b9caca] hover:text-[#00f5ff]'}`}
          >
            About
          </Link>
          <Link 
            to="/#contact" 
            onClick={handleContactScroll}
            className={`transition-colors duration-200 ${location.hash === '#contact' ? 'text-[#00f5ff] font-bold drop-shadow-[0_0_6px_rgba(0,245,255,0.6)]' : 'text-[#b9caca] hover:text-[#00f5ff]'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Social / External Links */}
        <div className="flex items-center gap-3">
          <a 
            href={PROFILE_DATA.github} 
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-[#1c1b23] hover:bg-[#2a2932] text-[#b9caca] hover:text-[#00f5ff] border border-white/5 transition-colors" 
            title="GitHub: Sriharshini-Manda"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={PROFILE_DATA.portfolio} 
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio Website"
            className="p-2.5 rounded-full bg-[#1c1b23] hover:bg-[#2a2932] text-[#b9caca] hover:text-[#ff16f0] border border-white/5 transition-colors" 
            title="Portfolio: Sriharshini Manda"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a 
            href={PROFILE_DATA.linkedin} 
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-[#1c1b23] hover:bg-[#2a2932] text-[#b9caca] hover:text-[#3bff17] border border-white/5 transition-colors" 
            title="LinkedIn: Sriharshini Manda"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={`mailto:${PROFILE_DATA.email}`} 
            aria-label="Email Sriharshini Manda"
            className="p-2.5 rounded-full bg-[#1c1b23] hover:bg-[#2a2932] text-[#b9caca] hover:text-[#00f5ff] border border-white/5 transition-colors" 
            title="Email: manda.sriharshini@gmail.com"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4. COPYRIGHT & TECHNOLOGY BAR */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 font-['JetBrains_Mono'] text-xs text-[#b9caca]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3bff17] shadow-[0_0_8px_rgba(59,255,23,0.8)]"></span>
          <span>v2.4.0 • Built with Vite, React 19 &amp; WebGL</span>
        </div>
        <div>© 2026 NEON LAB. Engineered for the future web.</div>
      </div>
    </footer>
  );
}
