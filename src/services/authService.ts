/**
 * NEON LAB Authentication Service Interface & Frontend Mock Implementation.
 * 
 * ARCHITECTURAL NOTE:
 * This layer abstracts all authentication operations behind a clean TypeScript contract.
 * In production, this mock can be replaced with a real provider (Firebase Auth, Supabase,
 * or custom REST/OAuth backend) without modifying UI components or routing.
 */

export type OnboardingInterest =
  | 'AI'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'RAG'
  | 'Agentic AI'
  | 'React'
  | 'Next.js'
  | 'WebGL'
  | 'Python'
  | 'Java'
  | 'Testing'
  | 'QA'
  | 'Frontend'
  | 'Full-Stack'
  | 'Generative UI';

export const ONBOARDING_INTERESTS: OnboardingInterest[] = [
  'AI',
  'Machine Learning',
  'Deep Learning',
  'RAG',
  'Agentic AI',
  'React',
  'Next.js',
  'WebGL',
  'Python',
  'Java',
  'Testing',
  'QA',
  'Frontend',
  'Full-Stack',
  'Generative UI',
];

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  interests: OnboardingInterest[];
  createdAt: string;
  sessionToken: string; // Simulated client token
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface SignUpPayload {
  displayName: string;
  email: string;
  password?: string;
  interests: OnboardingInterest[];
}

export interface IAuthService {
  getCurrentUser(): UserProfile | null;
  login(credentials: LoginCredentials): Promise<UserProfile>;
  signUp(data: SignUpPayload): Promise<UserProfile>;
  logout(): Promise<void>;
}

const STORAGE_SESSION_KEY = 'neon_lab_auth_session';

/**
 * Frontend-only mock implementation using browser localStorage.
 * Does NOT transmit passwords or communicate with external servers.
 */
class MockAuthService implements IAuthService {
  getCurrentUser(): UserProfile | null {
    try {
      const stored = localStorage.getItem(STORAGE_SESSION_KEY);
      if (stored) {
        return JSON.parse(stored) as UserProfile;
      }
    } catch {
      // LocalStorage access errors handled gracefully
    }
    return null;
  }

  async login(credentials: LoginCredentials): Promise<UserProfile> {
    // Simulated network delay for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 350));

    const existingUser = this.getCurrentUser();
    if (existingUser && existingUser.email.toLowerCase() === credentials.email.toLowerCase()) {
      return existingUser;
    }

    // Default mock profile if logging in directly without previous signup
    const user: UserProfile = {
      id: `usr_${Date.now()}`,
      displayName: credentials.email.split('@')[0] || 'Demo Explorer',
      email: credentials.email,
      interests: ['AI', 'React', 'Generative UI'],
      createdAt: new Date().toISOString(),
      sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
    };

    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    return user;
  }

  async signUp(data: SignUpPayload): Promise<UserProfile> {
    await new Promise((resolve) => setTimeout(resolve, 400));

    if (!data.interests || data.interests.length === 0) {
      throw new Error('At least one technical interest is required.');
    }

    const user: UserProfile = {
      id: `usr_${Date.now()}`,
      displayName: data.displayName.trim(),
      email: data.email.trim(),
      interests: data.interests,
      createdAt: new Date().toISOString(),
      sessionToken: `mock_tok_${Math.random().toString(36).substring(2)}`,
    };

    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    return user;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(STORAGE_SESSION_KEY);
  }
}

export const authService = new MockAuthService();
