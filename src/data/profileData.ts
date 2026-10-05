export interface RoadmapPhase {
  step: string;
  phase: string;
  skillsFormatted: string;
  skills: string[];
  status: 'ACTIVE' | 'NEXT' | 'IN PROGRESS' | 'PLANNED';
  semanticMeaning: string;
  details: string;
}

export interface TechnologyExposure {
  name: string;
  duration: string;
  category: 'Core & Programming' | 'Frameworks & Full-Stack' | 'AI, Data & ML' | 'Databases & Cloud';
  color: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  technologies: string[];
  responsibilities: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  status: string;
  badgeColor: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  detail: string;
  highlight: string;
  badgeColor: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  tagline: string;
  technologies: string[];
  description: string;
  focusAreas: string[];
}

export const PROFILE_DATA = {
  name: 'Sriharshini Manda',
  badge: 'MCA 2024–2026 // DEVELOPER',
  headline: 'Frontend / Full-Stack Developer • AI / GenAI Enthusiast',
  careerStage: 'Early-career / fresher developer',
  education: 'Master of Computer Applications (MCA), 2024–2026',
  location: 'Pune, India',
  github: 'https://github.com/Sriharshini-Manda',
  linkedin: 'https://www.linkedin.com/in/sriharshini-manda/',
  portfolio: 'https://sriharshini-manda-portfolio.vercel.app/',
  email: 'manda.sriharshini@gmail.com',
  discord: 'sriharshinimanda',
  currentFocus: 'Full-Stack Systems & AI-Assisted Frontend Development',
  status: 'Open to Opportunities & Internships',
  bioSummary: 'An early-career MCA developer from Pune exploring full-stack development, AI/ML/DL, Generative AI, RAG, Agentic AI, creative frontend engineering, and software quality.',
  bioParagraphs: [
    'I am an early-career developer pursuing my Master of Computer Applications (MCA, 2024–2026) in Pune, India. As an AI enthusiast exploring the intersection of Generative AI, Machine Learning, Deep Learning, RAG, and Agentic AI through practical projects and experimentation, I focus on hands-on project development, continuous learning, and software testing discipline.',
    'NEON LAB is my dedicated upskilling and experimentation laboratory: a creative space to explore component architecture, creative interaction mechanics, and modular frontend patterns intentionally architected to scale into full-stack and AI-driven environments.',
  ],
  stats: [
    { value: "MCA '26", label: 'Master of Computer Applications (Candidate)' },
    { value: 'AIR 28', label: 'National AI Olympiad (3rd in MH)' },
    { value: 'AWS CCP', label: 'Certified Cloud Practitioner' },
  ],
  corePillars: [
    {
      num: '01 / DISCIPLINE',
      title: 'Full-Stack Foundations',
      desc: 'Building modular frontend and backend applications with React, Node.js, Express.js, REST APIs, SQL/NoSQL databases, and scalable application architecture.',
      color: '#00f5ff',
    },
    {
      num: '02 / DISCIPLINE',
      title: 'AI, ML & DL',
      desc: 'Exploring AI-driven application development across Generative AI, Machine Learning, Deep Learning, RAG, Agentic AI, and AI-assisted workflows, with projects such as Enhanzo and EstatePulse.',
      color: '#ff16f0',
    },
    {
      num: '03 / DISCIPLINE',
      title: 'Testing & Quality Assurance',
      desc: 'Applying software testing practices across functional, regression, smoke, sanity, API, database, load, and end-to-end testing, with tools including Postman, Swagger UI, Thunder Client, Selenium, and JIRA.',
      color: '#3bff17',
    },
  ],
  techExposure: [
    // Core & Programming
    { name: 'Python', duration: '7+ years', category: 'Core & Programming', color: '#00f5ff' },
    { name: 'SQL', duration: '5+ years', category: 'Core & Programming', color: '#00f5ff' },
    { name: 'C++', duration: '4+ years', category: 'Core & Programming', color: '#00f5ff' },
    { name: 'Java', duration: '3+ years', category: 'Core & Programming', color: '#00f5ff' },
    { name: 'JavaScript', duration: '3+ years', category: 'Core & Programming', color: '#00f5ff' },
    { name: 'HTML / CSS / PHP', duration: '3+ years', category: 'Core & Programming', color: '#00f5ff' },

    // Frameworks & Full-Stack
    { name: 'Tailwind CSS', duration: '2+ years', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'MERN Stack', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'React', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'Node.js', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'Express.js', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'Flask', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'FastAPI', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'Vite', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'REST APIs', duration: '1+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },
    { name: 'Next.js', duration: '0.6+ year', category: 'Frameworks & Full-Stack', color: '#ff16f0' },

    // AI, Data & ML
    { name: 'ChatGPT', duration: '2+ years', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Gemini API', duration: '2+ years', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Pandas', duration: '2+ years', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'NumPy', duration: '2+ years', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Matplotlib', duration: '1+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'AI / GenAI', duration: '1+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Ollama', duration: '0.6+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Hugging Face', duration: '0.6+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Google AI Studio', duration: '0.6+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Claude', duration: '0.6+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'Agentic AI', duration: '0.3+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'n8n', duration: '0.3+ year', category: 'AI, Data & ML', color: '#3bff17' },
    { name: 'RAG', duration: '0.3+ year', category: 'AI, Data & ML', color: '#3bff17' },

    // Databases & Cloud
    { name: 'MySQL', duration: '7+ years', category: 'Databases & Cloud', color: '#00f5ff' },
    { name: 'PostgreSQL', duration: '1+ year', category: 'Databases & Cloud', color: '#00f5ff' },
    { name: 'Supabase', duration: '1+ year', category: 'Databases & Cloud', color: '#00f5ff' },
    { name: 'MongoDB', duration: '0.6+ year', category: 'Databases & Cloud', color: '#00f5ff' },
    { name: 'AWS', duration: '0.6+ year', category: 'Databases & Cloud', color: '#00f5ff' },
    { name: 'MongoDB Atlas', duration: '0.3+ year', category: 'Databases & Cloud', color: '#00f5ff' },
  ] as TechnologyExposure[],
  qaPractices: [
    'Manual Testing',
    'Functional Testing',
    'Regression Testing',
    'Smoke Testing',
    'Sanity Testing',
    'API Testing',
    'Postman',
    'FastAPI / Swagger UI',
    'Thunder Client',
    'Load Testing',
    'Selenium',
    'Defect Life Cycle',
    'Database Testing',
    'JIRA',
    'Test Case Execution',
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: 'August 2026',
      status: 'Verified Certification',
      badgeColor: '#ff9900',
    },
  ] as CertificationItem[],
  experience: [
    {
      id: 'jade-internship',
      company: 'JSCOE Association for Developing Entrepreneurs (JADE)',
      role: 'Full Stack Backend Developer & Event Organizer Intern',
      period: 'Sep 2025 – Apr 2026',
      type: 'Internship',
      technologies: ['Node.js', 'Express', 'React', 'MySQL', 'MongoDB', 'REST APIs', 'Git/GitHub'],
      responsibilities: [
        'Engineered backend services and REST APIs for the official hackathon management portal.',
        'Implemented relational (MySQL) and document (MongoDB) database integrations for participant record tracking.',
        'Assisted in deployment workflows and server configurations across institute infrastructure.',
        'Provided frontend support, cross-functional technical troubleshooting, and live event operational logistics.',
      ],
    },
    {
      id: 'cerebrospark-internship',
      company: 'Cerebrospark Innovations Pvt. Ltd.',
      role: 'AI Researcher Intern / Project Based Intern',
      period: 'Jan 2026 – Mar 2026',
      type: 'Project Internship',
      technologies: ['Python', 'AI / Machine Learning', 'Computer Vision', 'UAV / Drone Automation'],
      responsibilities: [
        'Conducted research and applied algorithms in Python for computer vision and object detection.',
        'Explored automation pipelines and vision tracking workflows for UAV/drone applications.',
        'Collaborated on model evaluation and data preprocessing for project deliverables.',
      ],
    },
  ] as ExperienceItem[],
  achievements: [
    {
      title: 'National AI Olympiad (NAIO)',
      organization: 'National Level AI Competition',
      detail: 'Secured All India Rank 28 (AIR 28) and achieved 3rd place in Maharashtra state.',
      highlight: 'Rank 28 (All India) • 3rd in Maharashtra',
      badgeColor: '#00f5ff',
    },
    {
      title: 'NxtWave x OpenAI Buildathon',
      organization: 'State Level Buildathon',
      detail: 'State Level Buildathon Participant selected from Maharashtra for innovative AI-assisted project building.',
      highlight: 'State Level Participant (Maharashtra Selection)',
      badgeColor: '#ff16f0',
    },
    {
      title: 'RIFT 2k26',
      organization: 'Technical Symposium & Hackathon',
      detail: 'Selected participant in competitive technical challenges demonstrating frontend and problem-solving skills.',
      highlight: 'Competitive Selection & Participation',
      badgeColor: '#3bff17',
    },
  ] as AchievementItem[],
  projects: [
    {
      id: 'enhanzo',
      title: 'Enhanzo',
      tagline: 'AI Recommendation System for Cafés',
      technologies: ['React', 'Flask / FastAPI', 'GenAI', 'Agentic AI', 'RAG', 'Survey-Driven Data Collection'],
      description: 'AI recommendation system for cafés using survey-driven personalization workflows. Integrates user preference collection, personalized recommendation logic, GenAI workflows, Agentic AI workflows, and RAG pipelines.',
      focusAreas: [
        'Survey-based user preference collection',
        'Personalized recommendation logic',
        'GenAI workflows',
        'Agentic AI workflows',
        'RAG',
        'Data collection pipelines',
      ],
    },
    {
      id: 'estate-pulse',
      title: 'EstatePulse',
      tagline: 'House Price Prediction System',
      technologies: [
        'React.js',
        'React 18',
        'Vite',
        'FastAPI',
        'Python',
        'Scikit-Learn',
        'Random Forest',
        'MongoDB',
        'MongoDB Atlas',
        'Recharts',
      ],
      description: 'A machine-learning-based house price prediction application combining a React frontend with a FastAPI prediction service and MongoDB/MongoDB Atlas persistence. Validated using a Random Forest regression model (model evaluation benchmark: R² = 0.9684 with sub-50ms inference latency in validation benchmarks).',
      focusAreas: [
        'React 18 + Vite frontend with Recharts visualization',
        'FastAPI prediction service & Scikit-Learn pipeline',
        'Random Forest model validation (R² = 0.9684 benchmark)',
        'MongoDB & MongoDB Atlas persistence',
      ],
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant',
      tagline: 'Conversational Voice & Command Processing Pipeline',
      technologies: ['Python', 'SpeechRecognition', 'PyAudio', 'GenAI APIs', 'NLP'],
      description: 'A Python-driven voice assistant utilizing speech recognition and AI language processing. Translates spoken user queries into structured commands with automated audio playback and natural response dispatch.',
      focusAreas: [
        'Speech-to-text pipeline',
        'Generative AI prompt dispatch',
        'Real-time audio handling',
      ],
    },
  ] as ProjectHighlight[],
  learningRoadmap: [
    {
      step: '01',
      phase: 'FOUNDATION',
      skillsFormatted: 'React • TypeScript • Tailwind CSS • Responsive UI',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
      status: 'ACTIVE',
      semanticMeaning: 'Technologies currently being explored through this project.',
      details: 'Core engineering layer powering NEON LAB with strict type-safety, fluid component ergonomics, and high-contrast cyberpop layouts.',
    },
    {
      step: '02',
      phase: 'AI & INTELLIGENCE',
      skillsFormatted: 'Machine Learning • Deep Learning • RAG • Agentic AI • GenAI',
      skills: ['Machine Learning', 'Deep Learning', 'RAG', 'Agentic AI', 'GenAI'],
      status: 'ACTIVE',
      semanticMeaning: 'Active focus of practical project experimentation (Enhanzo, EstatePulse).',
      details: 'Applying generative models, structured RAG pipelines, agentic workflows, and machine-learning prediction architectures.',
    },
    {
      step: '03',
      phase: 'QUALITY',
      skillsFormatted: 'Testing • API Testing • Automation • Database Testing',
      skills: ['Testing', 'API Testing', 'Automation', 'Database Testing'],
      status: 'NEXT',
      semanticMeaning: 'Next engineering focus for rigorous verification.',
      details: 'Implementing comprehensive manual and automated testing protocols, Postman API suites, and defect lifecycle practices.',
    },
    {
      step: '04',
      phase: 'CREATIVE FRONTEND',
      skillsFormatted: 'Motion • WebGL • Interactive UI • Performance',
      skills: ['Motion', 'WebGL', 'Interactive UI', 'Performance'],
      status: 'IN PROGRESS',
      semanticMeaning: 'Creative UI interaction explored in NEON LAB.',
      details: 'Kinetic interface choreography, hardware-accelerated shaders, dynamic viewports, and fluid, responsive interaction loops.',
    },
    {
      step: '05',
      phase: 'FULL-STACK EXPANSION',
      skillsFormatted: 'Backend APIs • Authentication • Databases • Cloud Deployment',
      skills: ['Backend APIs', 'Authentication', 'Databases', 'Cloud Deployment'],
      status: 'PLANNED',
      semanticMeaning: 'Planned future architecture expansion (NEON LAB client is currently frontend-only).',
      details: 'Structured data layer ready for future server integration; the codebase is deliberately architected to plug into backend APIs without redesigns.',
    },
  ] as RoadmapPhase[],
};
