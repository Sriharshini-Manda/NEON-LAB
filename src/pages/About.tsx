import { useState } from 'react';
import { 
  MapPin, 
  Linkedin, 
  MessageSquare, 
  Radar, 
  Terminal, 
  Star, 
  Rocket, 
  Layers, 
  Cpu, 
  Brain, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Mail, 
  Send, 
  Globe, 
  Github,
  GraduationCap,
  Award,
  Briefcase,
  FolderGit2,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Database,
  Code,
  ShieldCheck,
  CheckCircle,
  FileCheck
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

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

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-10 flex flex-col gap-16">
        
        {/* 1. INTRO & PROFILE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Authentic Profile Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative rounded-2xl bg-[#1c1b23]/90 border border-white/10 p-5 shadow-2xl overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#00f5ff]/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#ff16f0]/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Futuristic Cyberpunk Monogram & Avatar Badge */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#0e0d15] via-[#161423] to-[#0e0d15] border border-white/10 shadow-[0_0_24px_rgba(0,245,255,0.15)] mb-4 flex flex-col items-center justify-center p-6 text-center group-hover:border-[#00f5ff]/40 transition-colors">
                {/* Tech Grid Background Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,22,240,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#1c1b23] border border-[#00f5ff]/40 shadow-[0_0_24px_rgba(0,245,255,0.25)] flex items-center justify-center mb-3">
                  <span className="font-['Syne'] font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#00f5ff] via-white to-[#ff16f0]">
                    SM
                  </span>
                </div>
                <div className="relative z-10 font-['Syne'] font-bold text-xl text-white tracking-wide">
                  {PROFILE_DATA.name}
                </div>
                <div className="relative z-10 font-['JetBrains_Mono'] text-[11px] text-[#00f5ff] mt-1">
                  {PROFILE_DATA.careerStage}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#3bff17] bg-[#0e0d15]/90 border border-[#3bff17]/30 px-2 py-0.5 rounded-full backdrop-blur-md">
                    MCA 2024–2026
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[10px] text-[#b9caca] bg-[#0e0d15]/90 border border-white/5 px-2 py-0.5 rounded-full">
                    PUNE, IN
                  </span>
                </div>
              </div>

              {/* Status & Availability */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e0d15]/80 border border-[#3bff17]/25 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3bff17] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3bff17] shadow-[0_0_8px_rgba(59,255,23,0.9)]"></span>
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#efffe4] uppercase tracking-wider font-medium truncate">
                    {PROFILE_DATA.status}
                  </span>
                </div>

                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#201f27] font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                  <span className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#00f5ff]" />
                    {PROFILE_DATA.location}
                  </span>
                  <span className="text-[#00f5ff] font-medium text-[11px] flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00f5ff]" />
                    MCA '26
                  </span>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <a
                    href={PROFILE_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub: Sriharshini-Manda"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#201f27] hover:bg-[#2a2932] transition-colors text-[#b9caca] hover:text-[#00f5ff]"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-['JetBrains_Mono'] text-[10px] mt-1">Git</span>
                  </a>
                  <a
                    href={PROFILE_DATA.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    title="Portfolio: Sriharshini Manda"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#201f27] hover:bg-[#2a2932] transition-colors text-[#b9caca] hover:text-[#ff16f0]"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="font-['JetBrains_Mono'] text-[10px] mt-1">Site</span>
                  </a>
                  <a
                    href={PROFILE_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn: Sriharshini Manda"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#201f27] hover:bg-[#2a2932] transition-colors text-[#b9caca] hover:text-[#00f5ff]"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="font-['JetBrains_Mono'] text-[10px] mt-1">In</span>
                  </a>
                  <button
                    onClick={handleCopyDiscord}
                    type="button"
                    title="Copy Discord: sriharshinimanda"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#201f27] hover:bg-[#2a2932] transition-colors text-[#b9caca] hover:text-[#3bff17] cursor-pointer"
                  >
                    {copiedDiscord ? <CheckCircle2 className="w-4 h-4 text-[#3bff17]" /> : <MessageSquare className="w-4 h-4" />}
                    <span className="font-['JetBrains_Mono'] text-[10px] mt-1">
                      {copiedDiscord ? 'Copied' : 'Discord'}
                    </span>
                  </button>
                </div>

                {/* Primary External Portfolio & Resume Link */}
                <a
                  href={PROFILE_DATA.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#2a2932] hover:bg-[#00f5ff] text-white hover:text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase tracking-wider transition-all duration-300 border border-white/5 shadow-md font-semibold cursor-pointer group"
                >
                  <Globe className="w-4 h-4" />
                  <span>View Live Portfolio &amp; Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Current Lab Focus Box */}
            <div className="rounded-xl bg-[#0e0d15] border border-white/10 p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <Radar className="w-5 h-5 text-[#00f5ff]" />
                <div>
                  <p className="font-['JetBrains_Mono'] text-[10px] text-[#b9caca] uppercase">Current Focus</p>
                  <p className="font-['JetBrains_Mono'] text-xs text-white font-medium">{PROFILE_DATA.currentFocus}</p>
                </div>
              </div>
              <span className="font-['JetBrains_Mono'] text-xs px-2.5 py-0.5 rounded bg-[#2a2932] text-[#3bff17] border border-[#3bff17]/20 whitespace-nowrap">
                LAB ACTIVE
              </span>
            </div>
          </div>

          {/* Right Column: Narrative, Academic Background & Core Disciplines */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#ff16f0]/30 text-[#ff16f0] font-['JetBrains_Mono'] text-xs tracking-widest uppercase w-fit shadow-[0_0_12px_rgba(255,22,240,0.15)]">
                <Terminal className="w-3.5 h-3.5" />
                <span>ACADEMIC &amp; DEVELOPER PROFILE // PUNE, INDIA</span>
              </div>
              <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight leading-tight">
                Full-stack engineering, <span className="text-[#00f5ff] drop-shadow-[0_0_16px_rgba(0,245,255,0.4)]">AI/ML exploration</span>, &amp; software quality.
              </h1>
            </div>

            {/* Authentic Positioning Narrative */}
            <div className="bg-[#1c1b23]/70 border border-white/10 rounded-2xl p-6 shadow-md flex flex-col gap-4">
              <p className="font-['Space_Grotesk'] text-lg text-white leading-relaxed">
                Hi, I'm <strong className="text-[#00f5ff] font-medium">{PROFILE_DATA.name}</strong> — {PROFILE_DATA.bioSummary}
              </p>
              <p className="font-['Space_Grotesk'] text-base text-[#b9caca] leading-relaxed">
                {PROFILE_DATA.bioParagraphs[0]}
              </p>
              <p className="font-['Space_Grotesk'] text-base text-[#b9caca] leading-relaxed">
                {PROFILE_DATA.bioParagraphs[1]}
              </p>
            </div>

            {/* Verified Disciplines (Section 1 of Specification) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROFILE_DATA.corePillars.map((item) => (
                <div
                  key={item.num}
                  className="p-5 rounded-2xl bg-[#1c1b23]/80 border border-white/10 flex flex-col justify-between gap-3 hover:-translate-y-1 transition-transform duration-300 shadow-md"
                >
                  <div>
                    <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider block mb-1" style={{ color: item.color }}>
                      {item.num}
                    </span>
                    <h3 className="font-['Syne'] font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-full h-1 bg-[#2a2932] rounded-full overflow-hidden mt-3">
                    <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: item.color }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Highlights Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0e0d15] border border-white/10 p-5 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-['Syne'] font-bold text-xl text-white">{PROFILE_DATA.stats[0].value}</p>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase">{PROFILE_DATA.stats[0].label}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff16f0]/10 border border-[#ff16f0]/30 flex items-center justify-center text-[#ff16f0]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-['Syne'] font-bold text-xl text-[#ffaced]">{PROFILE_DATA.stats[1].value}</p>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase">{PROFILE_DATA.stats[1].label}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff9900]/10 border border-[#ff9900]/30 flex items-center justify-center text-[#ff9900]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-['Syne'] font-bold text-xl text-[#ff9900]">{PROFILE_DATA.stats[2].value}</p>
                  <p className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase">{PROFILE_DATA.stats[2].label}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HANDS-ON TECHNOLOGY EXPOSURE SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="tech-exposure-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2">
                <Code className="w-3.5 h-3.5" />
                <span>HANDS-ON LEARNING &amp; PROJECT EXPOSURE</span>
              </div>
              <h2 id="tech-exposure-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase">
                HANDS-ON TECHNOLOGY EXPOSURE
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-md leading-relaxed">
              These durations represent hands-on learning, academic coursework, and project experimentation exposure across personal and academic builds. They do NOT represent professional employment durations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {PROFILE_DATA.techExposure.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl bg-[#1c1b23]/80 border border-white/10 p-3.5 flex items-center justify-between shadow-md hover:border-[#00f5ff]/40 transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="font-['JetBrains_Mono'] text-[9px] text-[#b9caca] uppercase tracking-wider">
                    {tech.category}
                  </span>
                  <h3 className="font-['Syne'] font-bold text-sm text-white group-hover:text-[#00f5ff] transition-colors mt-0.5">
                    {tech.name}
                  </h3>
                </div>
                <span
                  className="font-['JetBrains_Mono'] text-xs px-2.5 py-0.5 rounded-full font-bold bg-[#0e0d15] border border-white/10 shrink-0 ml-2"
                  style={{ color: tech.color }}
                >
                  {tech.duration}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TESTING & QUALITY ASSURANCE SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="testing-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#3bff17]/30 text-[#3bff17] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>SOFTWARE QUALITY &amp; VERIFICATION DISCIPLINE</span>
              </div>
              <h2 id="testing-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase">
                TESTING &amp; QUALITY ASSURANCE
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-md leading-relaxed">
              Practices, testing methodologies, and verification tools utilized across API, functional, and database validation workflows. (No experience durations assigned).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1c1b23]/80 border border-white/10 shadow-lg">
            <div className="flex flex-wrap gap-2.5">
              {PROFILE_DATA.qaPractices.map((practice) => (
                <div
                  key={practice}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0e0d15] border border-white/10 hover:border-[#3bff17]/40 text-[#efffe4] font-['JetBrains_Mono'] text-xs transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3bff17]"></span>
                  <span>{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. REAL INTERNSHIP EXPERIENCE SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="experience-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#3bff17]/30 text-[#3bff17] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>PRACTICAL INDUSTRY EXPERIENCE // INTERNSHIPS</span>
              </div>
              <h2 id="experience-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase">
                INTERNSHIP EXPERIENCE
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-md leading-relaxed">
              Applied engineering internships focused on backend services, database integrations, campus deployment, and AI research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROFILE_DATA.experience.map((exp) => (
              <div
                key={exp.id}
                className="relative rounded-2xl bg-[#1c1b23]/80 border border-white/10 p-6 flex flex-col justify-between gap-6 shadow-xl hover:border-[#00f5ff]/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <span className="font-['JetBrains_Mono'] text-xs text-[#00f5ff] uppercase font-semibold">
                        {exp.type}
                      </span>
                      <h3 className="font-['Syne'] font-bold text-xl text-white mt-1">
                        {exp.role}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-sm text-[#ffaced] mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e0d15] border border-white/10 font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                      <Calendar className="w-3.5 h-3.5 text-[#3bff17]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 font-['Space_Grotesk'] text-xs text-[#b9caca] leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] mt-1.5 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#0e0d15] border border-white/5 font-['JetBrains_Mono'] text-[11px] text-[#e5e0ed]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. VERIFIED ACHIEVEMENTS & CERTIFICATIONS SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="achievements-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#ff16f0]/30 text-[#ff16f0] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>COMPETITIVE RECOGNITION &amp; CERTIFICATIONS</span>
              </div>
              <h2 id="achievements-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase">
                ACHIEVEMENTS &amp; CERTIFICATIONS
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-md leading-relaxed">
              Demonstrated competitive excellence in national AI olympiads, state buildathons, and cloud certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* AWS Certified Cloud Practitioner Card */}
            {PROFILE_DATA.certifications.map((cert) => (
              <div
                key={cert.name}
                className="relative rounded-2xl bg-[#0e0d15] border border-white/10 p-6 flex flex-col justify-between gap-4 shadow-lg hover:border-[#ff9900]/40 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-full font-['JetBrains_Mono'] text-[11px] font-semibold uppercase text-[#ff9900] bg-[#ff9900]/15 border border-[#ff9900]/40"
                    >
                      {cert.status}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#ff9900]" />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-white group-hover:text-[#ff9900] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-[#b9caca] mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <p className="font-['Space_Grotesk'] text-xs text-[#e5e0ed] leading-relaxed">
                    Official cloud practitioner certification verifying foundational knowledge of AWS cloud architecture, security, and services.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-['JetBrains_Mono'] text-xs text-[#ff9900] font-medium flex items-center justify-between">
                  <span>Target / Verified:</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}

            {/* Achievements Cards */}
            {PROFILE_DATA.achievements.map((ach) => (
              <div
                key={ach.title}
                className="relative rounded-2xl bg-[#0e0d15] border border-white/10 p-6 flex flex-col justify-between gap-4 shadow-lg hover:border-[#ff16f0]/40 transition-colors group"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded-full font-['JetBrains_Mono'] text-[11px] font-semibold uppercase"
                      style={{ color: ach.badgeColor, backgroundColor: `${ach.badgeColor}15`, border: `1px solid ${ach.badgeColor}40` }}
                    >
                      VERIFIED
                    </span>
                    <Sparkles className="w-4 h-4" style={{ color: ach.badgeColor }} />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg text-white group-hover:text-[#00f5ff] transition-colors">
                      {ach.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-[#b9caca] mt-0.5">
                      {ach.organization}
                    </p>
                  </div>
                  <p className="font-['Space_Grotesk'] text-xs text-[#e5e0ed] leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 font-['JetBrains_Mono'] text-xs text-[#3bff17] font-medium">
                  {ach.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. VERIFIED PROJECT HIGHLIGHTS SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="projects-heading">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>PRACTICAL APPLICATION BUILDS</span>
              </div>
              <h2 id="projects-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase">
                FEATURED PROJECTS
              </h2>
            </div>
            <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] max-w-md leading-relaxed">
              Highlighted academic and independent projects built with real full-stack, AI recommendation, and prediction architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROFILE_DATA.projects.map((proj) => (
              <div
                key={proj.id}
                className="relative rounded-2xl bg-[#1c1b23]/80 border border-white/10 p-6 flex flex-col justify-between gap-6 shadow-xl hover:border-[#00f5ff]/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="font-['Syne'] font-bold text-2xl text-white">
                        {proj.title}
                      </h3>
                      <p className="font-['Space_Grotesk'] text-xs text-[#00f5ff] mt-0.5">
                        {proj.tagline}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0e0d15] border border-white/10 text-[#00f5ff]">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#b9caca] leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <p className="font-['JetBrains_Mono'] text-[11px] text-[#ff16f0] uppercase tracking-wider font-semibold">
                      Key Technical Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.focusAreas.map((fa) => (
                        <span
                          key={fa}
                          className="px-2 py-0.5 rounded-md bg-[#0e0d15] border border-white/5 font-['JetBrains_Mono'] text-[11px] text-[#b9caca]"
                        >
                          • {fa}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-[#201f27] border border-white/5 font-['JetBrains_Mono'] text-[10px] text-[#00f5ff]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. LEARNING & BUILD ROADMAP SECTION */}
        <section className="flex flex-col gap-6 pt-4" aria-labelledby="roadmap-heading">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-2 shadow-[0_0_12px_rgba(0,245,255,0.15)]">
                <Terminal className="w-3.5 h-3.5 text-[#00f5ff]" />
                <span>PROJECT PROGRESSION // ARCHITECTURAL EVOLUTION</span>
              </div>
              <h2 id="roadmap-heading" className="font-['Syne'] font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight">
                LEARNING &amp; BUILD ROADMAP
              </h2>
              <p className="font-['Space_Grotesk'] text-sm md:text-base text-[#b9caca] max-w-3xl mt-2 leading-relaxed">
                This roadmap represents the technologies and engineering areas being explored through NEON LAB. The current application is maintained strictly as a frontend-only playground, while the underlying architecture is engineered to be intentionally flexible to expand later.
              </p>
            </div>

            {/* Semantic Rules & Status Legend */}
            <div className="flex flex-wrap items-center gap-2 font-['JetBrains_Mono'] text-xs">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0e0d15] border border-[#3bff17]/30 text-[#3bff17]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3bff17] animate-pulse"></span>
                ACTIVE: In Current Lab
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0e0d15] border border-[#00f5ff]/30 text-[#00f5ff]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff]"></span>
                NEXT: Next Focus
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0e0d15] border border-[#ff16f0]/30 text-[#ff16f0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff16f0]"></span>
                PLANNED: Future Expansion
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mt-2">
            {PROFILE_DATA.learningRoadmap.map((item, index) => {
              const isFirstRow = index < 3;
              const colSpan = isFirstRow ? 'lg:col-span-4' : 'lg:col-span-6';
              const isStatusActive = item.status === 'ACTIVE';
              const isStatusNext = item.status === 'NEXT';

              const borderColor = isStatusActive
                ? 'border-[#3bff17]/25 hover:border-[#3bff17]/60 hover:shadow-[0_0_24px_rgba(59,255,23,0.15)]'
                : isStatusNext
                ? 'border-[#00f5ff]/25 hover:border-[#00f5ff]/60 hover:shadow-[0_0_24px_rgba(0,245,255,0.15)]'
                : 'border-[#ff16f0]/25 hover:border-[#ff16f0]/60 hover:shadow-[0_0_24px_rgba(255,22,240,0.15)]';

              return (
                <div
                  key={item.step}
                  className={`relative rounded-2xl bg-[#0e0d15]/90 border ${borderColor} p-6 flex flex-col justify-between gap-5 transition-all duration-300 group backdrop-blur-sm ${colSpan}`}
                >
                  <div className="flex flex-col gap-3">
                    {/* Header: 01 — FOUNDATION style header and Status badge */}
                    <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <h3 className="font-['Syne'] font-extrabold text-base sm:text-lg text-white tracking-wide">
                        {item.step} — {item.phase}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-['JetBrains_Mono'] text-[11px] font-semibold tracking-wider ${
                          isStatusActive
                            ? 'bg-[#3bff17]/10 text-[#3bff17] border border-[#3bff17]/30'
                            : isStatusNext
                            ? 'bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30'
                            : 'bg-[#ff16f0]/10 text-[#ff16f0] border border-[#ff16f0]/30'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isStatusActive
                              ? 'bg-[#3bff17] animate-pulse'
                              : isStatusNext
                              ? 'bg-[#00f5ff]'
                              : 'bg-[#ff16f0]'
                          }`}
                        ></span>
                        Status: {item.status}
                      </span>
                    </div>

                    {/* Prominent skills bulleted sequence */}
                    <div className="font-['JetBrains_Mono'] text-sm text-[#00f5ff] font-medium tracking-wide">
                      {item.skillsFormatted}
                    </div>

                    {/* Architectural detail description */}
                    <p className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#b9caca] leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  {/* Semantic Meaning footer indicator */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between font-['JetBrains_Mono'] text-[11px]">
                    <span className="text-[#8e8d98]">
                      {item.semanticMeaning}
                    </span>
                    <span className="text-white/40 group-hover:text-white transition-colors">
                      PHASE_{item.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. CONTACT & COLLABORATION TRANSCEIVER */}
        <section className="relative rounded-3xl bg-[#0e0d15] border border-white/10 p-6 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden my-4">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00f5ff]/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#ff16f0]/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Console Window Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca] ml-2">
                transceiver://sriharshini.dev/connect
              </span>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#3bff17] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3bff17] animate-pulse"></span>
              COMMUNICATION CHANNEL
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-['JetBrains_Mono'] text-xs text-[#ff16f0] uppercase tracking-widest">
                Transmission Request
              </span>
              <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white uppercase">
                Let's connect &amp; <span className="text-[#00f5ff] drop-shadow-[0_0_12px_rgba(0,245,255,0.4)]">collaborate.</span>
              </h2>
              <p className="font-['Space_Grotesk'] text-base text-[#b9caca] max-w-xl">
                Open to full-stack, frontend engineering, QA/testing, and AI project opportunities, as well as collaborative open-source explorations.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1b23] border border-white/10 font-['JetBrains_Mono'] text-xs text-white">
                  <Mail className="w-4 h-4 text-[#ff16f0]" />
                  <span>{PROFILE_DATA.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 text-[#b9caca] hover:text-[#00f5ff] transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-[#3bff17]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c1b23] border border-white/10 font-['JetBrains_Mono'] text-xs text-white">
                  <MessageSquare className="w-4 h-4 text-[#00f5ff]" />
                  <span>Discord: <strong className="text-[#00f5ff] font-medium">{PROFILE_DATA.discord}</strong></span>
                  <button
                    onClick={handleCopyDiscord}
                    className="ml-2 text-[#b9caca] hover:text-[#00f5ff] transition-colors cursor-pointer"
                    title="Copy Discord Username"
                  >
                    {copiedDiscord ? <CheckCircle2 className="w-3.5 h-3.5 text-[#3bff17]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3">
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Collaboration%20Inquiry%20-%20Sriharshini%20Manda`}
                className="w-full sm:w-auto relative p-[2px] rounded-full overflow-hidden group shadow-[0_0_24px_rgba(0,245,255,0.4)] hover:shadow-[0_0_36px_rgba(255,16,240,0.6)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#00f5ff] animate-pulse"></div>
                <div className="relative px-8 py-3.5 bg-[#0e0d15] rounded-full group-hover:bg-transparent transition-colors duration-200 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4 text-[#00f5ff] group-hover:text-[#0e0d15]" />
                  <span className="font-['JetBrains_Mono'] text-xs text-white uppercase tracking-wider font-bold group-hover:text-[#0e0d15]">
                    Initiate Transmission →
                  </span>
                </div>
              </a>
              <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                Expected Turnaround: &lt; 24 Hours
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
