import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  LogOut, 
  Check, 
  Zap, 
  ShieldAlert, 
  Key, 
  Mail, 
  User, 
  Lock, 
  FlaskConical, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ONBOARDING_INTERESTS, OnboardingInterest } from '../services/authService';

export default function Auth() {
  const { userProfile, loginWithEmail, signUpWithProfile, logout } = useAuth();

  // Mode: LOGIN vs SIGN UP
  const [authMode, setAuthMode] = useState<'LOGIN' | 'SIGN UP'>('SIGN UP');

  // Form State
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<OnboardingInterest[]>(['AI', 'React']);
  
  // UI Feedback & Success State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [justInitialized, setJustInitialized] = useState(false);

  const toggleInterest = (interest: OnboardingInterest) => {
    setSelectedInterests((prev) => {
      const exists = prev.includes(interest);
      if (exists) {
        return prev.filter((i) => i !== interest);
      } else {
        return [...prev, interest];
      }
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!displayName.trim()) {
      setErrorMessage('Please enter your Display Name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password.trim() || password.length < 4) {
      setErrorMessage('Password must be at least 4 characters for this prototype.');
      return;
    }
    if (selectedInterests.length === 0) {
      setErrorMessage('Please select at least one technical interest to proceed.');
      return;
    }

    setIsSubmitting(true);
    try {
      await signUpWithProfile({
        displayName: displayName.trim(),
        email: email.trim(),
        password: password.trim(),
        interests: selectedInterests,
      });
      setJustInitialized(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred during sign up.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage('Please enter your email.');
      return;
    }

    setIsSubmitting(true);
    try {
      await loginWithEmail({
        email: email.trim(),
        password: password.trim(),
      });
      setJustInitialized(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Login failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoFill = () => {
    setEmail('demo.explorer@neonlab.dev');
    setPassword('cyberpunk2026');
    setDisplayName('Demo Builder');
    setSelectedInterests(['AI', 'RAG', 'React', 'WebGL', 'Testing']);
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-12 flex flex-col items-center">
        
        {/* Terminal Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b23] border border-[#00f5ff]/30 text-[#00f5ff] font-['JetBrains_Mono'] text-xs tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(0,245,255,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>ACCESS TERMINAL // DEVELOPER ONBOARDING PROTOTYPE</span>
          </div>
          <h1 className="font-['Syne'] font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            {userProfile && !justInitialized ? (
              <span>ACTIVE LAB <span className="text-[#3bff17]">SESSION</span></span>
            ) : authMode === 'SIGN UP' ? (
              <span>JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#ff16f0] to-[#3bff17]">LAB</span></span>
            ) : (
              <span>ACCESS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#ff16f0]">TERMINAL</span></span>
            )}
          </h1>
          <p className="font-['Space_Grotesk'] text-base text-[#b9caca] mt-3">
            Prototype the future NEON LAB developer onboarding experience. Customize your profile and select technical interests.
          </p>
        </div>

        {/* Prototype Environment Notice */}
        <div className="w-full max-w-2xl p-4 rounded-xl bg-[#0e0d15] border border-white/10 flex items-start gap-3 mb-8 font-['Space_Grotesk'] text-xs text-[#b9caca] shadow-lg">
          <ShieldAlert className="w-4 h-4 text-[#ff16f0] shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Frontend-Only Prototype:</strong> This is a client-side mock. No backend, database, JWT, or external API is connected. Your mock session is stored locally in your browser.
          </p>
        </div>

        {/* SUCCESS STATE: "LAB PROFILE INITIALIZED" */}
        {userProfile ? (
          <div className="w-full max-w-2xl rounded-3xl bg-[#1c1b23]/95 border border-[#3bff17]/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,255,23,0.15)] p-8 sm:p-10 flex flex-col gap-8 animate-fadeIn">
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0e0d15] border border-[#3bff17]/40 flex items-center justify-center font-['Syne'] font-extrabold text-2xl text-[#3bff17] shadow-[0_0_20px_rgba(59,255,23,0.25)]">
                  <CheckCircle2 className="w-7 h-7 text-[#3bff17]" />
                </div>
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#3bff17] uppercase tracking-widest font-semibold block">
                    ONBOARDING COMPLETE
                  </span>
                  <h2 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
                    LAB PROFILE INITIALIZED
                  </h2>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#0e0d15] border border-[#3bff17]/40 text-[#3bff17] font-['JetBrains_Mono'] text-xs flex items-center gap-1.5 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#3bff17] animate-pulse"></span>
                SESSION ONLINE
              </span>
            </div>

            {/* Display Name & Email */}
            <div className="flex flex-col gap-2 p-5 rounded-2xl bg-[#0e0d15] border border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase">
                  Display Name:
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#00f5ff]">
                  {userProfile.email}
                </span>
              </div>
              <div className="font-['Syne'] font-bold text-2xl text-white">
                {userProfile.displayName}
              </div>
            </div>

            {/* Selected Interests */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff16f0] uppercase tracking-wider font-semibold">
                  Selected Technical Interests:
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#b9caca]">
                  {userProfile.interests.length} Domains Selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 rounded-full bg-[#0e0d15] border border-[#00f5ff]/40 font-['JetBrains_Mono'] text-xs text-[#efffe4] shadow-[0_0_10px_rgba(0,245,255,0.15)] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff]"></span>
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {/* Button 1: EXPLORE EXPERIMENTS */}
              <Link
                to="/experiments"
                className="py-3.5 px-6 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FlaskConical className="w-4 h-4" />
                <span>EXPLORE EXPERIMENTS</span>
              </Link>

              {/* Button 2: EXPLORE COMMUNITY */}
              <Link
                to="/community"
                className="py-3.5 px-6 rounded-full bg-[#2a2932] hover:bg-[#35343d] border border-white/10 text-white font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:border-[#ff16f0] hover:text-[#ff16f0] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Users className="w-4 h-4 text-[#ff16f0]" />
                <span>EXPLORE COMMUNITY</span>
              </Link>
            </div>

            {/* Disconnect/Reset Session Option */}
            <div className="flex items-center justify-between pt-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#b9caca]">
                Need to test a different onboarding flow?
              </span>
              <button
                onClick={() => {
                  logout();
                  setJustInitialized(false);
                }}
                className="font-['JetBrains_Mono'] text-xs text-[#ff16f0] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Reset Demo Session</span>
              </button>
            </div>
          </div>
        ) : (
          /* AUTHENTICATION FORM CONTAINER */
          <div className="w-full max-w-2xl rounded-3xl bg-[#1c1b23]/90 border border-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 flex flex-col gap-6">
            
            {/* Mode Switcher Tabs: LOGIN vs SIGN UP */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#0e0d15] border border-white/5 font-['JetBrains_Mono'] text-xs">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('SIGN UP');
                  setErrorMessage(null);
                }}
                className={`py-3 rounded-xl transition-all cursor-pointer font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
                  authMode === 'SIGN UP'
                    ? 'bg-[#00f5ff] text-[#0e0d15] shadow-[0_0_16px_rgba(0,245,255,0.4)]'
                    : 'text-[#b9caca] hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>SIGN UP</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthMode('LOGIN');
                  setErrorMessage(null);
                }}
                className={`py-3 rounded-xl transition-all cursor-pointer font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
                  authMode === 'LOGIN'
                    ? 'bg-[#00f5ff] text-[#0e0d15] shadow-[0_0_16px_rgba(0,245,255,0.4)]'
                    : 'text-[#b9caca] hover:text-white'
                }`}
              >
                <Key className="w-3.5 h-3.5" />
                <span>LOGIN</span>
              </button>
            </div>

            {/* Error Message Feedback */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-[#ff16f0]/15 border border-[#ff16f0]/40 text-[#ffaced] font-['Space_Grotesk'] text-xs flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-[#ff16f0] shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Quick Demo Fill Helper */}
            <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-[#0e0d15] border border-white/5 text-xs font-['JetBrains_Mono']">
              <span className="text-[#b9caca]">Prototype quick test:</span>
              <button
                type="button"
                onClick={handleDemoFill}
                className="text-[#00f5ff] hover:text-[#3bff17] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
              >
                Auto-fill demo credentials
              </button>
            </div>

            {/* MODE 1: SIGN UP */}
            {authMode === 'SIGN UP' && (
              <form onSubmit={handleSignUp} className="flex flex-col gap-6">
                
                {/* SIGN UP Fields: Display Name, Email, Password */}
                <div className="flex flex-col gap-4">
                  {/* Field 1: Display Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#00f5ff]" />
                      <span>Display Name *</span>
                    </label>
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="e.g. Maya Chen / CyberBuilder"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/40"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#00f5ff]" />
                      <span>Email *</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@neonlab.dev"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/40"
                    />
                  </div>

                  {/* Field 3: Password */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#00f5ff]" />
                      <span>Password *</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/40"
                    />
                    <span className="font-['JetBrains_Mono'] text-[10px] text-[#b9caca]">
                      Frontend prototype: passwords are not sent over network.
                    </span>
                  </div>
                </div>

                {/* Section: "WHAT ARE YOU INTO?" with 15 Selectable Interest Chips */}
                <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-['Syne'] font-extrabold text-lg text-white uppercase tracking-wide">
                        WHAT ARE YOU INTO?
                      </h3>
                      <p className="font-['Space_Grotesk'] text-xs text-[#b9caca] mt-0.5">
                        Select at least one technical interest to personalize your lab experience.
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#0e0d15] border border-white/10 font-['JetBrains_Mono'] text-[11px] text-[#00f5ff] shrink-0">
                      {selectedInterests.length} Selected
                    </span>
                  </div>

                  {/* Selectable Interest Chips Grid */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {ONBOARDING_INTERESTS.map((interest) => {
                      const isSelected = selectedInterests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(interest)}
                          className={`px-3.5 py-2 rounded-full font-['JetBrains_Mono'] text-xs transition-all cursor-pointer flex items-center gap-2 ${
                            isSelected
                              ? 'bg-[#3bff17] text-[#0e0d15] font-bold shadow-[0_0_14px_rgba(59,255,23,0.5)] border border-[#3bff17]'
                              : 'bg-[#0e0d15] text-[#b9caca] hover:text-white hover:border-[#00f5ff]/40 border border-white/10'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                          )}
                          <span>{interest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Sign Up Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 w-full py-4 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>INITIALIZING LAB PROFILE...</span>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 fill-current" />
                      <span>INITIALIZE LAB PROFILE</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* MODE 2: LOGIN */}
            {authMode === 'LOGIN' && (
              <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {/* Login Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-wider flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#00f5ff]" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="developer@neonlab.dev"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/40"
                    />
                  </div>

                  {/* Login Password */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['JetBrains_Mono'] text-xs text-[#b9caca] uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#00f5ff]" />
                      <span>Password</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0d15] border border-white/10 text-white font-['JetBrains_Mono'] text-xs focus:outline-none focus:border-[#00f5ff] transition-colors placeholder:text-[#b9caca]/40"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 rounded-full bg-[#00f5ff] hover:bg-[#3bff17] text-[#0e0d15] font-['JetBrains_Mono'] text-xs uppercase font-bold tracking-wider hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>AUTHENTICATING PROTOTYPE...</span>
                  ) : (
                    <>
                      <Key className="w-4 h-4" />
                      <span>SIGN IN TO LAB</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
