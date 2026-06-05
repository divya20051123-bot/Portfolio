# Divya Bharathi S | Premium Interactive Portfolio 💻✨

Welcome to my personal portfolio website repository! This is a state-of-the-art, high-performance web application built with **Next.js**, **Framer Motion**, and **GSAP**, showcasing my work, skills, and academic history in a highly interactive format.

🔗 **Live Portfolio:** [divya20051123-bot.github.io/Portfolio](https://github.com/divya20051123-bot/Portfolio)

---

## 🎨 Design System & Aesthetics
This project features a premium, bespoke **Silver & Burgundy** visual design:
- **Theme Background:** Clean, elegant silver-gray (`#eef1f6`) with soft blur blobs.
- **Accent Palette:** Deep burgundy (`#760031`) for high-contrast actions and rose-pink (`#ff8ea8`) for highlights.
- **Typography:** Sleek modern body text (`Inter`) paired with structured headings (`Outfit` / `Bebas Neue`) and custom handwritten cursive highlights (`Brittany Signature`).
- **Glassmorphism:** Light, translucent glass card panels (`bg-white/70 backdrop-blur-xl`) with custom thin borders and shadow elevations.

---

## 🚀 Key Features

### 1. Lerped Scroll Canvas Sequence
The home landing section uses an HTML5 Canvas that loads a batch of pre-rendered frames. As the user scrolls, the frames are ease-interpolated (lerped) in real-time for ultra-smooth navigation transitions.

### 2. Fixed-Position Parallax Split Overlay
Upon completing the sequence (at frame 158), the hero viewport container remains completely fixed and static in the background while the **About Me** section slides up from the bottom of the screen to elegantly cover the frame.

### 3. Active Section Tracking (Intersection Observer)
Replaced traditional heavy scroll calculations with a performance-optimized, native browser `IntersectionObserver` hook. It detects when sections enter the viewport reading area off the main thread, dynamically updating the active navbar underline without scroll lag.

### 4. Interactive Components
- **Stacked Education Cards:** A 3D-skewed card stack showing educational milestones with custom hover states.
- **Orbiting Project Showcase:** A dynamic orbiting solar system showing technologies (React, Next.js, HTML/CSS, SQL) revolving around my featured final year project, **FoodConnect**.
- **Internship Spotlight:** An interactive highlight banner featuring my signature brand logo with a custom infinite floating animation loop.

---

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router, React 19)
- **Styling:** Tailwind CSS & Custom CSS variables
- **Animations:** Framer Motion, GSAP (GreenSock)
- **Icons:** Lucide Icons & React Icons (FontAwesome / SimpleIcons)
- **FAVICON:** Customized high-contrast browser tab branding (`Dark.png` / `light.png`).

---

## 📁 Project Structure
```bash
portfolio/
├── public/                 # Static assets (favicons, scroll sequence frames)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global variables and font faces
│   │   ├── layout.tsx      # App wrapper and SEO Metadata
│   │   └── page.tsx        # Main Entry Point
│   ├── components/
│   │   ├── Portfolio.tsx   # Interactive core orchestrator
│   │   └── ui/             # Reusable UI component modules (contact-page, features-8, etc.)
│   └── lib/
│       └── utils.ts        # Tailwind merging utilities
├── package.json            # Script runs and dependencies
└── tsconfig.json           # TypeScript configuration settings
```

---

## ⚡ Getting Started & Installation

### Prerequisite
Ensure you have **Node.js (v18+)** installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divya20051123-bot/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Build production static files:**
   ```bash
   npm run build
   ```
