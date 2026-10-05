import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Zap, 
  Filter, 
  FlaskConical, 
  Radio, 
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { TechInterest, INTEREST_FILTERS } from '../data/communityData';

export default function Community() {
  const { communityProfiles } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<string>('ALL');

  // Defensive list guarantee
  const profilesList = useMemo(() => {
    return Array.isArray(communityProfiles) ? communityProfiles : [];
  }, [communityProfiles]);

  // Search and Filter logic with total defensive guards
  const filteredDevelopers = useMemo(() => {
    return profilesList.filter((dev) => {
      if (!dev) return false;
      const q = searchQuery.toLowerCase().trim();

      const nameStr = dev.name || '';
      const handleStr = dev.handle || '';
      const focusStr = dev.technicalFocus || '';
      const techList = Array.isArray(dev.technologies) ? dev.technologies : [];
      const interestList = Array.isArray(dev.interests) ? dev.interests : [];

      const matchesSearch =
        !q ||
        nameStr.toLowerCase().includes(q) ||
        handleStr.toLowerCase().includes(q) ||
        focusStr.toLowerCase().includes(q) ||
        techList.some((t) => (t || '').toLowerCase().includes(q)) ||
        interestList.some((i) => (i || '').toLowerCase().includes(q));

      const matchesInterest =
        selectedInterest === 'ALL' || interestList.includes(selectedInterest as TechInterest);

      return matchesSearch && matchesInterest;
    });
  }, [profilesList, searchQuery, selectedInterest]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 flex flex-col gap-8 sm:gap-10">
        
        {/* 1. PAGE HERO */}
        <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pt-2 sm:pt-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-[10px] sm:text-xs tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(0,245,255,0.2)]">
              <Users className="w-3.5 h-3.5" />
              <span>THE DEVELOPER LABORATORY NETWORK // CONNECT</span>
            </div>
            <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              NEON LAB <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17]">COMMUNITY</span>
            </h1>
            <p className="mt-3 sm:mt-4 font-['Space_Grotesk'] text-base sm:text-lg md:text-xl text-[#b9caca] leading-relaxed">
              Find developers experimenting with the technologies you care about.
            </p>
          </div>

          {/* CTA: JOIN THE LAB */}
          <div className="flex items-center gap-4 self-start lg:self-end w-full sm:w-auto">
            <Link
              to="/auth"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.6)] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>JOIN THE LAB</span>
            </Link>
          </div>
        </section>

        {/* Prototype Environment Notice */}
        <div className="p-4 rounded-2xl bg-[#0e0d15] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-['JetBrains_Mono']">
          <div className="flex items-center gap-2 text-[#ff16f0]">
            <Radio className="w-4 h-4 text-[#ff16f0] animate-pulse shrink-0" />
            <span>COMMUNITY PROTOTYPE // SAMPLE &amp; DEMO PROFILES</span>
          </div>
          <span className="text-[#b9caca]">
            All developer profiles below are simulated demo dataset entries illustrating interest discovery.
          </span>
        </div>

        {/* 2. SEARCH & 3. INTEREST FILTERS */}
        <section className="p-4 sm:p-6 rounded-2xl bg-[#1c1b23]/80 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-6">
          {/* Search Input */}
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00f5ff]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developers or technologies..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/50 shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#b9caca] hover:text-white cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interest Filters */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[#b9caca] font-['JetBrains_Mono'] text-xs uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#00f5ff]" />
              <span>Filter By Technical Interest:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {/* ALL filter button */}
              <button
                onClick={() => setSelectedInterest('ALL')}
                className={`px-3.5 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs transition-all cursor-pointer ${
                  selectedInterest === 'ALL'
                    ? 'bg-[#00f5ff] text-[#0e0d15] font-bold shadow-[0_0_14px_rgba(0,245,255,0.5)]'
                    : 'bg-[#0e0d15] text-[#b9caca] hover:text-white border border-white/5'
                }`}
              >
                ALL [{profilesList.length}]
              </button>

              {/* Exact 14 Interest Filter Buttons */}
              {INTEREST_FILTERS.map((interest) => {
                const count = profilesList.filter((p) => Array.isArray(p?.interests) && p.interests.includes(interest)).length;
                const isSelected = selectedInterest === interest;
                return (
                  <button
                    key={interest}
                    onClick={() => setSelectedInterest(interest)}
                    className={`px-3 py-1.5 rounded-full font-['JetBrains_Mono'] text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#ff16f0] text-white font-bold shadow-[0_0_14px_rgba(255,22,240,0.5)]'
                        : 'bg-[#0e0d15] text-[#b9caca] hover:text-[#00f5ff] border border-white/5'
                    }`}
                  >
                    {interest} {count > 0 && <span className="opacity-70 text-[10px]">[{count}]</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. DEVELOPER CARDS GRID */}
        {filteredDevelopers.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Community Developer Cards">
            {filteredDevelopers.map((dev) => {
              const handleText = dev.handle || 'dev';
              const monogram = handleText.slice(0, 2).toUpperCase();
              const technologies = Array.isArray(dev.technologies) ? dev.technologies : [];
              const interests = Array.isArray(dev.interests) ? dev.interests : [];
              const statusColor = dev.statusColor || '#3bff17';

              return (
                <article
                  key={dev.id}
                  className="relative rounded-2xl bg-[#1c1b23]/80 border border-white/10 p-6 flex flex-col justify-between gap-6 shadow-xl hover:border-[#00f5ff]/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4">
                    {/* Card Header: Monogram Avatar + Handle & Demo Label */}
                    <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#0e0d15] border border-white/10 group-hover:border-[#00f5ff]/40 flex items-center justify-center font-['Syne'] font-extrabold text-base text-[#00f5ff] shadow-inner transition-colors">
                          {monogram}
                        </div>
                        <div>
                          <h3 className="font-['Syne'] font-bold text-lg text-white group-hover:text-[#00f5ff] transition-colors leading-snug">
                            {dev.name || 'Sample Developer'}
                          </h3>
                          <p className="font-['JetBrains_Mono'] text-xs text-[#00f5ff]">
                            @{handleText}
                          </p>
                        </div>
                      </div>

                      {/* Explicit Sample/Demo label */}
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-['JetBrains_Mono'] uppercase tracking-wider bg-[#0e0d15] text-[#b9caca] border border-white/10 shrink-0">
                        {dev.demoLabel || 'Demo Profile'}
                      </span>
                    </div>

                    {/* Technical Focus */}
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff16f0] uppercase tracking-wider block">
                        Technical Focus
                      </span>
                      <p className="font-['Space_Grotesk'] text-sm font-semibold text-white mt-0.5">
                        {dev.technicalFocus || 'Full-Stack Experimenter'}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] leading-relaxed line-clamp-3">
                      {dev.bio || 'Exploring technologies in NEON LAB.'}
                    </p>

                    {/* Interest Tags */}
                    <div className="space-y-1.5 pt-1">
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#00f5ff] uppercase tracking-wider block">
                        Interest Tags
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {interests.map((interest) => (
                          <span
                            key={interest}
                            className="px-2.5 py-0.5 rounded-full bg-[#0e0d15] border border-white/10 font-['JetBrains_Mono'] text-[11px] text-[#efffe4]"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-1.5 pt-1">
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#b9caca] uppercase tracking-wider block">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[#201f27] border border-white/5 font-['JetBrains_Mono'] text-[10px] text-[#00f5ff]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Experiment Count & Availability-Style Decorative Indicator */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2 font-['JetBrains_Mono'] text-xs">
                    {/* Experiment Count */}
                    <div className="flex items-center gap-1.5 text-[#b9caca]">
                      <FlaskConical className="w-3.5 h-3.5 text-[#ff16f0]" />
                      <span>{dev.experimentCount ?? 1} Experiments</span>
                    </div>

                    {/* Availability-Style Decorative Indicator */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: statusColor }}
                      ></span>
                      <span
                        className="text-[11px] font-semibold tracking-wider"
                        style={{ color: statusColor }}
                      >
                        {dev.collaborationStatus || 'OPEN FOR COLLAB'}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          /* 5. EMPTY STATE */
          <div className="p-12 rounded-3xl bg-[#1c1b23]/70 border border-white/10 text-center flex flex-col items-center justify-center gap-4 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#0e0d15] border border-white/10 flex items-center justify-center text-[#ff16f0]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-['Syne'] font-bold text-2xl text-white">
              No matching developer profiles in this demo dataset.
            </h3>
            <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] max-w-md leading-relaxed">
              Try choosing another technical interest filter from the tags above or clearing your search term.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedInterest('ALL');
              }}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#00f5ff] text-[#0e0d15] font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_16px_rgba(0,245,255,0.6)] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 6. JOIN CTA BANNER */}
        <section className="relative rounded-3xl bg-gradient-to-r from-[#1c1b23] via-[#201f27] to-[#120f24] border border-[#00f5ff]/30 p-8 md:p-12 overflow-hidden shadow-2xl mt-4">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f5ff]/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#ff16f0] uppercase tracking-widest block mb-2">
                JOIN THE LABORATORY NETWORK
              </span>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white uppercase">
                YOUR NEXT EXPERIMENT <span className="text-[#00f5ff]">STARTS HERE.</span>
              </h2>
              <p className="font-['Space_Grotesk'] text-sm text-[#b9caca] mt-2">
                Create your builder profile, select your technical interests, and discover other developers in NEON LAB.
              </p>
            </div>
            <Link
              to="/auth"
              className="px-8 py-3.5 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.6)] transition-all flex items-center justify-center gap-2 shrink-0 self-start md:self-center shadow-lg"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>JOIN THE LAB</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
