export interface ArsenalPillar {
  id: string;
  tier: string;
  name: string;
  description: string;
  highlightNote: string;
  highlightColor: string;
  skills: { name: string; level: number }[];
  tags: string[];
}

export const ARSENAL_PILLARS: ArsenalPillar[] = [
  {
    id: 'frontend-core',
    tier: 'TIER_01',
    name: 'Frontend Core',
    description: 'Modern reactive frameworks and zero-compromise static pipelines.',
    highlightNote: 'Production Battle-Tested',
    highlightColor: '#00f5ff',
    skills: [
      { name: 'Next.js 14 / Turbopack', level: 99 },
      { name: 'TypeScript 5.x', level: 98 },
      { name: 'React 19 Server Actions', level: 95 },
      { name: 'Tailwind CSS v3/v4', level: 100 },
    ],
    tags: ['AST', 'SIMD', 'WASM'],
  },
  {
    id: 'shaders-3d',
    tier: 'TIER_01',
    name: 'Shaders & 3D',
    description: 'Realtime hardware acceleration and procedural mathematical art.',
    highlightNote: 'GPU Render Accelerated',
    highlightColor: '#ff16f0',
    skills: [
      { name: 'Three.js / React Three Fiber', level: 96 },
      { name: 'GLSL Custom Fragment Shaders', level: 92 },
      { name: 'GSAP ScrollTrigger / Flip', level: 97 },
      { name: 'HTML5 Canvas API / 2D Context', level: 99 },
    ],
    tags: ['Raymarching', 'SDF', 'PBR'],
  },
  {
    id: 'ai-backend',
    tier: 'TIER_02',
    name: 'AI & Backend',
    description: 'Realtime streaming pipelines and edge inference workflows.',
    highlightNote: 'Sub-50ms Global Routing',
    highlightColor: '#3bff17',
    skills: [
      { name: 'Node.js / Bun Runtime', level: 94 },
      { name: 'Cloudflare Edge Workers', level: 91 },
      { name: 'Python / PyTorch Latent APIs', level: 88 },
      { name: 'Supabase pgvector / Realtime', level: 90 },
    ],
    tags: ['WebNN', 'Worklets', 'Llama.cpp'],
  },
  {
    id: 'design-assets',
    tier: 'TIER_01',
    name: 'Design & 3D Assets',
    description: 'Rapid spatial prototyping and ultra-lean GLTF model pipelines.',
    highlightNote: 'Pixel-Perfect Precision',
    highlightColor: '#00f5ff',
    skills: [
      { name: 'Blender 4.x Modeling', level: 89 },
      { name: 'Figma High-Fidelity Systems', level: 98 },
      { name: 'Draco / Meshopt Compression', level: 95 },
      { name: 'TouchDesigner / Visual Synthesis', level: 82 },
    ],
    tags: ['GLTF', 'PBR', 'Physics'],
  },
];

export const LAB_METRICS = [
  {
    key: 'RENDER_SHADERS',
    value: '40+',
    label: 'Custom GLSL passes & real-time raymarchers crafted',
    color: '#00f5ff',
  },
  {
    key: 'NPM_OSS',
    value: '18',
    label: 'Open source tools published for the creative community',
    color: '#ff16f0',
  },
  {
    key: 'SYS_UPTIME',
    value: '99%',
    label: 'Caffeine conversion rate & uninterrupted build flow',
    color: '#3bff17',
  },
  {
    key: 'CODE_PURITY',
    value: '100%',
    label: 'Raw creative engineering without corporate conformity',
    color: '#00f5ff',
  },
];
