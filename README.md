# 🚀 AI Founders Journey

> **From Learners to Young Founders** — A school-based immersive experience platform taking students from AI literacy to building real-world, AI-backed solutions.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)
![Deployed on Netlify](https://img.shields.io/badge/deployed-Netlify-00C7B7?style=flat-square&logo=netlify)

---

## 🌟 Vision

AI Founders Journey is a **Class 6–12 school programme** built on a Role-based, project-driven learning model — NEP/NCF aligned and delivered as a School as a Service (SaaS). Students discover their strengths, build cross-functional founding teams, and graduate with real prototypes, portfolios, and the mindset of a young founder.

---

## 🗺️ The Journey

| Grade | Stage | Focus |
|-------|-------|-------|
| Class 6 | **Explore** | Try all 5 Roles, discover strengths |
| Class 7 | **Deepen** | Specialise in primary Role |
| Class 8 | **Apply** | Role Certification + mini-project |
| Class 9 | **Form Teams** | Cross-role teams, choose real problem |
| Class 10 | **Validate** | User research, problem validation |
| Class 11 | **Build MVP** | Design, develop, test prototype |
| Class 12 | **Launch** | Demo Day, pitch, seed funding |

---

## 🎭 The Five Roles

| Role | Identity | Core Contribution |
|------|----------|------------------|
| 🧠 **Innovator** | AI & data specialist | Builds AI models, data pipelines, intelligent features |
| ⚙️ **Builder** | Technology & code specialist | Develops the product — app, web, automation |
| 🎨 **Creator** | Design & UX specialist | Designs experience, visuals, interface, storytelling |
| 📊 **Strategist** | Business & market specialist | Business model, research, financials, pitch |
| 🌍 **Changemaker** | Domain & impact specialist | Problem grounding, user research, SDG alignment |

---

## 🏗️ Tech Stack

```
Frontend     React 18 + Vite 5
Styling      Tailwind CSS 3.4
Animations   Framer Motion + custom IntersectionObserver hook
Routing      React Router DOM 6
Icons        Lucide React
Deploy       Netlify (CI/CD from GitHub)
```

---

## 📁 Project Structure

```
ai-founders-journey/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav, mobile menu
│   │   ├── Hero.jsx             # Cinematic hero, ambient glow
│   │   ├── WhyItMatters.jsx     # Problem framing section
│   │   ├── StudentJourney.jsx   # Class 6–12 timeline
│   │   ├── RoleExplorer.jsx     # Interactive 5-role cards
│   │   ├── Class68.jsx          # Middle school formation
│   │   ├── Class912.jsx         # Senior school creation
│   │   ├── Outcomes.jsx         # Student & school outcomes
│   │   ├── StakeholderPaths.jsx # Schools/Parents/Mentors/Investors
│   │   └── ClosingVision.jsx    # Final CTA section
│   ├── hooks/
│   │   └── useInView.js         # Scroll-triggered animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                 # Build + SPA redirect config
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#F7F5F0` | Light section background |
| `primary` | `#1F2937` | Headings, body text |
| `secondary` | `#6B7280` | Subtext, labels |
| `innovator` | `#2563EB` | Innovator Role, primary CTA |
| `builder` | `#14B8A6` | Builder Role |
| `creator` | `#8B5CF6` | Creator Role |
| `strategist` | `#F59E0B` | Strategist Role |
| `changemaker` | `#F97316` | Changemaker Role |
| Dark BG | `#0F172A` | Hero, journey, dark sections |

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** `font-extrabold`, sizes up to `text-7xl`
- **Labels:** `text-sm font-semibold tracking-widest uppercase`

---

## ⚡ Getting Started

### Prerequisites
- Node.js `>= 18.x`
- npm `>= 9.x`

### 1. Clone the repository

```bash
git clone https://github.com/nshd0/ai-founders-journey.git
cd ai-founders-journey
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### 5. Preview production build

```bash
npm run preview
```

---

## 🚢 Deployment (Netlify)

The `netlify.toml` at the root handles everything automatically.

### One-click deploy from GitHub

1. Push to `main` branch on GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. **Add new site → Import from Git → GitHub**
4. Select `nshd0/ai-founders-journey`
5. Netlify auto-detects settings from `netlify.toml`
6. Click **Deploy Site**

### Manual settings (if needed)

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | `18` |

> Every `git push` to `main` triggers an automatic redeploy.

---

## 🌐 Stakeholder Paths

The website is designed for multiple audiences:

- 🏫 **Schools** — curriculum fit, implementation, outcomes, NEP alignment
- 👨‍👩‍👧 **Parents** — safety, confidence, future readiness, progress visibility
- 🎒 **Students** — identity, projects, team-building, recognition
- 🧑‍💼 **Mentors** — domain contribution, flexible engagement, impact
- 💡 **Investors** — prototype pipeline, CSR, seed funding opportunities

---

## ♿ Accessibility & Performance

- ✅ `prefers-reduced-motion` respected — all animations disabled on request
- ✅ Semantic HTML5 elements throughout
- ✅ Keyboard navigable
- ✅ Responsive — mobile-first design
- ✅ Code-split vendor and motion bundles via Rollup
- ✅ Lazy-loaded assets with compressed media

---

## 🗺️ Scrollytelling Blueprint

A full screen-by-screen development roadmap (CSV + Markdown) is available in the `output/` folder after running the blueprint generator. It includes:

- Scroll-triggered animations per section
- Required visual media per screen
- Narrative copy per stage
- Technical trigger points
- Mobile and performance notes

---

## 🤝 Contributing

This is an active product. To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📬 Contact

**Naushad Lucky** — EdTech Entrepreneur & Educator  
🏢 IOE (Innovations on Education)  
📧 hello@aifoundersjourney.in  
🔗 [github.com/nshd0](https://github.com/nshd0)

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  <strong>AI Founders Journey</strong> · Turning classrooms into launchpads for the next generation of young founders.
</p>
