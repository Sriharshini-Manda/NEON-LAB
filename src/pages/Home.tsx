import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Sliders, 
  Send,
  Users,
  Sparkles,
  Radio,
  Layers,
  Compass,
  Code2
} from 'lucide-react';
import { ARSENAL_PILLARS, LAB_METRICS } from '../data/techArsenalData';
import { COMMUNITY_BENEFITS, COMMUNITY_DEVELOPERS } from '../data/communityData';

export default function Home() {
  const [warpSeed, setWarpSeed] = useState('0x4F92');
  const [cmdInput, setCmdInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Console initialized. Select a seed or enter a command.');

  const handleMutate = () => {
    const seeds = ['#9FA10', '#B801F', '#77EE4', '#A4C02', '#00F5F'];
    const nextSeed = seeds[Math.floor(Math.random() * seeds.length)];
    setWarpSeed(nextSeed);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = cmdInput.trim();
      if (!val) return;
      if (val === 'clear') {
        setTerminalOutput('Terminal cleared.');
      } else {
        setTerminalOutput(`EXEC > ${val} [STATUS: 200 OK] // Shader pass active.`);
      }
      setCmdInput('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-8 pb-16">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow Badge: EXPERIMENT. BUILD. CONNECT. */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a2932]/80 backdrop-blur-xl border border-[#00f5ff]/30 shadow-[0_0_20px_rgba(0,245,255,0.25)] mb-6 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3bff17] opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3bff17] shadow-[0_0_10px_rgba(59,255,23,0.9)]"></span>
            </span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#00f5ff] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#3bff17]" />
              EXPERIMENT. BUILD. CONNECT. <span className="text-[#b9caca]">//</span> NEON LAB
            </span>
          </div>

          {/* Headline with Syne & Neon Gradients */}
          <h1 className="font-['Syne'] font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6 leading-[1.04]">
            CODE MEETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17] drop-shadow-[0_0_35px_rgba(0,245,255,0.45)]">CHAOS</span> &amp; CHROMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff16f0] via-[#3bff17] to-[#00f5ff]">EXPERIMENTS</span>
          </h1>

          {/* Subtitle explicitly communicating Lab + Community */}
          <p className="font-['Space_Grotesk'] text-lg md:text-xl text-[#b9caca] max-w-3xl mb-10 leading-relaxed">
            An experimental technology laboratory and developer community exploring the sharp bleeding edges of frontend engineering, WebGL shaders, generative AI, RAG, and tactile cybernetic systems.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {/* Primary CTA: EXPLORE EXPERIMENTS */}
            <Link
              to="/experiments"
              className="group relative px-8 py-3.5 rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#0e0d15] font-bold overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_0_24px_rgba(0,245,255,0.5)] hover:shadow-[0_0_36px_rgba(255,22,240,0.7)] flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17] transition-transform duration-500 group-hover:scale-105"></div>
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE EXPERIMENTS <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>

            {/* Secondary CTA: JOIN THE LAB (navigates to /auth) */}
            <Link
              to="/auth"
              className="group px-8 py-3.5 rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#e9feff] bg-[#2a2932]/90 hover:bg-[#35343d] border border-[#00f5ff]/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl shadow-[0_0_16px_rgba(0,245,255,0.25)] flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-[#3bff17]" />
              <span>JOIN THE LAB</span>
            </Link>

            {/* Tertiary Link: Inspect Tech Stack */}
            <Link
              to="/about"
              className="px-6 py-3.5 rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#b9caca] hover:text-[#00f5ff] transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#ff16f0]" />
              <span>Inspect Tech Stack</span>
            </Link>
          </div>

          {/* Telemetry Floating Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-['JetBrains_Mono'] text-xs mb-12">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0d15]/80 border border-white/5 shadow-[0_0_10px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-[#3bff17] shadow-[0_0_6px_rgba(59,255,23,0.8)]"></span>
              <span className="text-[#79ff5b] font-semibold">TARGET: 60 FPS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0d15]/80 border border-white/5 shadow-[0_0_10px_rgba(0,0,0,0.6)]">
              <Cpu className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span className="text-[#00f5ff] font-semibold">WEBGL READY</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0d15]/80 border border-white/5 shadow-[0_0_10px_rgba(0,0,0,0.6)]">
              <Activity className="w-3.5 h-3.5 text-[#ff16f0]" />
              <span className="text-[#ff16f0] font-semibold">INTERACTIVE DEMO</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0d15]/80 border border-white/5 text-[#b9caca]">
              <span className="text-[#00f5ff]">✦</span>
              <span>CLIENT-SIDE</span>
            </div>
          </div>

          {/* Interactive Hero Feature Card / Dual Viewport */}
          <div className="w-full max-w-5xl rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-2xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,245,255,0.15)] text-left">
            {/* Window Bar Controls */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#0e0d15]/90 mb-4 border border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.6)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.6)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.6)]"></span>
                <span className="ml-3 font-['JetBrains_Mono'] text-xs text-[#b9caca]">lab://runtime/shader-engine.glsl</span>
              </div>
              <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-xs">
                <span className="px-2 py-0.5 rounded bg-[#2a2932] text-[#00f5ff] border border-[#00f5ff]/30 font-mono">SHADER DEMO</span>
                <span className="text-[#b9caca] hidden md:inline">FRONTEND ONLY</span>
              </div>
            </div>

            {/* Split Viewport */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 rounded-2xl overflow-hidden bg-[#0e0d15] border border-white/5">
              {/* Graphic Canvas Simulation */}
              <div className="lg:col-span-7 relative min-h-[320px] rounded-xl overflow-hidden flex flex-col justify-between p-6 bg-gradient-to-br from-[#120f24] via-[#0e0d15] to-[#1c1736] group">
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#00f5ff] via-[#ff16f0] to-[#3bff17] blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(#00f5ff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                </div>

                {/* Floating Micro Badge */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="px-3 py-1 rounded-full bg-[#0e0d15]/90 border border-[#00f5ff]/30 backdrop-blur-md font-['JetBrains_Mono'] text-xs text-[#00f5ff] shadow-[0_0_12px_rgba(0,245,255,0.4)] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00f5ff] animate-ping"></span>
                    CHROMATIC_MUTATOR_PASS
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca] bg-[#1c1b23] px-2.5 py-1 rounded border border-white/5">
                    SEED: {warpSeed}
                  </span>
                </div>

                {/* Interactive Controls Overlay */}
                <div className="relative z-10 flex flex-wrap items-end justify-between gap-4 mt-16">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-xl text-[#e9feff] tracking-wide">CHROMATIC WARP CORE</h3>
                    <p className="font-['Space_Grotesk'] text-xs text-[#b9caca]">Interactive CSS color space &amp; gradient mutator sandbox</p>
                  </div>
                  <button
                    onClick={handleMutate}
                    className="px-4 py-2 rounded-xl bg-[#2a2932] hover:bg-[#00f5ff] hover:text-[#0e0d15] text-[#00f5ff] border border-[#00f5ff]/30 font-['JetBrains_Mono'] text-xs font-semibold transition-all duration-200 flex items-center gap-2 shadow-[0_0_12px_rgba(0,245,255,0.2)] cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>MUTATE SEED</span>
                  </button>
                </div>
              </div>

              {/* Code Terminal Viewport */}
              <div className="lg:col-span-5 p-5 flex flex-col justify-between font-['JetBrains_Mono'] text-xs bg-[#120f24]/70">
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-[#b9caca] flex items-center gap-2">
                    <span className="text-[#ff16f0]">›</span>
                    <span className="text-[#79ff5b]">initializeShaderCore</span>()
                  </div>
                  <div className="text-[#b9caca] text-[11px] pl-3 border-l border-white/10 space-y-1 py-1">
                    <p><span className="text-[#00f5ff]">uniform</span> float u_time;</p>
                    <p><span className="text-[#00f5ff]">uniform</span> vec2 u_resolution;</p>
                    <p><span className="text-[#ff16f0]">void</span> main() &#123;</p>
                    <p className="pl-3">vec2 uv = gl_FragCoord.xy / u_resolution;</p>
                    <p className="pl-3 text-[#3bff17]">// 4D Chromatic aberration</p>
                    <p className="pl-3">vec3 col = 0.5 + 0.5*cos(u_time + uv.xyx + vec3(0,2,4));</p>
                    <p className="pl-3">gl_FragColor = vec4(col, 1.0);</p>
                    <p>&#125;</p>
                  </div>
                  <div className="text-[#b9caca] flex items-center gap-2 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3bff17]" />
                    <span className="text-[#e5e0ed] text-[11px]">{terminalOutput}</span>
                  </div>
                </div>

                {/* Interactive REPL Prompt */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[#00f5ff]">
                  <span className="text-[#ff16f0] font-bold">neon-lab$</span>
                  <input
                    type="text"
                    value={cmdInput}
                    onChange={(e) => setCmdInput(e.target.value)}
                    onKeyDown={handleCommand}
                    placeholder="run --experiment all"
                    className="w-full bg-transparent text-[#e9feff] focus:outline-none font-mono text-xs placeholder:text-[#b9caca]/40"
                  />
                  <Terminal className="w-4 h-4 text-[#3bff17] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN THE NEON LAB? (6 BENEFITS) */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16" id="why-join">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#3bff17] mb-3 shadow-[0_0_12px_rgba(59,255,23,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#3bff17]" />
              <span>LABORATORY &amp; COMMUNITY CORE</span>
            </div>
            <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-white uppercase tracking-tight">
              WHY JOIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#3bff17]">THE NEON LAB?</span>
            </h2>
          </div>
          <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] max-w-md">
            An open platform where developers push beyond conventional web apps, test bleeding-edge code, and connect over technical passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_BENEFITS.map((b) => (
            <div
              key={b.id}
              className="relative rounded-2xl bg-[#1c1b23]/80 border border-white/10 p-6 flex flex-col justify-between gap-4 shadow-xl hover:-translate-y-1.5 transition-all duration-300 group hover:border-[#00f5ff]/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['JetBrains_Mono'] text-[11px] font-semibold" style={{ color: b.color }}>
                    {b.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: b.color }}></div>
                </div>
                <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 group-hover:text-[#00f5ff] transition-colors">
                  {b.title}
                </h3>
                <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] leading-relaxed">
                  {b.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-['JetBrains_Mono'] text-[11px] text-[#b9caca]">
                <span>CORE_PILLAR</span>
                <span className="text-[#3bff17]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMMUNITY PREVIEW: FIND YOUR PEOPLE */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16" id="community-preview">
        <div className="rounded-3xl bg-[#1c1b23]/70 border border-white/10 backdrop-blur-2xl p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#ff16f0] mb-3 shadow-[0_0_12px_rgba(255,22,240,0.2)]">
                <Users className="w-3.5 h-3.5 text-[#ff16f0]" />
                <span>COMMUNITY PREVIEW // DEMO DIRECTORY</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-white uppercase tracking-tight">
                FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17]">PEOPLE</span>.
              </h2>
              <p className="font-['Space_Grotesk'] text-base text-[#b9caca] max-w-2xl mt-3 leading-relaxed">
                NEON LAB is designed to eventually help developers discover others with shared technical interests. Browse sample developer profiles, explore shared skills across AI, full-stack, and WebGL, and connect with fellow experimenters.
              </p>
            </div>

            <Link
              to="/community"
              className="px-6 py-3 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] transition-all flex items-center gap-2 shrink-0"
            >
              <span>EXPLORE COMMUNITY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sample / Demo Developer Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_DEVELOPERS.slice(0, 3).map((dev) => (
              <div
                key={dev.id}
                className="rounded-2xl bg-[#0e0d15] border border-white/10 p-5 flex flex-col justify-between gap-4 shadow-lg hover:border-[#ff16f0]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#1c1b23] border border-white/10 flex items-center justify-center font-['Syne'] font-bold text-sm text-[#00f5ff]">
                        {dev.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-['Syne'] font-bold text-base text-white">
                          {dev.name}
                        </h3>
                        <p className="font-['JetBrains_Mono'] text-xs text-[#00f5ff]">
                          @{dev.handle}
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider bg-[#1c1b23] text-[#b9caca] border border-white/10">
                      {dev.demoLabel}
                    </span>
                  </div>

                  <p className="font-['Space_Grotesk'] text-xs text-[#efffe4] font-medium mb-1">
                    {dev.technicalFocus}
                  </p>
                  <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] line-clamp-2 mb-3">
                    {dev.bio}
                  </p>

                  {/* Technical Interest Tags */}
                  <div className="space-y-1.5">
                    <p className="font-['JetBrains_Mono'] text-[10px] text-[#ff16f0] uppercase tracking-wider">
                      Technical Interests:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dev.interests.map((interest) => (
                        <span
                          key={interest}
                          className="px-2 py-0.5 rounded-full bg-[#1c1b23] text-white border border-white/5 font-['JetBrains_Mono'] text-[11px]"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#3bff17]">
                    ● {dev.collaborationStatus}
                  </span>
                  <Link
                    to="/community"
                    className="font-['JetBrains_Mono'] text-xs text-[#00f5ff] hover:text-[#ff16f0] flex items-center gap-1 transition-colors"
                  >
                    <span>View Card</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED EXPERIMENTS SHOWCASE (BENTO SECTION) */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16" id="experiments">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#ff16f0] mb-3 shadow-[0_0_12px_rgba(255,22,240,0.2)]">
              <span>EXPERIMENTS</span>
              <span className="text-[#b9caca]">•</span>
              <span>CURATED COLLECTION</span>
            </div>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#e9feff] uppercase tracking-tight">
              PROVING GROUNDS <span className="text-[#ff16f0]">&amp;</span> BUILDS
            </h2>
          </div>
          <Link
            to="/experiments"
            className="group inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#00f5ff] hover:text-[#ff16f0] uppercase tracking-wider transition-colors duration-200"
          >
            <span>Explore All Protocols</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,245,255,0.2)]">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#00f5ff]/10 blur-[60px] group-hover:bg-[#00f5ff]/25 transition-all duration-500 pointer-events-none"></div>
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 bg-[#0e0d15] border border-white/5 flex items-center justify-center p-4">
                <svg className="w-full h-full" viewBox="0 0 400 180" fill="none">
                  <line x1="60" y1="40" x2="200" y2="90" stroke="#00f5ff" strokeWidth="2" strokeDasharray="4 2" />
                  <line x1="60" y1="140" x2="200" y2="90" stroke="#ff16f0" strokeWidth="1.5" />
                  <line x1="200" y1="90" x2="340" y2="50" stroke="#00f5ff" strokeWidth="2" />
                  <line x1="200" y1="90" x2="330" y2="130" stroke="#3bff17" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="60" cy="40" r="6" fill="#00f5ff" />
                  <circle cx="60" cy="140" r="5" fill="#ff16f0" />
                  <circle cx="200" cy="90" r="10" fill="#ffffff" className="animate-pulse" />
                  <circle cx="340" cy="50" r="6" fill="#00f5ff" />
                  <circle cx="330" cy="130" r="6" fill="#3bff17" />
                </svg>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e0d15]/90 border border-[#00f5ff]/30 font-['JetBrains_Mono'] text-[11px] text-[#00f5ff]">
                  GENERATIVE_AI
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#0e0d15]/80 font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">
                  TARGET: 60 FPS
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00f5ff]"></span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#00f5ff] uppercase">Latent Space Explorer</span>
              </div>
              <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 group-hover:text-[#00f5ff] transition-colors">
                NEURAL CANVAS V2
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] mb-5 leading-relaxed">
                Direct manipulation of 512-dimensional latent vectors inside browser GPU memory using WebGL compute passes &amp; custom matrix transforms.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">WebGL</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">GLSL v3</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">AI Tensor</span>
              </div>
              <Link to="/experiments" className="px-4 py-1.5 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(0,245,255,0.4)] hover:shadow-[0_0_20px_rgba(0,245,255,0.8)] transition-all">
                <span>Run Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(59,255,23,0.2)]">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#3bff17]/10 blur-[60px] group-hover:bg-[#3bff17]/25 transition-all duration-500 pointer-events-none"></div>
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 bg-[#0e0d15] border border-white/5 flex items-center justify-center p-4">
                <div className="relative flex items-center justify-center">
                  <span className="font-['Syne'] text-5xl font-black text-transparent opacity-60 transform -skew-x-12" style={{ WebkitTextStroke: '1.5px #ff16f0' }}>
                    VOX
                  </span>
                  <span className="absolute font-['Syne'] text-5xl font-black text-transparent" style={{ WebkitTextStroke: '1.5px #00f5ff' }}>
                    VOX
                  </span>
                  <span className="absolute font-['Syne'] text-5xl font-bold text-white opacity-80 mix-blend-overlay">
                    VOX
                  </span>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e0d15]/90 border border-[#3bff17]/30 font-['JetBrains_Mono'] text-[11px] text-[#3bff17]">
                  TACTILE_PHYSICS
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#0e0d15]/80 font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">
                  PHYSICS SPEC
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#3bff17]"></span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#3bff17] uppercase">Zero-G Interface</span>
              </div>
              <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 group-hover:text-[#3bff17] transition-colors">
                HYPER-PHYSICS UI
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] mb-5 leading-relaxed">
                Interactive playground where user interface containers obey rigid-body physics, spring kinematics, velocity recoil, and procedural audio clicks.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">Matter.js</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">Tailwind</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">WebAudio</span>
              </div>
              <Link to="/experiments" className="px-4 py-1.5 rounded-full bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(59,255,23,0.4)] hover:shadow-[0_0_20px_rgba(59,255,23,0.8)] transition-all">
                <span>Run Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(255,22,240,0.2)]">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#ff16f0]/10 blur-[60px] group-hover:bg-[#ff16f0]/25 transition-all duration-500 pointer-events-none"></div>
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 bg-[#0e0d15] border border-white/5 flex items-center justify-center p-4">
                <svg className="w-full h-full" viewBox="0 0 300 140" fill="none">
                  <path d="M 20 70 Q 70 20 120 70 T 220 70 T 280 70" stroke="#ff16f0" strokeWidth="2.5" opacity="0.8" fill="none" />
                  <path d="M 40 70 Q 90 110 140 70 T 240 70" stroke="#00f5ff" strokeWidth="2" opacity="0.7" fill="none" />
                  <path d="M 10 70 Q 60 90 110 70 T 210 70" stroke="#3bff17" strokeWidth="1.5" opacity="0.6" fill="none" />
                </svg>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e0d15]/90 border border-[#ff16f0]/30 font-['JetBrains_Mono'] text-[11px] text-[#ff16f0]">
                  AUDIO_REACTIVE
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#0e0d15]/80 font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">
                  AUDIO SPEC
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff16f0]"></span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff16f0] uppercase">Spectrum Analyzer</span>
              </div>
              <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 group-hover:text-[#ff16f0] transition-colors">
                CHROMATIC SOUNDWAVE
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] mb-5 leading-relaxed">
                High-fidelity synthesized WebAudio frequency visualizer layout with chromatic dispersion post-processing styling.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">WebAudio</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">Three.js</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">PostProcessing</span>
              </div>
              <Link to="/experiments" className="px-4 py-1.5 rounded-full bg-[#ff16f0] text-white font-['JetBrains_Mono'] text-xs uppercase font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(255,22,240,0.4)] hover:shadow-[0_0_20px_rgba(255,22,240,0.8)] transition-all">
                <span>Run Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,245,255,0.2)]">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#00f5ff]/10 blur-[60px] group-hover:bg-[#00f5ff]/25 transition-all duration-500 pointer-events-none"></div>
            <div>
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 bg-[#0e0d15] border border-white/5 p-4 flex flex-col justify-center">
                <div className="bg-[#1c1b23] rounded-xl p-3 border border-white/10 shadow-lg">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    <span className="ml-2 font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">synapse-agent: ~/exec</span>
                  </div>
                  <div className="space-y-1 font-['JetBrains_Mono'] text-[11px]">
                    <div className="text-[#3bff17]">$ agent.streamPrompt("graph")</div>
                    <div className="text-[#b9caca]">&gt; Evaluating 12 tree nodes [OK]</div>
                    <div className="text-[#00f5ff]">&gt; Command dispatch ready</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e0d15]/90 border border-[#00f5ff]/30 font-['JetBrains_Mono'] text-[11px] text-[#00f5ff]">
                  AUTONOMOUS_CLI
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#0e0d15]/80 font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">
                  UI PROTOTYPE
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00f5ff]"></span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#00f5ff] uppercase">AI Agent Console</span>
              </div>
              <h3 className="font-['Syne'] font-bold text-2xl text-white mb-2 group-hover:text-[#00f5ff] transition-colors">
                SYNAPSE TERMINAL
              </h3>
              <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] mb-5 leading-relaxed">
                Multi-threaded LLM agent orchestrator prototype with shell emulation and tree-of-thought visual execution graph.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">Next.js</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">LangChain</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#b9caca]">WebSockets</span>
              </div>
              <Link to="/experiments" className="px-4 py-1.5 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold flex items-center gap-1 shadow-[0_0_12px_rgba(0,245,255,0.4)] hover:shadow-[0_0_20px_rgba(0,245,255,0.8)] transition-all">
                <span>Run Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LAB TECH & ARSENAL SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16" id="tech-stack">
        <div className="rounded-3xl bg-[#1c1b23]/70 border border-white/10 backdrop-blur-2xl p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932] font-['JetBrains_Mono'] text-xs text-[#00f5ff] mb-3 shadow-[0_0_12px_rgba(0,245,255,0.2)]">
                <Zap className="w-3.5 h-3.5" />
                <span>MODULAR WEAPONRY</span>
              </div>
              <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl text-[#e9feff] uppercase tracking-tight">
                LAB TECH <span className="text-[#3bff17]">&amp;</span> ARSENAL
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] max-w-md">
              Zero bloatware. Handcrafted performance-first modern toolchains engineered to deliver hyper-responsive interactive 3D web experiences.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARSENAL_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-[#201f27] border border-white/5 p-5 flex flex-col justify-between hover:bg-[#2a2932] transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Terminal className="w-5 h-5" style={{ color: pillar.highlightColor }} />
                    <span className="font-['JetBrains_Mono'] text-[11px] px-2 py-0.5 rounded bg-[#0e0d15] text-[#00f5ff]">
                      {pillar.tier}
                    </span>
                  </div>
                  <h3 className="font-['Syne'] font-bold text-lg text-[#e9feff] mb-1">{pillar.name}</h3>
                  <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] mb-4">{pillar.description}</p>
                  <ul className="space-y-2 font-['JetBrains_Mono'] text-xs">
                    {pillar.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between p-2 rounded-lg bg-[#0e0d15]/80">
                        <span className="text-[#e5e0ed]">{skill.name}</span>
                        <span className="font-mono" style={{ color: pillar.highlightColor }}>
                          {skill.level}%
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-2 text-[#b9caca] font-['JetBrains_Mono'] text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.highlightColor }}></span>
                  {pillar.highlightNote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ETHOS & PHILOSOPHY */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: High Impact Metric Counters */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {LAB_METRICS.map((metric) => (
              <div
                key={metric.key}
                className="p-6 rounded-2xl bg-[#1c1b23]/90 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:bg-[#201f27] transition-colors duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-['JetBrains_Mono'] text-xs font-semibold" style={{ color: metric.color }}>
                    {metric.key}
                  </span>
                  <Activity className="w-4 h-4" style={{ color: metric.color }} />
                </div>
                <div className="font-['Syne'] text-4xl md:text-5xl text-white font-black drop-shadow-[0_0_15px_rgba(0,245,255,0.4)] my-2">
                  {metric.value}
                </div>
                <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] leading-relaxed">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right: The Neon Lab Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 pl-0 lg:pl-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2932] w-fit font-['JetBrains_Mono'] text-xs text-[#ff16f0] shadow-[0_0_10px_rgba(255,22,240,0.2)]">
              <span>ETHOS &amp; PHILOSOPHY</span>
            </div>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
              WHY DOES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#ff16f0]">NEON LAB</span> EXIST?
            </h2>
            <p className="font-['Space_Grotesk'] text-lg text-[#b9caca] leading-relaxed">
              The modern web has become a stagnant sea of uniform white backgrounds, rounded grey cards, and cookie-cutter enterprise SaaS dashboards.
            </p>
            <p className="font-['Space_Grotesk'] text-base text-[#b9caca] leading-relaxed">
              NEON LAB is an intentional revolt. We craft digital spaces that buzz with tactical voltage, dynamic physics, rich luminescence, and unapologetic artistic audacity. We bridge the gap between rigorous computer graphics science and raw rock-and-roll frontend expression.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-full bg-[#2a2932] hover:bg-[#35343d] border border-white/10 text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,245,255,0.2)] flex items-center gap-2"
              >
                <span>Read Full Story &amp; Experience</span>
                <ArrowRight className="w-4 h-4 text-[#00f5ff]" />
              </Link>
              <Link
                to="/#contact"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#ff16f0] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Initiate Collaboration</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOIN CTA: YOUR NEXT EXPERIMENT STARTS HERE */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16" id="join-cta">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1c1b23] via-[#201f27] to-[#120f24] border border-[#00f5ff]/30 p-8 md:p-14 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00f5ff]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#ff16f0]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e0d15] border border-[#3bff17]/40 text-[#3bff17] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-4">
                <Radio className="w-3.5 h-3.5 text-[#3bff17] animate-pulse" />
                <span>LABORATORY MEMBERSHIP PORTAL</span>
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
                YOUR NEXT EXPERIMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17]">STARTS HERE.</span>
              </h2>
              <p className="font-['Space_Grotesk'] text-base text-[#b9caca] mt-4 leading-relaxed">
                Connect with developers exploring the sharp bleeding edges of WebGL, generative AI, RAG, full-stack systems, and testing. Create your builder profile and broadcast your technical interests to the community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                to="/auth"
                className="px-8 py-4 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_30px_rgba(0,245,255,0.7)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>CREATE YOUR LAB PROFILE</span>
                <Zap className="w-4 h-4" />
              </Link>
              <Link
                to="/community"
                className="px-7 py-4 rounded-full bg-[#2a2932] hover:bg-[#35343d] border border-white/10 text-white font-['JetBrains_Mono'] text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-[#ff16f0]" />
                <span>Explore Community</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
