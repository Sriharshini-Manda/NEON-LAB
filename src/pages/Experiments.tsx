import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowUpRight, 
  Grid, 
  List, 
  SlidersHorizontal, 
  Sparkles, 
  GitFork, 
  Send,
  Terminal,
  Play
} from 'lucide-react';
import { EXPERIMENTS_DATA, Experiment } from '../data/experimentsData';
import { PROFILE_DATA } from '../data/profileData';

export default function Experiments() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'starred' | 'experimental'>('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All [12]' },
    { id: 'ai', label: 'AI & Generative [4]' },
    { id: 'ui', label: 'UI & Micro-interactions [3]' },
    { id: 'frontend', label: 'Frontend & Core [3]' },
    { id: 'animation', label: 'Animation & WebGL [2]' },
  ];

  const filteredExperiments = useMemo(() => {
    return EXPERIMENTS_DATA.filter((exp) => {
      const matchesCategory = selectedCategory === 'all' || exp.category === selectedCategory;
      const matchesSearch = 
        exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'starred') return b.stars - a.stars;
      if (sortBy === 'experimental') {
        const aExp = a.statusType === 'experimental' ? 1 : 0;
        const bExp = b.statusType === 'experimental' ? 1 : 0;
        return bExp - aExp;
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  // Helper to render interactive visual mockup for each experiment
  const renderCanvasMockup = (exp: Experiment) => {
    switch (exp.canvasType) {
      case 'nodeGraph':
        return (
          <svg className="w-full h-full p-4" viewBox="0 0 400 200" fill="none">
            <line x1="80" y1="50" x2="200" y2="100" stroke="#00f5ff" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="80" y1="150" x2="200" y2="100" stroke="#ff16f0" strokeWidth="1.5" />
            <line x1="200" y1="100" x2="320" y2="60" stroke="#00f5ff" strokeWidth="2" />
            <line x1="200" y1="100" x2="310" y2="140" stroke="#3bff17" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="80" cy="50" r="5" fill="#00f5ff" />
            <circle cx="80" cy="150" r="4" fill="#ff16f0" />
            <circle cx="200" cy="100" r="12" fill="#00f5ff" opacity="0.3" />
            <circle cx="200" cy="100" r="6" fill="#ffffff" className="animate-pulse" />
            <circle cx="320" cy="60" r="5" fill="#00f5ff" />
            <circle cx="310" cy="140" r="5" fill="#3bff17" />
          </svg>
        );
      case 'kineticVox':
        return (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <span className="font-['Syne'] text-5xl font-black text-transparent opacity-40 select-none transform -skew-x-12" style={{ WebkitTextStroke: '1.5px #ff16f0' }}>
              VOX
            </span>
            <span className="absolute font-['Syne'] text-5xl font-black text-transparent select-none opacity-80" style={{ WebkitTextStroke: '1.5px #00f5ff' }}>
              VOX
            </span>
            <span className="absolute font-['Syne'] text-5xl font-bold text-white select-none mix-blend-overlay">
              VOX
            </span>
            <div className="absolute bottom-2 inset-x-8 flex items-end justify-between h-6 opacity-60">
              <span className="w-1.5 h-3 bg-[#3bff17] rounded-t"></span>
              <span className="w-1.5 h-5 bg-[#00f5ff] rounded-t"></span>
              <span className="w-1.5 h-6 bg-[#ff16f0] rounded-t"></span>
              <span className="w-1.5 h-4 bg-[#00f5ff] rounded-t"></span>
            </div>
          </div>
        );
      case 'shellOs':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-center">
            <div className="bg-[#1c1b23] rounded-xl p-3 border border-white/10 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff16f0]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3bff17]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00f5ff]"></span>
                </div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">bash ~ neo_shell</span>
              </div>
              <div className="space-y-1 font-['JetBrains_Mono'] text-[11px]">
                <div className="text-[#3bff17]">$ mount --spatial-desktop</div>
                <div className="text-[#b9caca]">&gt; Spawning 4 WebGL viewports [OK]</div>
                <div className="text-[#00f5ff]">&gt; WindowManager composited (120 FPS)</div>
              </div>
            </div>
          </div>
        );
      case 'quantumColor':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between">
            <div className="grid grid-cols-4 gap-2 h-24">
              <div className="rounded-xl bg-[#00f5ff] p-2 flex flex-col justify-between shadow-[0_0_12px_rgba(0,245,255,0.4)]">
                <span className="font-['JetBrains_Mono'] text-[9px] text-[#0e0d15] font-bold">CYAN</span>
                <span className="font-['JetBrains_Mono'] text-[9px] text-[#0e0d15]">0.88 / 0.18</span>
              </div>
              <div className="rounded-xl bg-[#ff16f0] p-2 flex flex-col justify-between shadow-[0_0_12px_rgba(255,22,240,0.4)]">
                <span className="font-['JetBrains_Mono'] text-[9px] text-white font-bold">PINK</span>
                <span className="font-['JetBrains_Mono'] text-[9px] text-white">0.65 / 0.32</span>
              </div>
              <div className="rounded-xl bg-[#3bff17] p-2 flex flex-col justify-between shadow-[0_0_12px_rgba(59,255,23,0.4)]">
                <span className="font-['JetBrains_Mono'] text-[9px] text-[#0e0d15] font-bold">LIME</span>
                <span className="font-['JetBrains_Mono'] text-[9px] text-[#0e0d15]">0.91 / 0.28</span>
              </div>
              <div className="rounded-xl bg-[#9d4edd] p-2 flex flex-col justify-between shadow-[0_0_12px_rgba(157,78,221,0.4)]">
                <span className="font-['JetBrains_Mono'] text-[9px] text-white font-bold">VIOLET</span>
                <span className="font-['JetBrains_Mono'] text-[9px] text-white">0.78 / 0.15</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#b9caca] font-['JetBrains_Mono'] text-[11px] pt-2 border-t border-white/5">
              <span>ALGO: OKLCH P3 GAMUT</span>
              <span className="text-[#3bff17]">WCAG AAA: PASS</span>
            </div>
          </div>
        );
      case 'voiceHud':
        return (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 300 150" fill="none">
              <circle cx="150" cy="75" r="50" stroke="#35343d" strokeDasharray="4 4" strokeWidth="1" />
              <circle cx="150" cy="75" r="30" stroke="#ff16f0" strokeOpacity="0.4" strokeWidth="1.5" />
              <circle cx="150" cy="75" r="15" stroke="#00f5ff" strokeOpacity="0.7" strokeWidth="2" />
              <circle cx="150" cy="75" r="4" fill="#3bff17" className="animate-ping" />
              <path d="M 20 75 Q 60 35 100 75 T 180 75 T 260 75" stroke="#ff16f0" strokeWidth="2.5" opacity="0.8" fill="none" />
              <path d="M 40 75 Q 90 115 140 75 T 240 75" stroke="#00f5ff" strokeWidth="2" opacity="0.7" fill="none" />
            </svg>
          </div>
        );
      case 'fluidShader':
      default:
        return (
          <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#ff16f0] via-[#00f5ff] to-[#3bff17] blur-2xl opacity-60 animate-spin" style={{ animationDuration: '14s' }}></div>
            <svg className="relative z-10 w-full h-full" viewBox="0 0 200 120" fill="none">
              <path d="M 20 60 C 60 10 140 110 180 60" stroke="#00f5ff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
              <path d="M 30 75 C 70 25 130 125 170 75" stroke="#ff16f0" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <path d="M 50 50 C 90 90 110 30 150 70" stroke="#3bff17" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Repository Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pt-6 sm:pt-8 pb-10 w-full">
        {/* Section Pill */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a2932]/80 text-[#00f5ff] font-['JetBrains_Mono'] text-[10px] sm:text-xs tracking-widest uppercase border border-[#00f5ff]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] shadow-[0_0_8px_#00f5ff]"></span>
            INDEX OF LAB EXPERIMENTS // TOTAL: 12 PROTOCOLS
          </span>
          <span className="hidden sm:inline-block font-['JetBrains_Mono'] text-xs text-[#b9caca]">
            SYS_REVISION: R2.4.9
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white drop-shadow-[0_0_24px_rgba(0,245,255,0.25)]">
              THE EXPERIMENT <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17]">
                REPOSITORY
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 font-['Space_Grotesk'] text-base sm:text-lg text-[#b9caca] max-w-2xl leading-relaxed">
              Interactive prototypes, WebGL shaders, experimental AI interfaces, and frontend torture-tests pushed directly from the workbench.
            </p>
          </div>

          {/* Telemetry Stats Panel */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 p-2.5 sm:p-3 rounded-2xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-md self-start lg:self-end">
            <div className="px-3 sm:px-4 py-1 text-left">
              <span className="block font-['JetBrains_Mono'] text-[9px] sm:text-[10px] text-[#b9caca] uppercase">ACTIVE RUNTIMES</span>
              <span className="font-['Syne'] font-bold text-lg sm:text-xl text-[#3bff17]">12 / 12</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="px-3 sm:px-4 py-1 text-left">
              <span className="block font-['JetBrains_Mono'] text-[9px] sm:text-[10px] text-[#b9caca] uppercase">AVG FPS</span>
              <span className="font-['Syne'] font-bold text-lg sm:text-xl text-[#00f5ff]">
                120<span className="text-xs text-[#b9caca] ml-1">Hz</span>
              </span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="px-3 sm:px-4 py-1 text-left">
              <span className="block font-['JetBrains_Mono'] text-[9px] sm:text-[10px] text-[#b9caca] uppercase">SYNTHESIS</span>
              <span className="font-['Syne'] font-bold text-lg sm:text-xl text-[#ff16f0]">STABLE</span>
            </div>
          </div>
        </div>

        {/* Controls & Search Toolbar */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-[#1c1b23]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Field */}
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#00f5ff]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiments, shaders, tags..."
                className="w-full pl-10 pr-16 py-2.5 rounded-xl bg-[#0e0d15] text-[#e9feff] placeholder:text-[#b9caca]/50 font-['JetBrains_Mono'] text-xs border border-white/10 focus:outline-none focus:border-[#00f5ff] shadow-inner"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <kbd className="px-1.5 py-0.5 rounded bg-[#2a2932] text-[#b9caca] font-['JetBrains_Mono'] text-[10px]">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Sort & View Controls */}
            <div className="flex flex-wrap items-center justify-between w-full md:w-auto gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-[#0e0d15] border border-white/10 px-3 py-1.5 rounded-xl">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#b9caca]" />
                <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca]">SORT:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#00f5ff] font-['JetBrains_Mono'] text-xs focus:outline-none cursor-pointer"
                >
                  <option value="latest" className="bg-[#1c1b23] text-white">Latest First</option>
                  <option value="starred" className="bg-[#1c1b23] text-white">Most Starred ★</option>
                  <option value="experimental" className="bg-[#1c1b23] text-white">Experimental First</option>
                </select>
              </div>

              <div className="flex items-center p-1 rounded-xl bg-[#0e0d15] border border-white/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-[#2a2932] text-[#00f5ff]' : 'text-[#b9caca] hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all ${
                    viewMode === 'list' ? 'bg-[#2a2932] text-[#00f5ff]' : 'text-[#b9caca] hover:text-white'
                  }`}
                  title="List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-['JetBrains_Mono'] text-xs whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00f5ff] text-[#0e0d15] font-bold shadow-[0_0_16px_rgba(0,245,255,0.4)]'
                    : 'bg-[#2a2932]/70 hover:bg-[#35343d] text-[#b9caca] hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiments Grid Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 w-full">
        {filteredExperiments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Sparkles className="w-12 h-12 text-[#ff16f0] mb-4 animate-bounce" />
            <h3 className="font-['Syne'] font-bold text-xl text-white mb-2">NO PROTOCOLS FOUND</h3>
            <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] max-w-md mb-4">
              No experiments match your search criteria. Try filtering by another runtime tag or resetting query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full'
                : 'grid grid-cols-1 gap-6 w-full'
            }
          >
            {filteredExperiments.map((exp) => (
              <article
                key={exp.id}
                className="group flex flex-col justify-between rounded-3xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl p-6 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_-10px_rgba(0,245,255,0.3)] hover:border-[#00f5ff]/40"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff16f0]/15 text-[#ffaced] font-['JetBrains_Mono'] text-[11px] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff16f0] animate-ping"></span>
                      {exp.categoryLabel}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-[11px] px-2.5 py-0.5 rounded-full bg-[#2a2932] text-[#00f5ff] font-semibold border border-white/5">
                      {exp.statusBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-['Syne'] font-bold text-2xl text-white group-hover:text-[#00f5ff] transition-colors tracking-tight flex items-center justify-between">
                    {exp.title}
                    <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca] font-normal">{exp.code}</span>
                  </h2>

                  {/* Visual Canvas Simulator */}
                  <div className="mt-4 relative w-full h-48 rounded-2xl bg-[#0e0d15] border border-white/5 overflow-hidden flex items-center justify-center">
                    {renderCanvasMockup(exp)}
                    {exp.metaNote && (
                      <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-[#1c1b23]/90 text-[#00f5ff] font-['JetBrains_Mono'] text-[10px] border border-white/5">
                        {exp.metaNote}
                      </div>
                    )}
                    {exp.demoBadge && (
                      <div className="absolute top-2.5 left-3 px-2 py-0.5 rounded bg-[#1c1b23]/90 text-[#3bff17] font-['JetBrains_Mono'] text-[10px] border border-white/5">
                        {exp.demoBadge}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-4 font-['Space_Grotesk'] text-sm text-[#b9caca] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tag Cloud */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#2a2932]/80 font-['JetBrains_Mono'] text-[11px] text-[#e9feff] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button className="px-4 py-2 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs font-bold hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5 cursor-pointer">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={PROFILE_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-[#2a2932] hover:bg-[#35343d] text-white font-['JetBrains_Mono'] text-xs hover:text-[#00f5ff] transition-all inline-flex items-center gap-1 border border-white/5"
                  >
                    <span>Source</span>
                    <span className="text-[11px]">‹/›</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Interactive REPL Snippet Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 w-full">
        <div className="relative rounded-3xl bg-[#0e0d15] border border-white/10 p-5 md:p-6 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f5ff]/10 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
              <span className="ml-2 font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                workbench@neon-lab: ~/experiments
              </span>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#3bff17] flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#3bff17] animate-pulse"></span>
              REPL INSTANCE ONLINE
            </div>
          </div>
          <div className="font-['JetBrains_Mono'] text-xs text-[#e5e0ed] space-y-1.5 font-mono overflow-x-auto">
            <div className="flex gap-2">
              <span className="text-[#ff16f0]">$</span>
              <span className="text-white">npx neon-lab run @exp/neural-latent-diver --precision=fp16</span>
            </div>
            <div className="text-[#b9caca] text-[11px]">
              [14:02:18] Compiling SPIR-V shader modules via WebGPU backend... [DONE 18ms]<br />
              [14:02:18] Initializing ONNX session with WebAssembly SIMD threads: 8... [OK]<br />
              [14:02:19] Streaming 512-dim embedding tensors to display viewport...
            </div>
            <div className="flex items-center gap-2 pt-1 text-[#3bff17]">
              <span>&gt; Protocol active. Press [SPACE] inside viewport to perturb vector field.</span>
              <span className="inline-block w-2 h-3.5 bg-[#00f5ff] animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Call To Action Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 w-full">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#201f27] via-[#1c1b23] to-[#120f24] border border-white/10 backdrop-blur-2xl p-6 md:p-12 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#ff16f0]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#00f5ff]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff16f0]/20 text-[#ffaced] mb-4 font-['JetBrains_Mono'] text-xs tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5" />
                OPEN EXPERIMENT PROTOCOL
              </div>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase drop-shadow-[0_0_12px_rgba(0,245,255,0.3)]">
                HAVE AN EXPERIMENT IDEA OR <br className="hidden sm:block" />
                WANT TO COLLABORATE?
              </h2>
              <p className="mt-3 font-['Space_Grotesk'] text-base text-[#b9caca]">
                Submit a PR or fork any experiment from the open-source repository. All lab protocols run under the MIT license with full WebGL &amp; AI reproduction kits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs font-bold hover:shadow-[0_0_28px_rgba(0,245,255,0.8)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <GitFork className="w-4 h-4" />
                <span>Fork on GitHub</span>
              </a>
              <Link
                to="/#contact"
                className="px-6 py-3 rounded-full bg-transparent border-2 border-[#ff16f0] text-white font-['JetBrains_Mono'] text-xs font-bold hover:bg-[#ff16f0]/15 hover:shadow-[0_0_24px_rgba(255,22,240,0.5)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#ff16f0]" />
                <span>Contact Dev</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
