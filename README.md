# EvolveX Website - AI & Tech Corporate Platform

## Overview
The **EvolveX Website** is a state-of-the-art corporate platform designed for EvolveX, a leader in AI and technology solutions. This project showcases a cutting-edge frontend architecture built with **React 19** and **Vite**, heavily emphasizing immersive user experiences through advanced 3D/2D animations, a robust design system, and high-performance rendering.

The platform serves as the digital headquarters for EvolveX, effectively communicating its expertise in Artificial Intelligence, offering interactive product showcases, and providing a seamless portal for careers and corporate information.

## Key Features
- **Immersive Visuals**: sophisticated use of **Three.js (@react-three/fiber)**, **GSAP**, and **Framer Motion** to create depth, motion, and interactivity (e.g., Floating Lines, Dot Grids, Aurora effects).
- **Modern Design System**: A bespoke UI library located in `src/components/ui`, featuring glassmorphism, dynamic lighting, and responsive layouts built with **Tailwind CSS**.
- **High Performance**: Optimized for speed with code splitting, lazy loading (via `React.lazy`), and efficient asset management.
- **Interactive Components**: Custom-built interactive elements such as the `ProductShowcase`, `LifeAtEvolvex` sections, and a global `EnquiryOverlay` for seamless lead capture.
- **Robust Routing**: Client-side routing managed by **React Router DOM v7**, ensuring smooth transitions and state connectivity.

## Tech Stack

### Frontend Core
- **React 19**: The latest version of the library for web and native user interfaces.
- **Vite**: Next-generation frontend tooling for ultra-fast development and bundling.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Animation & Interaction
- **Framer Motion**: Production-ready motion library for React.
- **GSAP (GreenSock Animation Platform)**: Professional-grade JavaScript animation for complex sequences.
- **@react-three/fiber & @react-three/drei**: React reconciler for Three.js, enabling 3D graphics.
- **Lucide React**: Beautiful & consistent icon library.

### Utilities
- **clsx & tailwind-merge**: For conditional and conflict-free class name composition.
- **react-router-dom**: Declarative routing for React web applications.

## Project Structure

The project follows a modular and scalable directory structure:

```text
evolvex-website/
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   ├── assets/              # Imported static assets
│   ├── components/          # Component Library
│   │   ├── icons/           # SVG Icon components
│   │   ├── layout/          # Structural components (Navbar, Footer, Layout, Overlay)
│   │   ├── sections/        # Page-specific sections (Hero, Features, Testimonials)
│   │   └── ui/              # Reusable atomic UI elements (Buttons, Cards, Effects)
│   ├── constants/           # Global constants and configuration
│   ├── data/                # Static data files (mock data, content arrays)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Third-party library configurations
│   ├── pages/               # Application route views (Home, About, Services, etc.)
│   ├── scripts/             # Utility scripts
│   ├── services/            # API service layers
│   ├── styles/              # Global CSS and Tailwind directives
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Main Router configuration
│   └── main.jsx             # Entry point
├── .gitignore               # Git ignore rules
├── components.json          # UI Component configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## Component Architecture

This project strictly separates concerns between layout, sections, and UI primitives:

- **`src/components/ui/`**: Contains pure, stateless components often enhanced with animations. Examples include:
  - `AuroraText.jsx`, `FloatingLines.jsx`, `DotGrid.jsx` (Visual Effects)
  - `StatefulButton.jsx`, `Card.jsx` (Interactive Primitives)
  - `ScrollReveal.jsx` (Animation Wrappers)

- **`src/components/sections/`**: Composes UI primitives into business-logic-rich sections.
  - `ProductShowcase.jsx`: Interactive demo area.
  - `LifeAtEvolvex.jsx`: Cultural showcase.
  - `CareersCTA.jsx`, `WhyBusinessesChoose.jsx`: Conversion-focused sections.

- **`src/components/layout/`**: Manages global application state and structure.
  - `Layout.jsx`: Wraps pages, handling the `EnquiryOverlay` and global navigation.
  - `Navbar.jsx` / `Footer.jsx`: Standard navigation elements.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/pranav107-ui/Evolvex-AI-website.git
    cd evolvex-website
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` to view it in the browser.

### Production Build

Build the application for production deployment (generates `dist/` folder):
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the ISC License.
