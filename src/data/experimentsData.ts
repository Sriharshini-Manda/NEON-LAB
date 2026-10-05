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
  imageUrl?: string;
  badgeLabel?: string;
}

export const EXPERIMENTS_DATA: Experiment[] = [
  {
    id: 'neural-latent-diver',
    code: '#001',
    title: 'NEURAL CANVAS V2',
    category: 'ai',
    categoryLabel: 'AI & Generative',
    statusBadge: 'STABLE v1.4',
    statusType: 'stable',
    stars: 940,
    description: 'Direct manipulation of multidimensional latent vectors inside browser GPU memory using WebGL compute passes & custom matrix transforms.',
    tags: ['WebGL', 'WebGPU', 'NO-THREAD'],
    metaNote: 'LATENT_DIM: 512',
    demoBadge: 'WebGL Compute',
    canvasType: 'nodeGraph',
    imageUrl: '/assets/neural_canvas.jpg',
    badgeLabel: 'LARGE SPACE EXPLORER',
  },
  {
    id: 'kinetic-type-matrix',
    code: '#002',
    title: 'HYPER-PHYSICS UI',
    category: 'animation',
    categoryLabel: 'Animation & WebGL',
    statusBadge: 'EXPERIMENTAL',
    statusType: 'experimental',
    stars: 1280,
    description: 'Interactive playground where user interface elements behave like rigid body physics, spring kinematics, velocity recoil, and procedural audio feedback.',
    tags: ['Three.js', 'Physics', 'WebAudio'],
    metaNote: 'AUDIO_REACTIVE: ON',
    demoBadge: 'WebAudio Reactive',
    canvasType: 'kineticVox',
    imageUrl: '/assets/hyper_physics_ui.jpg',
    badgeLabel: 'SIMD INTERFACE',
  },
  {
    id: 'glassmorphic-shell-os',
    code: '#003',
    title: 'CHROMATIC SOUNDWAVE',
    category: 'ui',
    categoryLabel: 'UI & Micro-interactions',
    statusBadge: 'STABLE v2.1',
    statusType: 'stable',
    stars: 2140,
    description: 'High-fidelity microphone and audio-element WebAudio real-time frequency visualizer with chromatic dispersion post-processing shaders.',
    tags: ['WebAudio', 'GLSL', 'PostProcessing'],
    metaNote: 'DRAGGABLE: MULTI-TOUCH',
    demoBadge: 'Spatial UI',
    canvasType: 'shellOs',
    imageUrl: '/assets/chromatic_soundwave.jpg',
    badgeLabel: 'AUDIO REACTIVE',
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
    title: 'SYNAPSE TERMINAL',
    category: 'ai',
    categoryLabel: 'AI & Generative',
    statusBadge: 'BETA v0.9',
    statusType: 'beta',
    stars: 1420,
    description: 'Multi-threaded LLM agent orchestrator with full-shell terminal, stream of-thought visual execution graph, and zero latency token delivery.',
    tags: ['FastAPI', 'LangChain', 'WebSockets'],
    metaNote: 'STREAM: 48kHz PCM',
    demoBadge: 'REC_ONLINE',
    canvasType: 'voiceHud',
    imageUrl: '/assets/synapse_terminal.jpg',
    badgeLabel: 'AI AGENT KERNEL',
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
