import React, { createContext, useContext, useState, useEffect } from 'react';
import { DeveloperProfile, COMMUNITY_DEVELOPERS, TechInterest } from '../data/communityData';
import { 
  authService, 
  UserProfile, 
  SignUpPayload, 
  LoginCredentials, 
  OnboardingInterest 
} from '../services/authService';

interface AuthContextType {
  currentUser: DeveloperProfile | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  login: (handleOrEmail: string) => boolean;
  loginWithEmail: (credentials: LoginCredentials) => Promise<UserProfile>;
  signUpWithProfile: (payload: SignUpPayload) => Promise<UserProfile>;
  quickDemoLogin: (developerId: string) => void;
  signup: (profileData: {
    handle: string;
    name: string;
    technicalFocus: string;
    bio: string;
    interests: TechInterest[];
    technologies: string[];
  }) => void;
  logout: () => void;
  toggleInterest: (interest: TechInterest) => void;
  communityProfiles: DeveloperProfile[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'neon_lab_user_session';
const COMMUNITY_KEY = 'neon_lab_community_profiles_v2';
const LEGACY_COMMUNITY_KEY = 'neon_lab_community_profiles';

/**
 * Defensive schema normalizer to guarantee every profile has all required DeveloperProfile fields,
 * gracefully migrating legacy cached data from prior schema iterations.
 */
function sanitizeProfile(raw: any, fallbackId = `dev-${Date.now()}`): DeveloperProfile {
  if (!raw || typeof raw !== 'object') {
    return COMMUNITY_DEVELOPERS[0];
  }
  return {
    id: typeof raw.id === 'string' ? raw.id : fallbackId,
    handle: typeof raw.handle === 'string' && raw.handle.trim() ? raw.handle.trim() : 'builder',
    name: typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : 'Sample Developer',
    demoLabel: (raw.demoLabel || raw.label || 'Demo Profile') as DeveloperProfile['demoLabel'],
    technicalFocus: typeof raw.technicalFocus === 'string' && raw.technicalFocus.trim() 
      ? raw.technicalFocus.trim() 
      : (typeof raw.role === 'string' && raw.role.trim() ? raw.role.trim() : 'Full-Stack & Emerging Tech'),
    bio: typeof raw.bio === 'string' ? raw.bio : 'Exploring emerging web technologies in NEON LAB.',
    interests: Array.isArray(raw.interests) && raw.interests.length > 0 
      ? raw.interests 
      : ['React', 'AI'],
    technologies: Array.isArray(raw.technologies) && raw.technologies.length > 0 
      ? raw.technologies 
      : (Array.isArray(raw.skills) && raw.skills.length > 0 ? raw.skills : ['React', 'TypeScript']),
    experimentCount: typeof raw.experimentCount === 'number' ? raw.experimentCount : 1,
    collaborationStatus: raw.collaborationStatus || 'OPEN FOR COLLAB',
    statusColor: typeof raw.statusColor === 'string' && raw.statusColor ? raw.statusColor : '#3bff17',
  };
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [communityProfiles, setCommunityProfiles] = useState<DeveloperProfile[]>(() => {
    try {
      const stored = localStorage.getItem(COMMUNITY_KEY) || localStorage.getItem(LEGACY_COMMUNITY_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((p, idx) => sanitizeProfile(p, `dev-cached-${idx}`));
        }
      }
    } catch {
      // Fallback on JSON parse error
    }
    return COMMUNITY_DEVELOPERS;
  });

  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    return authService.getCurrentUser();
  });

  const [currentUser, setCurrentUser] = useState<DeveloperProfile | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object') {
          return sanitizeProfile(parsed, 'dev-current');
        }
      }
    } catch {
      // Fallback
    }
    return null;
  });

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore
    }
  }, [currentUser]);

  useEffect(() => {
    try {
      localStorage.setItem(COMMUNITY_KEY, JSON.stringify(communityProfiles));
    } catch {
      // Ignore
    }
  }, [communityProfiles]);

  const loginWithEmail = async (credentials: LoginCredentials): Promise<UserProfile> => {
    const profile = await authService.login(credentials);
    setUserProfile(profile);

    // Sync to developer profile view
    const devProfile: DeveloperProfile = {
      id: profile.id,
      handle: profile.displayName.toLowerCase().replace(/\s+/g, '_'),
      name: profile.displayName,
      demoLabel: 'Demo Profile',
      technicalFocus: profile.interests.slice(0, 2).join(' & ') + ' Prototyper',
      bio: `Exploring ${profile.interests.join(', ')} in the NEON LAB experimental environment.`,
      interests: (profile.interests.filter(i => 
        ['AI', 'ML', 'DL', 'RAG', 'Agentic AI', 'React', 'Next.js', 'WebGL', 'Python', 'Java', 'Testing', 'QA', 'Frontend', 'Full-Stack'].includes(i)
      ) as TechInterest[]),
      technologies: [profile.interests[0] || 'React', 'TypeScript'],
      experimentCount: 1,
      collaborationStatus: 'OPEN FOR COLLAB',
      statusColor: '#3bff17',
    };

    setCurrentUser(devProfile);
    return profile;
  };

  const signUpWithProfile = async (payload: SignUpPayload): Promise<UserProfile> => {
    const profile = await authService.signUp(payload);
    setUserProfile(profile);

    // Sync to developer profile view
    const devProfile: DeveloperProfile = {
      id: profile.id,
      handle: profile.displayName.toLowerCase().replace(/\s+/g, '_'),
      name: profile.displayName,
      demoLabel: 'Demo Profile',
      technicalFocus: profile.interests.slice(0, 2).join(' & ') + ' Prototyper',
      bio: `Exploring ${profile.interests.join(', ')} in the NEON LAB experimental environment.`,
      interests: (profile.interests.filter(i => 
        ['AI', 'ML', 'DL', 'RAG', 'Agentic AI', 'React', 'Next.js', 'WebGL', 'Python', 'Java', 'Testing', 'QA', 'Frontend', 'Full-Stack'].includes(i)
      ) as TechInterest[]),
      technologies: [profile.interests[0] || 'React', 'TypeScript'],
      experimentCount: 1,
      collaborationStatus: 'OPEN FOR COLLAB',
      statusColor: '#3bff17',
    };

    setCommunityProfiles((prev) => [devProfile, ...prev.filter(p => p.id !== devProfile.id)]);
    setCurrentUser(devProfile);
    return profile;
  };

  const login = (handleOrEmail: string) => {
    const clean = handleOrEmail.trim().toLowerCase().replace('@', '');
    const found = communityProfiles.find(
      (p) => p.handle.toLowerCase() === clean || p.name.toLowerCase().includes(clean)
    );
    if (found) {
      setCurrentUser(found);
      const profile: UserProfile = {
        id: found.id,
        displayName: found.name,
        email: `${found.handle}@neonlab.internal`,
        interests: (found.interests || []) as OnboardingInterest[],
        createdAt: new Date().toISOString(),
        sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
      };
      setUserProfile(profile);
      return true;
    }

    const guestUser: DeveloperProfile = {
      id: `demo-dev-${Date.now()}`,
      handle: clean || 'sample_builder',
      name: `Sample Developer [${clean ? clean.toUpperCase() : 'Guest'}]`,
      demoLabel: 'Sample Developer',
      technicalFocus: 'Creative Web & Full-Stack Prototyping',
      bio: 'Exploring interactive protocols, shader pipelines, and AI systems in NEON LAB.',
      interests: ['React', 'AI', 'Testing'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      experimentCount: 2,
      collaborationStatus: 'OPEN FOR COLLAB',
      statusColor: '#3bff17',
    };
    setCommunityProfiles((prev) => [guestUser, ...prev]);
    setCurrentUser(guestUser);
    setUserProfile({
      id: guestUser.id,
      displayName: guestUser.name,
      email: `${guestUser.handle}@neonlab.internal`,
      interests: ['React', 'AI', 'Testing'],
      createdAt: new Date().toISOString(),
      sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
    });
    return true;
  };

  const quickDemoLogin = (developerId: string) => {
    const found = communityProfiles.find((p) => p.id === developerId);
    if (found) {
      setCurrentUser(found);
      setUserProfile({
        id: found.id,
        displayName: found.name,
        email: `${found.handle}@neonlab.internal`,
        interests: (found.interests || []) as OnboardingInterest[],
        createdAt: new Date().toISOString(),
        sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
      });
    }
  };

  const signup = (profileData: {
    handle: string;
    name: string;
    technicalFocus: string;
    bio: string;
    interests: TechInterest[];
    technologies: string[];
  }) => {
    const cleanHandle = profileData.handle.trim().replace('@', '').toLowerCase();
    const newProfile: DeveloperProfile = {
      id: `demo-dev-${Date.now()}`,
      handle: cleanHandle || `builder_${Math.floor(Math.random() * 9000 + 1000)}`,
      name: profileData.name.trim() || 'Sample Developer',
      demoLabel: 'Demo Profile',
      technicalFocus: profileData.technicalFocus.trim() || 'Full-Stack Experimenter',
      bio: profileData.bio.trim() || 'Building modular web systems and exploring AI.',
      interests: profileData.interests.length > 0 ? profileData.interests : ['React', 'AI'],
      technologies: profileData.technologies.length > 0 ? profileData.technologies : ['React', 'TypeScript'],
      experimentCount: 1,
      collaborationStatus: 'OPEN FOR COLLAB',
      statusColor: '#3bff17',
    };

    setCommunityProfiles((prev) => [newProfile, ...prev]);
    setCurrentUser(newProfile);
    setUserProfile({
      id: newProfile.id,
      displayName: newProfile.name,
      email: `${newProfile.handle}@neonlab.internal`,
      interests: (newProfile.interests || []) as OnboardingInterest[],
      createdAt: new Date().toISOString(),
      sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
    });
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
    setUserProfile(null);
  };

  const toggleInterest = (interest: TechInterest) => {
    if (!currentUser) return;
    const currentInterests = currentUser.interests || [];
    const exists = currentInterests.includes(interest);
    const updatedInterests = exists
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest];

    const updatedUser = { ...currentUser, interests: updatedInterests };
    setCurrentUser(updatedUser);
    setCommunityProfiles((prev) =>
      prev.map((p) => (p.id === updatedUser.id ? updatedUser : p))
    );
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        isAuthenticated: !!currentUser,
        login,
        loginWithEmail,
        signUpWithProfile,
        quickDemoLogin,
        signup,
        logout,
        toggleInterest,
        communityProfiles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
