export interface Experiment {
  id: string;
  code: string;
  title: string;
  category: 'ai' | 'ui' | 'frontend' | 'animation';
  categoryLabel: string;
  statusBadge: string;
  statusType: 'stable' | 'experimental' | 'prod' | 'beta';
  stars: number;
  description: string;
  tags: string[];
  metaNote?: string;
  demoBadge?: string;
  canvasType: 'nodeGraph' | 'kineticVox' | 'shellOs' | 'quantumColor' | 'voiceHud' | 'fluidShader';
}

export const EXPERIMENTS_DATA: Experiment[] = [
  {
    id: 'neural-latent-diver',
    code: '#001',
    title: 'NEURAL LATENT DIVER',
    category: 'ai',
    categoryLabel: 'AI & Generative',
    statusBadge: 'STABLE v1.4',
    statusType: 'stable',
    stars: 940,
    description: 'Real-time visual manipulation of multidimensional embeddings using WebGL shaders and lightweight ONNX runtime in-browser.',
    tags: ['ONNX Runtime', 'WebGL', 'React', 'Tailwind'],
    metaNote: 'LATENT_DIM: 512',
    demoBadge: 'WebGL Compute',
    canvasType: 'nodeGraph',
  },
  {
    id: 'kinetic-type-matrix',
    code: '#002',
    title: 'KINETIC TYPE MATRIX',
    category: 'animation',
    categoryLabel: 'Animation & WebGL',
    statusBadge: 'EXPERIMENTAL',
    statusType: 'experimental',
    stars: 1280,
    description: 'Variable font typography engine that deforms and explodes based on microphone input and cursor velocity vectors.',
    tags: ['Three.js', 'WebAudio', 'Opentype.js'],
    metaNote: 'AUDIO_REACTIVE: ON',
    demoBadge: 'WebAudio Reactive',
    canvasType: 'kineticVox',
  },
  {
    id: 'glassmorphic-shell-os',
    code: '#003',
    title: 'GLASSMORPHIC SHELL OS',
    category: 'ui',
    categoryLabel: 'UI & Micro-interactions',
    statusBadge: 'STABLE v2.1',
    statusType: 'stable',
    stars: 2140,
    description: 'A spatial desktop-in-browser interface mimicking a futuristic terminal OS with draggable windows and neon drop shadows.',
    tags: ['Next.js 14', 'Zustand', 'Framer Motion'],
    metaNote: 'DRAGGABLE: MULTI-TOUCH',
    demoBadge: 'Spatial UI',
    canvasType: 'shellOs',
  },
  {
    id: 'quantum-color-engine',
    code: '#004',
    title: 'QUANTUM COLOR ENGINE',
    category: 'frontend',
    categoryLabel: 'Frontend & Core',
    statusBadge: 'PROD READY',
    statusType: 'prod',
    stars: 890,
    description: 'Algorithmic palette generator for ultra-high contrast dark mode UI systems using OKLCH color space mathematics.',
    tags: ['TypeScript', 'OKLCH', 'CSS Variables'],
    metaNote: 'ALGO: OKLCH P3 GAMUT',
    demoBadge: 'WCAG AAA: PASS',
    canvasType: 'quantumColor',
  },
  {
    id: 'voice-agent-hud',
    code: '#005',
    title: 'VOICE AGENT HUD',
    category: 'ai',
    categoryLabel: 'AI & Generative',
    statusBadge: 'BETA v0.9',
    statusType: 'beta',
    stars: 1420,
    description: 'Cyberpunk heads-up display audio interface for multimodal AI voice streams with live speech spectrum analyzer.',
    tags: ['WebSockets', 'WebAudio', 'Canvas 2D'],
    metaNote: 'STREAM: 48kHz PCM',
    demoBadge: 'REC_ONLINE',
    canvasType: 'voiceHud',
  },
  {
    id: 'fluid-dynamics-shader',
    code: '#006',
    title: 'FLUID DYNAMICS SHADER',
    category: 'animation',
    categoryLabel: 'Animation & WebGL',
    statusBadge: 'EXPERIMENTAL',
    statusType: 'experimental',
    stars: 1750,
    description: 'Navier-Stokes GPU-accelerated fluid simulation reacting to cursor interaction with psychedelic dye mixing.',
    tags: ['GLSL', 'WebGL 2.0', 'Vite'],
    metaNote: 'NAVIER-STOKES GPU',
    demoBadge: 'Physics 60 FPS',
    canvasType: 'fluidShader',
  },
];
