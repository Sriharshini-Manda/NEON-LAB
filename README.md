# 🧪 NEON LAB — Developer Community & Experimental Laboratory

> **An experimental technology laboratory and developer community concept exploring modern frontend engineering, WebGL shaders, AI workflows, and tactile cybernetic UI systems.**

---

## 📌 Overview

**NEON LAB** is a personal developer portfolio project built to showcase frontend engineering, React architecture, component-based UI design, and product thinking.

Unlike conventional portfolio websites, NEON LAB is structured around two core ideas:

1. **EXPERIMENT** — A digital laboratory where developers can explore emerging and experimental web technologies, including creative UI mechanics, WebGL shaders, AI/ML concepts, RAG architectures, Agentic AI, and software QA practices.
2. **CONNECT** — A future-oriented developer community concept where developers can create profiles, select technical interests, discover peers, and explore shared technical domains.

---

## ⚡ Technical Stack

All technologies listed below are directly implemented in this repository (`package.json`, `vite.config.ts`, `tsconfig.json`):

| Category | Technology | Usage in Repository |
| :--- | :--- | :--- |
| **Core Library** | **React 19** (`react`, `react-dom`) | Component architecture & modern hooks |
| **Language** | **TypeScript 5.x** (`typescript`) | Strict type-safety & data interface contracts |
| **Build System** | **Vite 8** (`vite`, `@vitejs/plugin-react`) | Rapid HMR dev server & production bundling |
| **Routing** | **React Router DOM v7** (`react-router-dom`) | Client-side SPA routing & scroll/hash handling |
| **Styling & System** | **Tailwind CSS v4** (`@tailwindcss/vite`) | Utility-first styling & custom design tokens |
| **Icons & Motion** | **Lucide React** (`lucide-react`), **Motion** (`motion`) | Cyberpunk icons & micro-animations |
| **AI Library** | **Google GenAI SDK** (`@google/genai`) | Included for generative interface exploration |

---

## 🎨 Visual Identity & Design System

NEON LAB features a custom high-contrast dark cyberpunk aesthetic engineered with:
* **Base Palette**: Deep space obsidian background (`#13121b`) with high-contrast text (`#e5e0ed`).
* **Neon Accents**: Electric Cyan (`#00f5ff`), Neon Magenta (`#ff16f0`), and Bio Lime (`#3bff17`).
* **Tactile UI Elements**: Cybernetic grid overlays, blurred ambient glows, glassmorphic panels, and developer-terminal-inspired interactive modules.

---

## 🚀 Implemented Features

* **Home Dashboard (`/`)**: Features an interactive cyberpunk terminal simulator, warp seed mutator, core engineering pillars, technical arsenal breakdown, and lab metrics.
* **Experiments Showcase (`/experiments`)**: Interactive prototype gallery featuring WebGL shaders, kinetic font deforming, spatial OS windows, quantum OKLCH color generator, and voice agent HUD with category filtering (*AI*, *UI*, *Frontend*, *Animation*).
* **Community Hub (`/community`)**: Developer profile discovery system supporting filterable technical interest tags (*AI*, *ML*, *DL*, *RAG*, *Agentic AI*, *React*, *Next.js*, *WebGL*, *Python*, *Java*, *Testing*, *QA*, *Frontend*, *Full-Stack*) and collaboration status badges.
* **About & Portfolio (`/about`)**: Portfolio view of creator **Sriharshini Manda**, highlighting achievements (National AI Olympiad AIR 28), AWS certification, major projects (*Enhanzo*, *EstatePulse*, *AI Voice Assistant*), internships, and a 5-step learning roadmap.
* **Auth & Onboarding Prototype (`/auth`)**: Unified sign-up and login workflow allowing users to simulate account creation, select technical interest tags, and persist session state.

---

## 🛣️ Application Routes

The application uses client-side routing defined in [`src/App.tsx`](file:///c:/D%20Drive/Software%20Skills/PROJECTS/PERSONAL%20PROJECTS/NEON%20LAB%20-%20Developer%20Community/neon-lab/src/App.tsx):

* `/` — Home dashboard & lab overview
* `/experiments` — Interactive technology prototypes
* `/community` — Developer directory & interest discovery concept
* `/about` — Creator profile, portfolio & learning roadmap
* `/auth` — Onboarding & technical interest selection prototype

---

## ⚠️ Important Implementation Notes & Disclaimers

> [!IMPORTANT]
> **Frontend-Only Prototype**: The current implementation of NEON LAB is **100% frontend-only**.

* **Authentication Disclaimer**: The authentication system at `/auth` is a client-side prototype using `AuthContext` and browser `localStorage` (`authService.ts`). There is **no real backend database**, no OAuth provider, no JWT handling, no password hashing, and no email verification. The architecture is intentionally decoupled so a backend (e.g., Firebase, Supabase, or REST API) can be integrated in future iterations.
* **Community Disclaimer**: The profiles displayed on the `/community` page are structured mock/demo profiles (`communityData.ts`). They demonstrate the user experience and filtering model designed for the future community platform.

---

## 🏗️ Repository Architecture

```
neon-lab/
├── .github/              # Issue templates & repository workflows
├── src/
│   ├── components/       # Reusable layout & UI components (Navbar, Footer, ErrorBoundary)
│   ├── context/          # React Context providers (AuthContext for mock session management)
│   ├── data/             # Structured mock datasets (experimentsData, communityData, profileData, techArsenalData)
│   ├── pages/            # Page-level route views (Home, Experiments, Community, About, Auth)
│   ├── services/         # Service layer abstractions (authService frontend implementation)
│   ├── App.tsx           # Primary layout, routing table, and scroll manager
│   ├── main.tsx          # React root application entry
│   └── index.css         # Tailwind CSS imports & global ambient effects
├── index.html            # Main HTML document with custom font preloads
├── package.json          # Project dependencies & build scripts
├── tsconfig.json         # TypeScript compiler configuration
├── vite.config.ts        # Vite build tool configuration
├── vercel.json           # Vercel SPA route rewrite rules
└── .npmrc                # Dependency resolution rules
```

---

## 🎯 Portfolio & Engineering Value

This project was crafted to demonstrate practical software engineering capabilities, including:
1. **Frontend Architecture**: Clean separation of concerns across components, views, services, data schemas, and global context.
2. **Design System Execution**: Translating a complex cyberpunk vision into reusable Tailwind CSS utilities and responsive layouts.
3. **State Management & Mock Services**: Designing service interfaces (`IAuthService`) to handle asynchronous states, loading indicators, and local persistence.
4. **Product Design & Prototyping**: Conceptualizing developer workflows from onboarding interest selection to experiment exploration.
5. **Production Readiness**: Maintaining clean TypeScript compilation (`tsc --noEmit`), SPA fallback routing (`vercel.json`), and fast static bundle generation.

---

## 🔮 Future Roadmap

* **Phase 1 — Current State**: Frontend-only interactive laboratory, mock community directory, and interest selection prototype.
* **Phase 2 — Backend Integration**: Integrate real authentication (Supabase / Firebase), PostgreSQL database persistence, and user profile management.
* **Phase 3 — Interactive Community**: User-submitted experiment uploads, interactive code canvases, peer discussions, and AI-driven developer matching.

---

## 🛠️ Local Development Setup

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes bundled with Node.js)

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sriharshini-Manda/NEON-LAB.git
   cd NEON-LAB
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Verify TypeScript compilation**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```
   The static bundle will be output to the `dist/` directory.

---

## 🌐 Deployment

This application is configured for deployment as a static Single Page Application (SPA).

* **Vercel**: Includes [`vercel.json`](file:///c:/D%20Drive/Software%20Skills/PROJECTS/PERSONAL%20PROJECTS/NEON%20LAB%20-%20Developer%20Community/neon-lab/vercel.json) to rewrite all route requests to `/index.html` and [`.npmrc`](file:///c:/D%20Drive/Software%20Skills/PROJECTS/PERSONAL%20PROJECTS/NEON%20LAB%20-%20Developer%20Community/neon-lab/.npmrc) for automated dependency building.
* **Live Demo**: *Deployment in progress on Vercel.*

---

## 👤 Author

**Sriharshini Manda**
* **Role**: MCA Candidate (2024–2026), Pune, India
* **GitHub**: [@Sriharshini-Manda](https://github.com/Sriharshini-Manda)
* **LinkedIn**: [sriharshini-manda](https://www.linkedin.com/in/sriharshini-manda/)
* **Portfolio**: [sriharshini-manda-portfolio.vercel.app](https://sriharshini-manda-portfolio.vercel.app/)
