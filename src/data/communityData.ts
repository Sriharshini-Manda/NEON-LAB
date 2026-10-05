export type TechInterest =
  | 'AI'
  | 'ML'
  | 'DL'
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
  | 'Full-Stack';

export const INTEREST_FILTERS: TechInterest[] = [
  'AI',
  'ML',
  'DL',
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
];

export interface DeveloperProfile {
  id: string;
  handle: string;
  name: string;
  demoLabel: 'Sample Developer' | 'Community Preview' | 'Demo Profile';
  technicalFocus: string;
  bio: string;
  interests: TechInterest[];
  technologies: string[];
  experimentCount: number;
  collaborationStatus: 'OPEN FOR COLLAB' | 'BUILDING' | 'RESEARCHING';
  statusColor: string;
}

export const COMMUNITY_DEVELOPERS: DeveloperProfile[] = [
  {
    id: 'demo-dev-01',
    handle: 'proto_fullstack',
    name: 'Sample Developer [Alpha]',
    demoLabel: 'Sample Developer',
    technicalFocus: 'Full-Stack & Generative AI Systems',
    bio: 'Exploring end-to-end applications integrating React frontends, FastAPI backends, and survey-driven recommendation workflows.',
    interests: ['Full-Stack', 'Frontend', 'React', 'Python', 'AI'],
    technologies: ['React', 'FastAPI', 'Node.js', 'Python', 'Tailwind CSS', 'MySQL'],
    experimentCount: 3,
    collaborationStatus: 'OPEN FOR COLLAB',
    statusColor: '#3bff17',
  },
  {
    id: 'demo-dev-02',
    handle: 'shader_craft',
    name: 'Sample Developer [Chroma]',
    demoLabel: 'Community Preview',
    technicalFocus: 'Creative WebGL & Hardware-Accelerated Shaders',
    bio: 'Experimenting with procedural noise math, GLSL post-processing pipelines, chromatic aberration passes, and silky 60 FPS interactions.',
    interests: ['WebGL', 'Frontend', 'React'],
    technologies: ['Three.js', 'WebGL', 'GLSL', 'React', 'Motion', 'Canvas API'],
    experimentCount: 4,
    collaborationStatus: 'OPEN FOR COLLAB',
    statusColor: '#3bff17',
  },
  {
    id: 'demo-dev-03',
    handle: 'agentic_mind',
    name: 'Sample Developer [Synapse]',
    demoLabel: 'Sample Developer',
    technicalFocus: 'RAG Architectures & Agentic AI Workflows',
    bio: 'Prototyping recursive agent loops, retrieval-augmented prompt dispatch, vector retrieval, and multi-turn autonomous CLI tools.',
    interests: ['Agentic AI', 'RAG', 'AI', 'Python'],
    technologies: ['Python', 'LangChain', 'FastAPI', 'Vector DB', 'Ollama', 'PyTorch'],
    experimentCount: 5,
    collaborationStatus: 'BUILDING',
    statusColor: '#00f5ff',
  },
  {
    id: 'demo-dev-04',
    handle: 'quality_first',
    name: 'Sample Developer [Sentinel]',
    demoLabel: 'Demo Profile',
    technicalFocus: 'Software Testing & Automation QA',
    bio: 'Designing robust test frameworks spanning API contract validation, end-to-end regression suites, defect lifecycles, and load testing.',
    interests: ['Testing', 'QA', 'Full-Stack'],
    technologies: ['Selenium', 'Postman', 'Swagger UI', 'Thunder Client', 'JIRA', 'Jest'],
    experimentCount: 4,
    collaborationStatus: 'OPEN FOR COLLAB',
    statusColor: '#3bff17',
  },
  {
    id: 'demo-dev-05',
    handle: 'deep_tensor',
    name: 'Sample Developer [Neural]',
    demoLabel: 'Community Preview',
    technicalFocus: 'Machine Learning & Deep Learning Pipelines',
    bio: 'Training and evaluating regression models, computer vision classifiers, and neural architectures with interactive browser telemetry.',
    interests: ['ML', 'DL', 'AI', 'Python'],
    technologies: ['Python', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI'],
    experimentCount: 3,
    collaborationStatus: 'RESEARCHING',
    statusColor: '#ff16f0',
  },
  {
    id: 'demo-dev-06',
    handle: 'next_kinetic',
    name: 'Sample Developer [Velo]',
    demoLabel: 'Sample Developer',
    technicalFocus: 'Next.js & Modern Reactive Frontend',
    bio: 'Pushing the boundaries of Next.js App Router, SSR micro-interactions, responsive cybernetic layouts, and high-performance tactile UI.',
    interests: ['Next.js', 'Frontend', 'React'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Turbopack'],
    experimentCount: 6,
    collaborationStatus: 'OPEN FOR COLLAB',
    statusColor: '#3bff17',
  },
  {
    id: 'demo-dev-07',
    handle: 'enterprise_core',
    name: 'Sample Developer [Helix]',
    demoLabel: 'Demo Profile',
    technicalFocus: 'Java Microservices & Distributed Backend',
    bio: 'Architecting resilient Java backend services, high-throughput REST APIs, relational schemas, and asynchronous event streams.',
    interests: ['Java', 'Full-Stack', 'Testing'],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs', 'JUnit'],
    experimentCount: 2,
    collaborationStatus: 'BUILDING',
    statusColor: '#00f5ff',
  },
  {
    id: 'demo-dev-08',
    handle: 'hybrid_matrix',
    name: 'Sample Developer [Nexus]',
    demoLabel: 'Community Preview',
    technicalFocus: 'Intelligent Frontend & Model Integration',
    bio: 'Bridging client-side reactive frontends with Python inference runtimes, ONNX browser embeddings, and generative UI canvases.',
    interests: ['Frontend', 'AI', 'Python', 'React', 'WebGL'],
    technologies: ['React', 'Python', 'FastAPI', 'WebGL', 'Recharts', 'Tailwind CSS'],
    experimentCount: 5,
    collaborationStatus: 'OPEN FOR COLLAB',
    statusColor: '#3bff17',
  },
];

export const COMMUNITY_BENEFITS = [
  {
    id: 'experiment',
    tag: '01 / PROTOCOL',
    title: 'EXPERIMENT',
    description: 'Explore experimental frontend, AI and interactive technologies.',
    color: '#00f5ff',
  },
  {
    id: 'build',
    tag: '02 / CREATION',
    title: 'BUILD',
    description: 'Create and showcase technology experiments.',
    color: '#ff16f0',
  },
  {
    id: 'connect',
    tag: '03 / DISCOVERY',
    title: 'CONNECT',
    description: 'Discover developers with shared technical interests.',
    color: '#3bff17',
  },
  {
    id: 'learn',
    tag: '04 / GROWTH',
    title: 'LEARN',
    description: 'Learn emerging technologies through hands-on experimentation.',
    color: '#00f5ff',
  },
  {
    id: 'collaborate',
    tag: '05 / ALLIANCE',
    title: 'COLLABORATE',
    description: 'Find developers interested in similar technologies and projects.',
    color: '#ff16f0',
  },
  {
    id: 'showcase',
    tag: '06 / IDENTITY',
    title: 'SHOWCASE',
    description: 'Build a public developer identity around your experiments.',
    color: '#3bff17',
  },
];
